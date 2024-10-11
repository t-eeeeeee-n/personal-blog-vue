import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import BlogPost from './components/BlogPost.vue'
import { store } from './store'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/post/:id', component: BlogPost }
  ]
})

const app = createApp(App)
app.use(router)
app.provide('store', store)
app.mount('#app')