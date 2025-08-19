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

const Navbar = () => {
  const { user } = useUser();

  return (
    <div className="flex flex-cols gap-5 justify-between items-center border-b border-gray-300 shadow-md sticky">
      <div className="flex flex-cols gap-3 p-4">
        <Image src="/assets/keylogo.svg" alt="key" width={20} height={20} />
        <h1 className="text-lg text-gray-500 font-semibold">Team Keys</h1>
      </div>

      <nav className="flex justify-between items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-l text-gray-500">
                Dashboard
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink></NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-l text-gray-500">
                Players
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink></NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-l text-gray-500">
                Teams
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink></NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-l text-gray-500">
                Matches
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink></NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-l text-gray-500">
                Reports
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink></NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-l text-gray-500">
                AI
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink></NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

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
              {/* Show user’s name */}
              <span className="text-l text-gray-500 font-medium sm:text-base">
                {user?.fullName || user?.firstName}
              </span>

              {/* Optional dropdown for account/logout */}
              <UserButton />
            </div>
          </SignedIn>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
