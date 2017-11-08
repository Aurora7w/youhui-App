import VueRouter from 'vue-router';
import menu from '../component/nav/menu.vue';
import hot from '../component/nav/hot.vue';
import decoration from '../component/nav/decoration.vue';
import skin from '../component/nav/skin.vue';
import my from '../component/my/my.vue';
import detail from '../component/detail/detail.vue';
import search from '../component/search/search.vue';
import order from '../component/order/order.vue';
import login from '../component/login/login.vue';
import sort from '../component/footer/sort.vue';
import cart from '../component/footer/cart.vue';


export default new VueRouter({
	routes:[
		{path:'/home',component:menu},
		{path:'/menu',component:menu},
		{path:'/find',component:menu},
		{path:'/my',component:my},
		{path:'/hot',component:hot},
		{path:'/decoration',component:decoration},
		{path:'/skin',component:skin},
		{path:'/detail/:price/:title',component:detail},
		{path:'/order',component:order},
		{path:'/search',component:search},
		{path:'/login',component:login},
		{path:'/sort',component:sort},
		{path:'/cart',component:cart},
		{path:'*',redirect:menu},
	]
})
