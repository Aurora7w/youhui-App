<template>
	<main>
		<ul >
			<li><router-link to="home"><i class="iconfont icon-shouye"></i><a href="#">首页</a></router-link></li>
			<li><router-link to="sort"><i class="iconfont icon-fenlei"></i><a href="#">分类</a></router-link></li>
			<li><router-link to="cart"><i class="iconfont icon-gouwuche"></i><a href="#">购物车</a></router-link></li>
			<li><router-link to="my"><i class="iconfont icon-wode"></i><a href="#">我的</a></router-link></li>
		</ul>	
	</main>
</template>


<!--scoped限制css只在当前模板生效-->
<style scoped>
		*{
		margin:0;
		padding:0;
		list-style:none;
		text-decoration: none;
	}
	
 		h1{
 			color:red;
 		}
 		
 		main{
 			width:100%;
 			position: fixed;
 			left:0;
 			bottom:0;
 			background: #fff;
 			height:50px;
 			border: 1px solid #eee;
 		}
 		
 		/*main ul{
 			position: fixed;
 			left:0;
 			bottom:0;
 		}*/
 		
 		ul li{
 			width:25%;
 			float:left;	
 			text-align: center;
 			font-size:18px;
 			text-align: center;
 			/*line-height: 40px;*/
 		}
 		
 		ul li a{
 			display:block;
 			color:#999999 !important;
 			font-size: 14px;
 		}
 		ul li i{
 			display:block;
 			color:#0086B3;
 			font-size:25px;
 		}
</style>