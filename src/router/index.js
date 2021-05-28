import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Update from '../views/Update.vue';
import Add from '../views/Add.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ '../views/Dashboard.vue');
    },
  },
  {
    path: '/update/:id',
    name: 'Update',
    component: Update,
  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
