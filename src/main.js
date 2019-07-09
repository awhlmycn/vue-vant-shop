// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import './utils/rem.js'
Vue.config.productionTip = false

// 引入有赞 ui
import vant from 'vant';
import 'vant/lib/index.css'
Vue.use(vant);

// 安装图片预览插件
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
// https://photoswipe.com/documentation/options.html
Vue.use( preview, {
    // mainClass: 'pswp--minimal--dark',
    barsSize: {top: 0, bottom: 0},
    captionEl: true,        //是否显示标题
    fullscreenEl: false,   //关闭全屏按钮
    shareEl: false,         //关闭分享元素
    arrowEl: false,         //是否显示左右箭头
    bgOpacity: 0.85,        //背景透明度
    zoomEl  : false,        //是否显示放大镜
    tapToClose: true,   //是否可以点击其他位置关闭
    tapToToggleControls: false
});

import store from '../src/store/index.js';

import lele from './api/data.js'
Vue.prototype.http = lele;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})


/*
    created : 在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
    mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作
 */