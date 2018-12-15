//正则验证
//手机号
var Regular=false;//开关，用来判断正则是否合格。默认不合格
function fn1() {
	if(username.value.trim() == '') {
		$('#reg_main #span1').html('不能为空');
		$('#reg_main #span1').css('color', 'red');
		Regular = false; //不合格
	} else {
		if(span1.innerHTML = /^1[356789]\d{9}$/.test(username.value)) {
			$('#reg_main #span1').html('合格');
			$('#reg_main #span1').css('color', 'green');
			Regular = true;
			selec();
		} else {
			$('#reg_main #span1').html('不合格');
			$('#reg_main #span1').css('color', 'red');
			Regular = false;
		}
	}

}
username.onkeyup = fn1;
//登陆密码
function fn2() {
	if(span2.innerHTML = /\d[A-z]|[A-z]\d/.test(password.value)) {
		$('#reg_main #span2').html('合格');
		$('#reg_main #span2').css('color', 'green');
		Regular = true;
	} else {
		$('#reg_main #span2').html('不合格');
		$('#reg_main #span2').css('color', 'red');
		Regular = false;
	}
}
password.onkeyup = fn2;
//确认密码
function fn3() {
	if(span3.innerHTML = (password.value == yespassword.value)) {
		$('#reg_main #span3').html('密码一致');
		$('#reg_main #span3').css('color', 'green');
		Regular = true;
	} else {
		$('#reg_main #span3').html('两次密码不一致');
		$('#reg_main #span3').css('color', 'red');
		Regular = false;
	}

}
yespassword.onkeyup = fn3;


//查看用户是否存在
var isok = false; //开关，用来判断是否能注册
function selec() {
	var data = $('#reg_main #username').val();
	$.ajax({
		type: "post",
		url: "../api/reg2.php",
		async: true,
		data: {
			'data': data
		},
		success: function(str) {
			//			console.log("str" + str);
			var num = Number(str); //传过来的是0和1,0代表用户名不存在，1代表用户名已存在
			if(num) {
				//如果可以注册，把开关置成true
				isok = false;
				alert('该用户名已经存在')
				$('#reg_main #span1').css('color', 'red');
				$('#reg_main #username').val('');
				$('#reg_main #password').val('');
				$('#reg_main #yespassword').val('');
			} else {
				isok = true;
				alert('该用户名可以注册')
				$('#reg_main #span1').css('color', 'green');

			}
		}
	});
}

//2、注册功能  借助reg.php
function zhuce() {
	var data = $('#reg_main #username').val();
	var psw = $('#reg_main #password').val();
	var rpsw = $('#reg_main #yespassword').val();
	$.ajax({
		type: "post",
		url: "../api/reg.php",
		async: true,
		data: {
			'data': data,
			'psw': psw
		},
		success: function(str) {
			if(psw == rpsw) {
				if(str == 'yes') {
					alert('注册成功');

				} else {
					alert('该号码已注册');
				}
			}

		}
	});
}


//如果同意协议
var checked = false; //默认没选中
$('#reg_main #check').click(function() {
	if(!checked) {
		$('#reg_main #check').prop('checked', 'checked');
		checked = true;
		//如果选中，点击注册按钮时可以注册 
		$('#reg_main #btn').click(function() {
			if( Regular == true & isok == true ) {
				zhuce();
			}else{
				alert('请正确输入');
			}

		});
	} else {
		$('#reg_main #check').prop('checked', '');
		checked = false;
	}
});