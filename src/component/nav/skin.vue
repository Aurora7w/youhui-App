<template>
	<main>
		<ul class="menu">
			<li>
				<router-link to="home"><a href="#" class="tit">发现</a></router-link>
			</li>
			<li class="thumb">
				<router-link to="skin"><a href="#" class="tit">极致美肤</a></router-link>
			</li>
			<li>
			   <router-link to="decoration"><a href="#" class="tit">个性配饰</a></router-link>
			</li>
			
			<li>
				<router-link to="hot"><a href="#" class="tit">本周热卖</a></router-link>
			</li>
		</ul>
		<div class="wrap">
			<div class="container">
			<ul class="content">
					<li v-for="v in arr">		
					<router-link :to="'/detail/'+v.price+'/'+v.title">
						<!--+'/'+v.tradeItemId-->
						<img v-lazy="v.img" alt="" width="90%" height="270px"/>
						<p class="title">{{v.title}}</p>
						<!--<p>{{this.$route.params.title}}</p>-->
						<p class="price">价格：{{v.price | add}}</p>
					</router-link>
				</li>
			</ul>
		</div>	
		</div>
		
	</main>
</template>
<script>
	export default {
		data(){
			return{
				arr:[],
			}
			
		},
		methods:{
			
			
		},
		filters:{
				add(n){
					return '￥'+n;
				}
			
		},
		mounted(){
			var m=this;  //使它指向当前对象，而不是window
//			setTimeout(function(){
//				m.msg=1;
//				console.log(m)
//				
//			},1000)
				this.$http.jsonp('http://list.mogujie.com/search?callback=callback&q=%25E6%258A%25A4%25E8%2582%25A4%25E5%2593%2581&cKey=43&minPrice=&_mgjuuid=99c5c7de-8571-4a55-9451-9b0202b06ecd&ppath=&page=1&maxPrice=&sort=pop&userId=',{
					params:{
						
					},
					jsonp:'callback',
				}).then(function(res){
					//alert(1);
//					console.log(res);
//					console.log(res.result.wall.docs)
//					this.arr=res.result.wall.docs;
					
				},function(res){
//					console.log(res);
				}),
				setTimeout(function(){
				//	alert(1)
					//m.arr=[7,9];
					m.arr=com.result.wall.docs;
					console.log(m.arr);
//					console.log(arr[0].img);
//					m.msg=1;
				},1000)
			}
		
		
		
	}
//http://list.mogujie.com/search?callback=cb&q=%25E6%258A%25A4%25E8%2582%25A4%25E5%2593%2581&cKey=43&minPrice=&_mgjuuid=99c5c7de-8571-4a55-9451-9b0202b06ecd&ppath=&page=1&maxPrice=&sort=pop&userId=
//http://list.mogujie.com/search?callback=jQuery211013949308355050993_1509468466513&q=%25E5%258C%2596%25E5%25A6%2586%25E5%2593%2581&cKey=43&minPrice=&_mgjuuid=99c5c7de-8571-4a55-9451-9b0202b06ecd&ppath=&page=1&maxPrice=&sort=pop&userId=&cpc_offset=&_=1509468466514
//http://list.mogujie.com/search?callback=jQuery211049695350676887906_1509469394461&_version=1&ratio=2%3A3&q=%25E5%25BD%25A9%25E5%25A6%2586&cKey=43&minPrice=&_mgjuuid=99c5c7de-8571-4a55-9451-9b0202b06ecd&ppath=&page=1&maxPrice=&sort=pop&userId=&cpc_offset=&_=1509469394462
</script>

<style scoped>
	*{
		margin:0;
		padding:0;
		list-style:none;
		text-decoration: none;
	}
	
	main{
		background:#eee;
		margin-bottom: 100px;
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
	
	.wrap{
		width:100%;
		
	}
	
	.container{
		width:95%;
		height: auto;
		margin:0 auto;
	}
	
	.content li{
		width:100%;
		height:auto;
		background: #fff;
		margin-bottom: 10px;
		border-radius:5px;
	}
	
	.content li img{
		display:block;
		margin:0 auto;
		padding-top:15px;
	}
	
	.content li .title{
		font-size:14px;
		color:#333;
		margin:10px 0 10px 20px;
		padding-right:5px;
	}
	.content li .price{
		margin:10px 0 0 20px;
		font-size:12px;	
		padding-bottom:20px;
		color:red;
	}
	
	
	
</style>