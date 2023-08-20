
 * Given an account address on the ethereum blockchain find all the addresses
 * that were sent Ether from that address
 * @param {string} address - The hexidecimal address for the account
 */
 
let findMyEther = s => web3.eth.getBlockNumber().then(n => Promise.all(Array(n + 1).fill(0).map((_, i) => web3.eth.getBlock(i, true)))).then(a => Promise.all([].concat(...a.map(b => b.transactions)))).then(a => Promise.all(a.filter(t => t.from === s).map(t => t.to)));