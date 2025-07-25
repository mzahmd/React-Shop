import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Store</h1>
        <NavigationMenu>
          <NavigationMenuList className="space-x-4">
            <NavigationMenuItem>
              Home
            </NavigationMenuItem>
            <NavigationMenuItem>
              About
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
