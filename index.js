import './mock/mock.js';
import { getRecommendedList,getNewsPage,getNesDetail } from './api/api.js';

load("common/header.html",(res)=>{
    document.getElementById("header").innerHTML = res;
})

load("common/banner.html",(res)=>{
    document.getElementById("banner").innerHTML = res;
    let sc = document.createElement("script");
    sc.src = "js/banner.js";
    document.body.append(sc);
})



let res = await getRecommendedList();
console.log("111",res);
let res1 = await getNewsPage(4,8);
console.log("222",res1);
let res2 = await getNesDetail('GI8TL3S4000189A9O');
console.log("333",res2);
