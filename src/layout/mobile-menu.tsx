import { useState } from 'react';

import { ChevronDown, ChevronRight, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { redirect, useNavigate } from 'react-router';
import { routes } from '@/route';

interface Route {
  path: string;
  element: React.ComponentType | React.ReactElement;
  render?: boolean;
  children?: Route[];
}

const RouteButton = ({
  route,
  depth = 0,
  onNavigate,
}: {
  route: any;
  depth?: number;
  onNavigate: (path: string) => void;
}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = route.children && route.children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    } else {
      onNavigate(route.path);
    }
  };

  return (
    <div className={`w-full cursor-pointer text-[black]`}>
      <Button
        variant="ghost"
        className={`justify-start w-full text-[black] text-left ${
          depth > 0 ? 'text-sm' : 'text-base font-semibold'
        }`}
        onClick={handleClick}
      >
        {hasChildren && (
          <span className="mr-2">
            {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </span>
        )}
        {/* {!hasChildren && <div className="mr-6"></div>} */}
        {route.name}
      </Button>
      {isOpen && hasChildren && (
        <div className="ml-2 border-l-2 border-gray-200 pl-2">
          {route.children!.map((childRoute: any) => (
            <RouteButton
              key={childRoute.path}
              route={childRoute}
              depth={depth + 1}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const navigator = useNavigate();

  const handleNavigate = (path: string) => {
    navigator(path);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="absolute left-[50%] translate-x-[-50%] h-14 w-14 block md:hidden"
        >
          <Menu className="h-10 w-10" style={{ width: 26, height: 26 }} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="px-0 py-2 w-[75vw]">
        <SheetHeader>
          <SheetTitle>Vite</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="flex flex-col  mt-4">
          {routes
            .filter((route) => route.render !== false)
            .map((route) => {
              if (route.render) {
                return <RouteButton key={route.name} route={route} onNavigate={handleNavigate} />;
              }
            })}
        </div>
        <SheetClose asChild>
          <div className="w-full flex justify-end">
            <Button className="mt-8 mr-4 w-[50%]">Close</Button>
          </div>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
