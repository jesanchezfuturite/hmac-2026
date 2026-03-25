import Image from "next/image";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundUrl: string;
}

export function Hero({ title, subtitle, backgroundUrl }: HeroProps) {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundUrl}
          alt="Hospital Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark overlay 40% */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full">
        <h1 className={`${plusJakartaSans.className} text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl mb-6 drop-shadow-lg`}>
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-200 max-w-3xl mb-12 drop-shadow-md">
          {subtitle}
        </p>

        {/* Global Search Bar (Glassmorphism) */}
        <div className="w-full max-w-3xl bg-white/30 backdrop-blur-xl border border-white/30 rounded-full p-2 flex items-center shadow-2xl transition-all focus-within:bg-white/40">
          <div className="pl-4 pr-3 text-slate-700">
            <Search className="h-6 w-6" />
          </div>
          <input
            type="text"
            placeholder="Busca por especialidad, médico o servicio..."
            className="flex-1 bg-transparent border-none outline-none text-slate-800 placeholder:text-slate-600 text-base md:text-lg px-2 h-14 font-medium"
          />
          <Button className="bg-[#00B7B0] hover:bg-[#009B95] text-white rounded-full px-8 h-14 font-semibold text-base transition-transform hover:scale-105">
            Buscar
          </Button>
        </div>
      </div>
    </section>
  );
}
