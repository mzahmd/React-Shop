import { Link } from "@swan-io/chicane"
import { LogOut, Menu, UserPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet"
import { useUserContext } from "@/hooks/useUserContext"
import { AdminRouter } from "@/pages/AdminArea/router"
import { AuthRouter } from "@/pages/AuthArea/router"
import { HomeRouter } from "@/pages/HomeArea/router"
import { ProductRouter } from "@/pages/ProductArea/router"
import { UserRouter } from "@/pages/UserArea/router"
import { Router } from "@/router"

import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  const { user, logoutUser } = useUserContext();

  const currentRoute = Router.getRoute(["Home", "Admin", "User", "Products"])?.name

  return (
    <header className="bg-gradient-to-r from-muted via-gray-200 dark:via-gray-600 to-muted z-2 p-4">
      <div className="flex items-center justify-between flex-wrap">

        <h1 className="text-3xl font-bold">React Shop</h1>

        {/* Desktop Navbar */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="space-x-4 border-2 border-accent-foreground rounded-xl">
            <NavigationMenuItem>
              <Button asChild variant={"ghost"} className={`${currentRoute === "Home" && "underline"}`}>
                <Link className="text-xl rounded-xl" to={HomeRouter.Home()}>Home</Link>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button asChild variant={"ghost"} className={`${currentRoute === "Products" && "underline"}`}>
                <Link className="text-xl rounded-xl" to={ProductRouter.Products()}>Products</Link>
              </Button>
            </NavigationMenuItem>
            {user?.role === "ADMIN" &&
              <NavigationMenuItem>
                <Button asChild variant={"ghost"} className={`${currentRoute === "Admin" && "underline"}`}>
                  <Link className="text-xl rounded-xl" to={AdminRouter.UsersList()}>View Users</Link>
                </Button>
              </NavigationMenuItem>
            }
            {user &&
              <NavigationMenuItem>
                <Button asChild variant={"ghost"} className={`${currentRoute === "User" && "underline"}`}>
                  <Link className="text-xl rounded-xl" to={UserRouter.User()}>Profile</Link>
                </Button>
              </NavigationMenuItem>
            }
          </NavigationMenuList>
        </NavigationMenu>
        {user ?
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="mx-0">
              <NavigationMenuItem>
                <Button
                  className="cursor-pointer text-xl"
                  variant={"ghost"}
                  onClick={logoutUser}
                >
                  <LogOut /> Logout
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <ModeToggle />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          :
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="mx-0">
              <NavigationMenuItem>
                <Button
                  className="cursor-pointer text-xl"
                  variant={"ghost"}
                  onClick={() => AuthRouter.push("Login")}
                >
                  <LogOut /> Login
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button
                  className="cursor-pointer text-xl"
                  variant={"ghost"}
                  onClick={() => AuthRouter.push("Register")}
                >
                  <UserPlus />Sign Up
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <ModeToggle />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        }

        {/* Mobile Navbar */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <ModeToggle />
              <nav className="flex flex-col gap-4 mt-8 p-5">
                <Link to={HomeRouter.Home()} className={`text-lg ${currentRoute === "Home" && "underline"}`}>
                  Home
                </Link>
                <Link to={ProductRouter.Products()} className={`text-lg ${currentRoute === "Products" && "underline"}`}>
                  Products
                </Link>
                {user?.role === "ADMIN" && (
                  <Link to={AdminRouter.UsersList()} className={`text-lg ${currentRoute === "Admin" && "underline"}`}>
                    View Users
                  </Link>
                )}
                {user &&
                  <Link to={UserRouter.User()} className={`text-lg ${currentRoute === "User" && "underline"}`}>
                    Profile
                  </Link>
                }
                {user ?
                  <Button variant="ghost" className="text-lg mt-4" onClick={logoutUser}>
                    <LogOut /> Logout
                  </Button>
                  :
                  <>
                    <Button
                      className="cursor-pointer text-xl"
                      variant={"ghost"}
                      onClick={() => AuthRouter.push("Login")}
                    >
                      <LogOut /> Login
                    </Button>
                    <Button
                      className="cursor-pointer text-xl"
                      variant={"ghost"}
                      onClick={() => AuthRouter.push("Register")}
                    >
                      <UserPlus />Sign Up
                    </Button>
                  </>
                }
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header >

  )
}
