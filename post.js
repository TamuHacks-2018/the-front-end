$( document ).ready(function() {

    $.ajax({url: "https://travel-guide-finder.appspot.com/api/cities/get/12", success: function(result){
      console.log(result);
      result.forEach(function(element) {
        console.log(element.name);
        $("#collapseCitys").append('<div class="coolbox"> <input type="checkbox" id="c1" name="cc" />  <label for="c1">' + element.name +" </label> </div>");
      });
    }});


    function loadImages(element, $curr_card, $curr_modal){
      $.ajax({url: "https://travel-guide-finder.appspot.com/api/images/get_images_for_voyage/" + element.id, success: function(result){
        console.log(result);
        // result = result[0];
        count = 0;
        result.forEach(function(e){
            count++;
            console.log($('.carousel-template').clone());
            $curr_image = $($('.carousel-template').clone());
            $curr_image.removeClass("carousel-template");
            if(count == 1){
              $curr_image.addClass("active");
              // $curr_image.append('<img class="d-block w-100" src="' + e + '" alt="unknown slide">');
            }
            console.log("e");
            $curr_image.append('<img class="d-block w-100 fixed-img" src="' + e + '" alt="unknown slide">');
            // console.log(e);
            // $curr_img = $curr_image.find(".d-block");
            // $curr_img.attr("src", e);
            // console.log($curr_img);
            $inner = $curr_card.find("#images-here");
            // // console.log($inner);
            $inner.append($curr_image);

            // $modal_body = $curr_modal.find(".modal-body-row");
            // $modal_body.append("<div class='col-sm-3'>" + '<img class="fixed-img"  style="width:100px !important; height: auto !important;" src="' + e + '" alt="unknown slide"></div>');
        });
        loadGuide(element.guide_id, $curr_card, $curr_modal);
      }});
    }

    function loadGuide(id, $curr_card, $curr_modal){
      $.ajax({url: "https://travel-guide-finder.appspot.com/api/guides/get_by_id/" + id, success: function(result){
          result = result[0];
          // console.log("load_guide" + id);
          // console.log(result );
          $curr_card.find("#profile_pic").attr("src", result.profile_image_name);
          $curr_card.find("#guide_name").append(result.name);

          // $curr_modal.find("#profile_pic").attr("src", result.profile_image_name);
          // $curr_modal.find("#guide_name").append(result.name);
          // console.log(result);
          $(".voyages").append($curr_card);
          $("body").append($curr_modal);
      }});
    }

    $.ajax({url: "https://travel-guide-finder.appspot.com/api/voyages/get/10", success: function(result){
      // console.log(result);
      count = 0;
      result.forEach(function(element) {
        count++;
        console.log(element.title);
        $curr_card = $($('.card_template').clone().html());
        $curr_card.find(".carousel").attr("id", "carousel" + count);
        $curr_card.find(".carousel-control-next").attr("href", "#carousel" + count);
        $curr_card.find(".carousel-control-next").attr("href", "#carousel" + count);
        $curr_card.find(".card-footer").attr("data-target", "#modal" + count);
        $curr_card.removeClass("card_template");
        $curr_card.find("#bio").append(element.description);
        $curr_card.find("#title").append(element.title);

        $curr_modal =  $($('.modal_template').clone());
        $curr_modal.attr("id", "modal" + count);
        $curr_modal.removeClass("modal_template");
        $curr_modal.find("#bio").append(element.description);
        $curr_modal.find("#title").append(element.title);
        $curr_modal.find(".carousel-control-next").attr("href", "#carousel30000" + count);
        $curr_modal.find(".carousel").attr("id", "carousel30000" + count);
        $curr_card.find(".carousel-control-prev").attr("href", "#carousel300000" + count);
        loadImages(element, $curr_card, $curr_modal);
      });
    }});
});
