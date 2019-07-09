<template>
    <div class="home">
        <van-swipe class="my-swipe" :autoplay="3000" >
            <van-swipe-item v-for="(num,index) in swipeList" :key="index">
                <img :src="num.imgUrl" >
            </van-swipe-item>
        </van-swipe>
        <van-grid :column-num="3" :border="false">
            <van-grid-item
                icon="chat"
                text="新闻资讯"
                to="home/newslist"
            />
            <van-grid-item
                icon="photo"
                text="图片分享"
                to="home/photolist"
            >
            </van-grid-item>
            <van-grid-item
                icon="shop"
                text="商品购买"
                to="home/goodslist"
            />
            <van-grid-item
                icon="chat"
                text="留言反馈"
            />
            <van-grid-item
                icon="play-circle"
                text="视频专区"
            />
            <van-grid-item
                icon="phone"
                text="联系我们"
            />
        </van-grid>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                swipeList : [],
            }
        },
        mounted(){
            this.getSwipe();
        },
        methods:{
            getSwipe(){
                this.swipeList = this.http.lunbotu();
            }
        }
    }
</script>

<style>
    .my-swipe{
        height: 200px;
        width: 100%;
    }
    .my-swipe img{
        width: 100%;
        height: 100%;
    }
    /*九宫格的高度*/
    .van-grid-item{
        height: 120px;
    }
</style>