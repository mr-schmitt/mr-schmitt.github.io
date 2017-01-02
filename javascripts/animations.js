$(document).ready(function(){
    $("img").hover(function(){
       $(this).animate({
            opacity: '0.5',
            height: '70px',
            width: '70px'
        });
    },
    function(){
        $(this).animate({
            opacity: '1',
            height: '64px',
            width: '64px'
        });
    }); 
});