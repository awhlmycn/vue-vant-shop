# my-vant

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 项目介绍
1. 项目用的技术栈 vue + vant + axios + vue-photo-preview
2. vant : 有赞ui库，对于商场系统来说，此ui库基本全有
3. axios : 网络请求，可以出来请求前，和请求后对数据的二次处理
4. vue-photo-preview : 实现缩略图的预览，更好的处理图片性质
5. vue-router : 实现路由之间的跳转

# 效果展示
![image](https://github.com/awhlmycn/vue-vant-shop/blob/master/static/images/result/vant1.png)
![image](https://github.com/awhlmycn/vue-vant-shop/blob/master/static/images/result/vant2.png)
![image](https://github.com/awhlmycn/vue-vant-shop/blob/master/static/images/result/vant3.png)
![image](https://github.com/awhlmycn/vue-vant-shop/blob/master/static/images/result/vant5.png)
![image](https://github.com/awhlmycn/vue-vant-shop/blob/master/static/images/result/vant6.png)
![image](https://github.com/awhlmycn/vue-vant-shop/blob/master/static/images/result/vant7.png)
![image](https://github.com/awhlmycn/vue-vant-shop/blob/master/static/images/result/vant8.png)
![image](https://github.com/awhlmycn/vue-vant-shop/blob/master/static/images/result/vant9.png)
![image](https://github.com/awhlmycn/vue-vant-shop/blob/master/static/images/result/vant10.png)
![image](https://github.com/awhlmycn/vue-vant-shop/blob/master/static/images/result/vant11.png)


### 待解决问题

    1.PhotoList中的tab内容区域切换会导致tab也切换
    2.v-lazy图片使用懒加载会报错
    3.底部导航的返回键的时候，在chrome上会回退到google页面

## 尝试在手机上查看项目
1. 保证手机和开发项目的电脑处于同一个WIFI环境中，
2. 打开自己的项目中package.json 文件。在dev脚本中添加--host指令，把当前的ip设置为--host指令
3. 查看自己的WIFi的ip, 在cmd中输入 `ipconfig` 查看无线网ip地址IPV4(无线网) ：192.168.0.113

## 解决小球滚动的效果（不同适配下的）
1. 动态的计算小球的位置
2. 因为小球的x 和y 轴的位置是固定的(以左上角的位置为准)
3. 购物车徽标的位置也是固定的，所以可以用徽标的 y - 小球y  x - 小球x ,即可以得到要滚动的位置。
4. 获取小球的位置用 js中的 getBoundingClientRect()方法--》他会得到四个值 left和top、right、bottom

## 在store中，json对象更新数据页面不更新问题
1. 因为vue的特性，对于数组和json对象的操作，而导致不能及时更新的情况
2. 可以通过es6的解构函数进行处理 [...arr] 或者 { ...obj } 而让数据进行实时更新