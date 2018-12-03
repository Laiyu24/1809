<?php
 include 'connet.php';
    $page=isset($_GET['page']) ? $_GET['page'] : '1';
    $qty=isset($_GET['qty']) ? $_GET['qty'] : '5';
    

    
    $index=($page-1)*$qty;
    
    $sql="SELECT * FROM laiyu1 LIMIT $index,$qty";
    
    $res=$conn->query($sql);
    
    $data=$res->fetch_all(MYSQLI_ASSOC);//获取内容部分
    
    $sql2='select * from laiyu1';

    $res2=$conn->query($sql2);
    $row=$res2->num_rows;//
    $goodlist=array(
        'total'=>$row,
        'datalist'=>$data,
        'page'=>$page,
        'qty'=>$qty
    );
    echo json_encode($goodlist,JSON_UNESCAPED_UNICODE);
    $res->close();
    $res2->close();
    $conn->close();
 ?>