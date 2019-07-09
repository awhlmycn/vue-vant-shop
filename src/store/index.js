/*
vuex的核心管理对象store对象模块
 */
import Vue from 'vue'
import Vuex from 'vuex'
// 数据仓库
import state from './state'
// 同步修改数据
import mutations from './mutations'
// 异步修改数据
import actions from './actions'
// 得到数据
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

/*
    store.commit() : 保存数据
    store.state.count : 获取对象值 

 */