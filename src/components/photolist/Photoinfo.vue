<template>
    <div class="photoinfo">
        <h3 class="photo_title">{{newInfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{newInfo.add_time}}</span>
            <span>发表：{{newInfo.click}}次</span>
        </p>
        <hr>
        <!-- 缩略图 -->
        <div class="thumbs">
            <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"      
                preview="1" 
                preview-text="描述文字"
                large="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg"
            >
            <img src="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"      
                preview="1" 
                preview-text="描述文字"
                large="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg"
            >
        </div>
        <!-- 图片内容区域 -->
        <div class="content" v-html="newInfo.content"></div>
        <!-- 评论 -->
        <Comment></Comment>
    </div>
</template>

<script>
    import Comment from '@/components/common/comment.vue'
    export default{
        data(){
            return{
               id: this.$route.params.id || 1,
               newInfo : {},
               slide1: [
                {
                    src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                    msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                    alt: 'picture1',
                    title: 'Image Caption 1',
                    w: 600,
                    h: 400
                },
                {
                    src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                    msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                    alt: 'picture2',
                    title: 'Image Caption 2',
                    w: 1200,
                    h: 900
                }
                ]
            }
        },
        components:{
            Comment
        },
        created(){
            this.getPhotoInfoById();
        },
        mounted(){
            //图片查看器打开后，打印本次查看器的实例（事件、方法、属性的示例）
            this.$preview.on('close',(e,item)=>{
                console.log(this.$preview.self)
            })
        },
        methods:{
            // 通过id获取信息
            getPhotoInfoById(){
                this.newInfo = this.http.getPhotoInfoById();
            },
            handleClose () {
                console.log('close event')
              }
        }
    }
</script>
<style scoped>
    .photoinfo{
        padding: 3px;
    }
   .photo_title{
        text-align: center;
        font-size: 16px;
        color: #26a2ff;
        font-weight: bold;
        margin-top: 24px;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
    }
    .content{
        font-size: 13px;
        line-height: 30px;
    }
    .thumbs{
        margin: 10px;
        text-align: center;
    }
</style>