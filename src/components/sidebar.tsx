import React from "react";
import { usePathname } from "next/navigation";
import {
  ArrowDown,
  Download,
  Earth,
  Home,
  Library,
  LogIn,
  VenetianMask,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DiscordLogoIcon,
  MobileIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const sidebarItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/discover", label: "Discover", icon: Earth },
  { href: "/collect", label: "Library", icon: Library },
  { href: "/rewards", label: "SignIn", icon: LogIn },
];

interface SidebarProps {
  open: boolean;
}

export default function Sidebar({ open }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`bg-[#202323] border-r border-gray-200 text-gray-800 w-64 fixed inset-y-0 left-0 z-30 transform transition-transform
        duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
    >
      <nav className="h-full flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div>
            <div></div>
          </div>
        </div>
        <div className="flex-grow overflow-y-auto">
          <div className="px-3 py-4">
            {sidebarItems.map((item) => (
              <Link href={item.href} key={item.href} passHref>
                <Button
                  variant="ghost"
                  className={`w-full justify-start py-2 mb-1 ${
                    pathname === item.href
                      ? "bg-gray-100 text-gray-900 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  <span className="text-sm">{item.label}</span>
                </Button>
              </Link>
            ))}
          </div>
          <div className="px-3 py-4">
            <Button className="w-full justify-center rounded-full bg-[#21B9CD] text-white">
              Signup
            </Button>
          </div>
        </div>
        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-between w-full border-b border-gray-200 py-2 m-auto text-white">
            <div className="flex items-center border-full bg-white">
              <VenetianMask className="mr-3 h-5 w-5"/>
              <span>Incognito</span>
              <ArrowDown className="ml-3 h-5 w-5"/>
            </div>
            <div className="flex items-center">
              <TwitterLogoIcon className="mr-3 h-5 w-5" />
              <DiscordLogoIcon className="mr-3 h-5 w-5" />
            </div>
          </div>
          <div className="flex justify-between w-full py-2 m-auto text-white">
            <div className="flex items-center">
              <Download className="mr-3 h-5 w-5" />
              <span>Download</span>
            </div>
            <div className="flex items-center">
              <TwitterLogoIcon className="mr-3 h-5 w-5" />
              <DiscordLogoIcon className="mr-3 h-5 w-5" />
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}