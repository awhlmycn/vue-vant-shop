import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const vueRouter = new Router({
    // modal : 'history',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            meta:{ name : '主页'},
            component: resolve => require(['@/components/tabbar/Home'], resolve)
        },
        {
            path: '/search',
            name: 'Search',
            meta:{ name : '搜索'},
            component: resolve => require(['@/components/tabbar/Search'], resolve),
        },
        {
            path: '/shopcart',
            name: 'Shopcart',
            meta:{ name : '购物车'},
            component: resolve => require(['@/components/tabbar/Shopcart'], resolve),
        },
        {
            path: '/member',
            name: 'Member',
            meta:{ name : '会员'},
            component: resolve => require(['@/components/tabbar/Member'], resolve),
        },
        {
            path: '/home/newslist',
            name: 'NewList',
            meta : {name : '新闻列表'},
            component: resolve => require(['@/components/news/Newslist'], resolve),
        },
        {
            path: '/home/newsInfo/:id',
            name: 'NewsInfo',
            meta : {name : '新闻详情'},
            component: resolve => require(['@/components/news/NewInfo'], resolve),
        },
        {
            path: '/home/photolist',
            name: 'PhotoList',
            meta : {name : '图片列表'},
            component: resolve => require(['@/components/photolist/PhotoList'], resolve),
        },
        {
            path: '/home/photoinfo/:id',
            name: 'Photoinfo',
            meta : {name : '图片详情'},
            component: resolve => require(['@/components/photolist/Photoinfo'], resolve),
        },
        {
            path:'/home/goodslist',
            name: 'GoodsList',
            meta : {name : '商品列表'},
            component: resolve => require(['@/components/goodlist/GoodsList'], resolve),
        },
        {
            path:'/home/goodsinfo/:id',
            name: 'Goodsinfo',
            meta : {name : '商品信息'},
            component: resolve => require(['@/components/goodlist/Goodsinfo'], resolve),
        }
    ]
})

// 钩子函数
// vueRouter.beforeEach( ( to, from, next ) => {
//     console.log("from", from );
//     to.meta.lastpath = from.path;
//     console.log("to", to );
//     next();
// })

export default vueRouter;