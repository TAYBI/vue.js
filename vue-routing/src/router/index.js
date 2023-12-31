import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import BlogView from '@/views/blog/BlogView.vue'
import BlogDetails from '@/views/blog/BlogDetails.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import 'bootswatch/dist/sketchy/bootstrap.min.css';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/blog/:id',
    name: 'BlogDetails',
    component: BlogDetails,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: PageNotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
