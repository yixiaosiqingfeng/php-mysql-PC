<?php
	//连接数据库
	
	include 'connect.php';
	
	//写插入语句
	$sql="insert into username2(uid,name,password) values('2','feifei','123456')";
	
	//执行查询语句
	$res=$conn->query($sql);
	
	
	if($res){
		echo '插入成功';
	}
	
	//关闭连接数据库
	
    $conn->close();//关闭数据库的链接
?>