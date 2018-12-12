import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Calendar from './components/Calendar.vue';
import Add  from './components/Add.vue';
import Work from './components/Work.vue';
import School from './components/School.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar,
    },
    {
      path: '/Add',
      name: 'add',
      component: Add,
    },
    {
      path: '/work',
      name: 'work',
      component: Work,
    },
    {
      path: '/school',
      name: 'school',
      component: School,
    },
  ],
});