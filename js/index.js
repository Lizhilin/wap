/**
 * Created by Lizhilin on 2015/12/13/013.
 */
window.onload = function(){
    //电影列表拖动=============================================================================================
    var startX, x,
        aboveX_ML=0;// 设一个全局变量记录上一次内部块滑动的位置

    var inner = document.getElementById("inner");

    document.getElementById("outer").addEventListener('touchstart',touchStart,true);
    document.getElementById("outer").addEventListener('touchmove',touchMove,true);
    document.getElementById("outer").addEventListener('touchend',touchEnd,true);

    function touchStart(e){//触摸开始 获得x初始坐标
        e.preventDefault();
        var touch = e.touches[0];
        startX = touch.pageX;
    }

    function touchMove(e){
        e.preventDefault();
        var touch = e.touches[0];
        x = touch.pageX - startX; //当前的x减初始坐标，为滑动距离，
        inner.style.marginLeft = aboveX_ML + x+'px';
    }

    var aa = -($("#inner").width()-document.body.clientWidth);//ul宽-屏幕宽 的负数
    function touchEnd(e){
        aboveX_ML = parseInt(inner.style.marginLeft)//touch结束后记录内部滑块滑动的位置 在全局变量中体现一定要用parseInt()将其转化为整数字;
        if(x>0 && aboveX_ML>0){//当滑动到最左时候不能再往左滑动 ,x为正为左滑
            $("#inner").animate({marginLeft:0},200);
            aboveX_ML = 0;
        }

        if( x<0 && (aboveX_ML<aa)  ){//x为负为右滑

            $("#inner").animate({marginLeft:aa},200);
            aboveX_ML = aa;
        }
        console.log(x);
    }

    //尾页 拖动时透明
    var footer_city = document.getElementById("footer_city");
    document.getElementsByTagName("body")[0].addEventListener('touchstart',touchBodyStart,true);
    document.getElementsByTagName("body")[0].addEventListener('touchmove',touchBodyMove,true);
    document.getElementsByTagName("body")[0].addEventListener('touchend',touchBodyEnd,true);
    function touchBodyStart(e){
        footer_city.style.opacity = "0";
    }
    function touchBodyMove(e){
        footer_city.style.opacity = "0";
    }
    function touchBodyEnd(e){
        footer_city.style.opacity = "1";
    }
    //电影列表拖动 end=============================================================================================



};