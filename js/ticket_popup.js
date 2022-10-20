$(function(){
    state=0;
    $('#bot_bar .ticket a').click(function(){
       if ( state==0) {
        $('#ticket_popup').animate({bottom:0},500);
        $(this).addClass("ticket_close");
        state=1;}
        else{
            $('#ticket_popup').animate({bottom:'-100vh'},500);
            $(this).removeClass("ticket_close");
            state=0;
        } 
               // $('#bot_bar .ticket_open').display({none})
        // $('#bot_bar .ticket_open').display({block})
    })
 
    $('#ticket_popup .ticket_popup_close"').click(function(){
     $('#ticket_popup').animate({right:'-100%'},500);
    })

})