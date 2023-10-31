import './mock/mock.js';
import { getRecommendedList,getNewsPage,getNesDetail } from './api/api.js';

let res = await getRecommendedList();
console.log("111",res);
let res1 = await getNewsPage(2,8);
console.log("222",res1);
let res2 = await getNesDetail('GI8TL3S40001899O');
console.log("333",res2);
