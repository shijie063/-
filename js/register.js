window.onload = function(){

   

    //验证表单
   //设置cookie
   function setCookie(key,value,day){
        if(day){
            $d=new Date();
            $d.setDate( $d.getDate() + day )
            document.cookie=key+"="+value+";expires"+$d
        }else{
            document.cookie=key+"="+value;
        }
    }

    $("#register").click(function(){
        if($flagtel&&$flagpic&&$flagmes&&$flagpwd&&$flagtwopwd){
            $key=$("#tel").val()
            setCookie($key,$("#pwd").val(),10)
            var str=document.cookie;
            $arr = str.split("; ")
            for(var i = 0 ; i <$arr.length ; i++){
                $item = $arr[i].split("=");
                console.log($item)
                if($item[0] == $key){
                }
            }
            location.href="login.html"
            }else{
                $(".erro").html("有错误项！").css("color","red")
            }
    })





     //验证图形
     $flagpic=null
    $("#pic").blur(function(){
        $reg = /^.{4}$/
        $str = $("#pic").val();
        if($reg.test($str)){
            $(".s1").html("");
            $flagpic=true;
        }else{
            $(".s1").html("输入有误").css({"color":"red","font-size":"12px"})
            $flagpic=false;
        }

    })


    //验证电话号码
    $flagtel=null
    $("#tel").blur(function(){
        $reg = /^1(3|6|5|8|9)\d{9}$/;
        $str = $("#tel").val();
        if($reg.test($str)){
           $flagtel=true
           $(".s2").html("");
        }else{
            $(".s2").html("电话号码有误").css({"color":"red","font-size":"12px"})
           $flagtel=false;
            
        }  
    })

    //验证短信验证码
    $flagmes=null
    $("#mes").blur(function(){
        $reg = /^\d{4}$/
        $str=$("#mes").val();
        if($reg.test($str)){
            $flagmes=true;
            $(".s3").html("");
        }else{
            $(".s3").html("请输入正确的验证码").css({"color":"red","font-size":"12px"});
            $flagmes=false;
        }
    })
    

    //验证密码
    $flagpwd=null
    $("#pwd").blur(function(){
        $reg = /^.{6,16}$/
        $str=$("#pwd").val();
        if($reg.test($str)){
            $flagpwd=true;
            $(".s4").html("");
        }else{
            $(".s4").html("密码必须大于六位小于十六位").css({"color":"red","font-size":"12px"});
            $flagpwd=false;
        }
    })

    $flagtwopwd=null
    $("#twopwd").blur(function(){
        $str=$("#twopwd").val();
        if($str==$("#pwd").val()){
            $flagtwopwd=true;
            $(".s5").html("");
        }else{
            $(".s5").html("输入有误").css({"color":"red","font-size":"12px"});
            $flagtwopwd=false;
        }
    })


   
    $("input").focus(function(){
        $(this).next("span").css("visibility","visible")
    })
    $(".circle").click(function(){
        $(this).css("visibility","hidden")
    })
   

    //叉号效果
    $(".circle").click(function(){
        //alert(1)
        $(this).prev("input").val("")
    })
   



    $("input").focus(function(){
        $(this).css("border-bottom","1px solid #000")
    })
    $("input").blur(function(){
        $(this).css("border-bottom","")
    })

    $("#register").focus(function(){
        $(this).css("border-bottom","")
    })



    //cookie实现注册
    
    



    

}