<?php 
	include 'connet.php';
	$id=isset($_GET['id']) ? $_GET['id'] : '1';

	$sel="select * from list where id=$id";

	$res=$conn->query($sel);

	$row = $res->fetch_all(MYSQLI_ASSOC);
	// var_dump($row);
	$res->close();

	echo json_encode($row,JSON_UNESCAPED_UNICODE);

	$conn->close();
 ?>