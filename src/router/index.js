import Vue from 'vue'
import Router from 'vue-router'
import axios from "axios";

Vue.use(Router)

const routes = [{
        path: "/",
        redirect: "/content/home/homeList/hot"
    },
    {
        path: "/content",
        name: "content",
        component: () =>
            import ("view/content"),
        children: [{
                path: "home",
                name: "home",
                component: () =>
                    import ("view/content/home"),
                children: [{
                        path: "homeList",
                        name: "homeList",
                        component: () =>
                            import ("view/content/home/homeList"),
                        children: [{
                                path: "hot",
                                name: "hot",
                                component: () =>
                                    import ("view/content/home/homeList/hot")
                            },
                            {
                                path: "combination",
                                name: "combination",
                                component: () =>
                                    import ("view/content/home/homeList/combination")
                            }
                        ]
                    },
                    {
                        path: "paycycle", //支付周期
                        name: "paycycle",
                        component: () =>
                            import ("view/content/home/pay/payCycle"),
                    }
                ]
            },
            {
                path: "wode",
                name: "wode",
                component: () =>
                    import ("view/content/mine"),
            },
        ]
    },
    {
        path: "/shopcar",
        name: "shopcar",
        component: () =>
            import ("view/shopcar"),
    },
    {
        path: "/shoplist",
        name: "shoplist",
        component: () =>
            import ("view/content/shopList"),
    },
    {
        path: "/comboList",
        name: "comboList",
        component: () =>
            import ("view/content/comboList"),
    },
    {
        path: "/handle",
        name: "handle",
        component: () =>
            import ("view/handle"),
        children: [{
                path: "login",
                name: "login",
                component: () =>
                    import ("view/handle/login")
            },
            {
                path: "registry",
                name: "registry",
                component: () =>
                    import ("view/handle/registry")
            }
        ]
    },
    {
        path: "/lease", //租约进行中
        name: "lease",
        component: () =>
            import ("view/lease")
    }, {
        path: "/rent", //缴租金
        name: "rent",
        component: () =>
            import ("view/lease/rent/rent"),
    }, {
        path: "/renthistory", //租金记录
        name: "renthistory",
        component: () =>
            import ("view/lease/rent/rentHistory")
    }, {
        path: "/question", //问题咨询
        name: "question",
        component: () =>
            import ("view/lease/question/question")
    }, {
        path: "/feedback", //问题反馈
        name: "feedback",
        component: () =>
            import ("view/lease/question/feedback"),
    }, {
        path: "/success", //提交成功
        name: "success",
        component: () =>
            import ("view/lease/question/success")
    }, {
        path: "/leaserent", //续租
        name: "leaserent",
        component: () =>
            import ("view/lease/lease/leaseRent")
    }, {
        path: "/leasehistory", //续租记录
        name: "leasehistory",
        component: () =>
            import ("view/lease/lease/leaseHistory")
    }, {
        path: "/repairs", //报修
        name: "repairs",
        component: () =>
            import ("view/lease/repairs")
    },
    {
        path: "/protocol", //协议
        name: "protocol",
        component: () =>
            import ("view/content/home/pay/protocol")
    },
    {
        path: "/paymoney", //支付
        name: "paymoney",
        component: () =>
            import ("view/content/home/pay/payMoney")
    },
    {
        path: "/dispatch", //配送中
        name: "dispatch",
        component: () =>
            import ("view/tenancy/dispatch")
    },
    {
        path: "/news", //消息
        name: "news",
        component: () =>
            import ("view/news")
    },
    {
        path: "/noTenancy", //未租约
        name: "noTenancy",
        component: () =>
            import ("view/tenancy/noTenancy")
    },
    {
        path: "/tenancying", //租约进行中
        name: "tenancying",
        component: () =>
            import ("view/tenancy/tenancying")
    },
    {
        path: "/changepwd", //我的页面修改密码
        name: "changepwd",
        component: () =>
            import ("view/changepwd")
    },
    {
        path: "/changephone", //我的页面修改手机号
        name: "changephone",
        component: () =>
            import ("view/changePhone")
    },
    {
        path: "/application",
        name: "application",
        component: () =>
            import ("view/repairMore/application")
    }, {
        path: "/repair",
        name: "repair",
        component: () =>
            import ("view/repairMore/repair")
    }, {
        path: "/repairList",
        name: "repairList",
        component: () =>
            import ("view/repairMore/repairList")
    }, {
        path: "/throwLease",
        name: "throwLease",
        component: () =>
            import ("view/throw/throwLease")
    }, {
        path: "/approved",
        name: "approved",
        component: () =>
            import ("view/throw/approved")
    }, {
        path: "/throwLeaseTwo",
        name: "throwLeaseTwo",
        component: () =>
            import ("view/throw/throwLeaseTwo")
    }
]
const router = new Router({
    mode: "history",
    routes
})

// router.beforeEach((to, from, next) => {
//     let token = document.cookie.split("=")[1];
//     if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//         if (token) { //判断本地是否存在access_token
//             axios.get(`/isToken?token=${token}`).then(res => {
//                 if (res.data.code === 0) {
//                     next();
//                 }
//             })
//         } else {
//             next({
//                 path: `/login?from=${to.name}`
//             })
//         }
//     } else {
//         next();
//     }
//     /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
//     if (to.fullPath == "/login") {
//         if (token) {
//             next({
//                 path: from.fullPath
//             });
//         } else {
//             next();
//         }
//     }
// });

export default router