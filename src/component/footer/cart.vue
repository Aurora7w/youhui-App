
import '../css/base.css'
import '../css/checkout.css'
import '../css/modal.css'

<template>
	<main>
		<div class="cart">
 				 <div class="checkout-title">
   					 <span>购物车</span>
 				 </div>
 	 	    <div class="item-list-wrap">
    	<div class="cart-item">
    	  <div class="cart-item-head">
     	   <ul>
       	  	  <li>商品信息</li>
        	  <li>商品金额</li>
        	  <li>商品数量</li>
              <li>总金额</li>
              <li>编辑</li>
           </ul>
        </div>
      <ul class="cart-item-list">
        <li v-for="item in productList">
          <div class="cart-tab-1">
            <div class="cart-item-check">
              <a href="javascript:void 0" class="item-check-btn" v-bind:class="{'check':item.checked}" @click="selectedProduct(item)"><!-- class不会跟前面的class冲突 -->
            <svg class="icon icon-ok"><use xlink:href="#icon-ok"></use></svg>
          </a>
        </div>
        <div class="cart-item-pic">
          <img v-bind:src="item.productImage" alt="">
        </div>
        <div class="cart-item-title">
          <div class="item-name">{{item.productName}}</div>
        </div>
        <div class="item-include">
          <dl>
            <dt>赠送:</dt>
            <dd v-for="part in item.parts" v-text="part.partsName"></dd>
          </dl>
        </div>
      </div>
      <div class="cart-tab-2">
        <div class="item-price">{{item.productPrice | formatMoney}}</div>
      </div>
      <div class="cart-tab-3">
        <div class="item-quantity">
          <div class="select-self select-self-open">
            <div class="quantity">
              <a href="javascript:;" @click="changeMoney(item,-1)">-</a>
              <input type="text" value="0" disabled v-model="item.productQuantity">
              <a href="javascript:;" @click="changeMoney(item,1)">+</a>
            </div>
          </div>
          <div class="item-stock">有货</div>
        </div>
      </div>
      <div class="cart-tab-4">
        <div class="item-price-total">{{item.productPrice*item.productQuantity| money("元")}}</div>
      </div>
      <div class="cart-tab-5">
        <div class="cart-item-operation">
          <a href="javascript:void 0" class="item-edit-btn" @click="delConfirm(item)">
          <svg class="icon icon-del"><use xlink:href="#icon-del" ></use></svg>
        </a>
      </div>
    </div>
  </li>
</ul>
</div>
</div>
		<!-- footer -->
		<div class="cart-foot-wrap">
		<div class="cart-foot-l">
		<div class="item-all-check">
		  <a href="javascript:void 0">
		    <span class="item-check-btn" v-bind:class="{'check':checkAllFlag}" @click="checkAll(true)">
		    <svg class="icon icon-ok"><use xlink:href="#icon-ok"></use></svg>
		  </span>
		  <span>全选</span>
		</a>
		</div>
		<div class="item-all-del">
		<a href="javascript:void 0" class="item-del-btn" @click="checkAll(false)">
		  <span>取消全选</span>
		</a>
		</div>
		</div>
		<div class="cart-foot-r">
		<div class="item-total">
		Item total: <span class="total-price">{{totalMoney| money("元")}}</span>
		</div>
		<div class="next-btn-wrap">
		<a href="address.html" class="btn btn--red" style="width: 200px">结账</a>
		</div>
		</div>
		</div>
		</div>

		<div class="md-modal modal-msg md-modal-transition" id="showModal" v-bind:class="{'md-show':delFlag}">
			<div class="md-modal-inner">
				<div class="md-top">
					<button class="md-close" @click="delFlag=false">关闭</button>
				</div>
			<div class="md-content">
				<div class="confirm-tips">
					<p id="cusLanInfo">你确认删除此订单信息吗?</p>
				</div>
				<div class="btn-wrap col-2">
					<button class="btn btn--m" id="btnModalConfirm" @click="delProduct()">Yes</button>
					<button class="btn btn--m btn--red" id="btnModalCancel" @click="delFlag=false">No</button>
				</div>
			</div>
			</div>
			</div>
			<div class="md-overlay" v-show="delFlag"></div>


	</main>
</template>

<script>
	export default{
			data(){
				return{
				totalMoney:0,
				productList:[],
				checkAllFlag:false,
				delFlag:false,
				curProduct:''
				}
			
	},
	filters:{//局部过滤器
		formatMoney:function(value){
			return "￥" + value.toFixed(2);//toFixed有精度缺失（四舍五入），所以价格一般有后台传入
		}

	},
	mounted:function(){//页面加载之后自动调用，常用于页面渲染
		this.$nextTick(function(){//在2.0版本中，加mounted的$nextTick方法，才能使用vm
			this.cartView();
		})
			
	},
	methods:{
		// 渲染页面
		cartView:function(){
			var _this = this;
			this.$http.get("../data/cartData.json").then(function(res){
				_this.productList = res.data.result.list;
				
			});
		},
		// 通过+、-改变商品数量从而改变总额
		changeMoney:function(product,way){
			if(way>0){
				product.productQuantity++;
			}else{
				product.productQuantity--;
				if(product.productQuantity<1){
					product.productQuantity=1;//当数量少于1个时保持1个不变
				}
			}
			this.calcTotalPrice();
		},
		// 判断是否先中了按钮
		selectedProduct:function(item){
			if(typeof item.checked =='undefined'){//判断是否未定义，如果没点击过按钮是没有注册的，则需要先注册checked属性
				// Vue.set(item,"checked",true);//全局注册
				this.$set(item,"checked",true);//局部注册
			}else{
				item.checked = !item.checked;
			}
			this.calcTotalPrice();
		},
		// 全选与取消全选，点击全选时flag为true,取消时为false
		checkAll:function(flag){
			this.checkAllFlag = flag;
			var _this = this;
			this.productList.forEach(function(item,index){
				if(typeof item.checked == 'undefined'){//也要防止未定义
					_this.$set(item,"checked",_this.checkAllFlag);//通过set来给item添加属性checked
				}else{
					item.checked = _this.checkAllFlag;
				}
			});
			this.calcTotalPrice();
		},
		// 计算总金额
		calcTotalPrice:function(){
			var _this = this;
			this.totalMoney = 0;
			this.productList.forEach(function(item,index){
				if(item.checked){
					_this.totalMoney += item.productPrice*item.productQuantity;
				}
			});

		},
		// 确定删除
		delConfirm:function(item){
			this.delFlag = true;
			this.curProduct = item;
		},
		delProduct:function(){
			var index = this.productList.indexOf(this.curProduct);
			this.productList.splice(index,1);
			this.delFlag = false;
		}
	}
	}


	


</script>

<style scoped>
    .quentity input {
    width: 40px;
    padding: 5px 10px;
    text-align: center;
    }
    
    main{
    	width:100%;
    	height: 100%;
    	position: fixed;
    	top:0;
    	left:0;
    	background: #fff;
    	z-index:1000;
    }
    
    .checkout-title{
    	width:100%;
    	text-align:center;
    	
    }
    
    .checkout-title>span{
    	display:block;
    	font-size:20px;
    	font-weight:600;
    	color:#f84056;
    	padding:5% 0;
    }
    
    .cart-item-head>ul{
    	overflow: hidden;
    	background: #605f5f;
    	padding:2% 0;
    }
    
    .cart-item-head>ul>li{
    	float:left;
    	font-size:14px;
    	margin-right:7%;
    	color:#fff;
    }
    </style>