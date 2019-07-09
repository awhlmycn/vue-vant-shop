<!-- transition ： 详解 ： https://www.cnblogs.com/ccyinghua/p/7872694.html -->
<template>
    <div class="goodsInfo">
        <!-- 动画小球  钩子函数-->
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            >
            <div class="ball" v-if="ballFlag" ref="ball"></div>
        </transition>
        <!-- 轮播区域 -->
        <div class="swipe">
            <van-swipe class="my-swipe" :autoplay="4000" >
              <van-swipe-item v-for="(image, index) in images" :key="index">
                <img :src="image">
              </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 商品购买区域 -->
        <div class="buy">
            <van-panel class="my_panel" v-model="goodsInfo">
                <div slot="header" class="title">{{goodsInfo.title}}</div>
                <p class="price">
                    <span>市场价 : <del>￥{{goodsInfo.old}}</del></span>
                    <span class="now_price">销售价：￥{{goodsInfo.now}}</span>
                </p>
                <p class="buyNum">
                    <span>购买数量:&nbsp;&nbsp;&nbsp;</span>
                    <van-stepper 
                        v-model="goodsInfo.num"
                        input-width="40px"
                        button-size="32px"
                        integer
                    />
                </p>
                <p class="btn_group">
                    <van-button type="info">立即购买</van-button>
                    <van-button type="danger" @click="addToShop()">加入购物车</van-button>
                </p>
            </van-panel>
        </div>
        <!-- 商品参数区域 -->
        <div class="params">
            <van-panel class="my_panel">
                <div slot="header" class="shopdes">商品参数</div>
                <div class="shopParams">
                    <p>商品货号：SD2932214404</p>
                    <p>库存数量 : 60次</p>
                    <p>上架时间: 2019-7-7 19:40:41</p>
                </div>
            </van-panel>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        name: 'goodlist',
        data () {
            return {
                goodsInfo:{
                    id : this.$route.params.id,
                    imgUrl: 'https://img.yzcdn.cn/vant/apple-1.jpg',
                    title : '苹果电脑',
                    selected : false,
                    now : 799,
                    old : 999,
                    num : 1,
                },
                ballFlag : false,
                value :0,
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ]
            }
        },
        created(){

        },
        methods:{
            // `this.$store.commit('incrementBy', amount)`
            ...mapMutations([
                'INCRMENT_CART_GOODS',
            ]),
            getShopList(){
                let curPageData = this.http.getGoodsInfo( 1 );
            },
            addToShop(){
                this.ballFlag = !this.ballFlag;
                this.INCRMENT_CART_GOODS({ shop : this.goodsInfo});
            },
            beforeEnter(el){
                console.log('动画enter之前');
                // 摆正小球的位置
                el.style.transform = "translate(0,0)"
            },
            enter(el, done ){
                // 1.获取小球的位置
                const ballPosition = this.$refs.ball.getBoundingClientRect();
                // 2.因为是不同的组件 所以底部的导航不能通过ref获得，只能通过dom
                const badgePosition = document.getElementById('badge').getBoundingClientRect();
                console.log('动画enter进入');
                const deviationX = badgePosition.left - ballPosition.left + 30;
                const deviationY = badgePosition.top - ballPosition.top;
                el.offsetWidth;
                el.style.transform = `translate(${deviationX}px, ${deviationY}px)`
                // 动画效果
                el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.68)";
                done();
            },
            afterEnter(el){
                console.log('动画进入之后');
                this.ballFlag = !this.ballFlag;
            },
        }
    }
</script>
<style scoped>
    .goodsInfo{
        background-color: #ccc;
        overflow: hidden;
    }
    .my-swipe{
        height: 200px;
        width: 100%;
    }
    .my-swipe img{
        width: 100%;
        height: 100%;
    }
    .my_panel{
        padding: 5px;
    }
    .title{
        margin-top: 3px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
    }
    .price{
        display: flex;
        font-size: 20px;
        justify-content: space-around;
    }
    .price{
        font-size: 16px;
    }
    .buyNum{
        display: flex;
        font-size: 20px;
        padding-left: 30px;
    }
    .btn_group{
        display: flex;
        justify-content: space-around;
    }

    .shopdes{
        font-size: 16px;
        font-weight: bold;
    }

    /*小球*/
    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 2;
        left: 49%;
        top: 344px;
    }
</style>
