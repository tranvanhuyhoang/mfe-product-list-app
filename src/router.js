import { createRouter, createWebHistory } from "vue-router"
import HelloWorld from "./components/HelloWorld.vue"

const routes = [
  {
    path: "/product-list",
    name: "product-list",
    component: HelloWorld,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
