//加数量
$('#table1 tbody').on('click', '.addnum', function() {
	var val = $(this).prev().val();
	//	console.log(val);
	val++;
	if(val > 100) {
		val = 100;
	}
	//设置内容
	$(this).prev().val(val);
	//小计
	price($(this)); //把点击当前节点当成实参传过去
	var arr = checked(); //判断哪行被选中，存到该数组中
	allnum(arr); //传被选中的行的下标过去，那边做累计处理
	allprice(arr);
	//获取当前点击的数据的对应id(在渲染时我已经给tr添加了自定义属性)：
	var sid = $(this).parent().parent().attr('sid');
	//	console.log(sid);
	//将点击的商品的数量传给后台，然后存进数据库
	$.ajax({
		type: "get",
		data: {
			'sid': sid,
			'num': val
		},
		url: "../api/jiesuan.php",
		async: true
	});
});

//减数量
$('#table1 tbody').on('click', '.cutnum', function() {
	var val = $(this).next().val();
	//	console.log(val);
	val--;
	if(val <= 0) {
		val = 1;
	}
	//设置内容
	$(this).next().val(val);
	//小计
	price($(this));
	var arr = checked();
	allnum(arr);
	allprice(arr);
	//获取当前点击的数据的对应id(在渲染时我已经给tr添加了自定义属性)：
	var sid = $(this).parent().parent().attr('sid');
	console.log(sid);
	//将点击的商品的数量传给后台，然后存进数据库
	$.ajax({
		type: "get",
		data: {
			'sid': sid,
			'num': val
		},
		url: "../api/jiesuan.php",
		async: true
	});
});

//小计
function price(now) {
	var pri = now.parent().prev().text(); //获取到单价
	//	console.log(pri);
	pri = $.trim(pri); //去掉前后空格
	pri = pri.substring(1);
	//  console.log(pri);
	//获取数量
	var num = now.parent().find('input').val();
	//  console.log(num);
	var allnowprice = pri * num;
	now.parent().next().html('￥' + allnowprice.toFixed(2));
}

//当前行删除
$('#table1 tbody').on('click', '.del', function() {
	//	console.log(this);
	var res = confirm('您确定要删除这个选项吗？');
	if(res) {
		$(this).parent().parent().remove();
	}
	updata();
	//获取当前点击的数据的对应id(在渲染时我已经给tr添加了自定义属性)：
	var sid = $(this).parent().parent().attr('sid');
	console.log(sid);
	//将点击的商品的数量传给后台，然后存进数据库
	$.ajax({
		type: "get",
		data: {
			'sid': sid,
		},
		url: "../api/delete.php",
		async: true
	});
});

//刷新
function updata() {
	//	var inputs=$('#table1 tbody tr .good_check').lenght;
	//	console.log(inputs);
	if($('#table1 tbody tr .good_check').length == 0) {
		$('#list').remove();
		$('#table').remove();
		$('#main_3').text('您的购物车没有商品，快去商城添加吧').css('color', 'green'); //当删除到最后一个时，所有信息都没有
	}
}

//全选
var istrue = true; //做一个开关
$('#table1 thead').on('click', '.allcheck', function() {
	allCheck();
	var arr = checked();
	allnum(arr);
	allprice(arr);
});
$('#list li').on('click', '.allchecks', function() {
	allCheck();
	var arr = checked();
	console.log(arr);
	allnum(arr);
	allprice(arr);
	//获取当前点击的数据的对应id(在渲染时我已经给tr添加了自定义属性)：
	var sid = checked();
	//	console.log(sid);
	//将点击的商品的数量传给后台，然后存进数据库
	$.ajax({
		type: "get",
		data: {
			'sid': sid
			//			'num':val
		},
		url: "../api/jiesuan.php",
		async: true
	});
});

////点两个全选框都能全选
function allCheck() {
	//attr()加普通属性      title    prop() 加有行为的属性
	if(istrue) {
		$('#table1 tbody tr .good_check').prop('checked', 'checked');
		$('#table1 .allcheck').prop('checked', 'checked');
		$('#list li .allchecks').prop('checked', 'checked');
	} else {
		$('#table1 tbody tr .good_check').removeAttr('checked');
		$('#table1 .allcheck').removeAttr('checked');
		$('#list li .allchecks').removeAttr('checked');
	}
	istrue = !istrue;
}

//删除多行
$('#list li').on('click', '.alldele', function() {
	var arr = checked(); //被选中的行
	//	console.log(arr);
	var res = confirm('您确定要删除这些选项吗？');
	if(res) {
		//删除arr下标对应的行
		for(var i = arr.length - 1; i >= 0; i--) {
			//从后面开始删除
			$('#table1 tbody tr .good_check').eq(arr[i]).parent().parent().remove();
		}
	}
	updata();
});

//循环判断被选中的行
function checked() {
	var arr = []; //设置一个空数组，等会被选中的就把下标存起来
	//	var arrid=[];//设置一个空数组，放置被选中的行的id(根据arr数组的下标找id)
	var len = $('#table1 tbody tr .good_check').size(); //这个长度是所有的复选框的个数
	//   console.log(len);
	for(var i = 0; i < len; i++) {
		if($('#table1 tbody tr .good_check').eq(i).prop('checked')) {
			//如果当前的复选框被选中，证明不为空
			arr.push(i);
		}
	}
	return arr; //把存有被选中的行的下标的数组丢出来给别人用
}

//总数量
function allnum(arr) {
	//	console.log(arr);
	var num = 0; //总数量
	for(var i = 0; i < arr.length; i++) {
		num += parseInt($('#table1 tbody tr .nownum').eq(arr[i]).val());
		//		console.log(num);
	}
	$('#list li .allnum').html(num);
}

//总价
function allprice(arr) {
	var price = 0;
	for(var i = 0; i < arr.length; i++) {
		var nowtotal = $('#table1 tbody tr .nowallprice').eq(arr[i]).text();
		//		console.log(nowtotal);
		nowtotal = $.trim(nowtotal);
		nowtotal = nowtotal.substring(1);
		//      console.log(nowtotal);//当前小计
		price += nowtotal * 1; //小计循环相加
		//      console.log(price);
	}
	$('#list li .allprice').html(price.toFixed(2));
}

//单选
$('#table1 tbody').on('click', '.good_check', function() {
	var arr = checked();
	if(arr.length == $('.good_check').size()) {
		//		console.log($('.good_check').size());
		//都被选中了
		$('#list li .allchecks').prop('checked', 'checked');
		$('#table1 thead .allcheck').prop("checked", 'checked');
		//三个都被选中了，下次点击全选按钮是为了全不选
		istrue = false;
	} else {
		$('#list li .allchecks').removeAttr("checked");
		$('#table1 thead .allcheck').removeAttr("checked");
		//证明没有选中全部
		isCheacked = true;
	}
	var arr = checked();
	allnum(arr);
	allprice(arr);
	var num = $(this).parent().parent().find('.nownum').val();
	var sid = $(this).parent().parent().attr('sid');
	console.log(num);
	$.ajax({
		type: "get",
		data: {
			'sid': sid,
			'num': num
		},
		url: "../api/jiesuan.php",
		async: true
	});

});

//手动输入改变总价
$('#carts').on('keyup', '.nownum', function() {
	price($(this));
	var arr = checked();
	allnum(arr);
	allprice(arr);
});

//清空购物车
$('#list #qingkong').click(function() {
	var res = confirm('你确定要清空购物车吗?');
	if(res) {
		$('#table1').remove();
		var allnum = 0;
		$.ajax({
			type: "get",
			data: {
				allnum: 0
			},
			url: "../api/alldelete.php",
			async: true,
			success: function(str) {

			}
		});
		$('#main_3').text('您的购物车没有商品，快去商城添加吧').css('color', 'green'); //当删除到最后一个时，所有信息都没有
	}
});

//点击结算时，提示请先登录
$('#list #jiesuan').click(function() {
	var res = confirm('您没有登录，是否跳转登录页面？');
	if(res) {
		location.href = 'login.html';
	}
});

//获取id
function query(_name) {
	var str = location.search; // str="?a=1&b=2"
	if(str != "") {
		var arr = str.substring(1).split("&"); //"a=1&b=2".split("&") -> ["a=1","b=2"]
		for(var i = 0, len = arr.length; i < len; i++) {
			var a = arr[i].split("="); // "a=1".split("=") -> ["a","1"]
			if(a[0] == _name) {
				return a[1];
			}
		}
	}
}

//从订单表获取数据进行数据渲染
$.ajax({
	type: "get",
	url: "../api/cart.php",
	async: true,
	success: function(str) {
		//		console.log(str);
		var data = JSON.parse(str);
		//		console.log(data);
		var html1 = '';
		for(var i = 0; i < data.length; i++) {
			html1 += `	<tr sid=${data[i].gid}>
									<td><input type="checkbox" class="good_check" /></td>
									<td>
										<h5 class="fl"><img src="${data[i].url}" /></h5>
										<h4 class="fl">
											<p class="goodname">${data[i].gname}</p>
											<p>颜色/种类：无</p>
										</h4>

									</td>
									<td>
										<p>
											<i>积</i>
											<a>${data[i].jifen}</a>
										</p>
										<p>
											<i>促</i>
											<a>${data[i].jifen}</a>
										</p>
									</td>
									<td class="nowprice">￥${data[i].price}</td>
									<td><span class="cutnum">-</span><input type="text" name="nownum" class="nownum" value="${data[i].num}" /><span class="addnum">+</span></td>
									<td class="nowallprice">￥${data[i].price}</td>
									<td>
										<input type="button" id="shop" value="立即购买" /><br>
										<a href="#" class="del">删除</a>
									</td>
									<td class="mianyun">
										<p>￥0</p>
										<p>免运费</p>
									</td>
								</tr>`;
		}
		$('#table1 tbody').html(html1);

	}
});

// 接收url中的参数
function query(_name) {
	var str = location.search; // str="?a=1&b=2"
	if(str != "") {
		var arr = str.substring(1).split("&"); //"a=1&b=2".split("&") -> ["a=1","b=2"]
		for(var i = 0, len = arr.length; i < len; i++) {
			var a = arr[i].split("="); // "a=1".split("=") -> ["a","1"]
			if(a[0] == _name) {
				return a[1];
			}
		}
	}
}
