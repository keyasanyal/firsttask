import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import All from './components/All.vue';
import Important from './components/Important.vue';
import Notifications from './components/Notifications.vue';
import Login from './components/Login.vue';
import Sign from './components/Sign.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/All',
      name: 'all',
      component: All,
    },
    {
      path: '/important',
      name: 'important',
      component: Important,
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: Notifications,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/sign',
      name: 'sign',
      component: Sign,
    },
  ],
});