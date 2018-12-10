$(document).ready(function()
{
  $(".alert_message").hide();
	$(function(){
		$('#form_re_pass').on('keyup',function(){
			if($('#form_pass').val() == $('#form_re_pass').val()){
        $('#form_re_pass').css("border-color","green");
        $('.alert_message').text("");
        $('.alert_message').text("Password matched");
        $('.alert_message').css("color","green");
        $('.alert_message').show();
			}
			else{
				$('#form_re_pass').css("border-color","red");
        $('.alert_message').text("Password does not matched");
        $('.alert_message').css("color","red");
        $('.alert_message').show();
			}
		});
	});
	$(".errors").hide();
	$(function(){
		$('#dismiss').on('click', function(){
			$(".errors").hide();
		});
	}); 
	
	$(function () {

        $('#register_form').on('submit', function (e) {

          e.preventDefault();
          $.ajax({
            type: 'post',
            url: 'student_register_action.php',
            data: $('form').serialize(),
            dataType: "json",
        	enctype: 'multipart/form-data',
            success: function (data) {
              var msgs= JSON.parse(JSON.stringify(data));
              if (msgs.status == "0") {
              	$("#message").removeClass('alert-success');
              	$("#message").attr('class','alert alert-danger alert-dismissable');
              	$("#message_type").text("");            	
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

      

});