//放大镜
$(document).ready(function() { //在文档加载后激活函数：
	$("#exzoom").exzoom({
		autoPlay: false,
	}); //方法调用，务必在加载完后执行

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

//数据库渲染
$.ajax({
	type: "get",
	url: "../api/inform.php",
	async: true,
	data: {
		'sid': query('sid')
	},
	success: function(str) {
		//			console.log(str);
		//          console.log(sid);
		var data = JSON.parse(str);
		//			console.log(data);
		var html = '';
		var html2 = '';
		var html3 = '';
		var html4 = '';
		for(var i = 0; i < data.length; i++) {

			html = `<li id="surl"><img src="${data[i].url}"/></li>`;
			html2 += `<a href="#">${data[i].gname}</a>`
			html3 += `<a class="con">${data[i].content}</a>`;
			html4 += `<p class="fl">
								<span><i>￥${data[i].price}</i>
                         			<a>6.7折</a>
                         		</span>
								<span><a>价格：</a>￥178</span>
								<span>积分：<a id="jifen">${data[i].jifen}</a></span>
							</p>
							<p class="fr">
								<span><a>45</a> 人已团购 ，<a>233 </a>人已关注</span>
								<span>剩余2天23时43分20秒</span>
							</p>`;
		}
		$('#exzoom .exzoom_img_ul').html(html);
		$('#inform_main .main_right .main_right_1').html(html2);
		$('#inform_main .main_right .main_right_2').html(html3);
		$('#inform_main .main_right .main_right_3').html(html4);
	}
});

//商品详情处的选项卡
//给每一个按钮绑定事件
$('#discuss .discuss_1 span').click(function() {
	//排他，清除所有
	$('#discuss .discuss_1 span').attr('class', '');
	//当前的高亮显示
	$(this).attr('class', 'active');
	$('#discuss .discuss_1 span').css('border-bottom', 'none');
	//div跟着切换
	$('#discuss .discuss_1 .con').css('display', 'none');
	$('#discuss .discuss_1 .con').eq($(this).index()).css('display', 'block');
});

//留言板
//点击提交留言
var arr = getCookie('data'); //用数组去接收获取的cookie
//console.log(arr);
if(arr === undefined) {

} else {
	var html = ``;
	for(var i = 0; i < arr.length; i++) {
		update();
		html += `
		<li>${arr[i]}</li>`;
		$('#ul').html(html);
	}
}
$('#btn').click(function() {
	var str = $('#input1').val();
	update();
	var arr = getCookie('data');
	//	console.log(arr);
	if(arr === undefined) {
		arr = [str];
	} else {
		arr.push(str);
	}
	setCookie("data", arr, 9);
});

function update() {
	//从前面插入新内容
	var value = $('#input1').val();
	$li = $('<li></li>');
	$li.html(value);

	$('#ul').prepend($li);
	$('#input1').val('');
}

//回车提交留言
$(document).keydown(function(ev) {
	//console.log(ev.which);//获取键值   键值13是回车键
	var str = $('#input1').val();
	if(ev.which == 13) {
		update();
		var arr = getCookie('data');
		console.log(arr);
		if(arr === undefined) {
			arr = [str];
		} else {
			arr.push(str);
		}
		setCookie("data", arr, 9);
	}
});



//点击购物车+1时，进入购物车页面
$('.main_right_7').on('click', '#goumai', function() {
	var sid = query('sid'); //添加自定义属性//调用开头的获取id的query()函数
	var url=$('#inform_main #surl img').prop('src');//要img的src属性
	var gname=$('#inform_main .main_right .main_right_1 a').text();
	var content=$('#inform_main .main_right .main_right_2 a').text();
	var price=$('#inform_main .main_right .main_right_3 span i').text().substring(1);
	var jifen=$('#inform_main .main_right .main_right_3 #jifen').text();
	var num=1;
	console.log(sid);
	console.log(url);
	console.log(gname);
	console.log(content);
	console.log(price);
	console.log(jifen);
	console.log(num);
	//将id传给后台，后台接收数据后，在将其商品渲染在购物车页面,重新建一个空表，
	//location.href="cart.html?sid="+sid;//获取id
	$.ajax({
		type: "get",
		url: "../api/inform_cart.php",
		data:{
			'sid':sid,
			'url':url,
			'gname':gname,
			'content':content,
			'price':price,
			'jifen':jifen,
			'num':1
		},
		async: true,
		success: function(str) { 
//			var data = JSON.parse(str);
			alert('成功加入购物车');
		}
	});
	
});