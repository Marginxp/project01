/**
 * Created by Administrator on 2016/9/29.
 */
$(function () {
    $("#main1 img").hover(function () {
        $(this).css("z-index","10");
        $(this).stop().animate({height:300,width:200},500);
    },function () {
        $("#main1 img").animate({height:242,width:169},500);
        $(this).css("z-index","1");
    });

    $("#main2 img").hover(function () {
        var _left=parseInt($(this).css("left").replace("px",""));
        $(this).animate({left:_left-5},200);
    },function () {
        var _left=parseInt($(this).css("left").replace("px",""));
        $(this).animate({left:_left+5},200);
    })

})