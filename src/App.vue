<template>
 		<main>
			<!--<h1>标题</h1>
			<p>段落</p>
			<h2>1111111</h2>
			<h3>222222</h3>
			<h4>33333</h4>
			<h5>4444</h5>-->
			<v-header></v-header>    <!--标签，需要引入进来-->
			<router-view></router-view>
			<v-footer></v-footer>
	</main>	
</template>


<!--相当于主页面，引入模板-->
<script>
	import vheader from './component/index/header.vue'
	import vfooter from './component/index/footer.vue'
export default {
 		components:{
 			'v-header':vheader,
 			'v-footer':vfooter,
 		}
}
</script>

<style>

</style>
