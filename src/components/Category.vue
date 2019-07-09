<!-- https://blog.csdn.net/michael_ouyang/article/details/76615373 -->
<template>
    <div class="hello">
       <!-- 六宫格 -->
        <div class="blockDiv">
            <div class="block mui-table-view mui-grid-view">
                <div class="mui-table-view-cell">
                    <img src="http://pic37.nipic.com/20140113/8800276_184927469000_2.png" alt="">
                    <div class="mui-media-body">Home</div>
                </div>
            </div>
            <div class="block mui-table-view mui-grid-view">
                <div class="mui-table-view-cell">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">Home</div>
                </div>
            </div>
            <div class="block mui-table-view mui-grid-view">
                <div class="mui-table-view-cell">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">Home</div>
                </div>
            </div>
            <div class="block mui-table-view mui-grid-view">
                <div class="mui-table-view-cell">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">Home</div>
                </div>
            </div>
            <div class="block mui-table-view mui-grid-view">
                <div class="mui-table-view-cell">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">Home</div>
                </div>
            </div>
            <div class="block mui-table-view mui-grid-view">
                <div class="mui-table-view-cell">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">Home</div>
                </div>
            </div>
            <div class="block mui-table-view mui-grid-view">
                <div class="mui-table-view-cell">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">Home</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            value: '',
            selected : '1'
        }
    },
    methods:{
       
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .blockDiv{
        width: 100%;
        display:flex;
        flex-wrap: wrap;
    }
    .block{
        width: calc(calc(100% / 3) - 10px);
        margin:5px;
        height:90px;
        box-sizing: border-box;
        border:1px  solid #000;
        text-align: center;
    }
    .block img{
        margin-top: 20px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .mui-table-view-cell img{
        width: 30x;
        height: 30px;
    }
</style>
