/*
    vuex的mutations模块
    用于数据的提交-->修改
*/
import {setStore, getStore} from '../utils/util.js'
import {
    INCRMENT_CART_GOODS,
    UPDATE_GOODS_INFO,
    DETELE_GOOGS_ONE,
    INIT_BUYCART,
    CLEAR_CART,
    UPDATE_ALL_CART,
} from './mutation-types'

export default {
    // id : 1,imgUrl : '../../static/images/swipe_3.jpg',title : 
    // '小米',seleced : false,sell_price : 99,num : 1
    [INCRMENT_CART_GOODS](state, {shop}) {
        let cartList = state.cartList;
        if( cartList[ shop.id ] ) {
            cartList[ shop.id ].num++;
        }
        else {
            cartList[ shop.id ] = shop;
        }
        
        //存入localStorage
        state.cartList = { ...state.cartList };
        setStore('buyCart', state.cartList);
    },
    [UPDATE_GOODS_INFO](state, obj) {
        let cartList = state.cartList;
        if( cartList[ obj.id ] ) {
            cartList[ obj.id ].selected = obj.selected;
            cartList[ obj.id ].num = obj.num;
        }
        //存入localStorage
        state.cartList = { ...state.cartList };
        setStore('buyCart', state.cartList );
    },
    [UPDATE_ALL_CART](state, status) {
        let cartList = state.cartList;
        for( let cart in cartList ){
            cartList[ cart].selected = status;
        }
        //存入localStorage
        state.cartList = { ...state.cartList };
        setStore('buyCart', state.cartList);
    },
    // 删除一个商品
    [DETELE_GOOGS_ONE]( state, id ) {
        let cartList = state.cartList;
        if( cartList[ id ]){
            delete cartList[ id ];
        }
        //存入localStorage
        state.cartList = { ...state.cartList };
        setStore('buyCart', state.cartList);
    },
    //网页初始化时从本地缓存获取购物车数据
    [INIT_BUYCART](state) {
        let initCart = getStore('buyCart');
        if (initCart) {
            state.cartList = JSON.parse(initCart);
        }
        else {
            state.cartList = {};
        }
    },
    // 清除购物车
    [CLEAR_CART](state) {
        state.cartList = {};
        //存入localStorage
        state.cartList = { ...state.cartList };
        setStore('buyCart', state.cartList);
    },
}