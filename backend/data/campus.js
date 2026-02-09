const Graph = require("../classes/graph");
const dgram = require("node:dgram");
(async () => {
    const campus = new Graph("campus");

    await campus.addNode('Dormitory №20 Entrance 1', [22.365083, 113.539671], null, true);
    await campus.addNode('Dormitory №20 Entrance 2', [22.362232, 113.544995], null, true);
    await campus.addNode('Dormitory №20 Entrance 3', [22.365080, 113.540008], null, true);
    await campus.addNode('Hongyi building', [22.368059, 113.541039], null, true);
    await campus.addNode('East gate', [22.367168, 113.545280]);
    await campus.addNode('Building T1', [22.366198, 113.543858], null, true);
    await campus.addNode('Dormitory №19 Entrance 1', [22.365363, 113.539671], null, true);
    await campus.addNode('Dormitory №19 Entrance 2', [22.365344, 113.539847], null, true);
    await campus.addNode('Dormitory №19 Entrance 3', [22.365348, 113.540095], null, true);
    await campus.addNode('Dormitory №16', [22.365029, 113.539874], null, true);

    await campus.addNode('22.367275, 113.544880', [22.367275, 113.544880]);
    await campus.addNode('22.366182, 113.544300', [22.366182, 113.544300]);
    await campus.addNode('22.366319, 113.543953', [22.366319, 113.543953]);
    await campus.addNode('22.366475, 113.543623', [22.366475, 113.543623]);
    await campus.addNode('22.366066, 113.544259', [22.366066, 113.544259]);
    await campus.addNode('22.365812, 113.544095', [22.365812, 113.544095]);
    await campus.addNode('22.365489, 113.543882', [22.365489, 113.543882]);
    await campus.addNode('22.365159, 113.543665', [22.365159, 113.543665]);
    await campus.addNode('22.365163, 113.543197', [22.365163, 113.543197]);
    await campus.addNode('22.365135, 113.542967', [22.365135, 113.542967]);
    await campus.addNode('22.365145, 113.542593', [22.365145, 113.542593]);
    await campus.addNode('22.365147, 113.542328', [22.365147, 113.542328]);
    await campus.addNode('22.365123, 113.542061', [22.365123, 113.542061]);
    await campus.addNode('22.365130, 113.541675', [22.365130, 113.541675]);
    await campus.addNode('22.365130, 113.541179', [22.365130, 113.541179]);
    await campus.addNode('22.365168, 113.540755', [22.365168, 113.540755]);
    await campus.addNode('22.365144, 113.540375', [22.365144, 113.540375]);
    await campus.addNode('22.365162, 113.540256', [22.365162, 113.540256]);
    await campus.addNode('22.365164, 113.539925', [22.365164, 113.539925]);
    await campus.addNode('22.365263, 113.540263', [22.365263, 113.540263]);
    await campus.addNode('22.365507, 113.540227', [22.365507, 113.540227]);
    await campus.addNode('22.365748, 113.540189', [22.365748, 113.540189]);
    await campus.addNode('22.365823, 113.540177', [22.365823, 113.540177]);
    await campus.addNode('22.365201, 113.539570', [22.365201, 113.539570]);
    await campus.addNode('22.365443, 113.539570', [22.365443, 113.539570]);
    await campus.addNode('22.365445, 113.539863', [22.365445, 113.539863]);
    await campus.addNode('22.365435, 113.540232', [22.365435, 113.540232]);
    await campus.addNode('22.365189, 113.539670', [22.365189, 113.539670]);
    await campus.addNode('22.365165, 113.540014', [22.365165, 113.540014]);
    await campus.addNode('22.365457, 113.539686', [22.365457, 113.539686]);
    await campus.addNode('22.365495, 113.539687', [22.365495, 113.539687]);
    await campus.addNode('22.365503, 113.539959', [22.365503, 113.539959]);
    await campus.addNode('22.365175, 113.540113', [22.365175, 113.540113]);

    await campus.addEdge('22.365503, 113.539959', '22.365495, 113.539687', 28, 2);
    await campus.addEdge('22.365445, 113.539863', '22.365435, 113.540232', 35, 2);
    await campus.addEdge('22.365457, 113.539686', '22.365443, 113.539570', 11, 2);
    await campus.addEdge('22.365457, 113.539686', '22.365445, 113.539863', 21, 2);
    await campus.addEdge('22.365443, 113.539570', '22.365201, 113.539570', 27, 2);
    await campus.addEdge('22.365201, 113.539570', '22.365189, 113.539670', 10, 2);
    await campus.addEdge('22.365189, 113.539670', '22.365164, 113.539925', 23, 2);
    await campus.addEdge('22.365823, 113.540177', '22.365748, 113.540189', 9, 2);
    await campus.addEdge('22.365748, 113.540189', '22.365507, 113.540227', 25, 2);
    await campus.addEdge('22.365435, 113.540232', '22.365263, 113.540263', 19, 2);
    await campus.addEdge('22.365435, 113.540232', '22.365507, 113.540227', 6, 2);
    await campus.addEdge('22.365263, 113.540263', '22.365162, 113.540256', 13, 2);
    await campus.addEdge('22.365175, 113.540113', '22.365162, 113.540256', 13, 2);
    await campus.addEdge('22.365175, 113.540113', '22.365165, 113.540014', 8, 2);
    await campus.addEdge('22.365164, 113.539925', '22.365165, 113.540014', 15, 2);
    await campus.addEdge('22.365162, 113.540256', '22.365144, 113.540375', 13, 2);
    await campus.addEdge('22.365144, 113.540375', '22.365168, 113.540755', 37, 2);
    await campus.addEdge('22.365168, 113.540755', '22.365130, 113.541179', 48, 2);
    await campus.addEdge('22.365130, 113.541179', '22.365130, 113.541675', 50, 2);
    await campus.addEdge('22.365130, 113.541675', '22.365123, 113.542061', 38, 2);
    await campus.addEdge('22.365123, 113.542061', '22.365147, 113.542328', 29, 2);
    await campus.addEdge('22.365147, 113.542328', '22.365145, 113.542593', 28, 2);
    await campus.addEdge('22.365145, 113.542593', '22.365135, 113.542967', 38, 1);
    await campus.addEdge('22.365135, 113.542967', '22.365163, 113.543197', 24, 1);
    await campus.addEdge('22.365163, 113.543197', '22.365159, 113.543665', 49, 1);
    await campus.addEdge('22.365159, 113.543665', '22.365489, 113.543882', 40, 1);
    await campus.addEdge('22.365489, 113.543882', '22.365812, 113.544095', 45, 1);
    await campus.addEdge('22.365812, 113.544095', '22.366066, 113.544259', 31, 1);
    await campus.addEdge('22.366066, 113.544259', '22.366182, 113.544300', 12, 1);
    await campus.addEdge('22.366475, 113.543623', '22.366319, 113.543953', 40, 1);
    await campus.addEdge('22.366319, 113.543953', '22.366182, 113.544300', 37, 1);
    await campus.addEdge('22.366319, 113.543953', 'Building T1', 16, 1);
    await campus.addEdge('22.367275, 113.544880', 'East gate', 42, 3);
    await campus.addEdge('22.367275, 113.544880', '22.366182, 113.544300', 138, 3);
    await campus.addEdge('22.365457, 113.539686', '22.365495, 113.539687', 5, 3);
    await campus.addEdge('Building T1', '22.366182, 113.544300', 41, 3);
    await campus.addEdge('Dormitory №16', '22.365168, 113.540755', 14, 3);
    await campus.addEdge('Dormitory №20 Entrance 1', '22.365189, 113.539670', 14, 3);
    await campus.addEdge('Dormitory №20 Entrance 2', '22.365164, 113.539925', 13, 3);
    await campus.addEdge('Dormitory №20 Entrance 3', '22.365165, 113.540014', 11, 3);
    await campus.addEdge('Dormitory №19 Entrance 1', '22.365189, 113.539670', 18, 3);
    await campus.addEdge('Dormitory №19 Entrance 2', '22.365164, 113.539925', 17, 3);
    await campus.addEdge('Dormitory №19 Entrance 2', '22.365445, 113.539863', 13, 3);
    await campus.addEdge('Dormitory №19 Entrance 3', '22.365175, 113.540113', 19, 3);

    // plugs
    await campus.addEdge('Dormitory №20 Entrance 2', 'Hongyi building', 950, 3);
    await campus.addEdge('Hongyi building', 'East gate', 1300, 3);

    console.log(campus.toString());

    // Run Dijkstra from Dormitory №20 Entrance 2
    const result = await campus.dijkstra('Dormitory №20 Entrance 2', 'time');

    console.log(result['East gate']); // print the specific node result


    // Run Dijkstra for all nodes
    const resultDijkstraAll = await campus.dijkstraAll('time');

    console.log('\n\ndijkstraAll:')
    console.log(resultDijkstraAll["Dormitory №20 Entrance 2"]['East gate']);


    // Run BellmanFord
    const resultBellmanFord = await campus.bellmanFord('Dormitory №20 Entrance 2', 'time');

    console.log('\n\nbellmanFord:')
    console.log(resultBellmanFord['East gate']);


    // Run BellmanFord for all nodes
    const resultBellmanFordAll = await campus.bellmanFordAll('time');

    console.log('\n\nbellmanFordAll:')
    console.log(resultBellmanFordAll["Dormitory №20 Entrance 2"]['East gate']);


    // Run floydWarshall for all nodes
    const floydWarshall = await campus.floydWarshall('time');

    console.log('\n\nfloydWarshall:')
    console.log(resultBellmanFordAll["Dormitory №20 Entrance 2"]['East gate']);
})()