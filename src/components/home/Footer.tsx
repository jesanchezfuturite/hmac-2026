import React from "react";
import Link from "next/link";
import { Phone, Mail, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-gray-800 pb-16">
        
        {/* Columna 1: Branding y Nosotros */}
        <div className="flex flex-col space-y-5">
          {/* Logo Corporativo (Texto estilizado para preservar contraste oscuro) */}
          <div className="text-white text-3xl font-black tracking-tighter flex flex-col">
            <div className="flex items-center">
              <span className="text-[#00B7B0] text-4xl mr-1">mac</span> 
              <span className="tracking-tight text-white/90">HOSPITALES</span>
            </div>
            <div className="h-1 w-12 bg-[#00B7B0] rounded-full mt-2"></div>
          </div>
          
          <p className="text-sm font-medium text-gray-400 mt-4 leading-relaxed hover:text-gray-300 transition-colors">
            Red corporativa de centros de alta especialidad médica, imagenología y laboratorio. Brindando atención humana de vanguardia y tecnología superior en México.
          </p>
        </div>

        {/* Columna 2: Pacientes */}
        <div className="flex flex-col space-y-5">
          <h4 className="text-white font-bold text-lg tracking-tight">Pacientes</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <Link href="/portal-pacientes" className="flex items-center group text-gray-400 hover:text-[#00B7B0] transition-colors">
                <ChevronRight className="w-4 h-4 mr-2 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-[#00B7B0]" />
                Portal de Pacientes
              </Link>
            </li>
            <li>
              <Link href="/especialidades" className="flex items-center group text-gray-400 hover:text-[#00B7B0] transition-colors">
                <ChevronRight className="w-4 h-4 mr-2 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-[#00B7B0]" />
                Nuestras Especialidades
              </Link>
            </li>
            <li>
              <Link href="/promociones/check-ups" className="flex items-center group text-gray-400 hover:text-[#00B7B0] transition-colors">
                <ChevronRight className="w-4 h-4 mr-2 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-[#00B7B0]" />
                Check-ups Médicos
              </Link>
            </li>
            <li>
              <Link href="/facturacion" className="flex items-center group text-gray-400 hover:text-[#00B7B0] transition-colors">
                <ChevronRight className="w-4 h-4 mr-2 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-[#00B7B0]" />
                Facturación Electrónica
              </Link>
            </li>
            <li>
              <Link href="/seguros" className="flex items-center group text-gray-400 hover:text-[#00B7B0] transition-colors">
                <ChevronRight className="w-4 h-4 mr-2 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-[#00B7B0]" />
                Aseguradoras y Convenios
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Corporativo */}
        <div className="flex flex-col space-y-5">
          <h4 className="text-white font-bold text-lg tracking-tight">Corporativo</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <Link href="/directorio-medico" className="flex items-center group text-gray-400 hover:text-[#00B7B0] transition-colors">
                <ChevronRight className="w-4 h-4 mr-2 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-[#00B7B0]" />
                Directorio Médico
              </Link>
            </li>
            <li>
              <Link href="/portal-medicos" className="flex items-center group text-gray-400 hover:text-[#00B7B0] transition-colors">
                <ChevronRight className="w-4 h-4 mr-2 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-[#00B7B0]" />
                Portal de Médicos
              </Link>
            </li>
            <li>
              <Link href="/inversionistas" className="flex items-center group text-gray-400 hover:text-[#00B7B0] transition-colors">
                <ChevronRight className="w-4 h-4 mr-2 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-[#00B7B0]" />
                Relación con Inversionistas
              </Link>
            </li>
            <li>
              <Link href="/bolsa-trabajo" className="flex items-center group text-gray-400 hover:text-[#00B7B0] transition-colors">
                <ChevronRight className="w-4 h-4 mr-2 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-[#00B7B0]" />
                Bolsa de Trabajo
              </Link>
            </li>
            <li>
              <Link href="/proveedores" className="flex items-center group text-gray-400 hover:text-[#00B7B0] transition-colors">
                <ChevronRight className="w-4 h-4 mr-2 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-[#00B7B0]" />
                Portal de Proveedores
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 4: Contacto de Emergencia */}
        <div className="flex flex-col space-y-5">
          <h4 className="text-white font-bold text-lg tracking-tight">Contacto Total</h4>
          <ul className="space-y-5 text-sm font-medium mt-2">
            <li className="flex items-start bg-gray-900 md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none">
              <Phone className="w-6 h-6 text-[#00B7B0] mr-4 mt-1 flex-shrink-0 animate-pulse" />
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#00B7B0] mb-1 font-bold">Urgencias 24/7 (Nacional)</span>
                <a href="tel:8002153300" className="text-white text-xl font-black hover:text-[#00B7B0] transition-colors">800 215 3300</a>
              </div>
            </li>
            <li className="flex items-start">
              <Phone className="w-5 h-5 text-gray-500 mr-4 flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Citas y Atención</span>
                <a href="tel:8002153300" className="text-gray-300 text-lg font-bold hover:text-white transition-colors">800 215 3300</a>
              </div>
            </li>
            <li className="flex items-center pt-2">
              <Mail className="w-5 h-5 text-gray-500 mr-4 flex-shrink-0" />
              <a href="mailto:contacto@hospitalesmac.com" className="text-gray-400 hover:text-white transition-colors">contacto@hospitalesmac.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium">
        <p>&copy; {new Date().getFullYear()} Hospitales MAC. Todos los derechos reservados.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/aviso-privacidad" className="hover:text-gray-300 transition-colors">Aviso de Privacidad</Link>
          <Link href="/terminos" className="hover:text-gray-300 transition-colors">Términos y Condiciones</Link>
        </div>
      </div>
    </footer>
  );
}
