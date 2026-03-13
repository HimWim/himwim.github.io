"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" }
];

export function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <nav className="container-default flex items-center justify-between py-4">
        <Link
          href="#hero"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-100"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-secondary via-accent to-sky-400 text-xs font-bold text-slate-950 shadow-lg shadow-secondary/40">
            HK
          </div>
          <span className="hidden text-sm md:inline">
            Himanshu Kumar
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6 text-xs font-medium text-slate-300">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              variant="accent"
            >
              <a href="#contact">Hire Me</a>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            size="icon"
            variant="ghost"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      <div
        className={cn(
          "md:hidden transition-all duration-200 ease-out border-t border-slate-800/80 bg-slate-950/95 backdrop-blur",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="container-default flex flex-col gap-4 py-4 text-sm text-slate-200">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-1 transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <Button
            asChild
            size="sm"
            variant="accent"
            className="mt-2 w-full"
          >
            <a href="#contact">Hire Me</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

