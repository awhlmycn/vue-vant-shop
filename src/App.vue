<template>
    <div id="app">
        <!-- 标题 -->
        <div class="page-header">
            <van-nav-bar fixed>
                <van-icon name="arrow-left" slot="left" 
                    class="header-cell"
                    @click="onClickLeft"
                    v-if="flag"
                    >
                        返回
                    </van-icon>
                <van-icon slot="title" class="header-cell">{{title}}</van-icon>
            </van-nav-bar>
        </div>
        <!-- 增加动画效果 -->
        <transition>
            <router-view/>
        </transition>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from '@/components/Footer.vue'
    import { mapMutations } from 'vuex'
    export default {
        name: 'App',
        data(){
            return{
                flag : false,
                title:''
            }
        },
        components:{
            Footer
        },
        created(){
            this.INIT_BUYCART();
            this.flag = this.$route.meta.isNav ? false : true; 
            this.title = this.$route.meta.name;
        },
        watch:{
            '$route.path':function( newVal, oldVal ) {
                if( this.$route.meta.isNav ) {
                    this.flag = false
                }
                else{
                    this.flag = true
                }
                this.title = this.$route.meta.name;
            }
        },
        methods:{
            ...mapMutations([
                'INIT_BUYCART'
            ]),
            onClickLeft(){
                // this.$router.go(-1);
                window.history.back();
            }
        }
    }
</script>

<style>
    /*
        去除上面表头与下面tabbar
     */
    #app{
        padding-top: 45px;
        padding-bottom: 54px;
    }
    body {
      font-size: 16px;
      background-color: #f8f8f8;
      -webkit-font-smoothing: antialiased;
    }
    .van-nav-bar{
        background: #26a2ff !important;
    }
    .header-cell{
        color: #fff !important;
    }
    /*修改tab的底部横条样式*/
    .van-tabs__line{
        background-color: #26a2ff !important;
    }
</style>
