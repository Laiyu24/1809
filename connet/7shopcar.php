<?php 
	include 'connet.php';

	$sql='select * from list';

	$res=$conn->query($sql);

	$arr=$res->fetch_all(MYSQLI_ASSOC);

	$res->close();
	
	echo json_encode($arr,JSON_UNESCAPED_UNICODE);
	
	$conn->close();

 ?>