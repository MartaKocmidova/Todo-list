// check off specific todos b clicking

$("ul").on("click", "li", function(){
    //if li is gray change it back to black else gray
    // if($(this).css("color") === "rgb(128, 128, 128)"){
    //     $(this).css({
    //         textDecoration: "none",
    //         color: "black"
    //     });
    // } else {
    //     $(this).css({
    //         color: "rgb(128, 128, 128)",
    //         textDecoration: "line-through"
    //     });
    // } 
    $(this).toggleClass("completed"); 
});

//click on x to delete

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
       var todoText =  $(this).val();
       $(this).val("");
       $("ul").append("<li><span><i class='fas fa-trash-alt'></i></i></span> " + todoText + "</li>")
    }
})

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})