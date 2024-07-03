<?php

namespace Libs\Database;

use PDOException;

class CustomerInfoTable{
    private $db = null;

    public function __construct(MySQL $db){
        $this->db = $db->connect();
    }

    public function insert($data){
        try{
            $query = "INSERT INTO customers(first_name,last_name,email,subject,message,date) 
            VALUES(:first_name, :last_name, :email, :subject, :message, NOW())";

            print_r($data);
            $statement = $this->db->prepare($query);
            $statement->execute($data);

            return $this->db->lastInsertId();
        }catch(PDOException $e){
            return $e->getMessage();
        }
    }
}