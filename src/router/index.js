import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import AddTodo from '../components/todo/createtodo.vue';

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/add-new',
    name: 'AddTodo',
    component: AddTodo,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
