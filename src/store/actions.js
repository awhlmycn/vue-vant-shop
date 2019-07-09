/*
    vuex的actions模块
    用来去操作mutation -->因为他可以包括异步函数 而 mutation 不能
    比如从服务器得到的数据
    通过 store.dispatch('increment') 来调用
    // 以载荷形式分发
    store.dispatch('incrementAsync', {
        amount: 10
    })
    import { mapActions } from 'vuex'

    异步处理的数据在这里 其他的直接在mutation里面
*/
import {
    CLEAR_CART,
} from './mutation-types'

export default {
    // // 增加/减少指定购物车里面的商品数量
    // updateCartCount ({commit}, {food}) {
    //     if(isAdd) {
    //         commit(INCRMENT_GOODS_COUNT, {food})
    //     } else {
    //         commit(DECRMENT_GOODS_COUNT, {food})
    //     }
    // },

    // // 清空购物车
    // clearCart ({commit}, foods) {
    //     commit(CLEAR_CART, {foods})
    // },
}