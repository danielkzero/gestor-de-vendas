import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import ('@/views/LoginPage.vue')
  },
  {
    path: '/principal',
    name: 'Principal',
    component: () => import('@/views/PrincipalPage.vue')
  },
  {
    path: '/pedido',
    name: 'Pedido',
    component: () => import('@/views/PedidosPage.vue')
  },
  {
    path: '/pedido/:id',
    name: 'PedidoDetalhe',
    component: () => import('@/views/PedidoDetalhePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
