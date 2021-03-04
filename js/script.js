$(document).ready(function($){

//var mydata = JSON.parse('context-data')

$("#siteplan-click").click(function(){
    $('#change-image').attr('src', 'images/Site_Plan_20210302.png');
    $('#change-image').attr('class', 'siteplan');
});

$("#sectioncut-click").click(function(){
    $('#change-image').attr('src', 'images/Section_Cut_EW_FacingNorth_20210303.png');
    $('#change-image').attr('class', 'sectioncut');
});

//make this a ref to a class or id instead of all spans
$(".select-diagram").click(function(){
    $('.select-diagram').removeClass('active');
    $(this).addClass('active');
});


$(".more-info").click(function(){
    $(this).siblings("p").toggle();
});


//$(".roof-detail").click(function(){
//    $()
//}

});