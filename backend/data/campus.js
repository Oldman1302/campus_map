const Graph = require("../classes/graph");

/**
 * Builds and returns campus graph.
 * @returns {Promise<Graph>}
 */
async function loadCampusGraph() {
    const campus = new Graph("campus");

    await campus.addNode('Dormitory №14', [22.365671, 113.540536], null, true, 'dormitory');
    await campus.addNode('Dormitory №14 Entrance 1', [22.365620, 113.540321], null, true, 'gate');
    await campus.addNode('Dormitory №14 Entrance 2', [22.365620, 113.540800], null, true, 'gate');
    await campus.addNode('Dormitory №14 Entrance 3', [22.365620, 113.540550], null, true, 'gate');

    await campus.addNode('Dormitory №15', [22.365364, 113.540782], null, true, 'dormitory');
    await campus.addNode('Dormitory №15 学成驾校', [22.365284, 113.540709], null, true, 'car'); // point 452
    await campus.addNode('Dormitory №15 筞发伊人', [22.365284, 113.540826], null, true, 'barber'); // point 453
    await campus.addNode('Dormitory №15 Entrance 1', [22.365436, 113.540637], null, true, 'gate'); // point 458

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

    await campus.addNode('Canteen № 3', [22.363506, 113.539146], null, true, 'cafe');
    await campus.addNode('Canteen № 3 Entrance 1', [22.363501, 113.539378], null, true, 'gate'); // point 374
    await campus.addNode('Canteen № 3 Entrance 2', [22.363406, 113.539271], null, true, 'gate'); // point 378
    await campus.addNode('Canteen № 3 Entrance 3', [22.363576, 113.539361], null, true, 'gate'); // point 375
    await campus.addNode('Canteen № 3 Entrance 4', [22.363404, 113.539189], null, true, 'gate'); // point 375
    await campus.addNode('Canteen № 3 Entrance 5', [22.363639, 113.539036], null, true, 'gate'); // point 410
    await campus.addNode('Canteen № 3 Public Toilet', [22.363603, 113.539024], null, true, 'toilet'); // point 411

    await campus.addNode('Muslim cafe', [22.365433, 113.540379], null, true, 'cafe');
    await campus.addNode('满忆糖水', [22.365284, 113.540367], null, true, 'drink'); // point 251
    await campus.addNode('YOUNG ONCE', [22.365284, 113.540386], null, true, 'cafe'); // point 252
    await campus.addNode('台湾卤肉饭', [22.365319, 113.540404], null, true, 'cafe');
    await campus.addNode('台湾卤肉饭 Entrance 1', [22.365324, 113.540347], null, true, 'gate'); // point 255
    await campus.addNode('台湾卤肉饭 Entrance 2', [22.365284, 113.540437], null, true, 'gate'); // point 255
    await campus.addNode('台湾卤肉饭 Entrance 2', [22.365284, 113.540437], null, true, 'gate'); // point 450
    await campus.addNode('秘制鲜肉并', [22.365284, 113.540507], null, true, 'cafe'); // point 450
    await campus.addNode('沙县小吃', [22.365284, 113.540526], null, true, 'cafe'); // point 450

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

    await campus.addNode('Fitness Standard', [22.362609, 113.535467], null, true, 'gym'); // point 425
    await campus.addNode('Cafe in Fitness', [22.362566, 113.535393], null, true, 'cafe'); // point 423
    await campus.addNode('Swimming pool Entrance', [22.362594, 113.535434], null, true, 'swimming_pool'); // point 424

    await campus.addNode('Basketball Court 1 (Gymnasium)', [22.368156, 113.537363], null, false, 'basketball_court'); // point 509
    await campus.addNode('Basketball Court 2 (Gymnasium)', [22.367964, 113.537291], null, false, 'basketball_court'); // point 507
    await campus.addNode('Basketball Court 3 (Gymnasium)', [22.367752, 113.537223], null, false, 'basketball_court'); // point 511
    await campus.addNode('Football Court (Gymnasium)', [22.368880, 113.537634], null, false, 'football_field'); // point 573
    await campus.addNode('Tennis Court (Gymnasium)', [22.368884, 113.537901], null, false, 'tennis_court'); // point 577

    await campus.addNode('Basketball Court 1 (Lake)', [22.367778, 113.538904], null, false, 'basketball_court'); // point 492
    await campus.addNode('Basketball Court 2 (Lake)', [22.367747, 113.539133], null, false, 'basketball_court'); // point 490

    await campus.addNode('Bridge (Gymnasium)', [22.368020, 113.538063], null, false, 'bridge'); // point 566

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
    await campus.addNode("22.365576, 113.540225", [22.365576, 113.540225], null, false);
    await campus.addNode('22.365569, 113.540316', [22.365569, 113.540316], null, false); // point 465
    await campus.addNode('22.366293, 113.540217', [22.366293, 113.540217], null, false); // point 229
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

    await campus.addNode('22.365254, 113.540557', [22.365254, 113.540557], null, false); // point 464

    await campus.addNode('22.367218, 113.539396', [22.367218, 113.539396], null, false); // point 354
    await campus.addNode('22.367388, 113.539219', [22.367388, 113.539219], null, false); // point 395
    await campus.addNode('22.367538, 113.539186', [22.367538, 113.539186], null, false); // point 396
    await campus.addNode('22.367520, 113.539692', [22.367520, 113.539692], null, false); // point 397
    await campus.addNode('22.367524, 113.539776', [22.367524, 113.539776], null, false); // point 398
    await campus.addNode('22.367579, 113.538896', [22.367579, 113.538896], null, false); // point 491
    await campus.addNode('22.367611, 113.538687', [22.367611, 113.538687], null, false); // point 493
    await campus.addNode('22.367421, 113.537124', [22.367421, 113.537124], null, false); // point 502
    await campus.addNode('22.367535, 113.537209', [22.367535, 113.537209], null, false); // point 503
    await campus.addNode('22.367544, 113.537437', [22.367544, 113.537437], null, false); // point 504
    await campus.addNode('22.367797, 113.537512', [22.367797, 113.537512], null, false); // point 505
    await campus.addNode('22.368002, 113.537549', [22.368002, 113.537549], null, false); // point 510
    await campus.addNode('22.367738, 113.537890', [22.367738, 113.537890], null, false); // point 512
    await campus.addNode('22.367779, 113.538011', [22.367779, 113.538011], null, false); // point 513
    await campus.addNode('22.367796, 113.538110', [22.367796, 113.538110], null, false); // point 514
    await campus.addNode('22.367698, 113.538322', [22.367698, 113.538322], null, false); // point 515

    await campus.addNode('22.367810, 113.538736', [22.367810, 113.538736], null, false); // point 516
    await campus.addNode('22.368007, 113.538815', [22.368007, 113.538815], null, false); // point 517
    await campus.addNode('22.368075, 113.538770', [22.368075, 113.538770], null, false); // point 518
    await campus.addNode('22.368120, 113.538658', [22.368120, 113.538658], null, false); // point 519
    await campus.addNode('22.368084, 113.538597', [22.368084, 113.538597], null, false); // point 520
    await campus.addNode('22.368160, 113.538613', [22.368160, 113.538613], null, false); // point 521
    await campus.addNode('22.368256, 113.538495', [22.368256, 113.538495], null, false); // point 523
    await campus.addNode('22.368254, 113.538027', [22.368254, 113.538027], null, false); // point 561
    await campus.addNode('22.368408, 113.537764', [22.368408, 113.537764], null, false); // point 562
    await campus.addNode('22.368407, 113.537657', [22.368407, 113.537657], null, false); // point 563
    await campus.addNode('22.368195, 113.537981', [22.368195, 113.537981], null, false); // point 564
    await campus.addNode('22.368143, 113.538028', [22.368143, 113.538028], null, false); // point 565
    await campus.addNode('22.367929, 113.538072', [22.367929, 113.538072], null, false); // point 567
    await campus.addNode('22.368552, 113.537531', [22.368552, 113.537531], null, false); // point 568

    await campus.addNode('22.368602, 113.537586', [22.368602, 113.537586], null, false); // point 569
    await campus.addNode('22.368635, 113.537591', [22.368635, 113.537591], null, false); // point 570
    await campus.addNode('22.368754, 113.537603', [22.368754, 113.537603], null, false); // point 571
    await campus.addNode('22.368754, 113.537627', [22.368754, 113.537627], null, false); // point 572
    await campus.addNode('22.368687, 113.537651', [22.368687, 113.537651], null, false); // point 574
    await campus.addNode('22.368722, 113.537697', [22.368722, 113.537697], null, false); // point 575
    await campus.addNode('22.368744, 113.537775', [22.368744, 113.537775], null, false); // point 576

    await campus.addNode('22.368262, 113.538691', [22.368262, 113.538691], null, false); // point 522

    await campus.addNode('22.367327, 113.538725', [22.367327, 113.538725], null, false); // point 494
    await campus.addNode('22.367240, 113.538772', [22.367240, 113.538772], null, false); // point 495
    await campus.addNode('22.367204, 113.538742', [22.367204, 113.538742], null, false); // point 496
    await campus.addNode('22.367286, 113.538509', [22.367286, 113.538509], null, false); // point 497
    await campus.addNode('22.367375, 113.538304', [22.367375, 113.538304], null, false); // point 498
    await campus.addNode('22.367409, 113.538131', [22.367409, 113.538131], null, false); // point 499
    await campus.addNode('22.367305, 113.537835', [22.367305, 113.537835], null, false); // point 500
    await campus.addNode('22.367421, 113.537478', [22.367421, 113.537478], null, false); // point 501

    await campus.addNode('22.367851, 113.537254', [22.367851, 113.537254], null, false); // point 506
    await campus.addNode('22.367874, 113.537261', [22.367874, 113.537261], null, false); // point 508

    await campus.addNode('22.366218, 113.540223', [22.366218, 113.540223], null, false);
    await campus.addNode('22.365434, 113.540308', [22.365434, 113.540308], null, false);

    await campus.addNode('22.364936, 113.539570', [22.364936, 113.539570], null, false);
    await campus.addNode('22.364946, 113.539715', [22.364946, 113.539715], null, false);
    await campus.addNode('22.364946, 113.539814', [22.364946, 113.539814], null, false);
    await campus.addNode('22.364765, 113.539528', [22.364765, 113.539528], null, false); // point 310
    await campus.addNode('22.364260, 113.539524', [22.364260, 113.539524], null, false); // point 355
    await campus.addNode('22.363943, 113.539571', [22.363943, 113.539571], null, false); // point 363
    await campus.addNode('22.364244, 113.539683', [22.364244, 113.539683], null, false); // point 365
    await campus.addNode('22.363822, 113.539595', [22.363822, 113.539595], null, false); // point 366
    await campus.addNode('22.363768, 113.539566', [22.363768, 113.539566], null, false); // point 367
    await campus.addNode('22.363471, 113.539533', [22.363471, 113.539533], null, false); // point 368
    await campus.addNode('22.363235, 113.539528', [22.363235, 113.539528], null, false); // point 380

    await campus.addNode('22.363497, 113.539378', [22.363497, 113.539378], null, false); // point 373
    await campus.addNode('22.363409, 113.539354', [22.363409, 113.539354], null, false); // point 376
    await campus.addNode('22.363369, 113.539271', [22.363369, 113.539271], null, false); // point 377

    await campus.addNode('22.363231, 113.539298', [22.363231, 113.539298], null, false); // point 379
    await campus.addNode('22.363241, 113.538866', [22.363241, 113.538866], null, false); // point 394
    await campus.addNode('22.363200, 113.538541', [22.363200, 113.538541], null, false); // point 412
    await campus.addNode('22.363168, 113.538367', [22.363168, 113.538367], null, false); // point 413
    await campus.addNode('22.363146, 113.538083', [22.363146, 113.538083], null, false); // point 414
    await campus.addNode('22.362881, 113.537509', [22.362881, 113.537509], null, false); // point 415
    await campus.addNode('22.362767, 113.537272', [22.362767, 113.537272], null, false); // point 416
    await campus.addNode('22.362619, 113.537038', [22.362619, 113.537038], null, false); // point 417
    await campus.addNode('22.362434, 113.536650', [22.362434, 113.536650], null, false); // point 418
    await campus.addNode('22.362268, 113.536405', [22.362268, 113.536405], null, false); // point 419
    await campus.addNode('22.362215, 113.536354', [22.362215, 113.536354], null, false); // point 420
    await campus.addNode('22.362379, 113.535435', [22.362379, 113.535435], null, false); // point 421

    await campus.addNode('22.362538, 113.535471', [22.362538, 113.535471], null, false); // point 422

    await campus.addNode('22.363505, 113.538642', [22.363505, 113.538642], null, false); // point 405
    await campus.addNode('22.363602, 113.538652', [22.363602, 113.538652], null, false); // point 406
    await campus.addNode('22.363606, 113.538910', [22.363606, 113.538910], null, false); // point 407

    await campus.addNode('22.363497, 113.538855', [22.363497, 113.538855], null, false); // point 408
    await campus.addNode('22.363634, 113.538989', [22.363634, 113.538989], null, false); // point 409

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
    await campus.addNode('22.365460, 113.541046', [22.365460, 113.541046], null, false); // point 454

    await campus.addNode('22.365462, 113.540909', [22.365462, 113.540909], null, false); // point 455
    await campus.addNode('22.365462, 113.540850', [22.365462, 113.540850], null, false); // point 460
    await campus.addNode('22.365462, 113.540657', [22.365462, 113.540657], null, false); // point 456
    await campus.addNode('22.365436, 113.540657', [22.365436, 113.540657], null, false); // point 457
    await campus.addNode('22.365462, 113.540628', [22.365462, 113.540628], null, false); // point 457
    await campus.addNode('22.365462, 113.540557', [22.365462, 113.540557], null, false); // point 463


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
    await campus.addEdge('台湾卤肉饭', '秘制鲜肉并', 5, 3);
    await campus.addEdge('台湾卤肉饭 Entrance 2', '秘制鲜肉并', 5, 3);
    await campus.addEdge('秘制鲜肉并', '22.365201, 113.540376',  14, 9);
    await campus.addEdge('沙县小吃', '22.365201, 113.540376',  17, 11);
    await campus.addEdge('沙县小吃', '秘制鲜肉并', 3, 1);
    await campus.addEdge('22.365254, 113.540557', '22.365201, 113.540376',  21, 16);
    await campus.addEdge('沙县小吃', '22.365254, 113.540557', 2, 1);


    await campus.addEdge('Dormitory №15', '22.365168, 113.540755', 14, 11);
    await campus.addEdge('Dormitory №15 学成驾校', '22.365168, 113.540755', 14, 11);
    await campus.addEdge('Dormitory №15', '22.365168, 113.540755', 16, 13);
    await campus.addEdge('Dormitory №15 筞发伊人', '22.365168, 113.540755', 16, 13);

    await campus.addEdge('22.365569, 113.540316', '22.365576, 113.540225', 8, 5);
    await campus.addEdge('Dormitory №14', '22.365569, 113.540316', 1, 1);
    await campus.addEdge('Dormitory №14 Entrance 1', '22.365569, 113.540316', 1, 1);
    await campus.addEdge('Dormitory №14', '22.365462, 113.540628', 14, 11);
    await campus.addEdge('Dormitory №14 Entrance 2', '22.365462, 113.540628', 14, 11);
    await campus.addEdge('Dormitory №14', '22.365462, 113.540850', 16, 12);
    await campus.addEdge('Dormitory №14 Entrance 3', '22.365462, 113.540850', 16, 12);

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
    await campus.addEdge('22.367388, 113.539219', '22.367218, 113.539396', 28, 15);
    await campus.addEdge('22.367388, 113.539219', '22.367538, 113.539186', 16, 11);
    await campus.addEdge('22.367520, 113.539692', '22.367538, 113.539186', 54, 40);
    await campus.addEdge('22.367520, 113.539692', '22.367524, 113.539776', 7, 4);
    await campus.addEdge('Basketball Court 1 (Lake)', '22.367579, 113.538896', 22, 17);
    await campus.addEdge('Basketball Court 2 (Lake)', '22.367538, 113.539186', 23, 18);
    await campus.addEdge('22.367579, 113.538896', '22.367538, 113.539186', 25, 15);
    await campus.addEdge('22.367579, 113.538896', '22.367611, 113.538687', 22, 16);
    await campus.addEdge('22.367421, 113.537478', '22.367421, 113.537124', 31, 21);
    await campus.addEdge('22.367535, 113.537209', '22.367421, 113.537124', 18, 11);
    await campus.addEdge('22.367535, 113.537209', '22.367544, 113.537437', 21, 13);
    await campus.addEdge('22.367797, 113.537512', '22.367544, 113.537437', 28, 17);
    await campus.addEdge('22.367797, 113.537512', '22.368002, 113.537549', 25, 15);
    await campus.addEdge('22.367797, 113.537512', '22.367738, 113.537890', 39, 25);
    await campus.addEdge('22.367779, 113.538011', '22.367738, 113.537890', 12, 7);
    await campus.addEdge('22.367779, 113.538011', '22.367796, 113.538110', 11, 8);
    await campus.addEdge('22.367698, 113.538322', '22.367796, 113.538110', 26, 16);
    await campus.addEdge('22.367698, 113.538322', '22.367611, 113.538687', 38, 24);
    await campus.addEdge('22.368407, 113.537657', '22.368002, 113.537549', 43, 29);
    await campus.addEdge('22.368407, 113.537657', '22.368195, 113.537981', 41, 25);
    await campus.addEdge('22.368143, 113.538028', '22.368195, 113.537981', 7, 4);
    await campus.addEdge('22.368143, 113.538028', 'Bridge (Gymnasium)', 13, 9, false);
    await campus.addEdge('Bridge (Gymnasium)', '22.368143, 113.538028', 13, 5, false);
    await campus.addEdge('Bridge (Gymnasium)', '22.367929, 113.538072', 10, 4, false);
    await campus.addEdge('22.367929, 113.538072', 'Bridge (Gymnasium)', 10, 7, false);
    await campus.addEdge('22.367796, 113.538110', '22.367929, 113.538072', 13, 9);
    await campus.addEdge('22.368407, 113.537657', '22.368552, 113.537531', 22, 15);

    await campus.addEdge('22.368602, 113.537586', '22.368552, 113.537531', 7, 4);
    await campus.addEdge('22.368602, 113.537586', '22.368635, 113.537591', 5, 2);
    await campus.addEdge('22.368754, 113.537603', '22.368635, 113.537591', 8, 7);
    await campus.addEdge('22.368754, 113.537603', '22.368754, 113.537627', 4, 3);
    await campus.addEdge('Football Court (Gymnasium)', '22.368754, 113.537627', 18, 10);
    await campus.addEdge('22.368687, 113.537651', '22.368635, 113.537591', 6, 5);
    await campus.addEdge('22.368687, 113.537651', '22.368722, 113.537697', 6, 4);
    await campus.addEdge('22.368744, 113.537775', '22.368722, 113.537697', 9, 7);
    await campus.addEdge('Tennis Court (Gymnasium)', '22.368744, 113.537775', 18, 10);

    await campus.addEdge('22.367327, 113.538725', '22.367611, 113.538687', 31, 18);
    await campus.addEdge('22.367327, 113.538725', '22.367240, 113.538772', 11, 7);
    await campus.addEdge('22.367204, 113.538742', '22.367240, 113.538772', 7, 5);
    await campus.addEdge('22.367204, 113.538742', '22.367286, 113.538509', 25, 14);
    await campus.addEdge('22.367375, 113.538304', '22.367286, 113.538509', 21, 13);
    await campus.addEdge('22.367375, 113.538304', '22.367409, 113.538131', 21, 12);
    await campus.addEdge('22.367305, 113.537835', '22.367409, 113.538131', 34, 22);
    await campus.addEdge('22.367305, 113.537835', '22.367421, 113.537478', 39, 24);

    await campus.addEdge('22.367810, 113.538736', '22.367611, 113.538687', 23, 15);
    await campus.addEdge('22.367810, 113.538736', '22.368007, 113.538815', 23, 13);
    await campus.addEdge('22.368075, 113.538770', '22.368007, 113.538815', 9, 6);
    await campus.addEdge('22.368075, 113.538770', '22.368120, 113.538658', 11, 7);
    await campus.addEdge('22.368084, 113.538597', '22.368120, 113.538658', 5, 3);
    await campus.addEdge('22.368160, 113.538613', '22.368120, 113.538658', 3, 2);
    await campus.addEdge('22.368160, 113.538613', '22.368120, 113.538658', 5, 3);
    await campus.addEdge('22.368160, 113.538613', '22.368262, 113.538691', 13, 8);
    await campus.addEdge('22.368160, 113.538613', '22.368256, 113.538495', 16, 12);
    await campus.addEdge('22.368254, 113.538027', '22.368256, 113.538495', 45, 32);
    await campus.addEdge('22.368254, 113.538027', '22.368408, 113.537764', 35, 23);
    await campus.addEdge('22.368407, 113.537657', '22.368408, 113.537764', 11, 6);

    await campus.addEdge('22.367797, 113.537512', '22.367851, 113.537254', 26, 17);
    await campus.addEdge('Basketball Court 1 (Gymnasium)', '22.367874, 113.537261', 8, 5);
    await campus.addEdge('Basketball Court 2 (Gymnasium)', '22.367851, 113.537254', 8, 5);
    await campus.addEdge('Basketball Court 2 (Gymnasium)', '22.367874, 113.537261', 14, 10);
    await campus.addEdge('Basketball Court 3 (Gymnasium)', '22.367851, 113.537254', 8, 5);
    await campus.addEdge('22.368002, 113.537549', '22.367874, 113.537261', 14, 11);

    await campus.addEdge('22.367274, 113.539759', '22.367524, 113.539776', 28, 16);

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
    await campus.addEdge('22.364260, 113.539524', '22.364244, 113.539683', 11, 10);
    await campus.addEdge('22.364260, 113.539524', '22.363943, 113.539571', 30, 24);
    await campus.addEdge('22.363822, 113.539595', '22.363943, 113.539571', 13, 9);
    await campus.addEdge('22.363822, 113.539595', '22.363768, 113.539566', 8, 5);
    await campus.addEdge('22.363471, 113.539533', '22.363768, 113.539566', 30, 18);
    await campus.addEdge('22.363471, 113.539533', '22.363235, 113.539528', 24, 16);
    await campus.addEdge('22.363409, 113.539354', '22.363235, 113.539528', 24, 17);

    await campus.addEdge('22.363471, 113.539533', '22.363497, 113.539378', 17, 10);
    await campus.addEdge('Canteen № 3', '22.363497, 113.539378', 2, 1);
    await campus.addEdge('Canteen № 3 Entrance 1', '22.363497, 113.539378', 2, 1);
    await campus.addEdge('Canteen № 3', '22.363497, 113.539378', 10, 6);
    await campus.addEdge('Canteen № 3 Entrance 3', '22.363497, 113.539378', 10, 6);
    await campus.addEdge('22.363409, 113.539354', '22.363497, 113.539378', 10, 7);
    await campus.addEdge('22.363409, 113.539354', '22.363369, 113.539271', 8, 6);
    await campus.addEdge('Canteen № 3', '22.363369, 113.539271', 1, 1);
    await campus.addEdge('Canteen № 3 Entrance 2', '22.363369, 113.539271', 1, 1);
    await campus.addEdge('Canteen № 3', '22.363369, 113.539271', 10, 7);
    await campus.addEdge('Canteen № 3 Entrance 4', '22.363369, 113.539271', 10, 7);
    await campus.addEdge('Canteen № 3 Entrance 5', '22.363634, 113.538989', 4, 2);
    await campus.addEdge('Canteen № 3 Public Toilet', '22.363634, 113.538989', 4, 2);
    await campus.addEdge('Canteen № 3 Entrance 5', 'Canteen № 3 Public Toilet', 1, 1);

    await campus.addEdge('22.363231, 113.539298', '22.363369, 113.539271', 14, 9);
    await campus.addEdge('22.363231, 113.539298', '22.363235, 113.539528', 25, 15);
    await campus.addEdge('22.363231, 113.539298', '22.363241, 113.538866', 60, 35);
    await campus.addEdge('22.363200, 113.538541', '22.363241, 113.538866', 11, 6);
    await campus.addEdge('22.363200, 113.538541', '22.363168, 113.538367', 19, 12);
    await campus.addEdge('22.363146, 113.538083', '22.363168, 113.538367', 30, 18);
    await campus.addEdge('22.363146, 113.538083', '22.362881, 113.537509', 67, 45);
    await campus.addEdge('22.362767, 113.537272', '22.362881, 113.537509', 29, 16);
    await campus.addEdge('22.362767, 113.537272', '22.362619, 113.537038', 28, 20);
    await campus.addEdge('22.362434, 113.536650', '22.362619, 113.537038', 44, 25);
    await campus.addEdge('22.362434, 113.536650', '22.362268, 113.536405', 32, 18);
    await campus.addEdge('22.362215, 113.536354', '22.362268, 113.536405', 8, 7);
    await campus.addEdge('22.362215, 113.536354', '22.362379, 113.535435', 97, 65);

    await campus.addEdge('22.362538, 113.535471', '22.362379, 113.535435', 16, 12);
    await campus.addEdge('Cafe in Fitness', '22.362538, 113.535471', 9, 5);
    await campus.addEdge('Swimming pool Entrance', '22.362538, 113.535471', 8, 5);
    await campus.addEdge('Swimming pool Entrance', 'Cafe in Fitness', 4, 2);
    await campus.addEdge('Fitness Standard', '22.362538, 113.535471', 10, 8);
    await campus.addEdge('Fitness Standard', 'Swimming pool Entrance', 5, 3);

    await campus.addEdge('22.363505, 113.538642', '22.363241, 113.538866', 31, 20);
    await campus.addEdge('22.363505, 113.538642', '22.363602, 113.538652', 12, 8);

    await campus.addEdge('22.363606, 113.538910', '22.363602, 113.538652', 26, 16);
    await campus.addEdge('22.363606, 113.538910', '22.363497, 113.538855', 14, 8);
    await campus.addEdge('22.363606, 113.538910', '22.363634, 113.538989', 11, 8);

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

    await campus.addEdge('22.365307, 113.541115', '22.365130, 113.541179', 18, 14);
    await campus.addEdge('22.365307, 113.541115', '22.365460, 113.541046', 17, 12);


    await campus.addEdge('22.365462, 113.540909', '22.365460, 113.541046', 9, 5);
    await campus.addEdge('22.365462, 113.540850', '22.365460, 113.541046', 10, 6);
    await campus.addEdge('22.365462, 113.540850', '22.365462, 113.540657', 20, 13);
    await campus.addEdge('22.365436, 113.540657', '22.365462, 113.540657', 5, 4);
    await campus.addEdge('Dormitory №15', '22.365436, 113.540657', 4, 2);
    await campus.addEdge('Dormitory №15 Entrance 1', '22.365436, 113.540657', 4, 2);
    await campus.addEdge('22.365462, 113.540628', '22.365462, 113.540657', 3, 1);
    await campus.addEdge('22.365462, 113.540628', '22.365462, 113.540557', 5, 3);
    await campus.addEdge('22.365254, 113.540557', '22.365462, 113.540557', 20, 14);
    await campus.addEdge('22.365434, 113.540308', '22.365462, 113.540557', 25, 19);


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
