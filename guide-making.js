login = function(){


      var form = new FormData();
      form.append("name", $('#name').val());
      form.append("description", $('#gds').val());
      form.append("guide_id", 1);
      form.append("city_name", $('#city').val());
      images = []

      count = 0;
      $('#pictures').val().split(', ').forEach(function(element){
        images[count++] = { url: element, description: "dum"};
      });
      form.append("images", images);


      // console.log(images);
      // return;

      var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://travel-guide-finder.appspot.com/api/voyages/create",
          "method": "POST",
          "processData": false,
          "contentType": false,
          "mimeType": "multipart/form-data",
          "data": form
        }

      $.ajax(settings).done(function (response) {

        console.log(response);

      });

      // window.location.replace("post.html");
}
