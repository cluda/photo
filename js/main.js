---
    parent: no - page
---

    window.onload = function () {
    // All code comes here

    window.fbAsyncInit = function () {
        FB.init({
            appId: '1517316898553926',
            xfbml: true,
            version: 'v2.2'
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    !function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.async = true;
            js.src = p + '://platform.twitter.com/widgets.js';
            fjs.parentNode.insertBefore(js, fjs);
        }
    }(document, 'script', 'twitter-wjs');
}


$.get("{{ site.baseurl }}/background/list.md", function (data) {
    var sliderImages = [];
    var lines = data.split("\n");

    for (var i in lines) {
        console.log('thisLine:' + lines[i]);
        var startOfAddress = lines[i].indexOf("](/") + 2;
        var endOfAddress = lines[i].length - (startOfAddress + 1);
        sliderImages.push(lines[i].substr(startOfAddress, endOfAddress).replace(/ /g, '%20'));
    }

    $('body').css('backgroundImage', 'url('+ sliderImages[0] + ')');

    var url = document.URL;
    var filename = url.substring(url.lastIndexOf('/') + 1);

    if ((filename === "" || filename === "index.html") && sliderImages.length > 1) {
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
    jQuery(this).toggleClass("minus-sign");
    jQuery(this).toggleClass("plus-sign");
});

$('body').attr('oncontextmenu', 'return false;');