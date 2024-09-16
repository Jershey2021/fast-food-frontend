import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomeScreen from "../FastFoodAppPages/HomeScreen.vue"

const routes = [
  {
    path: '/',
    redirect: '/home-screen'
  },
  {
    path: '/home-screen',
    component: HomeScreen
  },
  {
    path: '/home-screen/menu',
    component: () => import ('../FastFoodAppPages/Menu.vue')
  },
  {
    path: '/home-screen/loyalty-points',
    component: () => import ('../FastFoodAppPages/LoyaltyPoints.vue')
  },
  {
    path: '/home-screen/products',
    component: () => import ('../FastFoodAppPages/Products.vue')
  },
  {
    path: '/home-screen/products/your-order',
    component: () => import ('../FastFoodAppPages/YourOrder.vue')
  },
  {
    path: '/home-screen/products/your-order/popover',
    component: () => import ('../FastFoodAppPages/Popover.vue')
  },
  {
    path: '/home-screen/products/your-order/popover/order-summary',
    component: () => import ('../FastFoodAppPages/OrderSummary.vue')
  },
  {
    path: '/home-screen/products/your-order/popover/order-summary/order-received',
    component: () => import ('../FastFoodAppPages/OrderReceived.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
