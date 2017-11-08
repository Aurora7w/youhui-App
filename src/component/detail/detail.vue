<template>
	<main>
		<div class="contain">	
		<div class="show">
			<img src="../../assets/image/watch1.jpg"/>
			<!--<img :src="this.$route.params.img"/>-->
			<ul>
				<li><img src="../../assets/image/back.png" alt="" class="back" @click="back"/></li>
				<li>
						<img src="../../assets/image/search.png" alt="" class="searcher"/>
				</li>
				<li><img src="../../assets/image/dian.png" alt="" class="dian"/></li>
			</ul>
			<ol class="attitude">
				<li>
					<img src="../../assets/image/like.png"/>
					<span>收藏766</span>
				</li>
				<li>
					<img src="../../assets/image/share.png"/>
					<span>分享</span>
				</li>
			</ol>
		</div>
		
		
		<div class="detail">
			<div class="container">
				
			<h4>[翡翠宝石手表]女士时尚精钢金色珐琅，圆形简单大...</h4>
			<p>简单大方的设计感，很适合职场拼杀的风范，很有品位,金与蓝的结合，经典传承，手表是职场女性的身份象征,装饰大过它的实用，有机结合，带来全新...</p>
			<span>￥688.00</span>
			</div>
		</div>
		
		<div class="search">
			<h4>搜索关键词</h4>
			<ul>
				<li>玫瑰金色</li>
				<li>镶嵌真钻</li>
				<li>生活防水</li>
			</ul>
		</div>
		
		<div class="declare">
			<span>|</span>
			<h3>产品展示</h3>
			<p>手表的装饰往往大过它的实用性，一款好看的手表更能成为腕间的风景
	金色和白色融合，就像女孩的天真带着女人的优雅。蓝宝石的镶嵌更能
	体现出它的高贵，尽显华贵。</p>
		</div>
		
		<div class="bottom">
			<ul>
				<li><img src="../../assets/image/cart.png" class="cart"/></li>
				<li @click="cart">加入购物车</li>
				<li>即刻购买</li>
			</ul>			
		</div>
			
		<div class="wrap">
			<div class="buy" v-show="msg">
				<h4>购买详情</h4>
				<span class="close" @click="close">X</span>
				<ul>
					<li class="xiangqing">
						<img src="../../assets/image/watch1.jpg" alt="" />
						<span class="price">￥766.00</span>
					</li>
					<li class="count">
						<p class="counts">购买数量</p>
						<p class="sub">-</p>
						<p class="shuliang">1</p>
						<p class="add">+</p>
					</li>
					<li class="money">
						<p class="money_tit">商品金额：</p>
						<p class="total">￥766.00</p>
					</li>
					<li class="service">优惠及服务</li>
					<li class="fukuan">
					<p>应付金额：</p>
					<p>￥766.00</p>
					<router-link to="order">
						<p class="confirm">确认并付款</p>
					</router-link>
					</li>
				</ul>
			</div>
		</div>
		
		
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				msg:false,
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
			cart(){
				this.msg=true;
			},
			close(){
				this.msg=false;
			}
		},
		mounted(){
//			if(){
//				
//			}
		}
	}
	
	
</script>

<style scoped>
	main{
		background: #eee;
		position: relative;
	}
	
	.contain{
		width:100%;
		height:auto;
		margin-top:-58px;
		z-index:1000;
	}
	.show{
		width:100%;
		height:auto;
		position: relative;
		background: #fff;
	}
	
	.show>img{
		display:block;
		width:100%;
		height:280px;
	}
	
	.show>ul{
		width:100%;
		position: absolute;
		left:0;
		top:20px;
		overflow: hidden;
	}
	
	.show ul li{
		float:left;
		width:35px;
		height:35px;
		background: rgba(0,0,0,0.3);
		border-radius:50%;
		text-align:center;
		line-height: 35px;
	}
	
	.show ul li:nth-of-type(1){
		margin-left:40px;
		
	}
	
	.show ul li:nth-of-type(2){
		margin-left:150px;	
	}
	
	.show ul li:nth-of-type(3){
		margin-left:20px;
	}
	
	.back{
		width:15px;
		height:15px;
		margin-top:7px;
		
	}
	
	.searcher{
		width:25px;
		height: 25px;
		margin-top:5px;
	}
	
	.dian{
		width:5px;
		height:20px;
		margin-top:5px;
	}
	
	.attitude{
		overflow: hidden;
	}
	
	.attitude>li{
		float:left;
		width: 49.3%;
		border:1px solid #ccc;
		padding:15px 0;
	}
	
	
	
	.attitude>li>img{
		width:25px;
		height:25px;
		margin-left: 40px;
		display: block;
		float:left;
	}
	
	.attitude>li>span{
		display:block;
		margin-left:15px;
		float:left;
	}
	
	.detail{
		width:100%;
		height: auto;	
		background: #fff;
		
	}
	
	.container{
		padding-left:5px;
		margin:20px auto;
		padding:20px 10px 10px 10px;
	}
	
	.detail h4{
		font-size:16px;
		font-weight: 600;
		color:#333;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp:1;
		-webkit-box-orient:vertical;
	}
	
	.detail p{
		width:98%;
		color:#999999;
		font-size:14px;
		margin-top: 6px;
	}
	
	.detail span{
		display:block;
		color: red;
		font-size: 14px;
		margin-top:10px;
	}
	
	.search{
		width:100%;
		height: auto;
		background: #fff;
		padding:20px 0;
		
	}
	
	.search h4{
		font-size: 14px;
		font-weight: 600;
		margin:0 10px 10px 10px;
	}
	
	.search ul{
		overflow: hidden;
		width:95%;
		margin:0 auto;
	}
	
	.search ul li{
		width:80px;
		height:30px;
		background: #f84056;
		border-radius:15px;
		float:left;
		margin-right:20px;
		line-height: 30px;
		color:#fff;
		font-size:14px;
		text-align: center;
	}
	
	.declare{
		width:100%;
		height: auto;
		background: #fff;
		margin-top:20px;
		padding:15px 0;
		overflow: hidden;
		padding-bottom:100px;
	}
	.declare>span{
		color:#f84056;
		display:block;
		float:left;
		margin: 0 10px 0 10px; 
		font-weight:600;
		
	}
	
	.declare p{
		width:96%;
		font-size:14px;
		color:#999999;
		padding:10px 0 0 10px;
		line-height: 20px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp:3;
		-webkit-box-orient:vertical;
		
	}
	
	.declare h3{
		font-weight: 600;
	}
	
	.bottom{
		width:100%;
		height: auto;
		background: #fff;
		margin:20px 0 10px 0;
		/*padding:10px 0;*/
		padding-top:10px;
		position: fixed;
		left:0;
		bottom:0;
		z-index:1000;
	}
	

	.bottom ul{
		overflow: hidden;
	}
	
	.bottom ul li{
		float:left;
	}
	
	.bottom .cart{
		width:30px;
		height:30px;
		margin-left:30px;
		float:left;
		/*margin-right:15px;*/
	}
	.bottom ul li:nth-of-type(2){
		width:80px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		border:1px solid #f84056;
		border-radius:5px;
		font-size:14px;
		color:#f84056;
		float:right;
		margin-right:120px;
	}
	
	.bottom ul li:nth-of-type(3){
		width:80px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		background: #f84056;
		border-radius:5px;
		font-size:14px;
		color:#fff;
		float:right;
		margin-right:-180px;
	}
	
	.wrap{
		width:100%;
		height: auto;
		/*display:none;*/
		position:absolute;
		left:0;
		bottom:0px;
		z-index:1000;
	}
	
	.buy{
		width:100%;
		height:auto;
		background: #eee;
		position: relative;
		/*padding-bottom:30px;*/
		
	}
	
	.buy>h4{
		height: 40px;
		font-size:16px;
		font-weight:500;
		margin-left:10px;
		line-height: 40px;
	}
	
	.buy ul li{
		border: 1px solid #ccc;
		margin-top:-2px;
	}
	
	.buy>.close{
		width:27px;
		height:27px;
		display:block;
		border-radius:50%;
		background:#fff;
		border:1px solid #999999;
		color:#999999;
		text-align:center;
		line-height:27px;
		position: absolute;
		right:10px;
		top:7px;
	}
	
	.xiangqing{
		width:100%;
		height:80px;
		background:#fff;
	}
	
	
	.buy ul .xiangqing{
		overflow: hidden;
	}
	
	.xiangqing>img{
		width:70px;
		height:70px;
		float:left;
		padding:5px 20px 5px 20px;
	}
	
	.price{
		display:block;
		margin:10px 0 0 10px;
	}
	
	.buy>ul{
		overflow: hidden;
	}
	
	
	.count{
		width:100%;
		height: 40px;
		background: #fff;
		padding:10px 0 10px 0;
		
	}
	
	.counts{
		font-size:16px;
		font-weight:500;
		margin:10px 0 10px 10px;
		float:left;
		margin-right:130px;
	}
	
	.shuliang{
		width:40px;
		height: 25px;
		float:left;
		text-align:center;
		line-height: 25px;
		margin-top:5px;
		border:2px solid #ccc ;
	}
	
	.sub,.add{
		width:30px;
		height: 25px;
		border:2px solid #ccc;
		color:red;
		float:left;
		text-align:center;
		line-height: 25px;
		font-size: 25px;
		margin-top:5px;
	}
	
	.money{
		width:100%;
		height: 40px;
		background: #fff;
		padding:10px 0 10px 0;
	}
	
	.money_tit{
		margin-left:10px;
		padding-top:10px;
		float:left;
	}
	
	.total{
		float:left;
		margin:10px 0px 0 150px;
		color:red;
	}
	
	.service{
		width:100%;
		height: auto;
		padding:10px 0 10px 8px;
		/*margin-top:-2px;*/
	}
	
	.fukuan{
		width:100%;
		height: 60px;
		background: #fff !important;
	}
	
	.fukuan p{
		float:left;
		line-height: 60px;
	}
	
	.fukuan p:nth-of-type(1){
		padding:0px 0 10px 8px;
		color:#999999;
	}
	
	.fukuan p:nth-of-type(2){
		margin-left:20px;
		color:red;
	}
	
	.fukuan .confirm{
		background: #f84056 !important;
		width:100px;
		height: 30px;
		color:#fff !important;
		text-align:center;
		line-height: 40px;
		border-radius:5px;
		margin:10px 0 0 40px;
	}
	
	
</style>