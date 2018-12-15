//登陆页的轮播图

var alis = $('#login_main .main_1 .slider_img li'); //所有的li
var iw = alis.eq(0).width(); //获取一个li的宽度

//将所有图片放在右侧，第一张在可视区域即可
$('#login_main .main_1 .slider_img li').css('left', iw);
$('#login_main .main_1 .slider_img li').eq(0).css('left', 0);

//动态创建焦点
var html = '';
for(var i = 0; i < alis.length; i++) {
	html += '<span></span>';
}
$('#login_main .main_1 .light').html(html);
$('#login_main .main_1 .light span:first').addClass('active'); //第一张高亮显示

//开定时器让图片动起来
var now = 0; //当前图片下标
var timer = null;

clearInterval(timer);
timer = setInterval(next, 2000);

//下一张
function next() {
	//旧的
	$('#login_main .main_1 .slider_img li').eq(now).animate({
		'left': -iw
	}, 1000);
	now = ++now > $('#login_main .main_1 .slider_img li').length - 1 ? 0 : now; //now++如果到了最后一张，就归零
	//如果用now++,右边的now一直取到6时，才会大于length,图片会取到下标6，会出现一张空白
	//新的
	$('#login_main .main_1 .slider_img li').eq(now).css('left', iw); //新的一张快速放在右侧
	$('#login_main .main_1 .slider_img li').eq(now).animate({
		'left': 0
	}, 1000);
	light();
}
//焦点跟随
function light() {
	//焦点高亮跟随
	$('#login_main .main_1 .light span').eq(now).addClass('active').siblings().removeClass('active');

}

//点击左右按钮切换图片

$('#login_main').hover(function() {
	//鼠标经过执行这里的代码
	clearInterval(timer);
}, function() {
	//鼠标离开执行这里的代码
	clearInterval(timer);
	timer = setInterval(next, 2000);
});

//上一页函数
function prev() {
	//旧的
	$('#login_main .main_1 .slider_img li').eq(now).animate({
		'left': iw
	}, 1000); //旧的挪到右侧
	now = --now < 0 ? $('#login_main .main_1 .slider_img li').length - 1 : now; //范围约束
	//新的
	$('#login_main .main_1 .slider_img li').eq(now).css('left', -iw); //快速放在左侧
	$('#login_main .main_1 .slider_img li').eq(now).animate({
		'left': 0
	}, 1000); //缓慢进入可视区
}

//焦点跟随和焦点点击切换
$('#login_main .main_1 .light span').mouseover(function() {
	var _this = $(this).index(); //用_this去接收焦点的下标
	if(now < _this) { //如果当前页<即将点击点击的图片的下标（从右侧进来）
		//旧的
		$('#login_main .main_1 .slider_img li').eq(now).animate({
			'left': -iw
		}, 1000);

		//新的瞬间放回右侧
		$('#login_main .main_1 .slider_img li').eq(_this).css('left', iw);
		$('#login_main .main_1 .slider_img li').eq(_this).animate({
			'left': 0
		}, 1000);

		now = _this; //更新
	}
	if(now > _this) {
		//从左侧进来
		//旧的
		$('#login_main .main_1 .slider_img li').eq(now).animate({
			'left': iw
		}, 1000);
		//新的瞬间放回左侧
		$('#login_main .main_1 .slider_img li').eq(_this).css('left', -iw);
		$('#login_main .main_1 .slider_img li').eq(_this).animate({
			'left': 0
		}, 1000);
		now = _this; //更新
	}
	light();
});

//登陆
$('#btn').click(function() {
	var data = $('#login_main #name').val();
	var psw = $('#login_main #psw').val();
	$.ajax({
		type: "post",
		url: "../api/login.php",
		data: {
			'data': data,
			'psw': psw
		},
		async: true,
		success: function(str) {
			//console.log(str);
			if(str == 1) {
				var res = confirm('登陆成功 ，是否跳转主页？');
				if(res) {
					//登陆状态
					var userpsw=data.slice(0,3)+'****'+data.slice(-4);
					setCookie('status',userpsw,1,'/');
					self.location = '../index.html';
				} else {
					return false;
				}

			} else {
				alert("登陆失败，用户名不存在或密码错误，请先注册或正确输入密码,是否去注册？");
				$('#login_main #name').val("");
				$('#login_main #psw').val("");
			}
		}
	});
});


