<?php

include("db_connect.php");
 if($_SERVER["REQUEST_METHOD"] == "POST") {
 	

 	$name = mysqli_real_escape_string($con, $_POST['name']);
 	$degree =mysqli_real_escape_string($con, $_POST['degree']);
 	$gender =mysqli_real_escape_string($con, $_POST['gender']);
 	$phone =mysqli_real_escape_string($con, $_POST['phone']);
 	$mail = mysqli_real_escape_string($con, $_POST['email']);
 	$password =mysqli_real_escape_string($con, $_POST['password']);
 	$query =mysqli_query($con,"select email from student_register where email='$mail'");
 	$query1 =mysqli_query($con,"select phone from student_register where phone='$phone'");
 	if(!filter_var($mail , FILTER_VALIDATE_EMAIL)){
 		echo "you entered wrong mail";
 	}
 	else{
 		if(mysqli_num_rows($query)>0){
 			echo json_encode(array('status'=>"0",'msg' =>  "Email id already exists"));
 		}
 		else{
 			if(mysqli_num_rows($query1)>0){
 				echo json_encode(array('status' =>"0",'msg' =>  "phone number already exists"));
 			}
 			else{
 				if(mysqli_query($con, "INSERT INTO student_register (name,degree,gender,phone,email,password) values ('$name','$degree','$gender','$phone','$mail','$password')")){
 					echo json_encode(array('status' =>"1",'msg' =>"successfully registered"));
 					$file = "form_data.json"; 					
 					if(file_exists('form_data.json')){
 						$current_data = file_get_contents('form_data.json');
 						$array_data = json_decode($current_data, true);
 						$form_data = array(
 								'name' => $name,
 								'degree' => $degree,
 								'gender' => $gender,
 								'phone' => $phone,
 								'mail' => $mail,
 								'password' => $password
 							);
 						$array_data[] = $form_data;
 						$json_string = json_encode($array_data, JSON_PRETTY_PRINT);
						file_put_contents('form_data.json', $json_string, FILE_APPEND);
 					}
 				}
 				else{
 					echo json_encode(array('status' =>"0",'msg' => "oops!"));
 				}
 			}

 		}
 	}
}
mysqli_close($con);
?>