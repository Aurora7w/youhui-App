<template>
	<main id="box">
		<div class="top">
			<p class="login">登录</p>
			<p class="register">注册</p>
		</div>
		<div class="nav">
			<ul>
				<li class="active">账号密码登录</li>
				<li>手机号快捷登录</li>
			</ul>
		</div>
		<ol>
			<li>账号：<input type="text" placeholder="请输入账号或手机号或邮箱" class="user"/><br/></li>
			<li>密码：<input type="password" placeholder="请输入密码" class="password"/><br/></li>
		</ol>

		<button>登录</button>
		
		<hr />
		<p class="other">其他方式登录</p>
		<div class="ways">
			<ul>
				<li><img src="../../assets/image/qq.png"/></li>
				<li><img src="../../assets/image/weixin.png"/></li>
				<li><img src="../../assets/image/xinwen.png"/></li>
				<li><img src="../../assets/image/taobao.png"/></li>
			</ul>
		</div>
	</main>
</template>

<script>
</script>

<style scoped>
	#box{
		width:100%;
		height: 100%;
		position: fixed;
		top:0;
		left:0;
		z-index: 1000;
		background: #fff;
	}
	.top{
		width:100%;
		height:8%;
		background: #f84056;
		overflow: hidden;
	}
	
	.top>p{
		font-size:18px;
		color:#fff;
		margin-top:4%;
	}
	
	.login{
		margin-left:15%;
		float:left;
	}
	.register{
		float: right;
		margin-right:15%;
	}
	
	.nav{
		width:100%;
		/*height: 8%;*/
		height: 50px;
		border-bottom: 1px solid #ddd;
	}
	
	.nav>ul{
		overflow: hidden;
		width:100%;
		height:100%;
	}
	.nav>ul li{
		width:50%;
		height: 95%;
		float:left;
		font-size:14px;
		color:#333333;
		text-align: center;
		line-height: 50px;
	}
	
	.active{
		color:red !important;
		border-bottom: 2px solid red;
	}
	
	ol>li{
		width:100%;
		height: 40px;
		border:1px solid #ddd;
		margin-top: -1px;
		line-height: 40px;
		padding-left: 10px;
	}
	
	input{
		width:80%;
		border:none;
		outline: none;
		padding-left: 10px;
	}
	
	button{
		width:95%;
		height: 5%;
		margin: 20px 10px;
		background: #f84056;
		color:#fff;
		border:none;
		outline: none;
		text-align: center;
		line-height: 5%;
		font-size: 14px;
		border-radius:5px;
	}
	
	hr{
		width:95%;
		height: 1px;
		
	}
	
	.other{
		width:30%;
		color:#999999;
		margin:30px auto;
		text-align: center;
	}
	
	.ways{
		width:100%;
	}
	
	.ways>ul{
		width:92%;
		overflow: hidden;
		margin: 30px 10%;
	}
	
	.ways>ul li{
		float:left;
		width:23%;
		margin-left:2%;
	}
	
	.ways>ul li img{
		width:35px;
		height: 30px;
	}
	
</style>