<template>
    <div class="goods">
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            >
            <div class="goodlist">
                <div
                    class="goods_item"
                    v-for="( item, index ) in items"
                    :key="index"
                    >
                    <router-link :to="'/home/goodsinfo/' + item.id">
                        <img :src="item.imgUrl">
                        <h1 class="title">{{item.title}}</h1>
                        <div class="info">
                            <p class="price">
                                <span class="now">￥{{item.now}}</span>
                                <span class="old">￥{{item.old}}</span>
                            </p>
                            <p class="sell">
                                <span>热卖中</span>
                                <span>剩余60件</span>
                            </p>
                        </div>
                    </router-link>
                </div>
            </div>
        </van-list>
    </div>
</template>

<script>
    export default {
        name: 'goodlist',
        data () {
            return {
                items:[],
                loading: false,
                finished: false
            }
        },
        components:{
         
        },
        created(){
            this.getShopList();
        },
        mounted(){
           //
        },
        methods:{
            getShopList(){
                let curPageData = this.http.getShopList( 1 );
                this.items = this.items.concat( curPageData );
            },
            onLoad() {
                // 异步更新数据
                setTimeout(() => {
                    this.getShopList();
                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if( this.items.length >= 12 ) {
                        this.finished = true;
                    }
                }, 500);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 思路 : 通过设置外层盒子的pading属性,让其左右流出空白,
    因为留出了1%的宽度,用 justify-content: space-between 可以让元素靠左右边界
-->
<style scoped>
    .goodlist{
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
    }
    .goods_item{
        width: 48.6%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 4px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 230px;
    }
    .goods_item a{
        color: #000eee;
    }
    .goods_item img{
        width: 100%;
        min-height: 130px;
    }
    .goods_item .title{
        text-align: center;
        font-size: 14px;
    }
    .goods_item .info{
        background-color: #eee;
        color: #9D9B9B;
    }
    .info p {
        margin: 0;
    }
    .info .price .now{
        color: red;
        font-weight: bold;
        font-size: 16px;
        padding-right: 10px;
    }
    .info .price .old{
        text-decoration: line-through;
        font-size: 12px;
    }
    .info .sell{
        display: flex;
        justify-content: space-between;
        padding:5px;
    }
</style>
