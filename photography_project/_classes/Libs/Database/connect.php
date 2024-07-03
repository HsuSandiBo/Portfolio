<?php

namespace Libs\Database;

$conn = new mysqli("sql302.infinityfree.com", "if0_34664567_photography", "if0_34664567", "kg8WduyBxqPQZ7z");
if(!$conn){
    die(mysqli_error($conn));
}