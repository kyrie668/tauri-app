import { FC, ReactNode, useEffect, useState, useCallback } from 'react';
import { useAuthStore } from '@/store/auth-store'; // 导入 Zustand store
import { Link, useLocation, useNavigate } from 'react-router';

interface AuthGuardProps {
  children: ReactNode;
}

export const DeviceGuard: FC<AuthGuardProps> = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const [deviceType, setDeviceType] = useState<'mobile' | 'desktop'>('mobile');

  const getDeviceType = () => {
    const userAgent = navigator.userAgent;
    // 判断设备宽度是否小于 768px
    const isMoblieWidth = window.innerWidth < 768;

    // 判断为手机端还是桌面端
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      setDeviceType('mobile');
    } else if (isMoblieWidth) {
      setDeviceType('mobile');
    } else {
      setDeviceType('desktop');
    }
  };

  // 只在首次渲染时检查
  useEffect(() => {
    // 监听视口变化
    const handleResize = () => {
      getDeviceType();
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (deviceType === 'mobile') {
    return (
      <div>
        <h3>This page is not available on mobile devices.</h3>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return <>{children}</>;
};
