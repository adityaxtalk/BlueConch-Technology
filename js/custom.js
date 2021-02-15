$(function(){
   $('#error').hide(); 
    var error_message=false;
    $('#price-min').on('change',function(){
        var value=$('#price-min').val();
        if((value<200)&&(value>500)){
            $('#error').html('*should be in between $200 and $500 ');
            $('#error').show();
            error_message=true;
        }
        else
            {
                $('#error').hide();
            }
    });
    $('#price-max').on('change',function(){
        var value=$('#price-max').val();
        if((value>500)&&(value<200)){
            $('#error').html('*should be in between $200 and $500');
            $('#error').show();
        
        }
        else
            {
                $('#error').hide();
            }
    });
    
});