import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '../views/aboutme.vue'
import Services from '../views/services.vue'
import Experience from '../views/experience.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about-me',
      component: AboutMe
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
  ]
})

export default router
