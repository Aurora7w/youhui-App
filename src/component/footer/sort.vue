<template>
	<main>
		<ul class="icon">
			<li><i class="iconfont icon-nvzhuang"></i>女装</li>
			<li><i class="iconfont icon-xiezi"></i>鞋子</li>
			<li><i class="iconfont icon-xiangbao"></i>箱包</li>
			<li><i class="iconfont icon-neiyi"></i>内衣</li>
			<li><i class="iconfont icon-meizhuang"></i>美护</li>
			<li><i class="iconfont icon-peishi"></i>配饰</li>
			<li><i class="iconfont icon-muying"></i>母婴</li>
			<li><i class="iconfont icon-jiaju"></i>居家</li>
			<li><i class="iconfont icon-meishi"></i>美食</li>
			<li><i class="iconfont icon-jiadian"></i>数码</li>
			<li><i class="iconfont icon-jiadian"></i>家电</li>
			<li><i class="iconfont icon-wenti"></i>文体</li>
		</ul>
	</main>
</template>

<script>
</script>

<style scoped>
	main{
		width:100%;
		height:80%;
		position: fixed;
		top:10%;
		left:0;
		background: #fff;
		z-index:1000;
	}
	.icon li{
		width:33%;
		height:0;
		padding-bottom:20%;
		float:left;
		border-right:1px solid #ddd;
		border-bottom:1px solid #ddd;
		margin-top:-2px;
		text-align: center;	
		margin-right:-1px;
		/*margin-top:-10%;*/	
		color:#999999;
	}
	
	.icon li:nth-of-type(3),li:nth-of-type(6),li:nth-of-type(9),li:nth-of-type(12){
		border-right:none;
	}
	
	.icon li i{
		display: block;
		margin-top:10%;
		font-size:30px;
		
	}
	
	.icon li:nth-of-type(1) i{
		color:deeppink;
	}
	.icon li:nth-of-type(2) i{
		color:red;
	}
	.icon li:nth-of-type(3) i{
		color:orange;
	}
	.icon li:nth-of-type(4) i{
		color:blue;
	}
	.icon li:nth-of-type(5) i{
		color:plum;
	}
	.icon li:nth-of-type(6) i{
		color:greenyellow;
	}
	.icon li:nth-of-type(7) i{
		color:goldenrod;
	}
	.icon li:nth-of-type(8) i{
		color:palegoldenrod;
	}
	.icon li:nth-of-type(9) i{
		color:darkorange;
	}
	.icon li:nth-of-type(10) i{
		color:darkgray;
	}
	.icon li:nth-of-type(11) i{
		color:cornflowerblue;
	}
	.icon li:nth-of-type(12) i{
		color:brown;
	}
</style>