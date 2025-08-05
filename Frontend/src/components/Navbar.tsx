import { Link } from "@swan-io/chicane"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { useUserContext } from "@/hooks/useUserContext"
import { AdminRouter } from "@/pages/AdminArea/router"
import { HomeRouter } from "@/pages/HomeArea/router"

export default function Navbar() {
  const { user, logoutUser } = useUserContext();

  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Store</h1>
        <NavigationMenu>
          <NavigationMenuList className="space-x-4">
            <NavigationMenuItem>
              <Button asChild variant={"ghost"}>
                <Link to={HomeRouter.Home()}>Home</Link>
              </Button>
            </NavigationMenuItem>
            {user?.role === "ADMIN" &&
              <NavigationMenuItem>
                <Button asChild variant={"ghost"}>
                  <Link to={AdminRouter.UsersList()}>View Users</Link>
                </Button>
              </NavigationMenuItem>
            }
            {/* <NavigationMenuItem>
              <Button asChild variant={"ghost"}>
                <Link to={Router.()}>Profile</Link>
              </Button>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <Button
                className="cursor-pointer"
                variant={"ghost"}
                onClick={logoutUser}
              >
                Logout
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
