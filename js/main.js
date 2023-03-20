$(".menu").click(function(){
    $("nav").toggleClass("attivo");
    $(".first").toggleClass("firstOpen");
    $(".second").toggleClass("secondOpen");
    $(".third").toggleClass("thirdOpen");
  });

  $(".wrapperNavContent h2").click(function(){
    $(".dentro").removeClass("dentro");
    $(".active").removeClass("active");
});

$(".indietro").click(function(){
    $(".withSidePage").removeClass("vh100");
    $(".indietro").removeClass("opacity1");
    $(".withSidePage").removeClass("dentro");
    $(".dentro").removeClass("dentro");
    $(".active").removeClass("active");
});
$(".bottoneRestauro").click(function(){
    $(".restauro").addClass("dentro");
    $(".withSidePage").addClass("vh100");
    $(".bottoneRestauro").addClass("active");
    $(".indietro").addClass("opacity1");
});
$(".bottoneCo-produced").click(function(){
    $(".co-produced").addClass("dentro");
    $(".bottoneCo-produced").addClass("active");
    $(".withSidePage").addClass("vh100");
    $(".indietro").addClass("opacity1");

});
$(".bottonePhotochemical").click(function(){
    $(".photochemical").addClass("dentro");
    $(".bottonePhotochemical").addClass("active");
    $(".withSidePage").addClass("vh100");
    $(".indietro").addClass("opacity1");
});

