$(document).ready(function($){

 var contentText = {
        siteplanData: {new: "Information about this specific aspect of CDY."},
        sectioncutData: "other test"
    }

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
    //make this respond to more filters
    $(this).siblings("p").text(contentText.siteplanData.new);
});

$("#change-image").click(function(){
    $('.more-info').toggleClass('clickable')
})

// Testing


//$(".roof-detail").click(function(){
//    $()
//}

});