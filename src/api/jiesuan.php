<?php
//查询数据接口
	
	//连接数据库
	header("content-type:text/html;charset=utf-8");
	include 'connect.php';
	$sid=isset($_GET['sid']) ? $_GET['sid'] : '';
	$num=isset($_GET['num']) ? $_GET['num'] : '';
    //更新数据库的订单表
    $sql="update cart set num='$num' where gid='$sid'";
	
	//执行查询语句
	$res=$conn->query($sql);
	
	if($res){
		echo '更新成功';
	}
	
	//关闭连接数据库
	
    $conn->close();//关闭数据库的链接
?>