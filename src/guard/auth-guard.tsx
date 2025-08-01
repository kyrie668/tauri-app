import { FC, ReactNode, useEffect, useState, useCallback } from 'react';
import { useAuthStore } from '@/store/auth-store'; // 导入 Zustand store
import { useLocation, useNavigate } from 'react-router';

interface AuthGuardProps {
  children: ReactNode;
}

export const AuthGuard: FC<AuthGuardProps> = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const { isAuthenticated, setAuthenticated } = useAuthStore(); // 从 Zustand 获取认证状态
  const [checked, setChecked] = useState<boolean>(false);
  const location = useLocation();

  const check = useCallback(() => {
    if (!isAuthenticated) {
      const href = `/login?returnTo=${location.pathname}`;
      navigate(href); // 重定向到登录页面
    } else {
      setChecked(true); // 如果已认证，设置 checked 状态为 true
    }
  }, [isAuthenticated, location]);

  // 只在首次渲染时检查
  useEffect(() => {
    check();
  }, [check]);

  if (!checked) {
    return null;
  }

  return <>{children}</>; // 如果已认证，返回子组件
};
