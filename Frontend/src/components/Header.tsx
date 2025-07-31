import { Link } from "@swan-io/chicane";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import useLogout from "@/hooks/useLogout";
import { Router } from "@/router";


export default function Header() {
  const { logout } = useLogout();
  
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Store</h1>
        <NavigationMenu>
          <NavigationMenuList className="space-x-4">
            <NavigationMenuItem>
              <Button asChild variant={"ghost"}>
                <Link to={Router.Home()}>Home</Link>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant={"ghost"}>
                About
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button asChild variant={"ghost"}>
                <Link to={Router.Users()}>View Users</Link>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant={"ghost"} onClick={logout}>
                Logout
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
