/*************************/
/***** AUTHOR : EMP0699 
/***** DATE : 09-10-2014
/*************************/
$(document).ready(function(){
	$(function(){
    $('input.act-placeholder').each(function(){
        var txtval = $(this).val();
		$(this).addClass('place-holder');
        $(this).focus(function(){
            if($(this).val() == txtval){
                $(this).val('')
				$(this).removeClass('place-holder');
            }
        });
        $(this).blur(function(){
            if($(this).val() == ""){
                $(this).val(txtval);
				$(this).addClass('place-holder');
            }
        });
    });
});
	
});
