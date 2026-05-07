"use client";

import { menuItems } from "@/lib/menu";
import { usePathname } from "next/navigation";
import React from "react";
import BannerSection from "./BannerSection";

const formatLabel = (str: string) =>
  str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const BreadcrumbWrapper = () => {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const items = [
    { label: "Home", href: "/" },
    ...segments.map((segment, index, arr) => {
      const path = "/" + arr.slice(0, index + 1).join("/");

      const match = menuItems.find((item) => item.href === path);

      let label = match?.label || formatLabel(segment);

      if (segment === "industries") {
        label = "Success Stories";
      }

      if (segment === "news") {
  label = "News Details";
}

      return {
        label,
        href: index === arr.length - 1 ? undefined : path,
      };
    }),
  ];

  if (pathname.startsWith("/industries/") && items.length > 2) {
    items.splice(2);
  }

  if (pathname.startsWith("/news/") && items.length > 2) {
  items.splice(2);
}

  return <BannerSection items={items} />;
};

export default BreadcrumbWrapper;