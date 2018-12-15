<?php
	//此接口的功能是获取详情页的这条数据的信息，然后插入数据库的订单表
	//连接数据库
	$sid=isset($_GET['sid']) ? $_GET['sid'] : '';
	$url=isset($_GET['url']) ? $_GET['url'] : '';
	$gname=isset($_GET['gname']) ? $_GET['gname'] : '';
	$content=isset($_GET['content']) ? $_GET['content'] : '';
	$price=isset($_GET['price']) ? $_GET['price'] : '';
	$jifen=isset($_GET['jifen']) ? $_GET['jifen'] : '';
	$num=isset($_GET['num']) ? $_GET['num'] : '';
	echo $url;
	include 'connect.php';
	
	//写插入语句
	$sql="insert into cart(gid,url,gname,content,price,jifen,num) VALUES('$sid','$url','$gname','$content','$price','$jifen','$num')";
	//执行查询语句
	$res=$conn->query($sql);
	
	
	if($res){
//		echo $url;
	}
	
	//关闭连接数据库
	
    $conn->close();//关闭数据库的链接
?>