import React, {
    Suspense,
    Fragment,
    lazy
  } from 'react';
  import {
    
    Routes,
   
    Route
  } from 'react-router-dom';
 
  import SpinnerLoading from './Components/spinner/SpinnerLoading';
 

  
  export const renderRoutes = (routes = []) => (
    <Suspense fallback={<SpinnerLoading />}>
      <Routes>
        
        {routes.map((route, i) => {
          
          const Component = route.element;
          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              element={(props) => (
                   <div>
                    <Component {...props} /> 
                    </div>
              )}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
  
  export const routes = [
    {
      exact: true,
      path: '/',
      element: lazy(() => import('./Pages/home page/Home'))
    },
    {
      exact: true,
      path: '/login',
      component: lazy(() => import('./Pages/login page/LogIn'))
    },
    {
      exact: true,
      path: '/cart',
      element: lazy(() => import('./Pages/add to cart page/Cart'))
    },

    {
      exact: true,
      path: '/products',
      element: lazy(() => import('./Pages/products page/Product'))
    },
    {
      exact: true,
      path: '/product_detiles',
      element: lazy(() => import('./Pages/product detiles page/ProductDetiles'))
    },
  
    {
      exact: true,
      path: '/wishlist',
      element: lazy(() => import('./Pages/checkout page/Checkout'))
    },
    {
      exact: true,
      path: '/checkout',
      element: lazy(() => import('./Pages/checkout page/Checkout'))
    },
    {
      exact: true,
      path: '/account',
      element: lazy(() => import('./Pages/product detiles page/ProductDetiles'))
    },
    {
      exact: true,
      path: '/myorder',
      element: lazy(() => import('./Pages/product detiles page/ProductDetiles'))
    },
    {
      exact: true,
      path: '/transfer',
     element: lazy(() => import('./Pages/Transfer and return policy page/TransferPolicy'))
    },
    {
      exact: true,
      path: '/privacy',
      element: lazy(() => import('./Pages/Privacy policy page/Privacy'))
    },
    {
      exact: true,
      path: '/contact',
      element: lazy(() => import('./Pages/contact us page/Contact'))
    },
    {
      exact: true,
      path: '/register',
      element: lazy(() => import('./Pages/register Page/Register'))
    },

    {
      exact: true,
      path: '/mywishlist',
      element: lazy(() => import('./Pages/profile page/Profile'))
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
      element: lazy(() => import('./Pages/about us page/AboutUs'))
    },
    
  ];
  
  export default routes;

      