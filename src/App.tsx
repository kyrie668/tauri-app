import React, { useEffect } from 'react';
import './App.css';
import { Button } from '@/components/ui/button';
import { get } from './request';
import Layout from './layout';
import { useAuthStore } from './store/auth-store';

function App() {
  const { isAuthenticated, setAuthenticated } = useAuthStore(); // 从 Zustand 获取认证状态

  // useEffect(() => {
  //   get('/api/test', { data: 222 }).then((res) => {
  //     console.log(res);
  //   });
  // }, []);
  // 切换路由时，body的滚动条会回到顶部，这里使用useEffect监听路由变化，并将滚动条位置保存到localStorage
  // useEffect(() => {
  //   setAuthenticated(true)
  // }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <Layout></Layout>;
}

export default App;
