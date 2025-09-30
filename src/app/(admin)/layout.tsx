"use client";

import "../../../tailadmin/src/app/globals.css";
import { SidebarProvider } from "../../../tailadmin/src/context/SidebarContext";
import { ThemeProvider } from "../../../tailadmin/src/context/ThemeContext";
import AppHeader from "../../../tailadmin/src/layout/AppHeader";
import AppSidebar from "../../../tailadmin/src/layout/AppSidebar";
import Backdrop from "../../../tailadmin/src/layout/Backdrop";
import { useSidebar } from "../../../tailadmin/src/context/SidebarContext";
import { usePathname } from "next/navigation";
import React from "react";

function AdminChrome({ children }: { children: React.ReactNode }) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  const pathname = usePathname();

  const getRouteSpecificStyles = () => {
    switch (pathname) {
      case "/text-generator":
      case "/code-generator":
      case "/image-generator":
      case "/video-generator":
        return "";
      default:
        return "p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6";
    }
  };

  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "xl:ml-[290px]"
    : "xl:ml-[90px]";

  return (
    <div className="min-h-screen xl:flex">
      <AppSidebar />
      <Backdrop />
      <div className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}>
        <AppHeader />
        <div className={getRouteSpecificStyles()}>{children}</div>
      </div>
    </div>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <AdminChrome>{children}</AdminChrome>
      </SidebarProvider>
    </ThemeProvider>
  );
}
