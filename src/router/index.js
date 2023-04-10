import Vue from 'vue';
import VueRouter from 'vue-router';

import Layout from '@/components/Layout/Layout';

// Pages
import Dashboard from '@/pages/Dashboard/Dashboard';
import Typography from '@/pages/Typography/Typography'
import Nomina from '@/pages/Nomina/Nomina'
import Tables from '@/pages/Tables/Basic'
import Settings from '@/pages/Settings/Settings'
// import Notifications from '@/pages/Notifications/Notifications'
// import Icons from '@/pages/Icons/Icons'
import Cfdi4 from '@/pages/Cfdi4/Cfdi4'
import Error from "@/pages/Error/Error";
import Login from "@/pages/Login/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
  path: '/',
  name: 'Layout',
  redirect: 'Login',
  component: Layout,
  meta:{
    requiresAuth: true,
  },
  children: [
    {
      path: 'dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    //Catalagos list
    {
      path: 'cfdi4',
      name: 'Cfdi4',
      component: Cfdi4,
    },
    /* {
      path: 'icons',
      name: 'Icons',
      component: Icons
    }, */
    {
      path: 'nomina',
      name: 'Nomina',
      component: Nomina,
    },
    {
      path: 'tables',
      name: 'Tables',
      component: Tables
    },
    {
      path: 'typography',
      name: 'Typography',
      component: Typography,
    },
    {
      path: 'settings',
      name: 'Settings',
      component: Settings,
    },
    /* {
      path: 'notifications',
      name: 'Notifications',
      component: Notifications
    }, */
  ],
},
  {
    path: '*',
    name: 'Error',
    component: Error
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
}); 

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.token != undefined) {
      next();
    } else {
      next({ name: 'Login' });
    }
  } else {
    next();
  }
});

export default router;
