import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
import Chat from '@/components/Chat.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }
  ]
})
