<template>
	<main>
		<div class="top">
			<router-link to="info"><img src="../../assets/image/touxiag.jpg" class="touxiang"/></router-link>
			<span class="name">Lily</span>
			<span class="qian">个性签名：</span><span class="text">这个人很懒，什么也没留下.</span>
		</div>
		<div class="bottom">
			<ul>
			<li><a href="javascript:;">我的消息</a></li>
			<li><a href="javascript:;">我的收藏</a></li>
			<li><a href="javascript:;">我的关注</a></li>
			<li><a href="javascript:;">我的钱包</a></li>
			<li><a href="javascript:;">关于</a></li>
			<li><a href="javascript:;">设置</a></li>
		</ul>
		</div>
		
	
	</main>
</template>
<style scoped>
	main{
		width:100%;
		height: 90%;
		position: fixed;
		top:0;
		left:0;
		z-index: 1000;
		background: #fff;
	}
	
	.top{
		width:100%;
		height: 35%;
		/*background: bisque;*/
		background: linear-gradient( #f84056, #fff);
		/*background: linear-gradient('top,  bisque 100%, #ffffff 10%');*/
		position: relative;
	}
	
	.top .touxiang{
		width:50px;
		height:50px;
		border-radius: 50%;
		position: absolute;
		top:45%;
		left:50%;
		margin-left:-25px;
		margin-top:-25px;
	}
	
	.top>.name{
		width:100%;
		height: auto;
		text-align: center;
		position: absolute;
		left:0;
		top:65%;
	}
	
	.bottom>ul{
		overflow: hidden;
	}
	
	.bottom>ul>li{
		width:100%;
		height:40px;
		border-bottom: 1px solid #ddd;
	}
	
	.bottom>ul>li>a{
		text-decoration: none;
		color:#333333;
		line-height: 40px;
		display:block;
	}
	
	.bottom>ul>li>a:after{
		content:'>';
		float:right;
		margin-right: 10%;
		color:#999999;
	}
	
	.qian{
		display:block;
		width:25%;
		float:left;
		position: absolute;
		left:13%;
		top:83%;
	}
	
	.text{
		width:51%;
		float:left;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp:1;
		-webkit-box-orient:vertical;
		position: absolute;
		left:35%;
		top:83%;
		padding-left:5px;
	}
</style>