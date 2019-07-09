<template>
    <div class="newInfo">
        <h1 class="title">{{newInfo.zhaiyao}}</h1>
        <div class="subTitle">
           <span>发表时间：{{newInfo.add_time}}</span>
           <span>点击次数：{{newInfo.click}}次</span>
        </div>

        <hr>
        <div class="content" v-html="newInfo.content"></div>
        <!-- 评论区 -->
        <Comment></Comment>
    </div>
</template>

<script>
    import Comment from '@/components/common/comment.vue'
    export default {
        name: 'newInfo',
        data () {
            return {
                id: this.$route.params.id || 1,
                newInfo : {}
            }
        },
        components:{
            Comment
        },
        mounted(){
            this.getNewsInfo();
        },
        methods:{
            getNewsInfo(){
                this.newInfo = this.http.getNewDetail( this.id );
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .newInfo{
        padding:0 4px;
        padding-bottom: 20px;
    }
    .title{
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        margin: 14px 0;
        color: red;
    }
    .subTitle{
        display: flex;
        justify-content: space-between;
        color: #226aff;
        font-size: 13px;
    }
</style>
