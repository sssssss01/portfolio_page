  
        //마우스 움직이기
        $(window).mousemove(function(e){
            $(".cursor").css( {left:e.clientX - 10, top:e.clientY - 10});
        });

        //li 클릭 후 이동하기
        $(".dot ul li").click(function(e){
            e.preventDefault();
            let target = $(this);
            let index = target.index();
            let section = $(".dot_btn").eq(index);
            let offset = section.offset().top;

            $("html, body").animate( {scrollTop : offset}, 600,"easeInQuint" );

        });

        $(".menu li").click(function(e){
            e.preventDefault();
            let target = $(this);
            let index = target.index();
            let section = $(".dot_btn").eq(index);
            let offset = section.offset().top;
            $("html, body").animate( {scrollTop : offset}, 600,"easeInQuint" );
        });


        //스크롤 했을 때
        $(window).scroll(function(){
            let scrollTop = $(this).scrollTop();

            let sscroll = $(window).scrollTop() + $(window).height()/2;
        

            //dot, menu li에 active 붙이기
            $(".dot_btn").each(function(index){                        
                if(scrollTop >= $(".dot_btn").eq(index).offset().top - 2 ){                   
                    $(".dot ul li").eq(index).addClass("active").siblings().removeClass("active"); 
                    $(".menu li").eq(index).addClass("active").siblings().removeClass("active");                  
                }    
                if(sscroll >= $(".dot_btn").eq(index).offset().top){
                   // $(".dot_btn").eq(index).addClass("show").siblings().removeClass("show");
                 //  $(".dot_btn").removeClass("show");
                   $(".dot_btn").eq(index).addClass("show");
                }


                $(".left").each(function(){
                    if( ( $(window).scrollTop() + $(window).height()/2 ) >= $(this).offset().top){
                            $(this).addClass("show");                                           
                   }
                });
        
                                             
            });//active
            
            //menu에 show 붙이기
            if(scrollTop > 0){
                $(".menu").addClass("show");
            }else{
                $(".menu").removeClass("show");
            }

         
            
        }); //스크롤


        //페이지가 시작됐을때
        $(window).ready(function(){
               let scrollTop = $(this).scrollTop();
            
            if(scrollTop >= 0){                   
                $(".intro").addClass("show");
            }
            
        });
