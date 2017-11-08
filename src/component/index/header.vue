<template>
	<main class="head">
		<ul class="zhedie">
			<li>
				<router-link to="login">
					<img src="../../assets/image/zhedie.png" class="slide"/>
				</router-link>
			</li>
			<li><h1>友汇</h1></li>
			<li><router-link to="search"><img src="../../assets/image/search.png" class="search"/></router-link></li>
			<li><router-link to="dian"><img src="../../assets/image/dian.png" class="dian"/></router-link></li>
		</ul>
		
	</main>
	
</template>

<style scoped>
	.head{
		width:100%;
		height: 90%;
		background:#f84056;
		overflow: hidden;
		
	}
	
	.zhedie{
		width:100%;
		height:0;
		padding-bottom: 15%;
		position: relative;
	}
	
	.zhedie li{
		float:left;
		padding-top: 3%;
	}
	
	.zhedie li .slide{
		display:block;
		width:47px;
	}
	
	.zhedie li h1{
		font-size:24px;
		color:#fff;
		font-weight:500;
	}


	
	.search{
		display:block;
		width:25px;
		height:27px;
		position: absolute;
		right:17%;
		bottom:25%;
		/*margin:5px 0 10px 150px;*/
	}
	
	.dian{
		width:8px;
		height:25px;
		position: absolute;
		right:7%;
		bottom:27%;
		/*margin:5px 0 10px 50px;*/
	}
	
</style>