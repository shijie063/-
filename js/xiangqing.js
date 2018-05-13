window.onload=function(){
//操作二级列表
    $(".list .shadow").delegate("li","mouseenter",function(){
        $(this).css({"box-shadow":"0 2px 5px #ccc","z-index":"11"})
        $(this).find(".listTwo").css("display","block")
        
    })
    $(".list .shadow").delegate("li","mouseleave",function(){
        $(this).css({"box-shadow":"","z-index":"0"})
        $(this).find(".listTwo").css("display","none")
    })
    $(".all,.shadow").mouseenter(function(){
        $(".shadow").stop().slideDown(500) 
    })
    $(".shadow,.all").mouseleave(function(){
        $(".shadow").stop().slideUp(500) 
    })


    //控制滚轮华东列表显示
    var h=window.innerHeight;
        var fixTop=document.getElementsByClassName("topFix");
        onscroll=function(){
            var stop=document.documentElement.scrollTop||document.body.scrollTop
            if(stop>h){
               // alert(1)
                //fixTop.style.display="block"
                $(".fix").css("display","block");              
            }else{   
                $(".fix").css("display","none"); 
            }
    }

    $(".li_last").click(function(){
        $("body,html").animate({"scrollTop":0},1200)//d点击返回顶部
    })



    //头部购物袋
    $(".shopcar").mouseenter(function(){
        $(".shopcarTwo").css({display:"block","z-index":"10"})
        $(this).css({"z-index":"5","border-bottom":"1px solid #fff"})
    })
    $(".shopcar").mouseleave(function(){
        $(".shopcarTwo").css({"display":"none"})
        $(".shopcar").css({"border":"1px solid #dcdcdc"})
    })



    //放大镜

    //鼠标移入，遮罩层显示
    $(".cen").mouseenter(function(){
        $(".mask").css("display","block");
        $("#big").css("display","block");
    })
    $(".cen").mouseleave(function(){
        $(".mask").css("display","none");
        $("#big").css("display","none")
    })


    //操控mask移动
        $(".cen").mousemove(function(e){
             $e = e || event
            $x=e.pageX-$(".cen").offset().left-$(".mask").width()/2
            $y=e.pageY-$(".cen").offset().top-$(".mask").height()/2
            //console.log(disx)
            $maxX=$(".cen").width()-$(".mask").width();
            $maxY=$(".cen").height()-$(".mask").height();
            $x=$x<0?0:($x>$maxX?$maxX:$x)
            $y=$y<0?0:($y>$maxY?$maxY:$y)
            $(".mask").css({"left":$x,"top":$y})

            //操作大图       
            $a=$x * ( $("#bigImg").width()-$("#big").width() ) / ( $(".cen").width()-$(".mask").width() ) *-1+ "px"
            $b=$y * ( $("#bigImg").height()-$("#big").height() ) / ( $(".cen").height()-$(".mask").height() )*-1+"px"
            $("#bigImg").css({"left":$a,"top":$b})
           
        })
       

        //操作小图
        var ulist=document.getElementById("u").children
        var cen=document.getElementById("center").children
        var big=document.getElementById("big").children
        var mask=document.getElementById("mask")
        for(let i=0;i<ulist.length;i++){
            ulist[i].onclick=function(){
                cen[0].src="images/"+"big"+(i+1)+".jpg";
                big[0].src="images/"+"big"+(i+1)+".jpg"
            }
            
        }
        
        $(".small").on("click","li",function(){
            $(this).addClass("border").siblings().removeClass("border")
            
        })
        

     
         $r=0
        $(".gt").click(function(){ 
           if($r==2){
              $r=2
           }else{
                $r++
           }
           $(".small li").eq($r).addClass("border").siblings().removeClass("border");
           $(".cen img").attr("src","images/"+"big"+($r+1)+".jpg")
           $(".big img").attr("src","images/"+"big"+($r+1)+".jpg")
           
        })
       

       
        $(".lt").click(function(){
            $(".small li").each(function(l){
                //alert(index)
                //alert($(".small li").eq(indexs).attr("class"))
                if($(".small li").eq(l).attr("class")=="border"){
                    if(l==0){
                        l=0
                    }else{
                        l--;
                        $r--
                    }
                    $(".small").find("li").eq(l).addClass("border").siblings().removeClass("border");
                    $(".cen img").attr("src","images/"+"big"+(l+1)+".jpg")
                    $(".big img").attr("src","images/"+"big"+(l+1)+".jpg")
                    
                }
            })

        })
       

        //选项

        $(".ml").click(function(){
            if(  $(".ml").css("border-color","#ccc")&&$(".taozhuang").css("border-color","#ccc") ){
                 $(".ml").css("border-color","#000");
            }else{
                $(".ml").css("border-color","#ccc")
            }
        })
        $(".taozhuang").click(function(){
            if(  $(".taozhuang").css("border-color","#ccc")&&$(".ml").css("border-color","#ccc") ){
                $(".taozhuang").css("border-color","#000");
            }else{
                $(".taozhuang").css("border-color","#ccc")
            }
        })

        $(".ml").click(function(){
            if(  $(".ml").css("border-color")=="rgb(204, 204, 204)" ){
                $(".ml").css("border-color","#000");
            }else{
                $(".ml").css("border-color","#ccc")
                
            }
        })
       
       
       

        
        $(".v").click(function(){
            $index=$("#num").val()
            $index++
            $("#num").val($index)
        })
        $("#vv").click(function(){
            $index=$("#num").val()  
            if($index==1){
                $index=1
            }else{
                $index--
            }
            $("#num").val($index)
        })
	
        
        
   
}