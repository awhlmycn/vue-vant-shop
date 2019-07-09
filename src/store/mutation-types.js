/*
    mutation type常量名称模块-->即方法的类型
*/
export const INCRMENT_CART_GOODS = 'INCRMENT_CART_GOODS' // 增加购物项中商品
export const UPDATE_GOODS_INFO = 'UPDATE_GOODS_INFO' // 更新购物项中商品信息
export const DETELE_GOOGS_ONE = 'DETELE_GOOGS_ONE'      //删除购物车里一个商品
export const INIT_BUYCART  = 'INIT_BUYCART'  //页面初始化把localStorage中的数据放入vuex中
export const UPDATE_ALL_CART = 'UPDATE_ALL_CART' //更新所有商品为选中状态
export const CLEAR_CART = 'CLEAR_CART' // 清空购物车