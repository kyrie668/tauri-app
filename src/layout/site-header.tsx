import { Link, useRoutes, useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { MobileMenu } from './mobile-menu';
import { DesktopMenu } from './desktop-menu';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export function SiteHeader() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang); // 切换语言
    setLanguage(lang);
  };
  useEffect(() => {
    setLanguage(i18n.language); // 初始化时设置语言
  }, [i18n.language]);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/vite.svg" height={40} width={40} alt="logo" />
          <p>{t('greeting', { name: 'Kyrie' })}</p>
        </Link>
        <DesktopMenu />
        <MobileMenu />

        <div className="items-center space-x-4 ">
          <Button
            variant="ghost"
            className="text-sm hidden sm:inline-block"
            onClick={() => navigate('/login')}
          >
            Sign In
          </Button>
          <Button
            variant="ghost"
            className="text-sm w-min-[100px]"
            style={{ minWidth: '100px' }}
            onClick={() => handleLanguageChange(language === 'zh' ? 'en' : 'zh')}
          >
            {language === 'zh' ? 'English' : '中文'}
          </Button>
        </div>
      </div>
    </header>
  );
}
