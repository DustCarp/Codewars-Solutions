The emperor of an archipelago nation has asked you to design a network of bridges to connect all the islands of his country together. But he wants to make the bridges out of gold. To see if he can afford it, he needs you to find the shortest total bridge length that can connect all the islands.

Each island's bridges will begin at the same point (the centre of the island), so that all the bridges connect to each other.

As your input, you will be provided with the Cartesian coordinates of the centre of each island as a array of [x, y] arrays – for example, an island at [1, 1] is 1 metre north of an island at [1, 0].

Your function should return the minimum total bridge length, in metres, that can connect all the islands.

Be warned – this country has a lot of islands, so your algorithm must be fast enough to calculate the bridge lengths for 15,000 islands without timing out.

The values of x and y may be any real numbers from -10,000 to 10,000.


function bridge(islands) {
    const shortestBridges = Array(islands.length).fill(Infinity);
    let totalDist = 0;
    let current = islands.pop();
    while (islands.length > 0) {
        for (let index in islands) {
            const distToCurrent = Math.sqrt((islands[index][0] - current[0]) ** 2 + (islands[index][1] - current[1]) ** 2);
            if (distToCurrent < shortestBridges[index]) shortestBridges[index] = distToCurrent;
        }
        const [shortestDist, shortestIdx] = shortestBridges.reduce((acc, e, i) => acc[0] < e ? acc : [e, i], [Infinity, null]);
        totalDist += shortestDist;
        current = islands[shortestIdx];
        shortestBridges.splice(shortestIdx, 1);
        islands.splice(shortestIdx, 1);
    }
    return totalDist;
}