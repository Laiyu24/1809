<?php 
	include 'connet.php';

// 5.加入购物车，把id和数量存到订单表
/*
	*	点击购物车的时候，把id和数量传到数据库保存
	*	通过GET方式接收id和数量
	*	插入到数据中insert into

*/
	//通过GET方式接收id和数量
	$id=isset($_GET['uid']) ? $_GET['uid'] : '01';
	$num=isset($_GET['num']) ? $_GET['num'] : '1';

	// 写插入语句
	$insert="insert into list(id,num) values($id,'$num')";

	$res=$conn->query($insert);
	

	if ($res) {
		# code...
		echo '1';	//插入成功
	}else{
		echo '0';	//插入不成功
	}

	$conn->close();

 ?>