"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const { user } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-cols gap-5 justify-between items-center border-b border-gray-300 shadow-md sticky">
      <div className="flex flex-cols gap-3 p-4">
        <Image src="/assets/keylogo.svg" alt="key" width={20} height={20} />
        <h1 className="text-lg text-gray-500 font-semibold">Team Keys</h1>
      </div>

      <nav className="flex justify-between items-center">
        {/* Dashboard */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                onClick={() => router.push("/dashboard")}
                className={`text-l cursor-pointer ${
                  pathname === "/dashboard"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Dashboard
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Players */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                onClick={() => router.push("/players")}
                className={`text-l cursor-pointer ${
                  pathname === "/players"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Players
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Teams */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                onClick={() => router.push("/teams")}
                className={`text-l cursor-pointer ${
                  pathname === "/teams"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Teams
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Matches */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                onClick={() => router.push("/Matches")}
                className={`text-l cursor-pointer ${
                  pathname === "/Matches"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Matches
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Reports */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                onClick={() => router.push("/reports")}
                className={`text-l cursor-pointer ${
                  pathname === "/reports"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Reports
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* AI */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                onClick={() => router.push("/ai")}
                className={`text-l cursor-pointer ${
                  pathname === "/ai"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                AI
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/* Auth Section */}
      <div>
        <header className="flex justify-end items-center p-4 gap-4 h-16">
          <SignedOut>
            <SignInButton />
            <SignUpButton>
              <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center gap-3">
              <span className="text-l text-gray-500 font-medium sm:text-base">
                {user?.fullName || user?.firstName}
              </span>
              <UserButton />
            </div>
          </SignedIn>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
