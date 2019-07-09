<template>
    <div class="page-navbar">
        <van-tabs v-model="activeId" swipeable 
            :swipe-threshold="4"
            :line-width="70"
            sticky
            :offset-top="46"
            >
            <van-tab v-for="(item,index) in categorys" 
                :title="item.title" :key="index"
                >
                <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                    >
                   
                    <van-cell v-for="(item,index) in photoList"
                        :key="index"
                        >
                        <router-link :to="'/home/photoinfo/' + item.id ">
                            <img :src="item.imgUrl" style="width: 100%;height: auto;">
                            <div class="info">
                                <h1 class="info-title">{{item.title}}</h1>
                                <div class="info-body">{{item.zhaiyao}}</div>
                            </div>
                        </router-link>
                    </van-cell>
                </van-list>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                activeId: 0,
                categorys:[],
                photoList : [],
                loading: false,
                finished: false
            }
        },
        created(){
            this.getCategory();
            this.getPhotoListById();
        },
        watch:{
            // 监听tab选择变化
            activeId( oldVal, val) {
               this.getPhotoListById();
            }
        },
        methods:{
            // 获取所有的种类
            getCategory(){
                this.categorys = this.http.getCategory();
            },
            // 根据分类id获取图片列表
            getPhotoListById(){
                let titleTest = this.categorys[this.activeId]
                this.photoList = this.http.getPhotoList( this.activeId );
            },
            onLoad() {
                console.log("loading!~~~~");
                setTimeout(() => {
                    this.getPhotoListById();
                    // 加载状态结束
                    this.loading = false;
                    // 数据全部加载完成
                    if(this.photoList.length >= 10) {
                        this.finished = true;
                    }
                }, 1000);
            }
        }
    }
</script>
<style scoped>
    *{
        touch-action: pan-y; 
    }
    .page-navbar img{
        width: 100%;
        height: 100px;
    }
    /*列表ul*/
    .van-cell{
        padding:10px;
        box-shadow: 0 0 6px #999;
        position: relative;
    }
    .info{
        position: absolute;
        bottom: 6px;
        color: #fff;
        text-align: left;
        background-color: rgba(0,0,0,0.4);
        max-height: 96px;
    }
    .info-title{
        font-size: 14px;
    }
    .info-body{
        font-body:13px;
    }
</style>