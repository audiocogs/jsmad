var fs = require('fs');
var sys = require('sys');

require('./typed-array.js');
require('../../mad.js');
require('../../bit.js');
require('../../layer3.js');

var tests = [];
tests.push({
flags: 0,
sfbwidth: [
4,4,4,4,4,4,4,4,4,4,4,4,6,6,6,8,8,8,10,10,10,12,12,12,14,14,14,18,18,18,22,22,22,30,30,30,56,56,56],
xr0: [
-0.04093509,0.08902737,-0.04673872,0.81290334,0.00504069,0.01295291,-0.06297208,0.59918465,0.00895240,0.00263847,-0.08176661,0.16397671,0.33560085,-0.10171456,-0.00988217,0.01799953,0.49750966,0.04453132,-0.00013198,-0.00544225,0.64196996,0.02567524,0.00008631,-0.00690547,-0.02852095,0.01574088,-0.01453686,0.01547711,-0.00652099,0.00076270,-0.00029287,-0.00004612,-0.00185964,0.00088917,-0.00005881,-0.00011623,0.00330001,-0.00664854,0.00635189,-0.00560501,-0.00005881,0.00011623,-0.00007224,-0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,0.00552348,-0.00635189,-0.00152677,0.00315770,-0.00315770,0.00294722,0.00004612,-0.00004612,0.00002334,-0.00004612,0.00003425,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,-0.00301698,0.00351637,0.00088917,-0.00185964,0.00192188,-0.00185964,0.00192188,-0.00224057,-0.00002334,0.00002334,-0.00001359,0.00002334,-0.00001359,0.00000000,0.00001359,-0.00002334,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,-0.00057103,0.00123911,-0.00132382,0.00126719,-0.00132382,0.00155634,0.00039436,-0.00088917,0.00096732,-0.00094108,0.00000539,-0.00001359,0.00001359,0.00000000,-0.00000539,0.00001359,-0.00000539,0.00001359,-0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00096732,-0.00112839,-0.00029287,0.00066513,-0.00073799,0.00071350,-0.00073799,0.00083800,0.00023581,-0.00050288,0.00057103,-0.00057103,0.00000539,-0.00000539,0.00000539,-0.00000539,0.00000539,0.00000000,-0.00000539,0.00000539,0.00000000,0.00000539,-0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00057103,-0.00066513,-0.00018203,0.00039436,-0.00045869,0.00045869,-0.00045869,0.00052536,0.00013198,-0.00031256,0.00037347,-0.00037347,0.00037347,-0.00041553,0.00000000,-0.00000539,0.00000000,0.00000000,0.00000539,0.00000000,0.00000000,0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,-0.00010099,0.00025449,-0.00031256,0.00031256,-0.00031256,0.00033256,0.00008631,-0.00021750,0.00025449,-0.00025449,0.00025449,-0.00025449,-0.00007224,0.00016490,-0.00019957,0.00021750,-0.00019957,0.00019957,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000539,0.00000000,0.00000000,0.00000000,0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,-0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,0.00005881,-0.00014821,0.00016490,-0.00018203,0.00016490,-0.00016490,-0.00004612,0.00011623,-0.00014821,0.00014821,-0.00013198,0.00013198,0.00003425,-0.00008631,0.00011623,-0.00011623,0.00010099,-0.00008631,-0.00002334,0.00007224,-0.00008631,0.00010099,0.00000000,0.00000000,0.00000000,0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,-0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,-0.00008631,0.00007224,0.00001359,-0.00005881,0.00007224,-0.00007224,0.00005881,-0.00004612,-0.00001359,0.00003425,-0.00005881,0.00005881,-0.00004612,0.00002334,0.00000539,-0.00002334,0.00004612,-0.00003425,0.00002334,0.00000000,-0.00000539,0.00001359,-0.00003425,0.00003425,-0.00001359,-0.00001359,-0.00000539,0.00000000,0.00001359,-0.00001359,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000539,0.00000000,0.00000000,0.00000539,0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,-0.00000539,0.00000000,0.00000000,0.00000000,-0.00000539,0.00000539,0.00000000,0.00000000,0.00000000,-0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,-0.00000539,0.00000000,-0.00000539,0.00000000,0.00000000,0.00000000,-0.00000539,0.00000539,0.00000000,0.00000000,0.00000000,-0.00000539,0.00000539,0.00000000,0.00000000,0.00000539,-0.00000539,0.00000000,-0.00000539,0.00000000,0.00000000,0.00002334,0.00000539,0.00000000,-0.00001359,0.00000539,0.00000539,-0.00003425,-0.00000539,0.00001359,-0.00000539,0.00000000,-0.00002334,0.00007224,0.00001359,-0.00001359,0.00000539,-0.00002334,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,-0.00000539,0.00000539,0.00000000,-0.00000539,0.00000539,-0.00001359,0.00000000,0.00000539,-0.00001359,-0.00000539,0.00001359,-0.00001359,-0.00001359,0.00003425,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000539,-0.00001359,0.00002334,-0.00000539,0.00000000,-0.00000539,-0.00000539,0.00000000,-0.00000539,-0.00000539,-0.00000539,-0.00000539,-0.00000539,-0.00000539,0.00001359,0.00000000,-0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000],
xr1: [
-0.04093509,0.08902737,-0.04673872,0.81290334,0.33560085,-0.10171456,0.00504069,0.01295291,-0.06297208,0.59918465,0.49750966,0.04453132,0.00895240,0.00263847,-0.08176661,0.16397671,0.64196996,0.02567524,-0.00988217,0.01799953,-0.02852095,0.01574088,-0.01453686,0.01547711,-0.00013198,-0.00544225,-0.00652099,0.00076270,-0.00029287,-0.00004612,0.00008631,-0.00690547,-0.00185964,0.00088917,-0.00005881,-0.00011623,0.00330001,-0.00664854,0.00635189,-0.00560501,0.00552348,-0.00635189,-0.00005881,0.00011623,-0.00007224,-0.00000539,0.00004612,-0.00004612,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,-0.00152677,0.00315770,-0.00315770,0.00294722,-0.00301698,0.00351637,0.00002334,-0.00004612,0.00003425,0.00000000,-0.00002334,0.00002334,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00088917,-0.00185964,0.00192188,-0.00185964,0.00192188,-0.00224057,-0.00001359,0.00002334,-0.00001359,0.00000000,0.00001359,-0.00002334,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,-0.00057103,0.00123911,-0.00132382,0.00126719,-0.00132382,0.00155634,0.00000539,-0.00001359,0.00001359,0.00000000,-0.00000539,0.00001359,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00039436,-0.00088917,0.00096732,-0.00094108,0.00096732,-0.00112839,-0.00000539,0.00001359,-0.00000539,0.00000000,0.00000539,-0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,-0.00029287,0.00066513,-0.00073799,0.00071350,-0.00073799,0.00083800,0.00000539,-0.00000539,0.00000539,0.00000000,-0.00000539,0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00023581,-0.00050288,0.00057103,-0.00057103,0.00057103,-0.00066513,0.00000000,0.00000539,-0.00000539,0.00000000,0.00000000,-0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,-0.00018203,0.00039436,-0.00045869,0.00045869,-0.00045869,0.00052536,0.00000000,0.00000000,0.00000539,0.00000000,0.00000000,0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00013198,-0.00031256,0.00037347,-0.00037347,0.00037347,-0.00041553,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,-0.00010099,0.00025449,-0.00031256,0.00031256,-0.00031256,0.00033256,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00008631,-0.00021750,0.00025449,-0.00025449,0.00025449,-0.00025449,0.00000000,0.00000000,0.00000000,0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,-0.00007224,0.00016490,-0.00019957,0.00021750,-0.00019957,0.00019957,0.00000000,0.00000000,-0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,0.00005881,-0.00014821,0.00016490,-0.00018203,0.00016490,-0.00016490,0.00000000,0.00000000,0.00000000,0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,-0.00000539,-0.00004612,0.00011623,-0.00014821,0.00014821,-0.00013198,0.00013198,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00003425,-0.00008631,0.00011623,-0.00011623,0.00010099,-0.00008631,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,-0.00002334,0.00007224,-0.00008631,0.00010099,-0.00008631,0.00007224,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00001359,-0.00005881,0.00007224,-0.00007224,0.00005881,-0.00004612,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,-0.00001359,0.00003425,-0.00005881,0.00005881,-0.00004612,0.00002334,0.00000000,0.00000539,0.00000000,0.00000000,0.00000539,0.00000539,0.00000000,0.00000000,-0.00000539,0.00000000,-0.00000539,0.00000000,0.00000539,-0.00002334,0.00004612,-0.00003425,0.00002334,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,-0.00000539,0.00000000,0.00000000,0.00000000,-0.00000539,0.00000539,0.00000000,0.00000000,-0.00000539,0.00001359,-0.00003425,0.00003425,-0.00001359,-0.00001359,0.00000000,0.00000000,-0.00000539,0.00000539,0.00000000,0.00000000,0.00000000,-0.00000539,0.00000539,0.00000000,0.00000000,0.00000539,-0.00000539,0.00000000,0.00001359,-0.00001359,0.00000000,0.00002334,0.00000000,-0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,-0.00000539,0.00000000,-0.00000539,0.00000000,0.00000539,-0.00001359,0.00000539,0.00000000,-0.00001359,0.00000539,0.00000539,-0.00003425,0.00000000,0.00000000,-0.00000539,0.00000539,0.00000000,-0.00000539,0.00002334,-0.00000539,0.00000000,-0.00000539,-0.00000539,0.00000000,-0.00000539,0.00001359,-0.00000539,0.00000000,-0.00002334,0.00007224,0.00000539,-0.00001359,0.00000000,0.00000539,-0.00001359,-0.00000539,-0.00000539,-0.00000539,-0.00000539,-0.00000539,-0.00000539,-0.00000539,0.00001359,-0.00001359,0.00000539,-0.00002334,0.00000000,0.00000000,0.00001359,-0.00001359,-0.00001359,0.00003425,0.00000000,0.00000000,0.00001359,0.00000000,-0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000]});

tests.push({
flags: 0,
sfbwidth: [
4,4,4,4,4,4,4,4,4,4,4,4,6,6,6,8,8,8,10,10,10,12,12,12,14,14,14,18,18,18,22,22,22,30,30,30,56,56,56],
xr0: [
0.01049861,-0.00626776,-0.07993612,-0.20162641,0.11550641,0.08796911,0.02645484,-0.56619469,-0.02267439,0.04309736,-0.01993791,-0.01156261,0.63516553,0.00626776,0.00230575,-0.00548283,0.50592571,-0.01458870,0.02919763,0.01265168,0.01305370,0.00403419,-0.00369926,0.00927520,0.00277464,0.00104708,0.00003425,-0.00010099,0.01235224,-0.01412374,-0.02135219,-0.01093078,-0.01078624,0.00760231,-0.00118343,-0.00422335,0.00073799,0.00025449,-0.00025449,-0.00035287,0.00233851,-0.00872359,-0.00777910,0.00071350,-0.00013198,-0.00031256,0.00164591,-0.00237139,-0.00018203,-0.00003425,-0.00045869,-0.00019957,0.00007224,0.00019957,0.00733904,0.00516035,-0.00418535,0.00330001,0.00504069,0.00179791,0.00129543,0.00027351,0.00039436,-0.00064127,-0.00011623,0.00102032,0.00014821,0.00004612,0.00025449,0.00013198,-0.00001359,-0.00010099,-0.00010099,-0.00004612,-0.00256385,-0.00253798,0.00376250,-0.00095627,-0.00314887,-0.00225788,0.00037149,0.00105878,-0.00113655,0.00076338,-0.00039380,0.00079303,-0.00038135,-0.00040635,0.00091435,-0.00103985,-0.00011623,-0.00007224,-0.00001359,0.00004612,0.00005881,0.00002334,0.00003425,0.00003425,0.00002334,-0.00000539,-0.00292405,-0.00021009,0.00175409,0.00208338,0.00072404,-0.00016994,0.00202511,0.00078070,-0.00074657,-0.00164296,0.00032434,-0.00072147,0.00053931,0.00006104,-0.00066545,0.00101746,-0.00023516,0.00057467,-0.00053931,0.00012872,-0.00002334,-0.00001359,0.00001359,-0.00000539,-0.00002334,-0.00002334,-0.00000539,0.00000000,-0.00004612,-0.00001359,0.00002334,0.00003425,-0.00122056,-0.00035973,-0.00119106,-0.00100854,0.00002525,0.00113261,0.00135044,0.00064276,0.00048830,0.00099915,0.00045718,-0.00062601,0.00043809,-0.00085008,0.00014691,-0.00039895,0.00046804,-0.00022672,-0.00023516,0.00062481,-0.00006436,0.00022672,-0.00035134,0.00026966,0.00002334,0.00000539,0.00005881,0.00002334,-0.00001359,-0.00003425,-0.00003425,-0.00000539,-0.00005881,-0.00003425,0.00001359,0.00003425,0.00003425,0.00001359,-0.00123535,-0.00074867,0.00007410,-0.00085315,-0.00073402,0.00017643,0.00099232,0.00070496,-0.00047054,0.00063359,0.00083802,0.00018673,-0.00066191,-0.00059171,0.00005881,-0.00037347,0.00000000,-0.00007224,0.00021750,-0.00025449,0.00007224,0.00014821,0.00004612,-0.00004612,-0.00010099,0.00021750,-0.00016490,0.00004612,0.00005881,0.00003425,-0.00000539,-0.00003425,-0.00003425,-0.00001359,-0.00004612,-0.00003425,0.00000000,0.00002334,0.00002334,0.00001359,0.00002334,0.00002334,0.00000539,-0.00001359,-0.00001359,-0.00000539,0.00071350,-0.00037347,-0.00081270,-0.00045869,0.00031256,0.00041553,-0.00081270,0.00011623,0.00066513,0.00059422,0.00000539,-0.00021750,0.00078760,0.00011623,-0.00048066,-0.00064127,-0.00027351,0.00001359,-0.00007224,0.00013198,-0.00001359,-0.00014821,0.00021750,-0.00018203,0.00008631,-0.00018203,0.00010099,0.00008631,-0.00023581,0.00029287,-0.00008631,0.00019957,-0.00016490,-0.00001359,0.00021750,-0.00033256,-0.00000539,-0.00001359,-0.00000539,0.00000000,0.00000539,0.00000539,-0.00000539,0.00000000,0.00000539,0.00000539,0.00000539,0.00000000,0.00002334,0.00000539,-0.00000539,-0.00001359,-0.00001359,-0.00000539,-0.00003425,-0.00001359,0.00000539,0.00002334,-0.00066513,-0.00029287,0.00023581,0.00059422,0.00048066,0.00014821,0.00045869,0.00041553,-0.00001359,-0.00048066,-0.00057103,-0.00027351,-0.00023581,-0.00045869,-0.00018203,0.00031256,0.00059422,0.00035287,0.00000539,0.00043698,0.00033256,-0.00013198,0.00008631,-0.00019957,0.00018203,-0.00004612,-0.00016490,0.00033256,-0.00005881,0.00016490,-0.00018203,0.00008631,0.00011623,-0.00027351,0.00003425,-0.00011623,0.00016490,-0.00011623,-0.00004612,0.00019957,-0.00000539,0.00005881,-0.00013198,0.00013198,0.00001359,0.00000539,0.00003425,0.00001359,-0.00000539,-0.00002334,-0.00001359,-0.00000539,-0.00003425,-0.00001359,0.00000000,0.00002334,0.00001359,0.00001359,0.00002334,0.00001359,0.00000000,-0.00001359,-0.00002334,-0.00000539,-0.00001359,-0.00002334,0.00000539,0.00001359,0.00001359,0.00001359,0.00000539,0.00000539,0.00000000,-0.00000539,-0.00054808,-0.00037347,0.00019957,-0.00037347,-0.00043698,-0.00004612,0.00041553,0.00035287,-0.00037347,0.00025449,0.00045869,0.00021750,-0.00025449,-0.00029287,0.00045869,-0.00013198,-0.00043698,-0.00033256,0.00007224,0.00018203,-0.00050288,-0.00002334,0.00037347,0.00041553,0.00010099,-0.00007224,0.00048066,0.00014821,-0.00023581,-0.00041553,-0.00001359,-0.00011623,-0.00001359,0.00000539,0.00007224,-0.00011623,0.00007224,0.00001359,0.00003425,-0.00005881,-0.00001359,0.00010099,-0.00011623,0.00007224,-0.00005881,0.00010099,-0.00004612,-0.00007224,0.00013198,-0.00014821,0.00005881,-0.00013198,0.00008631,0.00003425,-0.00014821,0.00019957,-0.00005881,0.00013198,-0.00011623,0.00000539,-0.00000539,-0.00001359,0.00000000,0.00000539,0.00000000,0.00000539,-0.00000539,-0.00001359,-0.00000539,-0.00000539,0.00000000,0.00001359,-0.00000539,0.00001359,0.00002334,-0.00000539,-0.00002334,-0.00000539,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,-0.00025449,-0.00004612,-0.00039436,-0.00023581,0.00008631,0.00039436,0.00037347,0.00014821,0.00025449,0.00031256,0.00004612,-0.00029287,-0.00043698,-0.00023581,-0.00010099,-0.00033256,-0.00019957,0.00018203,0.00043698,0.00029287,-0.00004612,0.00031256,0.00031256,-0.00005881,-0.00037347,-0.00027351,0.00021750,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00013198,-0.00021750,0.00004612,-0.00013198,0.00013198,-0.00004612,-0.00010099,0.00021750,-0.00003425,0.00010099,-0.00013198,0.00007224,0.00005881,-0.00018203,0.00001359,-0.00005881,0.00011623,-0.00008631,-0.00001359,0.00013198,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000],
xr1: [
0.01049861,-0.00626776,-0.07993612,-0.20162641,0.63516553,0.00626776,0.11550641,0.08796911,0.02645484,-0.56619469,0.50592571,-0.01458870,-0.02267439,0.04309736,-0.01993791,-0.01156261,0.01305370,0.00403419,0.00230575,-0.00548283,0.00277464,0.00104708,0.00003425,-0.00010099,0.02919763,0.01265168,0.01235224,-0.01412374,-0.02135219,-0.01093078,-0.00369926,0.00927520,-0.01078624,0.00760231,-0.00118343,-0.00422335,0.00073799,0.00025449,-0.00025449,-0.00035287,-0.00018203,-0.00003425,0.00233851,-0.00872359,-0.00777910,0.00071350,0.00733904,0.00516035,-0.00013198,-0.00031256,0.00164591,-0.00237139,0.00129543,0.00027351,-0.00045869,-0.00019957,0.00007224,0.00019957,0.00014821,0.00004612,-0.00418535,0.00330001,0.00504069,0.00179791,-0.00256385,-0.00253798,0.00039436,-0.00064127,-0.00011623,0.00102032,-0.00113655,0.00076338,0.00025449,0.00013198,-0.00001359,-0.00010099,-0.00010099,-0.00004612,0.00376250,-0.00095627,-0.00314887,-0.00225788,0.00037149,0.00105878,-0.00039380,0.00079303,-0.00038135,-0.00040635,0.00091435,-0.00103985,-0.00011623,-0.00007224,-0.00001359,0.00004612,0.00005881,0.00002334,-0.00292405,-0.00021009,0.00175409,0.00208338,0.00072404,-0.00016994,0.00032434,-0.00072147,0.00053931,0.00006104,-0.00066545,0.00101746,0.00003425,0.00003425,0.00002334,-0.00000539,-0.00002334,-0.00001359,0.00202511,0.00078070,-0.00074657,-0.00164296,-0.00122056,-0.00035973,-0.00023516,0.00057467,-0.00053931,0.00012872,0.00043809,-0.00085008,0.00001359,-0.00000539,-0.00002334,-0.00002334,-0.00000539,0.00000000,-0.00119106,-0.00100854,0.00002525,0.00113261,0.00135044,0.00064276,0.00014691,-0.00039895,0.00046804,-0.00022672,-0.00023516,0.00062481,-0.00004612,-0.00001359,0.00002334,0.00003425,0.00002334,0.00000539,0.00048830,0.00099915,0.00045718,-0.00062601,-0.00123535,-0.00074867,-0.00006436,0.00022672,-0.00035134,0.00026966,0.00005881,-0.00037347,0.00005881,0.00002334,-0.00001359,-0.00003425,-0.00003425,-0.00000539,0.00007410,-0.00085315,-0.00073402,0.00017643,0.00099232,0.00070496,0.00000000,-0.00007224,0.00021750,-0.00025449,0.00007224,0.00014821,-0.00005881,-0.00003425,0.00001359,0.00003425,0.00003425,0.00001359,-0.00047054,0.00063359,0.00083802,0.00018673,-0.00066191,-0.00059171,0.00004612,-0.00004612,-0.00010099,0.00021750,-0.00016490,0.00004612,0.00005881,0.00003425,-0.00000539,-0.00003425,-0.00003425,-0.00001359,0.00071350,-0.00037347,-0.00081270,-0.00045869,0.00031256,0.00041553,-0.00007224,0.00013198,-0.00001359,-0.00014821,0.00021750,-0.00018203,-0.00004612,-0.00003425,0.00000000,0.00002334,0.00002334,0.00001359,-0.00081270,0.00011623,0.00066513,0.00059422,0.00000539,-0.00021750,0.00008631,-0.00018203,0.00010099,0.00008631,-0.00023581,0.00029287,0.00002334,0.00002334,0.00000539,-0.00001359,-0.00001359,-0.00000539,0.00078760,0.00011623,-0.00048066,-0.00064127,-0.00027351,0.00001359,-0.00008631,0.00019957,-0.00016490,-0.00001359,0.00021750,-0.00033256,-0.00000539,-0.00001359,-0.00000539,0.00000000,0.00000539,0.00000539,-0.00066513,-0.00029287,0.00023581,0.00059422,0.00048066,0.00014821,0.00008631,-0.00019957,0.00018203,-0.00004612,-0.00016490,0.00033256,-0.00000539,0.00000000,0.00000539,0.00000539,0.00000539,0.00000000,0.00045869,0.00041553,-0.00001359,-0.00048066,-0.00057103,-0.00027351,-0.00005881,0.00016490,-0.00018203,0.00008631,0.00011623,-0.00027351,0.00002334,0.00000539,-0.00000539,-0.00001359,-0.00001359,-0.00000539,-0.00023581,-0.00045869,-0.00018203,0.00031256,0.00059422,0.00035287,0.00003425,-0.00011623,0.00016490,-0.00011623,-0.00004612,0.00019957,-0.00003425,-0.00001359,0.00000539,0.00002334,0.00001359,0.00000539,0.00000539,0.00043698,0.00033256,-0.00013198,-0.00054808,-0.00037347,-0.00000539,0.00005881,-0.00013198,0.00013198,-0.00001359,-0.00011623,0.00003425,0.00001359,-0.00000539,-0.00002334,-0.00001359,-0.00000539,0.00019957,-0.00037347,-0.00043698,-0.00004612,0.00041553,0.00035287,-0.00001359,0.00000539,0.00007224,-0.00011623,0.00007224,0.00001359,-0.00003425,-0.00001359,0.00000000,0.00002334,0.00001359,0.00001359,-0.00037347,0.00025449,0.00045869,0.00021750,-0.00025449,-0.00029287,0.00003425,-0.00005881,-0.00001359,0.00010099,-0.00011623,0.00007224,0.00002334,0.00001359,0.00000000,-0.00001359,-0.00002334,-0.00000539,0.00045869,-0.00013198,-0.00043698,-0.00033256,0.00007224,0.00018203,-0.00005881,0.00010099,-0.00004612,-0.00007224,0.00013198,-0.00014821,-0.00001359,-0.00002334,0.00000539,0.00001359,0.00001359,0.00001359,-0.00050288,-0.00002334,0.00037347,0.00041553,0.00010099,-0.00007224,0.00005881,-0.00013198,0.00008631,0.00003425,-0.00014821,0.00019957,0.00000539,0.00000539,0.00000000,-0.00000539,-0.00000539,-0.00001359,0.00048066,0.00014821,-0.00023581,-0.00041553,-0.00025449,-0.00004612,-0.00005881,0.00013198,-0.00011623,0.00000539,0.00013198,-0.00021750,0.00000000,0.00000539,0.00000000,0.00000539,-0.00000539,-0.00001359,-0.00039436,-0.00023581,0.00008631,0.00039436,0.00037347,0.00014821,0.00004612,-0.00013198,0.00013198,-0.00004612,-0.00010099,0.00021750,-0.00000539,-0.00000539,0.00000000,0.00001359,-0.00000539,0.00001359,0.00025449,0.00031256,0.00004612,-0.00029287,-0.00043698,-0.00023581,-0.00003425,0.00010099,-0.00013198,0.00007224,0.00005881,-0.00018203,0.00002334,-0.00000539,-0.00002334,-0.00000539,0.00000000,0.00000000,-0.00010099,-0.00033256,-0.00019957,0.00018203,0.00043698,0.00029287,0.00001359,-0.00005881,0.00011623,-0.00008631,-0.00001359,0.00013198,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,-0.00004612,0.00031256,0.00031256,-0.00005881,-0.00037347,-0.00027351,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00021750,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000]});


for (var i = 0; i < tests.length; i++) {
    var test = tests[i];
    var xr = [];

    for (var j = 0; j < test.xr0.length; j++) {
        xr[j] = test.xr0[j];
    }

    Mad.III_reorder(xr, {flags: test.flags}, test.sfbwidth);

    for (var j = 0; j < xr.length; j++) {
        console.log(Math.abs(xr[j] - test.xr1[j]));
    }
}