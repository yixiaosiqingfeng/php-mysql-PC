<?php
//删除数据
	
	//连接数据库
	header("content-type:text/html;charset=utf-8");
	$allnum=isset($_GET['allnum']) ? $_GET['allnum'] : '';
	include 'connect.php';
	
	//接收参数
	$id=$_GET['id'];
	
	//写删除语句
	//删除操作
	$sql="delete from cart";
	
	//执行查询语句
	$res=$conn->query($sql);
	
	if($res){
		echo '删除成功';
	}
	
	//关闭连接数据库
	
    $conn->close();//关闭数据库的链接
?>