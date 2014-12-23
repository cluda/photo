---
parent: no-page
---
$.get("{{ site.baseurl }}/background_pictures.csv", function (data) {
  var sliderImages = data.split(',');
  $('body').css('backgroundImage', 'url(' + sliderImages[0] + ')');

  var url = document.URL;
  var filename = url.substring(url.lastIndexOf('/')+1);
  console.log( filename );

    if ( filename === "" || filename === "index.html" ) {
        var i = 0;
        setInterval(function () {
            $('body').css('backgroundImage', 'url(' + sliderImages[i] + ')');
            i = i + 1;
            if (i >= sliderImages.length) {
                i = 0;
            }
        }, 4000);
    }

});

$('.js-accordion-trigger').bind('click', function (e) {
  jQuery(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
  jQuery(this).parent().toggleClass('is-expanded');
  e.preventDefault();
  jQuery(this).toggleClass( "minus-sign" );
  jQuery(this).toggleClass( "plus-sign" );
});
