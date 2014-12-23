$(document).ready(function () {
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  var callNumber = 1;
  var $fotoramaDiv = $('#my-fotorama').fotorama(); // 1. Initialize fotorama manually.
  var fotorama = $fotoramaDiv.data('fotorama'); // 2. Get the API object.
  var pictures = new Array();
  var tag = $('.tag').text();
  var flickr_user = $('.flickr_user').text();

  console.log(tag);

  function displayPhotos(data) {
    for (var i = 0, l = data.items.length; i < l; i++) {
      pictures.push({img: data.items[i].media.m.replace("_m.jpg", "_b.jpg"), thumb: data.items[i].media.m});
    }

    if (callNumber === 1) {
      console.log("Adding pictures");
      fotorama.load(
        pictures
      );
    }

    if (data.items.length > 19) {
      console.log("Loading more");
      callNumber = callNumber + 1;
      $.getJSON(flickerAPI, {
        tags: tag + callNumber,
        format: "json",
        id: flickr_user
      }, displayPhotos);
    }
    else {
      console.log("Adding pictures");
      fotorama.load(
        pictures
      );
    }
  }

  $.getJSON(flickerAPI, {
    tags: tag + callNumber,
    format: "json",
    id: flickr_user
  }, displayPhotos);

  console.log(pictures);

}); // end ready
