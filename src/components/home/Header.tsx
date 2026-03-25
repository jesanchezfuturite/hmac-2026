"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, HeartPulse, Microscope } from "lucide-react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="w-full flex flex-col sticky top-0 z-50">
      {/* Top Bar (Menú Secundario) */}
      <div className="h-10 bg-[#1A1A1A] w-full flex items-center justify-end px-4 md:px-8">
        <nav className="flex space-x-6 text-xs font-medium text-gray-300">
          <Link href="/pacientes" className="hover:text-white transition-colors">Portal de Pacientes</Link>
          <Link href="/medicos" className="hover:text-white transition-colors">Portal de Médicos</Link>
          <Link href="/facturacion" className="hover:text-white transition-colors">Facturación</Link>
          <Link href="/inversionistas" className="hover:text-white transition-colors">Inversionistas</Link>
        </nav>
      </div>

      {/* Main Navbar */}
      <header className="h-24 bg-white border-b border-gray-100 w-full flex items-center justify-between px-4 md:px-12 relative shadow-sm">

        {/* Logo corporativo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <img
            src="https://hospitalesmac.com/uploads/es/images/hospitales_mac_logo_menu.svg?v=2025-07-24-19-51-37"
            alt="Hospitales MAC"
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Centrada */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-x-8">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="!bg-transparent hover:!bg-transparent data-[state=open]:!bg-transparent text-[#1A1A1A] hover:text-[#00B7B0] transition-colors text-base font-medium px-4">
                  Especialidades
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-xl shadow-lg border-gray-100">
                    <ListItem href="/especialidades/cardiologia" title="Cardiología" icon={<HeartPulse size={16} />}>
                      Atención especializada al corazón.
                    </ListItem>
                    <ListItem href="/especialidades/laboratorio" title="Laboratorio e Imagenología" icon={<Microscope size={16} />}>
                      Estudios con la más alta tecnología.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/directorio-medico" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "!bg-transparent hover:!bg-transparent text-[#1A1A1A] hover:text-[#00B7B0] transition-colors text-base font-medium px-4")}>
                    Directorio Médico
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#hospitales" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "!bg-transparent hover:!bg-transparent text-[#1A1A1A] hover:text-[#00B7B0] transition-colors text-base font-medium px-4")}>
                    Nuestros Hospitales
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/promociones" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "!bg-transparent hover:!bg-transparent text-[#1A1A1A] hover:text-[#00B7B0] transition-colors text-base font-medium px-4")}>
                    Check-ups y Promociones
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
          <div className="flex items-center space-x-2 text-sm font-semibold text-[#1A1A1A]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span>Urgencias 24/7</span>
          </div>
          <Button className="bg-[#00B7B0] hover:bg-[#009B95] text-white rounded-full px-8 py-5 text-base font-medium shadow-sm transition-transform hover:scale-105">
            Agendar Cita
          </Button>
        </div>

        {/* Mobile menu (Sheet) */}
        <div className="lg:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[#1A1A1A] hover:bg-gray-100">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white border-none shadow-2xl">
              <VisuallyHidden.Root>
                <SheetTitle>Menú de Navegación</SheetTitle>
              </VisuallyHidden.Root>
              <div className="flex flex-col gap-8 pt-10">
                <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                  <img
                    src="https://hospitalesmac.com/uploads/es/images/hospitales_mac_logo_menu.svg?v=2025-07-24-19-51-37"
                    alt="Hospitales MAC"
                    className="h-[50px] w-auto"
                  />
                </Link>
                <nav className="flex flex-col gap-6">
                  <Link href="/especialidades" className="text-lg font-medium text-[#1A1A1A] hover:text-[#00B7B0] transition-colors" onClick={() => setIsOpen(false)}>Especialidades</Link>
                  <Link href="/directorio-medico" className="text-lg font-medium text-[#1A1A1A] hover:text-[#00B7B0] transition-colors" onClick={() => setIsOpen(false)}>Directorio Médico</Link>
                  <Link href="/#hospitales" className="text-lg font-medium text-[#1A1A1A] hover:text-[#00B7B0] transition-colors" onClick={() => setIsOpen(false)}>Nuestros Hospitales</Link>
                  <Link href="/promociones" className="text-lg font-medium text-[#1A1A1A] hover:text-[#00B7B0] transition-colors" onClick={() => setIsOpen(false)}>Check-ups y Promociones</Link>
                </nav>
                <div className="mt-8 flex flex-col gap-5">
                  <div className="flex items-center space-x-2 text-sm font-semibold text-[#1A1A1A]">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <span>Urgencias 24/7</span>
                  </div>
                  <Button className="bg-[#00B7B0] hover:bg-[#009B95] text-white w-full rounded-full font-medium h-12 shadow-md">
                    Agendar Cita
                  </Button>
                </div>

                {/* Enlaces secundarios en móvil */}
                <div className="mt-auto pt-8 border-t border-gray-100 flex flex-col gap-4">
                  <Link href="/pacientes" className="text-sm font-medium text-gray-500 hover:text-[#00B7B0]" onClick={() => setIsOpen(false)}>Portal de Pacientes</Link>
                  <Link href="/medicos" className="text-sm font-medium text-gray-500 hover:text-[#00B7B0]" onClick={() => setIsOpen(false)}>Portal de Médicos</Link>
                  <Link href="/facturacion" className="text-sm font-medium text-gray-500 hover:text-[#00B7B0]" onClick={() => setIsOpen(false)}>Facturación</Link>
                  <Link href="/inversionistas" className="text-sm font-medium text-gray-500 hover:text-[#00B7B0]" onClick={() => setIsOpen(false)}>Inversionistas</Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-slate-50 hover:text-accent-foreground focus:bg-slate-50 focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2 text-sm font-semibold leading-none text-[#1A1A1A] group-hover:text-[#00B7B0] transition-colors">
            {icon && <span className="text-[#00B7B0] flex-shrink-0">{icon}</span>}
            <span>{title}</span>
          </div>
          <p className="line-clamp-2 text-sm leading-relaxed text-slate-500 mt-2 pl-6">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";