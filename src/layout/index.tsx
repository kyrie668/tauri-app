import React, { ReactNode } from 'react';
import { Link } from 'react-router';
import { useRoutes } from 'react-router';
import { routes } from '../route';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';

const Layout: React.FC = () => {
  const element = useRoutes(routes);
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <SiteHeader />
      <div className="flex max-w-[100%]" style={{ flex: '1 1 auto' }}>
        <div className="flex w-[100%] flex-col" style={{ flex: '1 1 auto', width: '100%' }}>
          <div className="min-h-screen">
            <main>{element}</main>
          </div>
        </div>
      </div>
      <SiteFooter />
      {/* <div className="w-full h-full flex flex-col overflow-hidden text-[#63ECFF]">
      <header className="flex justify-between items-center bg-gray-100 h-[110px] bg-contain px-16 py-10">
        <div className="flex items-center gap-4 font-bold text-[#63ECFF] text-[40px] mt-[-16px]">
          <Link className="text-white-700" to={'/home'}>
            Home
          </Link>
          <Link className="text-white-700" to={'/about'}>
            About
          </Link>
        </div>
        <div className="flex-1 text-[16px] font-[400] flex items-center h-full mt-[-1%]">
          <div className="ml-[73%] text-nowrap cursor-pointer" onClick={() => setOpen(true)}>
            您好，Admin
          </div>
          <div className="ml-[12%] text-nowrap cursor-pointer">退出</div>
        </div>
      </header>
      <main className="flex-1 px-2 pb-6">{element}</main>
    </div> */}
    </>
  );
};

Layout.propTypes = {};

export default Layout;
