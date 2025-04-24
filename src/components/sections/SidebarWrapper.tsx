"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Sidebar from "./Sidebar";

function SidebarWrapper() {
  const pathname = usePathname();

  if (pathname === "/") {
    return "";
  }

  return <Sidebar />;
}

export default SidebarWrapper;
