"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, HeartPulse, Microscope, Baby, Activity, ShieldCheck } from "lucide-react";

export interface BentoService {
  title: string;
  description: string;
  imageUrl: string;
  gridSize: "small" | "medium" | "large";
  destinationLink: string;
}

interface BentoServicesProps {
  services: BentoService[];
}

const fallbackServices: BentoService[] = [
  {
    title: "Cardiología Avanzada",
    description: "Atención especializada con la tecnología más moderna para el cuidado integral de tu corazón.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    gridSize: "large",
    destinationLink: "/especialidades/cardiologia",
  },
  {
    title: "Laboratorio Clínico e Imagenología",
    description: "Resultados precisos y rápidos con equipos de última generación para tu diagnóstico.",
    imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2670&auto=format&fit=crop",
    gridSize: "medium",
    destinationLink: "/especialidades/laboratorio",
  },
  {
    title: "Maternidad",
    description: "Espacios seguros y confortables para recibir a tu bebé.",
    imageUrl: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    gridSize: "small",
    destinationLink: "/especialidades/maternidad",
  },
  {
    title: "Urgencias 24/7",
    description: "Estamos listos para atenderte en cualquier momento.",
    imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2670&auto=format&fit=crop",
    gridSize: "small",
    destinationLink: "/urgencias",
  },
  {
    title: "Check-ups Médicos",
    description: "Prevención a tu medida. Conoce nuestros paquetes de salud integral para todas las edades.",
    imageUrl: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2691&auto=format&fit=crop",
    gridSize: "medium",
    destinationLink: "/promociones/check-ups",
  },
  {
    title: "Medicina Preventiva e Interna",
    description: "Cuidado integral con médicos especialistas listos para proteger tu salud y la de tu familia.",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
    gridSize: "medium",
    destinationLink: "/especialidades/medicina-interna",
  },
];

const getGridClasses = (size: string) => {
  switch (size) {
    case "large":
      return "col-span-1 md:col-span-2 lg:col-span-2 row-span-2";
    case "medium":
      return "col-span-1 md:col-span-2 lg:col-span-2 row-span-1";
    case "small":
      return "col-span-1 md:col-span-1 lg:col-span-1 row-span-1";
    default:
      return "col-span-1";
  }
};

const getIconForTitle = (title: string, size: number = 24) => {
  const t = title.toLowerCase();
  if (t.includes("cardio") || t.includes("corazón")) return <HeartPulse size={size} />;
  if (t.includes("laboratorio") || t.includes("imagen") || t.includes("micro")) return <Microscope size={size} />;
  if (t.includes("maternidad") || t.includes("bebé") || t.includes("pediatría")) return <Baby size={size} />;
  if (t.includes("urgencias")) return <Activity size={size} />;
  return <ShieldCheck size={size} />;
};

export function BentoServices({ services }: BentoServicesProps) {
  // Para garantizar que el diseño cargue perfecto en esta fase visual,
  // forzamos los fallbackServices e ignoramos los documentos incompletos de Sanity.
  const displayServices = fallbackServices;

  return (
    <section className="w-full bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-sm font-bold tracking-widest text-[#00B7B0] uppercase">
            Nuestros Servicios
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Estudios Médicos y Servicios de Alta Demanda
          </h3>
          <p className="text-lg text-slate-600 font-medium">
            Descubre nuestras especialidades destacadas con tecnología de vanguardia y médicos certificados.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
          {displayServices.map((service, index) => (
            <Link
              key={index}
              href={service.destinationLink || "#"}
              className={`group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${getGridClasses(
                service.gridSize
              )} block`}
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay to ensure text is readable regardless of the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* Card Content (always positioned at the bottom) */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-8">
                <div className="flex justify-between items-end gap-4">
                  <div className="flex flex-col gap-3">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl w-fit text-white ring-1 ring-white/30 shadow-sm">
                      {getIconForTitle(service.title, service.gridSize === "large" ? 28 : 22)}
                    </div>
                    <h4 className={`text-white font-bold tracking-tight ${service.gridSize === "large" ? "text-3xl" : "text-xl md:text-2xl"}`}>
                      {service.title}
                    </h4>
                    {(service.gridSize === "large" || service.gridSize === "medium") && (
                      <p className="text-white/80 line-clamp-2 md:line-clamp-3 font-medium text-sm md:text-base">
                        {service.description}
                      </p>
                    )}
                  </div>

                  {/* Hover Arrow Indicator */}
                  <div className="bg-white/10 backdrop-blur-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full p-3 text-white ring-1 ring-white/30 hidden sm:block">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}