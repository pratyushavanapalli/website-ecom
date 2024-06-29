<?php
    $sn ="localhost";
    $un="root";
    $pw="UAPS1234*";
    $db="travel";

    $con = mysqli_connect($sn,$un,$pw,$db);
    if(mysqli_connect_errno())
    {
        echo "fail";
        exit();
    }
    else 
    {
        echo".";
    }
?>