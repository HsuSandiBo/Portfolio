<?php

session_start();
// print_r($_SESSION);
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width" initial-scale="1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
<style>
    .container{
        text-align: center;
        display: block;
        /* width: 100%; */
    }
    .card{
        /* text-align: center; */
        /* width: 14rem; */
        height: 100%;
        margin-top: 15%;
    }
    .card img{
        width: 200px;
        height: 200px;
        border-radius: 1em;
        box-shadow: 1em;
    }
    .card-body p{
        font-size: 1.2em;
        line-height: 2em;
    }
</style>
</head>
<body>
    <div class="container">
        <div class="card text-center">
            <div class="card-body">
                <img src="../images/welcome.jpg" class="image-card-top" alt="welcomeSunshine">
                <h2 class="card-title">Welcome <?php echo $_SESSION['data']['first_name'] ?>  <?php echo $_SESSION['data']['last_name'] ?> !!!</h2>
                <p>
                    Hello! This is Sunshine Photography.<br>
                    Create your precious <b><i><?php echo $_SESSION['data']['subject'] ?></i></b> memories with our services...
                </p>
            </div>
        </div>
    </div>
    
</body>
</html>