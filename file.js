


$(document).ready(function(e) {   
    $(".menu").click(function(){
        $('.menu-content').css('display','block');
        
        })

        $(document).mouseup(function (e) {
            if ($(e.target).closest(".menu").length
                        === 0) {
                $(".menu-content").hide();
            }
        });
 });

 