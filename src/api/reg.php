<?php
//该接口的功能：接收用户名和密码，插入到数据库
	
	include 'connect.php';
	
	//接收参数
	$username=isset($_POST['data']) ? $_POST['data'] : '';
	$password=isset($_POST['psw']) ? $_POST['psw'] : '';
	
//	echo $username.' '.$password;

	//sql语句写好：插入数据
	$sql="insert into username(name,password) values('$username','$password')";
	//执行语句：插入成功会返回true
	$res=$conn->query($sql);
	
	if($res){
		//插入成功
		echo 'yes';
	}
	else{
		echo 'no';
	}
?>