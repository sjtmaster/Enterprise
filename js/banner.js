//监听dom挂载
document.ready = function(callback){
    if(document.readyState == 'complete'){
        callback();
    }else if(document.addEventListener){
        document.addEventListener('DOMContentLoaded',callback());
    }else{
        document.attachEvent('onreadystatechange',function(){
            if(document.readyState == 'complete'){
                callback();
            }
        })
    }
}
document.ready(slideshow);

// 轮播图函数
function slideshow(){
    let slideshow = document.getElementById("slideshow"),
    imgs = slideshow.getElementsByTagName("img"),//得到图片
    page = slideshow.getElementsByTagName("span"),//得到页码
    descrips = slideshow.getElementsByTagName("p"),//得到描述
    current = 0;//current为当前活跃的图片编号
    console.log("引入");
    
 
    function slideOff(){
        imgs[current].className="";//图片淡出
        page[current].className="";
        descrips[current].className="";
    }
 
    function slideOn(){
        imgs[current].className="active";//图片淡入
        page[current].className="active";
        descrips[current].className="active";
    }
 
    //切换图片的函数
    function changeSlide(){
        slideOff();
        current++;//自增1
        if(current>=3){
            current = 0;
        }
        slideOn();
    }
    //每2秒调用一次changeSlide函数进行图片轮播
    let slideon = null;
    if(slideon){
        clearInterval(slideon);
        slideon = null;
    }
    slideon = setInterval(changeSlide,2000)
 
 
    //当鼠标移入的时候清除轮播事件
    slideshow.onmouseover=function(){
        clearInterval(slideon);
    }
    //当鼠标移出的时候重新开始轮播事件
    slideshow.onmouseout=function(){
        slideon = setInterval(changeSlide,2000)
    }
 
    for(var i=0;i<page.length;i++){
        page[i].onmouseover=function(){
            slideOff();//图片淡出
            // 得到鼠标停留的页码对应的current
            current=this.innerHTML-1;
            slideOn();//图片淡入
        }
    }
}