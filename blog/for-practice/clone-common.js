;$(function($){
	var $login = $('#login');
	var $register = $('#register');
	$('#go-register').on('click',function(){
		$login.hide();
		$register.show();
	});
	$('#go-login').on('click',function(){
		$register.hide();
		$login.show();
	});
	var usernameReg = /^[a-z][a-z0-9_]{2,9}$/i;
	var passwordReg = /^[a-z0-9]{6,9}$/i;
	$('#sub-register').on('click',function(){
		var username = $register.find('[name="username"]').val();
		var password = $register.find('[name="password"]').val();
		var repassword = $register.find('[name="repassword"]').val();

		var errMsg = '';
		var $err = $register.find('.err');
		if(!usernameReg.test(username)){
			errMsg = '用户名必须英文开头，包含下划线、数字、字母2-9位'
		}
		else if(!passwordReg.test(password)){
			errMsg = '密码不合规范'
		}
		else if(password!=repassword){
			errMsg = '两次密码输入不一致'
		}
		if(errMsg){
			#err.html(errMsg);
			return;
		}else{
			errMsg = '';
			$.ajax({
				url:'/user/register',
				type:'post',
				dataType:'json',
				data:{
					username:username,
					password:password
				}
			})
			.done(function(result){
				if(result.status == 0){
					$('#go-login').trigger('click')
				}else{
					$err.html(result.message);
				}
			})
			.fail(function(err){
				#err.html('<h1>请求失败，请稍后再试</h1>')
			})
		}
	})
	$('#sub-login').on('click',function(){
		var username = $login.find('name="username"');
		var password = $login.find('name="password"');
		var errMsg ='';
		var $err = $login.find('.err');
		if(!usernameReg.test(username)){
			errMsg = '用户名不合规范'
		}
		else if(!passwordReg.test(password)){
			errMsg = '密码格式不合规范'
		}
		if(errMsg){
			$err.html(errMsg)
		}else{
			errMsg = '';
			$.ajax({
				url:'/user/login',
				type:'post',
				dataType:'json',
				data:{
					 username:username,
					 password:password
				}
			})
			.done(function(result){
				if(result.status == 0){
					window.location.reload();
				}else{
					$err.html(result.message);
				}
			})
			.fail(function(){
				$err.html('请求失败，请再次请求')
			})
		}
	})
})(jQuery)