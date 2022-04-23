import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Categories from "@/components/Categories";
import AddProduct from "@/components/AddProduct";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create-product',
    name: 'create-product',
    component: AddProduct

  },
  {
    path: '/categories',
    name: 'categories',
    component: Categories
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
