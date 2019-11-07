let hidden_menu_icon=document.querySelector(".hidden_menu_icon");
let hidden_navbar=document.querySelector(".hidden_navbar");

hidden_menu_icon.onclick=function(){
    if(hidden_navbar.style.height=="0px"){
        hidden_navbar.style.height="300px";
    }
    else{
        hidden_navbar.style.height="0px";
    }
}

$("#experts .inner").hover(
    function(){
    $( this ).find(".info").fadeIn( 200 );
    },
    function(){
        $( this ).find(".info").fadeOut( 100 );
    }   
)

$("#features #shortcut_button").hover(
    function(){
    $( this ).find(".info").fadeIn( 200 );
    },
    function(){
        $( this ).find(".info").fadeOut( 100 );
    }   
)

$("#costumizer").mouseover(function(){
    if(window.innerWidth>1036){
        $(this).find(".img_one").css({"left":"50%","opacity":"1"});
        $(this).find(".img_two").css({"right":"50%","opacity":"1"});
    }
})

$("#features").mouseover(function(){
    if(window.innerWidth>1036){
        $(this).find(".text").css({"left":"0%","opacity":"1"});
    }
})

$("#features .costum_pages").mouseover(function(){
    if(window.innerWidth>1036){
        $(this).find(".text_costum").css({"left":"0%","opacity":"1"});
    }
})

$("#features .woo .mini_navbar li").click(function(){
    $("#features .woo .mini_navbar li").removeClass("active");
    if($(this).hasClass("active")==false){
        $(this).addClass("active");
    }
})

$("#dynamic_nav .navbar ul li a").click(function(){
    $("#dynamic_nav .navbar ul li a").removeClass("active");
    if($(this).hasClass("active")==false){
        $(this).addClass("active");
    }
})

$("#features .woo .mini_navbar .integrity").click(function(){
    $("#features .woo .image img").attr("src","Images/x-wooslide-integrity.png");
})

$("#features .woo .mini_navbar .renew").click(function(){
    $("#features .woo .image img").attr("src","Images/x-wooslide-renew.png");
})

$("#features .woo .mini_navbar .icon").click(function(){
    $("#features .woo .image img").attr("src","Images/x-wooslide-icon.png");
})

$("#features .woo .mini_navbar .ethos").click(function(){
    $("#features .woo .image img").attr("src","Images/x-wooslide-ethos.png");
})

$("#video_context").hover(
    function(){
        $("#video_context_link").css("color","white");
    },
    function(){
        $("#video_context_link").css("color","gray");
    }   
)

$("#integrity").hover(
    function(){
        $("#video_context_link").css("color","white");
    },
    function(){
        $("#video_context_link").css("color","gray");
    }   
)

$("#extensions").hover(
    function(){
        $("#extensions_link").css("color","white");
    },
    function(){
        $("#extensions_link").css("color","gray");
    }   
)

$("#cornerstone").hover(
    function(){
        $("#cornerstone_link").css("color","white");
    },
    function(){
        $("#cornerstone_link").css("color","gray");
    }   
)

$("#experts").hover(
    function(){
        $("#experts_link").css("color","white");
    },
    function(){
        $("#experts_link").css("color","gray");
    }   
)

$("#costumizer").hover(
    function(){
        $("#costumizer_link").css("color","white");
    },
    function(){
        $("#costumizer_link").css("color","gray");
    }   
)

$("#features").hover(
    function(){
        $("#features_link").css("color","white");
    },
    function(){
        $("#features_link").css("color","gray");
    }   
)

$("#demos").hover(
    function(){
        $("#demos_link").css("color","white");
    },
    function(){
        $("#demos_link").css("color","gray");
    }   
)

$("#buy").hover(
    function(){
        $("#buy_link").css("color","white");
    },
    function(){
        $("#buy_link").css("color","gray");
    }   
)

$("footer").hover(
    function(){
        $("#buy_link").css("color","white");
    },
    function(){
        $("#buy_link").css("color","gray");
    }   
)