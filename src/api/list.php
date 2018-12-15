<?php
	/*
	 	数据很多：
	 		* 分页显示
	 		* 点击（滚动）的时候加载更多
	 		* 
	 	分页：
	 	
	 		* 参数
	 		* page   index     qty 
	 		* 1      0       10
	 		* 2      10     10
	 		* 3      20
	 	
	 		已知：page 和  qty,求出  index
	 		
	 		index=(page-1)*qty
	 * */
	//连接数据库
	
	//分页效果
	$page=$_GET['page'];
	
	echo $page;

	//找文件
	include 'connect.php';
	//写查询语句
	$sql='select * from ocj';
	
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

	
	//格式化数据
	$datalist=array(
		'list'  => array_slice($data,($page-1)*6,6),
		'page'  => $page,
	);
	
	echo json_encode($datalist);
?>