<template>
	<main>
		<div class="contain">
		<div class="top">
			<ol>
				<li><img src="../../assets/image/wifi.png" width="30px" /></li>
				<li><img src="../../assets/image/xinhao.png" width="20px"/></li>
				<li><img src="../../assets/image/dianliang.png" width="18px"/></li>
				<li><span class="time">12:61</span></li>
			</ol>
		</div>
		
		<ul class="bottom">
			<li><img src="../../assets/image/arrow.png" class="back"/></li>
			<li><a>订单确认</a></li>
		</ul>
		<ol class="tit">
			<li><a href="javascript:;">收货人信息</a></li>
			<li><a href="javascript:;">保存地址</a></li>
		</ol>
		
		<input type="name" placeholder="姓名" width="100%"/><br/>
		<input type="tel" placeholder="手机号码" width="100%"/><br/>
		<input type="text" placeholder="省份-城市-小区" class="city"/><br/>
		<input type="text" placeholder="详细地址"/>
		</div>
		
		<div class="wrap">
			<div class="pay" v-show="msg">
				<span class="close" @click="close">X</span>
				<h4>付款详情</h4>
				<span>？</span>
				<ul>
					<li class="xiangqing">
						<span>订单信息</span>
						<span class="news">星星珍珠耳钉</span>
					</li>
					<li class="count">
						<p class="counts">支付宝账号</p>
						<p>123456</p>
					</li>
					<li class="way">
						<p class="money_tit">工商银行</p>
						<p class="total">￥766.00</p>
					</li>
					<li class="fukuan">
					<p>应付金额：</p>
					<p>766.00元</p>
						<p class="confirm">确认并付款</p>
					</li>
				</ul>
			</div>
		</div>
		
	</main>
</template>

<script>
	export default{
	}
</script>

<style scoped>
	main{
			width:100%;
			/*height: 590px;*/
			background:#eee;
			position: position;
			left:0;
			top:0;
		}
		.contain{
		width:100%;
		height:auto;
		position: fixed;
		left:0;
		top:0px;
		/*background: #eee;*/
		z-index: 1000;
	}
	
	.top{
		overflow:hidden;	
	}
	
	.top ol{
		overflow: hidden;
		float:right;
	}
	
	
	
	.top ol li{
		float:left;
		margin-right:10px;
	}
	
	.time{
		font-size:20px;
		color:#fff;
	}
	
	.bottom{
		width:100%;
		height:50px;
		background:#f84056;
		padding:10px 0;
	}
	
	.back{
		width:40px;
		height: 30px;
		margin-left:30px;
		display: block;
		float:left;
	}
	
	.bottom li a{
		display:block;
		font-size:22px;
		color:#fff;
		font-weight:600;
		margin-left: 80px;
		float:left;
	}
	
	.tit{
		width:100%;
		background:#fff;	
		padding:10px 0;
	}
	
	.tit>li{
		width:32%;
		height: 10%;
		float:left;
	}
	
	.tit>li:nth-of-type(1){
		margin-left:5%;
	}
	
	.tit>li:nth-of-type(2){
		margin-left:27%;
		border:1px solid red;
		text-align: center;
		/*padding: 5px 0;*/
	}
	
	.tit>li>a{
		text-decoration: none;
		width:100%;
		display:block;
		font-size:16px;
		font-weight:600;
		color:#333;
	}
	
	.tit>li:nth-of-type(2)>a{
		color:red;
	}
	
	input{
		width:90%;
		height:40px;
		border:none;
		outline: none;
		border-bottom:1px solid #999;
		margin:0 5%;
		padding-left:8px;
		margin-top:-1px;
	}
	
	input:nth-of-type(4){
		border:none;
		border-bottom: 1px solid #eee;
	}
	
	input::-webkit-input-placeholder{
    color:#999999;
    opacity:0.7;
}

	input{
		font-size: 14px;
		color:#333;
		opacity:0.8;
	}
	
	
</style>