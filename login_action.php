<?php
	include("db_connect.php");
	session_start();
 
	if($_SERVER["REQUEST_METHOD"] == "POST") {
	  $email = mysqli_real_escape_string($con, $_POST['email']);
      $password = mysqli_real_escape_string($con, $_POST['password']); 
      $result = mysqli_query($con, "select email from student_register where email='$email' AND password='$password'");

      if(mysqli_num_rows($result)>0){
		header("Location: final.html");
      }
      else{
      	echo json_encode(array('status' =>"0",'msg' => "Invalid credentals!"));
      }
	}

 	
