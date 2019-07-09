<template>
    <div class="newList">
        <div v-for="(item, index) in newList" :key="index">
            <router-link :to="'/home/newsInfo/' + item.id">
                <van-card :title="item.title" class="news-card">
                    <div slot="tags" class="extra-info">
                        <span class="card-time">发表时间：{{item.add_time}}</span>
                        <span class="card-num">点击次数：{{item.click}}次</span>
                    </div>
                </van-card>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'newList',
    data () {
        return {
            newList : []
        }
    },
    mounted(){
        this.getnewList();
    },
    methods:{
        getnewList(){
            this.newList = this.http.getNewList();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .news-card{
        padding: 10px;
        border-bottom: 1px solid #8F8B8B;
        height: 70px;
    }
    .van-card__title{
        font-size: 16px;
        font-weight: bold;
    }
    .extra-info{
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        color: #26a2ff;
        font-size: 14px;
    }
</style>
