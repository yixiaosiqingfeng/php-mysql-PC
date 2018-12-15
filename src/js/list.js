//list_main_4

//创建节点
function create(odata) {
	var html = '';
	for(var i = 0; i < odata.length; i++) {
		//添加一个自定义属性sid,把id获取到
		html += `<li sid="${odata[i].gid}">
				    			<div class="main_4_1">
				    				<p><img src="${odata[i].url}"/></p>
				    				<p>
				    					<span>正品保障</span>
				    					<span></span>
				    				</p>
				    			</div>
				    			<div class="main_4_2">
				    				${odata[i].gname}
				    			</div>
				    			<div class="main_4_3">
				    				<span>￥${odata[i].price}</span>
				    				<span>
				    					<i class="iconfont icon-qicheqianlian-1-copy"></i>
				    					<a>+1</a>
				    				</span>
				    				<span>去看看</span>
				    			</div>
				    			<div class="main_4_4">
				    				<span class="fl">价格:  ￥29</span>
				    				<span class="fr"><a>8</a>折</span>
				    			</div>
				    			<div class="main_4_5">
				    				<span class="fl">
				    					<a>库存</a>
				    					<a></a>
				    					<a></a>
				    				</span>
				    				<span class="fr">
				    					<i class="iconfont icon-wode"></i>
				    					<a class="num">13</a>
				    					<a class="tuan">人已团购</a>
				    				</span>
				    			</div>
				    			<div class="main_4_6">
				    				<span>
				    					<i class="iconfont icon-wode"></i>
				    					<a>剩余3天以上</a>
				    				</span>
				    			     <span>
				    			     	<a class="num">215</a>
				    			     	<a class="ren">人已关注</a>
				    			     </span>
				    			</div>
				    			
				    		</li>`;
	}

	$('#list_main .list_main_4 ul').html(html);
}



var check = false;
//数据渲染
function fn() {
	check=true;
	$.ajax({
		type: "get",
		data: {
			'page': 1,
			'qty': '6',
			'data': 'moren',
			'check': check
		},
		url: "../api/list_select.php",
		async: true,
		success: function(str) {
			//		console.log(str);
			////	console.log(qty);
			var all = JSON.parse(str);
			//		console.log(all)
			var data = all.list;
			//		console.log(data);
			create(data);
			//		//创建分页节点   qty:6  num:40 节点 40/6
			var count = Math.ceil(all.total / 6); //7
			//		console.log(count);
			var html2 = '';
			for(var j = 0; j < count; j++) {
				html2 += '<li>' + (j + 1) + '</li>';

			}
			$('#list_main .list_main_5 ul').html(html2);
			var index = parseInt(all.page) - 1;
			$('#list_main .list_main_5 ul li').eq(index).attr('class', 'active');

		}

	});
}
fn();

//排序
$('#list_main #price').click(function() {
	$.ajax({
		type: "get",
		data: {
			'page': 1,
			'qty': '6'
		},
		url: "../api/list_desc.php",
		async: true,
		success: function(str) {
			var all = JSON.parse(str);
			//		console.log(all)
			var data = all.list;
			//		console.log(data);
			create(data);
			//		//创建分页节点   qty:6  num:40 节点 40/6
			var count = Math.ceil(all.total / 6); //7
			//		console.log(count);
			var html2 = '';
			for(var j = 0; j < count; j++) {
				html2 += '<li>' + (j + 1) + '</li>';

			}
			$('#list_main .list_main_5 ul').html(html2);
			var index = parseInt(all.page) - 1;
			$('#list_main .list_main_5 ul li').eq(index).attr('class', 'active');

		}

	});
});

//获取id
$('.list_main_4 ul').on('click', 'li', function() {
	var sid = $(this).attr('sid'); //添加自定义属性
	console.log(sid);
	//获取id,然后在它的网址后面拼接一个id,使它能够跳转到相应的详情页
	location.href = "inform.html?sid=" + sid;

});


//绑定事件，点击能够跳转到当前页
$('#list_main #list').on('click', 'li', function() {
	var page = $(this).text(); //获取当前页码
	//	console.log(page);
	$.ajax({
		type: "get",
		data: {
			'page': page,
			'qty': 6
		},
		url: "../api/list_select.php",
		async: true,
		success: function(str) {
			//			console.log(str);
			var all = JSON.parse(str);
			data = all.list;
			//			console.log(data);
			create(data);
			//排他
			$('#list_main .list_main_5 ul li').attr('class', '');
			//当前页高亮
			$('#list_main .list_main_5 ul li').eq(page - 1).attr('class', 'active');
		}
	});
});

