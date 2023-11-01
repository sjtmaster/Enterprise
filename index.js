import './mock/mock.js';
import { getRecommendedList,getNewsPage,getNesDetail } from './api/api.js';

let res = await getRecommendedList();
console.log("111",res);
let res1 = await getNewsPage(4,8);
console.log("222",res1);
let res2 = await getNesDetail('GI8TL3S4000189A9O');
console.log("333",res2);
