<template>
    <div class="shopCart">
        <van-cell-group border>
            <van-cell v-for="(item,index) in cartList" :key="index">
                <div class="cell_item">
                    <van-checkbox  class="cellBox" v-model="item.selected" 
                        @click.prevent="updateGoods( item, 1 )"></van-checkbox>
                    <img class="cell_img" :src="item.imgUrl">
                    <div class="cell_right">
                        <h3 class="cell_top">{{item.title}}</h3>
                        <div class="cell_bottom">
                            <span class="price">￥{{item.now}}</span>
                            <van-stepper class="cell_step" @change="updateGoods(item)" v-model="item.num" integer />
                            <a href="#" class="cell_del" @click.prevent="delGoods( item.id )">删除</a>
                        </div>
                    </div>
                </div>
            </van-cell>
        </van-cell-group>
        <div class="goodsTotal" v-if="Object.keys(cartList).length>0">
            <van-checkbox v-model="checked" @click.prevent="selectAll">全选</van-checkbox>
            <span>合计：￥{{totalPrice}}</span>
            <van-button type="danger" @click.prevent="onSubmit">提交订单</van-button>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations} from 'vuex'
    export default {
        data () {
            return {
                value: '',
                checked :false,
            }
        },
        methods:{
            ...mapMutations([
                'UPDATE_GOODS_INFO',
                'DETELE_GOOGS_ONE',
                'CLEAR_CART',
                'UPDATE_ALL_CART'
            ]),
            // 更新当前item的数据
            updateGoods( item, isStatus ){
                if( isStatus ){
                    item.selected = !item.selected;
                }
                this.UPDATE_GOODS_INFO( item );
            },
            delGoods( id ){
                this.DETELE_GOOGS_ONE( id );
            },
            onSubmit(){

            },
            // 选择全部的商品
            selectAll(){
                this.UPDATE_ALL_CART( !this.checked );
            }
        },
        computed: {
            cartList(){
                return this.$store.state.cartList;
            },
            //$store.getters.totalCount
            // 使用对象展开运算符将 getter 混入 computed 对象中
            ...mapGetters([
                'totalPrice',
            ])
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .shopCart{
        background-color: #eee;
        overflow: hidden;
    }
    .cell_item{
        display: flex;
        align-items: center;
    }
    .van-cell{
        padding-left: 6px;
    }
    .cellBox{
        width: 36px;
    }
    .cell_img{
        width: 60px;
        height: 60px;
        margin-left: 10px;
    }
    .cell_top{
        font-size: 16px;
        margin-bottom: 8px;
    }
    .cell_right{
        margin-left: 14px;
        width: 100%;
    }
    .cell_bottom{
        width: 100%;
        display: flex;
        padding: 3px;
        padding-left: 0;
        align-items: center;
        justify-content: space-between;
    }
    .price{
        color: red;
        font-weight: bold;
    }
    .cell_step{
        font-size:26px;
    }
    .cell_del{
        color: #0362FA;
        font-size: 16px;
        margin-right: 16px;
    }
    .goodsTotal{
        display: flex;
        align-items: center;
        background-color: #FFFFFF;
        border-top:1px solid #ccc;
        border-bottom:1px solid #ccc;
        justify-content: space-between;
        padding: 6px;
    }
</style>
