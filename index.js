$(function(){
    $('.search').on('click',function(){
        $(this).closest('.leader').addClass('searching')
        $('.mask').addClass('active')
    })
    $('.button').on('click',function(){
        $(this).closest(".leader").removeClass('searching')
        $('.mask').removeClass('active')
    })
    $('.btn').on('click',function(){
        $('.list').css({
            "visibility": "visible"
        })
    })

//////////////////////////////////banner///////////////////////////////////////
//     var slides=$('.nav a')
//     var dots=$('.dot-nav .dot')
//     var moving=false;
//     //moveto函数 接收一个jquery对象  代表要去的那个div
//     moveto=function(el,dir){
//         moving=true
//         if(dir==="right"){
//             moving=false;
//             slides.filter('.active')
//                 .removeClass('active')
//                 .addClass('leave')
//                 .delay(1000)
//                 .dequeue(function(){
//                     $(this).removeClass('leave').dequeue();
//                 })
//             $(el).addClass('right')
//             $(el).get(0).offsetWidth;
//             //reflow  强制浏览器重绘一帧  get获取的是dom对象
//             $(el).removeClass('right').addClass('active')
//         }else if(dir==="left"){
//             slides.filter('.active')
//                 .removeClass('active')
//                 .addClass('right')
//                 .delay(1000)
//                 .dequeue(function(){
//                     moving=false;
//                     $(this).removeClass('right').dequeue();
//                 })
//             $(el).
//
//         }
//
//         $(dots).removeClass('active').eq(slides.index(el)).addClass('active')
//     }
//     moveright=function(){
//         if(moving){return;}
//         var active=slides.filter('active')
//         var el=active.next().length ? active.next():slides.eq(0);
//         moveto(el,"right")
//     }
//     moveright=function(){
//         if(moving){return;}
//         var active=slides.filter('active')
//         var el=active.prev().length ? active.prev():slides.eq(0);
//         moveto(el,"left")
//     }
//     dots.on('click',function(){
//         var c=slides.index(slides.filter('.active'))
//         var n=$(this).index();
//         if(c===n){return;}
//         if(c<n){
//             moveto(slides.eq(n),"right" );
//         }else{
//             moveto(slides.eq(n),"left" );
//         }
//     })
//     setInterval(moveright,1000);









})