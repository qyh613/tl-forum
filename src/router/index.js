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
                        path: '',
                        component: Login,
                    },
                    {
                        path: '/personalDetails',
                        component:PersonalDetails,
                    },
                    {
                        path: '/personalInformation',
                        component:PersonalInformation,
                    },

                    {
                        path: '/changeUserInfo',
                        component:ChangeUserInfo,
                    },
                    {
                        path: '/register',
                        component:Register,
                    },

                    {
                        path: '/participate',
                        component:Participate,
                    },
                    {
                        path: '/forget',
                        component:Forget,
                    },
                ]

            }, {
                path: '/foundDetails',
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
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
