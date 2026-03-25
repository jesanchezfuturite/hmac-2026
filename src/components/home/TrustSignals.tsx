"use client";

import React from "react";
import * as LucideIcons from "lucide-react";

export interface TrustSignalItem {
  title: string;
  iconName: string;
}

interface TrustSignalsProps {
  signals: TrustSignalItem[];
}

const fallbackSignals: TrustSignalItem[] = [
  { title: "Urgencias 24/7", iconName: "Activity" },
  { title: "Tecnología de Punta", iconName: "Microscope" },
  { title: "Médicos Certificados", iconName: "Award" },
  { title: "Presencia Nacional", iconName: "MapPin" },
];

export function TrustSignals({ signals }: TrustSignalsProps) {
  // Ignoramos datos incompletos de Sanity. Si un registro no tiene iconName ni title, forzamos fallback.
  const isValidSignal = (s: TrustSignalItem) => s && s.title && s.iconName;
  const isSanityDataClean = signals && signals.length > 0 && signals.every(isValidSignal);
  
  // Usar fallback momentáneamente si Sanity está vacío o tiene basura de testing
  const finalSignals = isSanityDataClean ? signals : fallbackSignals;

  return (
    <section className="w-full bg-white border-b border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="sr-only">Nuestros Beneficios y Promesas de Calidad</h2>
      <div className="max-w-7xl mx-auto">
        {/* Diseño de franja minimalista con separadores verticales tipo Apple */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {finalSignals.map((signal, index) => {
            // Extracción dinámica del ícono de Lucide - Fallback a CheckCircle si no existe
            const IconComponent = (LucideIcons as any)[signal.iconName] || LucideIcons.CheckCircle;
            
            return (
              <div key={index} className="flex flex-col items-center justify-center text-center px-4 space-y-4 group py-4 md:py-0">
                <div className="p-4 rounded-[20px] bg-slate-50 transition-all duration-500 ease-out group-hover:bg-[#00B7B0]/10 group-hover:-translate-y-1">
                  <IconComponent 
                    className="w-7 h-7 text-[#00B7B0] transition-transform duration-500 group-hover:scale-110" 
                    strokeWidth={1.5} 
                  />
                </div>
                <h4 className="text-[#1A1A1A] font-semibold text-sm md:text-base tracking-tight max-w-[160px]">
                  {signal.title}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
