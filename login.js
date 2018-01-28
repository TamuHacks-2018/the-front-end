login = function(){
      var form = new FormData();
      form.append("username", $('#username').val());
      form.append("password", $('#password').val());
      console.log($('#username').val());
      console.log($('#password').val());
      console.log(form);
      // return;
      var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://travel-guide-finder.appspot.com/api/login",
          "method": "POST",
          "headers": {
          "cache-control": "no-cache",
          "postman-token": "1ccaec0b-e5b6-47f0-282b-863fb5cdc27a"
        },
          "processData": false,
          "contentType": false,
          "mimeType": "multipart/form-data",
          "data": form
        }

      $.ajax(settings).done(function (response) {

        console.log(response);

      });

      window.location.replace("post.html");
}
