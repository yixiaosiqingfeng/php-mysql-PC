
//固定定位里的轮播图
//var olis = $('#fix .fix_top_img li'); //所有的li
//var w = olis.eq(0).width(); //获取一个li的宽度
//
////将所有图片放在右侧，第一张在可视区域即可
//$('.fix_top_img li').css('left', w);
//$('.fix_top_img li').eq(0).css('left', 0);
//
////动态创建焦点
//var html2 = '';
//for(var i = 0; i < olis.length; i++) {
//	html2 += '<a></a>';
//}
//$('.fix_top_light').html(html2);
//$('.fix_top_light a:first').addClass('actives'); //第一张高亮显示
//
////开定时器让图片动起来
//var now = 0; //当前图片下标
//var timer2 = null;
//
//clearInterval(timer2);
//timer2 = setInterval(fnext, 4000);
//
//$('#fix').hover(function() {
//	//鼠标经过执行这里的代码
//	clearInterval(timer2);
//}, function() {
//	//鼠标离开执行这里的代码
//	clearInterval(timer2);
//	timer2 = setInterval(fnext, 4000);
//});
//
////下一张
//function fnext() {
//	//旧的
//	$('.fix_top_img li').eq(now).animate({
//		'left': -w
//	}, 1000);
//	now = ++now > $('.fix_top_img li').length - 1 ? 0 : now; //now++如果到了最后一张，就归零
//	//如果用now++,右边的now一直取到6时，才会大于length,图片会取到下标6，会出现一张空白
//	//新的
//	$('.fix_top_img li').eq(now).css('left', w); //新的一张快速放在右侧
//	$('.fix_top_img li').eq(now).animate({
//		'left': 0
//	}, 1000);
//	flight();
//}
////焦点跟随
//function flight() {
//	//焦点高亮跟随
//	$('.fix_top_light a').eq(now).addClass('actives').siblings().removeClass('actives');
//
//}
////焦点跟随和焦点点击切换
//$('.fix_top_light a').click(function() {
//	var _this = $(this).index(); //用_this去接收焦点的下标
//	if(now < _this) { //如果当前页<即将点击点击的图片的下标（从右侧进来）
//		//旧的
//		$('.fix_top_img li').eq(now).animate({
//			'left': -w
//		}, 1000);
//
//		//新的瞬间放回右侧
//		$('.fix_top_img li').eq(_this).css('left', w);
//		$('.fix_top_img li').eq(_this).animate({
//			'left': 0
//		}, 1000);
//
//		now = _this; //更新
//	}
//	if(now > _this) {
//		//从左侧进来
//		//旧的
//		$('.fix_top_img li').eq(now).animate({
//			'left': w
//		}, 1000);
//		//新的瞬间放回左侧
//		$('.fix_top_img li').eq(_this).css('left', -w);
//		$('.fix_top_img li').eq(_this).animate({
//			'left': 0
//		}, 1000);
//		now= _this; //更新
//	}
//	flight();
//});
//
//
//
//
//
//var aLis=$('#fix .fix_top_img li');//所有的li
//var w=aLis.eq(0).width();;//一个li的高度
//
////将所有图片放到右侧，第一张在可视区
//
//$('.fix_top_img li').css('left',w);
//$('.fix_top_img li').eq(0).css('left',0);
//
//
////动态创建焦点
//
//var str='';
//for(var i=0;i<aLis.length;i++){
//	str+='<a>'+i+'</a>';
//}
//
//$('.fix_top_light').html(str);
//
//$('.fix_top_light a:first').addClass('acti');
//
//
////开定时器让图片动起来
//
//var now=0;//当前图片下标
//var timea=null;
//
//clearInterval(timea);
//timea=setInterval(xia,2000);//设置每隔两秒钟切换一个图片
//
//function xia(){
//	//旧的
//	$('.fix_top_img li').eq(now).animate({'left':-w},0);
//	
//	now=++now > $('.fix_top_img li').length-1 ? 0 :now;//now++如果到了最后一张，就归零
//	
//	//新的
//	
//	$('.fix_top_img li').eq(now).css('left',w);//新的一张快速放在右侧
//	$('.fix_top_img li').eq(now).animate({'left':0},0);
//	liang();
//}
//
////焦点跟随
//
//function liang(){
//	//焦点高亮跟随
//	$('.fix_top_light a').eq(now).addClass('acti').siblings().removeClass('acti');
//}
//
//function prev(){
//	//旧的
//	$('.fix_top_img li').eq(now).animate({'left':iH},0);//旧的挪到右侧
//	
//	now=--now < 0 ? $('.fix_top_img li').length-1 : now;//范围约束
//	//新的
//	$('.fix_top_img li').eq(now).css('left',-iH);//快速放在左侧
//	$('.fix_top_img li').eq(now).animate({'left':0},0);//缓慢进入可视区
//}
//
////var odtime=new Date();
////$('#next').hover(function(){
////	//点击切换下一张
////	if(new Date()-odtime >= 500){
////		//当两次点击间隔时间大于800毫秒，就是有效点击
////		xia();
////	}
////	odtime=new Date();
////});
//
//
////焦点跟随和焦点点击切换
//
//$('.fix_top_light a').hover(function(){
//	var _this=$(this).index();
//	
//	if(now<_this){
//		//从右侧进来
//		//旧的挪到左侧
//		$('.fix_top_img li').eq(now).animate({'left':iH},0);
//		
//		//新的放在右侧，挪到可视区
//		$('.fix_top_img li').eq(_this).css('left',-iH);
//		$('.fix_top_img li').eq(_this).animate({'left':0},0);
//		
//		now=_this;
//		
//	}
//	
//	if(now>_this){
//		//从左侧进来
//		//旧的挪到右侧
//		$(' .fix_top_img li').eq(now).animate({'left':iH},0);
//		
//		//新的放在左侧，挪到可视区
//		$('.fix_top_img li').eq(_this).css('left',-iH);
//		$('.fix_top_img li').eq(_this).animate({'left':0},0);
//		
//		now=_this;
//
//	}
//	liang();
//	
//});