// $("p").css("color","black");

$(document).ready(function() {
    $(".btn-1").click(function() {
        $(".child").parent().css({"color":"red"});
    });
    
    $(".btn-2").click(function() {
        $(".child").parents().css({"color":"blue"});
    });
    
    $(".btn-3").click(function() {
        var input = "."+$(".input-1").val();
        // alert(input);
        if((input==".grandparent")||(input==".greatgrandparent")||(input==".parent"))
        // if($("body").find(input).length!=0)
        {
            $(".child").parentsUntil(input).css({"color":"orange"});
        }
        else 
            {alert("Error Input");}
    });
});

$(".find-btn").click(function(){
    var inp =  "."+$(".find-input").val();
    if((inp==".p1")||(inp==".p2")||(inp==".p3")||(inp==".p4")){
        $(".div1").find(inp).css("color","red");
    }
    else {
        alert("Error Input");
    }
            
});


