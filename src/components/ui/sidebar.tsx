"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  MessageCircle,
  Settings,
  ShieldCheck,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Messages",
    href: "/messages",
    icon: MessageCircle,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    name: "Privacy",
    href: "/privacy",
    icon: ShieldCheck,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const isMobile = useMobile();

  if (isMobile) {
    return (
      <div className="fixed bottom-0 z-10 w-full rounded-t-lg border-t border-border bg-background/30 backdrop-blur-xl">
        <div className="grid h-16 grid-cols-4 items-center justify-center">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1.5 rounded-lg p-2 text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                <link.icon
                  className={cn(
                    "size-5 transition-all duration-200",
                    isActive && "scale-110"
                  )}
                />
                <span className="sr-only">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="hidden h-full flex-col border-r border-border bg-background/30 p-4 backdrop-blur-xl md:flex">
      <div className="flex-1 space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Button
              key={link.name}
              asChild
              variant={isActive ? "secondary" : "ghost"}
              className="w-full justify-start gap-2"
            >
              <Link href={link.href}>
                <link.icon className="size-4" />
                <span>{link.name}</span>
              </Link>
            </Button>
          );
        })}
      </div>
      <Separator className="my-4" />
      <div className="flex flex-col items-center gap-4">
        <span className="text-xs text-muted-foreground">
          © 2024 Your Company
        </span>
      </div>
    </div>
  );
}
