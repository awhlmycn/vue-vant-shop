<template>
    <div class="cmt-container">
        <hr>
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要说的内容(最多120字)" maxlength="120" v-model="textval"></textarea>
        <van-button type="primary" size="large" @click="sendComment()">发表评论</van-button>
        <!-- 评论内容区 -->
        <div class="cmt-list" v-for="(item,index) in commentNum" :key="index">
            <div class="cmt-item">
                <div class="cmt-title">
                    第{{index+1}}楼&nbsp;&nbsp; 用户:匿名用户&nbsp;&nbsp;&nbsp;&nbsp;发表时间: 2019-07-04 20:16:52
                </div>
                <div class="cmt-body">
                    时间过半
                </div>
            </div>
        </div>
        <van-button type="danger" size="large" @click="loadMore()" plain>加载更多</van-button>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default{
        data(){
            return{
                textval : '',
                commentNum : 3
            }
        },
        methods:{
            sendComment(){
                if( !this.textval ){
                    Toast({
                        message: '请输入内容',
                        position: 'top',
                        duration: 1000
                    });
                    return
                }
                this.commentNum += 1;
                Toast({
                    message: '操作成功',
                    position: 'top',
                    iconClass: 'mui-icon mui-icon-checkmarkempty',
                    duration: 1500,
                    className : 'cmt-success'
                });
                this.textval = '';
            },
            // 加载更多
            loadMore(){
                this.commentNum += 1;
                Toast({
                    message: '加载完成',
                    position: 'top',
                    iconClass: 'mui-icon mui-icon-checkmarkempty',
                    duration: 1500,
                    className : 'cmt-success'
                });
            }
        }
    }
</script>

<style scoped>
    h3{
        font-size: 18px;
        font-weight: bold;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        width: 98%;
        margin: 0;
    }
    .cmt-list{
        margin:5px 0;
    }
    .cmt-item{
        font-size: 13px;
    }
    .cmt-title{
        line-height: 30px;
        background: #ccc;
    }
    .cmt-body{
        line-height: 35px;
        text-indent: 1em;
    }
</style>