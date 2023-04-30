$(document).ready(function(){
    $('.menu-toggle').on('click',function(){
        $('.nav').toggleClass('showing');
    });
    $('.dash-drop').on('click',function(){
        $('.drop-down').toggleClass('showing');
    });
});

