<template>
    <div class="page-footer">
        <van-tabbar route inactive-color="#7d7e80" v-model="active">
            <van-tabbar-item replace to="/home" icon="home-o">
                首页
            </van-tabbar-item>
            <van-tabbar-item replace to="/search" icon="search">
                搜索
            </van-tabbar-item>
            <van-tabbar-item replace to="/shopcart" icon="shopping-cart" :info="totalCount" id="badge">
                购物车
            </van-tabbar-item>
            <van-tabbar-item replace to="/member" icon="manager">
                会员
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data () {
            return {
               active: 0
            }
        },
        computed: {
            //$store.getters.totalCount
            // 使用对象展开运算符将 getter 混入 computed 对象中
            ...mapGetters([
                'totalCount',
            ])
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
