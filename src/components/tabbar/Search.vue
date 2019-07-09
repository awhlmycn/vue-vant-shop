<template>
    <div class="search">
        <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            shape="round"
            @search="onSearch"
            >
            <div slot="action" @click="onSearch">搜索</div>
        </van-search>
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
        onSearch(){
            console.log(11111);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
