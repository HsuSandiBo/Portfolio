<?php

session_start();

include('../vendor/autoload.php');

use Libs\Database\MySQL;
use Libs\Database\CustomerInfoTable;

$data = ["first_name" => ucfirst($_POST['firstName']) ?? 'Unknown', 
        "last_name" => ucfirst($_POST['lastName']) ?? 'Unknown',
        "email" => strtolower($_POST['email']) ?? 'Unknown',
        "subject" => $_POST['photography'] ?? 'Potraits',
        "message" => $_POST['message'],
];

$_SESSION['data'] = $data;

$customer = new CustomerInfoTable(new MySQL()); //MySQL object for connection to database, table object for manage database
if($customer){
    echo "Database connection open\n";
    $customer->insert($data);
    echo "Done inserting data into database\n";
    header('location: profile.php');
}else{
    echo "Database connection can't open";
}


// echo $first_name, $last_name, $email, $subject, $message;
?>