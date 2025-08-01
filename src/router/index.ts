import { createRouter, createWebHistory } from 'vue-router'
import Contest from '../Pages/Contests/index.vue'
import Forget from '../Pages/Forgot/index.vue'
import Home from '../Pages/Home/index.vue'
import PlayList from '../Pages/Playlists/index.vue'
import Profile from '../Pages/Profile/index.vue'
import Register from '../Pages/Register/index.vue'
import Layout from '../Pages/Layout/index.vue'
import Contest_Detail from '../Pages/Contest_Detail/index.vue'
import Problems from '../Pages/Problems/index.vue'
import Message from '../Pages/Message/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: Home,
          redirect: '/home/message',
          children: [
            {
              path: 'message',
              component: Message,
              meta: { navKey: 'message', menuIndex: 1 }
            },
            {
              path: 'contest',
              component: Contest,
              meta: { navKey: 'contest', menuIndex: 4 }
            },
            {
              path: 'problems',
              component: Problems,
              meta: { navKey: 'problem', menuIndex: 3 }
            },
            {
              path: 'sheet',
              component: PlayList,
              meta: { navKey: 'sheet', menuIndex: 2 }
            },
            {
              path: 'profile',
              component: Profile,
              meta: { navKey: 'profile', menuIndex: 5 }
            }
          ]
        },
      ]
    },
  ],
})

export default router



