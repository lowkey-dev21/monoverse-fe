"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Globe, Menu, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";
import { CartDropdown } from "./cart-dropdown";
import Logo from "./logo";

export function Headers() {
  return (
    <header className="w-full bg-background border-b fixed top-0 left-0 z-50">
      <div className="max-w-[2000px] mx-auto lg:h-[80px] px-6 lg:px-6 py-3 lg:py-2 flex items-center justify-between">
        {/* Mobile: Hamburger + Logo Centered */}
        <div className="flex items-center gap-4 lg:hidden w-full justify-between">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="p-2">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-[280px]">
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-3 p-6">
                <div className="mb-4">
                  <Logo />
                </div>
                <Link
                  href="/signin"
                  className="text-primary font-semibold py-2 border-b border-gray-100"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="text-primary font-semibold py-2 border-b border-gray-100"
                >
                  Sign up
                </Link>
                <Link
                  href="/#pricing"
                  className="text-gray-700 font-medium py-2 border-b border-gray-100"
                >
                  Plans & Pricing
                </Link>
                <div className="font-bold mt-5 text-gray-900 mb-3">
                  Popular Categories
                </div>
                <Link
                  href="#"
                  className="py-2 text-gray-700 hover:text-primary"
                >
                  Cinematic Course Creation
                </Link>
                <Link
                  href="#"
                  className="py-2 text-gray-700 hover:text-primary"
                >
                  AI Tutors & Assistants
                </Link>
                <Link
                  href="#"
                  className="py-2 text-gray-700 hover:text-primary"
                >
                  For-Credit Learning
                </Link>
                <Link
                  href="#"
                  className="py-2 text-gray-700 hover:text-primary"
                >
                  Growth & Community
                </Link>
                <Link
                  href="#"
                  className="py-2 text-gray-700 hover:text-primary"
                >
                  Marketplace
                </Link>
                <hr className="my-3" />
                <Link
                  href="/teach-on-Monoverse"
                  className="text-primary font-semibold py-2"
                >
                  Teach on Monoverse
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex-1 flex justify-center">
            <Logo />
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="p-2">
              <Search className="size-6 text-gray-700" />
            </Button>
            <CartDropdown />
          </div>
        </div>

        {/* Desktop: Full Nav */}
        <div className="hidden lg:flex items-center  text-[14px] w-full justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="">
              <Logo />
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex p-2 flex-col min-w-[180px] bg-popover rounded-md shadow border">
                      <NavigationMenuLink asChild>
                        <Link href="#">Categories</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">Popular</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">New</Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex-1 flex justify-center px-3">
            <div className="relative w-full max-w-xl">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Search className="w-5 h-5" />
              </span>
              <Input
                type="text"
                placeholder="Search for anything"
                className="w-full pl-10 pr-4 py-2 placeholder:text-sm bg-background rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 xl:gap-4 text-[14px]">
            <Link
              href="/#pricing"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Plans & Pricing
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-2">
                    Teach on Monoverse
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex flex-col p-2 min-w-[200px] bg-background rounded-md shadow border">
                      <NavigationMenuLink asChild>
                        <Link href="/teach-on-Monoverse">
                          Become an Instructor
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/docs/template-docs">
                          Instructor Resources
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-3">
              <CartDropdown />
              <Link
                href="/signin"
                className="px-4 py-2 rounded-md border border-primary text-primary font-medium hover:bg-primary/10 transition"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 rounded-md bg-primary text-card font-medium hover:bg-primary/80 transition"
              >
                Sign up
              </Link>
              <Button
                variant={"outline"}
                className="border p-1 w-[35px] h-[35px]"
              >
                <Globe className="w-5 h-5   text-gray-700 hover:text-primary cursor-pointer" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
