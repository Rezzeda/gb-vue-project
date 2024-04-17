import HomePage from '@/pages/HomePage.vue'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/blog',
      component: () => import('@/pages/BlogPage.vue')
    },
    {
      path: '/blog-details',
      component: () => import('@/pages/BlogDetailsPage.vue')
    },
    {
      path: '/project',
      component: () => import('@/pages/ProjectPage.vue')
    },
    {
      path: '/project/:id',
      component: () => import('@/pages/ProjectDetails.vue')
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      component: () => import('@/pages/NotFoundPage.vue')
    }
  ]
})
