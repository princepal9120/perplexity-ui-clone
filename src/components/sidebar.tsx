import React from "react";
import { usePathname } from "next/navigation";
import {
  ArrowDown,
  ArrowLeftToLine,
  ArrowUpRight,
  Download,
  Earth,
  Home,
  Library,
  LogIn,
  LogInIcon,
  LogOut,
  Settings,
  VenetianMask,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DiscordLogoIcon,
  MobileIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import { Input } from "./ui/input";

const sidebarItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/discover", label: "Discover", icon: Earth },
  { href: "/collect", label: "Library", icon: Library },
  { href: "/signin", label: "SignIn", icon: LogIn },
];

interface SidebarProps {
  open: boolean;
  onMenuClick: () => void;
}

export default function Sidebar({open, onMenuClick}: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`bg-[#202323] border-r border-gray-200 text-gray-800 w-64 fixed inset-y-0 left-0 z-30 transform transition-transform
        duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
    >
      <nav className="h-full flex flex-col">
      <div className="flex justify-between items-center p-2 border-b border-gray-200">
      <div className="m-0auto h-auto object-contain">
        <Image src="/image/image.png" alt="Logo" width={350} height={30} />
      </div>
   
<Button 
onClick={onMenuClick}
>      <ArrowLeftToLine osize={28} className="ml-1 text-white"/></Button>

    </div>
    <div>
      
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
          <div className="flex border border-dotted my-1 mx-3">           
            
            <p className="flex text-sm text-gray-500 mb-6 text-center
            ">
              Library disabled while incognito
            </p>
       
          </div>{" "}
        </div>
        <div className="bg-transparent p-4 rounded-lg mb-6">
          <h3 className="font-semibold mb-1">Try Pro</h3>
          <p className="text-sm text-gray-600 mb-2">
            Upgrade for image upload, smarter AI, and more Pro Search.
          </p>
        <div className="">
        <a href="#" className="text-white flex items-center text-sm ">
        <ArrowUpRight size={14} className="mr-1" />
            Learn More
            
          </a>
        </div>
        </div>
        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-between w-full py-2 m-auto text-white">
            <div className="flex items-center">
                <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full w-full flex items-center justify-between mb-4">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    fill="currentColor"
                  />
                  <path
                    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <span>Incognito</span>
              </div>
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            </div>
            <button className="hover:text-gray-800 flex items-center mb-3">
              <Settings size={18}  />
            </button>
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
