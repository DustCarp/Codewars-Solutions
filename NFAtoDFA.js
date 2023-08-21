// What is DFA and NFA
// For more information about definition NFA and DFA for this kata see this and this katas.

// In general terms, DFA and NFA are described by:

// a set of states
// one (for DFA) or more start states
// a set of transitions
// a set of accepted states
// Both separate set of all posible strings on two group:

// accepted
// not accepted
// String is accepted if a path exists from any start state to any accepted state by transitions corresponding to the characters in the string.

// DFA contains no more than one transition for each pair of state and character. NFA can contains multiple transition for there pairs.

// In addition NFA can contain empty transitions.

// An interesting fact, for any NFA, you can construct an equivalent DFA.

// Task
// Write a function NFAtoDFA that to the given NFA construct an equivalent (accepted the same strings) DFA.

// Function get NFA in following format:

// Start states (array of number)
// Transitions (array of [number, symbol, number])
// Accepted states (array of numbers)
// And must return answer array of 3 elements:

// answer[0] - Start state of DFA (number)
// answer[1] - Transition of DFA (array of [number, symbol, number])
// answer[2] - Accepted states of DFA (array of numbers)
// Note: In some definitions of DFA, also indicate the need for a transition for each state and each symbol to have one transition, in this kata there can be 0.


function NFAtoDFA(startStates, transitions, acceptStates) {
  
  // NFA with epsilon move to DFA Conversion
  acceptStates = new Set(acceptStates);
  let symbols = new Set(transitions.map(t=>t[1]).filter(x=>x!=''));
  let states = new Set([...transitions.map(x=>x[0]), ...transitions.map(x=>x[2])]);
  let ts = transitions
    .reduce((o,[s1,a,s2])=>(o[[s1,a]]=(o[[s1,a]]||new Set()).add(s2),o),{});
  
  let ecs = {};
  for (let state of states) {
    ecs[state] = [state]
    const inc = new Set([state])
    const stk = [...ts[[state,'']]||[]]
    while(stk.length > 0) {
      const curr = stk.pop()
      if (inc.has(curr)) continue
      inc.add(curr)
      ecs[state].push(curr)
      for(let next of ts[[curr,'']]||[]) {
        stk.push(next)
      }
    }
  }
  
  let tst = transitions
    .filter(([s1,a,s2])=>a!='')
    .reduce((o,[s1,a,s2])=>(o[[s1,a]]=(o[[s1,a]]||new Set()).add(s2),o),{});
  for (let state of Object.keys(ecs)) {
    tst[[state,'']] = new Set(ecs[state]);
  }
  
  let s = 0;
  let q = new Set(startStates.flatMap(s=>[...tst[[s,'']]||[]]));
  let k = q => [...q].sort().join``;
  let dfaStateLookup = {};
  let dfaTransitions = [];
  let dfaAcceptStates = new Set();
  let dfaSeen = new Set();

  let stk = [q];
  while (stk.length > 0) {
    q = stk.pop();
    let n = k(q);
    if (dfaSeen.has(n))
      continue;
    dfaSeen.add(n);
    if (!dfaStateLookup.hasOwnProperty(n))
      dfaStateLookup[n] = s++;
    if ([...q].some(e=>acceptStates.has(e))) {
      dfaAcceptStates.add(dfaStateLookup[n]);
    }
    for (let symbol of symbols) {
      let nxt = new Set([...q]
        .flatMap(e=>[...tst[[e,symbol]]||[]])
        .flatMap(e=>[...tst[[e,'']]||[]]));
      if (nxt.size == 0) continue;
      let m = k(nxt);
      if (!dfaStateLookup.hasOwnProperty(m)) {
        dfaStateLookup[m] = s++;
        stk.push(nxt);
      }
      dfaTransitions.push(
        [dfaStateLookup[n],symbol,dfaStateLookup[m]]);
    }
  }
  
  return [0, dfaTransitions, [...dfaAcceptStates]];
}

