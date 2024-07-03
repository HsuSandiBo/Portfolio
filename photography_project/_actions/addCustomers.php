<?php

$conn = new mysqli("sql302.infinityfree.com", "if0_34664567_photography", "if0_34664567", "kg8WduyBxqPQZ7z");
if(!$conn){
    die(mysqli_error($conn));
}

$data = ["first_name" => ucfirst($_POST['firstName']) ?? 'Unknown', 
        "last_name" => ucfirst($_POST['lastName']) ?? 'Unknown',
        "email" => strtolower($_POST['email']) ?? 'Unknown',
        "subject" => $_POST['photography'] ?? 'Potraits',
        "message" => $_POST['message'],
];

print_r($data);
$query = "INSERT INTO customers(first_name,last_name,email,subject,message,date) 
          VALUES(:first_name, :last_name, :email, :subject, :message, NOW())";

$statement = $conn->prepare($query);
$statement->execute($data);

// $conn->lastInsertId();

header('location: profile.php');
$conn.close();
?>