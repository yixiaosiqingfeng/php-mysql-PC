//登陆状态
var name=getCookie('status');
console.log(name);
if(name!='undefined'){
	$('#denglu').html('欢迎'+name+`&nbsp;&nbsp<a href='#' id='out'>退出</a>`);
}else{
	$('#denglu').html('登陆');
}

$('#denglu').on('click','#out',function(){
	if($(this).text()=='退出'){
//		console.log(222);
		setCookie('status','','-1','/');
		$('#denglu').html('登陆');
		self.location='index.html';
	}
});





//二级菜单栏下选项卡
//鼠标移入全部商品下的二级菜单时
$('#nav ul li .shop .childnav').hover(function() {
	//鼠标经过执行这里的代码
	//排他
	$('#nav ul li .shop .tab').css('display', 'none');
	//选项卡跟着切换
	$('#nav ul li .shop .tab').eq($(this).index()).css('display', 'block');

}, function() {
	//鼠标离开执行这里的代码
	$('#nav ul li .shop .tab').css('display', 'none');
	//	$('#nav ul li .shop .tab' ).eq($(this).index().css('display','block'));
});

/*
 
 	轮播图制作步骤：
 	
 		* 将所有图片放到右侧，第一张在可视区
 		* 动态创建焦点
 		* 开定时器让图片动起来
 		* 左右按钮切换图片
 		* 焦点跟随和焦点点击切换
*/
var lis = $('#banner .slider_img li'); //所有的li
var iw = lis.eq(0).width(); //获取一个li的宽度

//将所有图片放在右侧，第一张在可视区域即可
$('.slider_img li').css('left', iw);
$('.slider_img li').eq(0).css('left', 0);

//动态创建焦点
var html = '';
for(var i = 0; i < lis.length; i++) {
	html += '<span></span>';
}
$('.light').html(html);
$('.light span:first').addClass('active'); //第一张高亮显示

//开定时器让图片动起来
var now = 0; //当前图片下标
var timer = null;

clearInterval(timer);
timer = setInterval(next, 5000);

//下一张
function next() {
	//旧的
	$('.slider_img li').eq(now).animate({
		'left': -iw
	}, 1000);
	now = ++now > $('.slider_img li').length - 1 ? 0 : now; //now++如果到了最后一张，就归零
	//如果用now++,右边的now一直取到6时，才会大于length,图片会取到下标6，会出现一张空白
	//新的
	$('.slider_img li').eq(now).css('left', iw); //新的一张快速放在右侧
	$('.slider_img li').eq(now).animate({
		'left': 0
	}, 1000);
	light();
}
//焦点跟随
function light() {
	//焦点高亮跟随
	$('.light span').eq(now).addClass('active').siblings().removeClass('active');

}

//点击左右按钮切换图片

$('#banner').hover(function() {
	//鼠标经过执行这里的代码
	clearInterval(timer);
}, function() {
	//鼠标离开执行这里的代码
	clearInterval(timer);
	timer = setInterval(next, 5000);
});

//点击上一页
$('.prev').click(function() {
	//点击时调用函数
	prev();
});

//上一页函数
function prev() {
	//旧的
	$('.slider_img li').eq(now).animate({
		'left': iw
	}, 1000); //旧的挪到右侧
	now = --now < 0 ? $('#slider_img li').length - 1 : now; //范围约束
	//新的
	$('.slider_img li').eq(now).css('left', -iw); //快速放在左侧
	$('.slider_img li').eq(now).animate({
		'left': 0
	}, 1000); //缓慢进入可视区
}

//点击下一页
var oldtime = new Date();
$('.next').click(function() {
	if(new Date() - oldtime >= 500) {
		next(); //当两次点击间隔时间大于800毫秒，就是有效点击
	}
	oldtime = new Date(); //更新时间
});

//焦点跟随和焦点点击切换
$('.light span').click(function() {
	var _this = $(this).index(); //用_this去接收焦点的下标
	if(now < _this) { //如果当前页<即将点击点击的图片的下标（从右侧进来）
		//旧的
		$('.slider_img li').eq(now).animate({
			'left': -iw
		}, 1000);

		//新的瞬间放回右侧
		$('.slider_img li').eq(_this).css('left', iw);
		$('.slider_img li').eq(_this).animate({
			'left': 0
		}, 1000);

		now = _this; //更新
	}
	if(now > _this) {
		//从左侧进来
		//旧的
		$('.slider_img li').eq(now).animate({
			'left': iw
		}, 1000);
		//新的瞬间放回左侧
		$('.slider_img li').eq(_this).css('left', -iw);
		$('.slider_img li').eq(_this).animate({
			'left': 0
		}, 1000);
		now = _this; //更新
	}
	light();
});

//main里的选项卡
//给每一个按钮绑定事件
$('#main .main_7 .main_7_right span').click(function() {
	//排他，清除所有
	$('#main .main_7 .main_7_right span').attr('class', '');
	//当前的高亮显示
	$(this).attr('class', 'active_1');
	$('#main .main_7 .main_7_right .main_7_right_top').css('border-bottom', '1px solid black');
	//div跟着切换
	$('#main .main_7 .main_7_right .con').css('display', 'none');
	$('#main .main_7 .main_7_right .con').eq($(this).index()).css('display', 'block');
});

//数据渲染
//需求：点击按钮的时候，读取数据库的内容，显示到这个页面

//前端发送请求，接口查询数据返回给前端
//main_1
$.ajax({
	type: "get",
	url: "api/select.php",
	async: true,
	success: function(str) {
		//		console.log(str);
		var data = JSON.parse(str);
		var html1 = '';
		for(var i = 1; i < 7; i++) {
			html1 += `<li>
						<p><img src="${data[i].url}"/></p>
						<p>${data[i].gname}</p>
						<p>${data[i].content}</p>
						<p>￥${data[i].price}</p>
					</li>`;
		}

		$('#main .main_1 .main_1_bottom .main_1_bottom_right ul').html(html1);
	}
});

//main_2
$.ajax({
	type: "get",
	url: "api/select.php",
	async: true,
	success: function(str) {
		//		console.log(str);
		var data = JSON.parse(str);
		var html2 = '';
		for(var i = 7; i < 10; i++) {
			html2 += `<li>
						<p><img src="${data[i].url}"/></p>
						<p>${data[i].gname}</p>
						<p>￥${data[i].price}</p>
					</li>`;
		}

		$('#main .main_2 .main_2_bottom .main_2_bottom_right ul').html(html2);
	}
});


//main_3
$.ajax({
	type: "get",
	url: "api/select.php",
	async: true,
	success: function(str) {
		//		console.log(str);
		var data = JSON.parse(str);
		var html3 = '';
		for(var i = 10; i < 13; i++) {
			html3 += `<li>
						<p><img src="${data[i].url}"/></p>
						<p>${data[i].gname}</p>
						<p>￥${data[i].price}</p>
					</li>`;
		}

		$('#main .main_3 .main_3_bottom .main_3_bottom_right ul').html(html3);
	}
});

//main_6
$.ajax({
	type: "get",
	url: "api/select.php",
	async: true,
	success: function(str) {
		//		console.log(str);
		var data = JSON.parse(str);
		var html6 = '';
		for(var i = 13; i < 18; i++) {
			html6 += `<li>
						<p><img src="${data[i].url}"/></p>
						<p>${data[i].gname}</p>
						<p>￥${data[i].price}</p>
					</li>`;
		}

		$('#main .main_6 .main_6_bottom ul').html(html6);
	}
});


//返回顶部
$(function() {
	$('.fix_bottom').hide(); //隐藏go to top按钮

	$(window).scroll(function() {
		// console.log($(this).scrollTop());

		//当window的scrolltop距离大于1时，go to 
		if($(this).scrollTop() > 100) {
			$('.fix_bottom').fadeIn();//开始执行函数
		} else {
			$('.fix_bottom').fadeOut();
		}
	});

	$('.fix_bottom a').click(function() {
		$('html ,body').animate({
			scrollTop: 0
		}, 300);
		return false;
	});

});

