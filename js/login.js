$(function () {
 $(".errors").hide();
        $('#formname').on('submit', function (e) {

          e.preventDefault();
          $.ajax({
            type: 'post',
            url: 'login_action.php',
            data: $('form').serialize(),
            dataType: "json",
        	enctype: 'multipart/form-data',
            success: function (data) {
              var msgs= JSON.parse(JSON.stringify(data));
              if (msgs.status == "0") {
              	$("#message").removeClass('alert-success');
              	$("#message").attr('class','alert alert-danger alert-dismissable');
              	             	
              	$("#message_type").text(msgs.msg);
              	$(".errors").show();
              }
              else{
              	$("#message").removeClass('alert-danger');
              	$("#message").attr('class','alert alert-success alert-dismissable');
              	$("#message_type").text("");              	
              	$("#message_type").text(msgs.msg);
              	$(".errors").show();
              }
              
            }
          });

        });

      });