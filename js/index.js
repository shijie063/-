window.onload=function(){
  
    // var timer=setInterval(autoplay,2000)
    // var index=0
    // function autoplay(){
    //     index++
    //     if(index==4){
            
    //         $(".topWrap .topCen_1").offset().top=0
    //         index=0

    //     }
    //         console.log($(".topWrap .topCen_1").offset().top)
    //         $(".topWrap .topCen").animate({top:-27*index},1000)
    // }
    //控制二级列表的显示与隐藏
        $(".list .shadow").delegate("li","mouseenter",function(){
                $(this).css({"box-shadow":"0 2px 5px #ccc","z-index":"11"})
                $(this).find(".listTwo").css("display","block")
                
        })
        $(".list .shadow").delegate("li","mouseleave",function(){
            $(this).css({"box-shadow":"","z-index":"0"})
            $(this).find(".listTwo").css("display","none")
            })



    


    //轮播图
    
        var i=0
        var a=setInterval(autoplay,2000)
        function autoplay(){
            i++;
            if(i==$(".ulist li").size()){
                i=0;
            }
            $(".olist li").eq(i).addClass("current").siblings().removeClass("current")
            $(".ulist li").eq(i).fadeIn(800).siblings().fadeOut(800) 
        }
        $(".ulist").mouseenter(function(){
            clearInterval(a)
        }).mouseleave(function(){
            a=setInterval(autoplay,2000)
        })
        $(".olist li").click(function(){
            i=$(this).index()-1
            autoplay()
        })

        $(".banner .left").click(function(){
            clearInterval(a)
            if(i<=0){
                i=2
                autoplay()  
            }else{
                i-=2;
                autoplay()
            }
            
        })
        $(".banner .right").click(function(){
            clearInterval(a)
            if(i>4){
                i=0
            }
            autoplay()
        })


        //brand
        $(".brandList .rightUlist").find("li").mouseenter(function(){
            $(this).find("div").css("display","block")
        })
        $(".brandList .rightUlist").find("li").mouseleave(function(){
            $(this).find("div").css("display","none")
        })


        //common
        $(".skinCon_R li").mouseenter(function(){
            $(this).find("img").stop().animate({"margin-left":-10},300);
        })
        $(".skinCon_R li").mouseleave(function(){
            $(this).find("img").stop().animate({"margin-left":0},300);
        })

        //picks
        $(".picksLeft img").mouseenter(function(){
            $(this).animate({"left":95},300)
        })
        $(".picksLeft img").mouseleave(function(){
            $(this).animate({"left":105},300)
        })

        $(".picksRight img").mouseenter(function(){
            $(this).animate({"left":95},300)
        })
        $(".picksRight img").mouseleave(function(){
            $(this).animate({"left":105},300)
        })


        //小轮播
        var e=0
        var b=setInterval(banner,2000)
        function banner(){
            e++
            if(e==$(".brandList .leftUlist li").size()){
                e=0
            }
            $(".brandList .leftUlist li").eq(e).fadeIn(1000).siblings().fadeOut(1000)
            // $(".brandList .leftOlist li").eq(e).addClass("current").siblings().removeClass("current")
        }


        //头部购物袋
        $(".shopcar").mouseenter(function(){
            $(".shopcarTwo").css({display:"block","z-index":"10"})
            $(this).css({"z-index":"5","border-bottom":"1px solid #fff"})
        })
        $(".shopcar,.shopcarTwo").mouseleave(function(){
            $(".shopcarTwo").css({"display":"none"})
            $(".shopcar").css({"border":"1px solid #dcdcdc"})
        })




        //scrlltop

        var h=window.innerHeight;
        var fixTop=document.getElementsByClassName("topFix");
        
        onscroll=function(){
            var stop=document.documentElement.scrollTop||document.body.scrollTop
            if(stop>h){
               // alert(1)
                //fixTop.style.display="block"
                $(".topFix").stop().slideDown(300);
                $(".fix").css("display","block");
                $(".fixed").css("display","block");
            }else{
                $(".topFix").stop().slideUp(300);
                $(".fix").css("display","none");
                $(".fixed").css("display","none");
            }
    }



    //楼梯
    $(".li_last").click(function(){
        $("body,html").animate({"scrollTop":0},1500)//d点击返回顶部
    })

    $(".fixed li").click(function(){
        var divTop=$(".louti").eq($(this).index()).offset().top;
        //console.log(divTop);
        $("body,html").stop().animate({"scrollTop":divTop},1200);
        $(this).addClass("red").siblings().removeClass("red")
    })


    $(window).scroll(function(){
        var sTop = $(document).scrollTop();
        //console.log(sTop)
        $floor = $(".louti").filter(function(){
           //console.log( $(this).offset().top )
            return Math.abs($(this).offset().top-sTop) < $(this).outerHeight()/2;
            
        })
        console.log($floor.index())
        if( $floor.index() != -1 ){
            $(".fixed li").eq( $floor.index() -5)
            .addClass("red")
            .siblings()
            .removeClass("red")
        }
    })

    
}

