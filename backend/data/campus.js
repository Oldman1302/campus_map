const Graph = require("../classes/graph");

/**
 * Builds and returns campus graph.
 * @returns {Promise<Graph>}
 */
async function loadCampusGraph() {
    const campus = new Graph("campus");

    await campus.addNode('Dormitory №3', [22.365735, 113.542591], null, true, 'dormitory');
    await campus.addNode('Dormitory №3 Entrance 1', [22.365620, 113.542570], null, false, 'gate'); // point 3370
    await campus.addNode('Dormitory №3 Entrance 2', [22.365612, 113.542539], null, false, 'gate'); // point 3367

    await campus.addNode('Dormitory №4', [22.365431, 113.542594], null, true, 'dormitory');
    await campus.addNode('Dormitory №4 Entrance 1', [22.365313, 113.542846], null, false, 'gate'); // point 3310
    await campus.addNode('Dormitory №4 Entrance 2', [22.365288, 113.542599], null, false, 'gate'); // point 3385
    await campus.addNode('Dormitory №4 Entrance 4', [22.365431, 113.542830], null, false, 'gate'); // point 3316
    await campus.addNode('Dormitory №4 Entrance 5', [22.365426, 113.542694], null, false, 'gate'); // point 3319
    await campus.addNode('Dormitory №4 Entrance 6', [22.365432, 113.542570], null, false, 'gate'); // point 3322
    await campus.addNode('Dormitory №4 Entrance 7', [22.365429, 113.542497], null, false, 'gate'); // point 3359
    await campus.addNode('Dormitory №4 Entrance 8', [22.365435, 113.542442], null, false, 'gate'); // point 3361
    await campus.addNode('Dormitory №4 Study Room', [22.365308, 113.542469], null, false, 'gate'); // point 3382

    await campus.addNode('Dormitory №5', [22.365043, 113.542443], null, true, 'dormitory');
    await campus.addNode('Dormitory №5 Entrance 1', [22.365035, 113.542676], null, false, 'gate'); // point 3305
    await campus.addNode('Dormitory №5 Entrance 2', [22.365012, 113.542527], null, false, 'gate'); // point 3304
    await campus.addNode('Dormitory №5 Entrance 3', [22.365005, 113.542256], null, false, 'gate'); // point 3302
    await campus.addNode('Dormitory №5 Entrance 4', [22.364949, 113.542618], null, false, 'gate'); // point 3252
    await campus.addNode('Dormitory №5 Entrance 5', [22.364945, 113.542534], null, false, 'gate'); // point 3254
    await campus.addNode('Dormitory №5 Entrance 6', [22.364942, 113.542430], null, false, 'gate'); // point 3256
    await campus.addNode('Dormitory №5 Study Room №1', [22.364944, 113.542262], null, false, 'gate'); // point 3296
    await campus.addNode('Dormitory №5 Study Room №2', [22.364950, 113.542234], null, false, 'gate'); // point 3297
    await campus.addNode('Dormitory №5 Study Room №3', [22.365041, 113.542174], null, false, 'gate'); // point 3303

    await campus.addNode('Dormitory №6', [22.364740, 113.542331], null, true, 'dormitory');
    await campus.addNode('Dormitory №6 Entrance 1', [22.364758, 113.542508], null, false, 'gate'); // point 3250
    await campus.addNode('Dormitory №6 Entrance 2', [22.364731, 113.542373], null, false, 'gate'); // point 3248
    await campus.addNode('Dormitory №6 Entrance 3', [22.364702, 113.542203], null, false, 'gate'); // point 3244
    await campus.addNode('Dormitory №6 Entrance 4', [22.364643, 113.542351], null, false, 'gate'); // point 3231
    await campus.addNode('Dormitory №6 Study Room №1 Entrance 1', [22.364708, 113.542176], null, false, 'gate'); // point 3242
    await campus.addNode('Dormitory №6 Study Room №1 Entrance 2', [22.364651, 113.542167], null, false, 'gate'); // point 3236
    await campus.addNode('Dormitory №6 Study Room №2', [22.364649, 113.542197], null, false, 'gate'); // point 3234
    await campus.addNode('Dormitory №6 Study Room №3', [22.364651, 113.542488], null, false, 'gate'); // point 2129

    await campus.addNode('Dormitory №8', [22.366037, 113.541184], null, true, 'dormitory');
    await campus.addNode('Dormitory №8 Entrance 1', [22.365929, 113.541183], null, true, 'gate'); // point 1467
    await campus.addNode('Dormitory №8 Dancing hall', [22.365934, 113.541008], null, true, 'gate'); // point 1470
    await campus.addNode('Dormitory №8 Study Room', [22.366038, 113.540985], null, true, 'gate'); // point 1477

    await campus.addNode('Dormitory №9', [22.365716, 113.541316], null, true, 'dormitory');
    await campus.addNode('Dormitory №9 Entrance 1', [22.365748, 113.541239], null, true, 'gate'); // point 1366
    await campus.addNode('Dormitory №9 Entrance 3', [22.365627, 113.541372], null, true, 'gate'); // point 1347
    await campus.addNode('Dormitory №9 Study Room', [22.365618, 113.541542], null, true, 'gate'); // point 1353
    await campus.addNode('Campus Store', [22.365669, 113.541133], null, true, 'store'); // point 1357

    await campus.addNode('Dormitory №10', [22.365344, 113.541462], null, true, 'dormitory');
    await campus.addNode('Dormitory №10 Entrance 1', [22.365464, 113.541275], null, true, 'gate'); // point 1342
    await campus.addNode('Dormitory №10 Entrance 2', [22.365464, 113.541576], null, true, 'gate'); // point 1350

    await campus.addNode('Dormitory №11', [22.365019, 113.541654], null, true, 'dormitory');
    await campus.addNode('Dormitory №11 Entrance 1', [22.364949, 113.541662], null, false, 'gate'); // point 2330

    await campus.addNode('Dormitory №12', [22.364729, 113.541683], null, true, 'dormitory');
    await campus.addNode('Dormitory №12 Entrance 1', [22.364740, 113.541437], null, false, 'gate'); // point 2320
    await campus.addNode('Dormitory №12 Entrance 2', [22.364736, 113.541681], null, false, 'gate'); // point 2334
    await campus.addNode('Dormitory №12 Entrance 3', [22.364736, 113.541751], null, false, 'gate'); // point 2336
    await campus.addNode('Dormitory №12 Entrance 4', [22.364770, 113.541859], null, false, 'gate'); // point 2338
    await campus.addNode('Dormitory №12 Entrance 5', [22.364653, 113.541531], null, false, 'gate'); // point 3180
    await campus.addNode('Dormitory №12 Entrance 6', [22.364651, 113.541678], null, false, 'gate'); // point 3178
    await campus.addNode('Dormitory №12 Entrance 7', [22.364647, 113.541764], null, false, 'gate'); // point 3173
    await campus.addNode('Dormitory №12 Study Room №1', [22.364664, 113.541416], null, false, 'gate'); // point 3184
    await campus.addNode('Dormitory №12 Study Room №2', [22.364665, 113.541437], null, false, 'gate'); // point 3183

    await campus.addNode('Dormitory №13', [22.365931, 113.540431], null, true, 'dormitory');
    await campus.addNode('Dormitory №13 Entrance 1', [22.366013, 113.540371], null, true, 'gate'); // point 1270
    await campus.addNode('Dormitory №13 Entrance 2', [22.365931, 113.540431], null, true, 'gate'); // point 1272
    await campus.addNode('Dormitory №13 Entrance 3', [22.365931, 113.540559], null, true, 'gate'); // point 1275

    await campus.addNode('Dormitory №14', [22.365671, 113.540536], null, true, 'dormitory');
    await campus.addNode('Dormitory №14 Entrance 1', [22.365620, 113.540321], null, true, 'gate');
    await campus.addNode('Dormitory №14 Entrance 2', [22.365620, 113.540550], null, true, 'gate');
    await campus.addNode('Dormitory №14 Entrance 3', [22.365620, 113.540800], null, true, 'gate');
    await campus.addNode('Dormitory №14 Entrance 3', [22.365724, 113.540550], null, false); // point 1264

    await campus.addNode('Dormitory №15', [22.365364, 113.540782], null, true, 'dormitory');
    await campus.addNode('Dormitory №15 学成驾校', [22.365284, 113.540709], null, true, 'car'); // point 452
    await campus.addNode('Dormitory №15 筞发伊人', [22.365284, 113.540826], null, true, 'barber'); // point 453
    await campus.addNode('Dormitory №15 Entrance 1', [22.365436, 113.540637], null, true, 'gate'); // point 458

    await campus.addNode('Dormitory №16', [22.365056, 113.540755], null, true, 'dormitory');
    await campus.addNode('咖啡工厂', [22.365017, 113.541047], null, true, 'drink'); // point 2327

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

    await campus.addNode('Dormitory №21', [22.363483, 113.542320], null, true, 'dormitory');
    await campus.addNode('Dormitory №21 Entrance 1', [22.363632, 113.542450], null, true, 'gate'); // point 2263
    await campus.addNode('Dormitory №21 Entrance 2', [22.363644, 113.542409], null, true, 'gate'); // point 2261
    await campus.addNode('Dormitory №21 Entrance 3', [22.363715, 113.542233], null, true, 'gate'); // point 2277
    await campus.addNode('Dormitory №21 Entrance 4', [22.363408, 113.542537], null, true, 'gate'); // point 2390
    await campus.addNode('Dormitory №21 Entrance 5', [22.363594, 113.542210], null, true, 'gate'); // point 2407

    await campus.addNode('Dormitory №22', [22.362907, 113.542007], null, true, 'dormitory');
    await campus.addNode('Dormitory №22 Entrance 1', [22.362833, 113.542220], null, true, 'gate'); // point 2412
    await campus.addNode('Dormitory №22 Entrance 2', [22.362983, 113.541965], null, true, 'gate'); // point 2476

    await campus.addNode('Dormitory №23', [22.363130, 113.541509], null, true, 'dormitory');
    await campus.addNode('Dormitory №23 Entrance 1', [22.363000, 113.541683], null, true, 'gate'); // point 2480
    await campus.addNode('Dormitory №23 Entrance 2', [22.363167, 113.541382], null, true, 'gate'); // point 3109

    await campus.addNode('Dormitory №27', [22.363988, 113.539923], null, true, 'dormitory');
    await campus.addNode('Dormitory №27 Entrance 1', [22.363970, 113.539726], null, true, 'gate'); // point 948
    await campus.addNode('Dormitory №27 Entrance 2', [22.364116, 113.539952], null, true, 'gate'); // point 1051

    await campus.addNode('Dormitory №28', [22.363494, 113.539825], null, true, 'dormitory');
    await campus.addNode('Dormitory №28 Entrance 1', [22.363514, 113.539636], null, true, 'gate'); // point 949

    await campus.addNode('Dormitory №29', [22.362833, 113.539830], null, true, 'dormitory');
    await campus.addNode('Dormitory №29 Entrance 1', [22.362829, 113.539613], null, true, 'gate'); // point 909

    await campus.addNode('Dormitory №30', [22.362275, 113.539984], null, true, 'dormitory');
    await campus.addNode('Dormitory №30 Entrance 1', [22.362287, 113.539638], null, true, 'gate'); // point 907

    await campus.addNode('Dormitory №31', [22.362935, 113.539117], null, true, 'dormitory');
    await campus.addNode('Dormitory №31 Entrance 1', [22.362891, 113.539402], null, true, 'gate'); // point 907

    await campus.addNode('Dormitory №32', [22.362387, 113.539125], null, true, 'dormitory');
    await campus.addNode('Dormitory №32 Entrance 1', [22.362361, 113.539402], null, true, 'gate'); // point 929

    await campus.addNode('Dormitory №33', [22.361827, 113.539024], null, true, 'dormitory');
    await campus.addNode('Dormitory №33 Entrance 1', [22.361813, 113.539437], null, true, 'gate'); // point 1001
    await campus.addNode('Dormitory №33 Entrance 2', [22.361819, 113.538745], null, true, 'gate'); // point 1873

    await campus.addNode('Dormitory №36', [22.362743, 113.538043], null, true, 'dormitory');
    await campus.addNode('Dormitory №36 Entrance 1', [22.362705, 113.538483], null, true, 'gate'); // point 782

    await campus.addNode('Dormitory №37', [22.361678, 113.538148], null, true, 'dormitory');
    await campus.addNode('Dormitory №37 Entrance 1', [22.361652, 113.537985], null, true, 'gate'); // point 1825
    await campus.addNode('Dormitory №37 Entrance 2', [22.361733, 113.537985], null, true, 'gate'); // point 1827
    await campus.addNode('Dormitory №37 Entrance 3', [22.361648, 113.538377], null, true, 'gate'); // point 1870
    await campus.addNode('Dormitory №37 Break Room', [22.361497, 113.538249], null, true, 'kitchen'); // point 1865

    await campus.addNode('Canteen № 1', [22.363824, 113.541718], null, true, 'cafe');
    await campus.addNode('Canteen № 1 Entrance 1', [22.363772, 113.541534], null, true, 'gate'); // point 3115
    await campus.addNode('Canteen № 1 Entrance 2', [22.364062, 113.541835], null, true, 'gate'); // point 3163
    await campus.addNode('Canteen № 1 Entrance 3', [22.363756, 113.542000], null, true, 'gate');
    await campus.addNode('Canteen № 1 Female Toilet', [22.363990, 113.542010], null, true, 'toilet'); // point 2279

    await campus.addNode('Canteen № 3', [22.363506, 113.539146], null, true, 'cafe');
    await campus.addNode('Canteen № 3 Entrance 1', [22.363501, 113.539378], null, true, 'gate'); // point 374
    await campus.addNode('Canteen № 3 Entrance 2', [22.363406, 113.539271], null, true, 'gate'); // point 378
    await campus.addNode('Canteen № 3 Entrance 3', [22.363576, 113.539361], null, true, 'gate'); // point 375
    await campus.addNode('Canteen № 3 Entrance 4', [22.363404, 113.539189], null, true, 'gate'); // point 375
    await campus.addNode('Canteen № 3 Entrance 5', [22.363639, 113.539036], null, true, 'gate'); // point 410
    await campus.addNode('Canteen № 3 Public Toilet', [22.363603, 113.539024], null, true, 'toilet'); // point 411

    await campus.addNode('Canteen № 4', [22.362206, 113.538239], null, true, 'cafe');
    await campus.addNode('Canteen № 4 Entrance 1', [22.362239, 113.538464], null, true, 'gate');
    await campus.addNode('Canteen № 4 Entrance 2', [22.362177, 113.538464], null, true, 'gate'); // point 817
    await campus.addNode('民以食为先', [22.362387, 113.538464], null, true, 'cafe'); // point 785
    await campus.addNode('珍轩小卖都', [22.362111, 113.538464], null, true, 'cafe'); // point 819
    await campus.addNode('大米厨娘', [22.362012, 113.538464], null, true, 'cafe'); // point 822

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
    await campus.addNode('Hongyi building Main Entrance', [22.370205, 113.535736], null, false, 'gate'); // point 681
    await campus.addNode('Hongyi building (H) Entrance 1', [22.370264, 113.536049], null, false, 'gate'); // point 679
    await campus.addNode('Hongyi building (H) Entrance 2', [22.370264, 113.536834], null, false, 'gate'); // point 674
    await campus.addNode('Hongyi building (F) Entrance 1', [22.370204, 113.535450], null, false, 'gate'); // point 1185
    await campus.addNode('Hongyi building (F) Entrance 2', [22.370245, 113.534773], null, false, 'gate'); // point 1898
    await campus.addNode('Hongyi building (E) Entrance 1', [22.370672, 113.534847], null, false, 'gate'); // point 1969
    await campus.addNode('Hongyi building (B) Entrance 1', [22.371184, 113.534738], null, false, 'gate'); // point 1977
    await campus.addNode('Hongyi building (B) Entrance 2', [22.371199, 113.535304], null, false, 'gate'); // point 2193
    await campus.addNode('Hongyi building (С) Entrance 1', [22.371180, 113.536852], null, false, 'gate'); // point 2058
    await campus.addNode('Hongyi building (D) Entrance 1', [22.370690, 113.536743], null, false, 'gate'); // point 2051
    await campus.addNode('Hongyi building (A) Main Entrance', [22.371296, 113.535798], null, false, 'gate'); // point 2186
    await campus.addNode('Hongyi building (A) Entrance 2', [22.371203, 113.535392], null, false, 'gate'); // point 2194
    await campus.addNode('Hongyi building Natural Grass Football Field', [22.370497, 113.537599], null, false, 'football_field'); // point 2174

    await campus.addNode('Tianyou building', [22.371137, 113.532667], null, true, 'educational_building');
    await campus.addNode('Tianyou building (A) Smart Energy Laboratory', [22.371267, 113.533655], null, false, 'laboratory'); // point 2721
    await campus.addNode('Tianyou building (B) Main Entrance', [22.371364, 113.532698], null, false, 'gate'); // point 2709
    await campus.addNode('Tianyou building (B) Male Toilet (1)', [22.371022, 113.533415], null, true, 'toilet');
    await campus.addNode('Tianyou building (B) Female Toilet (1)', [22.371058, 113.533406], null, true, 'toilet');
    await campus.addNode('Tianyou building (B) Female Toilet (2)', [22.371084, 113.531958], null, true, 'toilet');
    await campus.addNode('Tianyou building (B) Male Toilet (2)', [22.371025, 113.532020], null, true, 'toilet');

    await campus.addNode('Yiyue building', [22.371488, 113.530180], null, true, 'educational_building');
    await campus.addNode('Yiyue building (A) Entrance 1', [22.371669, 113.530537], null, false, 'gate'); // point 2783
    await campus.addNode('Yiyue building (A) Entrance 2', [22.371402, 113.530223], null, false, 'gate'); // point 2796
    await campus.addNode('Yiyue building (B) Main Entrance', [22.371643, 113.530059], null, false, 'gate'); // point 2787
    await campus.addNode('Yiyue building (B) Entrance 2', [22.371406, 113.530159], null, false, 'gate'); // point 2795

    await campus.addNode('Zhixing building', [22.371707, 113.528791], null, true, 'educational_building');
    await campus.addNode('Zhixing building (A) Entrance 1', [22.371881, 113.529086], null, false, 'gate'); // point 2846
    await campus.addNode('Zhixing building (A) Entrance 2', [22.371624, 113.529200], null, false, 'gate'); // point 2864
    await campus.addNode('Zhixing building (B) Entrance 1', [22.371844, 113.528416], null, false, 'gate'); // point 2850
    await campus.addNode('Zhixing building (B) Entrance 2', [22.371587, 113.528248], null, false, 'gate'); // point 2859
    await campus.addNode('Zhixing building Main Entrance', [22.371810, 113.528771], null, false, 'gate');
    await campus.addNode('Zhixing building Back Entrance', [22.371584, 113.528757], null, false, 'gate'); // point 2861

    await campus.addNode('Qiushi building', [22.371599, 113.526899], null, true, 'educational_building');
    await campus.addNode('Qiushi building (A) Entrance 1', [22.371881, 113.529086], null, false, 'gate'); // point 2870
    await campus.addNode('Qiushi building (A) Entrance 2', [22.371605, 113.527041], null, false, 'gate'); // point 2910
    await campus.addNode('Qiushi building (A) Entrance 3', [22.371489, 113.527432], null, false, 'gate'); // point 2914
    await campus.addNode('Qiushi building (C) Entrance 1', [22.371593, 113.526335], null, false, 'gate'); // point 2928
    await campus.addNode('Qiushi building (C) Entrance 2', [22.371579, 113.526751], null, false, 'gate'); // point 2911
    await campus.addNode('Qiushi building (C) Entrance 3', [22.371367, 113.526331], null, false, 'gate'); // point 2917

    await campus.addNode('Jinggong building', [22.371011, 113.522899], null, true, 'educational_building');
    await campus.addNode('Jinggong building Main Entrance', [22.371232, 113.522905], null, false, 'gate'); // point 2935
    await campus.addNode('Jinggong building Entrance 1', [22.371062, 113.523427], null, false, 'gate'); // point 2938

    await campus.addNode('East gate', [22.367168, 113.545280], null, true, "default"); // because main  East Gate is not working, it's closed
    await campus.addNode('East gate Entrance 1', [22.366021, 113.544787], null, true, "gate");
    await campus.addNode('East gate Entrance 1 (cars)', [22.365862, 113.544687], null, true, "gate"); // point 171
    await campus.addNode('East gate Entrance 2 (cars)', [22.365618, 113.544584], null, true, "gate"); // point 175
    await campus.addNode('East gate Entrance 2', [22.365478, 113.544478], null, true, "gate"); // point 178

    await campus.addNode('Southeast Gate', [22.360068, 113.541545], null, true, "gate"); // point 2669

    await campus.addNode('North gate Entrance 1', [22.371983, 113.534488], null, true, "gate"); // point 1986

    await campus.addNode('China post', [22.365332, 113.541287], null, true, 'post_office');
    await campus.addNode('YTO Express', [22.361727, 113.539189], null, true, 'post_office'); // point 1023
    await campus.addNode('SF Express', [22.361756, 113.539079], null, true, 'post_office'); // point 1025
    await campus.addNode('ZTO Express Entrance 2', [22.361641, 113.538903], null, true, 'post_office'); // point 2978
    await campus.addNode('JD Express', [22.361672, 113.538748], null, true, 'post_office'); // point 2980

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

    await campus.addNode('Main Volleyball Courts', [22.366846, 113.540720], null, false, 'volleyball_court');
    await campus.addNode('Main Volleyball Courts Entrance', [22.366938, 113.541074], null, false, 'gate'); // point 862

    await campus.addNode('Car Charging Station', [22.366787, 113.541399], null, false, 'charging'); // point 867

    await campus.addNode('Badminton Hall', [22.367380, 113.541269], null, true, 'badminton_court');
    await campus.addNode('Badminton Hall Main Entrance', [22.367334, 113.541541], null, false, 'gate'); // point 637
    await campus.addNode('Badminton Hall Entrance 1', [22.367003, 113.541368], null, false, 'gate'); // point 864
    await campus.addNode('Badminton Hall Entrance 2', [22.367739, 113.541430], null, false, 'gate'); // point 754

    await campus.addNode('BIT Football Field', [22.367525, 113.542655], null, false, 'football_field');
    await campus.addNode('BIT Football Field Entrance 1', [22.366675, 113.541922], null, false, 'gate'); // point 629
    await campus.addNode('BIT Football Field Entrance 2', [22.367089, 113.541906], null, false, 'gate'); // point 633
    await campus.addNode('BIT Football Field Entrance 3', [22.367251, 113.541906], null, false, 'gate'); // point 635
    await campus.addNode('BIT Football Field Entrance 4', [22.367436, 113.541906], null, false, 'gate'); // point 699
    await campus.addNode('BIT Football Field Entrance 5', [22.367616, 113.541906], null, false, 'gate'); // point 702
    await campus.addNode('BIT Football Field Entrance 6', [22.367809, 113.541906], null, false, 'gate'); // point 750
    await campus.addNode('BIT Football Field Entrance 7', [22.367963, 113.541906], null, false, 'gate'); // point 756
    await campus.addNode('BIT Football Field Entrance 8', [22.368415, 113.542115], null, false, 'gate'); // point 760
    await campus.addNode('BIT Football Field Entrance 9', [22.368117, 113.543196], null, false, 'gate'); // point 802
    await campus.addNode('BIT Football Field Entrance 10', [22.366770, 113.543203], null, false, 'gate'); // point 828
    await campus.addNode('BIT Football Field Public Toilet', [22.367002, 113.541949], null, true, 'toilet'); // point 704

    await campus.addNode('Public Toilet (1)', [22.368216, 113.543356], null, true, 'toilet'); // point 804

    await campus.addNode('Basketball Courts (East Gate)', [22.367740, 113.543720], null, true, 'basketball_court');
    await campus.addNode('Basketball Courts (East Gate) Entrance 1', [22.367730, 113.543329], null, false, 'gate'); // point 806
    await campus.addNode('Basketball Courts (East Gate) Entrance 2', [22.367457, 113.543719], null, false, 'gate'); // point 835
    await campus.addNode('Basketball Courts (East Gate) Entrance 3', [22.368032, 113.543783], null, false, 'gate'); // point 888

    await campus.addNode('Tennis Courts (East Gate)', [22.366996, 113.543719], null, true, 'tennis_court');
    await campus.addNode('Tennis Courts (East Gate) Entrance 1', [22.366687, 113.543326], null, false, 'gate'); // point 825
    await campus.addNode('Tennis Courts (East Gate) Entrance 2', [22.367296, 113.543326], null, false, 'gate'); // point 831
    await campus.addNode('Tennis Courts (East Gate) Entrance 3', [22.367314, 113.543719], null, false, 'gate'); // point 834

    await campus.addNode('Fitness Standard', [22.362609, 113.535467], null, true, 'gym'); // point 425
    await campus.addNode('Cafe in Fitness', [22.362566, 113.535393], null, true, 'cafe'); // point 423
    await campus.addNode('Swimming pool Entrance', [22.362594, 113.535434], null, true, 'swimming_pool'); // point 424

    await campus.addNode('BIT Gymnasium', [22.367923, 113.535751], null, true, 'gymnasium');
    await campus.addNode('BIT Gymnasium Main Entrance', [22.368341, 113.535773], null, false, 'gate'); // point 1430
    await campus.addNode('BIT Gymnasium Entrance 1', [22.367631, 113.536155], null, false, 'gate'); // point 1557
    await campus.addNode('BIT Gymnasium Entrance 2', [22.367722, 113.536155], null, false, 'gate'); // point 1555
    await campus.addNode('BIT Gymnasium Entrance 3', [22.367814, 113.536155], null, false, 'gate'); // point 1553
    await campus.addNode('BIT Gymnasium Entrance 4', [22.367959, 113.536155], null, false, 'gate'); // point 1549
    await campus.addNode('BIT Gymnasium Entrance 5', [22.368075, 113.536155], null, false, 'gate'); // point 1547
    await campus.addNode('Gymnasium Public Toilet (1)', [22.368344, 113.536095], null, true, 'toilet'); // point 1543
    await campus.addNode('Gymnasium Public Toilet (2)', [22.368361, 113.535509], null, true, 'toilet'); // point 1560
    await campus.addNode('BIT Gymnasium Concert Hall', [22.367869, 113.536198], null, false, 'gate'); // point 1551

    await campus.addNode('Basketball Court 1 (Gymnasium)', [22.368156, 113.537363], null, false, 'basketball_court'); // point 509
    await campus.addNode('Basketball Court 2 (Gymnasium)', [22.367964, 113.537291], null, false, 'basketball_court'); // point 507
    await campus.addNode('Basketball Court 3 (Gymnasium)', [22.367752, 113.537223], null, false, 'basketball_court'); // point 511
    await campus.addNode('Football Court (Gymnasium)', [22.368880, 113.537634], null, false, 'football_field'); // point 573
    await campus.addNode('Tennis Court (Gymnasium)', [22.368884, 113.537901], null, false, 'tennis_court'); // point 577

    await campus.addNode('Basketball Court 1 (Lake)', [22.367778, 113.538904], null, false, 'basketball_court'); // point 492
    await campus.addNode('Basketball Court 2 (Lake)', [22.367747, 113.539133], null, false, 'basketball_court'); // point 490

    await campus.addNode('Bridge (Gymnasium)', [22.368020, 113.538063], null, false, 'bridge'); // point 566

    await campus.addNode('BIT Hospital', [22.365109, 113.543199], null, true, 'hospital'); // point 1776
    await campus.addNode('BIT Hospital Entrance 1', [22.365117, 113.543239], null, false, 'gate'); // point 1748
    await campus.addNode('BIT Hospital Entrance 2', [22.365032, 113.543100], null, false, 'gate'); // point 1776

    await campus.addNode('Building T1', [22.366198, 113.543858], null, true, 'dormitory');

    await campus.addNode('Building T6', [22.365075, 113.543204], null, true, 'dormitory');
    await campus.addNode('Building T6 Entrance 1', [22.365084, 113.543113], null, false, 'gate'); // point 1751

    await campus.addNode('Building T7', [22.364771, 113.543029], null, true, 'dormitory');
    await campus.addNode('Building T7 Entrance 1', [22.364778, 113.543144], null, false, 'gate'); // point 1741
    await campus.addNode('Building T7 Entrance 2', [22.364795, 113.542959], null, false, 'gate'); // point 1745
    await campus.addNode('Building T7 Entrance 3', [22.364660, 113.543099], null, false, 'gate'); // point 1754

    await campus.addNode('Building T8', [22.364471, 113.542888], null, true, 'dormitory');
    await campus.addNode('Building T8 Entrance 1', [22.364478, 113.543031], null, false, 'gate'); // point 1757
    await campus.addNode('Building T8 Entrance 2', [22.364460, 113.542806], null, false, 'gate'); // point 1757

    await campus.addNode('Building T9', [22.363942, 113.542464], null, true, 'dormitory');
    await campus.addNode('Building T9 Entrance 1', [22.363751, 113.542689], null, false, 'gate'); // point 2255
    await campus.addNode('Building T9 Entrance 2', [22.363802, 113.542563], null, false, 'gate'); // point 2257
    await campus.addNode('Building T9 Entrance 3', [22.363859, 113.542428], null, false, 'gate'); // point 2266
    await campus.addNode('Building T9 Entrance 4', [22.363908, 113.542287], null, false, 'gate'); // point 2270

    await campus.addNode('Building №1', [22.360660, 113.540820], null, true, "default");
    await campus.addNode('Building №1 Entrance 1', [22.360637, 113.540921], null, false, 'gate'); // point 2666

    await campus.addNode('Building №2', [22.360888, 113.540354], null, true, "default");
    await campus.addNode('Building №2 Entrance 1', [22.360833, 113.540456], null, false, 'gate'); // point 2666

    await campus.addNode('Building №3', [22.361096, 113.539898], null, true, "default");
    await campus.addNode('Building №3 Entrance 1', [22.361089, 113.539956], null, false, 'gate'); // point 2993

    await campus.addNode('Building №4', [22.361490, 113.539736], null, true, "default");
    await campus.addNode('Building №4 Entrance 1', [22.361375, 113.539917], null, false, 'gate'); // point 2986

    await campus.addNode('Building №5', [22.360982, 113.540951], null, true, "default");
    await campus.addNode('Building №5 Entrance 1', [22.360967, 113.540999], null, false, 'gate'); // point 2653

    await campus.addNode('Building №6', [22.361615, 113.540241], null, true, "default");
    await campus.addNode('Building №6 Entrance 1', [22.361471, 113.540443], null, false, 'gate'); // point 3031
    await campus.addNode('Building №6 Entrance 2', [22.361559, 113.540237], null, false, 'gate'); // point 3029

    await campus.addNode('Building №7', [22.361293, 113.541140], null, true, "default");
    await campus.addNode('Building №7 Entrance 1', [22.361183, 113.541177], null, false, 'gate'); // point 2651

    await campus.addNode('Building №8', [22.361942, 113.540454], null, true, "default");
    await campus.addNode('Building №8 Entrance 1', [22.361827, 113.540525], null, false, 'gate'); // point 3048

    await campus.addNode('Building №9', [22.361628, 113.541222], null, true, "default");
    await campus.addNode('Building №9 Entrance 1', [22.361596, 113.541399], null, false, 'gate'); // point 2611
    await campus.addNode('Building №9 Entrance 2', [22.361683, 113.541186], null, false, 'gate'); // point 2603

    await campus.addNode('Building №10', [22.362184, 113.540827], null, true, "default");
    await campus.addNode('Building №10 Entrance 1', [22.362105, 113.541009], null, false, 'gate'); // point 3098
    await campus.addNode('Building №10 Entrance 2', [22.362150, 113.540907], null, false, 'gate'); // point 3096

    await campus.addNode('Building №11', [22.361907, 113.541463], null, true, "default");
    await campus.addNode('Building №11 Entrance 1', [22.361917, 113.541574], null, false, 'gate'); // point 2590

    await campus.addNode('Building №12', [22.362198, 113.541661], null, true, "default");
    await campus.addNode('Building №12 Entrance 1', [22.362103, 113.541683], null, false, 'gate'); // point 2587
    await campus.addNode('Building №12 北京理工大学珠海学院绿色康氧中心', [22.362088, 113.541842], null, true, "gate");

    await campus.addNode('Underground Parking (Delivery Office)', [22.361211, 113.539703], null, false, "parking"); // point 2990
    await campus.addNode('Underground Parking (Southeast Gate)', [22.361252, 113.541450], null, false, "parking");

    await campus.addNode('Electrical Swithboard (East Gate)', [22.364097, 113.542896], null, true, "electricity");
    await campus.addNode('Electrical Swithboard (East Gate) Entrance 1', [22.364084, 113.542954], null, false, 'gate'); // point 2114
    await campus.addNode('Electrical Swithboard (East Gate) Entrance 2', [22.364139, 113.542858], null, false, 'gate'); // point 2111
    await campus.addNode('China Unicom', [22.364364, 113.542820], null, true, 'gate'); // point 2125

    await campus.addNode('22.367268, 113.544894', [22.367268, 113.544894], null, false);
    await campus.addNode('22.366176, 113.544281', [22.366182, 113.544250], null, false)
    await campus.addNode('22.366319, 113.543953', [22.366319, 113.543953], null, false);
    await campus.addNode('22.366475, 113.543623', [22.366475, 113.543623], null, false);
    await campus.addNode('22.366066, 113.544259', [22.366066, 113.544259], null, false);
    await campus.addNode('22.365812, 113.544095', [22.365812, 113.544095], null, false);
    await campus.addNode('22.365489, 113.543882', [22.365489, 113.543882], null, false);
    await campus.addNode('22.365159, 113.543665', [22.365159, 113.543665], null, false);
    await campus.addNode('22.365163, 113.543197', [22.365163, 113.543197], null, false);
    await campus.addNode('22.365104, 113.543142', [22.365104, 113.543142], null, false); // point 1749
    await campus.addNode('22.365101, 113.543113', [22.365101, 113.543113], null, false); // point 1750
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
    await campus.addNode('22.366295, 113.544191', [22.366295, 113.544191], null, false); // point 878
    await campus.addNode('22.366513, 113.543691', [22.366513, 113.543691], null, false); // point 881
    await campus.addNode('22.366714, 113.544514', [22.366714, 113.544514], null, false); // point 882
    await campus.addNode('22.365768, 113.540550', [22.365768, 113.540550], null, false); // point 1263
    await campus.addNode('22.365768, 113.540769', [22.365768, 113.540769], null, false); // point 1265
    await campus.addNode('22.366485, 113.540300', [22.366485, 113.540300], null, false);
    await campus.addNode('22.365056, 113.542272', [22.365056, 113.542272], null, false); // point 3301
    await campus.addNode('22.365199, 113.542637', [22.365199, 113.542637], null, false); // point 3306
    await campus.addNode('22.365267, 113.542608', [22.365267, 113.542608], null, false); // point 3307
    await campus.addNode('22.365266, 113.542804', [22.365266, 113.542804], null, false); // point 3308
    await campus.addNode('22.365291, 113.542851', [22.365291, 113.542851], null, false); // point 3309
    await campus.addNode('22.365294, 113.542881', [22.365294, 113.542881], null, false); // point 3311
    await campus.addNode('22.365193, 113.542880', [22.365193, 113.542880], null, false); // point 3312
    await campus.addNode('22.365269, 113.542565', [22.365269, 113.542565], null, false); // point 3383
    await campus.addNode('22.365269, 113.542602', [22.365269, 113.542602], null, false); // point 3384

    await campus.addNode('22.364868, 113.543517', [22.364868, 113.543517], null, false); // point 1737
    await campus.addNode('22.364551, 113.543359', [22.364551, 113.543359], null, false); // point 1752
    await campus.addNode('22.364165, 113.543167', [22.364165, 113.543167], null, false); // point 2108
    await campus.addNode('22.364033, 113.543103', [22.364033, 113.543103], null, false); // point 2116
    await campus.addNode('22.364083, 113.543131', [22.364083, 113.543131], null, false); // point 2117
    await campus.addNode('22.363899, 113.543034', [22.363899, 113.543034], null, false); // point 2250
    await campus.addNode('22.363627, 113.542896', [22.363627, 113.542896], null, false); // point 2251
    await campus.addNode('22.363349, 113.542742', [22.363349, 113.542742], null, false); // point 2388
    await campus.addNode('22.363279, 113.542709', [22.363279, 113.542709], null, false); // point 2394
    await campus.addNode('22.363052, 113.542588', [22.363052, 113.542588], null, false); // point 2395
    await campus.addNode('22.362793, 113.542437', [22.362793, 113.542437], null, false); // point 2410
    await campus.addNode('22.362695, 113.542380', [22.362695, 113.542380], null, false); // point 2414
    await campus.addNode('22.362448, 113.542248', [22.362448, 113.542248], null, false); // point 2459
    await campus.addNode('22.362125, 113.542068', [22.362125, 113.542068], null, false); // point 2482
    await campus.addNode('22.362034, 113.541974', [22.362034, 113.541974], null, false); // point 2486
    await campus.addNode('22.361870, 113.541908', [22.361870, 113.541908], null, false); // point 2487
    await campus.addNode('22.361213, 113.541541', [22.361213, 113.541541], null, false); // point 2647
    await campus.addNode('22.360923, 113.541394', [22.360923, 113.541394], null, false); // point 2649

    await campus.addNode('22.361061, 113.541113', [22.361061, 113.541113], null, false); // point 2650
    await campus.addNode('22.361083, 113.541074', [22.361083, 113.541074], null, false); // point 2652
    await campus.addNode('22.361151, 113.540930', [22.361151, 113.540930], null, false); // point 2654
    await campus.addNode('22.361331, 113.540985', [22.361331, 113.540985], null, false); // point 2655
    await campus.addNode('22.361451, 113.540988', [22.361451, 113.540988], null, false); // point 2656
    await campus.addNode('22.361596, 113.540928', [22.361596, 113.540928], null, false); // point 2657
    await campus.addNode('22.361729, 113.540912', [22.361729, 113.540912], null, false); // point 2658
    await campus.addNode('22.361807, 113.540983', [22.361807, 113.540983], null, false); // point 2659
    await campus.addNode('22.361828, 113.541074', [22.361828, 113.541074], null, false); // point 2660
    await campus.addNode('22.361098, 113.540799', [22.361098, 113.540799], null, false); // point 2661
    await campus.addNode('22.361025, 113.540679', [22.361025, 113.540679], null, false); // point 2663
    await campus.addNode('22.361748, 113.540809', [22.361748, 113.540809], null, false); // point 3042
    await campus.addNode('22.361815, 113.540898', [22.361815, 113.540898], null, false); // point 3054

    await campus.addNode('22.360802, 113.540775', [22.360802, 113.540775], null, false); // point 2664
    await campus.addNode('22.360707, 113.540967', [22.360707, 113.540967], null, false); // point 2665
    await campus.addNode('22.360670, 113.541084', [22.360670, 113.541084], null, false); // point 2667

    await campus.addNode('22.360313, 113.541073', [22.360313, 113.541073], null, false); // point 2668
    await campus.addNode('22.360973, 113.539544', [22.360973, 113.539544], null, false); // point 2670

    await campus.addNode('22.362164, 113.541941', [22.362164, 113.541941], null, false); // point 2483
    await campus.addNode('22.362078, 113.541885', [22.362078, 113.541885], null, false); // point 2484

    await campus.addNode('22.361991, 113.541637', [22.361991, 113.541637], null, false); // point 2585
    await campus.addNode('22.362080, 113.541672', [22.362080, 113.541672], null, false); // point 2586
    await campus.addNode('22.362132, 113.541559', [22.362132, 113.541559], null, false); // point 2588
    await campus.addNode('22.362056, 113.541526', [22.362056, 113.541526], null, false); // point 2589
    await campus.addNode('22.362066, 113.541454', [22.362066, 113.541454], null, false); // point 2591
    await campus.addNode('22.362024, 113.541356', [22.362024, 113.541356], null, false); // point 2592
    await campus.addNode('22.362081, 113.541313', [22.362081, 113.541313], null, false); // point 2593
    await campus.addNode('22.362306, 113.541448', [22.362306, 113.541448], null, false); // point 2594
    await campus.addNode('22.361985, 113.541300', [22.361985, 113.541300], null, false); // point 2595

    await campus.addNode('22.362062, 113.541238', [22.362062, 113.541238], null, false); // point 2596
    await campus.addNode('22.362101, 113.541139', [22.362101, 113.541139], null, false); // point 2597
    await campus.addNode('22.362259, 113.540775', [22.362259, 113.540775], null, false); // point 3094
    await campus.addNode('22.362194, 113.540926', [22.362194, 113.540926], null, false); // point 3095
    await campus.addNode('22.362145, 113.541033', [22.362145, 113.541033], null, false); // point 3097

    await campus.addNode('22.361921, 113.541291', [22.361921, 113.541291], null, false); // point 2598
    await campus.addNode('22.361867, 113.541212', [22.361867, 113.541212], null, false); // point 2599
    await campus.addNode('22.361831, 113.541123', [22.361831, 113.541123], null, false); // point 2600
    await campus.addNode('22.361749, 113.541168', [22.361749, 113.541168], null, false); // point 2601
    await campus.addNode('22.361716, 113.541207', [22.361716, 113.541207], null, false); // point 2602
    await campus.addNode('22.361753, 113.541276', [22.361753, 113.541276], null, false); // point 2604
    await campus.addNode('22.361762, 113.541340', [22.361762, 113.541340], null, false); // point 2605
    await campus.addNode('22.361836, 113.541345', [22.361836, 113.541345], null, false); // point 2606
    await campus.addNode('22.361678, 113.541373', [22.361678, 113.541373], null, false); // point 2607
    await campus.addNode('22.361656, 113.541398', [22.361656, 113.541398], null, false); // point 2608
    await campus.addNode('22.361637, 113.541389', [22.361637, 113.541389], null, false); // point 2609
    await campus.addNode('22.361641, 113.541427', [22.361641, 113.541427], null, false); // point 2610
    await campus.addNode('22.361565, 113.541607', [22.361565, 113.541607], null, false); // point 2612

    await campus.addNode('22.362475, 113.542165', [22.362475, 113.542165], null, false); // point 2460
    await campus.addNode('22.362301, 113.541942', [22.362301, 113.541942], null, false); // point 2461
    await campus.addNode('22.362532, 113.541322', [22.362532, 113.541322], null, false); // point 2462
    await campus.addNode('22.362631, 113.541402', [22.362631, 113.541402], null, false); // point 2463
    await campus.addNode('22.362547, 113.541612', [22.362547, 113.541612], null, false); // point 2464
    await campus.addNode('22.362434, 113.541931', [22.362434, 113.541931], null, false); // point 2465
    await campus.addNode('22.362613, 113.541640', [22.362613, 113.541640], null, false); // point 2466
    await campus.addNode('22.362617, 113.541651', [22.362617, 113.541651], null, false); // point 2467
    await campus.addNode('22.362669, 113.541680', [22.362669, 113.541680], null, false); // point 2468
    await campus.addNode('22.362628, 113.541811', [22.362628, 113.541811], null, false); // point 2469
    await campus.addNode('22.362701, 113.541631', [22.362701, 113.541631], null, false); // point 2470
    await campus.addNode('22.362582, 113.541167', [22.362582, 113.541167], null, false); // point 3099
    await campus.addNode('22.362712, 113.541442', [22.362712, 113.541442], null, false); // point 3100
    await campus.addNode('22.362732, 113.541266', [22.362732, 113.541266], null, false); // point 3101

    await campus.addNode('22.362842, 113.542313', [22.362842, 113.542313], null, false); // point 2411
    await campus.addNode('22.362742, 113.542245', [22.362742, 113.542245], null, false); // point 2413

    await campus.addNode('22.363089, 113.542496', [22.363089, 113.542496], null, false); // point 2396
    await campus.addNode('22.363119, 113.542519', [22.363119, 113.542519], null, false); // point 2397
    await campus.addNode('22.363252, 113.542111', [22.363252, 113.542111], null, false); // point 2398
    await campus.addNode('22.363292, 113.542075', [22.363292, 113.542075], null, false); // point 2399
    await campus.addNode('22.363246, 113.542054', [22.363246, 113.542054], null, false); // point 2400

    await campus.addNode('22.363395, 113.542602', [22.363395, 113.542602], null, false); // point 2389
    await campus.addNode('22.363350, 113.542582', [22.363350, 113.542582], null, false); // point 2391
    await campus.addNode('22.363313, 113.542619', [22.363313, 113.542619], null, false); // point 2392
    await campus.addNode('22.363193, 113.542536', [22.363193, 113.542536], null, false); // point 2393

    await campus.addNode('22.364247, 113.542852', [22.364247, 113.542852], null, false); // point 2109
    await campus.addNode('22.364277, 113.542721', [22.364277, 113.542721], null, false); // point 2118
    await campus.addNode('22.364331, 113.542517', [22.364331, 113.542517], null, false); // point 2122
    await campus.addNode('22.364314, 113.542572', [22.364314, 113.542572], null, false); // point 2123
    await campus.addNode('22.364425, 113.542057', [22.364425, 113.542057], null, false); // point 3167
    await campus.addNode('22.364448, 113.541957', [22.364448, 113.541957], null, false); // point 3168
    await campus.addNode('22.364468, 113.541867', [22.364468, 113.541867], null, false); // point 3169
    await campus.addNode('22.364518, 113.541902', [22.364518, 113.541902], null, false); // point 3170
    await campus.addNode('22.364610, 113.541857', [22.364610, 113.541857], null, false); // point 3171
    await campus.addNode('22.364602, 113.541775', [22.364602, 113.541775], null, false); // point 3172
    await campus.addNode('22.364608, 113.541723', [22.364608, 113.541723], null, false); // point 3174
    await campus.addNode('22.364499, 113.541717', [22.364499, 113.541717], null, false); // point 3175
    await campus.addNode('22.364473, 113.541835', [22.364473, 113.541835], null, false); // point 3176
    await campus.addNode('22.364618, 113.541682', [22.364618, 113.541682], null, false); // point 3177
    await campus.addNode('22.364625, 113.541531', [22.364625, 113.541531], null, false); // point 3179
    await campus.addNode('22.364627, 113.541483', [22.364627, 113.541483], null, false); // point 3181
    await campus.addNode('22.364543, 113.541479', [22.364543, 113.541479], null, false); // point 3182
    await campus.addNode('22.364401, 113.542178', [22.364401, 113.542178], null, false); // point 3185
    await campus.addNode('22.364516, 113.542241', [22.364516, 113.542241], null, false); // point 3186
    await campus.addNode('22.364522, 113.542364', [22.364522, 113.542364], null, false); // point 3228
    await campus.addNode('22.364350, 113.542367', [22.364350, 113.542367], null, false); // point 3229
    await campus.addNode('22.364380, 113.542266', [22.364380, 113.542266], null, false); // point 3230
    await campus.addNode('22.364602, 113.542236', [22.364602, 113.542236], null, false); // point 3232
    await campus.addNode('22.364622, 113.542202', [22.364622, 113.542202], null, false); // point 3233
    await campus.addNode('22.364627, 113.542177', [22.364627, 113.542177], null, false); // point 3235
    await campus.addNode('22.364576, 113.541998', [22.364576, 113.541998], null, false); // point 3238
    await campus.addNode('22.364551, 113.541955', [22.364551, 113.541955], null, false); // point 3239

    await campus.addNode('22.364140, 113.542681', [22.364140, 113.542681], null, false); // point 2120
    await campus.addNode('22.364168, 113.542452', [22.364168, 113.542452], null, false); // point 2121
    await campus.addNode('22.364112, 113.542726', [22.364112, 113.542726], null, false); // point 2131
    await campus.addNode('22.363950, 113.542760', [22.363950, 113.542760], null, false); // point 2132
    await campus.addNode('22.364189, 113.542242', [22.364189, 113.542242], null, false); // point 2386
    await campus.addNode('22.364087, 113.542376', [22.364087, 113.542376], null, false); // point 2387

    await campus.addNode('22.363671, 113.542766', [22.363671, 113.542766], null, false); // point 2252
    await campus.addNode('22.363630, 113.542708', [22.363630, 113.542708], null, false); // point 2253
    await campus.addNode('22.363710, 113.542677', [22.363710, 113.542677], null, false); // point 2254
    await campus.addNode('22.363767, 113.542540', [22.363767, 113.542540], null, false); // point 2256
    await campus.addNode('22.363702, 113.542541', [22.363702, 113.542541], null, false); // point 2258
    await campus.addNode('22.363713, 113.542479', [22.363713, 113.542479], null, false); // point 2259
    await campus.addNode('22.363695, 113.542428', [22.363695, 113.542428], null, false); // point 2260
    await campus.addNode('22.363674, 113.542476', [22.363674, 113.542476], null, false); // point 2262
    await campus.addNode('22.363660, 113.542533', [22.363660, 113.542533], null, false); // point 2264
    await campus.addNode('22.363818, 113.542409', [22.363818, 113.542409], null, false); // point 2265
    await campus.addNode('22.363837, 113.542349', [22.363837, 113.542349], null, false); // point 2267
    await campus.addNode('22.363848, 113.542311', [22.363848, 113.542311], null, false); // point 2268
    await campus.addNode('22.363863, 113.542262', [22.363863, 113.542262], null, false); // point 2269
    await campus.addNode('22.363893, 113.542201', [22.363893, 113.542201], null, false); // point 2271
    await campus.addNode('22.364054, 113.542265', [22.364054, 113.542265], null, false); // point 2272
    await campus.addNode('22.363776, 113.542199', [22.363776, 113.542199], null, false); // point 2275
    await campus.addNode('22.363771, 113.542263', [22.363771, 113.542263], null, false); // point 2276
    await campus.addNode('22.363989, 113.542106', [22.363989, 113.542106], null, false); // point 2278
    await campus.addNode('22.364131, 113.542097', [22.364131, 113.542097], null, false); // point 2417
    await campus.addNode('22.364196, 113.542094', [22.364196, 113.542094], null, false); // point 2385
    await campus.addNode('22.363254, 113.542023', [22.363254, 113.542023], null, false); // point 2401
    await campus.addNode('22.363280, 113.542048', [22.363280, 113.542048], null, false); // point 2402
    await campus.addNode('22.363328, 113.542061', [22.363328, 113.542061], null, false); // point 2403
    await campus.addNode('22.363440, 113.542087', [22.363440, 113.542087], null, false); // point 2404
    await campus.addNode('22.363541, 113.542090', [22.363541, 113.542090], null, false); // point 2405
    await campus.addNode('22.363643, 113.542090', [22.363643, 113.542090], null, false); // point 2406
    await campus.addNode('22.363743, 113.542085', [22.363743, 113.542085], null, false); // point 2408
    await campus.addNode('22.362797, 113.541686', [22.362797, 113.541686], null, false); // point 2471
    await campus.addNode('22.362760, 113.541766', [22.362760, 113.541766], null, false); // point 2472
    await campus.addNode('22.362801, 113.541840', [22.362801, 113.541840], null, false); // point 2473
    await campus.addNode('22.362913, 113.541859', [22.362913, 113.541859], null, false); // point 2474
    await campus.addNode('22.364809, 113.542060', [22.364809, 113.542060], null, false); // point 2343
    await campus.addNode('22.364889, 113.542060', [22.364889, 113.542060], null, false); // point 2344
    await campus.addNode('22.363016, 113.541914', [22.363016, 113.541914], null, false); // point 2475
    await campus.addNode('22.363056, 113.541834', [22.363056, 113.541834], null, false); // point 2477
    await campus.addNode('22.362971, 113.541789', [22.362971, 113.541789], null, false); // point 2478
    await campus.addNode('22.362991, 113.541706', [22.362991, 113.541706], null, false); // point 2479
    await campus.addNode('22.363081, 113.541738', [22.363081, 113.541738], null, false); // point 2481
    await campus.addNode('22.364265, 113.542084', [22.364265, 113.542084], null, false); // point 3166
    await campus.addNode('22.364599, 113.542046', [22.364599, 113.542046], null, false); // point 3237
    await campus.addNode('22.364708, 113.542047', [22.364708, 113.542047], null, false); // point 3240
    await campus.addNode('22.364982, 113.542062', [22.364982, 113.542062], null, false); // point 3300

    await campus.addNode('22.364731, 113.542176', [22.364731, 113.542176], null, false); // point 3241
    await campus.addNode('22.364724, 113.542202', [22.364724, 113.542202], null, false); // point 3243
    await campus.addNode('22.364761, 113.542203', [22.364761, 113.542203], null, false); // point 3245
    await campus.addNode('22.364757, 113.542253', [22.364757, 113.542253], null, false); // point 3246
    await campus.addNode('22.364758, 113.542374', [22.364758, 113.542374], null, false); // point 3247
    await campus.addNode('22.364778, 113.542509', [22.364778, 113.542509], null, false); // point 3249
    await campus.addNode('22.364898, 113.542620', [22.364898, 113.542620], null, false); // point 3251
    await campus.addNode('22.364903, 113.542535', [22.364903, 113.542535], null, false); // point 3253
    await campus.addNode('22.364907, 113.542433', [22.364907, 113.542433], null, false); // point 3255
    await campus.addNode('22.364908, 113.542349', [22.364908, 113.542349], null, false); // point 3294
    await campus.addNode('22.364938, 113.542302', [22.364938, 113.542302], null, false); // point 3295
    await campus.addNode('22.364949, 113.542194', [22.364949, 113.542194], null, false); // point 3298
    await campus.addNode('22.364982, 113.542193', [22.364982, 113.542193], null, false); // point 3299

    await campus.addNode('22.363929, 113.542107', [22.363929, 113.542107], null, false); // point 2273
    await campus.addNode('22.363810, 113.542105', [22.363810, 113.542105], null, false); // point 2274

    await campus.addNode('22.364168, 113.542842', [22.364168, 113.542842], null, false); // point 2110
    await campus.addNode('22.364123, 113.542990', [22.364123, 113.542990], null, false); // point 2112
    await campus.addNode('22.364074, 113.542986', [22.364074, 113.542986], null, false); // point 2113
    await campus.addNode('22.364029, 113.542967', [22.364029, 113.542967], null, false); // point 2115
    await campus.addNode('22.364060, 113.542815', [22.364060, 113.542815], null, false); // point 2119

    await campus.addNode('22.364555, 113.543101', [22.364555, 113.543101], null, false); // point 1753
    await campus.addNode('22.364485, 113.543095', [22.364485, 113.543095], null, false); // point 1755
    await campus.addNode('22.364499, 113.543033', [22.364499, 113.543033], null, false); // point 1756
    await campus.addNode('22.364478, 113.543017', [22.364478, 113.543017], null, false); // point 1758
    await campus.addNode('22.364557, 113.543015', [22.364557, 113.543015], null, false); // point 1759
    await campus.addNode('22.364476, 113.542833', [22.364476, 113.542833], null, false); // point 1760
    await campus.addNode('22.364476, 113.542807', [22.364476, 113.542807], null, false); // point 1761
    await campus.addNode('22.364555, 113.542833', [22.364555, 113.542833], null, false); // point 1761
    await campus.addNode('22.364476, 113.542770', [22.364476, 113.542770], null, false); // point 2107

    await campus.addNode('22.364885, 113.543130', [22.364885, 113.543130], null, false); // point 1738
    await campus.addNode('22.364812, 113.543123', [22.364812, 113.543123], null, false); // point 1739
    await campus.addNode('22.364803, 113.543146', [22.364803, 113.543146], null, false); // point 1740
    await campus.addNode('22.364885, 113.542947', [22.364885, 113.542947], null, false); // point 1742
    await campus.addNode('22.364812, 113.542947', [22.364812, 113.542947], null, false); // point 1743
    await campus.addNode('22.364812, 113.542961', [22.364812, 113.542961], null, false); // point 1744
    await campus.addNode('22.365028, 113.542953', [22.365028, 113.542953], null, false); // point 1747
    await campus.addNode('22.364886, 113.542864', [22.364886, 113.542864], null, false); // point 1746
    await campus.addNode('22.364779, 113.542815', [22.364779, 113.542815], null, false); // point 2104
    await campus.addNode('22.364556, 113.542696', [22.364556, 113.542696], null, false); // point 2105
    await campus.addNode('22.364555, 113.542772', [22.364555, 113.542772], null, false); // point 2106
    await campus.addNode('22.364412, 113.542613', [22.364412, 113.542613], null, false); // point 2124
    await campus.addNode('22.364467, 113.542649', [22.364467, 113.542649], null, false); // point 2126
    await campus.addNode('22.365448, 113.542935', [22.365448, 113.542935], null, false); // point 3313
    await campus.addNode('22.365447, 113.542876', [22.365447, 113.542876], null, false); // point 3314
    await campus.addNode('22.365455, 113.542834', [22.365455, 113.542834], null, false); // point 3315
    await campus.addNode('22.365458, 113.542682', [22.365458, 113.542682], null, false); // point 3317
    await campus.addNode('22.365426, 113.542679', [22.365426, 113.542679], null, false); // point 3318
    await campus.addNode('22.365458, 113.542624', [22.365458, 113.542624], null, false); // point 3320
    await campus.addNode('22.365454, 113.542569', [22.365454, 113.542569], null, false); // point 3321
    await campus.addNode('22.365452, 113.542497', [22.365452, 113.542497], null, false); // point 3358
    await campus.addNode('22.365465, 113.542443', [22.365465, 113.542443], null, false); // point 3360
    await campus.addNode('22.365468, 113.542412', [22.365468, 113.542412], null, false); // point 3362
    await campus.addNode('22.365595, 113.542403', [22.365595, 113.542403], null, false); // point 3363
    await campus.addNode('22.365592, 113.542483', [22.365592, 113.542483], null, false); // point 3364
    await campus.addNode('22.365585, 113.542521', [22.365585, 113.542521], null, false); // point 3365
    await campus.addNode('22.365583, 113.542541', [22.365583, 113.542541], null, false); // point 3366
    await campus.addNode('22.365573, 113.542557', [22.365573, 113.542557], null, false); // point 3368
    await campus.addNode('22.365593, 113.542572', [22.365593, 113.542572], null, false); // point 3369
    await campus.addNode('22.365587, 113.542741', [22.365587, 113.542741], null, false); // point 3371
    await campus.addNode('22.365556, 113.542754', [22.365556, 113.542754], null, false); // point 3372
    await campus.addNode('22.365535, 113.542794', [22.365535, 113.542794], null, false); // point 3373
    await campus.addNode('22.365519, 113.542871', [22.365519, 113.542871], null, false); // point 3374
    await campus.addNode('22.365602, 113.542878', [22.365602, 113.542878], null, false); // point 3375
    await campus.addNode('22.365607, 113.542809', [22.365607, 113.542809], null, false); // point 3376
    await campus.addNode('22.365603, 113.542928', [22.365603, 113.542928], null, false); // point 3377
    await campus.addNode('22.365574, 113.542929', [22.365574, 113.542929], null, false); // point 3378
    await campus.addNode('22.365283, 113.542430', [22.365283, 113.542430], null, false); // point 3380
    await campus.addNode('22.365279, 113.542475', [22.365279, 113.542475], null, false); // point 3381

    await campus.addNode('22.365474, 113.542349', [22.365474, 113.542349], null, false); // point 3379
    await campus.addNode('22.365279, 113.542335', [22.365279, 113.542335], null, false); // point 3386

    await campus.addNode('22.364513, 113.542495', [22.364513, 113.542495], null, false); // point 2127
    await campus.addNode('22.364596, 113.542487', [22.364596, 113.542487], null, false); // point 2128
    await campus.addNode('22.364595, 113.542592', [22.364595, 113.542592], null, false); // point 2130

    await campus.addNode('22.366059, 113.540309', [22.366059, 113.540309], null, false); // point 1267
    await campus.addNode('22.366152, 113.540317', [22.366152, 113.540317], null, false); // point 1268
    await campus.addNode('22.366059, 113.540371', [22.366059, 113.540371], null, false); // point 1269
    await campus.addNode('22.366059, 113.540432', [22.366059, 113.540432], null, false); // point 1271
    await campus.addNode('22.366059, 113.540517', [22.366059, 113.540517], null, false); // point 1273
    await campus.addNode('22.365931, 113.540517', [22.365931, 113.540517], null, false); // point 1274
    await campus.addNode('22.365942, 113.540584', [22.365942, 113.540584], null, false); // point 1276
    await campus.addNode('22.366059, 113.540584', [22.366059, 113.540584], null, false); // point 1277
    await campus.addNode('22.366019, 113.540628', [22.366019, 113.540628], null, false); // point 1280
    await campus.addNode('22.365991, 113.540661', [22.365991, 113.540661], null, false); // point 1281
    await campus.addNode('22.365985, 113.540716', [22.365985, 113.540716], null, false); // point 1282
    await campus.addNode('22.366286, 113.540421', [22.366286, 113.540421], null, false); // point 1283
    await campus.addNode('22.366293, 113.540316', [22.366293, 113.540316], null, false); // point 1284
    await campus.addNode('22.366160, 113.540388', [22.366160, 113.540388], null, false); // point 1285

    await campus.addNode('22.366614, 113.544190', [22.366614, 113.544190], null, false); // point 879
    await campus.addNode('22.366552, 113.543881', [22.366552, 113.543881], null, false); // point 880

    await campus.addNode('22.366615, 113.541121', [22.366615, 113.541121], null, false); // point 859
    await campus.addNode('22.366615, 113.541608', [22.366615, 113.541608], null, false); // point 860
    await campus.addNode('22.366942, 113.541121', [22.366942, 113.541121], null, false); // point 861
    await campus.addNode('22.366942, 113.541368', [22.366942, 113.541368], null, false); // point 863
    await campus.addNode('22.366942, 113.541539', [22.366942, 113.541539], null, false); // point 865
    await campus.addNode('22.366699, 113.541399', [22.366699, 113.541399], null, false); // point 866

    await campus.addNode('22.366680, 113.541768', [22.366680, 113.541768], null, false); // point 628
    await campus.addNode('22.366699, 113.541704', [22.366699, 113.541704], null, false); // point 630
    await campus.addNode('22.366941, 113.541713', [22.366941, 113.541713], null, false); // point 631
    await campus.addNode('22.367074, 113.541713', [22.367074, 113.541713], null, false); // point 632
    await campus.addNode('22.367246, 113.541705', [22.367246, 113.541705], null, false); // point 634
    await campus.addNode('22.367334, 113.541704', [22.367334, 113.541704], null, false); // point 636
    await campus.addNode('22.367445, 113.541706', [22.367445, 113.541706], null, false); // point 700
    await campus.addNode('22.367602, 113.541705', [22.367602, 113.541705], null, false); // point 701
    await campus.addNode('22.367809, 113.541705', [22.367809, 113.541705], null, false); // point 749
    await campus.addNode('22.367809, 113.542026', [22.367809, 113.542026], null, false); // point 751
    await campus.addNode('22.367824, 113.541704', [22.367824, 113.541704], null, false); // point 752
    await campus.addNode('22.367963, 113.541705', [22.367963, 113.541705], null, false); // point 755
    await campus.addNode('22.367963, 113.542026', [22.367963, 113.542026], null, false); // point 757
    await campus.addNode('22.368240, 113.541709', [22.368240, 113.541709], null, false); // point 758
    await campus.addNode('22.368439, 113.542101', [22.368439, 113.542101], null, false); // point 759
    await campus.addNode('22.368465, 113.542153', [22.368465, 113.542153], null, false); // point 761
    await campus.addNode('22.368472, 113.543227', [22.368472, 113.543227], null, false); // point 798
    await campus.addNode('22.368588, 113.543221', [22.368588, 113.543221], null, false); // point 799
    await campus.addNode('22.368588, 113.543511', [22.368588, 113.543511], null, false); // point 800
    await campus.addNode('22.368127, 113.543247', [22.368127, 113.543247], null, false); // point 801
    await campus.addNode('22.368112, 113.543358', [22.368112, 113.543358], null, false); // point 803
    await campus.addNode('22.367727, 113.543247', [22.367727, 113.543247], null, false); // point 805
    await campus.addNode('22.367380, 113.543247', [22.367380, 113.543247], null, false); // point 832
    await campus.addNode('22.367296, 113.543247', [22.367296, 113.543247], null, false); // point 829
    await campus.addNode('22.366770, 113.543247', [22.366770, 113.543247], null, false); // point 827
    await campus.addNode('22.366687, 113.543247', [22.366687, 113.543247], null, false); // point 825
    await campus.addNode('22.366290, 113.544287', [22.366290, 113.544287], null, false); // point 883
    await campus.addNode('22.367251, 113.544836', [22.367251, 113.544836], null, false); // point 884
    await campus.addNode('22.368109, 113.544182', [22.368109, 113.544182], null, false); // point 886
    await campus.addNode('22.368110, 113.543778', [22.368110, 113.543778], null, false); // point 887
    await campus.addNode('22.367330, 113.544834', [22.367330, 113.544834], null, false); // point 1087
    await campus.addNode('22.367347, 113.544904', [22.367347, 113.544904], null, false); // point 1088
    await campus.addNode('22.367313, 113.544910', [22.367313, 113.544910], null, false); // point 1091
    await campus.addNode('22.367371, 113.544979', [22.367371, 113.544979], null, false); // point 1094
    await campus.addNode('22.367206, 113.545299', [22.367206, 113.545299], null, false); // point 1096
    await campus.addNode('22.367385, 113.544891', [22.367385, 113.544891], null, false); // point 1098
    await campus.addNode('22.367429, 113.544942', [22.367429, 113.544942], null, false); // point 1099

    await campus.addNode('22.367380, 113.543719', [22.367380, 113.543719], null, false); // point 833
    await campus.addNode('22.367375, 113.544185', [22.367375, 113.544185], null, false); // point 855

    await campus.addNode('22.367824, 113.541430', [22.367824, 113.541430], null, false); // point 753

    await campus.addNode('22.366878, 113.542026', [22.366878, 113.542026], null, false); // point 695
    await campus.addNode('22.367002, 113.542026', [22.367002, 113.542026], null, false); // point 696
    await campus.addNode('22.367251, 113.542026', [22.367251, 113.542026], null, false); // point 697
    await campus.addNode('22.367436, 113.542026', [22.367436, 113.542026], null, false); // point 698
    await campus.addNode('22.367616, 113.542026', [22.367616, 113.542026], null, false); // point 703

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
    await campus.addNode('22.367124, 113.539418', [22.367124, 113.539418], null, false); // point 353
    await campus.addNode('22.367259, 113.539561', [22.367259, 113.539561], null, false); // point 966
    await campus.addNode('22.367338, 113.539699', [22.367338, 113.539699], null, false); // point 967
    await campus.addNode('22.367356, 113.539701', [22.367356, 113.539701], null, false); // point 968
    await campus.addNode('22.367356, 113.539815', [22.367356, 113.539815], null, false); // point 969
    await campus.addNode('22.367962, 113.539688', [22.367962, 113.539688], null, false); // point 970
    await campus.addNode('22.367933, 113.539776', [22.367933, 113.539776], null, false); // point 971
    await campus.addNode('22.367328, 113.539831', [22.367328, 113.539831], null, false); // point 1120
    await campus.addNode('22.367252, 113.539977', [22.367252, 113.539977], null, false); // point 1121
    await campus.addNode('22.367170, 113.540034', [22.367170, 113.540034], null, false); // point 1122
    await campus.addNode('22.367031, 113.540073', [22.367031, 113.540073], null, false); // point 1123
    await campus.addNode('22.366914, 113.540056', [22.366914, 113.540056], null, false); // point 1124
    await campus.addNode('22.366866, 113.540101', [22.366866, 113.540101], null, false); // point 1125
    await campus.addNode('22.366698, 113.540276', [22.366698, 113.540276], null, false); // point 1126
    await campus.addNode('22.367923, 113.539840', [22.367923, 113.539840], null, false); // point 1140
    await campus.addNode('22.367855, 113.539844', [22.367855, 113.539844], null, false); // point 1141
    await campus.addNode('22.366532, 113.540583', [22.366532, 113.540583], null, false); // point 1486
    await campus.addNode('22.366543, 113.540450', [22.366543, 113.540450], null, false); // point 1487
    await campus.addNode('22.366571, 113.540408', [22.366571, 113.540408], null, false); // point 1488

    await campus.addNode('22.367041, 113.536939', [22.367041, 113.536939], null, false); // point 1404
    await campus.addNode('22.366996, 113.536782', [22.366996, 113.536782], null, false); // point 1406

    await campus.addNode('22.367314, 113.536762', [22.367314, 113.536762], null, false); // point 1407
    await campus.addNode('22.367619, 113.536753', [22.367619, 113.536753], null, false); // point 1408
    await campus.addNode('22.367625, 113.536632', [22.367625, 113.536632], null, false); // point 1409
    await campus.addNode('22.367451, 113.536495', [22.367451, 113.536495], null, false); // point 1410
    await campus.addNode('22.368110, 113.536632', [22.368110, 113.536632], null, false); // point 1411
    await campus.addNode('22.367985, 113.536762', [22.367985, 113.536762], null, false); // point 1412
    await campus.addNode('22.368115, 113.536838', [22.368115, 113.536838], null, false); // point 1413
    await campus.addNode('22.368164, 113.536878', [22.368164, 113.536878], null, false); // point 1414
    await campus.addNode('22.368166, 113.536749', [22.368166, 113.536749], null, false); // point 1415
    await campus.addNode('22.368247, 113.536808', [22.368247, 113.536808], null, false); // point 1416
    await campus.addNode('22.368226, 113.536755', [22.368226, 113.536755], null, false); // point 1417
    await campus.addNode('22.368228, 113.536665', [22.368228, 113.536665], null, false); // point 1418
    await campus.addNode('22.368224, 113.536457', [22.368224, 113.536457], null, false); // point 1419
    await campus.addNode('22.368467, 113.536535', [22.368467, 113.536535], null, false); // point 1420
    await campus.addNode('22.368610, 113.536389', [22.368610, 113.536389], null, false); // point 1421
    await campus.addNode('22.368690, 113.536253', [22.368690, 113.536253], null, false); // point 1422
    await campus.addNode('22.368800, 113.535959', [22.368800, 113.535959], null, false); // point 1423
    await campus.addNode('22.368791, 113.535773', [22.368791, 113.535773], null, false); // point 1424
    await campus.addNode('22.368381, 113.536315', [22.368381, 113.536315], null, false); // point 1425
    await campus.addNode('22.368474, 113.536154', [22.368474, 113.536154], null, false); // point 1426
    await campus.addNode('22.368540, 113.535981', [22.368540, 113.535981], null, false); // point 1427
    await campus.addNode('22.368533, 113.535773', [22.368533, 113.535773], null, false); // point 1428
    await campus.addNode('22.368373, 113.535773', [22.368373, 113.535773], null, false); // point 1429
    await campus.addNode('22.368399, 113.536013', [22.368399, 113.536013], null, false); // point 1431
    await campus.addNode('22.368398, 113.535608', [22.368398, 113.535608], null, false); // point 1432
    await campus.addNode('22.368310, 113.536828', [22.368310, 113.536828], null, false); // point 1491
    await campus.addNode('22.368536, 113.536705', [22.368536, 113.536705], null, false); // point 1492
    await campus.addNode('22.368660, 113.536589', [22.368660, 113.536589], null, false); // point 1493
    await campus.addNode('22.368804, 113.536386', [22.368804, 113.536386], null, false); // point 1494
    await campus.addNode('22.368866, 113.536267', [22.368866, 113.536267], null, false); // point 1495
    await campus.addNode('22.368943, 113.536050', [22.368943, 113.536050], null, false); // point 1496
    await campus.addNode('22.368425, 113.536036', [22.368425, 113.536036], null, false); // point 1541
    await campus.addNode('22.368385, 113.536118', [22.368385, 113.536118], null, false); // point 1542
    await campus.addNode('22.368348, 113.536165', [22.368348, 113.536165], null, false); // point 1544
    await campus.addNode('22.368283, 113.536178', [22.368283, 113.536178], null, false); // point 1545
    await campus.addNode('22.368075, 113.536178', [22.368075, 113.536178], null, false); // point 1546
    await campus.addNode('22.367959, 113.536178', [22.368075, 113.536178], null, false); // point 1548
    await campus.addNode('22.367869, 113.536178', [22.367869, 113.536178], null, false); // point 1550
    await campus.addNode('22.367814, 113.536178', [22.367814, 113.536178], null, false); // point 1552
    await campus.addNode('22.367722, 113.536178', [22.367722, 113.536178], null, false); // point 1554
    await campus.addNode('22.367631, 113.536178', [22.367631, 113.536178], null, false); // point 1556
    await campus.addNode('22.368418, 113.535583', [22.368418, 113.535583], null, false); // point 1558
    await campus.addNode('22.368391, 113.535496', [22.368391, 113.535496], null, false); // point 1559
    await campus.addNode('22.368625, 113.535773', [22.368533, 113.535773], null, false); // point 1561
    await campus.addNode('22.368977, 113.535773', [22.368977, 113.535773], null, false); // point 1562

    await campus.addNode('22.368977, 13.535943', [22.368977, 13.535943], null, false); // point 1563
    await campus.addNode('22.369119, 113.536076', [22.369119, 113.536076], null, false); // point 1564
    await campus.addNode('22.368977, 13.535950', [22.368977, 13.535950], null, false); // point 1565
    await campus.addNode('22.369120, 113.535785', [22.369120, 113.535785], null, false); // point 1566
    await campus.addNode('22.369120, 113.535659', [22.369120, 113.535659], null, false); // point 1567
    await campus.addNode('22.368977, 113.535659', [22.368977, 113.535659], null, false); // point 1568
    await campus.addNode('22.369000, 113.535587', [22.369000, 113.535587], null, false); // point 1569
    await campus.addNode('22.369020, 113.535539', [22.369020, 113.535539], null, false); // point 1570
    await campus.addNode('22.369236, 113.535539', [22.369236, 113.535539], null, false); // point 1887

    await campus.addNode('22.366795, 113.540334', [22.366795, 113.540334], null, false); // point 1127
    await campus.addNode('22.367335, 113.540334', [22.367335, 113.540334], null, false); // point 1128
    await campus.addNode('22.367859, 113.540332', [22.367859, 113.540332], null, false); // point 1129
    await campus.addNode('22.367885, 113.540349', [22.367885, 113.540349], null, false); // point 1130
    await campus.addNode('22.367993, 113.540343', [22.367993, 113.540343], null, false); // point 1131
    await campus.addNode('22.368016, 113.540379', [22.368016, 113.540379], null, false); // point 1132
    await campus.addNode('22.368040, 113.540390', [22.368040, 113.540390], null, false); // point 1133

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
    await campus.addNode('22.367168, 113.536939', [22.367168, 113.536939], null, false); // point 1405

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
    await campus.addNode('22.368671, 113.537453', [22.368671, 113.537453], null, false); // point 599
    await campus.addNode('22.368807, 113.537357', [22.368807, 113.537357], null, false); // point 600
    await campus.addNode('22.369064, 113.537156', [22.369064, 113.537156], null, false); // point 609

    await campus.addNode('22.369023, 113.537001', [22.369023, 113.537001], null, false); // point 730
    await campus.addNode('22.368602, 113.537311', [22.368602, 113.537311], null, false); // point 731

    await campus.addNode('22.368870, 113.537456', [22.368870, 113.537456], null, false); // point 601
    await campus.addNode('22.369074, 113.537435', [22.369074, 113.537435], null, false); // point 602
    await campus.addNode('22.369160, 113.537320', [22.369160, 113.537320], null, false); // point 603
    await campus.addNode('22.369163, 113.537216', [22.369163, 113.537216], null, false); // point 605
    await campus.addNode('22.369164, 113.537132', [22.369164, 113.537132], null, false); // point 606
    await campus.addNode('22.369163, 113.537073', [22.369163, 113.537073], null, false); // point 607
    await campus.addNode('22.369088, 113.537183', [22.369088, 113.537183], null, false); // point 608
    await campus.addNode('22.368931, 113.537369', [22.368931, 113.537369], null, false); // point 610
    await campus.addNode('22.368964, 113.537360', [22.368964, 113.537360], null, false); // point 611

    await campus.addNode('22.369243, 113.537312', [22.369243, 113.537312], null, false); // point 604
    await campus.addNode('22.369243, 113.536665', [22.369243, 113.536665], null, false); // point 721
    await campus.addNode('22.369327, 113.536665', [22.369327, 113.536665], null, false); // point 722
    await campus.addNode('22.369243, 113.536089', [22.369243, 113.536089], null, false); // point 723
    await campus.addNode('22.369243, 113.535960', [22.369243, 113.535960], null, false); // point 724
    await campus.addNode('22.369327, 113.535960', [22.369243, 113.535960], null, false); // point 725
    await campus.addNode('22.369447, 113.535960', [22.369447, 113.535960], null, false); // point 726
    await campus.addNode('22.369243, 113.535802', [22.369243, 113.535802], null, false); // point 727
    await campus.addNode('22.369327, 113.535802', [22.369327, 113.535802], null, false); // point 728
    await campus.addNode('22.369447, 113.535802', [22.369447, 113.535802], null, false); // point 729
    await campus.addNode('22.369422, 113.535646', [22.369422, 113.535646], null, false); // point 1189

    await campus.addNode('22.369229, 113.537041', [22.369229, 113.537041], null, false); // point 654
    await campus.addNode('22.369273, 113.537032', [22.369273, 113.537032], null, false); // point 655
    await campus.addNode('22.369327, 113.537032', [22.369327, 113.537032], null, false); // point 656
    await campus.addNode('22.369387, 113.537032', [22.369387, 113.537032], null, false); // point 657
    await campus.addNode('22.369421, 113.537032', [22.369421, 113.537032], null, false); // point 658
    await campus.addNode('22.369439, 113.536948', [22.369439, 113.536948], null, false); // point 659
    await campus.addNode('22.369447, 113.536861', [22.369447, 113.536861], null, false); // point 660
    await campus.addNode('22.369323, 113.535660', [22.369323, 113.535660], null, false); // point 1190
    await campus.addNode('22.369236, 113.535659', [22.369236, 113.535659], null, false); // point 1191
    await campus.addNode('22.369427, 113.537094', [22.369427, 113.537094], null, false); // point 1192
    await campus.addNode('22.369338, 113.537090', [22.369338, 113.537090], null, false); // point 1193
    await campus.addNode('22.369425, 113.537778', [22.369425, 113.537778], null, false); // point 1194
    await campus.addNode('22.369425, 113.538010', [22.369425, 113.538010], null, false); // point 1196
    await campus.addNode('22.369343, 113.538010', [22.369343, 113.538010], null, false); // point 1197
    await campus.addNode('22.369344, 113.537950', [22.369344, 113.537950], null, false); // point 1198
    await campus.addNode('22.369251, 113.538014', [22.369251, 113.538014], null, false); // point 1199
    await campus.addNode('22.369229, 113.534840', [22.369229, 113.534840], null, false); // point 1888
    await campus.addNode('22.369326, 113.534840', [22.369326, 113.534840], null, false); // point 1889
    await campus.addNode('22.369422, 113.534840', [22.369422, 113.534840], null, false); // point 1890
    await campus.addNode('22.369696, 113.535165', [22.369696, 113.535165], null, false); // point 1891

    await campus.addNode('22.370060, 113.537033', [22.370060, 113.537033], null, false); // point 672
    await campus.addNode('22.370262, 113.537032', [22.370262, 113.537032], null, false); // point 673
    await campus.addNode('22.371447, 113.537022', [22.371447, 113.537022], null, false); // point 2056
    await campus.addNode('22.371170, 113.537025', [22.371170, 113.537025], null, false); // point 2057
    await campus.addNode('22.370994, 113.537029', [22.370994, 113.537029], null, false); // point 2059
    await campus.addNode('22.370688, 113.537029', [22.370688, 113.537029], null, false); // point 2060
    await campus.addNode('22.370420, 113.537029', [22.370420, 113.537029], null, false); // point 2062
    await campus.addNode('22.369915, 113.537037', [22.369915, 113.537037], null, false); // point 2173

    await campus.addNode('22.371448, 113.536365', [22.371448, 113.536365], null, false); // point 2178
    await campus.addNode('22.371450, 113.536185', [22.371450, 113.536185], null, false); // point 2180
    await campus.addNode('22.371442, 113.536137', [22.371442, 113.536137], null, false); // point 2181
    await campus.addNode('22.371440, 113.535932', [22.371440, 113.535932], null, false); // point 2183
    await campus.addNode('22.371447, 113.535806', [22.371447, 113.535806], null, false); // point 2185
    await campus.addNode('22.371450, 113.535671', [22.371450, 113.535671], null, false); // point 2187
    await campus.addNode('22.371452, 113.535469', [22.371452, 113.535469], null, false); // point 2189
    await campus.addNode('22.371450, 113.535342', [22.371450, 113.535342], null, false); // point 2191
    await campus.addNode('22.371218, 113.535347', [22.371218, 113.535347], null, false); // point 2192
    await campus.addNode('22.371441, 113.535279', [22.371441, 113.535279], null, false); // point 2195
    await campus.addNode('22.371446, 113.535081', [22.371446, 113.535081], null, false); // point 2197

    await campus.addNode('22.370068, 113.536107', [22.370068, 113.536107], null, false); // point 675
    await campus.addNode('22.370085, 113.535989', [22.370085, 113.535989], null, false); // point 677
    await campus.addNode('22.370068, 113.535808', [22.370068, 113.535808], null, false); // point 680

    await campus.addNode('22.370212, 113.535974', [22.370212, 113.535974], null, false); // point 678
    await campus.addNode('22.370195, 113.535567', [22.370195, 113.535567], null, false); // point 1186
    await campus.addNode('22.370065, 113.535630', [22.370065, 113.535630], null, false); // point 1188
    await campus.addNode('22.370058, 113.535657', [22.370058, 113.535657], null, false); // point 1219
    await campus.addNode('22.370059, 113.535520', [22.370059, 113.535520], null, false); // point 1892
    await campus.addNode('22.370056, 113.534770', [22.370056, 113.534770], null, false); // point 1893
    await campus.addNode('22.369898, 113.534886', [22.369898, 113.534886], null, false); // point 1894
    await campus.addNode('22.370107, 113.534657', [22.370107, 113.534657], null, false); // point 1895
    await campus.addNode('22.370131, 113.534637', [22.370131, 113.534637], null, false); // point 1896
    await campus.addNode('22.370245, 113.534635', [22.370245, 113.534635], null, false); // point 1897
    await campus.addNode('22.370371, 113.534637', [22.370371, 113.534637], null, false); // point 1899
    await campus.addNode('22.370371, 113.534486', [22.370371, 113.534486], null, false); // point 1900
    await campus.addNode('22.370672, 113.534637', [22.370672, 113.534637], null, false); // point 1968
    await campus.addNode('22.370956, 113.534637', [22.370956, 113.534637], null, false); // point 1970
    await campus.addNode('22.371185, 113.534645', [22.371185, 113.534645], null, false); // point 1976
    await campus.addNode('22.371363, 113.534641', [22.371363, 113.534641], null, false); // point 1978
    await campus.addNode('22.371406, 113.534658', [22.371406, 113.534658], null, false); // point 1979
    await campus.addNode('22.371441, 113.534751', [22.371441, 113.534751], null, false); // point 1980
    await campus.addNode('22.371448, 113.534805', [22.371448, 113.534805], null, false); // point 1981

    await campus.addNode('22.370374, 113.534412', [22.370374, 113.534412], null, false); // point 1901
    await campus.addNode('22.370376, 113.534294', [22.370376, 113.534294], null, false); // point 1902
    await campus.addNode('22.370376, 113.534165', [22.370376, 113.534165], null, false); // point 1903
    await campus.addNode('22.369805, 113.534165', [22.369805, 113.534165], null, false); // point 1904
    await campus.addNode('22.369805, 113.534418', [22.369805, 113.534418], null, false); // point 1905
    await campus.addNode('22.370668, 113.534165', [22.370668, 113.534165], null, false); // point 1967
    await campus.addNode('22.370957, 113.534473', [22.370957, 113.534473], null, false); // point 1971
    await campus.addNode('22.370950, 113.534419', [22.370950, 113.534419], null, false); // point 1972
    await campus.addNode('22.370666, 113.533860', [22.370666, 113.533860], null, false); // point 1973
    await campus.addNode('22.371761, 113.534165', [22.371761, 113.534165], null, false); // point 1974
    await campus.addNode('22.371754, 113.534165', [22.371754, 113.534165], null, false); // point 1975

    await campus.addNode('22.369704, 113.534165', [22.369704, 113.534165], null, false); // point 1906
    await campus.addNode('22.369623, 113.534000', [22.369623, 113.534000], null, false); // point 1907
    await campus.addNode('22.369531, 113.533920', [22.369531, 113.533920], null, false); // point 1908
    await campus.addNode('22.369432, 113.533876', [22.369432, 113.533876], null, false); // point 1909
    await campus.addNode('22.369320, 113.533859', [22.369320, 113.533859], null, false); // point 1910
    await campus.addNode('22.369231, 113.533869', [22.369231, 113.533869], null, false); // point 1911
    await campus.addNode('22.369094, 113.533931', [22.369094, 113.533931], null, false); // point 1912
    await campus.addNode('22.369023, 113.534002', [22.369023, 113.534002], null, false); // point 1913
    await campus.addNode('22.368959, 113.534106', [22.368959, 113.534106], null, false); // point 1914
    await campus.addNode('22.368916, 113.534273', [22.368916, 113.534273], null, false); // point 1915
    await campus.addNode('22.368933, 113.534408', [22.368933, 113.534408], null, false); // point 1916
    await campus.addNode('22.368990, 113.534538', [22.368990, 113.534538], null, false); // point 1917
    await campus.addNode('22.369067, 113.534629', [22.369067, 113.534629], null, false); // point 1918
    await campus.addNode('22.369165, 113.534691', [22.369165, 113.534691], null, false); // point 1919
    await campus.addNode('22.369229, 113.534714', [22.369229, 113.534714], null, false); // point 1920
    await campus.addNode('22.369326, 113.534719', [22.369326, 113.534719], null, false); // point 1960
    await campus.addNode('22.369395, 113.534720', [22.369395, 113.534720], null, false); // point 1961
    await campus.addNode('22.369505, 113.534678', [22.369505, 113.534678], null, false); // point 1962
    await campus.addNode('22.369604, 113.534602', [22.369604, 113.534602], null, false); // point 1963
    await campus.addNode('22.369674, 113.534510', [22.369674, 113.534510], null, false); // point 1964
    await campus.addNode('22.369712, 113.534411', [22.369712, 113.534411], null, false); // point 1965
    await campus.addNode('22.369724, 113.534287', [22.369724, 113.534287], null, false); // point 1966

    await campus.addNode('22.369661, 113.536647', [22.369661, 113.536647], null, false); // point 661
    await campus.addNode('22.369845, 113.536340', [22.369845, 113.536340], null, false); // point 662
    await campus.addNode('22.369944, 113.536199', [22.369944, 113.536199], null, false); // point 676

    await campus.addNode('22.368602, 113.537586', [22.368602, 113.537586], null, false); // point 569
    await campus.addNode('22.368635, 113.537591', [22.368635, 113.537591], null, false); // point 570
    await campus.addNode('22.368754, 113.537603', [22.368754, 113.537603], null, false); // point 571
    await campus.addNode('22.368754, 113.537627', [22.368754, 113.537627], null, false); // point 572
    await campus.addNode('22.368687, 113.537651', [22.368687, 113.537651], null, false); // point 574
    await campus.addNode('22.368722, 113.537697', [22.368722, 113.537697], null, false); // point 575
    await campus.addNode('22.368744, 113.537775', [22.368744, 113.537775], null, false); // point 576

    await campus.addNode('22.368262, 113.538691', [22.368262, 113.538691], null, false); // point 522
    await campus.addNode('22.368077, 113.539776', [22.368077, 113.539776], null, false); // point 972
    await campus.addNode('22.368165, 113.539689', [22.368165, 113.539689], null, false); // point 973
    await campus.addNode('22.368200, 113.539689', [22.368200, 113.539689], null, false); // point 974
    await campus.addNode('22.368006, 113.539472', [22.368006, 113.539472], null, false); // point 975
    await campus.addNode('22.368103, 113.539478', [22.368103, 113.539478], null, false); // point 976
    await campus.addNode('22.368194, 113.539495', [22.368194, 113.539495], null, false); // point 977
    await campus.addNode('22.368228, 113.539317', [22.368228, 113.539317], null, false); // point 1102
    await campus.addNode('22.368139, 113.539284', [22.368139, 113.539284], null, false); // point 1104
    await campus.addNode('22.368038, 113.539259', [22.368038, 113.539259], null, false); // point 1106
    await campus.addNode('22.368169, 113.539160', [22.368169, 113.539160], null, false); // point 1107
    await campus.addNode('22.368082, 113.539137', [22.368082, 113.539137], null, false); // point 1110
    await campus.addNode('22.368256, 113.539201', [22.368256, 113.539201], null, false); // point 1112
    await campus.addNode('22.368315, 113.539033', [22.368315, 113.539033], null, false); // point 1114
    await campus.addNode('22.368233, 113.538994', [22.368233, 113.538994], null, false); // point 1116
    await campus.addNode('22.368150, 113.538955', [22.368150, 113.538955], null, false); // point 1118
    await campus.addNode('22.368083, 113.540368', [22.368083, 113.540368], null, false); // point 1134
    await campus.addNode('22.368034, 113.540191', [22.368034, 113.540191], null, false); // point 1135
    await campus.addNode('22.368001, 113.540017', [22.368001, 113.540017], null, false); // point 1136
    await campus.addNode('22.367994, 113.539891', [22.367994, 113.539891], null, false); // point 1137
    await campus.addNode('22.367974, 113.539849', [22.367974, 113.539849], null, false); // point 1138
    await campus.addNode('22.367969, 113.539761', [22.367969, 113.539761], null, false); // point 1139
    await campus.addNode('22.368092, 113.539846', [22.368092, 113.539846], null, false); // point 1142
    await campus.addNode('22.368163, 113.539844', [22.368163, 113.539844], null, false); // point 1143
    await campus.addNode('22.368191, 113.539838', [22.368191, 113.539838], null, false); // point 1144
    await campus.addNode('22.368115, 113.540010', [22.368115, 113.540010], null, false); // point 1145
    await campus.addNode('22.368144, 113.540180', [22.368144, 113.540180], null, false); // point 1146
    await campus.addNode('22.368196, 113.539947', [22.368196, 113.539947], null, false); // point 1147
    await campus.addNode('22.368200, 113.540031', [22.368200, 113.540031], null, false); // point 1148
    await campus.addNode('22.369202, 113.538093', [22.369202, 113.538093], null, false); // point 1200
    await campus.addNode('22.369330, 113.538137', [22.369330, 113.538137], null, false); // point 1201
    await campus.addNode('22.369314, 113.538232', [22.369314, 113.538232], null, false); // point 1202
    await campus.addNode('22.369241, 113.538157', [22.369241, 113.538157], null, false); // point 1203
    await campus.addNode('22.369236, 113.538244', [22.369236, 113.538244], null, false); // point 1204
    await campus.addNode('22.369071, 113.538280', [22.369071, 113.538280], null, false); // point 1205
    await campus.addNode('22.369045, 113.538201', [22.369045, 113.538201], null, false); // point 1206
    await campus.addNode('22.369030, 113.538128', [22.369030, 113.538128], null, false); // point 1207
    await campus.addNode('22.368929, 113.538336', [22.368929, 113.538336], null, false); // point 1208
    await campus.addNode('22.368899, 113.538256', [22.368899, 113.538256], null, false); // point 1209
    await campus.addNode('22.368875, 113.538181', [22.368875, 113.538181], null, false); // point 1210
    await campus.addNode('22.368792, 113.538411', [22.368792, 113.538411], null, false); // point 1211
    await campus.addNode('22.368751, 113.538343', [22.368751, 113.538343], null, false); // point 1212
    await campus.addNode('22.368717, 113.538274', [22.368717, 113.538274], null, false); // point 1213
    await campus.addNode('22.368666, 113.538506', [22.368666, 113.538506], null, false); // point 1214
    await campus.addNode('22.368615, 113.538448', [22.368615, 113.538448], null, false); // point 1215
    await campus.addNode('22.368575, 113.538384', [22.368575, 113.538384], null, false); // point 1216
    await campus.addNode('22.368355, 113.538632', [22.368355, 113.538632], null, false); // point 1286
    await campus.addNode('22.368407, 113.538679', [22.368407, 113.538679], null, false); // point 1287
    await campus.addNode('22.368469, 113.538728', [22.368469, 113.538728], null, false); // point 1288
    await campus.addNode('22.368284, 113.538728', [22.368284, 113.538728], null, false); // point 1289
    await campus.addNode('22.368315, 113.538828', [22.368315, 113.538828], null, false); // point 1290
    await campus.addNode('22.368384, 113.538867', [22.368384, 113.538867], null, false); // point 1291
    await campus.addNode('22.368247, 113.538779', [22.368247, 113.538779], null, false); // point 1292
    await campus.addNode('22.369449, 113.538087', [22.369449, 113.538087], null, false); // point 1612
    await campus.addNode('22.369441, 113.538160', [22.369441, 113.538160], null, false); // point 1613
    await campus.addNode('22.369438, 113.538236', [22.369438, 113.538236], null, false); // point 1614
    await campus.addNode('22.369635, 113.538117', [22.369635, 113.538117], null, false); // point 1615
    await campus.addNode('22.369615, 113.538198', [22.369615, 113.538198], null, false); // point 1616
    await campus.addNode('22.369598, 113.538275', [22.369598, 113.538275], null, false); // point 1617
    await campus.addNode('22.369800, 113.538186', [22.369800, 113.538186], null, false); // point 1618
    await campus.addNode('22.369769, 113.538261', [22.369769, 113.538261], null, false); // point 1619
    await campus.addNode('22.369744, 113.538327', [22.369744, 113.538327], null, false); // point 1620
    await campus.addNode('22.369915, 113.538239', [22.369915, 113.538239], null, false); // point 1621
    await campus.addNode('22.369872, 113.538320', [22.369872, 113.538320], null, false); // point 1622
    await campus.addNode('22.369839, 113.538386', [22.369839, 113.538386], null, false); // point 1623
    await campus.addNode('22.370067, 113.538345', [22.370067, 113.538345], null, false); // point 1624
    await campus.addNode('22.370015, 113.538432', [22.370015, 113.538432], null, false); // point 1625
    await campus.addNode('22.369975, 113.538491', [22.369975, 113.538491], null, false); // point 1626
    await campus.addNode('22.370206, 113.538475', [22.370206, 113.538475], null, false); // point 1627
    await campus.addNode('22.370144, 113.538558', [22.370144, 113.538558], null, false); // point 1628
    await campus.addNode('22.370093, 113.538616', [22.370093, 113.538616], null, false); // point 1629
    await campus.addNode('22.370300, 113.538579', [22.370300, 113.538579], null, false); // point 1630
    await campus.addNode('22.370218, 113.538655', [22.370218, 113.538655], null, false); // point 1631
    await campus.addNode('22.370155, 113.538708', [22.370155, 113.538708], null, false); // point 1632
    await campus.addNode('22.370337, 113.538631', [22.370337, 113.538631], null, false); // point 1633
    await campus.addNode('22.370249, 113.538701', [22.370249, 113.538701], null, false); // point 1634
    await campus.addNode('22.370191, 113.538756', [22.370191, 113.538756], null, false); // point 1635
    await campus.addNode('22.370367, 113.538675', [22.370367, 113.538675], null, false); // point 1636
    await campus.addNode('22.370278, 113.538740', [22.370278, 113.538740], null, false); // point 1637
    await campus.addNode('22.370221, 113.538789', [22.370221, 113.538789], null, false); // point 1638
    await campus.addNode('22.370451, 113.538835', [22.370451, 113.538835], null, false); // point 1639
    await campus.addNode('22.370356, 113.538891', [22.370356, 113.538891], null, false); // point 1640
    await campus.addNode('22.370288, 113.538936', [22.370288, 113.538936], null, false); // point 1641
    await campus.addNode('22.370520, 113.538991', [22.370520, 113.538991], null, false); // point 1642
    await campus.addNode('22.370419, 113.539041', [22.370419, 113.539041], null, false); // point 1643
    await campus.addNode('22.370345, 113.539077', [22.370345, 113.539077], null, false); // point 1644
    await campus.addNode('22.370577, 113.539173', [22.370577, 113.539173], null, false); // point 1645
    await campus.addNode('22.370480, 113.539211', [22.370480, 113.539211], null, false); // point 1646
    await campus.addNode('22.370403, 113.539235', [22.370403, 113.539235], null, false); // point 1647
    await campus.addNode('22.370616, 113.539362', [22.370616, 113.539362], null, false); // point 1648
    await campus.addNode('22.370512, 113.539385', [22.370512, 113.539385], null, false); // point 1649
    await campus.addNode('22.370440, 113.539403', [22.370440, 113.539403], null, false); // point 1650
    await campus.addNode('22.370644, 113.539591', [22.370644, 113.539591], null, false); // point 1651
    await campus.addNode('22.370557, 113.539602', [22.370557, 113.539602], null, false); // point 1652
    await campus.addNode('22.370466, 113.539603', [22.370466, 113.539603], null, false); // point 1653
    await campus.addNode('22.370625, 113.539745', [22.370625, 113.539745], null, false); // point 1654
    await campus.addNode('22.370559, 113.539746', [22.370559, 113.539746], null, false); // point 1655
    await campus.addNode('22.370465, 113.539746', [22.370465, 113.539746], null, false); // point 1656
    await campus.addNode('22.370470, 113.539835', [22.370470, 113.539835], null, false); // point 1661
    await campus.addNode('22.370558, 113.539842', [22.370558, 113.539842], null, false); // point 1662
    await campus.addNode('22.370626, 113.539845', [22.370626, 113.539845], null, false); // point 1663
    await campus.addNode('22.370606, 113.540076', [22.370606, 113.540076], null, false); // point 1667
    await campus.addNode('22.370519, 113.540055', [22.370519, 113.540055], null, false); // point 1668
    await campus.addNode('22.370441, 113.540049', [22.370441, 113.540049], null, false); // point 1669
    await campus.addNode('22.370567, 113.540249', [22.370567, 113.540249], null, false); // point 1670
    await campus.addNode('22.370483, 113.540230', [22.370483, 113.540230], null, false); // point 1671
    await campus.addNode('22.370408, 113.540212', [22.370408, 113.540212], null, false); // point 1672
    await campus.addNode('22.370342, 113.540453', [22.370342, 113.540453], null, false); // point 2525
    await campus.addNode('22.370411, 113.540471', [22.370411, 113.540471], null, false); // point 2526
    await campus.addNode('22.370489, 113.540497', [22.370489, 113.540497], null, false); // point 2527
    await campus.addNode('22.370240, 113.540656', [22.370240, 113.540656], null, false); // point 2528
    await campus.addNode('22.370207, 113.540719', [22.370207, 113.540719], null, false); // point 2529
    await campus.addNode('22.370268, 113.540765', [22.370268, 113.540765], null, false); // point 2530
    await campus.addNode('22.370325, 113.540822', [22.370325, 113.540822], null, false); // point 2531
    await campus.addNode('22.370139, 113.540811', [22.370139, 113.540811], null, false); // point 2534
    await campus.addNode('22.370195, 113.540874', [22.370195, 113.540874], null, false); // point 2535
    await campus.addNode('22.370250, 113.540931', [22.370250, 113.540931], null, false); // point 2536
    await campus.addNode('22.370022, 113.540943', [22.370022, 113.540943], null, false); // point 2542
    await campus.addNode('22.370070, 113.541015', [22.370070, 113.541015], null, false); // point 2543
    await campus.addNode('22.370101, 113.541096', [22.370101, 113.541096], null, false); // point 2544
    await campus.addNode('22.369865, 113.541079', [22.369865, 113.541079], null, false); // point 2545
    await campus.addNode('22.369904, 113.541153', [22.369904, 113.541153], null, false); // point 2546
    await campus.addNode('22.369938, 113.541234', [22.369938, 113.541234], null, false); // point 2547
    await campus.addNode('22.369708, 113.541171', [22.369708, 113.541171], null, false); // point 2548
    await campus.addNode('22.369735, 113.541253', [22.369735, 113.541253], null, false); // point 2549
    await campus.addNode('22.369740, 113.541331', [22.369740, 113.541331], null, false); // point 2550
    await campus.addNode('22.369547, 113.541225', [22.369547, 113.541225], null, false); // point 2551
    await campus.addNode('22.369549, 113.541316', [22.369549, 113.541316], null, false); // point 2552
    await campus.addNode('22.369558, 113.541390', [22.369558, 113.541390], null, false); // point 2553
    await campus.addNode('22.369446, 113.541449', [22.369446, 113.541449], null, false); // point 2554

    await campus.addNode('22.368349, 113.539707', [22.368349, 113.539707], null, false); // point 2032
    await campus.addNode('22.368347, 113.539841', [22.368347, 113.539841], null, false); // point 2033
    await campus.addNode('22.368298, 113.539888', [22.368298, 113.539888], null, false); // point 2034
    await campus.addNode('22.368457, 113.539552', [22.368457, 113.539552], null, false); // point 2035
    await campus.addNode('22.368537, 113.539526', [22.368537, 113.539526], null, false); // point 2036
    await campus.addNode('22.368689, 113.539567', [22.368689, 113.539567], null, false); // point 2037
    await campus.addNode('22.368782, 113.539620', [22.368782, 113.539620], null, false); // point 2038
    await campus.addNode('22.368834, 113.539660', [22.368834, 113.539660], null, false); // point 2039
    await campus.addNode('22.368817, 113.539821', [22.368817, 113.539821], null, false); // point 2040
    await campus.addNode('22.368635, 113.539942', [22.368635, 113.539942], null, false); // point 2041
    await campus.addNode('22.368551, 113.539934', [22.368551, 113.539934], null, false); // point 2042
    await campus.addNode('22.368514, 113.540102', [22.368514, 113.540102], null, false); // point 2043
    await campus.addNode('22.368464, 113.540191', [22.368464, 113.540191], null, false); // point 2044
    await campus.addNode('22.368333, 113.539975', [22.368333, 113.539975], null, false); // point 2045
    await campus.addNode('22.368474, 113.539930', [22.368474, 113.539930], null, false); // point 2046
    await campus.addNode('22.368407, 113.539902', [22.368407, 113.539902], null, false); // point 2047
    await campus.addNode('22.368870, 113.539855', [22.368870, 113.539855], null, false); // point 2048
    await campus.addNode('22.368921, 113.539813', [22.368921, 113.539813], null, false); // point 2049
    await campus.addNode('22.368928, 113.539765', [22.368928, 113.539765], null, false); // point 2050
    await campus.addNode('22.368922, 113.539711', [22.368922, 113.539711], null, false); // point 2051
    await campus.addNode('22.368891, 113.539661', [22.368891, 113.539661], null, false); // point 2052
    await campus.addNode('22.369252, 113.539784', [22.369252, 113.539784], null, false); // point 2053
    await campus.addNode('22.370048, 113.540526', [22.370048, 113.540526], null, false); // point 2532
    await campus.addNode('22.369906, 113.540426', [22.369906, 113.540426], null, false); // point 2533
    await campus.addNode('22.370027, 113.540750', [22.370027, 113.540750], null, false); // point 2537
    await campus.addNode('22.369947, 113.540705', [22.369947, 113.540705], null, false); // point 2538
    await campus.addNode('22.369888, 113.540693', [22.369888, 113.540693], null, false); // point 2539
    await campus.addNode('22.369829, 113.540693', [22.369829, 113.540693], null, false); // point 2540
    await campus.addNode('22.369796, 113.540726', [22.369796, 113.540726], null, false); // point 2541

    await campus.addNode('22.370985, 113.539743', [22.370985, 113.539743], null, false); // point 1664
    await campus.addNode('22.371035, 113.539707', [22.371035, 113.539707], null, false); // point 1665
    await campus.addNode('22.371072, 113.539622', [22.371072, 113.539622], null, false); // point 1666
    await campus.addNode('22.371860, 113.534805', [22.371860, 113.534805], null, false); // point 1982
    await campus.addNode('22.371860, 113.534717', [22.371860, 113.534717], null, false); // point 1983
    await campus.addNode('22.371876, 113.534534', [22.371876, 113.534534], null, false); // point 1984
    await campus.addNode('22.371873, 113.534495', [22.371873, 113.534495], null, false); // point 1985
    await campus.addNode('22.371820, 113.534434', [22.371820, 113.534434], null, false); // point 1987
    await campus.addNode('22.371854, 113.534362', [22.371854, 113.534362], null, false); // point 1988
    await campus.addNode('22.371862, 113.534210', [22.371862, 113.534210], null, false); // point 1989
    await campus.addNode('22.371813, 113.534181', [22.371813, 113.534181], null, false); // point 1990
    await campus.addNode('22.371430, 113.537989', [22.371430, 113.537989], null, false); // point 2031
    await campus.addNode('22.371593, 113.537024', [22.371593, 113.537024], null, false); // point 2055
    await campus.addNode('22.371701, 113.536372', [22.371701, 113.536372], null, false); // point 2179
    await campus.addNode('22.371714, 113.536141', [22.371714, 113.536141], null, false); // point 2182
    await campus.addNode('22.371744, 113.535923', [22.371744, 113.535923], null, false); // point 2184
    await campus.addNode('22.371778, 113.535667', [22.371778, 113.535667], null, false); // point 2188
    await campus.addNode('22.371806, 113.535403', [22.371806, 113.535403], null, false); // point 2190
    await campus.addNode('22.371817, 113.535280', [22.371817, 113.535280], null, false); // point 2196
    await campus.addNode('22.371846, 113.535041', [22.371846, 113.535041], null, false); // point 2198
    await campus.addNode('22.371881, 113.534172', [22.371881, 113.534172], null, false); // point 2199
    await campus.addNode('22.371911, 113.534074', [22.371911, 113.534074], null, false); // point 2200
    await campus.addNode('22.372019, 113.534070', [22.372019, 113.534070], null, false); // point 2201
    await campus.addNode('22.371920, 113.533976', [22.371920, 113.533976], null, false); // point 2705
    await campus.addNode('22.371958, 113.532843', [22.371958, 113.532843], null, false); // point 2706
    await campus.addNode('22.371962, 113.532596', [22.371962, 113.532596], null, false); // point 2711
    await campus.addNode('22.371963, 113.532428', [22.371963, 113.532428], null, false); // point 2777
    await campus.addNode('22.371987, 113.531060', [22.371987, 113.531060], null, false); // point 2778
    await campus.addNode('22.371994, 113.530633', [22.371994, 113.530633], null, false); // point 2781
    await campus.addNode('22.371993, 113.530530', [22.371993, 113.530530], null, false); // point 2785
    await campus.addNode('22.371995, 113.530526', [22.371995, 113.530526], null, false); // point 2788
    await campus.addNode('22.372014, 113.529434', [22.372014, 113.529434], null, false); // point 2807
    await campus.addNode('22.371993, 113.528989', [22.371993, 113.528989], null, false); // point 2844
    await campus.addNode('22.371999, 113.528478', [22.371999, 113.528478], null, false); // point 2851
    await campus.addNode('22.371979, 113.528067', [22.371979, 113.528067], null, false); // point 2852
    await campus.addNode('22.371895, 113.526859', [22.371895, 113.526859], null, false); // point 2872
    await campus.addNode('22.371783, 113.525826', [22.371783, 113.525826], null, false); // point 2923
    await campus.addNode('22.371655, 113.525021', [22.371655, 113.525021], null, false); // point 2929
    await campus.addNode('22.371488, 113.523765', [22.371488, 113.523765], null, false); // point 2932
    await campus.addNode('22.371394, 113.522894', [22.371394, 113.522894], null, false); // point 2933

    await campus.addNode('22.371273, 113.522905', [22.371273, 113.522905], null, false); // point 2934
    await campus.addNode('22.371271, 113.523537', [22.371271, 113.523537], null, false); // point 2936
    await campus.addNode('22.371077, 113.523538', [22.371077, 113.523538], null, false); // point 2937

    await campus.addNode('22.371545, 113.525026', [22.371545, 113.525026], null, false); // point 2930
    await campus.addNode('22.371528, 113.525043', [22.371528, 113.525043], null, false); // point 2931

    await campus.addNode('22.371856, 113.528993', [22.371856, 113.528993], null, false); // point 2845
    await campus.addNode('22.371855, 113.528770', [22.371855, 113.528770], null, false); // point 2847
    await campus.addNode('22.371997, 113.528771', [22.371997, 113.528771], null, false); // point 2848
    await campus.addNode('22.371835, 113.528487', [22.371835, 113.528487], null, false); // point 2849
    await campus.addNode('22.371938, 113.528071', [22.371938, 113.528071], null, false); // point 2853
    await campus.addNode('22.371623, 113.528066', [22.371623, 113.528066], null, false); // point 2854
    await campus.addNode('22.371488, 113.528068', [22.371488, 113.528068], null, false); // point 2855
    await campus.addNode('22.371498, 113.528115', [22.371498, 113.528115], null, false); // point 2856
    await campus.addNode('22.371490, 113.528279', [22.371490, 113.528279], null, false); // point 2857
    await campus.addNode('22.371588, 113.528276', [22.371588, 113.528276], null, false); // point 2858
    await campus.addNode('22.371469, 113.528755', [22.371469, 113.528755], null, false); // point 2860
    await campus.addNode('22.371490, 113.529152', [22.371490, 113.529152], null, false); // point 2862
    await campus.addNode('22.371619, 113.529143', [22.371619, 113.529143], null, false); // point 2863

    await campus.addNode('22.371907, 113.527944', [22.371907, 113.527944], null, false); // point 2866
    await campus.addNode('22.371851, 113.527848', [22.371851, 113.527848], null, false); // point 2867
    await campus.addNode('22.371771, 113.527746', [22.371771, 113.527746], null, false); // point 2868
    await campus.addNode('22.371728, 113.527389', [22.371728, 113.527389], null, false); // point 2869
    await campus.addNode('22.371663, 113.526885', [22.371663, 113.526885], null, false); // point 2871
    await campus.addNode('22.371589, 113.526894', [22.371589, 113.526894], null, false); // point 2873
    await campus.addNode('22.371343, 113.526909', [22.371343, 113.526909], null, false); // point 2912
    await campus.addNode('22.371397, 113.527454', [22.371397, 113.527454], null, false); // point 2913
    await campus.addNode('22.371435, 113.527702', [22.371435, 113.527702], null, false); // point 2915
    await campus.addNode('22.371294, 113.526342', [22.371294, 113.526342], null, false); // point 2916
    await campus.addNode('22.371274, 113.526126', [22.371274, 113.526126], null, false); // point 2918
    await campus.addNode('22.371259, 113.525950', [22.371259, 113.525950], null, false); // point 2919
    await campus.addNode('22.371279, 113.525901', [22.371279, 113.525901], null, false); // point 2920
    await campus.addNode('22.371310, 113.525876', [22.371310, 113.525876], null, false); // point 2921
    await campus.addNode('22.371657, 113.525832', [22.371657, 113.525832], null, false); // point 2922
    await campus.addNode('22.371657, 113.525874', [22.371657, 113.525874], null, false); // point 2924
    await campus.addNode('22.371654, 113.525938', [22.371654, 113.525938], null, false); // point 2925
    await campus.addNode('22.371592, 113.526018', [22.371592, 113.526018], null, false); // point 2926
    await campus.addNode('22.371612, 113.526331', [22.371612, 113.526331], null, false); // point 2927

    await campus.addNode('22.371818, 113.531061', [22.371818, 113.531061], null, false); // point 2779
    await campus.addNode('22.371816, 113.530633', [22.371816, 113.530633], null, false); // point 2780
    await campus.addNode('22.371814, 113.530531', [22.371814, 113.530531], null, false); // point 2782
    await campus.addNode('22.371905, 113.530530', [22.371905, 113.530530], null, false); // point 2784
    await campus.addNode('22.371912, 113.530373', [22.371912, 113.530373], null, false); // point 2786
    await campus.addNode('22.371432, 113.531050', [22.371432, 113.531050], null, false); // point 2789
    await campus.addNode('22.371381, 113.531020', [22.371381, 113.531020], null, false); // point 2790
    await campus.addNode('22.371357, 113.530959', [22.371357, 113.530959], null, false); // point 2791
    await campus.addNode('22.371263, 113.530659', [22.371263, 113.530659], null, false); // point 2792
    await campus.addNode('22.371169, 113.530399', [22.371169, 113.530399], null, false); // point 2793
    await campus.addNode('22.371372, 113.530188', [22.371372, 113.530188], null, false); // point 2794
    await campus.addNode('22.371131, 113.530336', [22.371131, 113.530336], null, false); // point 2797
    await campus.addNode('22.370905, 113.530038', [22.370905, 113.530038], null, false); // point 2798
    await campus.addNode('22.370824, 113.529918', [22.370824, 113.529918], null, false); // point 2799
    await campus.addNode('22.370804, 113.529809', [22.370804, 113.529809], null, false); // point 2801
    await campus.addNode('22.370817, 113.529714', [22.370817, 113.529714], null, false); // point 2802
    await campus.addNode('22.370972, 113.529450', [22.370972, 113.529450], null, false); // point 2803
    await campus.addNode('22.371075, 113.529448', [22.371075, 113.529448], null, false); // point 2804
    await campus.addNode('22.371521, 113.529436', [22.371521, 113.529436], null, false); // point 2805
    await campus.addNode('22.371652, 113.529438', [22.371652, 113.529438], null, false); // point 2806

    await campus.addNode('22.370370, 113.530044', [22.370370, 113.530044], null, false); // point 2800

    await campus.addNode('22.371468, 113.532869', [22.371468, 113.532869], null, false); // point 2707
    await campus.addNode('22.371458, 113.532712', [22.371458, 113.532712], null, false); // point 2708
    await campus.addNode('22.371464, 113.532607', [22.371464, 113.532607], null, false); // point 2710
    await campus.addNode('22.371437, 113.533450', [22.371437, 113.533450], null, false); // point 2712
    await campus.addNode('22.371309, 113.533444', [22.371309, 113.533444], null, false); // point 2713
    await campus.addNode('22.371062, 113.533440', [22.371062, 113.533440], null, false); // point 2714
    await campus.addNode('22.371023, 113.533440', [22.371023, 113.533440], null, false); // point 2715
    await campus.addNode('22.370672, 113.533436', [22.370672, 113.533436], null, false); // point 2716
    await campus.addNode('22.370980, 113.533851', [22.370980, 113.533851], null, false); // point 2717
    await campus.addNode('22.371028, 113.533827', [22.371028, 113.533827], null, false); // point 2718
    await campus.addNode('22.371044, 113.533674', [22.371044, 113.533674], null, false); // point 2719
    await campus.addNode('22.371301, 113.533653', [22.371301, 113.533653], null, false); // point 2720
    await campus.addNode('22.371297, 113.533911', [22.371297, 113.533911], null, false); // point 2722
    await campus.addNode('22.371440, 113.532014', [22.371440, 113.532014], null, false); // point 2723
    await campus.addNode('22.371338, 113.531999', [22.371338, 113.531999], null, false); // point 2724
    await campus.addNode('22.371192, 113.531999', [22.371192, 113.531999], null, false); // point 2725
    await campus.addNode('22.371087, 113.531999', [22.371087, 113.531999], null, false); // point 2726
    await campus.addNode('22.371026, 113.531996', [22.371026, 113.531996], null, false); // point 2727
    await campus.addNode('22.370800, 113.531998', [22.370800, 113.531998], null, false); // point 2728
    await campus.addNode('22.370803, 113.531835', [22.370803, 113.531835], null, false); // point 2729
    await campus.addNode('22.370805, 113.531584', [22.370805, 113.531584], null, false); // point 2730
    await campus.addNode('22.370681, 113.532024', [22.370681, 113.532024], null, false); // point 2731
    await campus.addNode('22.370678, 113.532578', [22.370678, 113.532578], null, false); // point 2732
    await campus.addNode('22.370667, 113.532727', [22.370667, 113.532727], null, false); // point 2733
    await campus.addNode('22.370667, 113.532879', [22.370667, 113.532879], null, false); // point 2734

    await campus.addNode('22.369469, 113.537777', [22.369469, 113.537777], null, false); // point 1195
    await campus.addNode('22.370991, 113.537989', [22.370991, 113.537989], null, false); // point 2054
    await campus.addNode('22.369916, 113.537773', [22.369916, 113.537773], null, false); // point 2171
    await campus.addNode('22.369913, 113.537624', [22.369913, 113.537624], null, false); // point 2172
    await campus.addNode('22.369930, 113.538020', [22.369930, 113.538020], null, false); // point 2175
    await campus.addNode('22.370439, 113.538020', [22.370439, 113.538020], null, false); // point 2176
    await campus.addNode('22.371024, 113.537599', [22.371024, 113.537599], null, false); // point 2177

    await campus.addNode('22.370391, 113.539750', [22.370391, 113.539750], null, false); // point 1657
    await campus.addNode('22.370350, 113.539786', [22.370350, 113.539786], null, false); // point 1658
    await campus.addNode('22.370301, 113.539786', [22.370301, 113.539786], null, false); // point 1659
    await campus.addNode('22.370381, 113.539826', [22.370381, 113.539826], null, false); // point 1660

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
    await campus.addNode('22.363061, 113.539522', [22.363061, 113.539522], null, false); // point 905
    await campus.addNode('22.362881, 113.539519', [22.362881, 113.539519], null, false); // point 906
    await campus.addNode('22.362831, 113.539519', [22.362831, 113.539519], null, false); // point 908
    await campus.addNode('22.362574, 113.539520', [22.362574, 113.539520], null, false); // point 910
    await campus.addNode('22.362462, 113.539519', [22.362462, 113.539519], null, false); // point 914
    await campus.addNode('22.362352, 113.539520', [22.362352, 113.539520], null, false); // point 928
    await campus.addNode('22.362318, 113.539520', [22.362318, 113.539520], null, false); // point 930
    await campus.addNode('22.362243, 113.539519', [22.362243, 113.539519], null, false); // point 934
    await campus.addNode('22.362076, 113.539520', [22.362076, 113.539520], null, false); // point 935
    await campus.addNode('22.361990, 113.539519', [22.361990, 113.539519], null, false); // point 952
    await campus.addNode('22.361851, 113.539520', [22.361851, 113.539520], null, false); // point 954
    await campus.addNode('22.361813, 113.539519', [22.361813, 113.539519], null, false); // point 955
    await campus.addNode('22.361766, 113.539520', [22.361766, 113.539520], null, false); // point 1022
    await campus.addNode('22.364246, 113.539998', [22.364246, 113.539998], null, false); // point 1041
    await campus.addNode('22.364246, 113.540400', [22.364246, 113.540400], null, false); // point 1045
    await campus.addNode('22.364246, 113.540332', [22.364246, 113.540332], null, false); // point 1046
    await campus.addNode('22.364246, 113.539950', [22.364246, 113.539950], null, false); // point 1050
    await campus.addNode('22.361095, 113.539544', [22.361095, 113.539544], null, false); // point 2671
    await campus.addNode('22.361103, 113.539424', [22.361103, 113.539424], null, false); // point 2672
    await campus.addNode('22.361360, 113.539554', [22.361360, 113.539554], null, false); // point 2673
    await campus.addNode('22.361542, 113.539529', [22.361542, 113.539529], null, false); // point 2974

    await campus.addNode('22.364163, 113.540329', [22.364163, 113.540329], null, false); // point 1047

    await campus.addNode('22.364157, 113.540259', [22.364157, 113.540259], null, false); // point 1048
    await campus.addNode('22.364153, 113.539987', [22.364153, 113.539987], null, false); // point 1049
    await campus.addNode('22.364168, 113.539904', [22.364168, 113.539904], null, false); // point 1052
    await campus.addNode('22.364130, 113.539869', [22.364130, 113.539869], null, false); // point 1053
    await campus.addNode('22.364118, 113.539689', [22.364118, 113.539689], null, false); // point 1054
    await campus.addNode('22.364063, 113.539673', [22.364063, 113.539673], null, false); // point 1055
    await campus.addNode('22.364018, 113.539626', [22.364018, 113.539626], null, false); // point 1056

    await campus.addNode('22.364758, 113.539812', [22.364758, 113.539812], null, false); // point 1038
    await campus.addNode('22.364758, 113.539666', [22.364758, 113.539666], null, false); // point 1039
    await campus.addNode('22.364287, 113.540013', [22.364287, 113.540013], null, false); // point 1040
    await campus.addNode('22.364758, 113.540332', [22.364758, 113.540332], null, false); // point 1042
    await campus.addNode('22.364758, 113.540366', [22.364758, 113.540366], null, false); // point 1043
    await campus.addNode('22.364758, 113.540386', [22.364758, 113.540386], null, false); // point 1044
    await campus.addNode('22.364755, 113.540420', [22.364755, 113.540420], null, false); // point 2316

    await campus.addNode('22.361852, 113.539419', [22.361852, 113.539419], null, false); // point 1018
    await campus.addNode('22.361911, 113.539270', [22.361911, 113.539270], null, false); // point 1019
    await campus.addNode('22.361786, 113.539189', [22.361786, 113.539189], null, false); // point 1020
    await campus.addNode('22.361772, 113.539396', [22.361772, 113.539396], null, false); // point 1021
    await campus.addNode('22.361786, 113.539079', [22.361786, 113.539079], null, false); // point 1024
    await campus.addNode('22.361597, 113.538906', [22.361597, 113.538906], null, false); // point 2977
    await campus.addNode('22.361609, 113.538758', [22.361609, 113.538758], null, false); // point 2979
    await campus.addNode('22.361776, 113.538743', [22.361776, 113.538743], null, false); // point 2981

    await campus.addNode('22.362093, 113.539352', [22.362093, 113.539352], null, false); // point 950
    await campus.addNode('22.361984, 113.539312', [22.361984, 113.539312], null, false); // point 951

    await campus.addNode('22.361970, 113.539643', [22.361970, 113.539643], null, false); // point 953

    await campus.addNode('22.362301, 113.539584', [22.362301, 113.539584], null, false); // point 931
    await campus.addNode('22.362255, 113.539586', [22.362255, 113.539586], null, false); // point 933

    await campus.addNode('22.362568, 113.539598', [22.362568, 113.539598], null, false); // point 911
    await campus.addNode('22.362521, 113.539657', [22.362521, 113.539657], null, false); // point 912
    await campus.addNode('22.362502, 113.539606', [22.362502, 113.539606], null, false); // point 913

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
    await campus.addNode('22.362405, 113.535322', [22.362405, 113.535322], null, false); // point 991
    await campus.addNode('22.362338, 113.535301', [22.362338, 113.535301], null, false); // point 992
    await campus.addNode('22.362412, 113.535289', [22.362412, 113.535289], null, false); // point 993
    await campus.addNode('22.362356, 113.535262', [22.362356, 113.535262], null, false); // point 994
    await campus.addNode('22.362467, 113.535166', [22.362467, 113.535166], null, false); // point 995
    await campus.addNode('22.362864, 113.534631', [22.362864, 113.534631], null, false); // point 996
    await campus.addNode('22.362933, 113.534516', [22.362933, 113.534516], null, false); // point 997
    await campus.addNode('22.362972, 113.534459', [22.362972, 113.534459], null, false); // point 999

    await campus.addNode('22.362870, 113.534490', [22.362870, 113.534490], null, false); // point 998
    await campus.addNode('22.362793, 113.534517', [22.362793, 113.534517], null, false); // point 1000

    await campus.addNode('22.362911, 113.538541', [22.362911, 113.538541], null, false); // point 780
    await campus.addNode('22.362695, 113.538541', [22.362695, 113.538541], null, false); // point 781
    await campus.addNode('22.362467, 113.538541', [22.362467, 113.538541], null, false); // point 783
    await campus.addNode('22.362387, 113.538541', [22.362387, 113.538541], null, false); // point 784
    await campus.addNode('22.362239, 113.538541', [22.362239, 113.538541], null, false); // point 786
    await campus.addNode('22.362177, 113.538541', [22.362177, 113.538541], null, false); // point 816
    await campus.addNode('22.362111, 113.538541', [22.362111, 113.538541], null, false); // point 818
    await campus.addNode('22.362082, 113.538541', [22.362082, 113.538541], null, false); // point 820
    await campus.addNode('22.362012, 113.538541', [22.362012, 113.538541], null, false); // point 821
    await campus.addNode('22.361932, 113.538541', [22.361932, 113.538541], null, false); // point 823
    await campus.addNode('22.361932, 113.538464', [22.361932, 113.538464], null, false); // point 824
    await campus.addNode('22.361955, 113.538061', [22.361955, 113.538061], null, false); // point 1830
    await campus.addNode('22.361614, 113.538636', [22.361614, 113.538636], null, false); // point 1868
    await campus.addNode('22.361647, 113.538636', [22.361647, 113.538636], null, false); // point 1869
    await campus.addNode('22.361819, 113.538636', [22.361819, 113.538636], null, false); // point 1871
    await campus.addNode('22.361819, 113.538679', [22.361819, 113.538679], null, false); // point 1872

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
    await campus.addNode('22.365787, 113.540833', [22.365787, 113.540833], null, false); // point 1266
    await campus.addNode('22.366088, 113.540656', [22.366088, 113.540656], null, false); // point 1278
    await campus.addNode('22.366046, 113.540668', [22.366046, 113.540668], null, false); // point 1279
    await campus.addNode('22.365455, 113.541207', [22.365455, 113.541207], null, false); // point 1338
    await campus.addNode('22.365485, 113.541247', [22.365485, 113.541247], null, false); // point 1339
    await campus.addNode('22.365509, 113.541253', [22.365509, 113.541253], null, false); // point 1340
    await campus.addNode('22.365487, 113.541276', [22.365487, 113.541276], null, false); // point 1341
    await campus.addNode('22.365476, 113.541434', [22.365476, 113.541434], null, false); // point 1343
    await campus.addNode('22.365467, 113.541551', [22.365467, 113.541551], null, false); // point 1344
    await campus.addNode('22.365517, 113.541570', [22.365517, 113.541570], null, false); // point 1345
    await campus.addNode('22.365514, 113.541375', [22.365514, 113.541375], null, false); // point 1346
    await campus.addNode('22.365565, 113.541293', [22.365565, 113.541293], null, false); // point 1348
    await campus.addNode('22.365588, 113.541220', [22.365588, 113.541220], null, false); // point 1349
    await campus.addNode('22.365443, 113.541762', [22.365443, 113.541762], null, false); // point 1351
    await campus.addNode('22.365622, 113.541599', [22.365622, 113.541599], null, false); // point 1352
    await campus.addNode('22.365622, 113.541599', [22.365622, 113.541599], null, false); // point 1354
    await campus.addNode('22.365603, 113.541149', [22.365603, 113.541149], null, false); // point 1355
    await campus.addNode('22.365672, 113.541097', [22.365672, 113.541097], null, false); // point 1356
    await campus.addNode('22.365646, 113.540993', [22.365646, 113.540993], null, false); // point 1358
    await campus.addNode('22.365589, 113.541017', [22.365589, 113.541017], null, false); // point 1359
    await campus.addNode('22.365785, 113.540923', [22.365785, 113.540923], null, false); // point 1360
    await campus.addNode('22.365815, 113.541004', [22.365815, 113.541004], null, false); // point 1361
    await campus.addNode('22.365803, 113.541069', [22.365803, 113.541069], null, false); // point 1362
    await campus.addNode('22.365799, 113.541108', [22.365799, 113.541108], null, false); // point 1363
    await campus.addNode('22.365794, 113.541180', [22.365794, 113.541180], null, false); // point 1364
    await campus.addNode('22.365788, 113.541236', [22.365788, 113.541236], null, false); // point 1365
    await campus.addNode('22.365844, 113.541122', [22.365844, 113.541122], null, false); // point 1464
    await campus.addNode('22.365901, 113.541108', [22.365901, 113.541108], null, false); // point 1465
    await campus.addNode('22.365901, 113.541184', [22.365901, 113.541184], null, false); // point 1466
    await campus.addNode('22.365897, 113.541041', [22.365897, 113.541041], null, false); // point 1468
    await campus.addNode('22.365914, 113.541010', [22.365914, 113.541010], null, false); // point 1469
    await campus.addNode('22.365917, 113.540956', [22.365917, 113.540956], null, false); // point 1471
    await campus.addNode('22.365854, 113.540880', [22.365854, 113.540880], null, false); // point 1472
    await campus.addNode('22.365948, 113.540819', [22.365948, 113.540819], null, false); // point 1473
    await campus.addNode('22.365977, 113.540803', [22.365977, 113.540803], null, false); // point 1474
    await campus.addNode('22.366051, 113.540872', [22.366051, 113.540872], null, false); // point 1475
    await campus.addNode('22.366077, 113.540985', [22.366077, 113.540985], null, false); // point 1476
    await campus.addNode('22.366015, 113.540782', [22.366015, 113.540782], null, false); // point 1478
    await campus.addNode('22.366171, 113.540672', [22.366171, 113.540672], null, false); // point 1479
    await campus.addNode('22.366308, 113.540560', [22.366308, 113.540560], null, false); // point 1481
    await campus.addNode('22.366351, 113.540522', [22.366351, 113.540522], null, false); // point 1484
    await campus.addNode('22.364601, 113.541311', [22.364601, 113.541311], null, false); // point 2317
    await campus.addNode('22.364768, 113.541284', [22.364768, 113.541284], null, false); // point 2318
    await campus.addNode('22.364867, 113.541273', [22.364867, 113.541273], null, false); // point 2321
    await campus.addNode('22.364983, 113.541247', [22.364983, 113.541247], null, false); // point 2323
    await campus.addNode('22.365022, 113.541241', [22.365022, 113.541241], null, false); // point 2325
    await campus.addNode('22.365022, 113.541088', [22.365022, 113.541088], null, false); // point 2326
    await campus.addNode('22.364424, 113.541342', [22.364424, 113.541342], null, false); // point 3159

    await campus.addNode('22.364770, 113.541436', [22.364770, 113.541436], null, false); // point 2319
    await campus.addNode('22.364863, 113.541418', [22.364863, 113.541418], null, false); // point 2322
    await campus.addNode('22.364990, 113.541372', [22.364990, 113.541372], null, false); // point 2324
    await campus.addNode('22.364857, 113.541602', [22.364857, 113.541602], null, false); // point 2328
    await campus.addNode('22.364900, 113.541665', [22.364900, 113.541665], null, false); // point 2329
    await campus.addNode('22.364899, 113.541503', [22.364899, 113.541503], null, false); // point 2331
    await campus.addNode('22.364859, 113.541633', [22.364859, 113.541633], null, false); // point 2332
    await campus.addNode('22.364774, 113.541682', [22.364774, 113.541682], null, false); // point 2333
    await campus.addNode('22.364773, 113.541749', [22.364773, 113.541749], null, false); // point 2335
    await campus.addNode('22.364796, 113.541859', [22.364796, 113.541859], null, false); // point 2337
    await campus.addNode('22.364885, 113.541840', [22.364885, 113.541840], null, false); // point 2339
    await campus.addNode('22.364896, 113.541817', [22.364896, 113.541817], null, false); // point 2340
    await campus.addNode('22.364900, 113.541893', [22.364900, 113.541893], null, false); // point 2341
    await campus.addNode('22.364795, 113.541890', [22.364795, 113.541890], null, false); // point 2342

    await campus.addNode('22.366195, 113.540785', [22.366195, 113.540785], null, false); // point 1480
    await campus.addNode('22.366369, 113.540613', [22.366369, 113.540613], null, false); // point 1482
    await campus.addNode('22.366426, 113.540689', [22.366426, 113.540689], null, false); // point 1483
    await campus.addNode('22.366383, 113.540581', [22.366383, 113.540581], null, false); // point 1485

    await campus.addNode('22.362026, 113.536578', [22.362026, 113.536578], null, false); // point 1800
    await campus.addNode('22.361877, 113.536772', [22.361877, 113.536772], null, false); // point 1801
    await campus.addNode('22.361687, 113.537107', [22.361687, 113.537107], null, false); // point 1803
    await campus.addNode('22.361596, 113.537299', [22.361596, 113.537299], null, false); // point 1804
    await campus.addNode('22.361557, 113.537400', [22.361557, 113.537400], null, false); // point 1805
    await campus.addNode('22.361441, 113.537791', [22.361441, 113.537791], null, false); // point 1820
    await campus.addNode('22.361494, 113.537583', [22.361494, 113.537583], null, false); // point 1821
    await campus.addNode('22.361405, 113.537933', [22.361405, 113.537933], null, false); // point 1822
    await campus.addNode('22.361394, 113.537960', [22.361394, 113.537960], null, false); // point 1823
    await campus.addNode('22.361365, 113.538250', [22.361365, 113.538250], null, false); // point 1864
    await campus.addNode('22.361358, 113.538412', [22.361358, 113.538412], null, false); // point 1866
    await campus.addNode('22.361358, 113.538657', [22.361358, 113.538657], null, false); // point 1867
    await campus.addNode('22.361445, 113.539197', [22.361445, 113.539197], null, false); // point 2975
    await campus.addNode('22.361388, 113.538919', [22.361388, 113.538919], null, false); // point 2976
    await campus.addNode('22.361661, 113.539847', [22.361661, 113.539847], null, false); // point 2982
    await campus.addNode('22.361908, 113.540255', [22.361908, 113.540255], null, false); // point 3051
    await campus.addNode('22.361821, 113.540120', [22.361821, 113.540120], null, false); // point 3052
    await campus.addNode('22.362144, 113.540556', [22.362144, 113.540556], null, false); // point 3053
    await campus.addNode('22.362223, 113.540644', [22.362223, 113.540644], null, false); // point 3092
    await campus.addNode('22.362296, 113.540699', [22.362296, 113.540699], null, false); // point 3093
    await campus.addNode('22.362686, 113.540993', [22.362686, 113.540993], null, false); // point 3102
    await campus.addNode('22.362485, 113.540840', [22.362485, 113.540840], null, false); // point 3103
    await campus.addNode('22.362770, 113.541041', [22.362770, 113.541041], null, false); // point 3104
    await campus.addNode('22.362848, 113.541090', [22.362848, 113.541090], null, false); // point 3105
    await campus.addNode('22.362991, 113.541143', [22.362991, 113.541143], null, false); // point 3106
    await campus.addNode('22.363109, 113.541186', [22.363109, 113.541186], null, false); // point 3107
    await campus.addNode('22.363209, 113.541228', [22.363209, 113.541228], null, false); // point 3108
    await campus.addNode('22.363320, 113.541266', [22.363320, 113.541266], null, false); // point 3110
    await campus.addNode('22.363443, 113.541275', [22.363443, 113.541275], null, false); // point 3111
    await campus.addNode('22.363593, 113.541302', [22.363593, 113.541302], null, false); // point 3113
    await campus.addNode('22.363775, 113.541335', [22.363775, 113.541335], null, false); // point 3114
    await campus.addNode('22.363885, 113.541347', [22.363885, 113.541347], null, false); // point 3116
    await campus.addNode('22.363989, 113.541357', [22.363989, 113.541357], null, false); // point 3117
    await campus.addNode('22.364128, 113.541378', [22.364128, 113.541378], null, false); // point 3118
    await campus.addNode('22.364220, 113.541362', [22.364220, 113.541362], null, false); // point 3119

    await campus.addNode('22.364136, 113.541660', [22.364136, 113.541660], null, false); // point 3120
    await campus.addNode('22.364302, 113.541652', [22.364302, 113.541652], null, false); // point 3157
    await campus.addNode('22.364430, 113.541647', [22.364430, 113.541647], null, false); // point 3158
    await campus.addNode('22.364430, 113.541828', [22.364430, 113.541828], null, false); // point 3160
    await campus.addNode('22.364303, 113.541826', [22.364303, 113.541826], null, false); // point 3161
    await campus.addNode('22.364137, 113.541837', [22.364137, 113.541837], null, false); // point 3162
    await campus.addNode('22.364137, 113.541960', [22.364137, 113.541960], null, false); // point 3164
    await campus.addNode('22.364278, 113.541943', [22.364278, 113.541943], null, false); // point 3165

    await campus.addNode('22.363354, 113.541845', [22.363354, 113.541845], null, false); // point 3112

    await campus.addNode('22.361239, 113.540715', [22.361239, 113.540715], null, false); // point 2662
    await campus.addNode('22.361574, 113.539965', [22.361574, 113.539965], null, false); // point 2983
    await campus.addNode('22.361537, 113.540031', [22.361537, 113.540031], null, false); // point 2984
    await campus.addNode('22.361358, 113.539954', [22.361358, 113.539954], null, false); // point 2985
    await campus.addNode('22.361302, 113.539909', [22.361302, 113.539909], null, false); // point 2987
    await campus.addNode('22.361228, 113.539864', [22.361228, 113.539864], null, false); // point 2988
    await campus.addNode('22.361281, 113.539719', [22.361281, 113.539719], null, false); // point 2989
    await campus.addNode('22.361370, 113.539645', [22.361370, 113.539645], null, false); // point 2991
    await campus.addNode('22.361166, 113.539994', [22.361166, 113.539994], null, false); // point 2992
    await campus.addNode('22.361122, 113.540108', [22.361122, 113.540108], null, false); // point 2994
    await campus.addNode('22.361266, 113.540068', [22.361266, 113.540068], null, false); // point 2995
    await campus.addNode('22.361377, 113.540091', [22.361377, 113.540091], null, false); // point 2996
    await campus.addNode('22.361487, 113.540148', [22.361487, 113.540148], null, false); // point 2997
    await campus.addNode('22.361464, 113.540200', [22.361464, 113.540200], null, false); // point 3028
    await campus.addNode('22.361373, 113.540401', [22.361373, 113.540401], null, false); // point 3030
    await campus.addNode('22.361318, 113.540499', [22.361318, 113.540499], null, false); // point 3032
    await campus.addNode('22.361310, 113.540607', [22.361310, 113.540607], null, false); // point 3033
    await campus.addNode('22.361259, 113.540617', [22.361259, 113.540617], null, false); // point 3034
    await campus.addNode('22.361349, 113.540672', [22.361349, 113.540672], null, false); // point 3035
    await campus.addNode('22.361409, 113.540697', [22.361409, 113.540697], null, false); // point 3036
    await campus.addNode('22.361021, 113.540188', [22.361021, 113.540188], null, false); // point 3043
    await campus.addNode('22.360995, 113.540372', [22.360995, 113.540372], null, false); // point 3044
    await campus.addNode('22.360934, 113.540514', [22.360934, 113.540514], null, false); // point 3045
    await campus.addNode('22.361575, 113.540212', [22.361575, 113.540212], null, false); // point 3050

    await campus.addNode('22.361489, 113.540642', [22.361489, 113.540642], null, false); // point 3037
    await campus.addNode('22.361554, 113.540628', [22.361554, 113.540628], null, false); // point 3038
    await campus.addNode('22.361641, 113.540662', [22.361641, 113.540662], null, false); // point 3039
    await campus.addNode('22.361674, 113.540708', [22.361674, 113.540708], null, false); // point 3040
    await campus.addNode('22.361716, 113.540769', [22.361716, 113.540769], null, false); // point 3041
    await campus.addNode('22.361732, 113.540465', [22.361732, 113.540465], null, false); // point 3047
    await campus.addNode('22.361798, 113.540312', [22.361798, 113.540312], null, false); // point 3049

    await campus.addNode('22.361653, 113.537928', [22.361653, 113.537928], null, false); // point 1824
    await campus.addNode('22.361733, 113.537928', [22.361733, 113.537928], null, false); // point 1826
    await campus.addNode('22.361852, 113.537929', [22.361852, 113.537929], null, false); // point 1828
    await campus.addNode('22.361923, 113.538022', [22.361923, 113.538022], null, false); // point 1829

    await campus.addNode('22.362009, 113.536869', [22.362009, 113.536869], null, false); // point 1802

    await campus.addNode('22.361668, 113.537468', [22.361668, 113.537468], null, false); // point 1806
    await campus.addNode('22.361749, 113.537476', [22.361749, 113.537476], null, false); // point 1807
    await campus.addNode('22.361813, 113.537534', [22.361813, 113.537534], null, false); // point 1808
    await campus.addNode('22.361876, 113.537589', [22.361876, 113.537589], null, false); // point 1809
    await campus.addNode('22.361900, 113.537623', [22.361900, 113.537623], null, false); // point 1810
    await campus.addNode('22.361938, 113.537673', [22.361938, 113.537673], null, false); // point 1811
    await campus.addNode('22.361961, 113.537718', [22.361961, 113.537718], null, false); // point 1812
    await campus.addNode('22.361926, 113.537710', [22.361926, 113.537710], null, false); // point 1813
    await campus.addNode('22.361880, 113.537708', [22.361880, 113.537708], null, false); // point 1814
    await campus.addNode('22.361817, 113.537718', [22.361817, 113.537718], null, false); // point 1815
    await campus.addNode('22.361740, 113.537705', [22.361740, 113.537705], null, false); // point 1816
    await campus.addNode('22.361661, 113.537715', [22.361661, 113.537715], null, false); // point 1817
    await campus.addNode('22.361515, 113.537791', [22.361515, 113.537791], null, false); // point 1818
    await campus.addNode('22.361478, 113.537795', [22.361478, 113.537795], null, false); // point 1819

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
    await campus.addEdge('22.365104, 113.543142', '22.365163, 113.543197', 6, 4);
    await campus.addEdge('22.365101, 113.543113', '22.365104, 113.543142', 1, 1);
    await campus.addEdge('Building T6', '22.365101, 113.543113', 1, 1);
    await campus.addEdge('Building T6 Entrance 1', '22.365101, 113.543113', 1, 1);
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
    await campus.addEdge('台湾卤肉饭', '秘制鲜肉并', 5, 3);
    await campus.addEdge('台湾卤肉饭 Entrance 2', '秘制鲜肉并', 5, 3);
    await campus.addEdge('秘制鲜肉并', '22.365201, 113.540376',  14, 9);
    await campus.addEdge('沙县小吃', '22.365201, 113.540376',  17, 11);
    await campus.addEdge('沙县小吃', '秘制鲜肉并', 3, 1);
    await campus.addEdge('22.365254, 113.540557', '22.365201, 113.540376',  21, 16);
    await campus.addEdge('沙县小吃', '22.365254, 113.540557', 2, 1);
    await campus.addEdge('22.366295, 113.544191', '22.366176, 113.544281', 4, 2);
    await campus.addEdge('22.366552, 113.543881', '22.366513, 113.543691', 19, 11);
    await campus.addEdge('22.366475, 113.543623', '22.366513, 113.543691', 7, 4);
    await campus.addEdge('22.366714, 113.544514', '22.366614, 113.544190', 33, 21);
    await campus.addEdge('22.366290, 113.544287', '22.366714, 113.544514', 50, 32);
    await campus.addEdge('22.366290, 113.544287', '22.366295, 113.544191', 2, 1);
    await campus.addEdge('22.366714, 113.544514', '22.367251, 113.544836', 69, 41);
    await campus.addEdge('22.367268, 113.544894', '22.367251, 113.544836', 7, 4);
    await campus.addEdge('22.367330, 113.544834', '22.367251, 113.544836', 8, 5);
    await campus.addEdge('22.367330, 113.544834', '22.367347, 113.544904', 7, 4);
    await campus.addEdge('22.367268, 113.544894', '22.367313, 113.544910', 4, 2);
    await campus.addEdge('22.367347, 113.544904', '22.367313, 113.544910', 4, 2);
    await campus.addEdge('22.367347, 113.544904', '22.367371, 113.544979', 7, 4);
    await campus.addEdge('22.367206, 113.545299', '22.367371, 113.544979', 38, 23);
    await campus.addEdge('22.367385, 113.544891', '22.367347, 113.544904', 3, 2);
    await campus.addEdge('22.367429, 113.544942', '22.367371, 113.544979', 6, 4);
    await campus.addEdge('22.366485, 113.540300', '22.366529, 113.540353', 7, 4);
    await campus.addEdge('22.366485, 113.540300', '22.366430, 113.540229', 7, 5);
    await campus.addEdge('22.365056, 113.542272', '22.365147, 113.542328', 11, 7);
    await campus.addEdge('Dormitory №5', '22.365056, 113.542272', 2, 1);
    await campus.addEdge('Dormitory №5 Entrance 3', '22.365056, 113.542272', 2, 1);
    await campus.addEdge('Dormitory №5 Study Room №3', '22.365056, 113.542272', 5, 3);
    await campus.addEdge('Dormitory №5', '22.365145, 113.542593', 15, 9);
    await campus.addEdge('Dormitory №5 Entrance 2', '22.365145, 113.542593', 15, 9);
    await campus.addEdge('Dormitory №5', '22.365145, 113.542593', 13, 8);
    await campus.addEdge('Dormitory №5 Entrance 1', '22.365145, 113.542593', 13, 8);
    await campus.addEdge('22.365199, 113.542637', '22.365145, 113.542593', 7, 4);
    await campus.addEdge('22.365267, 113.542608', '22.365199, 113.542637', 5, 3);
    await campus.addEdge('22.365266, 113.542804', '22.365267, 113.542608', 12, 8);
    await campus.addEdge('22.365291, 113.542851', '22.365266, 113.542804', 7, 5);
    await campus.addEdge('Dormitory №4', '22.365291, 113.542851', 1, 1);
    await campus.addEdge('Dormitory №4 Entrance 1', '22.365291, 113.542851', 1, 1);
    await campus.addEdge('22.365294, 113.542881', '22.365291, 113.542851', 2, 1);
    await campus.addEdge('22.365193, 113.542880', '22.365294, 113.542881', 10, 6);
    await campus.addEdge('22.365193, 113.542880', '22.365135, 113.542967', 6, 3);
    await campus.addEdge('Dormitory №4 Study Room', '22.365279, 113.542475', 1, 1);
    await campus.addEdge('22.365269, 113.542565', '22.365279, 113.542475', 10, 6);
    await campus.addEdge('22.365269, 113.542602', '22.365269, 113.542565', 4, 2);
    await campus.addEdge('Dormitory №4', '22.365269, 113.542602', 1, 1);
    await campus.addEdge('Dormitory №4 Entrance 2', '22.365269, 113.542602', 1, 1);
    await campus.addEdge('22.365267, 113.542608', '22.365269, 113.542602', 5, 3);

    await campus.addEdge('22.364868, 113.543517', '22.365159, 113.543665', 38, 23);

    await campus.addEdge('22.364885, 113.543130', '22.364868, 113.543517', 42, 28);
    await campus.addEdge('22.364812, 113.543123', '22.364885, 113.543130', 9, 6);
    await campus.addEdge('22.364803, 113.543146', '22.364812, 113.543123', 4, 2);
    await campus.addEdge('22.364551, 113.543359', '22.364868, 113.543517', 37, 23);
    await campus.addEdge('22.364165, 113.543167', '22.364551, 113.543359', 49, 31);
    await campus.addEdge('22.364033, 113.543103', '22.364074, 113.542986', 15, 9);
    await campus.addEdge('22.364083, 113.543131', '22.364033, 113.543103', 8, 5);
    await campus.addEdge('22.364083, 113.543131', '22.364165, 113.543167', 9, 5);
    await campus.addEdge('22.363899, 113.543034', '22.364033, 113.543103', 17, 11);
    await campus.addEdge('22.363899, 113.543034', '22.363950, 113.542760', 28, 18);
    await campus.addEdge('22.363627, 113.542896', '22.363899, 113.543034', 33, 20);
    await campus.addEdge('22.363349, 113.542742', '22.363627, 113.542896', 34, 21);
    await campus.addEdge('22.363279, 113.542709', '22.363313, 113.542619', 12, 7);
    await campus.addEdge('22.363279, 113.542709', '22.363349, 113.542742', 7, 4);
    await campus.addEdge('22.363052, 113.542588', '22.363279, 113.542709', 27, 19);
    await campus.addEdge('22.362793, 113.542437', '22.363052, 113.542588', 29, 18);
    await campus.addEdge('22.362695, 113.542380', '22.362742, 113.542245', 15, 9);
    await campus.addEdge('22.362695, 113.542380', '22.362793, 113.542437', 11, 7);
    await campus.addEdge('22.362448, 113.542248', '22.362695, 113.542380', 34, 22);
    await campus.addEdge('22.362125, 113.542068', '22.362448, 113.542248', 45, 28);
    await campus.addEdge('22.362034, 113.541974', '22.362125, 113.542068', 10, 7);
    await campus.addEdge('22.361870, 113.541908', '22.362034, 113.541974', 16, 11);
    await campus.addEdge('22.361213, 113.541541', '22.361870, 113.541908', 86, 58);
    await campus.addEdge('Underground Parking (Southeast Gate)', '22.361213, 113.541541', 15, 9);
    await campus.addEdge('22.360923, 113.541394', '22.361213, 113.541541', 36, 22);

    await campus.addEdge('22.361061, 113.541113', '22.360923, 113.541394', 34, 22);
    await campus.addEdge('Building №7', '22.361061, 113.541113', 17, 11);
    await campus.addEdge('Building №7 Entrance 1', '22.361061, 113.541113', 17, 11);
    await campus.addEdge('22.361083, 113.541074', '22.361061, 113.541113', 4, 2);
    await campus.addEdge('Building №5', '22.361083, 113.541074', 16, 10);
    await campus.addEdge('Building №5 Entrance 1', '22.361083, 113.541074', 16, 10);
    await campus.addEdge('22.361151, 113.540930', '22.361083, 113.541074', 16, 10);
    await campus.addEdge('22.361331, 113.540985', '22.361151, 113.540930', 21, 13);
    await campus.addEdge('22.361451, 113.540988', '22.361331, 113.540985', 15, 9);
    await campus.addEdge('22.361596, 113.540928', '22.361451, 113.540988', 15, 9);
    await campus.addEdge('22.361729, 113.540912', '22.361596, 113.540928', 20, 13);
    await campus.addEdge('22.361807, 113.540983', '22.361729, 113.540912', 14, 9);
    await campus.addEdge('22.361828, 113.541074', '22.361807, 113.540983', 10, 7);
    await campus.addEdge('22.361828, 113.541074', '22.361831, 113.541123', 8, 5);
    await campus.addEdge('22.361025, 113.540679', '22.361098, 113.540799', 16, 11);
    await campus.addEdge('22.361151, 113.540930', '22.361098, 113.540799', 14, 9);
    await campus.addEdge('22.361748, 113.540809', '22.361716, 113.540769', 9, 6);
    await campus.addEdge('22.361748, 113.540809', '22.361729, 113.540912', 7, 4);
    await campus.addEdge('22.361815, 113.540898', '22.362144, 113.540556', 48, 30);
    await campus.addEdge('22.361815, 113.540898', '22.361748, 113.540809', 8, 5);
    await campus.addEdge('22.361815, 113.540898', '22.361807, 113.540983', 9, 5);

    await campus.addEdge('22.360802, 113.540775', '22.361025, 113.540679', 25, 15);
    await campus.addEdge('22.360707, 113.540967', '22.360802, 113.540775', 20, 12);
    await campus.addEdge('Building №1', '22.360707, 113.540967', 12, 8);
    await campus.addEdge('Building №1 Entrance 1', '22.360707, 113.540967', 12, 8);
    await campus.addEdge('22.360670, 113.541084', '22.360707, 113.540967', 16, 10);

    await campus.addEdge('22.360313, 113.541073', '22.360923, 113.541394', 74, 47);
    await campus.addEdge('Southeast Gate', '22.360313, 113.541073', 49, 32);
    await campus.addEdge('22.360973, 113.539544', '22.360313, 113.541073', 172, 113);

    await campus.addEdge('22.361239, 113.540715', '22.361098, 113.540799', 19, 13);

    await campus.addEdge('22.362164, 113.541941', '22.362125, 113.542068', 13, 9);
    await campus.addEdge('22.362078, 113.541885', '22.362164, 113.541941', 10, 7);
    await campus.addEdge('Building №12', '22.362078, 113.541885', 1, 1);
    await campus.addEdge('Building №12 北京理工大学珠海学院绿色康氧中心', '22.362078, 113.541885', 1, 1);
    await campus.addEdge('22.362034, 113.541974', '22.362078, 113.541885', 13, 9);
    await campus.addEdge('22.361991, 113.541637', '22.361870, 113.541908', 33, 23);
    await campus.addEdge('22.362080, 113.541672', '22.361991, 113.541637', 11, 7);
    await campus.addEdge('Building №12', '22.362080, 113.541672', 4, 2);
    await campus.addEdge('Building №12 Entrance 1', '22.362080, 113.541672', 4, 2);
    await campus.addEdge('22.362132, 113.541559', '22.362080, 113.541672', 13, 8);
    await campus.addEdge('22.362056, 113.541526', '22.362132, 113.541559', 12, 8);
    await campus.addEdge('22.362056, 113.541526', '22.361991, 113.541637', 13, 8);
    await campus.addEdge('Building №11', '22.361991, 113.541637', 14, 9);
    await campus.addEdge('Building №11 Entrance 1', '22.361991, 113.541637', 14, 9);
    await campus.addEdge('22.362066, 113.541454', '22.362056, 113.541526', 7, 4);
    await campus.addEdge('22.362024, 113.541356', '22.362066, 113.541454', 11, 8);
    await campus.addEdge('22.362081, 113.541313', '22.362024, 113.541356', 7, 4);
    await campus.addEdge('22.362306, 113.541448', '22.362081, 113.541313', 32, 20);
    await campus.addEdge('22.361985, 113.541300', '22.362024, 113.541356', 7, 4);

    await campus.addEdge('22.362062, 113.541238', '22.361985, 113.541300', 10, 7);
    await campus.addEdge('22.362101, 113.541139', '22.362062, 113.541238', 16, 10);
    await campus.addEdge('22.362101, 113.541139', '22.362532, 113.541322', 47, 32);
    await campus.addEdge('22.362259, 113.540775', '22.362296, 113.540699', 11, 7);
    await campus.addEdge('22.362194, 113.540926', '22.362259, 113.540775', 15, 9);
    await campus.addEdge('Building №10', '22.362194, 113.540926', 8, 5);
    await campus.addEdge('Building №10 Entrance 2', '22.362194, 113.540926', 8, 5);
    await campus.addEdge('22.362145, 113.541033', '22.362194, 113.540926', 16, 10);
    await campus.addEdge('Building №10', '22.362145, 113.541033', 8, 5);
    await campus.addEdge('Building №10 Entrance 1', '22.362145, 113.541033', 8, 5);
    await campus.addEdge('22.362101, 113.541139', '22.362145, 113.541033', 5, 3);

    await campus.addEdge('22.361921, 113.541291', '22.361985, 113.541300', 5, 3);
    await campus.addEdge('22.361867, 113.541212', '22.361921, 113.541291', 8, 5);
    await campus.addEdge('22.361831, 113.541123', '22.361867, 113.541212', 10, 6);
    await campus.addEdge('22.361749, 113.541168', '22.361831, 113.541123', 12, 8);
    await campus.addEdge('22.361716, 113.541207', '22.361749, 113.541168', 6, 4);
    await campus.addEdge('Building №9', '22.361716, 113.541207', 6, 4);
    await campus.addEdge('Building №9 Entrance 2', '22.361716, 113.541207', 6, 4);
    await campus.addEdge('22.361753, 113.541276', '22.361716, 113.541207', 8, 5);
    await campus.addEdge('22.361762, 113.541340', '22.361753, 113.541276', 7, 4);
    await campus.addEdge('22.361836, 113.541345', '22.361762, 113.541340', 11, 7);
    await campus.addEdge('22.361836, 113.541345', '22.361921, 113.541291', 10, 6);
    await campus.addEdge('22.361678, 113.541373', '22.361762, 113.541340', 12, 7);
    await campus.addEdge('22.361656, 113.541398', '22.361678, 113.541373', 4, 3);
    await campus.addEdge('22.361637, 113.541389', '22.361656, 113.541398', 3, 2);
    await campus.addEdge('22.361637, 113.541389', '22.361716, 113.541207', 16, 10);
    await campus.addEdge('22.361641, 113.541427', '22.361656, 113.541398', 2, 1);
    await campus.addEdge('Building №9', '22.361641, 113.541427', 8, 5);
    await campus.addEdge('Building №9 Entrance 1', '22.361641, 113.541427', 8, 5);
    await campus.addEdge('22.361565, 113.541607', '22.361641, 113.541427', 22, 14);

    await campus.addEdge('22.362475, 113.542165', '22.362448, 113.542248', 8, 5);
    await campus.addEdge('22.362301, 113.541942', '22.362475, 113.542165', 32, 20);
    await campus.addEdge('22.362532, 113.541322', '22.362301, 113.541942', 66, 42);
    await campus.addEdge('22.362631, 113.541402', '22.362532, 113.541322', 16, 10);
    await campus.addEdge('22.362547, 113.541612', '22.362631, 113.541402', 26, 15);
    await campus.addEdge('22.362434, 113.541931', '22.362547, 113.541612', 34, 22);
    await campus.addEdge('22.362613, 113.541640', '22.362547, 113.541612', 7, 5);
    await campus.addEdge('22.362617, 113.541651', '22.362613, 113.541640', 1, 1);
    await campus.addEdge('22.362669, 113.541680', '22.362617, 113.541651', 5, 4);
    await campus.addEdge('22.362628, 113.541811', '22.362669, 113.541680', 18, 12);
    await campus.addEdge('22.362628, 113.541811', '22.362475, 113.542165', 35, 20);
    await campus.addEdge('22.362701, 113.541631', '22.362669, 113.541680', 4, 2);
    await campus.addEdge('22.362582, 113.541167', '22.362194, 113.540926', 49, 34);
    await campus.addEdge('22.362582, 113.541167', '22.362532, 113.541322', 19, 12);
    await campus.addEdge('22.362712, 113.541442', '22.362631, 113.541402', 13, 9);
    await campus.addEdge('22.362732, 113.541266', '22.362582, 113.541167', 22, 14);

    await campus.addEdge('22.362842, 113.542313', '22.362793, 113.542437', 15, 9);
    await campus.addEdge('Dormitory №22', '22.362842, 113.542313', 8, 5);
    await campus.addEdge('Dormitory №22 Entrance 1', '22.362842, 113.542313', 8, 5);
    await campus.addEdge('Dormitory №22', '22.362742, 113.542245', 8, 5);
    await campus.addEdge('Dormitory №22 Entrance 1', '22.362742, 113.542245', 8, 5);
    await campus.addEdge('22.362742, 113.542245', '22.362842, 113.542313', 11, 7);

    await campus.addEdge('22.363089, 113.542496', '22.363052, 113.542588', 12, 7);
    await campus.addEdge('22.363119, 113.542519', '22.363089, 113.542496', 5, 3);
    await campus.addEdge('22.363119, 113.542519', '22.363193, 113.542536', 4, 2);
    await campus.addEdge('22.363252, 113.542111', '22.363119, 113.542519', 47, 27);
    await campus.addEdge('22.363292, 113.542075', '22.363252, 113.542111', 6, 4);
    await campus.addEdge('22.363246, 113.542054', '22.363252, 113.542111', 6, 4);

    await campus.addEdge('22.363395, 113.542602', '22.363349, 113.542742', 15, 9);
    await campus.addEdge('Dormitory №21', '22.363395, 113.542602', 7, 4);
    await campus.addEdge('Dormitory №21 Entrance 4', '22.363395, 113.542602', 7, 4);
    await campus.addEdge('Dormitory №21', '22.363350, 113.542582', 7, 4);
    await campus.addEdge('Dormitory №21 Entrance 4', '22.363350, 113.542582', 7, 4);
    await campus.addEdge('22.363350, 113.542582', '22.363395, 113.542602', 7, 4);
    await campus.addEdge('22.363313, 113.542619', '22.363350, 113.542582', 5, 3);
    await campus.addEdge('22.363193, 113.542536', '22.363313, 113.542619', 19, 12);

    await campus.addEdge('22.364247, 113.542852', '22.364165, 113.543167', 34, 22);
    await campus.addEdge('22.364277, 113.542721', '22.364247, 113.542852', 16, 10);
    await campus.addEdge('22.364331, 113.542517', '22.364168, 113.542452', 18, 11);
    await campus.addEdge('22.364314, 113.542572', '22.364331, 113.542517', 5, 3);
    await campus.addEdge('22.364314, 113.542572', '22.364277, 113.542721', 15, 9);
    await campus.addEdge('22.364189, 113.542242', '22.364196, 113.542094', 14, 9);
    await campus.addEdge('22.364087, 113.542376', '22.364189, 113.542242', 14, 9);
    await campus.addEdge('22.364168, 113.542452', '22.364087, 113.542376', 11, 7);
    await campus.addEdge('22.364425, 113.542057', '22.364265, 113.542084', 15, 9);
    await campus.addEdge('22.364448, 113.541957', '22.364425, 113.542057', 11, 7);
    await campus.addEdge('22.364468, 113.541867', '22.364448, 113.541957', 9, 5);
    await campus.addEdge('22.364518, 113.541902', '22.364468, 113.541867', 6, 4);
    await campus.addEdge('22.364610, 113.541857', '22.364518, 113.541902', 10, 6);
    await campus.addEdge('22.364602, 113.541775', '22.364610, 113.541857', 8, 5);
    await campus.addEdge('Dormitory №12', '22.364602, 113.541775', 2, 1);
    await campus.addEdge('Dormitory №12 Entrance 7', '22.364602, 113.541775', 2, 1);
    await campus.addEdge('22.364608, 113.541723', '22.364602, 113.541775', 5, 3);
    await campus.addEdge('22.364499, 113.541717', '22.364608, 113.541723', 10, 6);
    await campus.addEdge('22.364473, 113.541835', '22.364499, 113.541717', 11, 7);
    await campus.addEdge('22.364473, 113.541835', '22.364430, 113.541828', 7, 5);
    await campus.addEdge('22.364473, 113.541835', '22.364468, 113.541867', 4, 2);
    await campus.addEdge('22.364618, 113.541682', '22.364608, 113.541723', 4, 2);
    await campus.addEdge('Dormitory №12', '22.364618, 113.541682', 2, 1);
    await campus.addEdge('Dormitory №12 Entrance 6', '22.364618, 113.541682', 2, 1);
    await campus.addEdge('22.364625, 113.541531', '22.364618, 113.541682', 14, 9);
    await campus.addEdge('Dormitory №12', '22.364625, 113.541531', 1, 1);
    await campus.addEdge('Dormitory №12 Entrance 5', '22.364625, 113.541531', 1, 1);
    await campus.addEdge('22.364627, 113.541483', '22.364625, 113.541531', 3, 2);
    await campus.addEdge('22.364543, 113.541479', '22.364627, 113.541483', 6, 4);
    await campus.addEdge('22.364543, 113.541479', '22.364499, 113.541717', 24, 15);
    await campus.addEdge('Dormitory №12 Study Room №2', '22.364627, 113.541483', 5, 3);
    await campus.addEdge('Dormitory №12 Study Room №1', 'Dormitory №12 Study Room №2', 3, 2);
    await campus.addEdge('22.364543, 113.541479', '22.364601, 113.541311', 17, 11);
    await campus.addEdge('22.364401, 113.542178', '22.364425, 113.542057', 14, 9);
    await campus.addEdge('22.364516, 113.542241', '22.364401, 113.542178', 18, 12);
    await campus.addEdge('22.364522, 113.542364', '22.364516, 113.542241', 10, 6);
    await campus.addEdge('22.364350, 113.542367', '22.364522, 113.542364', 22, 14);
    await campus.addEdge('22.364350, 113.542367', '22.364331, 113.542517', 16, 10);
    await campus.addEdge('22.364380, 113.542266', '22.364350, 113.542367', 11, 7);
    await campus.addEdge('22.364380, 113.542266', '22.364189, 113.542242', 21, 14);
    await campus.addEdge('22.364380, 113.542266', '22.364401, 113.542178', 10, 6);
    await campus.addEdge('Dormitory №6', '22.364522, 113.542364', 7, 4);
    await campus.addEdge('Dormitory №6 Entrance 4', '22.364522, 113.542364', 7, 4);
    await campus.addEdge('22.364602, 113.542236', '22.364516, 113.542241', 7, 4);
    await campus.addEdge('22.364622, 113.542202', '22.364602, 113.542236', 3, 2);
    await campus.addEdge('Dormitory №6 Study Room №2', '22.364622, 113.542202', 2, 1);
    await campus.addEdge('22.364627, 113.542177', '22.364622, 113.542202', 3, 2);
    await campus.addEdge('Dormitory №6 Study Room №1 Entrance 2', '22.364627, 113.542177', 2, 1);
    await campus.addEdge('22.364576, 113.541998', '22.364599, 113.542046', 6, 4);
    await campus.addEdge('22.364551, 113.541955', '22.364576, 113.541998', 5, 3);
    await campus.addEdge('22.364551, 113.541955', '22.364518, 113.541902', 6, 4);
    await campus.addEdge('22.364708, 113.542047', '22.364599, 113.542046', 14, 9);
    await campus.addEdge('22.364708, 113.542047', '22.364809, 113.542060', 5, 3);
    await campus.addEdge('22.364982, 113.542062', '22.364982, 113.542193', 14, 9);
    await campus.addEdge('22.364982, 113.542062', '22.364889, 113.542060', 11, 7);
    await campus.addEdge('22.364982, 113.542062', '22.365123, 113.542061', 17, 11);

    await campus.addEdge('22.364731, 113.542176', '22.364708, 113.542047', 13, 8);
    await campus.addEdge('Dormitory №6 Study Room №1 Entrance 1', '22.364731, 113.542176', 1, 1);
    await campus.addEdge('22.364724, 113.542202', '22.364731, 113.542176', 2, 1);
    await campus.addEdge('Dormitory №6', '22.364724, 113.542202', 1, 1);
    await campus.addEdge('Dormitory №6 Entrance 3', '22.364724, 113.542202', 1, 1);
    await campus.addEdge('22.364761, 113.542203', '22.364724, 113.542202', 3, 2);
    await campus.addEdge('22.364757, 113.542253', '22.364761, 113.542203', 4, 2);
    await campus.addEdge('22.364758, 113.542374', '22.364757, 113.542253', 12, 8);
    await campus.addEdge('Dormitory №6', '22.364758, 113.542374', 7, 4);
    await campus.addEdge('Dormitory №6 Entrance 2', '22.364758, 113.542374', 7, 4);
    await campus.addEdge('22.364778, 113.542509', '22.364758, 113.542374', 16, 10);
    await campus.addEdge('Dormitory №6', '22.364778, 113.542509', 1, 1);
    await campus.addEdge('Dormitory №6 Entrance 1', '22.364778, 113.542509', 1, 1);
    await campus.addEdge('22.364779, 113.542815', '22.364778, 113.542509', 25, 15);
    await campus.addEdge('22.364898, 113.542620', '22.364886, 113.542864', 24, 13);
    await campus.addEdge('Dormitory №5', '22.364898, 113.542620', 2, 1);
    await campus.addEdge('Dormitory №5 Entrance 4', '22.364898, 113.542620', 2, 1);
    await campus.addEdge('22.364903, 113.542535', '22.364898, 113.542620', 10, 6);
    await campus.addEdge('Dormitory №5', '22.364903, 113.542535', 1, 1);
    await campus.addEdge('Dormitory №5 Entrance 5', '22.364903, 113.542535', 1, 1);
    await campus.addEdge('22.364907, 113.542433', '22.364903, 113.542535', 13, 9);
    await campus.addEdge('Dormitory №5', '22.364907, 113.542433', 1, 1);
    await campus.addEdge('Dormitory №5 Entrance 6', '22.364907, 113.542433', 1, 1);
    await campus.addEdge('22.364908, 113.542349', '22.364907, 113.542433', 9, 6);
    await campus.addEdge('22.364908, 113.542349', '22.364757, 113.542253', 17, 11);
    await campus.addEdge('22.364938, 113.542302', '22.364908, 113.542349', 4, 2);
    await campus.addEdge('Dormitory №5 Study Room №1', '22.364938, 113.542302', 3, 2);
    await campus.addEdge('Dormitory №5 Study Room №2', 'Dormitory №5 Study Room №1', 3, 2);
    await campus.addEdge('Dormitory №5 Study Room №2', '22.364949, 113.542194', 3, 2);
    await campus.addEdge('22.364982, 113.542193', '22.364949, 113.542194', 5, 3);

    await campus.addEdge('22.364140, 113.542681', '22.364277, 113.542721', 15, 9);
    await campus.addEdge('22.364168, 113.542452', '22.364140, 113.542681', 22, 13);
    await campus.addEdge('22.364112, 113.542726', '22.364140, 113.542681', 6, 3);
    await campus.addEdge('22.363950, 113.542760', '22.364112, 113.542726', 19, 12);

    await campus.addEdge('22.363671, 113.542766', '22.363627, 113.542896', 15, 9);
    await campus.addEdge('22.363630, 113.542708', '22.363671, 113.542766', 7, 4);
    await campus.addEdge('22.363710, 113.542677', '22.363671, 113.542766', 7, 4);
    await campus.addEdge('Building T9', '22.363710, 113.542677', 4, 2);
    await campus.addEdge('Building T9 Entrance 1', '22.363710, 113.542677', 4, 2);
    await campus.addEdge('22.363767, 113.542540', '22.363710, 113.542677', 15, 9);
    await campus.addEdge('Building T9', '22.363767, 113.542540', 4, 2);
    await campus.addEdge('Building T9 Entrance 2', '22.363767, 113.542540', 4, 2);
    await campus.addEdge('22.363702, 113.542541', '22.363767, 113.542540', 4, 2);
    await campus.addEdge('22.363702, 113.542541', '22.363630, 113.542708', 18, 11);
    await campus.addEdge('22.363713, 113.542479', '22.363767, 113.542540', 4, 2);
    await campus.addEdge('22.363713, 113.542479', '22.363702, 113.542541', 4, 2);
    await campus.addEdge('22.363695, 113.542428', '22.363713, 113.542479', 7, 5);
    await campus.addEdge('Dormitory №21', '22.363695, 113.542428', 7, 4);
    await campus.addEdge('Dormitory №21 Entrance 2', '22.363695, 113.542428', 7, 4);
    await campus.addEdge('22.363674, 113.542476', '22.363695, 113.542428', 11, 6);
    await campus.addEdge('Dormitory №21', '22.363674, 113.542476', 6, 3);
    await campus.addEdge('Dormitory №21 Entrance 1', '22.363674, 113.542476', 6, 3);
    await campus.addEdge('22.363660, 113.542533', '22.363674, 113.542476', 5, 3);
    await campus.addEdge('22.363660, 113.542533', '22.363702, 113.542541', 6, 3);
    await campus.addEdge('22.363818, 113.542409', '22.363767, 113.542540', 16, 10);
    await campus.addEdge('Building T9', '22.363818, 113.542409', 4, 2);
    await campus.addEdge('Building T9 Entrance 3', '22.363818, 113.542409', 4, 2);
    await campus.addEdge('22.363837, 113.542349', '22.363818, 113.542409', 6, 4);
    await campus.addEdge('22.363848, 113.542311', '22.363837, 113.542349', 6, 4);
    await campus.addEdge('22.363863, 113.542262', '22.363848, 113.542311', 6, 4);
    await campus.addEdge('Building T9 Entrance 4', '22.363863, 113.542262', 2, 1);
    await campus.addEdge('22.363893, 113.542201', '22.363863, 113.542262', 5, 3);
    await campus.addEdge('22.364054, 113.542265', '22.363893, 113.542201', 19, 11);
    await campus.addEdge('22.363776, 113.542199', '22.363810, 113.542105', 12, 8);
    await campus.addEdge('22.363771, 113.542263', '22.363776, 113.542199', 9, 6);
    await campus.addEdge('Dormitory №21', '22.363771, 113.542263', 5, 3);
    await campus.addEdge('Dormitory №21 Entrance 3', '22.363771, 113.542263', 5, 3);
    await campus.addEdge('22.363695, 113.542428', '22.363771, 113.542263', 7, 5);
    await campus.addEdge('22.363713, 113.542479', '22.363771, 113.542263', 10, 6);
    await campus.addEdge('22.363989, 113.542106', '22.363929, 113.542107', 7, 5);
    await campus.addEdge('Canteen № 1 Female Toilet', '22.363989, 113.542106', 8, 5);
    await campus.addEdge('22.364131, 113.542097', '22.363989, 113.542106', 16, 10);
    await campus.addEdge('22.364196, 113.542094', '22.364131, 113.542097', 9, 5);
    await campus.addEdge('22.363254, 113.542023', '22.363246, 113.542054', 7, 5);
    await campus.addEdge('22.363280, 113.542048', '22.363254, 113.542023', 6, 4);
    await campus.addEdge('22.363328, 113.542061', '22.363280, 113.542048', 6, 4);
    await campus.addEdge('22.363328, 113.542061', '22.363292, 113.542075', 7, 5);
    await campus.addEdge('22.363440, 113.542087', '22.363328, 113.542061', 13, 8);
    await campus.addEdge('22.363541, 113.542090', '22.363440, 113.542087', 11, 7);
    await campus.addEdge('22.363643, 113.542090', '22.363541, 113.542090', 11, 7);
    await campus.addEdge('Dormitory №21', '22.363643, 113.542090', 20, 12);
    await campus.addEdge('Dormitory №21 Entrance 5', '22.363643, 113.542090', 20, 12);
    await campus.addEdge('22.363743, 113.542085', '22.363643, 113.542090', 14, 9);
    await campus.addEdge('22.363743, 113.542085', '22.363810, 113.542105', 2, 1);
    await campus.addEdge('Canteen № 1', '22.363743, 113.542085', 7, 4);
    await campus.addEdge('Canteen № 1 Entrance 3', '22.363743, 113.542085', 7, 4);
    await campus.addEdge('22.362797, 113.541686', '22.362701, 113.541631', 13, 8);
    await campus.addEdge('22.362760, 113.541766', '22.362797, 113.541686', 10, 6);
    await campus.addEdge('22.362801, 113.541840', '22.362760, 113.541766', 7, 4);
    await campus.addEdge('22.362913, 113.541859', '22.362801, 113.541840', 7, 4);
    await campus.addEdge('22.363016, 113.541914', '22.362913, 113.541859', 10, 6);
    await campus.addEdge('Dormitory №22', '22.363016, 113.541914', 1, 1);
    await campus.addEdge('Dormitory №22 Entrance 2', '22.363016, 113.541914', 1, 1);
    await campus.addEdge('22.363056, 113.541834', '22.363016, 113.541914', 11, 7);
    await campus.addEdge('22.362971, 113.541789', '22.363056, 113.541834', 10, 6);
    await campus.addEdge('22.362971, 113.541789', '22.362913, 113.541859', 11, 7);
    await campus.addEdge('22.362971, 113.541789', '22.362797, 113.541686', 17, 11);
    await campus.addEdge('22.362991, 113.541706', '22.362971, 113.541789', 13, 8);
    await campus.addEdge('Dormitory №23', '22.362991, 113.541706', 1, 1);
    await campus.addEdge('Dormitory №23 Entrance 1', '22.362991, 113.541706', 1, 1);
    await campus.addEdge('22.363081, 113.541738', '22.362991, 113.541706', 10, 6);
    await campus.addEdge('22.363081, 113.541738', '22.363056, 113.541834', 13, 8);
    await campus.addEdge('22.363254, 113.542023', '22.363056, 113.541834', 21, 13);
    await campus.addEdge('22.362991, 113.541143', '22.362797, 113.541686', 58, 36);
    await campus.addEdge('22.364265, 113.542084', '22.364278, 113.541943', 12, 7);
    await campus.addEdge('22.364265, 113.542084', '22.364196, 113.542094', 7, 5);
    await campus.addEdge('22.364599, 113.542046', '22.364627, 113.542177', 12, 8);
    await campus.addEdge('22.364599, 113.542046', '22.364425, 113.542057', 19, 12);

    await campus.addEdge('22.363929, 113.542107', '22.363893, 113.542201', 18, 11);
    await campus.addEdge('22.363810, 113.542105', '22.363929, 113.542107', 9, 5);

    await campus.addEdge('22.364168, 113.542842', '22.364247, 113.542852', 10, 6);
    await campus.addEdge('Electrical Swithboard (East Gate)', '22.364168, 113.542842', 4, 3);
    await campus.addEdge('Electrical Swithboard (East Gate) Entrance 2', '22.364168, 113.542842', 4, 3);
    await campus.addEdge('22.364123, 113.542990', '22.364168, 113.542842', 16, 10);
    await campus.addEdge('22.364074, 113.542986', '22.364123, 113.542990', 5, 3);
    await campus.addEdge('Electrical Swithboard (East Gate) Entrance 1', '22.364074, 113.542986', 4, 2);
    await campus.addEdge('22.364029, 113.542967', '22.364074, 113.542986', 5, 3);
    await campus.addEdge('22.364060, 113.542815', '22.364168, 113.542842', 11, 8);
    await campus.addEdge('22.364060, 113.542815', '22.364029, 113.542967', 16, 10);

    await campus.addEdge('22.364555, 113.543101', '22.364551, 113.543359', 29, 18);
    await campus.addEdge('Building T7', '22.364555, 113.543101', 12, 7);
    await campus.addEdge('Building T7 Entrance 3', '22.364555, 113.543101', 12, 7);
    await campus.addEdge('22.364485, 113.543095', '22.364555, 113.543101', 9, 6);
    await campus.addEdge('22.364499, 113.543033', '22.364485, 113.543095', 7, 4);
    await campus.addEdge('Building T8', '22.364499, 113.543033', 1, 1);
    await campus.addEdge('Building T8 Entrance 1', '22.364499, 113.543033', 1, 1);
    await campus.addEdge('Building T8', '22.364478, 113.543017', 1, 1);
    await campus.addEdge('Building T8 Entrance 1', '22.364478, 113.543017', 1, 1);
    await campus.addEdge('22.364557, 113.543015', '22.364478, 113.543017', 10, 6);
    await campus.addEdge('22.364557, 113.543015', '22.364555, 113.543101', 13, 9);
    await campus.addEdge('22.364476, 113.542833', '22.364478, 113.543017', 12, 8);
    await campus.addEdge('22.364476, 113.542807', '22.364476, 113.542833', 4, 2);
    await campus.addEdge('Building T8', '22.364476, 113.542807', 1, 1);
    await campus.addEdge('Building T8 Entrance 2', '22.364476, 113.542807', 1, 1);
    await campus.addEdge('22.364555, 113.542833', '22.364476, 113.542833', 10, 6);
    await campus.addEdge('22.364555, 113.542833', '22.364557, 113.543015', 12, 8);
    await campus.addEdge('22.364476, 113.542770', '22.364555, 113.542772', 10, 6);
    await campus.addEdge('22.364476, 113.542770', '22.364476, 113.542807', 5, 3);
    await campus.addEdge('22.364555, 113.542772', '22.364555, 113.542833', 9, 6);

    await campus.addEdge('Building T7', '22.364803, 113.543146', 1, 1);
    await campus.addEdge('Building T7 Entrance 1', '22.364803, 113.543146', 1, 1);
    await campus.addEdge('22.364885, 113.542947', '22.364885, 113.543130', 16, 10);
    await campus.addEdge('22.364812, 113.542947', '22.364885, 113.542947', 9, 6);
    await campus.addEdge('22.364812, 113.542961', '22.364812, 113.542947', 3, 2);
    await campus.addEdge('Building T7', '22.364812, 113.542961', 1, 1);
    await campus.addEdge('Building T7 Entrance 2', '22.364812, 113.542961', 1, 1);

    await campus.addEdge('22.364886, 113.542864', '22.364885, 113.542947', 9, 7);
    await campus.addEdge('22.365028, 113.542953', '22.364886, 113.542864', 19, 13);
    await campus.addEdge('BIT Hospital', '22.365028, 113.542953', 17, 10);
    await campus.addEdge('BIT Hospital Entrance 2', '22.365028, 113.542953', 17, 10);
    await campus.addEdge('22.365028, 113.542953', '22.365135, 113.542967', 13, 8);
    await campus.addEdge('BIT Hospital', '22.365163, 113.543197', 6, 4);
    await campus.addEdge('BIT Hospital Entrance 1', '22.365163, 113.543197', 6, 4);
    await campus.addEdge('22.364779, 113.542815', '22.364886, 113.542864', 12, 9);
    await campus.addEdge('22.364556, 113.542696', '22.364779, 113.542815', 28, 18);
    await campus.addEdge('22.364555, 113.542772', '22.364556, 113.542696', 7, 6);
    await campus.addEdge('22.364412, 113.542613', '22.364314, 113.542572', 10, 7);
    await campus.addEdge('China Unicom', '22.364412, 113.542613', 22, 13);
    await campus.addEdge('22.364467, 113.542649', '22.364412, 113.542613', 8, 5);
    await campus.addEdge('22.364556, 113.542696', '22.364467, 113.542649', 10, 6);
    await campus.addEdge('22.365448, 113.542935', '22.365135, 113.542967', 34, 21);
    await campus.addEdge('22.365447, 113.542876', '22.365448, 113.542935', 7, 4);
    await campus.addEdge('22.365447, 113.542876', '22.365294, 113.542881', 18, 11);
    await campus.addEdge('22.365455, 113.542834', '22.365447, 113.542876', 2, 1);
    await campus.addEdge('Dormitory №4', '22.365455, 113.542834', 3, 2);
    await campus.addEdge('Dormitory №4 Entrance 4', '22.365455, 113.542834', 3, 2);
    await campus.addEdge('22.365458, 113.542682', '22.365455, 113.542834', 11, 7);
    await campus.addEdge('22.365426, 113.542679', '22.365458, 113.542682', 4, 2);
    await campus.addEdge('Dormitory №4', '22.365426, 113.542679', 2, 1);
    await campus.addEdge('Dormitory №4 Entrance 5', '22.365426, 113.542679', 2, 1);
    await campus.addEdge('22.365458, 113.542624', '22.365458, 113.542682', 6, 4);
    await campus.addEdge('22.365454, 113.542569', '22.365458, 113.542624', 5, 3);
    await campus.addEdge('Dormitory №4', '22.365454, 113.542569', 5, 3);
    await campus.addEdge('Dormitory №4 Entrance 6', '22.365454, 113.542569', 5, 3);
    await campus.addEdge('22.365452, 113.542497', '22.365454, 113.542569', 11, 7);
    await campus.addEdge('Dormitory №4', '22.365452, 113.542497', 3, 2);
    await campus.addEdge('Dormitory №4 Entrance 7', '22.365452, 113.542497', 3, 2);
    await campus.addEdge('22.365465, 113.542443', '22.365452, 113.542497', 8, 5);
    await campus.addEdge('Dormitory №4', '22.365465, 113.542443', 3, 2);
    await campus.addEdge('Dormitory №4 Entrance 8', '22.365465, 113.542443', 3, 2);
    await campus.addEdge('22.365468, 113.542412', '22.365465, 113.542443', 3, 2);
    await campus.addEdge('22.365595, 113.542403', '22.365468, 113.542412', 18, 12);
    await campus.addEdge('22.365592, 113.542483', '22.365595, 113.542403', 7, 4);
    await campus.addEdge('22.365585, 113.542521', '22.365592, 113.542483', 4, 3);
    await campus.addEdge('22.365583, 113.542541', '22.365585, 113.542521', 3, 2);
    await campus.addEdge('Dormitory №3', '22.365583, 113.542541', 2, 1);
    await campus.addEdge('Dormitory №3 Entrance 2', '22.365583, 113.542541', 2, 1);
    await campus.addEdge('22.365573, 113.542557', '22.365583, 113.542541', 7, 5);
    await campus.addEdge('22.365573, 113.542557', '22.365458, 113.542624', 11, 7);
    await campus.addEdge('22.365593, 113.542572', '22.365573, 113.542557', 5, 3);
    await campus.addEdge('Dormitory №3', '22.365593, 113.542572', 2, 1);
    await campus.addEdge('Dormitory №3 Entrance 1', '22.365593, 113.542572', 2, 1);
    await campus.addEdge('22.365583, 113.542541', '22.365593, 113.542572', 6, 4);
    await campus.addEdge('22.365587, 113.542741', '22.365593, 113.542572', 15, 9);
    await campus.addEdge('22.365556, 113.542754', '22.365587, 113.542741', 6, 4);
    await campus.addEdge('22.365535, 113.542794', '22.365556, 113.542754', 5, 3);
    await campus.addEdge('22.365519, 113.542871', '22.365535, 113.542794', 5, 3);
    await campus.addEdge('22.365519, 113.542871', '22.365447, 113.542876', 7, 5);
    await campus.addEdge('22.365602, 113.542878', '22.365519, 113.542871', 11, 7);
    await campus.addEdge('22.365607, 113.542809', '22.365602, 113.542878', 8, 5);
    await campus.addEdge('22.365607, 113.542809', '22.365587, 113.542741', 5, 3);
    await campus.addEdge('22.365603, 113.542928', '22.365602, 113.542878', 6, 3);
    await campus.addEdge('22.365574, 113.542929', '22.365603, 113.542928', 3, 2);
    await campus.addEdge('22.365574, 113.542929', '22.365448, 113.542935', 14, 9);
    await campus.addEdge('22.365283, 113.542430', '22.365468, 113.542412', 17, 11);
    await campus.addEdge('22.365279, 113.542475', '22.365283, 113.542430', 4, 2);

    await campus.addEdge('22.365474, 113.542349', '22.365468, 113.542412', 6, 4);
    await campus.addEdge('22.365279, 113.542335', '22.365283, 113.542430', 6, 4);
    await campus.addEdge('22.365279, 113.542335', '22.365474, 113.542349', 17, 11);
    await campus.addEdge('22.365279, 113.542335', '22.365147, 113.542328', 14, 9);

    await campus.addEdge('22.364513, 113.542495', '22.364467, 113.542649', 17, 10);
    await campus.addEdge('22.364596, 113.542487', '22.364513, 113.542495', 9, 5);
    await campus.addEdge('Dormitory №6', '22.364596, 113.542487', 6, 3);
    await campus.addEdge('Dormitory №6 Study Room №3', '22.364596, 113.542487', 6, 3);
    await campus.addEdge('22.364595, 113.542592', '22.364596, 113.542487', 12, 7);
    await campus.addEdge('22.364595, 113.542592', '22.364556, 113.542696', 12, 7);

    await campus.addEdge('22.366059, 113.540309', '22.366055, 113.540191', 10, 6);
    await campus.addEdge('22.366152, 113.540317', '22.366059, 113.540309', 11, 8);
    await campus.addEdge('22.366152, 113.540317', '22.366152, 113.540214', 10, 6);
    await campus.addEdge('22.366059, 113.540371', '22.366059, 113.540309', 8, 5);
    await campus.addEdge('Dormitory №13', '22.366059, 113.540371', 8, 5);
    await campus.addEdge('Dormitory №13 Entrance 1', '22.366059, 113.540371', 8, 5);
    await campus.addEdge('22.366059, 113.540432', '22.366059, 113.540371', 7, 4);
    await campus.addEdge('Dormitory №13', '22.366059, 113.540432', 8, 5);
    await campus.addEdge('Dormitory №13 Entrance 2', '22.366059, 113.540432', 8, 5);
    await campus.addEdge('22.366059, 113.540517', '22.366059, 113.540432', 8, 5);
    await campus.addEdge('22.365931, 113.540517', '22.366059, 113.540517', 8, 5);
    await campus.addEdge('Dormitory №13', '22.366059, 113.540517', 3, 2);
    await campus.addEdge('Dormitory №13 Entrance 3', '22.366059, 113.540517', 3, 2);
    await campus.addEdge('Dormitory №13', '22.365942, 113.540584', 3, 2);
    await campus.addEdge('Dormitory №13 Entrance 3', '22.365942, 113.540584', 3, 2);
    await campus.addEdge('22.366059, 113.540584', '22.365942, 113.540584', 8, 5);
    await campus.addEdge('22.366059, 113.540584', '22.366059, 113.540517', 7, 4);
    await campus.addEdge('22.366019, 113.540628', '22.366046, 113.540668', 7, 5);
    await campus.addEdge('22.366019, 113.540628', '22.365942, 113.540584', 5, 3);
    await campus.addEdge('22.365991, 113.540661', '22.366019, 113.540628', 5, 3);
    await campus.addEdge('22.365985, 113.540716', '22.365991, 113.540661', 6, 4);
    await campus.addEdge('22.366286, 113.540421', '22.366059, 113.540584', 33, 23);
    await campus.addEdge('22.366293, 113.540316', '22.366286, 113.540421', 10, 6);
    await campus.addEdge('22.366293, 113.540316', '22.366293, 113.540217', 10, 6);
    await campus.addEdge('22.366293, 113.540316', '22.366152, 113.540317', 16, 10);
    await campus.addEdge('22.366160, 113.540388', '22.366059, 113.540309', 15, 9);
    await campus.addEdge('22.366160, 113.540388', '22.366286, 113.540421', 14, 9);
    await campus.addEdge('22.366160, 113.540388', '22.366293, 113.540316', 15, 9);
    await campus.addEdge('22.366160, 113.540388', '22.366059, 113.540584', 26, 17);
    await campus.addEdge('22.366160, 113.540388', '22.366059, 113.540432', 14, 9);

    await campus.addEdge('22.366295, 113.544191', '22.366614, 113.544190', 35, 23);
    await campus.addEdge('22.366552, 113.543881', '22.366614, 113.544190', 31, 24);

    await campus.addEdge('22.366615, 113.541121', '22.366461, 113.541121', 15, 9);
    await campus.addEdge('22.366615, 113.541121', '22.366615, 113.541608', 50, 31);
    await campus.addEdge('22.366615, 113.541121', '22.366942, 113.541121', 35, 24);
    await campus.addEdge('22.366942, 113.541368', '22.366942, 113.541121', 27, 18);
    await campus.addEdge('22.366942, 113.541368', '22.366942, 113.541539', 13, 9);
    await campus.addEdge('22.366941, 113.541713', '22.366942, 113.541539', 18, 11);
    await campus.addEdge('22.366699, 113.541399', '22.366699, 113.541704', 33, 21);
    await campus.addEdge('Car Charging Station', '22.366699, 113.541399', 2, 1);

    await campus.addEdge('Main Volleyball Courts Entrance', '22.366942, 113.541121', 4, 2);
    await campus.addEdge('Main Volleyball Courts', 'Main Volleyball Courts Entrance', 1, 1);

    await campus.addEdge('22.366480, 113.541777', '22.366680, 113.541768', 22, 15);
    await campus.addEdge('BIT Football Field Entrance 1', '22.366680, 113.541768', 17, 13);
    await campus.addEdge('BIT Football Field', 'BIT Football Field Entrance 1', 122, 77);
    await campus.addEdge('22.366680, 113.541768', '22.366699, 113.541704', 3, 1);
    await campus.addEdge('22.366941, 113.541713', '22.366699, 113.541704', 27, 18);
    await campus.addEdge('22.366941, 113.541713', '22.367074, 113.541713', 14, 9);
    await campus.addEdge('BIT Football Field Entrance 2', '22.367074, 113.541713', 18, 15);
    await campus.addEdge('BIT Football Field', 'BIT Football Field Entrance 2', 93, 59);
    await campus.addEdge('22.367246, 113.541705', '22.367074, 113.541713', 18, 13);
    await campus.addEdge('BIT Football Field Entrance 3', '22.367246, 113.541705', 18, 15);
    await campus.addEdge('BIT Football Field', 'BIT Football Field Entrance 3', 83, 53);
    await campus.addEdge('22.367246, 113.541705', '22.367334, 113.541704', 10, 6);
    await campus.addEdge('Badminton Hall Main Entrance', '22.367334, 113.541704', 10, 6);
    await campus.addEdge('Badminton Hall', 'Badminton Hall Main Entrance', 28, 18);
    await campus.addEdge('BIT Football Field Entrance 4', '22.367445, 113.541706', 18, 15);
    await campus.addEdge('BIT Football Field', 'BIT Football Field Entrance 4', 79, 50);
    await campus.addEdge('22.367445, 113.541706', '22.367334, 113.541704', 12, 8);
    await campus.addEdge('22.367445, 113.541706', '22.367602, 113.541705', 17, 12);
    await campus.addEdge('BIT Football Field Entrance 5', '22.367602, 113.541705', 18, 15);
    await campus.addEdge('BIT Football Field', 'BIT Football Field Entrance 5', 79, 50);
    await campus.addEdge('22.367602, 113.541705', '22.367809, 113.541705', 22, 14);
    await campus.addEdge('BIT Football Field Entrance 6', '22.367809, 113.541705', 18, 15);
    await campus.addEdge('22.367809, 113.541705', '22.367824, 113.541704', 5, 3);
    await campus.addEdge('22.367824, 113.541704', '22.367963, 113.541705', 12, 8);
    await campus.addEdge('BIT Football Field Entrance 7', '22.367963, 113.541705', 18, 15);
    await campus.addEdge('BIT Football Field', 'BIT Football Field Entrance 7', 91, 56);
    await campus.addEdge('22.368240, 113.541709', '22.367963, 113.541705', 30, 18);
    await campus.addEdge('22.368439, 113.542101', '22.368240, 113.541709', 45, 29);
    await campus.addEdge('BIT Football Field Entrance 8', '22.368439, 113.542101', 2, 1);
    await campus.addEdge('22.368465, 113.542153', '22.368439, 113.542101', 7, 4);
    await campus.addEdge('BIT Football Field', 'BIT Football Field Entrance 8', 112, 70);
    await campus.addEdge('22.368465, 113.542153', '22.368472, 113.543227', 112, 72);
    await campus.addEdge('22.368588, 113.543221', '22.368472, 113.543227', 13, 8);
    await campus.addEdge('22.368588, 113.543511', '22.368588, 113.543221', 30, 19);
    await campus.addEdge('22.368127, 113.543247', '22.368472, 113.543227', 35, 23);
    await campus.addEdge('BIT Football Field Entrance 9', '22.368127, 113.543247', 2, 1);
    await campus.addEdge('22.368112, 113.543358', '22.368127, 113.543247', 11, 8);
    await campus.addEdge('Public Toilet (1)', '22.368112, 113.543358', 9, 5);
    await campus.addEdge('22.368127, 113.543247', '22.367727, 113.543247', 44, 33);
    await campus.addEdge('22.367380, 113.543247', '22.367727, 113.543247', 39, 25);
    await campus.addEdge('22.367375, 113.544185', '22.368109, 113.544182', 78, 52);
    await campus.addEdge('22.368110, 113.543778', '22.368109, 113.544182', 40, 26);
    await campus.addEdge('22.368110, 113.543778', '22.368112, 113.543358', 45, 28);

    await campus.addEdge('22.367380, 113.543247', '22.367380, 113.543719', 49, 33);
    await campus.addEdge('22.367296, 113.543247', '22.367380, 113.543247', 10, 6);
    await campus.addEdge('22.367296, 113.543247', '22.366770, 113.543247', 60, 43);
    await campus.addEdge('22.366687, 113.543247', '22.366770, 113.543247', 4, 2);
    await campus.addEdge('22.366687, 113.543247', '22.366471, 113.543255', 19, 12);
    await campus.addEdge('22.366614, 113.544190', '22.367375, 113.544185', 84, 55);
    await campus.addEdge('22.367380, 113.543719', '22.367375, 113.544185', 47, 30);

    await campus.addEdge('Basketball Courts (East Gate)', '22.367727, 113.543247', 9, 5);
    await campus.addEdge('Basketball Courts (East Gate) Entrance 1', '22.367727, 113.543247', 9, 5);
    await campus.addEdge('Basketball Courts (East Gate) Entrance 2','22.367380, 113.543719', 7, 4);
    await campus.addEdge('Basketball Courts (East Gate)', '22.367380, 113.543719', 7, 4);
    await campus.addEdge('Basketball Courts (East Gate) Entrance 3','22.368110, 113.543778', 9, 6);
    await campus.addEdge('Basketball Courts (East Gate)', 'Basketball Courts (East Gate) Entrance 3', 9, 6);

    await campus.addEdge('Tennis Courts (East Gate) Entrance 1', '22.366687, 113.543247', 6, 4);
    await campus.addEdge('Tennis Courts (East Gate)', '22.366687, 113.543247', 6, 4);
    await campus.addEdge('Tennis Courts (East Gate) Entrance 2', '22.367296, 113.543247', 7, 5);
    await campus.addEdge('Tennis Courts (East Gate)', '22.367296, 113.543247', 7, 5);
    await campus.addEdge('Tennis Courts (East Gate) Entrance 3', '22.367380, 113.543719', 5, 3);
    await campus.addEdge('Tennis Courts (East Gate)', '22.367380, 113.543719', 5, 3);

    await campus.addEdge('BIT Football Field Entrance 1', '22.366878, 113.542026', 20, 12);
    await campus.addEdge('22.367002, 113.542026', '22.366878, 113.542026', 16, 10);
    await campus.addEdge('BIT Football Field Public Toilet', '22.367002, 113.542026', 6, 4);
    await campus.addEdge('BIT Football Field Entrance 2', '22.367002, 113.542026', 14, 9);
    await campus.addEdge('22.367251, 113.542026', '22.367002, 113.542026', 24, 17);
    await campus.addEdge('BIT Football Field Entrance 3', '22.367251, 113.542026', 14, 8);
    await campus.addEdge('22.367436, 113.542026', '22.367251, 113.542026', 22, 14);
    await campus.addEdge('BIT Football Field Entrance 4', '22.367436, 113.542026', 14, 8);
    await campus.addEdge('BIT Football Field Entrance 5', '22.367616, 113.542026', 14, 8);
    await campus.addEdge('22.367436, 113.542026', '22.367616, 113.542026', 17, 12);
    await campus.addEdge('BIT Football Field', 'BIT Football Field Entrance 6', 85, 53);
    await campus.addEdge('BIT Football Field Entrance 6', '22.367809, 113.542026', 14, 8);
    await campus.addEdge('22.367616, 113.542026', '22.367809, 113.542026', 22, 14);
    await campus.addEdge('BIT Football Field Entrance 7', '22.367963, 113.542026', 14, 8);
    await campus.addEdge('22.367809, 113.542026', '22.367963, 113.542026', 15, 11);
    await campus.addEdge('BIT Football Field', 'BIT Football Field Entrance 9', 85, 53);
    await campus.addEdge('BIT Football Field', 'BIT Football Field Entrance 10', 103, 64);
    await campus.addEdge('BIT Football Field Entrance 10', '22.366770, 113.543247', 2, 1);

    await campus.addEdge('22.367824, 113.541704', '22.367824, 113.541430', 23, 15);
    await campus.addEdge('Badminton Hall Entrance 2', '22.367824, 113.541430', 10, 7);
    await campus.addEdge('Badminton Hall Entrance 1', '22.366942, 113.541368', 4, 2);
    await campus.addEdge('Badminton Hall', 'Badminton Hall Entrance 1', 10, 7);

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
    await campus.addEdge('22.365768, 113.540550', '22.365748, 113.540189', 35, 23);
    await campus.addEdge('Dormitory №14 Entrance 3', '22.365768, 113.540550', 5, 3);
    await campus.addEdge('22.365768, 113.540769', '22.365768, 113.540550', 22, 14);

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
    await campus.addEdge('22.367124, 113.539418', '22.367259, 113.539561', 18, 11);
    await campus.addEdge('22.367338, 113.539699', '22.367259, 113.539561', 19, 12);
    await campus.addEdge('22.367338, 113.539699', '22.367356, 113.539701', 1, 1);
    await campus.addEdge('22.367356, 113.539815', '22.367356, 113.539701', 12, 7);
    await campus.addEdge('22.367520, 113.539692', '22.367356, 113.539701', 19, 11);
    await campus.addEdge('22.367520, 113.539692', '22.367962, 113.539688', 48, 32);
    await campus.addEdge('22.367524, 113.539776', '22.367933, 113.539776', 44, 30);
    await campus.addEdge('22.367328, 113.539831', '22.367356, 113.539815', 2, 1);
    await campus.addEdge('22.367252, 113.539977', '22.367328, 113.539831', 17, 11);
    await campus.addEdge('22.367170, 113.540034', '22.367252, 113.539977', 16, 10);
    await campus.addEdge('22.367031, 113.540073', '22.367170, 113.540034', 11, 8);
    await campus.addEdge('22.366914, 113.540056', '22.367031, 113.540073', 12, 8);
    await campus.addEdge('22.366866, 113.540101', '22.366914, 113.540056', 7, 4);
    await campus.addEdge('22.366866, 113.540101', '22.366811, 113.540051', 7, 4);
    await campus.addEdge('22.366698, 113.540276', '22.366866, 113.540101', 22, 17);
    await campus.addEdge('22.367923, 113.539840', '22.367974, 113.539849', 5, 3);
    await campus.addEdge('22.367855, 113.539844', '22.367923, 113.539840', 9, 6);
    await campus.addEdge('22.367855, 113.539844', '22.367859, 113.540332', 50, 34);
    await campus.addEdge('22.367855, 113.539844', '22.367356, 113.539815', 56, 37);
    await campus.addEdge('22.366532, 113.540583', '22.366482, 113.540577', 7, 4);
    await campus.addEdge('22.366543, 113.540450', '22.366532, 113.540583', 11, 7);
    await campus.addEdge('22.366571, 113.540408', '22.366543, 113.540450', 7, 5);
    await campus.addEdge('22.366571, 113.540408', '22.366529, 113.540353', 7, 4);
    await campus.addEdge('22.366571, 113.540408', '22.366698, 113.540276', 19, 11);

    await campus.addEdge('22.367041, 113.536939', '22.367058, 113.539414', 257, 168, false);
    await campus.addEdge('22.367058, 113.539414', '22.367041, 113.536939', 257, 159, false);
    await campus.addEdge('22.366996, 113.536782', '22.367041, 113.536939', 18, 11);

    await campus.addEdge('22.367314, 113.536762', '22.366996, 113.536782', 35, 23);
    await campus.addEdge('22.367619, 113.536753', '22.367314, 113.536762', 32, 21);
    await campus.addEdge('22.367625, 113.536632', '22.367619, 113.536753', 13, 8);
    await campus.addEdge('22.367451, 113.536495', '22.367625, 113.536632', 22, 15);
    await campus.addEdge('22.368110, 113.536632', '22.367625, 113.536632', 51, 36);
    await campus.addEdge('22.367985, 113.536762', '22.367619, 113.536753', 41, 26);
    await campus.addEdge('22.368115, 113.536838', '22.367985, 113.536762', 15, 9);
    await campus.addEdge('22.368164, 113.536878', '22.368115, 113.536838', 8, 5);
    await campus.addEdge('22.368166, 113.536749', '22.368164, 113.536878', 12, 8);
    await campus.addEdge('22.368247, 113.536808', '22.368164, 113.536878', 11, 7);
    await campus.addEdge('22.368226, 113.536755', '22.368247, 113.536808', 6, 3);
    await campus.addEdge('22.368228, 113.536665', '22.368226, 113.536755', 8, 5);
    await campus.addEdge('22.368224, 113.536457', '22.368228, 113.536665', 21, 12);
    await campus.addEdge('22.368467, 113.536535', '22.368228, 113.536665', 27, 17);
    await campus.addEdge('22.368610, 113.536389', '22.368467, 113.536535', 21, 13);
    await campus.addEdge('22.368690, 113.536253', '22.368610, 113.536389', 17, 12);
    await campus.addEdge('22.368800, 113.535959', '22.368690, 113.536253', 32, 19);
    await campus.addEdge('22.368791, 113.535773', '22.368800, 113.535959', 17, 11);
    await campus.addEdge('22.368381, 113.536315', '22.368224, 113.536457', 22, 15);
    await campus.addEdge('22.368474, 113.536154', '22.368381, 113.536315', 23, 14);
    await campus.addEdge('22.368540, 113.535981', '22.368474, 113.536154', 14, 9);
    await campus.addEdge('22.368533, 113.535773', '22.368540, 113.535981', 17, 11);
    await campus.addEdge('22.368373, 113.535773', '22.368533, 113.535773', 17, 11);
    await campus.addEdge('BIT Gymnasium', '22.368373, 113.535773', 5, 3);
    await campus.addEdge('BIT Gymnasium Main Entrance', '22.368373, 113.535773', 5, 3);
    await campus.addEdge('22.368399, 113.536013', '22.368373, 113.535773', 20, 11);
    await campus.addEdge('22.368398, 113.535608', '22.368373, 113.535773', 20, 11);
    await campus.addEdge('22.368310, 113.536828', '22.368247, 113.536808', 5, 3);
    await campus.addEdge('22.368536, 113.536705', '22.368310, 113.536828', 26, 17);
    await campus.addEdge('22.368660, 113.536589', '22.368536, 113.536705', 16, 10);
    await campus.addEdge('22.368804, 113.536386', '22.368660, 113.536589', 23, 14);
    await campus.addEdge('22.368866, 113.536267', '22.368804, 113.536386', 15, 9);
    await campus.addEdge('22.368943, 113.536050', '22.368866, 113.536267', 25, 17);
    await campus.addEdge('22.368425, 113.536036', '22.368399, 113.536013', 5, 3);
    await campus.addEdge('22.368385, 113.536118', '22.368425, 113.536036', 9, 6);
    await campus.addEdge('Gymnasium Public Toilet (1)', '22.368385, 113.536118', 1, 1);
    await campus.addEdge('22.368348, 113.536165', '22.368385, 113.536118', 9, 7);
    await campus.addEdge('22.368283, 113.536178', '22.368348, 113.536165', 6, 3);
    await campus.addEdge('22.368075, 113.536178', '22.368283, 113.536178', 22, 15);
    await campus.addEdge('BIT Gymnasium', '22.368075, 113.536178', 4, 2);
    await campus.addEdge('BIT Gymnasium Entrance 5', '22.368075, 113.536178', 4, 2);
    await campus.addEdge('22.367959, 113.536178', '22.368075, 113.536178', 11, 7);
    await campus.addEdge('BIT Gymnasium', '22.367959, 113.536178', 4, 2);
    await campus.addEdge('BIT Gymnasium Entrance 4', '22.367959, 113.536178', 4, 2);
    await campus.addEdge('22.367869, 113.536178', '22.367959, 113.536178', 9, 5);
    await campus.addEdge('BIT Gymnasium', '22.367869, 113.536178', 4, 2);
    await campus.addEdge('BIT Gymnasium Concert Hall', '22.367869, 113.536178', 4, 2);
    await campus.addEdge('22.367814, 113.536178', '22.367869, 113.536178', 2, 1);
    await campus.addEdge('BIT Gymnasium', '22.367814, 113.536178', 4, 2);
    await campus.addEdge('BIT Gymnasium Entrance 3', '22.367814, 113.536178', 4, 2);
    await campus.addEdge('22.367722, 113.536178', '22.367814, 113.536178', 10, 6);
    await campus.addEdge('BIT Gymnasium', '22.367722, 113.536178', 4, 2);
    await campus.addEdge('BIT Gymnasium Entrance 2', '22.367722, 113.536178', 4, 2);
    await campus.addEdge('22.367631, 113.536178', '22.367722, 113.536178', 11, 7);
    await campus.addEdge('BIT Gymnasium', '22.367631, 113.536178', 4, 2);
    await campus.addEdge('BIT Gymnasium Entrance 1', '22.367631, 113.536178', 4, 2);
    await campus.addEdge('22.368418, 113.535583', '22.368398, 113.535608', 5, 3);
    await campus.addEdge('22.368391, 113.535496', '22.368418, 113.535583', 9, 6);
    await campus.addEdge('Gymnasium Public Toilet (2)', '22.368391, 113.535496', 1, 1);
    await campus.addEdge('22.368625, 113.535773', '22.368391, 113.535496', 10, 6);
    await campus.addEdge('22.368625, 113.535773', '22.368791, 113.535773', 20, 15, false);
    await campus.addEdge('22.368791, 113.535773', '22.368625, 113.535773', 20, 21, false);
    await campus.addEdge('22.368977, 113.535773', '22.368791, 113.535773', 20, 16, false);
    await campus.addEdge('22.368791, 113.535773', '22.368977, 113.535773', 20, 21, false);

    await campus.addEdge('22.368977, 13.535943', '22.368977, 113.535773', 13, 8);
    await campus.addEdge('22.368977, 13.535943', '22.368943, 113.536050', 12, 7);
    await campus.addEdge('22.369119, 113.536076', '22.368943, 113.536050', 19, 11);
    await campus.addEdge('22.369119, 113.536076', '22.369243, 113.536089', 14, 9);
    await campus.addEdge('22.368977, 13.535950', '22.369119, 113.536076', 14, 9);
    await campus.addEdge('22.368977, 13.535950', '22.369243, 113.535960', 13, 8);
    await campus.addEdge('22.368977, 13.535950', '22.368977, 13.535943', 16, 10);
    await campus.addEdge('22.369120, 113.535785', '22.368977, 113.535773', 16, 10);
    await campus.addEdge('22.369120, 113.535785', '22.369243, 113.535802', 13, 8);
    await campus.addEdge('22.369120, 113.535785', '22.368977, 13.535950', 12, 7);
    await campus.addEdge('22.369120, 113.535659', '22.369236, 113.535659', 13, 8);
    await campus.addEdge('22.369120, 113.535659', '22.369120, 113.535785', 15, 9);
    await campus.addEdge('22.368977, 113.535659', '22.369120, 113.535659', 16, 10);
    await campus.addEdge('22.368977, 113.535659', '22.368977, 113.535773', 15, 9);
    await campus.addEdge('22.369000, 113.535587', '22.368977, 113.535659', 9, 5);
    await campus.addEdge('22.369020, 113.535539', '22.369000, 113.535587', 7, 4);
    await campus.addEdge('22.369236, 113.535539', '22.369236, 113.535659', 14, 9);
    await campus.addEdge('22.369236, 113.535539', '22.369020, 113.535539', 25, 16);

    await campus.addEdge('22.366795, 113.540334', '22.366698, 113.540276', 7, 4);
    await campus.addEdge('22.367335, 113.540334', '22.366795, 113.540334', 61, 44);
    await campus.addEdge('22.367859, 113.540332', '22.367335, 113.540334', 59, 37);
    await campus.addEdge('22.367885, 113.540349', '22.367859, 113.540332', 4, 2);
    await campus.addEdge('22.367993, 113.540343', '22.367885, 113.540349', 11, 8);
    await campus.addEdge('22.368016, 113.540379', '22.367993, 113.540343', 6, 4);
    await campus.addEdge('22.368040, 113.540390', '22.368016, 113.540379', 5, 3);

    await campus.addEdge('22.368077, 113.539776', '22.367933, 113.539776', 17, 11);
    await campus.addEdge('22.368165, 113.539689', '22.367962, 113.539688', 22, 14);
    await campus.addEdge('22.368165, 113.539689', '22.368200, 113.539689', 3, 2);
    await campus.addEdge('22.367962, 113.539688', '22.368006, 113.539472', 22, 14);
    await campus.addEdge('22.368077, 113.539776', '22.368103, 113.539478', 29, 16);
    await campus.addEdge('22.368200, 113.539689', '22.368194, 113.539495', 22, 14);
    await campus.addEdge('22.368228, 113.539317', '22.368194, 113.539495', 19, 11);
    await campus.addEdge('22.368103, 113.539478', '22.368139, 113.539284', 19, 11);
    await campus.addEdge('22.368006, 113.539472', '22.368038, 113.539259', 19, 11);
    await campus.addEdge('22.368139, 113.539284', '22.368169, 113.539160', 14, 8);
    await campus.addEdge('22.368038, 113.539259', '22.368082, 113.539137', 14, 8);
    await campus.addEdge('22.368256, 113.539201', '22.368228, 113.539317', 13, 8);
    await campus.addEdge('22.368256, 113.539201', '22.368315, 113.539033', 18, 11);
    await campus.addEdge('22.368233, 113.538994', '22.368169, 113.539160', 18, 11);
    await campus.addEdge('22.368150, 113.538955', '22.368082, 113.539137', 20, 12);
    await campus.addEdge('22.368083, 113.540368', '22.368040, 113.540390', 5, 3);
    await campus.addEdge('22.368034, 113.540191', '22.368083, 113.540368', 21, 14);
    await campus.addEdge('22.368001, 113.540017', '22.368034, 113.540191', 16, 11);
    await campus.addEdge('22.367994, 113.539891', '22.368001, 113.540017', 15, 9);
    await campus.addEdge('22.367974, 113.539849', '22.367994, 113.539891', 5, 3);
    await campus.addEdge('22.367969, 113.539761', '22.367974, 113.539849', 9, 6);
    await campus.addEdge('22.367969, 113.539761', '22.367962, 113.539688', 7, 4);
    await campus.addEdge('22.368092, 113.539846', '22.367974, 113.539849', 12, 7);
    await campus.addEdge('22.368163, 113.539844', '22.368092, 113.539846', 7, 5);
    await campus.addEdge('22.368191, 113.539838', '22.368163, 113.539844', 2, 1);
    await campus.addEdge('22.368191, 113.539838', '22.368200, 113.539689', 16, 10);
    await campus.addEdge('22.368077, 113.539776', '22.368092, 113.539846', 9, 5);
    await campus.addEdge('22.368115, 113.540010', '22.368092, 113.539846', 19, 11);
    await campus.addEdge('22.368144, 113.540180', '22.368115, 113.540010', 16, 10);
    await campus.addEdge('22.368196, 113.539947', '22.368191, 113.539838', 10, 6);
    await campus.addEdge('22.368200, 113.540031', '22.368196, 113.539947', 7, 4);
    await campus.addEdge('22.369202, 113.538093', '22.369251, 113.538014', 8, 5);
    await campus.addEdge('22.369330, 113.538137', '22.369343, 113.538010', 15, 9);
    await campus.addEdge('22.369314, 113.538232', '22.369343, 113.538010', 8, 5);
    await campus.addEdge('22.369241, 113.538157', '22.369251, 113.538014', 15, 9);
    await campus.addEdge('22.369236, 113.538244', '22.369241, 113.538157', 8, 5);
    await campus.addEdge('22.369314, 113.538232', '22.369236, 113.538244', 9, 6);
    await campus.addEdge('22.369343, 113.538010', '22.369241, 113.538157', 9, 6);
    await campus.addEdge('22.369071, 113.538280', '22.369236, 113.538244', 20, 13);
    await campus.addEdge('22.369045, 113.538201', '22.369241, 113.538157', 20, 13);
    await campus.addEdge('22.369030, 113.538128', '22.369202, 113.538093', 20, 13);
    await campus.addEdge('22.368929, 113.538336', '22.369071, 113.538280', 20, 13);
    await campus.addEdge('22.368899, 113.538256', '22.369045, 113.538201', 20, 13);
    await campus.addEdge('22.368875, 113.538181', '22.369030, 113.538128', 20, 13);
    await campus.addEdge('22.368792, 113.538411', '22.368929, 113.538336', 17, 11);
    await campus.addEdge('22.368751, 113.538343', '22.368899, 113.538256', 17, 11);
    await campus.addEdge('22.368717, 113.538274', '22.368875, 113.538181', 17, 11);
    await campus.addEdge('22.368666, 113.538506', '22.368929, 113.538336', 17, 11);
    await campus.addEdge('22.368615, 113.538448', '22.368751, 113.538343', 17, 11);
    await campus.addEdge('22.368575, 113.538384', '22.368717, 113.538274', 17, 11);
    await campus.addEdge('22.368355, 113.538632', '22.368575, 113.538384', 35, 23);
    await campus.addEdge('22.368407, 113.538679', '22.368615, 113.538448', 35, 23);
    await campus.addEdge('22.368469, 113.538728', '22.368666, 113.538506', 35, 23);
    await campus.addEdge('22.368284, 113.538728', '22.368355, 113.538632', 11, 7);
    await campus.addEdge('22.368284, 113.538728', '22.368262, 113.538691', 4, 2);
    await campus.addEdge('22.368315, 113.538828', '22.368407, 113.538679', 18, 12);
    await campus.addEdge('22.368384, 113.538867', '22.368469, 113.538728', 18, 12);
    await campus.addEdge('22.368247, 113.538779', '22.368284, 113.538728', 7, 5);
    await campus.addEdge('22.368247, 113.538779', '22.368150, 113.538955', 20, 13);
    await campus.addEdge('22.368315, 113.538828', '22.368233, 113.538994', 20, 13);
    await campus.addEdge('22.368384, 113.538867', '22.368315, 113.539033', 20, 13);
    await campus.addEdge('22.369449, 113.538087', '22.369425, 113.538010', 8, 5);
    await campus.addEdge('22.369441, 113.538160', '22.369343, 113.538010', 15, 9);
    await campus.addEdge('22.369438, 113.538236', '22.369314, 113.538232', 15, 9);
    await campus.addEdge('22.369635, 113.538117', '22.369449, 113.538087', 19, 12);
    await campus.addEdge('22.369615, 113.538198', '22.369441, 113.538160', 19, 12);
    await campus.addEdge('22.369598, 113.538275', '22.369438, 113.538236', 19, 12);
    await campus.addEdge('22.369800, 113.538186', '22.369635, 113.538117', 20, 13);
    await campus.addEdge('22.369769, 113.538261', '22.369615, 113.538198', 19, 12);
    await campus.addEdge('22.369744, 113.538327', '22.369598, 113.538275', 19, 12);
    await campus.addEdge('22.369915, 113.538239', '22.369800, 113.538186', 14, 9);
    await campus.addEdge('22.369872, 113.538320', '22.369769, 113.538261', 14, 9);
    await campus.addEdge('22.369839, 113.538386', '22.369744, 113.538327', 13, 8);
    await campus.addEdge('22.370067, 113.538345', '22.369915, 113.538239', 20, 13);
    await campus.addEdge('22.370015, 113.538432', '22.369872, 113.538320', 20, 12);
    await campus.addEdge('22.369975, 113.538491', '22.369839, 113.538386', 20, 12);
    await campus.addEdge('22.370206, 113.538475', '22.370067, 113.538345', 21, 13);
    await campus.addEdge('22.370144, 113.538558', '22.370015, 113.538432', 20, 12);
    await campus.addEdge('22.370093, 113.538616', '22.369975, 113.538491', 20, 12);
    await campus.addEdge('22.370300, 113.538579', '22.370206, 113.538475', 14, 9);
    await campus.addEdge('22.370218, 113.538655', '22.370144, 113.538558', 14, 9);
    await campus.addEdge('22.370155, 113.538708', '22.370093, 113.538616', 14, 9);
    await campus.addEdge('22.370337, 113.538631', '22.370300, 113.538579', 6, 3);
    await campus.addEdge('22.370249, 113.538701', '22.370218, 113.538655', 5, 3);
    await campus.addEdge('22.370191, 113.538756', '22.370155, 113.538708', 5, 3);
    await campus.addEdge('22.370367, 113.538675', '22.370337, 113.538631', 6, 4);
    await campus.addEdge('22.370278, 113.538740', '22.370249, 113.538701', 6, 4);
    await campus.addEdge('22.370221, 113.538789', '22.370191, 113.538756', 6, 4);
    await campus.addEdge('22.370451, 113.538835', '22.370367, 113.538675', 19, 12);
    await campus.addEdge('22.370356, 113.538891', '22.370278, 113.538740', 19, 12);
    await campus.addEdge('22.370288, 113.538936', '22.370221, 113.538789', 19, 12);
    await campus.addEdge('22.370520, 113.538991', '22.370451, 113.538835', 18, 11);
    await campus.addEdge('22.370419, 113.539041', '22.370356, 113.538891', 18, 11);
    await campus.addEdge('22.370345, 113.539077', '22.370288, 113.538936', 18, 11);
    await campus.addEdge('22.370577, 113.539173', '22.370520, 113.538991', 20, 12);
    await campus.addEdge('22.370480, 113.539211', '22.370419, 113.539041', 20, 12);
    await campus.addEdge('22.370403, 113.539235', '22.370345, 113.539077', 20, 12);
    await campus.addEdge('22.370616, 113.539362', '22.370577, 113.539173', 20, 12);
    await campus.addEdge('22.370512, 113.539385', '22.370480, 113.539211', 20, 12);
    await campus.addEdge('22.370440, 113.539403', '22.370403, 113.539235', 19, 12);
    await campus.addEdge('22.370644, 113.539591', '22.370616, 113.539362', 25, 16);
    await campus.addEdge('22.370557, 113.539602', '22.370512, 113.539385', 25, 15);
    await campus.addEdge('22.370466, 113.539603', '22.370440, 113.539403', 25, 15);
    await campus.addEdge('22.370625, 113.539745', '22.370644, 113.539591', 14, 9);
    await campus.addEdge('22.370559, 113.539746', '22.370557, 113.539602', 14, 9);
    await campus.addEdge('22.370465, 113.539746', '22.370466, 113.539603', 14, 9);
    await campus.addEdge('22.370625, 113.539745', '22.370559, 113.539746', 8, 5);
    await campus.addEdge('22.370465, 113.539746', '22.370559, 113.539746', 8, 5);
    await campus.addEdge('22.370301, 113.539786', '22.370350, 113.539786', 6, 4);
    await campus.addEdge('22.370470, 113.539835', '22.370350, 113.539786', 10, 8);
    await campus.addEdge('22.370465, 113.539746', '22.370470, 113.539835', 10, 6);
    await campus.addEdge('22.370558, 113.539842', '22.370559, 113.539746', 10, 6);
    await campus.addEdge('22.370626, 113.539845', '22.370625, 113.539745', 10, 6);
    await campus.addEdge('22.370606, 113.540076', '22.370626, 113.539845', 24, 15);
    await campus.addEdge('22.370519, 113.540055', '22.370558, 113.539842', 24, 15);
    await campus.addEdge('22.370441, 113.540049', '22.370470, 113.539835', 24, 15);
    await campus.addEdge('22.370567, 113.540249', '22.370606, 113.540076', 18, 11);
    await campus.addEdge('22.370483, 113.540230', '22.370519, 113.540055', 18, 11);
    await campus.addEdge('22.370408, 113.540212', '22.370441, 113.540049', 18, 11);
    await campus.addEdge('22.370342, 113.540453', '22.370408, 113.540212', 25, 15);
    await campus.addEdge('22.370411, 113.540471', '22.370483, 113.540230', 26, 16);
    await campus.addEdge('22.370489, 113.540497', '22.370567, 113.540249', 26, 16);
    await campus.addEdge('22.370240, 113.540656', '22.370342, 113.540453', 23, 14);
    await campus.addEdge('22.370207, 113.540719', '22.370240, 113.540656', 7, 5);
    await campus.addEdge('22.370268, 113.540765', '22.370411, 113.540471', 32, 19);
    await campus.addEdge('22.370325, 113.540822', '22.370489, 113.540497', 32, 20);
    await campus.addEdge('22.370139, 113.540811', '22.370207, 113.540719', 12, 8);
    await campus.addEdge('22.370195, 113.540874', '22.370268, 113.540765', 13, 8);
    await campus.addEdge('22.370250, 113.540931', '22.370325, 113.540822', 13, 8);
    await campus.addEdge('22.370022, 113.540943', '22.370139, 113.540811', 19, 11);
    await campus.addEdge('22.370070, 113.541015', '22.370195, 113.540874', 19, 11);
    await campus.addEdge('22.370101, 113.541096', '22.370250, 113.540931', 20, 12);
    await campus.addEdge('22.369865, 113.541079', '22.370022, 113.540943', 21, 14);
    await campus.addEdge('22.369904, 113.541153', '22.370070, 113.541015', 21, 14);
    await campus.addEdge('22.369938, 113.541234', '22.370101, 113.541096', 21, 14);
    await campus.addEdge('22.369708, 113.541171', '22.369865, 113.541079', 19, 11);
    await campus.addEdge('22.369735, 113.541253', '22.369904, 113.541153', 19, 12);
    await campus.addEdge('22.369740, 113.541331', '22.369938, 113.541234', 19, 12);
    await campus.addEdge('22.369547, 113.541225', '22.369708, 113.541171', 17, 11);
    await campus.addEdge('22.369549, 113.541316', '22.369735, 113.541253', 17, 11);
    await campus.addEdge('22.369558, 113.541390', '22.369740, 113.541331', 17, 11);
    await campus.addEdge('22.369446, 113.541449', '22.369558, 113.541390', 13, 8);

    await campus.addEdge('22.368200, 113.539689', '22.368349, 113.539707', 17, 13, false);
    await campus.addEdge('22.368349, 113.539707', '22.368200, 113.539689', 17, 12, false);
    await campus.addEdge('22.368347, 113.539841', '22.368349, 113.539707', 13, 9);
    await campus.addEdge('22.368298, 113.539888', '22.368347, 113.539841', 7, 5);
    await campus.addEdge('22.368298, 113.539888', '22.368196, 113.539947', 11, 7);
    await campus.addEdge('22.368347, 113.539841', '22.368191, 113.539838', 17, 12, false);
    await campus.addEdge('22.368191, 113.539838', '22.368347, 113.539841', 17, 13, false);
    await campus.addEdge('22.368457, 113.539552', '22.368349, 113.539707', 21, 13);
    await campus.addEdge('22.368537, 113.539526', '22.368457, 113.539552', 9, 6);
    await campus.addEdge('22.368689, 113.539567', '22.368537, 113.539526', 21, 12);
    await campus.addEdge('22.368782, 113.539620', '22.368689, 113.539567', 9, 6);
    await campus.addEdge('22.368834, 113.539660', '22.368782, 113.539620', 7, 4);
    await campus.addEdge('22.368817, 113.539821', '22.368834, 113.539660', 13, 8);
    await campus.addEdge('22.368635, 113.539942', '22.368817, 113.539821', 22, 15);
    await campus.addEdge('22.368551, 113.539934', '22.368635, 113.539942', 11, 7);
    await campus.addEdge('22.368514, 113.540102', '22.368551, 113.539934', 19, 12);
    await campus.addEdge('22.368464, 113.540191', '22.368514, 113.540102', 11, 8);
    await campus.addEdge('22.368333, 113.539975', '22.368464, 113.540191', 25, 17);
    await campus.addEdge('22.368333, 113.539975', '22.368298, 113.539888', 11, 7);
    await campus.addEdge('22.368474, 113.539930', '22.368551, 113.539934', 10, 6);
    await campus.addEdge('22.368407, 113.539902', '22.368474, 113.539930', 7, 4);
    await campus.addEdge('22.368407, 113.539902', '22.368347, 113.539841', 8, 5);
    await campus.addEdge('22.368870, 113.539855', '22.368817, 113.539821', 7, 4);
    await campus.addEdge('22.368921, 113.539813', '22.368870, 113.539855', 7, 4);
    await campus.addEdge('22.368928, 113.539765', '22.368921, 113.539813', 5, 3);
    await campus.addEdge('22.368922, 113.539711', '22.368928, 113.539765', 6, 3);
    await campus.addEdge('22.368891, 113.539661', '22.368922, 113.539711', 7, 4);
    await campus.addEdge('22.368891, 113.539661', '22.368834, 113.539660', 7, 4);
    await campus.addEdge('22.369252, 113.539784', '22.368928, 113.539765', 37, 24);
    await campus.addEdge('22.370048, 113.540526', '22.370240, 113.540656', 25, 16);
    await campus.addEdge('22.369906, 113.540426', '22.370048, 113.540526', 20, 14);
    await campus.addEdge('22.370027, 113.540750', '22.370139, 113.540811', 12, 8);
    await campus.addEdge('22.369947, 113.540705', '22.370027, 113.540750', 10, 6);
    await campus.addEdge('22.369888, 113.540693', '22.369947, 113.540705', 7, 4);
    await campus.addEdge('22.369829, 113.540693', '22.369888, 113.540693', 7, 4);
    await campus.addEdge('22.369796, 113.540726', '22.369829, 113.540693', 5, 3);

    await campus.addEdge('22.370985, 113.539743', '22.370625, 113.539745', 37, 23);
    await campus.addEdge('22.371035, 113.539707', '22.370985, 113.539743', 7, 4);
    await campus.addEdge('22.371072, 113.539622', '22.371035, 113.539707', 8, 5);
    await campus.addEdge('22.371860, 113.534805', '22.371448, 113.534805', 46, 28);
    await campus.addEdge('22.371860, 113.534717', '22.371860, 113.534805', 9, 6);
    await campus.addEdge('22.371876, 113.534534', '22.371860, 113.534717', 18, 12);
    await campus.addEdge('22.371873, 113.534495', '22.371876, 113.534534', 2, 1);
    await campus.addEdge('North gate Entrance 1', '22.371873, 113.534495', 15, 8);
    await campus.addEdge('22.371820, 113.534434', '22.371873, 113.534495', 7, 5);
    await campus.addEdge('22.371820, 113.534434', '22.371754, 113.534165', 7, 5);
    await campus.addEdge('22.371854, 113.534362', '22.371873, 113.534495', 14, 8);
    await campus.addEdge('22.371862, 113.534210', '22.371854, 113.534362', 14, 8);
    await campus.addEdge('22.371813, 113.534181', '22.371862, 113.534210', 6, 3);
    await campus.addEdge('22.371813, 113.534181', '22.371761, 113.534165', 8, 4);
    await campus.addEdge('22.371430, 113.537989', '22.371072, 113.539622', 175, 113);
    await campus.addEdge('22.370991, 113.537989', '22.371430, 113.537989', 49, 31);
    await campus.addEdge('22.371593, 113.537024', '22.371430, 113.537989', 100, 65);
    await campus.addEdge('22.371701, 113.536372', '22.371448, 113.536365', 26, 16);
    await campus.addEdge('22.371701, 113.536372', '22.371593, 113.537024', 68, 43);
    await campus.addEdge('22.371714, 113.536141', '22.371442, 113.536137', 32, 19);
    await campus.addEdge('22.371714, 113.536141', '22.371701, 113.536372', 25, 16);
    await campus.addEdge('22.371744, 113.535923', '22.371440, 113.535932', 35, 22);
    await campus.addEdge('22.371744, 113.535923', '22.371714, 113.536141', 21, 13);
    await campus.addEdge('22.371447, 113.535806', '22.371440, 113.535932', 13, 9);
    await campus.addEdge('22.371450, 113.535671', '22.371447, 113.535806', 13, 9);
    await campus.addEdge('22.371778, 113.535667', '22.371450, 113.535671', 39, 24);
    await campus.addEdge('22.371778, 113.535667', '22.371744, 113.535923', 25, 16);
    await campus.addEdge('22.371452, 113.535469', '22.371450, 113.535671', 21, 13);
    await campus.addEdge('22.371806, 113.535403', '22.371452, 113.535469', 42, 27);
    await campus.addEdge('22.371806, 113.535403', '22.371778, 113.535667', 26, 16);
    await campus.addEdge('22.371817, 113.535280', '22.371441, 113.535279', 43, 27);
    await campus.addEdge('22.371817, 113.535280', '22.371806, 113.535403', 15, 9);
    await campus.addEdge('22.371846, 113.535041', '22.371446, 113.535081', 44, 29);
    await campus.addEdge('22.371846, 113.535041', '22.371817, 113.535280', 22, 14);
    await campus.addEdge('22.371846, 113.535041', '22.371860, 113.534805', 27, 17);
    await campus.addEdge('22.371881, 113.534172', '22.371862, 113.534210', 8, 4);
    await campus.addEdge('22.371881, 113.534172', '22.371813, 113.534181', 9, 5, false);
    await campus.addEdge('22.371754, 113.534165', '22.371854, 113.534362', 9, 5, false);
    await campus.addEdge('22.371911, 113.534074', '22.371881, 113.534172', 10, 6);
    await campus.addEdge('22.372019, 113.534070', '22.371911, 113.534074', 11, 7);
    await campus.addEdge('22.371920, 113.533976', '22.371911, 113.534074', 8, 5);
    await campus.addEdge('22.371958, 113.532843', '22.371920, 113.533976', 116, 73);
    await campus.addEdge('22.371962, 113.532596', '22.371464, 113.532607', 57, 36);
    await campus.addEdge('22.371962, 113.532596', '22.371958, 113.532843', 27, 17);
    await campus.addEdge('22.371963, 113.532428', '22.371962, 113.532596', 16, 10);
    await campus.addEdge('22.371987, 113.531060', '22.371963, 113.532428', 142, 90);
    await campus.addEdge('22.371994, 113.530633', '22.371987, 113.531060', 42, 26);
    await campus.addEdge('22.371993, 113.530530', '22.371905, 113.530530', 8, 5);
    await campus.addEdge('22.371993, 113.530530', '22.371994, 113.530633', 15, 9);
    await campus.addEdge('22.371995, 113.530526', '22.371912, 113.530373', 10, 6);
    await campus.addEdge('22.371995, 113.530526', '22.371993, 113.530530', 14, 9);
    await campus.addEdge('22.372014, 113.529434', '22.371652, 113.529438', 38, 24);
    await campus.addEdge('22.372014, 113.529434', '22.371995, 113.530526', 96, 60);
    await campus.addEdge('22.371993, 113.528989', '22.372014, 113.529434', 42, 26);
    await campus.addEdge('22.371997, 113.528771', '22.371993, 113.528989', 28, 18);
    await campus.addEdge('22.371999, 113.528478', '22.371835, 113.528487', 16, 10);
    await campus.addEdge('22.371999, 113.528478', '22.371997, 113.528771', 26, 16);
    await campus.addEdge('22.371979, 113.528067', '22.371999, 113.528478', 44, 27);
    await campus.addEdge('22.371895, 113.526859', '22.371663, 113.526885', 25, 16);
    await campus.addEdge('22.371895, 113.526859', '22.371979, 113.528067', 125, 79);
    await campus.addEdge('22.371783, 113.525826', '22.371657, 113.525832', 16, 10);
    await campus.addEdge('22.371783, 113.525826', '22.371895, 113.526859', 106, 66);
    await campus.addEdge('22.371655, 113.525021', '22.371783, 113.525826', 84, 53);
    await campus.addEdge('22.371488, 113.523765', '22.371655, 113.525021', 131, 82);

    await campus.addEdge('22.371273, 113.522905', '22.371394, 113.522894', 11, 6);
    await campus.addEdge('Jinggong building', '22.371273, 113.522905', 4, 2);
    await campus.addEdge('Jinggong building Main Entrance', '22.371273, 113.522905', 4, 2);
    await campus.addEdge('22.371271, 113.523537', '22.371273, 113.522905', 64, 41);
    await campus.addEdge('22.371077, 113.523538', '22.371271, 113.523537', 24, 15);
    await campus.addEdge('Jinggong building', '22.371077, 113.523538', 13, 8);
    await campus.addEdge('Jinggong building Entrance 1', '22.371077, 113.523538', 13, 8);

    await campus.addEdge('22.371394, 113.522894', '22.371488, 113.523765', 88, 57);

    await campus.addEdge('22.371545, 113.525026', '22.371655, 113.525021', 16, 11);
    await campus.addEdge('22.371528, 113.525043', '22.371545, 113.525026', 4, 3);

    await campus.addEdge('22.371856, 113.528993', '22.371993, 113.528989', 16, 10);
    await campus.addEdge('Zhixing building', '22.371856, 113.528993', 10, 6);
    await campus.addEdge('Zhixing building (A) Entrance 1', '22.371856, 113.528993', 10, 6);
    await campus.addEdge('22.371855, 113.528770', '22.371856, 113.528993', 28, 19);
    await campus.addEdge('Zhixing building', '22.371855, 113.528770', 6, 4);
    await campus.addEdge('Zhixing building Main Entrance', '22.371855, 113.528770', 6, 4);
    await campus.addEdge('22.371997, 113.528771', '22.371855, 113.528770', 16, 10);
    await campus.addEdge('22.371835, 113.528487', '22.371855, 113.528770', 31, 20);
    await campus.addEdge('Zhixing building', '22.371835, 113.528487', 11, 7);
    await campus.addEdge('Zhixing building (B) Entrance 1', '22.371835, 113.528487', 11, 7);
    await campus.addEdge('22.371938, 113.528071', '22.371979, 113.528067', 7, 4);
    await campus.addEdge('22.371623, 113.528066', '22.371938, 113.528071', 34, 21);
    await campus.addEdge('22.371488, 113.528068', '22.371623, 113.528066', 15, 9);
    await campus.addEdge('22.371498, 113.528115', '22.371488, 113.528068', 5, 3);
    await campus.addEdge('22.371490, 113.528279', '22.371498, 113.528115', 16, 10);
    await campus.addEdge('22.371588, 113.528276', '22.371490, 113.528279', 13, 8);
    await campus.addEdge('Zhixing building', '22.371588, 113.528276', 4, 3);
    await campus.addEdge('Zhixing building (B) Entrance 2', '22.371588, 113.528276', 4, 3);
    await campus.addEdge('22.371469, 113.528755', '22.371490, 113.528279', 48, 30);
    await campus.addEdge('Zhixing building Back Entrance', '22.371469, 113.528755', 16, 10);
    await campus.addEdge('Zhixing building', '22.371469, 113.528755', 16, 10);
    await campus.addEdge('22.371490, 113.529152', '22.371469, 113.528755', 43, 28);
    await campus.addEdge('22.371619, 113.529143', '22.371490, 113.529152', 14, 9);
    await campus.addEdge('Zhixing building', '22.371619, 113.529143', 5, 4);
    await campus.addEdge('Zhixing building (A) Entrance 2', '22.371619, 113.529143', 5, 4);
    await campus.addEdge('22.371521, 113.529436', '22.371490, 113.529152', 27, 17);

    await campus.addEdge('22.371907, 113.527944', '22.371938, 113.528071', 13, 11);
    await campus.addEdge('22.371851, 113.527848', '22.371907, 113.527944', 10, 7);
    await campus.addEdge('22.371771, 113.527746', '22.371851, 113.527848', 11, 10);
    await campus.addEdge('22.371728, 113.527389', '22.371771, 113.527746', 36, 22);
    await campus.addEdge('Qiushi building', '22.371728, 113.527389', 1, 1);
    await campus.addEdge('Qiushi building (A) Entrance 1', '22.371728, 113.527389', 1, 1);
    await campus.addEdge('22.371663, 113.526885', '22.371728, 113.527389', 56, 35);
    await campus.addEdge('22.371589, 113.526894', '22.371663, 113.526885', 10, 6);
    await campus.addEdge('Qiushi building', '22.371589, 113.526894', 16, 10);
    await campus.addEdge('Qiushi building (A) Entrance 2', '22.371589, 113.526894', 16, 10);
    await campus.addEdge('Qiushi building', '22.371589, 113.526894', 16, 10);
    await campus.addEdge('Qiushi building (C) Entrance 2', '22.371589, 113.526894', 16, 10);
    await campus.addEdge('22.371343, 113.526909', '22.371589, 113.526894', 25, 15);
    await campus.addEdge('22.371397, 113.527454', '22.371343, 113.526909', 56, 35);
    await campus.addEdge('Qiushi building', '22.371397, 113.527454', 12, 7, false);
    await campus.addEdge('Qiushi building (A) Entrance 3', '22.371397, 113.527454', 12, 7, false);
    await campus.addEdge('22.371397, 113.527454', 'Qiushi building', 12, 9, false);
    await campus.addEdge('22.371397, 113.527454', 'Qiushi building (A) Entrance 3', 12, 9, false);
    await campus.addEdge('22.371435, 113.527702', '22.371397, 113.527454', 24, 15);
    await campus.addEdge('22.371435, 113.527702', '22.371488, 113.528068', 38, 24);
    await campus.addEdge('22.371294, 113.526342', '22.371343, 113.526909', 58, 36);
    await campus.addEdge('Qiushi building', '22.371294, 113.526342', 12, 7, false);
    await campus.addEdge('Qiushi building (C) Entrance 3', '22.371294, 113.526342', 12, 7, false);
    await campus.addEdge('22.371294, 113.526342', 'Qiushi building', 12, 9, false);
    await campus.addEdge('22.371294, 113.526342', 'Qiushi building (C) Entrance 3', 12, 9, false);
    await campus.addEdge('22.371274, 113.526126', '22.371294, 113.526342', 25, 16);
    await campus.addEdge('22.371259, 113.525950', '22.371274, 113.526126', 17, 11);
    await campus.addEdge('22.371279, 113.525901', '22.371259, 113.525950', 6, 3);
    await campus.addEdge('22.371310, 113.525876', '22.371279, 113.525901', 5, 4);
    await campus.addEdge('22.371657, 113.525832', '22.371310, 113.525876', 34, 20);
    await campus.addEdge('22.371657, 113.525874', '22.371657, 113.525832', 5, 3);
    await campus.addEdge('22.371654, 113.525938', '22.371657, 113.525874', 5, 3);
    await campus.addEdge('22.371592, 113.526018', '22.371654, 113.525938', 7, 5);
    await campus.addEdge('22.371612, 113.526331', '22.371592, 113.526018', 32, 20);
    await campus.addEdge('Qiushi building', '22.371612, 113.526331', 1, 1);
    await campus.addEdge('Qiushi building (C) Entrance 1', '22.371612, 113.526331', 1, 1);
    await campus.addEdge('22.371663, 113.526885', '22.371612, 113.526331', 56, 35);

    await campus.addEdge('22.371818, 113.531061', '22.371987, 113.531060', 19, 12);
    await campus.addEdge('22.371816, 113.530633', '22.371818, 113.531061', 42, 26);
    await campus.addEdge('22.371994, 113.530633', '22.371816, 113.530633', 19, 12);
    await campus.addEdge('22.371814, 113.530531', '22.371816, 113.530633', 15, 9);
    await campus.addEdge('Yiyue building', '22.371814, 113.530531', 20, 13);
    await campus.addEdge('Yiyue building (A) Entrance 1', '22.371814, 113.530531', 20, 13);
    await campus.addEdge('22.371905, 113.530530', '22.371814, 113.530531', 12, 8);
    await campus.addEdge('22.371912, 113.530373', '22.371905, 113.530530', 14, 9);
    await campus.addEdge('Yiyue building', '22.371912, 113.530373', 42, 27);
    await campus.addEdge('Yiyue building (B) Main Entrance', '22.371912, 113.530373', 42, 27);
    await campus.addEdge('22.371432, 113.531050', '22.371818, 113.531061', 40, 23);
    await campus.addEdge('22.371263, 113.530659', '22.371357, 113.530959', 34, 20);
    await campus.addEdge('22.371381, 113.531020', '22.371432, 113.531050', 7, 5);
    await campus.addEdge('22.371357, 113.530959', '22.371381, 113.531020', 7, 5);
    await campus.addEdge('22.371169, 113.530399', '22.371263, 113.530659', 28, 19);
    await campus.addEdge('22.371372, 113.530188', '22.371169, 113.530399', 32, 20);
    await campus.addEdge('Yiyue building', '22.371372, 113.530188', 1, 1);
    await campus.addEdge('Yiyue building (B) Entrance 2', '22.371372, 113.530188', 1, 1);
    await campus.addEdge('Yiyue building', '22.371372, 113.530188', 1, 1);
    await campus.addEdge('Yiyue building (A) Entrance 2', '22.371372, 113.530188', 1, 1);
    await campus.addEdge('22.371131, 113.530336', '22.371169, 113.530399', 7, 4);
    await campus.addEdge('22.370905, 113.530038', '22.371131, 113.530336', 40, 24);
    await campus.addEdge('22.370824, 113.529918', '22.370905, 113.530038', 17, 11);
    await campus.addEdge('22.370804, 113.529809', '22.370824, 113.529918', 11, 7);
    await campus.addEdge('22.370817, 113.529714', '22.370804, 113.529809', 11, 7);
    await campus.addEdge('22.370972, 113.529450', '22.370817, 113.529714', 31, 19);
    await campus.addEdge('22.371075, 113.529448', '22.370972, 113.529450', 16, 10);
    await campus.addEdge('22.371521, 113.529436', '22.371075, 113.529448', 52, 33);
    await campus.addEdge('22.371652, 113.529438', '22.371521, 113.529436', 14, 8);

    await campus.addEdge('22.370370, 113.530044', '22.370824, 113.529918', 51, 33);

    await campus.addEdge('22.371468, 113.532869', '22.371958, 113.532843', 57, 36);
    await campus.addEdge('22.371458, 113.532712', '22.371468, 113.532869', 16, 10);
    await campus.addEdge('Tianyou building', '22.371458, 113.532712', 20, 12);
    await campus.addEdge('Tianyou building (B) Main Entrance', '22.371458, 113.532712', 20, 12);
    await campus.addEdge('22.371464, 113.532607', '22.371458, 113.532712', 11, 7);
    await campus.addEdge('22.371437, 113.533450', '22.371468, 113.532869', 59, 38);
    await campus.addEdge('22.371309, 113.533444', '22.371437, 113.533450', 12, 8);
    await campus.addEdge('22.371062, 113.533440', '22.371309, 113.533444', 25, 16);
    await campus.addEdge('Tianyou building (B) Female Toilet (1)', '22.371062, 113.533440', 1, 1);
    await campus.addEdge('22.371023, 113.533440', '22.371062, 113.533440', 5, 3);
    await campus.addEdge('Tianyou building (B) Male Toilet (1)', '22.371023, 113.533440', 1, 1);
    await campus.addEdge('22.370672, 113.533436', '22.371023, 113.533440', 40, 25);
    await campus.addEdge('22.370672, 113.533436', '22.370666, 113.533860', 41, 27);
    await campus.addEdge('22.370980, 113.533851', '22.370666, 113.533860', 36, 22);
    await campus.addEdge('22.371028, 113.533827', '22.370980, 113.533851', 7, 4);
    await campus.addEdge('22.371044, 113.533674', '22.371028, 113.533827', 17, 11);
    await campus.addEdge('22.371301, 113.533653', '22.371309, 113.533444', 23, 15);
    await campus.addEdge('Tianyou building (A) Smart Energy Laboratory', '22.371301, 113.533653', 5, 3);
    await campus.addEdge('22.371297, 113.533911', '22.371301, 113.533653', 24, 15);
    await campus.addEdge('22.371440, 113.532014', '22.371464, 113.532607', 62, 39);
    await campus.addEdge('22.371338, 113.531999', '22.371440, 113.532014', 12, 8);
    await campus.addEdge('22.371192, 113.531999', '22.371338, 113.531999', 16, 10);
    await campus.addEdge('22.371087, 113.531999', '22.371192, 113.531999', 10, 6);
    await campus.addEdge('Tianyou building (B) Female Toilet (2)', '22.371087, 113.531999', 1, 1);
    await campus.addEdge('22.371026, 113.531996', '22.371087, 113.531999', 7, 4);
    await campus.addEdge('Tianyou building (B) Male Toilet (2)', '22.371026, 113.531996', 1, 1);
    await campus.addEdge('22.370800, 113.531998', '22.371026, 113.531996', 25, 16);
    await campus.addEdge('22.370803, 113.531835', '22.370800, 113.531998', 17, 11);
    await campus.addEdge('22.370805, 113.531584', '22.370803, 113.531835', 26, 16);
    await campus.addEdge('22.370681, 113.532024', '22.370800, 113.531998', 14, 9);
    await campus.addEdge('22.370678, 113.532578', '22.370681, 113.532024', 59, 37);
    await campus.addEdge('22.370667, 113.532727', '22.370678, 113.532578', 16, 10);
    await campus.addEdge('22.370667, 113.532879', '22.370667, 113.532727', 16, 10);
    await campus.addEdge('22.370667, 113.532879', '22.370672, 113.533436', 58, 36);
    
    await campus.addEdge('22.369916, 113.537773', '22.369469, 113.537777', 45, 28);
    await campus.addEdge('22.369913, 113.537624', '22.369916, 113.537773', 16, 10);
    await campus.addEdge('22.369930, 113.538020', '22.369916, 113.537773', 24, 15);
    await campus.addEdge('22.370439, 113.538020', '22.369930, 113.538020', 64, 40);
    await campus.addEdge('22.370439, 113.538020', '22.370991, 113.537989', 55, 35);
    await campus.addEdge('22.371024, 113.537599', '22.370991, 113.537989', 39, 25);
    await campus.addEdge('22.371024, 113.537599', '22.370994, 113.537029', 59, 37);

    await campus.addEdge('22.370391, 113.539750', '22.370465, 113.539746', 10, 8);
    await campus.addEdge('22.370350, 113.539786', '22.370391, 113.539750', 4, 3);
    await campus.addEdge('22.370381, 113.539826', '22.370350, 113.539786', 6, 4);

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
    await campus.addEdge('22.368671, 113.537453', '22.368552, 113.537531', 13, 9);
    await campus.addEdge('22.368671, 113.537453', '22.368807, 113.537357', 19, 12);
    await campus.addEdge('22.369064, 113.537156', '22.368807, 113.537357', 36, 25);
    await campus.addEdge('22.367168, 113.536939', '22.367041, 113.536939', 14, 9);
    await campus.addEdge('22.367168, 113.536939', '22.367421, 113.537124', 34, 22);

    await campus.addEdge('22.368870, 113.537456', '22.368807, 113.537357', 11, 6);
    await campus.addEdge('22.368870, 113.537456', '22.369074, 113.537435', 22, 17);
    await campus.addEdge('22.369160, 113.537320', '22.369074, 113.537435', 13, 7);
    await campus.addEdge('22.369160, 113.537320', '22.369163, 113.537216', 13, 8);
    await campus.addEdge('22.369164, 113.537132', '22.369163, 113.537216', 8, 5);
    await campus.addEdge('22.369164, 113.537132', '22.369163, 113.537073', 6, 4);
    await campus.addEdge('22.369164, 113.537132', '22.369088, 113.537183', 7, 4);
    await campus.addEdge('22.369064, 113.537156', '22.369088, 113.537183', 6, 4);
    await campus.addEdge('22.369064, 113.537156', '22.369163, 113.537073', 12, 8);
    await campus.addEdge('22.368931, 113.537369', '22.368807, 113.537357', 13, 8);
    await campus.addEdge('22.368931, 113.537369', '22.368870, 113.537456', 9, 6);
    await campus.addEdge('22.368931, 113.537369', '22.368964, 113.537360', 6, 4);

    await campus.addEdge('22.369064, 113.537156', '22.369023, 113.537001', 12, 7);
    await campus.addEdge('22.368602, 113.537311', '22.369023, 113.537001', 57, 35);
    await campus.addEdge('22.368602, 113.537311', '22.368671, 113.537453', 18, 11);

    await campus.addEdge('22.369160, 113.537320', '22.369243, 113.537312', 10, 7);
    await campus.addEdge('22.369163, 113.537073', '22.369229, 113.537041', 10, 7);
    await campus.addEdge('22.369273, 113.537032', '22.369229, 113.537041', 5, 3);
    await campus.addEdge('22.369273, 113.537032', '22.369327, 113.537032', 6, 4);
    await campus.addEdge('22.369387, 113.537032', '22.369327, 113.537032', 6, 4);
    await campus.addEdge('22.369387, 113.537032', '22.369421, 113.537032', 4, 2);
    await campus.addEdge('22.369439, 113.536948', '22.369421, 113.537032', 10, 6);
    await campus.addEdge('22.369439, 113.536948', '22.369447, 113.536861', 7, 5);
    await campus.addEdge('22.369229, 113.537041', '22.369243, 113.536665', 39, 26);
    await campus.addEdge('22.369327, 113.536665', '22.369243, 113.536665', 9, 5);
    await campus.addEdge('22.369327, 113.536665', '22.369327, 113.537032', 39, 26);
    await campus.addEdge('22.369243, 113.536089', '22.369243, 113.536665', 59, 40);
    await campus.addEdge('22.369243, 113.536089', '22.369243, 113.535960', 14, 8);
    await campus.addEdge('22.369327, 113.535960', '22.369243, 113.535960', 10, 6);
    await campus.addEdge('22.369327, 113.535960', '22.369327, 113.536665', 73, 47);
    await campus.addEdge('22.369447, 113.535960', '22.369447, 113.536861', 96, 60);
    await campus.addEdge('22.369447, 113.535960', '22.369327, 113.535960', 11, 7);
    await campus.addEdge('22.369243, 113.535802', '22.369243, 113.535960', 13, 10);
    await campus.addEdge('22.369243, 113.535802', '22.369327, 113.535802', 10, 6);
    await campus.addEdge('22.369327, 113.535960', '22.369327, 113.535802', 10, 6);
    await campus.addEdge('22.369447, 113.535802', '22.369327, 113.535802', 11, 7);
    await campus.addEdge('22.369447, 113.535802', '22.369447, 113.535960', 13, 10);
    await campus.addEdge('22.369422, 113.535646', '22.370058, 113.535657', 67, 39, false);
    await campus.addEdge('22.370058, 113.535657', '22.369422, 113.535646', 67, 47, false);
    await campus.addEdge('22.370068, 113.535808', '22.369447, 113.535802', 67, 47, false);
    await campus.addEdge('22.369447, 113.535802', '22.370068, 113.535808', 67, 39, false);
    await campus.addEdge('22.370085, 113.535989', '22.369447, 113.535960', 67, 47, false);
    await campus.addEdge('22.369447, 113.535960', '22.370085, 113.535989', 67, 39, false);
    await campus.addEdge('22.369422, 113.535646', '22.369447, 113.535802', 16, 10);
    await campus.addEdge('22.369323, 113.535660', '22.369422, 113.535646', 9, 6);
    await campus.addEdge('22.369236, 113.535659', '22.369323, 113.535660', 10, 6);
    await campus.addEdge('22.369323, 113.535660', '22.369327, 113.535802', 16, 10);
    await campus.addEdge('22.369243, 113.535802', '22.369236, 113.535659', 16, 10);
    await campus.addEdge('22.369427, 113.537094', '22.369421, 113.537032', 5, 3);
    await campus.addEdge('22.369338, 113.537090', '22.369327, 113.537032', 5, 3);
    await campus.addEdge('22.369229, 113.537041', '22.369243, 113.537312', 30, 19);
    await campus.addEdge('22.369425, 113.537778', '22.369427, 113.537094', 74, 48);
    await campus.addEdge('22.369425, 113.538010', '22.369425, 113.537778', 21, 7);
    await campus.addEdge('22.369343, 113.538010', '22.369425, 113.538010', 10, 7);
    await campus.addEdge('22.369344, 113.537950', '22.369343, 113.538010', 7, 4);
    await campus.addEdge('22.369344, 113.537950', '22.369338, 113.537090', 88, 56);
    await campus.addEdge('22.369251, 113.538014', '22.369243, 113.537312', 70, 43);
    await campus.addEdge('22.369251, 113.538014', '22.369343, 113.538010', 9, 6);
    await campus.addEdge('22.369229, 113.534840', '22.369236, 113.535539', 72, 45);
    await campus.addEdge('22.369326, 113.534840', '22.369323, 113.535660', 86, 54);
    await campus.addEdge('22.369422, 113.534840', '22.369422, 113.535646', 86, 54);
    await campus.addEdge('22.369696, 113.535165', '22.369422, 113.534840', 44, 27);


    await campus.addEdge('22.369421, 113.537032', '22.369915, 113.537037', 53, 38, false);
    await campus.addEdge('22.369915, 113.537037', '22.370060, 113.537033', 18, 12, false);
    await campus.addEdge('22.370060, 113.537033', '22.369915, 113.537037', 18, 13, false);
    await campus.addEdge('22.369915, 113.537037', '22.369421, 113.537032', 53, 40, false);
    await campus.addEdge('22.370060, 113.537033', '22.370262, 113.537032', 21, 14);
    await campus.addEdge('22.371447, 113.537022', '22.371593, 113.537024', 16, 10);
    await campus.addEdge('22.371170, 113.537025', '22.371447, 113.537022', 30, 20);
    await campus.addEdge('22.370994, 113.537029', '22.371170, 113.537025', 21, 13);
    await campus.addEdge('22.370688, 113.537029', '22.370994, 113.537029', 34, 21);
    await campus.addEdge('22.370420, 113.537029', '22.370688, 113.537029', 30, 19);
    await campus.addEdge('22.370420, 113.537029', '22.370262, 113.537032', 16, 11);
    await campus.addEdge('22.369915, 113.537037', '22.369913, 113.537624', 58, 40);

    await campus.addEdge('22.371448, 113.536365', '22.371447, 113.537022', 66, 40);
    await campus.addEdge('22.371450, 113.536185', '22.371448, 113.536365', 22, 14);
    await campus.addEdge('22.371442, 113.536137', '22.371450, 113.536185', 7, 4);
    await campus.addEdge('22.371440, 113.535932', '22.371442, 113.536137', 22, 14);
    await campus.addEdge('22.371450, 113.535342', '22.371452, 113.535469', 14, 9);
    await campus.addEdge('22.371218, 113.535347', '22.371450, 113.535342', 26, 17);
    await campus.addEdge('22.371441, 113.535279', '22.371450, 113.535342', 5, 3);
    await campus.addEdge('22.371446, 113.535081', '22.371441, 113.535279', 22, 14);
    await campus.addEdge('22.371448, 113.534805', '22.371446, 113.535081', 28, 18);

    await campus.addEdge('22.370060, 113.537033', '22.370068, 113.536107', 90, 65);
    await campus.addEdge('22.370085, 113.535989', '22.370068, 113.536107', 11, 8);
    await campus.addEdge('22.370085, 113.535989', '22.370212, 113.535974', 17, 11);
    await campus.addEdge('22.370085, 113.535989', '22.370068, 113.535808', 19, 12);
    await campus.addEdge('22.370065, 113.535630', '22.370195, 113.535567', 18, 11);
    await campus.addEdge('22.370058, 113.535657', '22.370065, 113.535630', 5, 3);
    await campus.addEdge('22.370058, 113.535657', '22.370068, 113.535808', 15, 9);
    await campus.addEdge('22.370059, 113.535520', '22.369696, 113.535165', 57, 36);
    await campus.addEdge('22.370059, 113.535520', '22.370065, 113.535630', 10, 6);
    await campus.addEdge('22.370056, 113.534770', '22.370059, 113.535520', 76, 50);
    await campus.addEdge('22.369898, 113.534886', '22.370056, 113.534770', 20, 13);
    await campus.addEdge('22.369898, 113.534886', '22.369696, 113.535165', 38, 24);
    await campus.addEdge('22.370107, 113.534657', '22.370056, 113.534770', 12, 7);
    await campus.addEdge('22.370131, 113.534637', '22.370107, 113.534657', 6, 4);
    await campus.addEdge('22.370245, 113.534635', '22.370131, 113.534637', 14, 9);
    await campus.addEdge('22.370371, 113.534637', '22.370245, 113.534635', 15, 9);
    await campus.addEdge('22.370371, 113.534486', '22.370371, 113.534637', 15, 13);
    await campus.addEdge('22.370371, 113.534637', '22.370371, 113.534486', 15, 10);
    await campus.addEdge('22.370672, 113.534637', '22.370371, 113.534637', 37, 23);
    await campus.addEdge('22.370956, 113.534637', '22.370672, 113.534637', 28, 17);
    await campus.addEdge('22.371185, 113.534645', '22.370956, 113.534637', 25, 15);
    await campus.addEdge('22.371363, 113.534641', '22.371185, 113.534645', 19, 11);
    await campus.addEdge('22.371406, 113.534658', '22.371363, 113.534641', 7, 4);
    await campus.addEdge('22.371441, 113.534751', '22.371406, 113.534658', 7, 5);
    await campus.addEdge('22.371448, 113.534805', '22.371441, 113.534751', 7, 5);

    await campus.addEdge('22.370374, 113.534412', '22.370371, 113.534486', 7, 4);
    await campus.addEdge('22.370376, 113.534294', '22.370374, 113.534412', 13, 8);
    await campus.addEdge('22.370376, 113.534165', '22.370376, 113.534294', 13, 8);
    await campus.addEdge('22.370376, 113.534165', '22.369805, 113.534165', 63, 41, false);
    await campus.addEdge('22.369805, 113.534418', '22.370374, 113.534412', 63, 41, false);
    await campus.addEdge('22.369805, 113.534165', '22.369704, 113.534165', 11, 7, false);
    await campus.addEdge('22.369704, 113.534165', '22.369623, 113.534000', 18, 11, false);
    await campus.addEdge('22.369623, 113.534000', '22.369531, 113.533920', 13, 8, false);
    await campus.addEdge('22.369531, 113.533920', '22.369432, 113.533876', 12, 7, false);
    await campus.addEdge('22.369432, 113.533876', '22.369320, 113.533859', 12, 8, false);
    await campus.addEdge('22.369320, 113.533859', '22.369231, 113.533869', 12, 8, false);
    await campus.addEdge('22.369231, 113.533869', '22.369094, 113.533931', 15, 9, false);
    await campus.addEdge('22.369094, 113.533931', '22.369023, 113.534002', 11, 7, false);
    await campus.addEdge('22.369023, 113.534002', '22.368959, 113.534106', 13, 8, false);
    await campus.addEdge('22.368959, 113.534106', '22.368916, 113.534273', 18, 11, false);
    await campus.addEdge('22.368916, 113.534273', '22.368933, 113.534408', 14, 8, false);
    await campus.addEdge('22.368933, 113.534408', '22.368990, 113.534538', 15, 9, false);
    await campus.addEdge('22.368990, 113.534538', '22.369067, 113.534629', 13, 8, false);
    await campus.addEdge('22.369067, 113.534629', '22.369165, 113.534691', 12, 7, false);
    await campus.addEdge('22.369165, 113.534691', '22.369229, 113.534714', 10, 6, false);
    await campus.addEdge('22.369229, 113.534840', '22.369229, 113.534714', 12, 8);
    await campus.addEdge('22.369229, 113.534714', '22.369326, 113.534719', 11, 6, false);
    await campus.addEdge('22.369326, 113.534840', '22.369326, 113.534719', 11, 7);
    await campus.addEdge('22.369326, 113.534719', '22.369395, 113.534720', 9, 5, false);
    await campus.addEdge('22.369422, 113.534840', '22.369395, 113.534720', 12, 8);
    await campus.addEdge('22.369395, 113.534720', '22.369505, 113.534678', 13, 8, false);
    await campus.addEdge('22.369505, 113.534678', '22.369604, 113.534602', 12, 7, false);
    await campus.addEdge('22.369604, 113.534602', '22.369674, 113.534510', 12, 8, false);
    await campus.addEdge('22.369674, 113.534510', '22.369712, 113.534411', 12, 8, false);
    await campus.addEdge('22.369712, 113.534411', '22.369724, 113.534287', 11, 7, false);
    await campus.addEdge('22.369724, 113.534287', '22.369704, 113.534165', 15, 9, false);
    await campus.addEdge('22.369712, 113.534411', '22.369805, 113.534418', 11, 7, false);
    await campus.addEdge('22.370668, 113.534165', '22.370376, 113.534165', 32, 21, false);
    await campus.addEdge('22.370957, 113.534473', '22.370956, 113.534637', 17, 11);
    await campus.addEdge('22.370950, 113.534419', '22.370957, 113.534473', 7, 4);
    await campus.addEdge('22.370374, 113.534412', '22.370950, 113.534419', 63, 43, false);
    await campus.addEdge('22.370666, 113.533860', '22.370668, 113.534165', 31, 19);
    await campus.addEdge('22.371761, 113.534165', '22.370668, 113.534165', 121, 77, false);
    await campus.addEdge('22.371754, 113.534165', '22.371761, 113.534165', 25, 16);
    await campus.addEdge('22.371754, 113.534165', '22.370950, 113.534419', 88, 54, false);

    await campus.addEdge('22.369661, 113.536647', '22.369447, 113.536861', 32, 20);
    await campus.addEdge('22.369661, 113.536647', '22.369845, 113.536340', 38, 25);
    await campus.addEdge('22.369944, 113.536199', '22.370068, 113.536107', 15, 11);
    await campus.addEdge('22.369944, 113.536199', '22.369845, 113.536340', 19, 12);

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
    await campus.addEdge('22.363061, 113.539522', '22.363235, 113.539528', 20, 12);
    await campus.addEdge('22.363061, 113.539522', '22.362881, 113.539519', 18, 11);
    await campus.addEdge('Dormitory №31', '22.362881, 113.539519', 9, 7);
    await campus.addEdge('Dormitory №31 Entrance 1', '22.362881, 113.539519', 9, 7);
    await campus.addEdge('22.362831, 113.539519', '22.362881, 113.539519', 9, 7);
    await campus.addEdge('Dormitory №29', '22.362831, 113.539519', 8, 7);
    await campus.addEdge('Dormitory №29 Entrance 1', '22.362831, 113.539519', 8, 7);
    await campus.addEdge('22.362574, 113.539520', '22.362831, 113.539519', 30, 18);
    await campus.addEdge('22.362574, 113.539520', '22.362462, 113.539519', 10, 7);
    await campus.addEdge('22.362352, 113.539520', '22.362462, 113.539519', 11, 6);
    await campus.addEdge('Dormitory №32', '22.362352, 113.539520', 9, 7);
    await campus.addEdge('Dormitory №32 Entrance 1', '22.362352, 113.539520', 9, 7);
    await campus.addEdge('22.362318, 113.539520', '22.362352, 113.539520', 7, 5);
    await campus.addEdge('22.362318, 113.539520', '22.362243, 113.539519', 8, 6);
    await campus.addEdge('22.362255, 113.539586', '22.362243, 113.539519', 8, 6);
    await campus.addEdge('22.362076, 113.539520', '22.362243, 113.539519', 14, 8);
    await campus.addEdge('Dormitory №27', '22.363943, 113.539571', 18, 12);
    await campus.addEdge('Dormitory №27 Entrance 1', '22.363943, 113.539571', 18, 12);
    await campus.addEdge('Dormitory №28', '22.363471, 113.539533', 14, 9);
    await campus.addEdge('Dormitory №28 Entrance 1', '22.363471, 113.539533', 14, 9);
    await campus.addEdge('22.362076, 113.539520', '22.361990, 113.539519', 12, 7);
    await campus.addEdge('22.361851, 113.539520', '22.361990, 113.539519', 14, 10);
    await campus.addEdge('22.361851, 113.539520', '22.361813, 113.539519', 2, 1);
    await campus.addEdge('Dormitory №33', '22.361813, 113.539519', 11, 8);
    await campus.addEdge('Dormitory №33 Entrance 1', '22.361813, 113.539519', 11, 8);
    await campus.addEdge('22.361772, 113.539396', '22.361766, 113.539520', 10, 7);
    await campus.addEdge('22.361813, 113.539519', '22.361766, 113.539520', 4, 3);
    await campus.addEdge('22.364287, 113.540013', '22.364246, 113.539998', 4,3);
    await campus.addEdge('22.364246, 113.539950', '22.364153, 113.539987', 10, 6);
    await campus.addEdge('22.364246, 113.539950', '22.364246, 113.539998', 2, 1);
    await campus.addEdge('22.364246, 113.540332', '22.364246, 113.539998', 34, 21);
    await campus.addEdge('Dormitory №27', '22.364153, 113.539987', 7, 5);
    await campus.addEdge('Dormitory №27 Entrance 2', '22.364153, 113.539987', 7, 5);
    await campus.addEdge('Dormitory №27', '22.364168, 113.539904', 7, 5);
    await campus.addEdge('Dormitory №27 Entrance 2', '22.364168, 113.539904', 7, 5);
    await campus.addEdge('22.364246, 113.539950', '22.364244, 113.539683', 28, 17);
    await campus.addEdge('Dormitory №33', '22.361819, 113.538679', 10, 7);
    await campus.addEdge('Dormitory №33 Entrance 2', '22.361819, 113.538679', 10, 7);
    await campus.addEdge('22.361819, 113.538636', '22.361932, 113.538541', 15, 9);
    await campus.addEdge('22.361095, 113.539544', '22.360973, 113.539544', 16, 10);
    await campus.addEdge('22.361103, 113.539424', '22.361095, 113.539544', 11, 7);
    await campus.addEdge('22.361360, 113.539554', '22.361095, 113.539544', 28, 18);
    await campus.addEdge('22.361542, 113.539529', '22.361766, 113.539520', 28, 18);
    await campus.addEdge('22.361360, 113.539554', '22.361542, 113.539529', 22, 14);

    await campus.addEdge('22.364946, 113.539814', '22.364758, 113.539812', 19, 12);
    await campus.addEdge('22.364758, 113.539666', '22.364758, 113.539812', 12, 9);
    await campus.addEdge('22.364758, 113.539666', '22.364765, 113.539528', 9, 6);
    await campus.addEdge('22.364758, 113.539666', '22.364287, 113.540013', 64, 41);
    await campus.addEdge('22.364758, 113.540332', '22.364287, 113.540013', 61, 40);
    await campus.addEdge('22.364758, 113.540332', '22.364758, 113.539812', 57, 35);
    await campus.addEdge('22.364758, 113.540332', '22.364758, 113.540366', 2, 1);
    await campus.addEdge('22.364758, 113.540386', '22.364758, 113.540366', 2, 1);
    await campus.addEdge('22.365144, 113.540375', '22.364758, 113.540366', 42, 27);
    await campus.addEdge('22.364758, 113.540386', '22.364246, 113.540400', 57, 37);
    await campus.addEdge('22.364755, 113.540420', '22.364758, 113.540386', 3, 2);

    await campus.addEdge('22.364246, 113.540332', '22.364246, 113.540400', 7, 4);
    await campus.addEdge('22.364246, 113.540332', '22.364163, 113.540329', 6, 4);

    await campus.addEdge('22.364163, 113.540329', '22.364157, 113.540259', 5, 3);
    await campus.addEdge('22.364157, 113.540259', '22.364163, 113.540329', 5, 2);
    await campus.addEdge('22.364157, 113.540259', '22.364153, 113.539987', 27, 17);
    await campus.addEdge('22.364168, 113.539904', '22.364153, 113.539987', 8, 5);
    await campus.addEdge('22.364168, 113.539904', '22.364246, 113.539950', 10, 6);
    await campus.addEdge('22.364130, 113.539869', '22.364168, 113.539904', 5, 3);
    await campus.addEdge('22.364130, 113.539869', '22.364118, 113.539689', 19, 11);
    await campus.addEdge('22.364244, 113.539683', '22.364118, 113.539689', 13, 8);
    await campus.addEdge('22.364063, 113.539673', '22.364118, 113.539689', 10, 7);
    await campus.addEdge('22.364063, 113.539673', '22.364018, 113.539626', 5, 3);
    await campus.addEdge('22.363943, 113.539571', '22.364018, 113.539626', 7, 4);

    await campus.addEdge('22.361851, 113.539520', '22.361852, 113.539419', 10, 7);
    await campus.addEdge('22.361911, 113.539270', '22.361852, 113.539419', 13, 8);
    await campus.addEdge('22.361911, 113.539270', '22.361984, 113.539312', 10, 6);
    await campus.addEdge('22.361911, 113.539270', '22.361786, 113.539189', 13, 9);
    await campus.addEdge('22.361772, 113.539396', '22.361786, 113.539189', 21, 13);
    await campus.addEdge('YTO Express', '22.361786, 113.539189', 7, 5);
    await campus.addEdge('22.361786, 113.539079', '22.361786, 113.539189', 7, 5);
    await campus.addEdge('SF Express', '22.361786, 113.539079', 4, 2);
    await campus.addEdge('22.361597, 113.538906', '22.361388, 113.538919', 19, 12);
    await campus.addEdge('ZTO Express Entrance 2', '22.361597, 113.538906', 1, 1);
    await campus.addEdge('22.361609, 113.538758', '22.361597, 113.538906', 14, 9);
    await campus.addEdge('JD Express', '22.361609, 113.538758', 5, 3);
    await campus.addEdge('JD Express', '22.361776, 113.538743', 6, 4);

    await campus.addEdge('22.362076, 113.539520', '22.362093, 113.539352', 11, 7);
    await campus.addEdge('22.361984, 113.539312', '22.362093, 113.539352', 14, 10);

    await campus.addEdge('22.361990, 113.539519', '22.361970, 113.539643', 14, 8);

    await campus.addEdge('22.362318, 113.539520', '22.362301, 113.539584', 8, 6);
    await campus.addEdge('Dormitory №30', '22.362301, 113.539584', 7, 5);
    await campus.addEdge('Dormitory №30 Entrance 1', '22.362301, 113.539584', 7, 5);
    await campus.addEdge('Dormitory №30', '22.362255, 113.539586', 7, 5);
    await campus.addEdge('Dormitory №30 Entrance 1', '22.362255, 113.539586', 7, 5);
    await campus.addEdge('22.362301, 113.539584', '22.362255, 113.539586', 7, 5);

    await campus.addEdge('22.362574, 113.539520', '22.362568, 113.539598', 9, 6);
    await campus.addEdge('22.362521, 113.539657', '22.362568, 113.539598', 8, 5);
    await campus.addEdge('22.362521, 113.539657', '22.362502, 113.539606', 8, 5);
    await campus.addEdge('22.362502, 113.539606', '22.362462, 113.539519', 9, 6);

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
    await campus.addEdge('22.362379, 113.535435', '22.362405, 113.535322', 10, 6, false);
    await campus.addEdge('22.362405, 113.535322', '22.362379, 113.535435', 10, 5, false);
    await campus.addEdge('22.362338, 113.535301', '22.362405, 113.535322', 4, 2);
    await campus.addEdge('22.362412, 113.535289', '22.362405, 113.535322', 4, 2);
    await campus.addEdge('22.362412, 113.535289', '22.362356, 113.535262', 4, 2);
    await campus.addEdge('22.362412, 113.535289', '22.362467, 113.535166', 13, 8, false);
    await campus.addEdge('22.362467, 113.535166', '22.362412, 113.535289', 13, 7, false);
    await campus.addEdge('22.362467, 113.535166', '22.362864, 113.534631', 70, 50, false);
    await campus.addEdge('22.362864, 113.534631', '22.362467, 113.535166', 70, 42, false);
    await campus.addEdge('22.362864, 113.534631', '22.362933, 113.534516', 13, 8, false);
    await campus.addEdge('22.362933, 113.534516', '22.362864, 113.534631',  13, 6, false);
    await campus.addEdge('22.362933, 113.534516', '22.362972, 113.534459', 10, 7, false);
    await campus.addEdge('22.362972, 113.534459','22.362933, 113.534516', 10, 6, false);

    await campus.addEdge('22.362933, 113.534516', '22.362870, 113.534490', 7, 5);
    await campus.addEdge('22.362972, 113.534459', '22.362870, 113.534490', 12, 8);
    await campus.addEdge('22.362793, 113.534517', '22.362870, 113.534490', 7, 5);

    await campus.addEdge('22.363200, 113.538541', '22.362911, 113.538541', 28, 19);
    await campus.addEdge('22.362695, 113.538541', '22.362911, 113.538541', 24, 16);
    await campus.addEdge('Dormitory №36', '22.362695, 113.538541', 9, 5);
    await campus.addEdge('Dormitory №36 Entrance 1', '22.362695, 113.538541', 9, 5);
    await campus.addEdge('22.362467, 113.538541', '22.362695, 113.538541', 22, 16);
    await campus.addEdge('22.362467, 113.538541', '22.362387, 113.538541', 10, 6);
    await campus.addEdge('民以食为先', '22.362387, 113.538541', 9, 6);
    await campus.addEdge('Canteen № 4', '22.362387, 113.538541', 9, 6);
    await campus.addEdge('22.362239, 113.538541', '22.362387, 113.538541', 13, 8);
    await campus.addEdge('Canteen № 4 Entrance 1', '22.362239, 113.538541', 9, 6);
    await campus.addEdge('Canteen № 4', '22.362239, 113.538541', 9, 6);
    await campus.addEdge('22.362239, 113.538541', '22.362177, 113.538541', 7, 4);
    await campus.addEdge('Canteen № 4 Entrance 2', '22.362177, 113.538541', 9, 6);
    await campus.addEdge('Canteen № 4', '22.362177, 113.538541', 9, 6);
    await campus.addEdge('22.362111, 113.538541', '22.362177, 113.538541', 6, 4);
    await campus.addEdge('珍轩小卖都', '22.362111, 113.538541', 9, 6);
    await campus.addEdge('22.362082, 113.538541', '22.362111, 113.538541', 2, 1);
    await campus.addEdge('22.362082, 113.538541', '22.362012, 113.538541', 5, 3);
    await campus.addEdge('大米厨娘', '22.362012, 113.538541', 9, 6);
    await campus.addEdge('22.361932, 113.538541', '22.362012, 113.538541', 6, 4);
    await campus.addEdge('22.361932, 113.538541', '22.361932, 113.538464', 9, 6);
    await campus.addEdge('22.361955, 113.538061', '22.361923, 113.538022', 6, 4);
    await campus.addEdge('22.361614, 113.538636', '22.361358, 113.538657', 27, 17);
    await campus.addEdge('22.361647, 113.538636', '22.361614, 113.538636', 5, 3);
    await campus.addEdge('Dormitory №37', '22.361647, 113.538636', 27, 18);
    await campus.addEdge('Dormitory №37 Entrance 3', '22.361647, 113.538636', 27, 18);
    await campus.addEdge('22.361819, 113.538636', '22.361647, 113.538636', 20, 12);
    await campus.addEdge('22.361819, 113.538679', '22.361819, 113.538636', 7, 4, false);
    await campus.addEdge('22.361819, 113.538636', '22.361819, 113.538679', 7, 5, false);

    await campus.addEdge('22.362538, 113.535471', '22.362379, 113.535435', 16, 12);
    await campus.addEdge('Cafe in Fitness', '22.362538, 113.535471', 9, 5);
    await campus.addEdge('Swimming pool Entrance', '22.362538, 113.535471', 8, 5);
    await campus.addEdge('Swimming pool Entrance', 'Cafe in Fitness', 4, 2);
    await campus.addEdge('Fitness Standard', '22.362538, 113.535471', 10, 8);
    await campus.addEdge('Fitness Standard', 'Swimming pool Entrance', 5, 3);
    await campus.addEdge('22.362026, 113.536578', '22.362215, 113.536354', 31, 16);
    await campus.addEdge('22.361877, 113.536772', '22.362026, 113.536578', 25, 15);
    await campus.addEdge('22.361687, 113.537107', '22.361877, 113.536772', 40, 26);
    await campus.addEdge('22.361596, 113.537299', '22.361687, 113.537107', 23, 14);
    await campus.addEdge('22.361557, 113.537400', '22.361596, 113.537299', 12, 8);
    await campus.addEdge('22.361441, 113.537791', '22.361478, 113.537795', 3, 2);
    await campus.addEdge('22.361494, 113.537583', '22.361441, 113.537791', 20, 12);
    await campus.addEdge('22.361494, 113.537583', '22.361557, 113.537400', 21, 13);
    await campus.addEdge('22.361405, 113.537933', '22.361441, 113.537791', 15, 9);
    await campus.addEdge('22.361394, 113.537960', '22.361405, 113.537933', 3, 2);
    await campus.addEdge('22.361365, 113.538250', '22.361394, 113.537960', 30, 18);
    await campus.addEdge('Dormitory №37 Break Room', '22.361365, 113.538250', 12, 8);
    await campus.addEdge('22.361358, 113.538412', '22.361365, 113.538250', 19, 12);
    await campus.addEdge('22.361358, 113.538657', '22.361358, 113.538412', 23, 14);
    await campus.addEdge('22.361445, 113.539197', '22.361542, 113.539529', 37, 23);
    await campus.addEdge('22.361388, 113.538919', '22.361445, 113.539197', 29, 18);
    await campus.addEdge('22.361388, 113.538919', '22.361358, 113.538657', 29, 18);
    await campus.addEdge('22.361661, 113.539847', '22.361542, 113.539529', 36, 23);
    await campus.addEdge('22.361908, 113.540255', '22.361798, 113.540312', 18, 12);
    await campus.addEdge('22.361821, 113.540120', '22.361908, 113.540255', 26, 16);
    await campus.addEdge('22.361821, 113.540120', '22.361661, 113.539847', 24, 15);
    await campus.addEdge('22.362144, 113.540556', '22.361908, 113.540255', 39, 24);
    await campus.addEdge('22.362223, 113.540644', '22.362144, 113.540556', 17, 11);
    await campus.addEdge('22.362296, 113.540699', '22.362223, 113.540644', 7, 4);
    await campus.addEdge('22.362686, 113.540993', '22.362582, 113.541167', 20, 13);
    await campus.addEdge('22.362485, 113.540840', '22.362686, 113.540993', 28, 19);
    await campus.addEdge('22.362485, 113.540840', '22.362296, 113.540699', 22, 13);
    await campus.addEdge('22.362770, 113.541041', '22.362686, 113.540993', 12, 8);
    await campus.addEdge('22.362848, 113.541090', '22.362770, 113.541041', 11, 7);
    await campus.addEdge('22.362991, 113.541143', '22.362848, 113.541090', 17, 11);
    await campus.addEdge('22.363109, 113.541186', '22.362991, 113.541143', 24, 15);
    await campus.addEdge('22.363209, 113.541228', '22.363109, 113.541186', 7, 4);
    await campus.addEdge('Dormitory №23', '22.363209, 113.541228', 19, 12);
    await campus.addEdge('Dormitory №23 Entrance 2', '22.363209, 113.541228', 19, 12);
    await campus.addEdge('22.363320, 113.541266', '22.363209, 113.541228', 12, 8);
    await campus.addEdge('22.363443, 113.541275', '22.363320, 113.541266', 12, 8);
    await campus.addEdge('22.363593, 113.541302', '22.363443, 113.541275', 10, 6);
    await campus.addEdge('22.363775, 113.541335', '22.363593, 113.541302', 23, 14);
    await campus.addEdge('Canteen № 1', '22.363775, 113.541335', 20, 13);
    await campus.addEdge('Canteen № 1 Entrance 1', '22.363775, 113.541335', 20, 13);
    await campus.addEdge('22.363885, 113.541347', '22.363775, 113.541335', 15, 9);
    await campus.addEdge('22.363989, 113.541357', '22.363885, 113.541347', 12, 8);
    await campus.addEdge('22.364128, 113.541378', '22.363989, 113.541357', 14, 8);
    await campus.addEdge('22.364220, 113.541362', '22.364128, 113.541378', 8, 5);

    await campus.addEdge('22.364136, 113.541660', '22.364128, 113.541378', 28, 19);
    await campus.addEdge('22.364302, 113.541652', '22.364136, 113.541660', 17, 14);
    await campus.addEdge('22.364430, 113.541647', '22.364302, 113.541652', 15, 10);
    await campus.addEdge('22.364430, 113.541647', '22.364424, 113.541342', 33, 21);
    await campus.addEdge('22.364430, 113.541828', '22.364430, 113.541647', 17, 11);
    await campus.addEdge('22.364303, 113.541826', '22.364430, 113.541828', 13, 8);
    await campus.addEdge('22.364303, 113.541826', '22.364302, 113.541652', 17, 12);
        await campus.addEdge('22.364137, 113.541837', '22.364303, 113.541826', 18, 12);
    await campus.addEdge('22.364137, 113.541837', '22.364136, 113.541660', 17, 11);
    await campus.addEdge('Canteen № 1', '22.364137, 113.541837', 9, 6);
    await campus.addEdge('Canteen № 1 Entrance 2', '22.364137, 113.541837', 9, 6);
    await campus.addEdge('22.364137, 113.541960', '22.364137, 113.541837', 14, 9);
    await campus.addEdge('22.364137, 113.541960', '22.364131, 113.542097', 10, 6);
    await campus.addEdge('22.364278, 113.541943', '22.364137, 113.541960', 18, 12);
    await campus.addEdge('22.364278, 113.541943', '22.364303, 113.541826', 16, 10);

    await campus.addEdge('22.363354, 113.541845', '22.363443, 113.541275', 59, 37);
    await campus.addEdge('22.363354, 113.541845', '22.363254, 113.542023', 14, 9);
    await campus.addEdge('22.363354, 113.541845', '22.363440, 113.542087', 23, 14);

    await campus.addEdge('22.361574, 113.539965', '22.361661, 113.539847', 16, 10);
    await campus.addEdge('22.361537, 113.540031', '22.361574, 113.539965', 8, 5);
    await campus.addEdge('22.361358, 113.539954', '22.361537, 113.540031', 22, 14);
    await campus.addEdge('Building №4', '22.361358, 113.539954', 5, 3);
    await campus.addEdge('Building №4 Entrance 1', '22.361358, 113.539954', 5, 3);
    await campus.addEdge('22.361302, 113.539909', '22.361358, 113.539954', 7, 4);
    await campus.addEdge('22.361228, 113.539864', '22.361302, 113.539909', 9, 5);
    await campus.addEdge('22.361281, 113.539719', '22.361228, 113.539864', 20, 13);
    await campus.addEdge('Underground Parking (Delivery Office)', '22.361281, 113.539719', 7, 4);
    await campus.addEdge('22.361370, 113.539645', '22.361281, 113.539719', 7, 4);
    await campus.addEdge('22.361370, 113.539645', '22.361360, 113.539554', 9, 5);
    await campus.addEdge('22.361166, 113.539994', '22.361228, 113.539864', 18, 11);
    await campus.addEdge('Building №3', '22.361166, 113.539994', 11, 7);
    await campus.addEdge('Building №3 Entrance 1', '22.361166, 113.539994', 11, 7);
    await campus.addEdge('22.361122, 113.540108', '22.361166, 113.539994', 5, 3);
    await campus.addEdge('22.361266, 113.540068', '22.361122, 113.540108', 18, 12);
    await campus.addEdge('22.361377, 113.540091', '22.361266, 113.540068', 13, 8);
    await campus.addEdge('22.361487, 113.540148', '22.361377, 113.540091', 15, 9);
    await campus.addEdge('22.361487, 113.540148', '22.361537, 113.540031', 10, 6);
    await campus.addEdge('22.361464, 113.540200', '22.361487, 113.540148', 5, 3);
    await campus.addEdge('Building №6', '22.361464, 113.540200', 12, 9);
    await campus.addEdge('Building №6 Entrance 2', '22.361464, 113.540200', 12, 9);
    await campus.addEdge('22.361373, 113.540401', '22.361464, 113.540200', 23, 15);
    await campus.addEdge('Building №6', '22.361373, 113.540401', 12, 9);
    await campus.addEdge('Building №6 Entrance 1', '22.361373, 113.540401', 12, 9);
    await campus.addEdge('22.361318, 113.540499', '22.361373, 113.540401', 12, 8);
    await campus.addEdge('22.361310, 113.540607', '22.361318, 113.540499', 9, 5);
    await campus.addEdge('22.361259, 113.540617', '22.361310, 113.540607', 6, 4);
    await campus.addEdge('22.361259, 113.540617', '22.361239, 113.540715', 10, 6);
    await campus.addEdge('22.361349, 113.540672', '22.361310, 113.540607', 10, 6);
    await campus.addEdge('22.361409, 113.540697', '22.361349, 113.540672', 8, 5);
    await campus.addEdge('22.361021, 113.540188', '22.361122, 113.540108', 15, 9);
    await campus.addEdge('22.360995, 113.540372', '22.361021, 113.540188', 18, 11);
    await campus.addEdge('22.360934, 113.540514', '22.360995, 113.540372', 12, 7);
    await campus.addEdge('Building №2', '22.360934, 113.540514', 13, 8);
    await campus.addEdge('Building №2 Entrance 1', '22.360934, 113.540514', 13, 8);
    await campus.addEdge('22.361025, 113.540679', '22.360934, 113.540514', 20, 12);
    await campus.addEdge('22.361575, 113.540212', '22.361798, 113.540312', 28, 18);
    await campus.addEdge('Building №6', '22.361575, 113.540212', 3, 2);
    await campus.addEdge('Building №6 Entrance 2', '22.361575, 113.540212', 3, 2);

    await campus.addEdge('22.361489, 113.540642', '22.361409, 113.540697', 11, 7);
    await campus.addEdge('22.361554, 113.540628', '22.361489, 113.540642', 7, 4);
    await campus.addEdge('22.361641, 113.540662', '22.361554, 113.540628', 9, 5);
    await campus.addEdge('22.361674, 113.540708', '22.361641, 113.540662', 6, 4);
    await campus.addEdge('22.361716, 113.540769', '22.361674, 113.540708', 8, 5);
    await campus.addEdge('22.361732, 113.540465', '22.361641, 113.540662', 24, 14);
    await campus.addEdge('Building №8', '22.361732, 113.540465', 13, 9);
    await campus.addEdge('Building №8 Entrance 1', '22.361732, 113.540465', 13, 9);
    await campus.addEdge('22.361798, 113.540312', '22.361732, 113.540465', 14, 9);

    await campus.addEdge('22.361653, 113.537928', '22.361405, 113.537933', 24, 15);
    await campus.addEdge('Dormitory №37', '22.361653, 113.537928', 7, 5);
    await campus.addEdge('Dormitory №37 Entrance 1', '22.361653, 113.537928', 7, 5);
    await campus.addEdge('22.361733, 113.537928', '22.361653, 113.537928', 11, 6);
    await campus.addEdge('Dormitory №37', '22.361733, 113.537928', 7, 5);
    await campus.addEdge('Dormitory №37 Entrance 2', '22.361733, 113.537928', 7, 5);
    await campus.addEdge('22.361852, 113.537929', '22.361733, 113.537928', 15, 8);
    await campus.addEdge('22.361923, 113.538022', '22.361852, 113.537929', 10, 6);

    await campus.addEdge('22.362009, 113.536869', '22.361877, 113.536772', 17, 10);

    await campus.addEdge('22.361668, 113.537468', '22.361557, 113.537400', 12, 8);
    await campus.addEdge('22.361749, 113.537476', '22.361668, 113.537468', 10, 7);
    await campus.addEdge('22.361813, 113.537534', '22.361749, 113.537476', 10, 6);
    await campus.addEdge('22.361876, 113.537589', '22.361813, 113.537534', 8, 5);
    await campus.addEdge('22.361900, 113.537623', '22.361876, 113.537589', 6, 4);
    await campus.addEdge('22.361938, 113.537673', '22.361900, 113.537623', 6, 4);
    await campus.addEdge('22.361961, 113.537718', '22.361938, 113.537673', 4, 2);
    await campus.addEdge('22.361926, 113.537710', '22.361961, 113.537718', 4, 2);
    await campus.addEdge('22.361926, 113.537710', '22.361938, 113.537673', 2, 1);
    await campus.addEdge('22.361880, 113.537708', '22.361926, 113.537710', 7, 5);
    await campus.addEdge('22.361817, 113.537718', '22.361880, 113.537708', 8, 5);
    await campus.addEdge('22.361740, 113.537705', '22.361817, 113.537718', 9, 6);
    await campus.addEdge('22.361661, 113.537715', '22.361740, 113.537705', 9, 6);
    await campus.addEdge('22.361515, 113.537791', '22.361661, 113.537715', 18, 11);
    await campus.addEdge('22.361478, 113.537795', '22.361515, 113.537791', 3, 2);

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
    await campus.addEdge('22.365787, 113.540833', '22.365768, 113.540769', 9, 6);
    await campus.addEdge('22.366088, 113.540656', '22.366059, 113.540584', 9, 6);
    await campus.addEdge('22.366046, 113.540668', '22.366088, 113.540656', 5, 2);
    await campus.addEdge('22.365985, 113.540716', '22.366046, 113.540668', 7, 4);
    await campus.addEdge('22.365646, 113.540993', '22.365672, 113.541097', 10, 7);
    await campus.addEdge('22.365589, 113.541017', '22.365646, 113.540993', 10, 6);
    await campus.addEdge('22.365589, 113.541017', '22.365603, 113.541149', 11, 7);
    await campus.addEdge('22.365589, 113.541017', '22.365460, 113.541046', 13, 8);
    await campus.addEdge('22.365785, 113.540923', '22.365646, 113.540993', 12, 7);
    await campus.addEdge('22.365854, 113.540880', '22.365785, 113.540923', 12, 9);
    await campus.addEdge('22.365787, 113.540833', '22.365785, 113.540923', 10, 6);
    await campus.addEdge('22.365948, 113.540819', '22.365854, 113.540880', 11, 6);
    await campus.addEdge('22.365948, 113.540819', '22.365985, 113.540716', 11, 6);
    await campus.addEdge('22.365977, 113.540803', '22.365948, 113.540819', 7, 4);
    await campus.addEdge('22.366308, 113.540560', '22.366171, 113.540672', 19, 11);
    await campus.addEdge('22.366351, 113.540522', '22.366308, 113.540560', 5, 3);
    await campus.addEdge('22.366351, 113.540522', '22.366286, 113.540421', 13, 7);
    await campus.addEdge('22.366351, 113.540522', '22.366470, 113.540417', 17, 10);
    await campus.addEdge('22.364601, 113.541311', '22.364755, 113.540420', 96, 63);
    await campus.addEdge('22.364768, 113.541284', '22.364601, 113.541311', 20, 13);
    await campus.addEdge('22.364867, 113.541273', '22.364768, 113.541284', 12, 7);
    await campus.addEdge('22.364983, 113.541247', '22.364990, 113.541372', 12, 7);
    await campus.addEdge('22.364983, 113.541247', '22.364867, 113.541273', 12, 7);
    await campus.addEdge('22.365022, 113.541241', '22.364983, 113.541247', 3, 1);
    await campus.addEdge('22.365022, 113.541088', '22.365022, 113.541241', 11, 7);
    await campus.addEdge('22.365022, 113.541088', '咖啡工厂', 6, 5, false);
    await campus.addEdge('咖啡工厂', '22.365022, 113.541088', 6, 3, false);
    await campus.addEdge('22.365130, 113.541179', '22.365022, 113.541241', 13, 8);
    await campus.addEdge('22.364424, 113.541342', '22.364601, 113.541311', 19, 12);
    await campus.addEdge('22.364424, 113.541342', '22.364220, 113.541362', 24, 15);

    await campus.addEdge('22.364770, 113.541436', '22.364768, 113.541284', 15, 9);
    await campus.addEdge('Dormitory №12', '22.364770, 113.541436', 3, 2);
    await campus.addEdge('Dormitory №12 Entrance 1', '22.364770, 113.541436', 3, 2);
    await campus.addEdge('22.364863, 113.541418', '22.364867, 113.541273', 13, 8);
    await campus.addEdge('22.364863, 113.541418', '22.364770, 113.541436', 16, 10);
    await campus.addEdge('22.364990, 113.541372', '22.364863, 113.541418', 14, 8);
    await campus.addEdge('22.364857, 113.541602', '22.364770, 113.541436', 20, 13);
    await campus.addEdge('22.364900, 113.541665', '22.364857, 113.541602', 5, 3);
    await campus.addEdge('Dormitory №11', '22.364900, 113.541665', 2, 1);
    await campus.addEdge('Dormitory №11 Entrance 1', '22.364900, 113.541665', 2, 1);
    await campus.addEdge('22.364899, 113.541503', '22.364900, 113.541665', 17, 12);
    await campus.addEdge('22.364899, 113.541503', '22.364863, 113.541418', 11, 6);
    await campus.addEdge('22.364859, 113.541633', '22.364900, 113.541665', 5, 3);
    await campus.addEdge('22.364859, 113.541633', '22.364857, 113.541602', 2, 1);
    await campus.addEdge('22.364774, 113.541682', '22.364859, 113.541633', 12, 8);
    await campus.addEdge('22.364774, 113.541682', '22.364770, 113.541436', 23, 14);
    await campus.addEdge('Dormitory №12', '22.364774, 113.541682', 3, 2);
    await campus.addEdge('Dormitory №12 Entrance 2', '22.364774, 113.541682', 3, 2);
    await campus.addEdge('22.364773, 113.541749', '22.364774, 113.541682', 10, 6);
    await campus.addEdge('Dormitory №12', '22.364773, 113.541749', 3, 2);
    await campus.addEdge('Dormitory №12 Entrance 3', '22.364773, 113.541749', 3, 2);
    await campus.addEdge('22.364796, 113.541859', '22.364773, 113.541749', 12, 8);
    await campus.addEdge('Dormitory №12', '22.364796, 113.541859', 2, 1);
    await campus.addEdge('Dormitory №12 Entrance 4', '22.364796, 113.541859', 2, 1);
    await campus.addEdge('22.364885, 113.541840', '22.364796, 113.541859', 9, 5);
    await campus.addEdge('22.364896, 113.541817', '22.364885, 113.541840', 7, 5);
    await campus.addEdge('22.364896, 113.541817', '22.364900, 113.541665', 17, 11);
    await campus.addEdge('22.364900, 113.541893', '22.364896, 113.541817', 9, 6);
    await campus.addEdge('22.364795, 113.541890', '22.364900, 113.541893', 13, 9);
    await campus.addEdge('22.364795, 113.541890', '22.364796, 113.541859', 1, 1);

    await campus.addEdge('22.364809, 113.542060', '22.364795, 113.541890', 12, 7);
    await campus.addEdge('22.364889, 113.542060', '22.364809, 113.542060', 13, 9);
    await campus.addEdge('22.364889, 113.542060', '22.364900, 113.541893', 12, 7);

    await campus.addEdge('China post', '22.365307, 113.541115', 15, 10);
    await campus.addEdge('22.365455, 113.541207', '22.365460, 113.541046', 16, 11);
    await campus.addEdge('China post', '22.365455, 113.541207', 8, 5);
    await campus.addEdge('22.365485, 113.541247', '22.365455, 113.541207', 7, 4);
    await campus.addEdge('22.365509, 113.541253', '22.365485, 113.541247', 5, 3);
    await campus.addEdge('22.365487, 113.541276', '22.365485, 113.541247', 5, 3);
    await campus.addEdge('Dormitory №10', '22.365485, 113.541247', 2, 1);
    await campus.addEdge('Dormitory №10 Entrance 1', '22.365485, 113.541247', 2, 1);
    await campus.addEdge('22.365476, 113.541434', '22.365487, 113.541276', 15, 10);
    await campus.addEdge('22.365467, 113.541551', '22.365476, 113.541434', 12, 7);
    await campus.addEdge('22.365517, 113.541570', '22.365467, 113.541551', 11, 7);
    await campus.addEdge('22.365514, 113.541375', '22.365517, 113.541570', 22, 14);
    await campus.addEdge('22.365514, 113.541375', '22.365509, 113.541253', 11, 7);
    await campus.addEdge('Dormitory №9', '22.365514, 113.541375', 5, 3);
    await campus.addEdge('Dormitory №9 Entrance 3', '22.365514, 113.541375', 5, 3);
    await campus.addEdge('22.365565, 113.541293', '22.365514, 113.541375', 10, 6);
    await campus.addEdge('22.365588, 113.541220', '22.365565, 113.541293', 9, 6);
    await campus.addEdge('22.365588, 113.541220', '22.365509, 113.541253', 11, 8);
    await campus.addEdge('Dormitory №10', '22.365467, 113.541551', 2, 1);
    await campus.addEdge('Dormitory №10 Entrance 2', '22.365467, 113.541551', 2, 1);
    await campus.addEdge('Dormitory №10 Entrance 2', '22.365443, 113.541762', 19, 15);
    await campus.addEdge('Dormitory №10', '22.365443, 113.541762', 19, 15);
    await campus.addEdge('22.365622, 113.541599', '22.365517, 113.541570', 10, 6);
    await campus.addEdge('Dormitory №9 Study Room', '22.365622, 113.541599', 7, 4);
    await campus.addEdge('22.365622, 113.541599', '22.365622, 113.541599', 13, 9);
    await campus.addEdge('22.365603, 113.541149', '22.365588, 113.541220', 9, 6);
    await campus.addEdge('22.365672, 113.541097', '22.365603, 113.541149', 9, 5);
    await campus.addEdge('Campus Store', '22.365672, 113.541097', 1, 1);
    await campus.addEdge('22.365815, 113.541004', '22.365785, 113.540923', 9, 5);
    await campus.addEdge('22.365803, 113.541069', '22.365815, 113.541004', 6, 4);
    await campus.addEdge('22.365803, 113.541069', '22.365672, 113.541097', 10, 6);
    await campus.addEdge('22.365799, 113.541108', '22.365803, 113.541069', 6, 4);
    await campus.addEdge('22.365794, 113.541180', '22.365799, 113.541108', 5, 3);
    await campus.addEdge('22.365788, 113.541236', '22.365794, 113.541180', 6, 4);
    await campus.addEdge('Dormitory №9', '22.365788, 113.541236', 3, 2);
    await campus.addEdge('Dormitory №9 Entrance 1', '22.365788, 113.541236', 3, 2);
    await campus.addEdge('22.365844, 113.541122', '22.365799, 113.541108', 4, 3);
    await campus.addEdge('22.365901, 113.541108', '22.365844, 113.541122', 7, 5);
    await campus.addEdge('22.365901, 113.541184', '22.365901, 113.541108', 6, 4);
    await campus.addEdge('Dormitory №8', '22.365901, 113.541184', 2, 1);
    await campus.addEdge('Dormitory №8 Entrance 1', '22.365901, 113.541184', 2, 1);
    await campus.addEdge('22.365897, 113.541041', '22.365901, 113.541108', 9, 7);
    await campus.addEdge('22.365914, 113.541010', '22.365897, 113.541041', 5, 3);
    await campus.addEdge('Dormitory №8 Dancing hall', '22.365914, 113.541010', 1, 1);
    await campus.addEdge('22.365917, 113.540956', '22.365914, 113.541010', 5, 3);
    await campus.addEdge('22.365854, 113.540880', '22.365917, 113.540956', 11, 8);
    await campus.addEdge('22.366051, 113.540872', '22.365977, 113.540803', 9, 7);
    await campus.addEdge('22.366077, 113.540985', '22.366051, 113.540872', 13, 8);
    await campus.addEdge('Dormitory №8 Study Room', '22.366077, 113.540985', 3, 2);
    await campus.addEdge('22.366015, 113.540782', '22.365977, 113.540803', 5, 3);
    await campus.addEdge('22.365977, 113.540803', '22.366046, 113.540668', 10, 6);
    await campus.addEdge('22.366015, 113.540782', '22.366088, 113.540656', 8, 5);
    await campus.addEdge('22.366171, 113.540672', '22.366015, 113.540782', 16, 10);

    await campus.addEdge('22.366195, 113.540785', '22.366171, 113.540672', 12, 7);
    await campus.addEdge('22.366369, 113.540613', '22.366308, 113.540560', 9, 6);
    await campus.addEdge('22.366426, 113.540689', '22.366369, 113.540613', 10, 7);
    await campus.addEdge('22.366426, 113.540689', '22.366466, 113.540760', 10, 7);
    await campus.addEdge('22.366383, 113.540581', '22.366351, 113.540522', 6, 4);
    await campus.addEdge('22.366383, 113.540581', '22.366482, 113.540577', 10, 6);

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

    await campus.addEdge('Hongyi building', '22.370068, 113.535808', 16, 12);
    await campus.addEdge('Hongyi building Main Entrance', '22.370068, 113.535808', 16, 12);
    await campus.addEdge('Hongyi building', '22.370212, 113.535974', 9, 6);
    await campus.addEdge('Hongyi building (H) Entrance 1', '22.370212, 113.535974', 9, 6);
    await campus.addEdge('Hongyi building', '22.370262, 113.537032', 20, 13);
    await campus.addEdge('Hongyi building (H) Entrance 2', '22.370262, 113.537032', 20, 13);
    await campus.addEdge('Hongyi building', '22.370212, 113.535974', 18, 10);
    await campus.addEdge('Hongyi building Main Entrance', '22.370212, 113.535974', 18, 10);
    await campus.addEdge('Hongyi building', '22.370195, 113.535567', 7, 4);
    await campus.addEdge('Hongyi building (F) Entrance 1', '22.370195, 113.535567', 7, 4);
    await campus.addEdge('Hongyi building', '22.370195, 113.535567', 19, 11);
    await campus.addEdge('Hongyi building Main Entrance', '22.370195, 113.535567', 19, 11);
    await campus.addEdge('Hongyi building', '22.370245, 113.534635', 12, 9);
    await campus.addEdge('Hongyi building (F) Entrance 2', '22.370245, 113.534635', 12, 9);
    await campus.addEdge('Hongyi building', '22.370672, 113.534637', 22, 14);
    await campus.addEdge('Hongyi building (E) Entrance 1', '22.370672, 113.534637', 22, 14);
    await campus.addEdge('Hongyi building', '22.371185, 113.534645', 9, 7);
    await campus.addEdge('Hongyi building (B) Entrance 1', '22.371185, 113.534645', 9, 7);
    await campus.addEdge('Hongyi building', '22.371170, 113.537025', 20, 12);
    await campus.addEdge('Hongyi building (С) Entrance 1', '22.371170, 113.537025', 20, 12);
    await campus.addEdge('Hongyi building', '22.370688, 113.537029', 34, 21);
    await campus.addEdge('Hongyi building (D) Entrance 1', '22.370688, 113.537029', 34, 21);
    await campus.addEdge('Hongyi building Natural Grass Football Field', '22.369913, 113.537624', 62, 39);
    await campus.addEdge('Hongyi building Natural Grass Football Field', '22.370439, 113.538020', 41, 26);
    await campus.addEdge('Hongyi building Natural Grass Football Field', '22.371024, 113.537599', 61, 38);
    await campus.addEdge('Hongyi building', '22.371447, 113.535806', 14, 10);
    await campus.addEdge('Hongyi building (A) Main Entrance', '22.371447, 113.535806', 14, 10);
    await campus.addEdge('Hongyi building', '22.371218, 113.535347', 2, 1);
    await campus.addEdge('Hongyi building (A) Entrance 2', '22.371218, 113.535347', 2, 1);
    await campus.addEdge('Hongyi building', '22.371218, 113.535347', 2, 1);
    await campus.addEdge('Hongyi building (B) Entrance 2', '22.371218, 113.535347', 2, 1);

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
