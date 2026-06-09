const Graph = require("../classes/graph");

/**
 * Builds and returns campus graph.
 * @returns {Promise<Graph>}
 */
async function loadCampusGraph() {
    const campus = new Graph("campus");

    await campus.addNode('Dormitory №16', [22.365056, 113.540755], null, true, 'dormitory');

    await campus.addNode('Dormitory №17', [22.365993, 113.539877], null, true, 'dormitory');
    await campus.addNode('Dormitory №17 Entrance 1', [22.365890, 113.539663], null, true, 'gate');
    await campus.addNode('Dormitory №17 Entrance 2', [22.365897, 113.539955], null, true, 'gate');
    await campus.addNode('Dormitory №17 Entrance 3', [22.365919, 113.540135], null, true, 'gate');
    await campus.addNode('Dormitory №17 Entrance 4', [22.366019, 113.539955], null, true, 'gate');

    await campus.addNode('Dormitory №18', [22.365642, 113.539881], null, true, 'dormitory');
    await campus.addNode('Dormitory №18 Entrance 1', [22.365587, 113.539656], null, true, 'gate');
    await campus.addNode('Dormitory №18 Entrance 2', [22.365590, 113.539955], null, true, 'gate');
    await campus.addNode('Dormitory №18 Entrance 3', [22.365612, 113.540138], null, true, 'gate');
    await campus.addNode('Dormitory №18 Entrance 4', [22.365717, 113.539955], null, true, 'gate');

    await campus.addNode('Dormitory №19', [22.365364, 113.539877], null, true, 'dormitory');
    await campus.addNode('Dormitory №19 Entrance 1', [22.365313, 113.539671], null, true, 'gate');
    await campus.addNode('Dormitory №19 Entrance 2', [22.365313, 113.539847], null, true, 'gate');
    await campus.addNode('Dormitory №19 Entrance 3', [22.365313, 113.540095], null, true, 'gate');

    await campus.addNode('Dormitory №20', [22.365056, 113.539878], null, true, 'dormitory');
    await campus.addNode('Dormitory №20 Entrance 1', [22.365094, 113.539715], null, true, 'gate');
    await campus.addNode('Dormitory №20 Entrance 2', [22.365094, 113.539898], null, true, 'gate');
    await campus.addNode('Dormitory №20 Entrance 3', [22.365094, 113.540047], null, true, 'gate');
    await campus.addNode('Dormitory №20 Entrance 4', [22.364996, 113.539715], null, true, 'gate');
    await campus.addNode('Dormitory №20 Entrance 5', [22.364996, 113.539852], null, true, 'gate'); // point 211
    await campus.addNode('Dormitory №20 Kitchen', [22.364996, 113.539814], null, true, 'kitchen');
    await campus.addNode('Dormitory №20 Public Toilet', [22.365094, 113.540198], null, true, 'toilet');

    await campus.addNode('Muslim cafe', [22.365433, 113.540379], null, true, 'cafe');
    await campus.addNode('满忆糖水', [22.365284, 113.540367], null, true, 'drink'); // point 251
    await campus.addNode('YOUNG ONCE', [22.365284, 113.540386], null, true, 'cafe'); // point 252
    await campus.addNode('台湾卤肉饭', [22.365319, 113.540404], null, true, 'cafe');
    await campus.addNode('台湾卤肉饭 Entrance 1', [22.365324, 113.540347], null, true, 'gate'); // point 255
    await campus.addNode('台湾卤肉饭 Entrance 2', [22.365284, 113.540437], null, true, 'gate'); // point 255

    await campus.addNode('Hongyi building', [22.370710, 113.535770], null, true, 'educational_building');

    await campus.addNode('East gate', [22.367168, 113.545280], null, true, "default"); // because main  East Gate is not working, it's closed
    await campus.addNode('East gate Entrance 1', [22.366021, 113.544787], null, true, "gate");
    await campus.addNode('East gate Entrance 1 (cars)', [22.365862, 113.544687], null, true, "gate"); // point 171
    await campus.addNode('East gate Entrance 2 (cars)', [22.365618, 113.544584], null, true, "gate"); // point 175
    await campus.addNode('East gate Entrance 2', [22.365478, 113.544478], null, true, "gate"); // point 178

    await campus.addNode('China post', [22.365332, 113.541287], null, true, 'post_office'); // point 213


    await campus.addNode('Complex building', [22.366319, 113.539931], null, true, "default"); // point 263
    await campus.addNode('Complex building Xiaomian noodles', [22.366213, 113.540067], null, true, 'cafe');
    await campus.addNode('Complex building Xiaomian noodles Entrance 1', [22.366184, 113.540168], null, true, 'gate');
    await campus.addNode('Complex building Xiaomian noodles Entrance 2', [22.366230, 113.540168], null, true, 'gate');
    await campus.addNode('Complex building Public Toilet', [22.366121, 113.540004], null, true, 'toilet'); // point 261
    await campus.addNode('Complex building 7 eleven', [22.366273, 113.540036], null, true, 'supermarket');
    await campus.addNode('Complex building 7 eleven Entrance 1', [22.366273, 113.540168], null, true, 'gate'); // point 257
    await campus.addNode('Complex building 7 eleven Entrance 2', [22.366273, 113.539970], null, true, 'gate'); // point 264
    await campus.addNode('Complex building Cotti coffee', [22.366388, 113.539774], null, true, 'drink'); // point 268
    await campus.addNode('Complex building KFC', [22.366417, 113.540036], null, true, 'cafe');
    await campus.addNode('Complex building KFC Entrance 1', [22.366360, 113.540139], null, true, 'gate'); // point 258
    await campus.addNode('Complex building KFC Entrance 2', [22.366430, 113.540139], null, true, 'gate'); // point 258
    await campus.addNode('Complex building 鹏泰超市', [22.366564, 113.539909], null, true, 'supermarket');
    await campus.addNode('Complex building 鹏泰超市 Entrance 1', [22.366633, 113.540035], null, true, 'gate'); // point 309
    await campus.addNode('Complex building 鹏泰超市 Entrance 2', [22.366508, 113.539731], null, true, 'gate'); // point 303
    await campus.addNode('Complex building Bakery', [22.366663, 113.539764], null, true, 'supermarket'); // point 305



    await campus.addNode('Building T1', [22.366198, 113.543858], null, true, 'dormitory');




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
    await campus.addNode('22.365201, 113.540376', [22.365201, 113.540376], null, false); // point 250
    await campus.addNode('22.365162, 113.540256', [22.365162, 113.540256], null, false);
    await campus.addNode('22.365164, 113.539925', [22.365164, 113.539925], null, false);
    await campus.addNode('22.365263, 113.540263', [22.365263, 113.540263], null, false);
    await campus.addNode('22.365276, 113.540318', [22.365276, 113.540318], null, false); // point 253
    await campus.addNode('22.365324, 113.540307', [22.365324, 113.540307], null, false); // point 254
    await campus.addNode('22.365507, 113.540227', [22.365507, 113.540227], null, false);
    await campus.addNode('22.365748, 113.540189', [22.365748, 113.540189], null, false);
    await campus.addNode("22.365576, 113.540225", [22.365576, 113.540225], null, false)
    await campus.addNode('22.365823, 113.540177', [22.365823, 113.540177], null, false);
    await campus.addNode('22.365201, 113.539570', [22.365201, 113.539570], null, false);
    await campus.addNode('22.365443, 113.539570', [22.365443, 113.539570], null, false);
    await campus.addNode('22.365741, 113.539574', [22.365741, 113.539574], null, false);
    await campus.addNode('22.365743, 113.539635', [22.365743, 113.539635], null, false);
    await campus.addNode('22.365730, 113.539635', [22.365730, 113.539635], null, false);
    await campus.addNode('22.365730, 113.539928', [22.365730, 113.539928], null, false);
    await campus.addNode('22.365730, 113.539991', [22.365730, 113.539991], null, false);
    await campus.addNode('22.365750, 113.540051', [22.365750, 113.540051], null, false);
    await campus.addNode('22.365818, 113.540140', [22.365818, 113.540140], null, false);
    await campus.addNode('22.365822, 113.539957', [22.365822, 113.539957], null, false);
    await campus.addNode('22.365818, 113.539688', [22.365818, 113.539688], null, false);
    await campus.addNode('22.366041, 113.539567', [22.366041, 113.539567], null, false);
    await campus.addNode('22.366304, 113.539709', [22.366304, 113.539709], null, false); // point 265
    await campus.addNode('22.366295, 113.539538', [22.366295, 113.539538], null, false); // point 266
    await campus.addNode('22.366386, 113.539713', [22.366386, 113.539713], null, false); // point 267
    await campus.addNode('22.366502, 113.539708', [22.366502, 113.539708], null, false); // point 269
    await campus.addNode('22.366681, 113.539708', [22.366681, 113.539708], null, false); // point 304
    await campus.addNode('22.366714, 113.539801', [22.366714, 113.539801], null, false); // point 306
    await campus.addNode('22.366743, 113.539936', [22.366743, 113.539936], null, false); // point 307
    await campus.addNode('22.366700, 113.540073', [22.366700, 113.540073], null, false); // point 308
    await campus.addNode('22.366041, 113.539796', [22.366041, 113.539796], null, false);
    await campus.addNode('22.366061, 113.539796', [22.366061, 113.539796], null, false); // point 260
    await campus.addNode('22.366223, 113.539833', [22.366223, 113.539833], null, false); // point 262
    await campus.addNode('22.366041, 113.539950', [22.366041, 113.539950], null, false);
    await campus.addNode('22.366055, 113.540191', [22.366055, 113.540191], null, false);
    await campus.addNode('22.366152, 113.540214', [22.366152, 113.540214], null, false);
    await campus.addNode('22.366471, 113.543255', [22.366471, 113.543255], null, false); // point 214
    await campus.addNode('22.366468, 113.542926', [22.366468, 113.542926], null, false); // point 215
    await campus.addNode('22.366470, 113.542736', [22.366470, 113.542736], null, false); // point 216
    await campus.addNode('22.366465, 113.542437', [22.366465, 113.542437], null, false); // point 217
    await campus.addNode('22.366473, 113.542296', [22.366473, 113.542296], null, false); // point 218
    await campus.addNode('22.366447, 113.542022', [22.366447, 113.542022], null, false); // point 219
    await campus.addNode('22.366480, 113.541777', [22.366480, 113.541777], null, false); // point 220
    await campus.addNode('22.366475, 113.541310', [22.366475, 113.541310], null, false); // point 221
    await campus.addNode('22.366461, 113.541121', [22.366461, 113.541121], null, false); // point 222
    await campus.addNode('22.366461, 113.540994', [22.366461, 113.540994], null, false); // point 223
    await campus.addNode('22.366466, 113.540760', [22.366466, 113.540760], null, false); // point 224
    await campus.addNode('22.366482, 113.540577', [22.366482, 113.540577], null, false); // point 225
    await campus.addNode('22.366470, 113.540417', [22.366470, 113.540417], null, false); // point 226
    await campus.addNode('22.366430, 113.540229', [22.366430, 113.540229], null, false); // point 227
    await campus.addNode('22.366354, 113.540227', [22.366354, 113.540227], null, false); // point 228
    await campus.addNode('22.366293, 113.540217', [22.366293, 113.540217], null, false); // point 229

    await campus.addNode('22.366529, 113.540353', [22.366529, 113.540353], null, false); // point 322
    await campus.addNode('22.366619, 113.540271', [22.366619, 113.540271], null, false); // point 323
    await campus.addNode('22.366811, 113.540051', [22.366811, 113.540051], null, false); // point 324
    await campus.addNode('22.366904, 113.539962', [22.366904, 113.539962], null, false); // point 325
    await campus.addNode('22.367148, 113.539982', [22.367148, 113.539982], null, false); // point 326
    await campus.addNode('22.367274, 113.539759', [22.367274, 113.539759], null, false); // point 327
    await campus.addNode('22.367197, 113.539573', [22.367197, 113.539573], null, false); // point 328
    await campus.addNode('22.367055, 113.539503', [22.367055, 113.539503], null, false); // point 329
    await campus.addNode('22.366825, 113.539620', [22.366825, 113.539620], null, false); // point 330
    await campus.addNode('22.366805, 113.539797', [22.366805, 113.539797], null, false); // point 331
    await campus.addNode('22.366761, 113.539580', [22.366761, 113.539580], null, false); // point 332
    await campus.addNode('22.366597, 113.539503', [22.366597, 113.539503], null, false); // point 333
    await campus.addNode('22.366892, 113.539478', [22.366892, 113.539478], null, false); // point 350
    await campus.addNode('22.367012, 113.539417', [22.367012, 113.539417], null, false); // point 351
    await campus.addNode('22.367058, 113.539414', [22.367058, 113.539414], null, false); // point 352
    await campus.addNode('22.367124, 113.539418', [22.367124, 113.539418], null, false); // point 353
    await campus.addNode('22.367218, 113.539396', [22.367218, 113.539396], null, false); // point 354

    await campus.addNode('22.366218, 113.540223', [22.366218, 113.540223], null, false);
    await campus.addNode('22.365434, 113.540308', [22.365434, 113.540308], null, false);

    await campus.addNode('22.364936, 113.539570', [22.364936, 113.539570], null, false);
    await campus.addNode('22.364946, 113.539715', [22.364946, 113.539715], null, false);
    await campus.addNode('22.364946, 113.539814', [22.364946, 113.539814], null, false);
    await campus.addNode('22.364765, 113.539528', [22.364765, 113.539528], null, false); // point 310
    await campus.addNode('22.364260, 113.539524', [22.364260, 113.539524], null, false); // point 355


    await campus.addNode('22.365445, 113.539863', [22.365445, 113.539863], null, false);
    await campus.addNode('22.365461, 113.540048', [22.365461, 113.540048], null, false);
    await campus.addNode('22.365435, 113.540232', [22.365435, 113.540232], null, false);
    await campus.addNode('22.365189, 113.539670', [22.365189, 113.539670], null, false);
    await campus.addNode('22.365137, 113.540046', [22.365137, 113.540046], null, false);
    await campus.addNode('22.365137, 113.540198', [22.365137, 113.540198], null, false);
    await campus.addNode('22.365165, 113.540014', [22.365165, 113.540014], null, false);
    await campus.addNode('22.365457, 113.539686', [22.365457, 113.539686], null, false);
    await campus.addNode('22.365495, 113.539687', [22.365495, 113.539687], null, false);
    await campus.addNode('22.365503, 113.539959', [22.365503, 113.539959], null, false);
    await campus.addNode('22.365506, 113.540089', [22.365506, 113.540089], null, false);
    await campus.addNode('22.365175, 113.540113', [22.365175, 113.540113], null, false);

    await campus.addNode('22.366034, 113.544749', [22.366034, 113.544749], null, false);
    await campus.addNode('22.365962, 113.544687', [22.365962, 113.544687], null, false); // point 170
    await campus.addNode('22.365941, 113.544511', [22.365941, 113.544511], null, false); // point 172
    await campus.addNode('22.366003, 113.544403', [22.366003, 113.544403], null, false); // point 173
    await campus.addNode('22.365722, 113.544375', [22.365722, 113.544375], null, false); // point 174
    await campus.addNode('22.365580, 113.544459', [22.365580, 113.544459], null, false); // point 176
    await campus.addNode('22.365496, 113.544438', [22.365496, 113.544438], null, false); // point 177
    await campus.addNode('22.365772, 113.544273', [22.365772, 113.544273], null, false); // point 179
    await campus.addNode('22.365404, 113.544365', [22.365404, 113.544365], null, false); // point 180
    await campus.addNode('22.365512, 113.544145', [22.365512, 113.544145], null, false); // point 181
    await campus.addNode('22.365398, 113.544068', [22.365398, 113.544068], null, false); // point 182
    await campus.addNode('22.364946, 113.539832', [22.364946, 113.539832], null, false); // point 210

    await campus.addNode('22.365307, 113.541115', [22.365307, 113.541115], null, false); // point 210


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
    await campus.addEdge('22.365201, 113.540376', '22.365144, 113.540375', 6, 5);
    await campus.addEdge('22.365263, 113.540263', '22.365162, 113.540256', 13, 11);
    await campus.addEdge('22.365435, 113.540232', '22.365263, 113.540263', 19, 15);
    await campus.addEdge('22.365435, 113.540232', '22.365507, 113.540227', 6, 8);
    await campus.addEdge('22.365576, 113.540225', '22.365507, 113.540227', 8, 7);
    await campus.addEdge('22.365576, 113.540225', '22.365748, 113.540189', 18, 15)
    await campus.addEdge('22.365823, 113.540177', '22.365748, 113.540189', 9, 9);
    await campus.addEdge('22.365445, 113.539863', '22.365461, 113.540048', 19, 18);
    await campus.addEdge('22.365435, 113.540232', '22.365461, 113.540048', 16, 13);
    await campus.addEdge('Dormitory №19', '22.365445, 113.539863', 13, 7);
    await campus.addEdge('Dormitory №19 Entrance 2', '22.365445, 113.539863', 13, 7);
    await campus.addEdge('22.365457, 113.539686', '22.365445, 113.539863', 21, 25);
    await campus.addEdge('22.365457, 113.539686', '22.365495, 113.539687', 5, 4);
    await campus.addEdge('22.365503, 113.539959', '22.365495, 113.539687', 28, 25);
    await campus.addEdge('22.365503, 113.539959', '22.365506, 113.540089', 14, 18);
    await campus.addEdge('22.365506, 113.540089', '22.365461, 113.540048', 6, 9);
    await campus.addEdge('22.365506, 113.540089', '22.365507, 113.540227', 14, 8);
    await campus.addEdge('22.365741, 113.539574', '22.365443, 113.539570', 28, 26);
    await campus.addEdge('22.365741, 113.539574', '22.365743, 113.539635', 1, 5);
    await campus.addEdge('22.365730, 113.539635', '22.365743, 113.539635', 1, 3);
    await campus.addEdge('22.365730, 113.539635', '22.365730, 113.539928', 52, 29);
    await campus.addEdge('22.365730, 113.539991', '22.365730, 113.539928', 2, 5);
    await campus.addEdge('22.365730, 113.539991', '22.365750, 113.540051', 6, 7);
    await campus.addEdge('22.365748, 113.540189', '22.365750, 113.540051', 9, 13);
    await campus.addEdge('22.365818, 113.540140', '22.365750, 113.540051', 3, 6);
    await campus.addEdge('22.365818, 113.540140', '22.365823, 113.540177', 2, 4);
    await campus.addEdge('22.365818, 113.540140', 'Dormitory №17', 7, 7);
    await campus.addEdge('22.365818, 113.540140', 'Dormitory №17 Entrance 3', 7, 7);
    await campus.addEdge('22.365818, 113.540140', '22.365822, 113.539957', 13, 17);
    await campus.addEdge('22.365822, 113.539957', 'Dormitory №17', 4, 4); // new
    await campus.addEdge('22.365822, 113.539957', 'Dormitory №17 Entrance 2', 4, 4);
    await campus.addEdge('22.365818, 113.539688', '22.365822, 113.539957', 15, 20);
    await campus.addEdge('22.365818, 113.539688', 'Dormitory №17', 4, 4);
    await campus.addEdge('22.365818, 113.539688', 'Dormitory №17 Entrance 1', 4, 4);
    await campus.addEdge('22.365818, 113.539688', '22.365743, 113.539635', 3, 5);
    await campus.addEdge('22.366295, 113.539538', '22.366041, 113.539567', 26, 20);
    await campus.addEdge('22.366295, 113.539538', '22.366304, 113.539709', 18, 14);
    await campus.addEdge('22.365741, 113.539574', '22.366041, 113.539567', 32, 28);
    await campus.addEdge('22.366041, 113.539796', '22.366041, 113.539567', 20, 22);
    await campus.addEdge('22.366041, 113.539796', '22.366041, 113.539950', 8, 11);
    await campus.addEdge('22.366041, 113.539796', '22.366061, 113.539796', 1, 4);
    await campus.addEdge('Complex building Public Toilet', '22.366061, 113.539796', 19, 16);
    await campus.addEdge('22.366061, 113.539796', '22.366223, 113.539833', 17, 12);
    await campus.addEdge('Complex building Public Toilet', '22.366223, 113.539833', 21, 17);
    await campus.addEdge('Complex building', '22.366223, 113.539833', 13, 12);
    await campus.addEdge('Complex building 7 eleven', '22.366223, 113.539833', 16, 13);
    await campus.addEdge('Complex building 7 eleven Entrance 2', '22.366223, 113.539833', 16, 13);
    await campus.addEdge('Complex building 7 eleven', 'Complex building Public Toilet', 13, 8);
    await campus.addEdge('Complex building 7 eleven Entrance 2', 'Complex building Public Toilet', 13, 8);
    await campus.addEdge('22.366304, 113.539709', '22.366223, 113.539833', 12, 9);
    await campus.addEdge('22.366304, 113.539709', '22.366386, 113.539713', 12, 7);
    await campus.addEdge('Complex building Cotti coffee', '22.366386, 113.539713', 6, 5);
    await campus.addEdge('22.366502, 113.539708', '22.366386, 113.539713', 14, 8);
    await campus.addEdge('22.366502, 113.539708', 'Complex building 鹏泰超市', 5, 5);
    await campus.addEdge('22.366502, 113.539708', 'Complex building 鹏泰超市 Entrance 2', 5, 5);
    await campus.addEdge('22.366502, 113.539708', '22.366681, 113.539708', 21, 15);
    await campus.addEdge('Complex building Bakery', '22.366681, 113.539708', 6, 5);
    await campus.addEdge('22.366714, 113.539801', '22.366681, 113.539708', 10, 6);
    await campus.addEdge('22.366714, 113.539801', 'Complex building Bakery', 7, 6);
    await campus.addEdge('22.366714, 113.539801', '22.366743, 113.539936', 11, 6);
    await campus.addEdge('22.366700, 113.540073', '22.366743, 113.539936', 15, 12);
    await campus.addEdge('22.366700, 113.540073', 'Complex building 鹏泰超市', 7, 4);
    await campus.addEdge('22.366700, 113.540073', 'Complex building 鹏泰超市 Entrance 1', 7, 4);
    await campus.addEdge('22.366700, 113.540073', '22.366430, 113.540229', 29, 16);
    await campus.addEdge('22.366041, 113.539950', 'Dormitory №17', 2, 4);
    await campus.addEdge('22.366041, 113.539950', 'Dormitory №17 Entrance 4', 2, 4);
    await campus.addEdge('22.366055, 113.540191', '22.366041, 113.539950', 16, 24);
    await campus.addEdge('22.366055, 113.540191', '22.365823, 113.540177', 25, 19);
    await campus.addEdge('22.366055, 113.540191', '22.366152, 113.540214', 4, 7);
    await campus.addEdge('Complex building Xiaomian noodles', '22.366152, 113.540214', 3, 4);
    await campus.addEdge('Complex building Xiaomian noodles Entrance 1', '22.366152, 113.540214', 3, 4);
    await campus.addEdge('22.366218, 113.540223', '22.366152, 113.540214', 3, 4);
    await campus.addEdge('Complex building Xiaomian noodles', '22.366218, 113.540223', 4, 5);
    await campus.addEdge('Complex building Xiaomian noodles Entrance 2', '22.366218, 113.540223', 4, 5);
    await campus.addEdge('Complex building Xiaomian noodles Entrance 1', 'Complex building Xiaomian noodles Entrance 2', 3, 4);
    await campus.addEdge('22.366218, 113.540223', '22.366293, 113.540217', 11, 10);
    await campus.addEdge('22.366354, 113.540227', '22.366293, 113.540217', 4, 6);
    await campus.addEdge('Complex building 7 eleven', '22.366293, 113.540217', 5, 5);
    await campus.addEdge('Complex building 7 eleven Entrance 1', '22.366293, 113.540217', 5, 5);
    await campus.addEdge('Complex building 7 eleven Entrance 1', 'Complex building Xiaomian noodles Entrance 2', 7, 6);
    await campus.addEdge('Complex building 7 eleven', 'Complex building Xiaomian noodles Entrance 2', 7, 6);
    await campus.addEdge('Complex building 7 eleven', 'Complex building Xiaomian noodles', 7, 6);
    await campus.addEdge('Complex building 7 eleven', 'Complex building Xiaomian noodles', 7, 6);
    await campus.addEdge('22.366354, 113.540227', '22.366430, 113.540229', 9, 10);
    await campus.addEdge('22.366354, 113.540227', 'Complex building KFC', 9, 6);
    await campus.addEdge('22.366354, 113.540227', 'Complex building KFC Entrance 1', 9, 6);
    await campus.addEdge('Complex building 7 eleven Entrance 1', 'Complex building KFC Entrance 1', 7, 5);
    await campus.addEdge('Complex building 7 eleven', 'Complex building KFC Entrance 1', 7, 5);
    await campus.addEdge('Complex building 7 eleven Entrance 1', 'Complex building KFC', 7, 5);
    await campus.addEdge('Complex building 7 eleven', 'Complex building KFC', 7, 5);
    await campus.addEdge('22.366470, 113.540417', '22.366430, 113.540229', 17, 17);
    await campus.addEdge('Complex building KFC', '22.366430, 113.540229', 9, 7);
    await campus.addEdge('Complex building KFC Entrance 2', '22.366430, 113.540229', 9, 7);
    await campus.addEdge('Complex building KFC Entrance 1', 'Complex building KFC Entrance 2', 6, 5);
    await campus.addEdge('22.366470, 113.540417', '22.366482, 113.540577', 14, 15);
    await campus.addEdge('22.366466, 113.540760', '22.366482, 113.540577', 21, 21);
    await campus.addEdge('22.366466, 113.540760', '22.366461, 113.540994', 22, 23);
    await campus.addEdge('22.366461, 113.541121', '22.366461, 113.540994', 10, 11);
    await campus.addEdge('22.366461, 113.541121', '22.366475, 113.541310', 18, 15);
    await campus.addEdge('22.366480, 113.541777', '22.366475, 113.541310', 46, 33);
    await campus.addEdge('22.366480, 113.541777', '22.366447, 113.542022', 28, 24);
    await campus.addEdge('22.366473, 113.542296', '22.366447, 113.542022', 31, 30);
    await campus.addEdge('22.366473, 113.542296', '22.366465, 113.542437', 16, 13);
    await campus.addEdge('22.366470, 113.542736', '22.366465, 113.542437', 31, 23);
    await campus.addEdge('22.366470, 113.542736', '22.366468, 113.542926', 14, 8);
    await campus.addEdge('22.366471, 113.543255', '22.366468, 113.542926', 35, 23);
    await campus.addEdge('22.366471, 113.543255', '22.366475, 113.543623', 36, 32);
    await campus.addEdge('22.365435, 113.540232', '22.365434, 113.540308', 5, 8);
    await campus.addEdge('Muslim cafe', '22.365434, 113.540308', 8, 12);
    await campus.addEdge('满忆糖水', '22.365201, 113.540376', 8, 6);
    await campus.addEdge('22.365201, 113.540376', 'YOUNG ONCE', 2, 1);
    await campus.addEdge('22.365263, 113.540263', '22.365276, 113.540318', 7, 5);
    await campus.addEdge('满忆糖水', '22.365276, 113.540318', 7, 6);
    await campus.addEdge('22.365324, 113.540307', '22.365276, 113.540318', 6, 4);
    await campus.addEdge('22.365324, 113.540307', '22.365434, 113.540308', 10, 6);
    await campus.addEdge('22.365324, 113.540307', '台湾卤肉饭', 2, 1);
    await campus.addEdge('22.365324, 113.540307', '台湾卤肉饭 Entrance 1', 2, 1);
    await campus.addEdge('22.365201, 113.540376', '台湾卤肉饭', 13, 8);
    await campus.addEdge('22.365201, 113.540376', '台湾卤肉饭 Entrance 2', 13, 8);
    await campus.addEdge('YOUNG ONCE', '台湾卤肉饭', 5, 3);
    await campus.addEdge('YOUNG ONCE', '台湾卤肉饭 Entrance 2', 5, 3);
    await campus.addEdge('China post', '22.365307, 113.541115', 13, 15);

    await campus.addEdge('22.366470, 113.540417', '22.366529, 113.540353', 11, 8);
    await campus.addEdge('22.366619, 113.540271', '22.366529, 113.540353', 12, 9);
    await campus.addEdge('22.366619, 113.540271', '22.366811, 113.540051', 31, 22);
    await campus.addEdge('22.366743, 113.539936', '22.366811, 113.540051', 15, 12);
    await campus.addEdge('22.366904, 113.539962', '22.366811, 113.540051', 14, 8);
    await campus.addEdge('22.366904, 113.539962', '22.367148, 113.539982', 23, 17, false);
    await campus.addEdge('22.367148, 113.539982', '22.367274, 113.539759', 30, 25, false);
    await campus.addEdge('22.367274, 113.539759', '22.367197, 113.539573', 18, 12, false);
    await campus.addEdge('22.367197, 113.539573', '22.367055, 113.539503', 18, 12, false);
    await campus.addEdge('22.367055, 113.539503', '22.366825, 113.539620', 25, 20, false);
    await campus.addEdge('22.366825, 113.539620', '22.366805, 113.539797', 18, 14, false);
    await campus.addEdge('22.366805, 113.539797', '22.366904, 113.539962', 19, 14, false);
    await campus.addEdge('22.366825, 113.539620', '22.366761, 113.539580', 7, 7);
    await campus.addEdge('22.366761, 113.539580', '22.366681, 113.539708', 17, 12);
    await campus.addEdge('22.366597, 113.539503', '22.366761, 113.539580', 17, 11);
    await campus.addEdge('22.366597, 113.539503', '22.366295, 113.539538', 38, 28);
    await campus.addEdge('22.366761, 113.539580', '22.366892, 113.539478', 18, 14);
    await campus.addEdge('22.367012, 113.539417', '22.366892, 113.539478', 14, 8);
    await campus.addEdge('22.367012, 113.539417', '22.367058, 113.539414', 5, 4);
    await campus.addEdge('22.367055, 113.539503', '22.367058, 113.539414', 9, 6);
    await campus.addEdge('22.367124, 113.539418', '22.367058, 113.539414', 8, 5);

    await campus.addEdge('22.367124, 113.539418', '22.367218, 113.539396', 13, 11);

    await campus.addEdge('22.365457, 113.539686', '22.365443, 113.539570', 11, 14);
    await campus.addEdge('22.365443, 113.539570', '22.365201, 113.539570', 27, 27);
    await campus.addEdge('22.365201, 113.539570', '22.365189, 113.539670', 10, 14); // ???
    await campus.addEdge('Dormitory №20', '22.365189, 113.539670', 14, 10);

    await campus.addEdge('22.365201, 113.539570', '22.364936, 113.539570', 22, 18);
    await campus.addEdge('22.364936, 113.539570', '22.364946, 113.539715', 10, 14);
    await campus.addEdge('Dormitory №20', '22.364946, 113.539715', 1, 1);
    await campus.addEdge('Dormitory №20 Entrance 4', '22.364946, 113.539715', 1, 1);
    await campus.addEdge('22.364946, 113.539715', '22.364946, 113.539814', 9, 8);
    await campus.addEdge('Dormitory №20 Kitchen', '22.364946, 113.539814', 1, 1);
    await campus.addEdge('22.364946, 113.539814', '22.364946, 113.539832', 5, 8);
    await campus.addEdge('Dormitory №20', '22.364946, 113.539832', 1, 1);
    await campus.addEdge('Dormitory №20 Entrance 5', '22.364946, 113.539832', 1, 1);
    await campus.addEdge('22.364936, 113.539570', '22.364765, 113.539528', 21, 14);
    await campus.addEdge('22.364260, 113.539524', '22.364765, 113.539528', 57, 40);


    await campus.addEdge('Dormitory №20 Entrance 1', '22.365189, 113.539670', 14, 10);
    await campus.addEdge('Dormitory №19 Entrance 1', '22.365189, 113.539670', 18, 3);
    await campus.addEdge('22.365189, 113.539670', '22.365164, 113.539925', 23, 16);
    await campus.addEdge('Dormitory №20', '22.365164, 113.539925', 13, 13);
    await campus.addEdge('Dormitory №20 Entrance 2', '22.365164, 113.539925', 13, 13);
    await campus.addEdge('Dormitory №19', '22.365164, 113.539925', 17, 15);
    await campus.addEdge('Dormitory №19 Entrance 2', '22.365164, 113.539925', 17, 15);
    await campus.addEdge('22.365164, 113.539925', '22.365165, 113.540014', 15, 21);
    await campus.addEdge('22.365137, 113.540046', '22.365165, 113.540014', 7, 10);
    await campus.addEdge('Dormitory №20', '22.365137, 113.540046', 4, 4);
    await campus.addEdge('Dormitory №20 Entrance 3', '22.365137, 113.540046', 4, 4);
    await campus.addEdge('22.365137, 113.540046', '22.365137, 113.540198', 10, 7);
    await campus.addEdge('22.365137, 113.540198', 'Dormitory №20', 4, 4);
    await campus.addEdge('22.365137, 113.540198', 'Dormitory №20 Public Toilet', 4, 4);
    await campus.addEdge('22.365175, 113.540113', '22.365165, 113.540014', 8, 8);
    await campus.addEdge('Dormitory №19 Entrance 3', '22.365175, 113.540113', 19, 13);
    await campus.addEdge('22.365175, 113.540113', '22.365162, 113.540256', 13, 10);

    await campus.addEdge('22.365495, 113.539687', 'Dormitory №18', 6, 7);
    await campus.addEdge('22.365495, 113.539687', 'Dormitory №18 Entrance 1', 6, 7);
    await campus.addEdge('22.365503, 113.539959', 'Dormitory №18', 6, 6);
    await campus.addEdge('22.365503, 113.539959', 'Dormitory №18 Entrance 2', 6, 6);
    await campus.addEdge('22.365506, 113.540089', 'Dormitory №18', 6, 7);
    await campus.addEdge('22.365506, 113.540089', 'Dormitory №18 Entrance 3', 6, 7);
    await campus.addEdge('Dormitory №18', '22.365730, 113.539928', 2, 5);



    await campus.addEdge('East gate Entrance 1', '22.366034, 113.544749', 4, 2);
    await campus.addEdge('22.365962, 113.544687', '22.366034, 113.544749', 9, 8);
    await campus.addEdge('22.365962, 113.544687', '22.365941, 113.544511', 18, 16);
    await campus.addEdge('22.365962, 113.544687', '22.365941, 113.544511', 18, 16);
    await campus.addEdge('East gate Entrance 1 (cars)', '22.365941, 113.544511', 20, 18);
    await campus.addEdge('22.366003, 113.544403', '22.365941, 113.544511', 14, 12);
    await campus.addEdge('22.366003, 113.544403', '22.366066, 113.544259', 17, 13);
    await campus.addEdge('22.365722, 113.544375', '22.365941, 113.544511', 26, 24);
    await campus.addEdge('East gate Entrance 2 (cars)', '22.365722, 113.544375', 20, 18);
    await campus.addEdge('22.365580, 113.544459', '22.365722, 113.544375', 16, 12);
    await campus.addEdge('22.365580, 113.544459', '22.365496, 113.544438', 11, 8);
    await campus.addEdge('East gate Entrance 2', '22.365496, 113.544438', 3, 2);
    await campus.addEdge('22.365772, 113.544273', '22.365722, 113.544375', 13, 10);
    await campus.addEdge('22.365772, 113.544273', '22.365812, 113.544095', 16, 11);
    await campus.addEdge('22.365772, 113.544273', '22.366003, 113.544403', 26, 24);
    await campus.addEdge('22.365404, 113.544365', '22.365496, 113.544438', 11, 9);
    await campus.addEdge('22.365404, 113.544365', '22.365512, 113.544145', 24, 23);
    await campus.addEdge('22.365398, 113.544068', '22.365512, 113.544145', 12, 12);
    await campus.addEdge('22.365398, 113.544068', '22.365489, 113.543882', 17, 15);

    await campus.addEdge('22.365307, 113.541115', '22.365130, 113.541179', 18, 18);




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
