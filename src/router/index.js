import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexLayout from "../layout/IndexLayout";
import Mine from "../views/Mine/Mine";
import Index from "../views/Index/Index";
import Search from "../views/Index/components/Search";
import PostDetails from "../views/Index/components/PostDetails";
import FoundDetails from "../views/Index/components/FoundDetails";
// import Attention from "../views/Index/Attention";
// import Recommend from "../views/Index/Recommend";


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
            }, {
                path: '/foundDetails',
                component: FoundDetails,
                name:"FoundDetails"
            },
        ]
    },{
        path: '/search',
        component: Search,
    },{
        path: '/post/details/:postsId',
        component: PostDetails,
    }
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
