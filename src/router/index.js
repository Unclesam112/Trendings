import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Blog/HomePage.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: HomeView
    },

  ]
})

// router.beforeEach((to, from, next) => {
//   // Check if the route requires authentication
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // Wait for the user's authentication status to be rehydrated
//     auth.onAuthStateChanged(user => {
//       if (user) {
//         // Check if the user's email is verified
//         if (user.emailVerified) {
//           // User is authenticated and email is verified, proceed with navigation
//           next();
//         } else {
//           // User is authenticated but email is not verified, redirect to a verification page
//           next({ path: '/unverified-email' });
//         }
//       } else {
//         // User is not authenticated, redirect to login
//         next({ path: "/signin" });
//       }
//     });
//   } else {
//     // Route doesn't require authentication, proceed with navigation
//     next();
//   }
// });

export default router
