window.onload=function(){
    $(".black").focus(function(){
        $(this).css("border-bottom","1px solid #000")
    })
    $(".black").blur(function(){
        $(this).css("border-bottom","")
    })


    flagname=null
    $("#uname").blur(function(){
        $str=$("#uname").val()
        $reg=/^1(3|5|6|8|9)\d{9}$/
        if($reg.test($str)){
            flagname=true;
            $(".ss").html("")
        }else{
            $(".ss").css({"visbility":"visible","color":"red"}).html("输入格式有误")
        }
    })


    $str = document.cookie;  
            $arr = $str.split("; ");
            $tname = ""
            $tpwd = "";
            for( var i = 0 ; i < $arr.length ; i++ ){
                $item = $arr[i].split("=");
                    $tname = $item[0];
                    $tpwd = $item[1];
                    //console.log($tpwd)
                
            }
    $("#login").click(function(){
        if(flagname){
            $iname = $("#uname").val();

			$ipwd = $("#upwd").val();
			if( $tname == $iname && $tpwd == $ipwd ){
				alert("登录成功");
			}else{
				alert("用户名或密码错误");
			}
        }else{

        }
    })


    //叉号效果
    $(".circle").click(function(){
        //alert(1)
        $(this).prev("input").val("")
    })
   

    $("input").focus(function(){
        $(this).next("span").css("visibility","visible")
    })
    $(".circle").click(function(){
        $(this).css("visibility","hidden")
    })


            
    

}


