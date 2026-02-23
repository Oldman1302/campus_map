const Graph = require("../classes/graph");

/**
 * Builds and returns campus graph.
 * @returns {Promise<Graph>}
 */
async function loadCampusGraph() {
    const campus = new Graph("campus");

    await campus.addNode('Dormitory №20 Entrance 1', [22.365083, 113.539671], null, true);
    await campus.addNode('Dormitory №20 Entrance 2', [22.362232, 113.544995], null, true);
    await campus.addNode('Dormitory №20 Entrance 3', [22.365080, 113.540008], null, true);
    await campus.addNode('Hongyi building', [22.368059, 113.541039], null, true);
    await campus.addNode('East gate', [22.367168, 113.545280], null, true);
    await campus.addNode('Building T1', [22.366198, 113.543858], null, true);
    await campus.addNode('Dormitory №19 Entrance 1', [22.365363, 113.539671], null, true);
    await campus.addNode('Dormitory №19 Entrance 2', [22.365344, 113.539847], null, true);
    await campus.addNode('Dormitory №19 Entrance 3', [22.365348, 113.540095], null, true);
    await campus.addNode('Dormitory №16', [22.365029, 113.539874], null, true);

    await campus.addNode('22.367268, 113.544894', [22.367268, 113.544894], null, false);
    await campus.addNode('22.366176, 113.544281', [22.366182, 113.544250], null, false)
    await campus.addNode('22.366319, 113.543953', [22.366319, 113.543953], null, false);
    await campus.addNode('22.366475, 113.543623', [22.366475, 113.543623], null, false);
    await campus.addNode('22.366066, 113.544259', [22.366066, 113.544259], null, false);
    await campus.addNode('22.365812, 113.544095', [22.365812, 113.544095], null, false);
    await campus.addNode('22.365489, 113.543882', [22.365489, 113.543882], null, false);
    await campus.addNode('22.365159, 113.543665', [22.365159, 113.543665], null, false);
    await campus.addNode('22.365163, 113.543197', [22.365163, 113.543197], null, false);
    await campus.addNode('22.365135, 113.542967', [22.365135, 113.542967], null, false);
    await campus.addNode('22.365145, 113.542593', [22.365145, 113.542593], null, false);
    await campus.addNode('22.365147, 113.542328', [22.365147, 113.542328], null, false);
    await campus.addNode('22.365123, 113.542061', [22.365123, 113.542061], null, false);
    await campus.addNode('22.365130, 113.541675', [22.365130, 113.541675], null, false);
    await campus.addNode('22.365130, 113.541179', [22.365130, 113.541179], null, false);
    await campus.addNode('22.365168, 113.540755', [22.365168, 113.540755], null, false);
    await campus.addNode('22.365144, 113.540375', [22.365144, 113.540375], null, false);
    await campus.addNode('22.365162, 113.540256', [22.365162, 113.540256], null, false);
    await campus.addNode('22.365164, 113.539925', [22.365164, 113.539925], null, false);
    await campus.addNode('22.365263, 113.540263', [22.365263, 113.540263], null, false);
    await campus.addNode('22.365507, 113.540227', [22.365507, 113.540227], null, false);
    await campus.addNode('22.365748, 113.540189', [22.365748, 113.540189], null, false);
    await campus.addNode("22.365576, 113.540225", [22.365576, 113.540225], null, false)
    await campus.addNode('22.365823, 113.540177', [22.365823, 113.540177], null, false);
    await campus.addNode('22.365201, 113.539570', [22.365201, 113.539570], null, false);
    await campus.addNode('22.365443, 113.539570', [22.365443, 113.539570], null, false);
    await campus.addNode('22.365445, 113.539863', [22.365445, 113.539863], null, false);
    await campus.addNode('22.365461, 113.540048', [22.365461, 113.540048], null, false);
    await campus.addNode('22.365435, 113.540232', [22.365435, 113.540232], null, false);
    await campus.addNode('22.365189, 113.539670', [22.365189, 113.539670], null, false);
    await campus.addNode('22.365165, 113.540014', [22.365165, 113.540014], null, false);
    await campus.addNode('22.365457, 113.539686', [22.365457, 113.539686], null, false);
    await campus.addNode('22.365495, 113.539687', [22.365495, 113.539687], null, false);
    await campus.addNode('22.365503, 113.539959', [22.365503, 113.539959], null, false);
    await campus.addNode('22.365506, 113.540089', [22.365506, 113.540089], null, false);
    await campus.addNode('22.365175, 113.540113', [22.365175, 113.540113], null, false);


    await campus.addEdge('22.367268, 113.544894', 'East gate', 42, 33);
    await campus.addEdge('22.367268, 113.544894', '22.366176, 113.544281', 138, 147);
    await campus.addEdge('22.366319, 113.543953', '22.366176, 113.544281', 37, 27);
    await campus.addEdge('22.366475, 113.543623', '22.366319, 113.543953', 40, 34);
    await campus.addEdge('22.366319, 113.543953', 'Building T1', 16, 13);
    await campus.addEdge('22.366066, 113.544259', '22.366176, 113.544281', 12, 8);
    await campus.addEdge('22.365812, 113.544095', '22.366066, 113.544259', 31, 26);
    await campus.addEdge('22.365489, 113.543882', '22.365812, 113.544095', 45, 34);
    await campus.addEdge('22.365159, 113.543665', '22.365489, 113.543882', 40, 32);
    await campus.addEdge('22.365163, 113.543197', '22.365159, 113.543665', 49, 36);
    await campus.addEdge('22.365135, 113.542967', '22.365163, 113.543197', 24, 23);
    await campus.addEdge('22.365145, 113.542593', '22.365135, 113.542967', 38, 23);
    await campus.addEdge('22.365147, 113.542328', '22.365145, 113.542593', 28, 25);
    await campus.addEdge('22.365123, 113.542061', '22.365147, 113.542328', 29, 25);
    await campus.addEdge('22.365130, 113.541675', '22.365123, 113.542061', 38, 29);
    await campus.addEdge('22.365130, 113.541179', '22.365130, 113.541675', 50, 40);
    await campus.addEdge('22.365168, 113.540755', '22.365130, 113.541179', 48, 30);
    await campus.addEdge('Dormitory №16', '22.365168, 113.540755', 14, 13);
    await campus.addEdge('22.365144, 113.540375', '22.365168, 113.540755', 37, 39);
    await campus.addEdge('22.365162, 113.540256', '22.365144, 113.540375', 13, 10);
    await campus.addEdge('22.365263, 113.540263', '22.365162, 113.540256', 13, 11);
    await campus.addEdge('22.365435, 113.540232', '22.365263, 113.540263', 19, 15);
    await campus.addEdge('22.365435, 113.540232', '22.365507, 113.540227', 6, 8);
    await campus.addEdge('22.365576, 113.540225', '22.365507, 113.540227', 8, 7);
    await campus.addEdge('22.365576, 113.540225', '22.365748, 113.540189', 18, 15)
    await campus.addEdge('22.365823, 113.540177', '22.365748, 113.540189', 9, 9);
    await campus.addEdge('22.365445, 113.539863', '22.365461, 113.540048', 19, 18);
    await campus.addEdge('22.365435, 113.540232', '22.365461, 113.540048', 16, 13);
    await campus.addEdge('Dormitory №19 Entrance 2', '22.365445, 113.539863', 13, 7);
    await campus.addEdge('22.365457, 113.539686', '22.365445, 113.539863', 21, 25);
    await campus.addEdge('22.365457, 113.539686', '22.365495, 113.539687', 5, 4);
    await campus.addEdge('22.365503, 113.539959', '22.365495, 113.539687', 28, 25);
    await campus.addEdge('22.365503, 113.539959', '22.365506, 113.540089', 14, 18);
    await campus.addEdge('22.365506, 113.540089', '22.365461, 113.540048', 6, 9);
    await campus.addEdge('22.365506, 113.540089', '22.365507, 113.540227', 14, 8);
    await campus.addEdge('22.365457, 113.539686', '22.365443, 113.539570', 11, 14);
    await campus.addEdge('22.365443, 113.539570', '22.365201, 113.539570', 27, 27);
    await campus.addEdge('22.365201, 113.539570', '22.365189, 113.539670', 10, 14); // ???
    await campus.addEdge('Dormitory №20 Entrance 1', '22.365189, 113.539670', 14, 10);
    await campus.addEdge('Dormitory №19 Entrance 1', '22.365189, 113.539670', 18, 3);
    await campus.addEdge('22.365189, 113.539670', '22.365164, 113.539925', 23, 16);
    await campus.addEdge('Dormitory №20 Entrance 2', '22.365164, 113.539925', 13, 13);
    await campus.addEdge('Dormitory №19 Entrance 2', '22.365164, 113.539925', 17, 15);
    await campus.addEdge('22.365164, 113.539925', '22.365165, 113.540014', 15, 21);
    await campus.addEdge('Dormitory №20 Entrance 3', '22.365165, 113.540014', 11, 14);
    await campus.addEdge('22.365175, 113.540113', '22.365165, 113.540014', 8, 8);
    await campus.addEdge('Dormitory №19 Entrance 3', '22.365175, 113.540113', 19, 13);
    await campus.addEdge('22.365175, 113.540113', '22.365162, 113.540256', 13, 10);

    // plugs
    await campus.addEdge('Dormitory №20 Entrance 2', 'Hongyi building', 950, 3);
    await campus.addEdge('Hongyi building', 'East gate', 1300, 3);

    return campus;
    // console.log(campus.toString());
    //
    //
    // // Run Dijkstra from Dormitory №20 Entrance 2
    // const result = await campus.dijkstra('Dormitory №20 Entrance 2', 'distance');
    //
    // console.log('\n\ndijkstra:')
        // console.log(result['East gate']); // print the specific node result
    //
    //
    // // Run Dijkstra for all nodes
    // const resultDijkstraAll = await campus.dijkstraAll('distance');
    //
    // console.log('\n\ndijkstraAll:')
    // console.log(resultDijkstraAll["Dormitory №20 Entrance 2"]['East gate']);
    //
    //
    // // Run BellmanFord
    // const resultBellmanFord = await campus.bellmanFord('Dormitory №20 Entrance 2', 'distance');
    //
    // console.log('\n\nbellmanFord:')
    // console.log(resultBellmanFord['East gate']);
    //
    //
    // // Run BellmanFord for all nodes
    // const resultBellmanFordAll = await campus.bellmanFordAll('time');
    //
    // console.log('\n\nbellmanFordAll:')
    // console.log(resultBellmanFordAll["Dormitory №20 Entrance 2"]['East gate']);
    //
    //
    // // Run floydWarshall for all nodes
    // const resultFloydWarshall = await campus.floydWarshall('distance');
    //
    // console.log('\n\nfloydWarshall:')
    // console.log(resultFloydWarshall["Dormitory №20 Entrance 2"]['East gate']);
    //
    //
    // // Run johnson for all nodes
    // const resultJohnson = await campus.johnson('time');
    //
    // console.log('\n\njohnson:')
    // console.log(resultJohnson["Dormitory №20 Entrance 2"]["East gate"]);
    //
    //
    // // Run A* from Dormitory №20 Entrance 2
    // const resultAStar = await campus.aStar('Dormitory №20 Entrance 2', 'East gate', 'time');
    //
    // console.log('\n\nA*:')
    // console.log(resultAStar);
    //
    //
    // // Run A* for all nodes
    // const resultAStarAll = await campus.aStarAll('time');
    //
    // console.log('\n\nA* for all nodes:')
    // console.log(resultAStarAll["Dormitory №20 Entrance 2"]["East gate"]);
}

module.exports = { loadCampusGraph };
