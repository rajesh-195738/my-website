$(document).ready(function() {
    shanghai.sliderShow();
    shanghai.navBg();
});

var shanghai = {
    sliderShow: function() {        
        $(".sliderShow").click(function(){
            var bg_url = $(this).css('background-image');
    // ^ Either "none" or url("...urlhere..")
    bg_url = /^url\((['"]?)(.*)\1\)$/.exec(bg_url);
    bg_url = bg_url ? bg_url[2] : ""; // If matched, retrieve url, otherwise ""    
    $('.cardEsCenter').css('background-image', 'url(' + bg_url + ')');
        });
    },
    navBg: function() {  
        $('.navbar-toggler').click(function() {
            var $image = $(".navbar").toggleClass('transform');
          });
    }
}



