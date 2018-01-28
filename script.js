(function () {
    var Message;
    Message = function (arg) {
        this.text = arg.text, this.message_side = arg.message_side;
        this.draw = function (_this) {
            return function () {
                var $message;
                $message = $($('.message_template').clone().html());
                $message.addClass(_this.message_side).find('.text').html(_this.text);
                $('.messages').append($message);
                return setTimeout(function () {
                    return $message.addClass('appeared');
                }, 0);
            };
        }(this);
        return this;
    };
    $(function () {
        var getMessageText, message_side, sendMessage;
        message_side = 'right';
        getMessageText = function () {
            var $message_input;
            $message_input = $('.message_input');
            return $message_input.val();
        };
        sendMessage = function (text, side, time) {
            var $messages, message;
            if (text.trim() === '') {
                return;
            }
            $('.message_input').val('');
            $messages = $('.messages');
            // message_side = message_side === 'left' ? 'right' : 'left';
            message_side =side
            message = new Message({
                text: text,
                message_side: message_side
            });
            message.draw();
            return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, time);
        };
        $('.send_message').click(function (e) {
            return sendMessage(getMessageText(), "right", 300);
        });
        $('.message_input').keyup(function (e) {
            if (e.which === 13) {
                return sendMessage(getMessageText(), "right", 300);
            }
        });
        sendMessage('Hello Philip! :)', "left", 300);
        setTimeout(function () {
            return sendMessage('Hi Sandy! I have great sights for you to see in San Diego!', "right", 300);
        }, 1000);
        return setTimeout(function () {
            return sendMessage('Thank you! I am so excited.', "left", 300);
        }, 2000);

        // current = []
        // check_for_messages = function(){
        //   $.ajax({url:"https://travel-guide-finder.appspot.com/api/chat/" + current_user_id + "/" + guide_id, function(result){
        //     var newk = result.chat;
        //     for(var i = current.length; i < newk.length; i++){
        //         sendMessage(current[i].text, current_user_name == current[i].text_owner ? "right" : "left", 200);
        //     }
        //     setTimeout(check_for_messages, 500);
        //   }});
        //
        // }
        // current_user_name = "";
        // current_user_id = 0;
        // guide_id = 1
        // load_initial_messages = function(){
        //
        //   $.ajax({url: "https://travel-guide-finder.appspot.com/api/chat/" + current_user_id + "/" + guide_id, success: function(result){
        //     current = result.chat;
        //     for(var i = 0; i < current.length; i++){
        //       sendMessage(current[i].text, current_user_name == current[i].text_owner ? "right" : "left", 0);
        //     }
        //     setTimeout(check_for_messages, 500);
        //   }});
        // }
        //
        // $.ajax({url: "https://travel-guide-finder.appspot.com/api/current_user_data", xhrFields : {
        //   withCredentials : true
        // }, success:function(result){
        //   current_user_name = result.curr_user_name;
        //   current_user_id = result.curr_user_id;
        //   guide_id = result.other_user_id;
        //   console.log(result);
        //   load_initial_messages();
        // }});
    });
}.call(this));
