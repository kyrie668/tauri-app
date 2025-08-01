import { Navigate } from 'react-router';
import SuspenseLazy from '@/components/suspense-lazy';
import Page404 from './pages/page404';
import React from 'react';
// import Home from './pages/home';
// import About from './pages/about';
// import { Login } from './pages/login';

const Home = SuspenseLazy(() => import('@/pages/home'));
const About = SuspenseLazy(() => import('@/pages/about'));
const Login = SuspenseLazy(() => import('@/pages/login'));

export const routes = [
  {
    path: '/',
    element: <Navigate to="/home/test" />, // 重定向
    render: false,
  },
  {
    // path: '/home',
    name: 'Home',
    element: Home,
    render: true,
    children: [
      {
        path: '/home/test',
        element: About,
        name: 'Home Test',
        render: true,
      },
      {
        path: '/home/test22',
        element: About,
        name: 'Home test22',
        render: true,
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    element: About,
    render: true,
    children: [
      {
        path: '/about/test555',
        element: Home,
        name: 'about Tes444t',
        render: true,
      },
      {
        path: '/about/test2246464',
        element: About,
        name: 'about tes44t22',
        render: true,
      },
    ],
  },
  {
    path: '/login',
    element: Login,
    name: 'login',
    render: false,
  },
  // 未匹配到页面
  {
    path: '*',
    element: <Page404 />,
  },
];
