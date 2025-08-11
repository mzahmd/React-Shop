import { Link } from "@swan-io/chicane"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useUserContext } from "@/hooks/useUserContext"
import { AdminRouter } from "@/pages/AdminArea/router"
import { HomeRouter } from "@/pages/HomeArea/router"
import { UserRouter } from "@/pages/UserArea/router"
import { Router } from "@/router"


export default function Navbar() {
  const { user, logoutUser } = useUserContext();

  const currentRoute = Router.getRoute(["Home", "Admin", "User"])?.name

  return (
    <header className="bg-sidebar text-white p-4">
      <div className="flex items-center justify-between flex-wrap">
        <h1 className="text-3xl font-bold">React Shop</h1>
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="space-x-4 border-2 rounded-xl">
            <NavigationMenuItem>
              <Button asChild variant={"ghost"} className={`${currentRoute === "Home" && "underline"}`}>
                <Link className="text-xl" to={HomeRouter.Home()}>Home</Link>
              </Button>
            </NavigationMenuItem>
            {user?.role === "ADMIN" &&
              <NavigationMenuItem>
                <Button asChild variant={"ghost"} className={`${currentRoute === "Admin" && "underline"}`}>
                  <Link className="text-xl" to={AdminRouter.UsersList()}>View Users</Link>
                </Button>
              </NavigationMenuItem>
            }
            <NavigationMenuItem>
              <Button asChild variant={"ghost"} className={`${currentRoute === "User" && "underline"}`}>
                <Link className="text-xl" to={UserRouter.User()}>Profile</Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList className="mx-0">
            <NavigationMenuItem>
              <Button
                className="cursor-pointer text-xl"
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

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}