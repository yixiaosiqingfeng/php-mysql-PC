<?php
//查询数据接口
	
	//连接数据库
	header("content-type:text/html;charset=utf-8");
	include 'connect.php';
	$sid=isset($_GET['sid']) ? $_GET['sid'] : '';
	//写查询语句
	$sql="select * from ocj where gid='$sid'";
	
	//执行查询语句
	$res=$conn->query($sql);
	
	//获取里面的结果集
	$row=$res->fetch_all(MYSQLI_ASSOC);
	
	//转成字符串
	//把字符串形式的json数据传给前端  echo
	echo json_encode($row);
	
	//关闭连接数据库
	$res->close();//关闭结果集
    $conn->close();//关闭数据库的链接
?>