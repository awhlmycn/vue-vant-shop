<template>
    <div class="member">
        <van-cell-group>
            <van-cell style="border-bottom: 1px solid #eee">
                <van-image
                  width="100"
                  height="100"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
            </van-cell>
            <van-cell size="large">
                <span class="custom-title">姓名：kilmy</span>
            </van-cell>
             <van-cell size="large">
                <span class="custom-title">电话：18817651100</span>
            </van-cell>
            <van-cell size="large">
                <span class="custom-title">积分：500</span>
            </van-cell>
            <van-cell size="large" is-link>
                <span class="custom-title">收货地址</span>
            </van-cell>
        </van-cell-group>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            value: '',
        }
    },
    methods:{
        getDetail(){
            console.log(11111);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .custom-title{
        font-size: 16px;
    }
</style>
