<template>
	<main>
		<div class="contain">
			<div class="head">
				<img src="../../assets/image/arrow.png" class="back" @click="back"/>
				<input type="text" placeholder="搜索商品" v-model="msg" @keyup="get($event)" @keydown.down="next" @keydown.up.prevent="last"/>
				<img src="../../assets/image/search.png" class="search" @click="change"/>	
				<ul class="xiala">
					<li v-for="(v,i) in searchList" v-bind:class="{active:i==now}" @click="tiaozhuan">{{v}}</li>
				</ul>
			</div>
			
			<ul class="hot">
				<li v-for="v in list">{{v.title}}</li>
				<li id="more">···</li>
			</ul>
		</div>
	</main>
</template>

<script>
	export default{
		
		data(){
			return{
				msg:'',
				now:-1,
				searchList:[],
				list:[
				{
					id:1,
					title:'指甲油',
				},
				{
					id:2,
					title:'零食',
					
				},{
					id:3,
					title:'衣服',
				},{
					id:4,
					title:'手机',
					
				},
				{
					id:5,
					title:'咖啡',
					
				},
				{
					id:6,
					title:'戒指',
					
				},
				{
					id:7,
					title:'香水',
					
				},
				{
					id:8,
					title:'相机',
					
				},
				{
					id:9,
					title:'电脑',
					
				},
				{
					id:10,
					title:'书包',
					
				}
				]
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
			
			change(){
				window.open('http://list.mogujie.com/s?q='+this.msg);  //点击之后跳转到对应的页面
				
			},
			get:function(ev){  
						//判断条件：解决按上下方向键出现混乱的问题
						//判断条件：按上下方向键的时候，限制该方法的执行，从而终止跨域请求新信息
						if(ev.keyCode == 38 || ev.keyCode == 40) return
						//jsonp跨域请求，this.$htto.jsonp('地址',{参数：{},jsonp：回调函数})
						this.$http.jsonp('http://list.mogujie.com/search?callback=callback&ratio=2%3A3&q=%25E5%258F%25A3%25E7%25BA%25A2%25E5%25A5%2597%25E8%25A3%2585&cKey=43&minPrice=&_mgjuuid=99c5c7de-8571-4a55-9451-9b0202b06ecd&ppath=&page=1&maxPrice=&sort=pop&userId=&cpc_offset=&_=1509861941142',{
							params:{
								q:this.msg,
							},jsonp:'callback'
						}).then(function(res){
							console.log(res.body.s);
							this.searchList=res.body.s;
//							if (ev.keyCode == 13) {  //实现回车搜索
//   						 window.open('https://www.baidu.com/s?wd=' + this.msg);
//    							this.msg = '';
//							}
//https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su
							
						},function(res){
							
						})
						
						if (ev.keyCode == 13) {  //实现回车搜索
     						 window.open('http://list.mogujie.com/s?q='+this.msg);
      							this.msg = '';
							}
					},
					next:function(){   //按下方向键
						this.now++;
						if(this.now==this.searchList.length){
							this.now=0;
						}
						this.msg=this.searchList[this.now];   //把当前输入框的值指向当前按上下方向键选择的值
					},
					last:function(){   //按上方向键
						this.now--;
						if(this.now<0){
							this.now=this.searchList.length-1;
						}
						this.msg=this.searchList[this.now];  //把当前输入框的值指向当前按上下方向键选择的值
					},
					tiaozhuan:function(i){    //点击出现的搜索条，跳转到对应的页面
						this.msg=this.searchList[this.now];		//把当前输入框的值指向当前按上下方向键选择的值
						this.now=i;  //随机点击任意一条，所以需要传入一个索引值
						window.open('http://list.mogujie.com/s?q='+this.msg);  //点击之后跳转到对应的页面
						this.msg = '';  //清空输入框的值
					}
		}
	}
</script>

<style scoped>
	main{
		width:100%;
		height: 570px;
		/*height: 0;
		padding-bottom: 100%;*/
		background:#eee;
		z-index: 1000;
	}
	
	.contain{
		width:100%;
		/*height:auto;*/
		height: 0;
		padding-bottom: 100%;
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
	
	.head{
		width:100%;
		height:50px;
		background:#f84056;
		padding:10px 0;
		position: relative;
	}
	
	.back{
		width:35px;
		height: 30px;
		margin-left:6%;
		margin-top:2%;
		display: block;
		float:left;
	}
	
	input{
		width:58%;
		height: 27px;
		border:none;
		border-radius: 3px;
		margin-top:3%;
		padding-left:25px;
		background:rgba(0,0,0,0.1);
		float:left;
		margin-left: 8px;
		outline: none;
	}
	
	/*修改placeholder样式*/
	
	input::-webkit-input-placeholder{
    color: #fff;opacity:0.7;
}

	input{
		font-size: 14px;
		color:#fff;
		opacity:0.9;
	}

	.xiala{
		width:106%;
		position:absolute;
		left:21%;
		top:60%;
		
	}
	
	.xiala>li{
		width:61%;
		height: auto;
		background:rgba(255,255,255,0.7);
		/*background: #fff;*/
		color:#333;
		padding:15px 0;
	}
	
	.search{
		display:block;
		width:25px;
		height:25px;
		/*margin-left: 20px;*/
		float:right;
		margin-right:5%;
		margin-top:3%;
	}
	
	.hot{
		margin:30px;
	}
	
	.hot>li{
		float:left;
		margin:5px;
		/*border:1px solid #333333;*/
	}
	.hot>li:nth-of-type(2n-1){
		width:80px;
		height: 80px;
		border-radius:50%;
		background: #fff;
		color:#333;
		font-size:16px;
		text-align: center;
		line-height: 80px;
	}
	.hot>li:nth-of-type(2n){
		width:50px;
		height:50px;
		border-radius:50%;
		background: #fff;
		color:#333;
		font-size:14px;
		text-align: center;
		line-height: 50px;
	}
	
	.hot>li:nth-of-type(3n-1){
		width:40px;
		height:40px;
		border-radius:50%;
		background: #fff;
		color:#333;
		font-size:13px;
		text-align: center;
		line-height: 40px;
	}
	
	#more{
		width:80px;
		height: 80px;
		border-radius:50%;
		background: #fff;
		color:red !important;
		font-size:50px;
		text-align: center;
		line-height: 80px;
	}
	
	p{
		width:100%;
		height: 60px;
		background: #eee;
		position: absolute;
		left:0;
		bottom: 0;
		z-index: 1000;
	}
	
	.active{
		background-color:#ccc;
	}
	
	
</style>