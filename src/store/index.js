import Vue from 'vue'
import Vuex from 'vuex'
import {getUserInfo} from "../api/LogIn-api";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        isLogin: false,
        userInfo: {},
        showShare:false,
    },
    mutations: {
        changeLogin(state, {isLogin}) {
            state.isLogin = isLogin
        },
        changeUserInfo(state, {userInfo}) {
            state.userInfo = userInfo
        },
        changeShare(state,{showShare}){
            state.showShare = showShare
        }
    },
    actions: {

        checkLoginStatus(context) {
            return getUserInfo().then(res => {
                if (res.code == 0) {
                    //    已经登陆
                    context.commit("changeLogin", {isLogin: true})
                    context.commit("changeUserInfo", {userInfo: res.data.userInfo})
                } else {
                    //没有登陆
                    context.commit("changeLogin", {isLogin: false})
                    context.commit("changeUserInfo", {userInfo: {}})
                }
            })
        }

    },
    modules: {}
})
