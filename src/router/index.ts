import Vue from 'vue';
import VueRouter from 'vue-router';
import buycar from './buycar'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "basicLayout" */ '../layout/basicLayout.vue')
  },
  ...buycar,
  {
    path: '/form',
    name: 'form',
    component: () => import(/* webpackChunkName: "basicLayout" */ '../views/Formdepart.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
