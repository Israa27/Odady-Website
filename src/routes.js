import React, {lazy} from 'react';

  const layouts=lazy(() => import('./layouts/Layouts'))
  const profile=lazy(() => import('./Pages/profile page/Profile'))
  const NotFound=lazy(() => import('./Pages/not found page/NotFound'))
  export const routes = [
    {
      exact: true,
      path: '/',
      element: layouts
    },
    {
      exact: true,
      path: '/login',
      component: lazy(() => import('./Pages/login page/LogIn'))
    },
    {
      exact: true,
      path: '/cart',
      element: layouts
    },

    {
      exact: true,
      path: '/products',
      element: layouts
    },
    {
      exact: true,
      path: '/product_detiles',
      element: layouts
    },
  
    {
      exact: true,
      path: '/wishlist',
      element: layouts
    },
    {
      exact: true,
      path: '/checkout',
      element:layouts
    },
    {
      exact: true,
      path: '/profile_user',
      element: profile
    },
    {
      exact: true,
      path: '/account',
      element: profile
    },
    {
      exact: true,
      path: '/myorder',
      element: profile
    },
    {
      exact: true,
      path: '/user',
      element: profile
    },
    {
      exact: true,
      path: '/transfer',
     element: layouts
    },
    {
      exact: true,
      path: '/privacy',
      element: layouts
    },
    {
      exact: true,
      path: '/contact',
      element: layouts
    },
    {
      exact: true,
      path: '/register',
      element: lazy(() => import('./Pages/register Page/Register'))
    },

   
     
    {
      exact: true,
      path: '/forgetpassword',
      element: lazy(() => import('./Pages/forget password/ForgetPassword'))
    },
    {
      exact: true,
      path: '/resetpassword',
      element: lazy(() => import('./Pages/reset password/ResetPassword'))
    },
    {
      exact: true,
      path: '/about',
      element: layouts
    },
    {
      exact: true,
      path: '/not_found',
      element: NotFound
    },
    
    
  ];
  
  export default routes;

      