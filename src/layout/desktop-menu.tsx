import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { routes } from '@/route';
import { Link, redirect } from 'react-router';

interface Route {
  path: string;
  element: React.ComponentType | React.ReactElement;
  render?: boolean;
  children?: Route[];
  name: string;
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, any>(
  ({ className, title, children, path, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild style={{ backgroundColor: 'transparent' }}>
          <Link
            to={path}
            ref={ref}
            style={{ backgroundColor: 'transparent' }}
            className={cn(
              'block bg-transparent select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';

export function DesktopMenu() {
  return (
    <div className="hidden md:flex absolute left-[50%] translate-x-[-50%]">
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {routes
            .filter((route) => route.render !== false)
            .map((route: any, index) => (
              <NavigationMenuItem key={`dadsadad ${route.name}-${index}`}>
                {route.children ? (
                  <React.Fragment key={`dasda ${route.name}-${index}`}>
                    <NavigationMenuTrigger className='bg-transparent'>{route.name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px]  gap-3 p-4  grid-cols-1 ">
                        {route.children.map((childRoute: any) => (
                          <ListItem
                            path={childRoute.path}
                            key={childRoute.name}
                            title={childRoute.name}
                            className={"bg-transparent"}
                          ></ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </React.Fragment>
                ) : (
                  <Link to={route.path} key={route.name}>
                    <NavigationMenuLink
                      style={{ backgroundColor: 'transparent' }}
                      className={navigationMenuTriggerStyle()}
                    >
                      {route.name}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
