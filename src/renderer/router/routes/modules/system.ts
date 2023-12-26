import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const SYSTEM: AppRouteRecordRaw = {
  path: '/system',
  name: 'system',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.system',
    icon: 'icon-user',
    requiresAuth: true,
    order: 1,
  },
  children: [
    {
      path: 'store',
      name: 'store',
      component: () => import('@renderer/views/system/store/index.vue'),
      meta: {
        locale: 'menu.system.store',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'store/detail',
      name: 'store-detail',
      component: () => import('@renderer/views/system/store/detail.vue'),
      meta: {
        locale: 'menu.system.store.detail',
        requiresAuth: true,
        roles: ['*'],
        hideInMenu: true,
      },
      props: (route) => ({
        id: route.query.id,
      }),
    },
    {
      path: 'user',
      name: 'system-user',
      component: () => import('@renderer/views/system/user/index.vue'),
      meta: {
        locale: 'menu.system.user',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default SYSTEM;
