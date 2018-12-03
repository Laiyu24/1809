<?php
include 'connet.php';

    $name=isset($_GET['inp1'])? $_GET['inp1']:'admin';
    // echo $name;
    $sql="select * from laiyu2 where name='$name'";
    $res=$conn->query($sql);
    // vr_duamp($res);
    if($res->num_rows>0){
        echo 0;
    }else{
        echo 1;
    }
    $conn->close();
 ?>