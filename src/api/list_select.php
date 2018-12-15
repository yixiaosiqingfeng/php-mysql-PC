<?php
//查询数据接口
	header("content-type:text/html;charset=utf-8");
	//连接数据库
	$page=$_GET["page"];
	$qty=$_GET["qty"];
	$data=isset($_GET['data']) ? $_GET['data'] : '';
	$check=isset($_GET['check']) ? $_GET['check'] : '';
	$isok=isset($_GET['isok']) ? $_GET['isok'] : '';
//	echo $page.' '.$qty;
	
	include 'connect.php';
	
	$conn->set_charset("utf8");//防止数据库中文乱码
	$sql='select * from ocj ';
	
	//执行查询语句
	$res=$conn->query($sql);
	
	//获取里面的结果集
	$data=$res->fetch_all(MYSQLI_ASSOC);
	
	//转成字符串
	//把字符串形式的json数据传给前端  echo
//	echo json_encode($row);
	
	$datalist=array(
		'total' => count($data),
		'list'  => array_slice($data,($page-1)*$qty,$qty),
		'page'  => $page,
		'qty'   => $qty
	);
	echo json_encode($datalist);
	//关闭连接数据库
	$res->close();//关闭结果集
    $conn->close();//关闭数据库的链接
//	//写查询语句
//	if($data=="moren"){
//		$sql='select * from ocj ';
//	
//	//执行查询语句
//	$res=$conn->query($sql);
//	
//	//获取里面的结果集
//	$data=$res->fetch_all(MYSQLI_ASSOC);
//	
//	//转成字符串
//	//把字符串形式的json数据传给前端  echo
////	echo json_encode($row);
//	
//	$datalist=array(
//		'total' => count($data),
//		'list'  => array_slice($data,($page-1)*$qty,$qty),
//		'page'  => $page,
//		'qty'   => $qty
//	);
//	echo json_encode($datalist);
//	//关闭连接数据库
//	$res->close();//关闭结果集
//  $conn->close();//关闭数据库的链接
//	}
//  if($data=="jiangxu"){
//		$sql='select * from ocj order by price desc';
//	
//	//执行查询语句
//	$res=$conn->query($sql);
//	
//	//获取里面的结果集
//	$data=$res->fetch_all(MYSQLI_ASSOC);
//	
//	//转成字符串
//	//把字符串形式的json数据传给前端  echo
////	echo json_encode($row);
//	
//	$datalist=array(
//		'total' => count($data),
//		'list'  => array_slice($data,($page-1)*$qty,$qty),
//		'page'  => $page,
//		'qty'   => $qty
//	);
//	echo json_encode($datalist);
//	//关闭连接数据库
//	$res->close();//关闭结果集
//  $conn->close();//关闭数据库的链接
//	}
//  
    
    
    //降序
//	if($data=="jiangxu"&$isok){
//		//sql语句写好：
//	$sql="select * from ocj order by price desc";
//	
//	//执行语句：
//	$result=$conn->query($sql);
//	//使用查询结果集
//  //得到数组
//	$row = $result->fetch_all(MYSQLI_ASSOC);
//
//  //释放查询结果集，避免资源浪费
//  $result->close();
//
//  //把结果输出到前台
////  var_dump($row);
//  echo json_encode($row,JSON_UNESCAPED_UNICODE);
//  	$datalist=array(
////		'total' => count($data),
////		'list'  => array_slice($data,($page-1)*$qty,$qty),
////		'page'  => $page,
////		'qty'   => $qty
////	);
////	echo json_encode($datalist);
//
//  // 关闭数据库，避免资源浪费
//  $conn->close();
//	}
	
	
	
	 //默认
//	if($data=="moren"&$check){
//		//sql语句写好：
//	$sql="select * from ocj ";
//	
//	//执行语句：
//	$result=$conn->query($sql);
//	//使用查询结果集
//  //得到数组
//	$row = $result->fetch_all(MYSQLI_ASSOC);
//
//  //释放查询结果集，避免资源浪费
//  $result->close();
//
//  //把结果输出到前台
////  var_dump($row);
//  echo json_encode($row,JSON_UNESCAPED_UNICODE);
//
//  // 关闭数据库，避免资源浪费
//  $conn->close();
//	}
    
?>