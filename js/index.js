$(function(){

    var baseline=-50;
    var box1=$("#home").offset().top+baseline;
    var box2=$("#accommodation").offset().top+baseline
    var box3=$("#attraction").offset().top+baseline;
    var box4=$("#dining").offset().top+baseline;
    var box5=$("#offers").offset().top+baseline;
    var box6=$("#footer").offset().top-baseline-100;
    
    $(window).on("scroll",function(){
        var s=$(this).scrollTop();
        
        $(".ham").stop().animate
        ({"opacity":"1"});
        $(".footer_box").removeClass("on")
        

        if(s>=box1&&s<box2){
    
        
            $("#bar li a").removeClass("on")
            $("#bar li").eq(0).children("a").addClass("on")
        }
       
        if(s>=box2&&s<box3){
    
            
            $("#bar li a").removeClass("on")
            $("#bar li").eq(1).children("a").addClass("on")
            $(".page3_text").addClass("on")
            
        }
            
        
    
        if(s>=box3&&s<box4){
           
    
            
            $("#bar li a").removeClass("on")
            $("#bar li").eq(2).children("a").addClass("on")
    
        }

        if(s>=box4&&s<box5){
           
    
            
            $("#bar li a").removeClass("on")
            $("#bar li").eq(3).children("a").addClass("on")
    
        }

        if(s>=box5&&s<box6){
           
    
            
            $("#bar li a").removeClass("on")
            $("#bar li").eq(4).children("a").addClass("on")
    
        }
        
        
    
        if(s>=box6){
    
            
            $("#bar li a").removeClass("on")
            $("#bar li").eq(5).children("a").addClass("on")
            $(".ham").stop().animate({"opacity":"0"})
            $(".footer_box").addClass("on")
            
        }
    
        $("#bar li").on("click",function(){
            target=$(this).children("a").attr("href")
            t=$(target).offset().top;
    
            movescroll(t);
        
        })
    
        function movescroll(t){
    
            $("html, body").stop().animate({"scrollTop":t},1000)
    
        }
    /*상단메뉴고정*/

    $(window).on("scroll",function(){
            var s=$(this).scrollTop()

        if(s>150){
            $("nav").addClass("on")
        }else{
        $("nav").removeClass("on")
        }

        });

var h=0;

$("ul.ham").on("click",function(){

    if(h==0){
        $(".popup").stop().animate({"top":"0"},500);
        $(".ham>li:nth-of-type(1)").stop().animate({"height":"0"},500);
        $(".ham>li:nth-of-type(3)").stop().animate({"height":"0"},500);

        h=1;
    }

    else{

        $(".popup").stop().animate({"top":"-1500px"},1000)
        $(".ham>li:nth-of-type(1)").stop().animate({"height":"1px"},500);
        $(".ham>li:nth-of-type(3)").stop().animate({"height":"1px"},500);
        h=0;
    }

});

            
    });

    $(".popup>li>a").on("click",function(){
        $(".popup").stop().animate({"top":"-1500px"},1000)
        $(".ham>li:nth-of-type(1)").stop().animate({"height":"1px"},500);
        $(".ham>li:nth-of-type(3)").stop().animate({"height":"1px"},500);
    })

    /*day & night*/
    
    $(".moon").on("click",function(){
        $(".home_opacity").stop().animate({"opacity":"1"},1000)
    })
    $(".sun").on("click",function(){
        $(".home_opacity").stop().animate({"opacity":"0"},1000)
    })
    
    /*page2 li box*/
    $(".page2_box>li").on("click",function(){
        $(".page2_box>li").removeClass("on")
        $(this).addClass("on")
    })

    /*page2 li box for tablet & mobile*/
   

    $(function(){

        var total=$(".page2_box_mo>li").length;
        var mm=0;
    
        start();
    
        function start(){
    
            time = setInterval(function(){
                if(mm==total-1){
                    mm=0;
                }
                else{
                    mm++
                }
        
                $(".page2_box_mo>li").fadeOut()
                $(".page2_box_mo>li").eq(mm).fadeIn()
                $(".page2_mickey>li").removeClass("on")
                $(".page2_mickey>li").eq(mm).addClass("on")
            },2500)
    
        }

        $(".right").on("click",function(){
            clearInterval(time);
            if(mm==total-1){
                mm=0;
            }
            else{
                mm++
            }
            
            $(".page2_box_mo>li").fadeOut()
            $(".page2_box_mo>li").eq(mm).fadeIn()
            $(".page2_mickey>li").removeClass("on")
            $(".page2_mickey>li").eq(mm).addClass("on")
            start();
            })

        $(".left").on("click",function(){
            clearInterval(time);
            if(mm==0){
                mm=total-1;
            }
            else{
                mm--
            }
                
            $(".page2_box_mo>li").fadeOut()
            $(".page2_box_mo>li").eq(mm).fadeIn()
            $(".page2_mickey>li").removeClass("on")
            $(".page2_mickey>li").eq(mm).addClass("on")
            start();
            })

        $(".page2_mickey>li").on("click",function(){
            clearInterval(time);
            
            mm=$(this).index()
            
            ison = $(this).hasClass("on")
            
            if(ison==true){
                            
            $(".page2_box_mo>li").eq(mm).fadeIn()
            $(".page2_mickey>li").removeClass("on")
            $(".page2_mickey>li").eq(mm).addClass("on")
            start();
            
            }
            else{
                    
            $(".page2_box_mo>li").fadeOut()
            $(".page2_box_mo>li").eq(mm).fadeIn()
            $(".page2_mickey>li").removeClass("on")
            $(".page2_mickey>li").eq(mm).addClass("on")
            start();
            
            }
                            
            })   

    })

     /*page5 li box*/
     $(".page5_box>li").on("click",function(){
        $(".page5_box>li").removeClass("on")
        $(this).addClass("on")
    })
    /*page5 li box tablet & mobile*/
    $(function(){

        var total=$(".page5_box>li").length;
        var b5=0;
    
        start();
    
        function start(){
    
            time = setInterval(function(){
                if(b5==total-1){
                    b5=0;
                }
                else{
                    b5++
                }
        
                $(".page5_box_mo>li").fadeOut()
                $(".page5_box_mo>li").eq(b5).fadeIn()
                $(".page5_mickey>li").removeClass("on")
                $(".page5_mickey>li").eq(b5).addClass("on")
            },2500)
    
        }

        $(".right").on("click",function(){
            clearInterval(time);
            if(b5==total-1){
                b5=0;
            }
            else{
                b5++
            }
            
            $(".page5_box_mo>li").fadeOut()
            $(".page5_box_mo>li").eq(b5).fadeIn()
            $(".page5_mickey>li").removeClass("on")
            $(".page5_mickey>li").eq(b5).addClass("on")
            start();
            })

        $(".left").on("click",function(){
            clearInterval(time);
            if(b5==0){
                b5=total-1;
            }
            else{
                b5--
            }
                
            $(".page5_box_mo>li").fadeOut()
            $(".page5_box_mo>li").eq(b5).fadeIn()
            $(".page5_mickey>li").removeClass("on")
            $(".page5_mickey>li").eq(b5).addClass("on")
            start();
            })

        $(".page5_mickey>li").on("click",function(){
            clearInterval(time);
            
            b5=$(this).index()
            
            ison = $(this).hasClass("on")
            
            if(ison==true){
                            
            $(".page5_box_mo>li").eq(b5).fadeIn()
            $(".page5_box_mo>li").removeClass("on")
            $(".page5_mickey>li").eq(b5).addClass("on")
            start();
            
            }
            else{
                    
            $(".page5_box_mo>li").fadeOut()
            $(".page5_box_mo>li").eq(b5).fadeIn()
            $(".page5_mickey>li").removeClass("on")
            $(".page5_mickey>li").eq(b5).addClass("on")
            start();
            
            }
                            
            })   

            /*
            $(".page5_box_mo>li").on("mouseenter",function(){
                clearInterval(time);
                
            $(".page5_box_mo>li").on("mouseleave",function(){
                   
                start();
                
                })
                
                                  

            })*/  

    })
});