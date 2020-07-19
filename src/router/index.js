import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexLayout from "../layout/IndexLayout";
import Mine from "../views/Mine/Mine";
import Index from "../views/Index/Index";
import Search from "../views/Index/components/Search";
import PersonalDetails from "../views/Mine/components/PersonalDetails";
import Login from "../views/Mine/components/Login";
import PersonalInformation from "../views/Mine/components/PersonalInformation";
import ChangeUserInfo from "../views/Mine/components/ChangeUserInfo";
import Register from "../views/Mine/components/Register";
import Participate from "../views/Mine/components/Participate";
import Forget from "../views/Mine/components/Forget";
import FoundDetails from "../views/Index/components/FoundDetails";
import PostDetails from "../views/Index/components/PostDetails";
import store from "../store/index";
import Publish from "../views/Publish/Publish";
import MyPostDetails from "../views/Mine/components/MyPostDetails";
import NewsDetails from "../views/News/components/NewsDetails";
import changePost from "../views/Mine/components/changePost";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/index',
    }, {
        path: '/index',
        component: IndexLayout,
        children: [
            {
                path: '',
                component: Index,

            }, {
                path: '/mine',
                component: Mine,
                children:[
                    {
                        path: '/mine/login',
                        component: Login,
                    },
                    {
                        path: '/mine',
                        redirect: '/mine/login',
                    },
                    {
                        path: '/mine/personalDetails',
                        component:PersonalDetails,
                        meta: {
                            //需要登录才能访问
                            isAuth: true
                        }
                    },
                    {
                        path: '/mine/personalInformation',
                        component:PersonalInformation,
                        meta: {
                            //需要登录才能访问
                            isAuth: true
                        }
                    },

                    {
                        path: '/mine/changeUserInfo',
                        component:ChangeUserInfo,
                        meta: {
                            //需要登录才能访问
                            isAuth: true
                        }
                    },
                    {
                        path: '/mine/register',
                        component:Register,
                    },

                    {
                        path: '/mine/participate',
                        component:Participate,
                        //我参与的
                        meta: {
                            //需要登录才能访问
                            isAuth: true
                        }

                    },
                    {
                        path: '/mine/forget',
                        component:Forget,
                    },
                    {
                        path: '/mine/post/details/:postsId',
                        component: MyPostDetails,
                        meta: {
                            //需要登录才能访问
                            isAuth: true
                        }
                    },
                    {
                        path: '/mine/changePost/:postsId/:title',
                        component:changePost ,
                        meta: {
                            //需要登录才能访问
                            isAuth: true
                        }
                    },
                ]

            }, {
                path: '/mine/foundDetails',
                component: FoundDetails,
                name:"FoundDetails"
            },
        ]
    },
    {
        path: '/search',
        component: Search,
    },{
        path: '/post/details/:postsId',
        component: PostDetails,
    },
    {
        path: '/publish',
        component: Publish,
        meta: {
            //需要登录才能访问
            isAuth: true
        }
    },{
        path: '/newsDetails/:articleId',
        component: NewsDetails,
    }

]
//执行路由守卫之前先检测
const loginPromise = store.dispatch("checkLoginStatus")
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
//路由守卫
router.beforeEach((to, from, next) => {
    // ...
    if (to.meta.isAuth) {
        //需要鉴权
        loginPromise.then(()=>{
            if(store.state.isLogin){
                next()
            }else {

                next("/mine/login")
            }

        })
    } else {
        next()
    }

    // next(false)
    // next('/index')
})



export default router
