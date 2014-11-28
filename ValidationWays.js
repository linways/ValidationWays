/*
 * jQuery JavaScript Validation - ValidationWays
 * 
 * You can use this code in any manner you want, without any copyright headers, notices, or other attribution
 *  
 * Author: ARUN PS.
 * Company: Linways Technologies Pvt.Ltd
 * Website: www.linways.com
 * contact : info@linways.com
 *  
 * Date: 2014-11-27 18:30:16 -0500
 * 
 */
<script type="text/javascript">

jQuery.fn.jquery_validation  = function(component, classname)
{
    $(component+' .'+classname+' .errors').remove();
    var check_list = {};
        
    check_list.regx_name = /^[A-Za-z\s.]+$/;
    check_list.regx_general = /^[A-Za-z0-9\s.\-\/]{2,30}$/;
    check_list.regx_alphabets = /^[A-z]+$/;
    check_list.regx_place_institute = /^[A-Za-z0-9\s.,\-&\/]{2,100}$/;
    check_list.regx_description = /^[A-Za-z0-9\s.,\-&%@()?\/]{2,500}$/;
    check_list.regx_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    check_list.regx_percentage = /(^100([.]0{1,3})?)$|(^\d{1,2}([.]\d{1,3})?)$/;
    check_list.regx_digit =/^[0-9]+$/;
    check_list.regx_year = /^\d{4}$/;
    check_list.regx_nonzerodigit = /^[1-9][0-9]*$/;
    check_list.regx_date_dmy = /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-[0-9]{4}$/;
    check_list.regx_date_ymd = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    check_list.regx_entrancemarks = /^[-+]?[0-9]+(\.[0-9]{1,3})?$/;
    check_list.regx_rupees = /^[1-9]\d*(((,\d{3}){1})?(\.\d{1,2})?)$/;
    check_list.regx_signed_rupees = /^[+-]?[1-9]\d*(((,\d{3}){1})?(\.\d{1,2})?)$/;
    check_list.regx_unsigned_floatno = /^(?:\d*\.\d{1,4}|\d+)$/;
    check_list.regx_unsigned_floatno_max2_2 = /^(?:\d{1,2}\.\d{1,2}|\d+)$/;
    check_list.regx_bloodgroup = /^(A|B|AB|O)[+-]$/;
    check_list.regx_mobileno= /^((0091)|(\+91)|0?)[789]{1}\d{9}$/;
    check_list.regx_mark = /^[+]?[0-9]+(\.[0-9]+)?$/; 
    check_list.regx_username = /^[a-z0-9_-]{3,16}$/;
    check_list.regx_password = /^[a-z0-9_-]{6,18}$/;
    check_list.regx_strongpassword = /^(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    check_list.regx_weakpassword = /^[\S\s]+$/;
    
    var error_flag = 0;
    
    $(component+' .'+classname+' .required').each(function(index, element)
    {
        var elem = $(this);
        var id = $(this).attr('id');
        
        var data = $.trim(this.value);  
        var classes = [];
        var mandatory = 0;
        classes= $(this).attr('class').split(/\s+/);
        if($.inArray("mandatory", classes)!==-1)
        {
            mandatory =1;
        }
        
        var cls = "";    
        for(var i=0; i<=classes.length; i++)
        { 
            cls = classes[i];
            if(check_list[cls] != undefined && (mandatory ==1 || data!=""))
            {
              
                if((!(check_list[cls]).test(data)) && (elem.is(':visible')))
                {
                    if($("#"+id+"_error").length)
                    {
                        $("#"+id+"_error").html("<span class='errors' style='margin: 0 10px; font-style: italic; font-size: 14px; color:red;'>Invalid Entry</div>");
                    }
                    else
                    {
                        elem.after("<span class='errors' style='margin: 0 10px; font-style: italic; font-size: 14px; color:red;'>Invalid Entry</div>");
                    }
                    error_flag = 1;
                }
            }           
        }
    }); 
    
    return error_flag;   
};

</script>
