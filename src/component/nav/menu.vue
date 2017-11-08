<template>
	<main>
		<ul class="menu">
			<li class="thumb">
				<router-link to="home"><a href="javascript:;" class="tit">发现</a></router-link>
			</li>
			<li>
				<router-link to="skin"><a href="javascript:;" class="tit">极致美肤</a></router-link>
			</li>
			<li>
			   <router-link to="decoration"><a href="javascript:;" class="tit">个性配饰</a></router-link>
			</li>
			
			<li>
				<router-link to="hot"><a href="javascript:;" class="tit">本周热卖</a></router-link>
			</li>
		</ul>
		<!--<div class="ban">
			<ol class="banner">
				<li>
					<img src="../../assets/image/banner1.png" width="100%"  class="first"/>
				</li>
				<li>
					<img src="../../assets/image/banner2.png" width="100%"  class="second"/>
				</li>
			</ol>
			<ul class="circle">
				<li></li>
				<li></li>
			</ul>
		</div>-->
		<!--轮播图-->
		<mt-swipe :auto="4000">
		  <mt-swipe-item><img src="../../assets/image/banner1.png" width="100%"  class="first"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../assets/image/banner2.png" width="100%"  class="second"/></mt-swipe-item>
		</mt-swipe>
		<div class="icon-container">
		<ul class="icon">
			<li>
				<router-link to='hot'><img src="../../assets/image/logo1.png"/><span>保税区</span></router-link>
			</li>
			<li>
				<router-link to="hot"><img src="../../assets/image/logo2.png"/><span>订单</span></router-link>	
			</li>
			<li>
				<router-link to="hot"><img src="../../assets/image/logo3.png"/><span>类目</span></router-link>	
			</li>
			<li>
				<router-link to="hot"><img src="../../assets/image/logo4.png"/><span>闪购</span></router-link>
			</li>
		</ul>
		</div>
		
		<div class="context-tit">
			<ol>
				<li class="active">今日上新</li>
				<li>明日预告</li>
			</ol>
			
		</div>
		<div class="context-show">
			<div class="container">
				<span class="slogo"><img src="../../assets/image/show.png" width="30px"/></span>
			<p>今日共有12个专场开售</p>
			<ul class="show">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			</div>
			
		</div>
			
		
	</main>
</template>

<script type="text/javascript">
	export default{
		mounted(){

		}
	}
	
	
</script>

<style>
	.mint-swipe{
		width:100%;
		height:100%;
		/*padding-bottom:37%;*/
	}
	
	.mint-swipe-items-wrap{
		position: relative;
	    overflow: hidden;
	    height: 100%;
	    padding-bottom: 37%;
	}
</style>

<style scoped>
	*{
		margin:0;
		padding:0;
		list-style:none;
		text-decoration: none;
	}
	
	main{
		background:#eee;
		margin-bottom:50px;
	}
	
	.menu{
		margin-bottom:5px;
		height: 50px;
	}
	
	.menu{
		width:100%;
		box-sizing:border-box;
		/*padding:10px 30px;*/
		overflow:hidden;
		background:#fff;
	}
	
	.thumb{
		border-bottom: 4px solid red;
	}
	
	.menu li{
		float:left;
		width:26%;
		height: 46px;
		text-align: center;
	}
	
	.menu li:nth-of-type(1){
		width:22%;
	}
	.menu>li .tit{
		font-size:18px;
		color:#333;
		line-height: 50px;
	}

	
	/*.ban{
		width:100%;
		height:200px;
		position: relative;
		overflow: hidden;
	}
	
	.banner{
		position:absolute;
		left:0;
		top:0;
		width:200%;
		
	}
	
	.banner>li{
		width:50%;
		height:300px;
		float:left;
	}
	
	.banner>li>img{
		display:none;
	}
	
	.banner>li>.second{
		display:block;
	}
	
	.circle{
		position: absolute;
		left:50%;
		bottom:10%;
		margin-left:-15px;
	}
	.circle li{
		float:left;
		width:8px;
		height:8px;
		background-color: rgba(255,255,255,0.9);
		border-radius: 50%;
		margin-right:15px;
	}
	
	.active2{
		background: rgba(0,0,0,0.5) !important;
	}*/
	
	.icon-container{
		border:1px solid #ddd;
		margin-top:5px;
		padding:20px;
		background:#fff;
	}
	
	.icon{
		margin-left:20px;
		margin-top:20px;
		
		
		overflow: hidden;
	}
	.icon>li{
		float:left;
		width:20%;
		margin-right:10px;
	}
	.icon>li img{
		display:block;
		width:100%;
	}
	
	.icon>li span{
		display:block;
		font-size:14px;
		color:#333;
		margin:10px 0 0 5px;
	}
	
	.icon>li:nth-of-type(2) span{
		margin:10px 0 0 20px;
	}
	
	.icon>li:nth-of-type(3) span{
		margin:7px 0 0 20px;
	}
	
	.icon>li:nth-of-type(4) span{
		margin:10px 0 0 20px;
	}
	
	.context-tit{
		margin-top:-5px;
	}
	
	.context-tit>ol{
		width:100%;
		overflow: hidden;
		height: 40px;
		background: #fff;
		margin-top:10px;
		padding:15px 0;
	}
	
	.context-tit>ol>li{
		font-size:14px;
		color:#333;
		float:left;
		width:49%;
		text-align: center;
		line-height:40px;	
	}
	.context-tit>ol>li:nth-of-type(1){
		border-right:1px solid #ccc;
	}
	
	.container{
		width:90%;
		margin:0 auto;
		
	}
	
	.context-show{
		background:#fff;
		margin-top:5px;
	
	}
	
	.context-show>.container>img{
		float:left;
	}
	
	.context-show>.container>p{
		font-size:14px;
		color:#999;
		float:left;
		margin-top:32px;
		margin-left:-10px;
	}
	
	.slogo{
		display:block;
		float:left;
		margin-top:30px;
		margin-right:20px;
	}
	
		
	
	.active{
		color:#FF0000 !important;
	}
	
	.show{
		width:100%;
		height: 300px;
		background: #fff;
		padding-top:70px;
		padding-bottom: 300px;
	}
	
	.show>li{
		width:100%;
		height:150px;
		/*overflow:hidden;*/
	}
	
	.show>li>img{
		width:100%;
		height: 220px;
	}
	
	.show>li:nth-of-type(1){
		background:url('../../assets/image/lunbo1.png') no-repeat;
		background-size: 100% 100%;
	}
	
	.show>li:nth-of-type(2){
		background:url('../../assets/image/lunbo2.png') no-repeat;
		background-size: 100% 100%;
	}
	
	.show>li:nth-of-type(3){
		background:url('../../assets/image/lunbo3.png') no-repeat;
		background-size: 100% 100%;
	}
	
	.show>li:nth-of-type(4){
		background:url('../../assets/image/lunbo4.png');
		background-size: 100% 100%;
	}
	
	
	
</style>