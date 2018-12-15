<?php
	//接收前端传过来的用户名，然后匹配数据库，查询是否存在该用户
	
	//编码设置
	header("content-type:text/html;charset=utf-8");
	include 'connect.php';
	
	//isset（）是否设置了
	$name=isset($_GET['username']) ? $_GET['username'] :'';//三目运算：前端不传数据的时候，也不会出错
	
//	echo $name;
	
	//查询语句（查询之前连接数据库）
	$sql="select * from username where username='$name'";
//	
//	//执行语句
	$res=$conn->query($sql);
//	
////	var_dump($res);
//	
	if($res->num_rows>0){
		//有这个用户名存在
		echo 'no';
	}else{
		echo 'yes';
	}
	
	
	
	
?>