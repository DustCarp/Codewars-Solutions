Gymbro is at a Unique gym with unique bars for Bench pressing. Bars are made up of 40 hyphens ('-') each weighing 0.5kg, represented like this: ----------------------------------------

The plates are represented in the format '|Xkg|', where 'X' is the weight of the plate. For Example: ['|4kg|', '|22kg|', '|10kg|', '|24kg|', '|171kg|']

Plates weighing less than 10 kg have length of 5 hyphens, plates weighing between 10 kg and 99 kg have length of 6 hyphens and Plates weighing between 100 kg and 999 kg have length of 7 hyphens.

Gymbro has a desired weight w he wants to benchpress, for that he has to put plates on the bar, but You don't actually put plates on the bar, rather, you replace hyphens with plates,

For example, if you put a 4 kg plate on the bar, it would look like this: --|4kg|--------------------------------- length of the bar is still 40

5 hyphens were replaced by 4kg plate. To calculate the new weight of the bar after adding a plate, you need to subtract the weight of the mini bars that the plate replaces. For instance, if you replaced 5 hyphens (20 kg - 5 * 0.5 kg = 17.5 kg) with a 4 kg plate, the bar's new weight would be 17.5 kg + 4 kg = 21.5 kg.

Ｒｕｌｅｓ:

There should be an equal amount of plates on each side
Plates must always be 2 hyphens away from the edge of the bar on each side. --|4kg||2kg|----------------|13kg||9kg|- is wrong!
Each plate is available once, but if there are multiple same weighted plates you can use them as many times as it's available
Weight and Plate distribution matters. Sequentially arrange weight plates from heaviest to lightest, --|30kg||5kg|--------------|7kg||34kg|-- biggest plate on the Right, next biggest on the left, next biggest next to biggest and etc, with the heaviest Weight on the Right!!!. Heavier plates should be closer to edges. See more example at test samples
if there are multiple solutions, output the one which requires the least amount of plates, and which has the least heavy plate --|37kg||34kg|------------|36kg||40kg|-- should equal --|39kg||23kg|------------|32kg||53kg|--, Because second bar has the lightest plate 23
Plates shouldn't cross middle point of the bar. Since length of bar is 40, middle point should be 2 hyphens in the middle: -------------------*--*-------------------. * -- * it the middle point. --|28kg||28kg||10kg||20kg||28kg||30kg|-- is wrong. --|10kg||1kg||1kg|--|1kg||10kg||100kg|-- is also wrong since 2 middle hyphens aren't in the center
Your task is to create a function that takes two parameters: w (the desired weight Gymbro wants to bench, targetSum in JS) and ap (a list of available plates, WeightList in JS). The function should calculate the weight distribution on the bar using the available plates while adhering to the rules mentioned above, and return a visual representation of the bar.

𝗘𝘅𝗮𝗺𝗽𝗹𝗲:

w = 40 Desired Weight.

ap = ['|3kg|', '|7kg|', '|1kg|', '|2kg|', '|10kg|', '|4kg|', '|11kg|'] available plates.

result = configure_bar(w, ap) return result

Starting bar: ---------------------------------------- (40 hyphens, each 0.5 kg, Bar weight: 20 kg)
add 10kg: --|10kg|-------------------------------- (Replaced 6 '-',new weight:20kg - 6*0.5kg+10kg = 27kg)
add 7kg: --|10kg|-------------------------|7kg|-- (Replaced 5 '-', new weight: 27kg-5*0.5kg+7kg=31.5kg)
add 11kg: --|10kg|-------------------|7kg||11kg|-- (Replaced 6 '-',weight: 39.5)
add 3kg: --|10kg||3kg|--------------|7kg||11kg|--
 ( Replaced 5 '-',weight: 40 kg)
Output should be: "--|10kg||3kg|--------------|7kg||11kg|--"

𝗜𝗳 𝗱𝗲𝘀𝗶𝗿𝗲𝗱 𝗯𝗲𝗻𝗰𝗵𝗽𝗿𝗲𝘀𝘀 𝘄𝗲𝗶𝗴𝗵𝘁 𝗰𝗮𝗻'𝘁 𝗯𝗲 𝗮𝗰𝗵𝗶𝗲𝘃𝗲𝗱 𝘄𝗶𝘁𝗵 𝗴𝗶𝘃𝗲𝗻 𝗽𝗹𝗮𝘁𝗲𝘀 𝗼𝗿 𝗮𝗰𝗵𝗶𝗲𝘃𝗶𝗻𝗴 𝗱𝗲𝘀𝗶𝗿𝗲𝗱 𝘄𝗲𝗶𝗴𝗵𝘁 𝗯𝗿𝗲𝗮𝗸𝘀 𝗿𝘂𝗹𝗲𝘀, 𝗿𝗲𝘁𝘂𝗿𝗻":("

in rare cases where Desired weight is 20, don't return an empty bar, return the correct config of the bar using plates, if it can't be achieved return :(

    unction configureBar(goal, weights, unhappy = ":(") {

  weights = weights
    .map(w       => ({ glyph: w, size: w.length, value: +w.slice(1, -3) }))
    .sort((a, b) => (b.value - a.value));
  
  let mini       = 0.5, 
      size       = 40,
      padding    = 1,
      margin     = 2,
      threshold  = (mini * 5),
      capacity   = (size >> 1) - (padding + margin),
      buffer     = (weights.filter(w => w.value < threshold).reduce((a, b) => a + (threshold - b.value), 0));

  let left       = { size: 0, weights: [] },
      right      = { size: 0, weights: [] },
      best       = { left: [], right: [], ok: false },
      total      = (mini * size);
      
  let dfs = i => {
    
    if (total > goal + buffer || left.size > capacity || right.size > capacity) return;
    if (best.ok && left.weights.length > best.left.length) return;
    if (total == goal && left.weights.length > 0) { checkCurrentSolution(); return; }
    if (i + 1 >= weights.length) return;
    
    let undoRight = act(weights[i], right);
    
    for (let j = i + 1; j < weights.length; j++) {
      let undoLeft = act(weights[j], left);
      dfs(j + 1);
      undoLeft();
    }
    
    undoRight();
    dfs(i + 1);
  };
  
  let act = (weight, bag) => {
    
    let size = weight.size;
    let delta = weight.value - mini * size;
    bag.size += size;
    bag.weights.push(weight);
    total += delta;
    
    return () => {
      total -= delta;
      bag.weights.pop();
      bag.size -= size;
    }
  }
  
  let isBetter = () => {
    
    let a = best.left.concat(best.right).map(w => w.value).sort((a, b) => a - b);
    let b = left.weights.concat(right.weights).map(w => w.value).sort((a, b) => a - b);
    
    for (let i = 0; i < a.length; i++) {
      if (b[i] < a[i]) return true;
      if (b[i] > a[i]) return false;
    }
    
    return false;
  }
  
  let checkCurrentSolution = () => {
    
    if (       (!best.ok) 
            || (left.weights.length < best.left.length)
            || (left.weights.length == best.left.length && isBetter())   
       ) {
      best = { left: left.weights.slice(), right: right.weights.slice(), ok: true };
    }
    
  };
  
  let renderBestSolution = () => {
    
    let bar = "-".repeat(size).split("");
    let render = (i, glyph) => { for (let j = 0; j < glyph.length; j++) bar[i + j] = glyph[j]; };
    
    for (let i = 0, j = 2; i < best.left.length; i++) {
      let weight = best.left[i];
      render(j, weight.glyph);
      j += weight.size;
    }
    
    for (let i = 0, j = 2; i < best.right.length; i++) {
      let weight = best.right[i];
      render(bar.length - j - weight.size, weight.glyph);
      j += weight.size;
    }
    
    return bar.join("");
  };
  
  dfs(0);
  
  return best.ok ? renderBestSolution() : unhappy;
}