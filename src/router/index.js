import { createRouter, createWebHistory } from 'vue-router'
import Contest from '../Pages/Contests/index.vue'
import Forget from '../Pages/Forget/index.vue'
import Home from '../Pages/Home/index.vue'
import PlayList from '../Pages/PlayList/index.vue'
import My_List from '../Pages/MyList/P-PLAYLIST_DETAIL.html'
import Profile from '../Pages/Profile/index.vue'
import Register from '../Pages/Register/index.vue'
import Layout from '../Pages/Layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  //path, component
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home,
        },
        {
          path: 'playlist/:id',
          component: PlayList,
        },
        {
          path: 'playlist/my_list/:id',
          component: My_List,
        },
        {
          path: 'contest/:id',
          component: Contest,
        },
        {
          path: 'profile/:id',
          component: Profile,
        },
      ]
    },
    {
      path: '/register',
      component: Register,
    }, 
    {
      path: '/forget',
      component: Forget,
    }
  ],
})

export default router



