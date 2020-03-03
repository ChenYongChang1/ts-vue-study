const buycar = [
  {
    path: '/buycar',
    name: 'buycar',
    redirect: '/buycar/buycarlist',
    component: () => import(/* webpackChunkName: "basicLayout" */ '../layout/buycarLayout.vue'),
    children:[
      {
        name: "buycarlist",
        path: "/buycar/buycarlist",
        component: () => import("../views/BuyCar.vue"),
        meta: {
          title: "购物车",
        }
      },
    ]
  },
]

export default buycar