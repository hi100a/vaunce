$(function(){
    $('#bot_bar .ticket').click(function(){
        $('#ticket_popup').animate({right:0},500);
        // $('#bot_bar .ticket_open').display({none})
        // $('#bot_bar .ticket_open').display({block})
    })
 
    $('#ticket_popup .ticket_popup_close"').click(function(){
     $('#ticket_popup').animate({right:'-100%'},500);
    })

})