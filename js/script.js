$(document).ready(function($){


$("#siteplan-click").click(function(){
    $('#change-image').attr('src', 'images/Site_Plan_20210302.png');
    $('#change-image').attr('class', 'siteplan');
});

$("#sectioncut-click").click(function(){
    $('#change-image').attr('src', 'images/Section_Cut_EW_FacingNorth_20210303.png');
    $('#change-image').attr('class', 'sectioncut');
});

$("span").click(function(){
    $('span').removeClass('active');
    $(this).addClass('active');
});



});