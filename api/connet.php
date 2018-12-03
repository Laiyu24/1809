<?php 
	// 配置信息
	
	$servername='localhost';
	$username='root';
	$password='root';
	$database='laiyu';	//数据库名字，必须有填

	// 创建链接,传入配置信息
	$conn=new mysqli($servername,$username,$password,$database);

	// 判断链接是否成功	$conn的方法 $conn->connect_error
	if ($conn->connect_error) {
		# code...
		die('连接失败:'.$conn->connect_error);
	}

	// 查询前设置编码，防止输出乱码
	$conn->set_charset('utf8');
	
	// echo '连接成功';

 ?>