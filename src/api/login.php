<?php
//查询数据接口
	
	//连接数据库
	header("content-type:text/html;charset=utf-8");
	include 'connect.php';
	//接收参数
	$username=isset($_POST['data']) ? $_POST['data'] : '';
	$password=isset($_POST['psw']) ? $_POST['psw'] : '';
//	echo $username;
//	echo $password;
	//写查询语句
	$sql="select * from username where name='$username' and password='$password'";
//	echo $sql;
	
	//执行查询语句
	$res=$conn->query($sql);
	
	if($res->num_rows>0){//已经注册有了
		echo "1";  //如果数据有注册，那就传1
	}else{
		echo "0";  //如果没有注册，那就传0
	}
	
    $conn->close();//关闭数据库的链接
?>