"use client";

import * as React from "react";
import { cn } from "@/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "vFit",
    href: "/products/vfit",
    description:
      "An innovative virtual try-on product enhancing online shopping with AI-driven personalization and try-on features.",
  },
];

export function Menu() {
  return (
    <div className="fixed left-0 top-0 z-10 w-full bg-white px-4 md:px-36">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <a href="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <img src="/vector.png" alt="Logo" className="w-36" />
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="z-10 grid w-[400px] gap-3 bg-white p-4 md:w-[400px] lg:w-[400px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <a href="/team">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Team
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <h5 className="font-medium leading-none">{title}</h5>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

export default Menu;
