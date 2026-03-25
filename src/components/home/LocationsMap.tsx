"use client";

import React, { useState } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPin, Navigation, Clock } from "lucide-react";

export interface HospitalLocation {
  name: string;
  address: string;
  coordinates: { lat: number; lng: number };
  facadePhotoUrl: string;
}

interface LocationsMapProps {
  locations: HospitalLocation[];
}

const fallbackLocations: HospitalLocation[] = [
  {
    name: "Hospital MAC Aguascalientes Norte",
    address: "Blvd. Luis Donaldo Colosio Murrieta 106, Valle de las Trojes, 20115 Aguascalientes, Ags.",
    coordinates: { lat: 21.9213, lng: -102.3021 },
    facadePhotoUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Hospital MAC Celaya",
    address: "Av. Ferrocarril Central 709, Laureles, 38020 Celaya, Gto.",
    coordinates: { lat: 20.5284, lng: -100.8122 },
    facadePhotoUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Hospital MAC Puebla",
    address: "Periférico Ecológico 3507, Tlaxcalancingo, 72820 San Andrés Cholula, Pue.",
    coordinates: { lat: 19.0354, lng: -98.2435 },
    facadePhotoUrl: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Hospital MAC Irapuato",
    address: "Paseo de la Solidaridad 9641, La Pradera, 36630 Irapuato, Gto.",
    coordinates: { lat: 20.6908, lng: -101.3503 },
    facadePhotoUrl: "https://images.unsplash.com/photo-1538108149393-cebb47ac1930?q=80&w=800&auto=format&fit=crop",
  }
];

export function LocationsMap({ locations }: LocationsMapProps) {
  const isValidLocation = (l: HospitalLocation) => l && l.name && l.coordinates && l.facadePhotoUrl;
  const isSanityDataClean = locations && locations.length > 0 && locations.every(isValidLocation);
  
  const displayLocations = isSanityDataClean ? locations : fallbackLocations;
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  
  const [activeLocation, setActiveLocation] = useState<HospitalLocation | null>(displayLocations[0]);
  const [viewState, setViewState] = useState({
    longitude: displayLocations[0].coordinates.lng,
    latitude: displayLocations[0].coordinates.lat,
    zoom: 5,
  });

  const getGoogleMapsUrl = (lat: number, lng: number) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  };

  const handleLocationClick = (loc: HospitalLocation) => {
    setActiveLocation(loc);
    if (MAPBOX_TOKEN) {
      setViewState({
        longitude: loc.coordinates.lng,
        latitude: loc.coordinates.lat,
        zoom: 14,
      });
    }
  };

  return (
    <section id="hospitales" className="w-full bg-slate-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-sm font-bold tracking-widest text-[#00B7B0] uppercase">
            Nuestros Hospitales
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Encuéntranos en todo México
          </h3>
          <p className="text-lg text-slate-600 font-medium">
            Acércate a la mejor atención médica con nuestra red de hospitales de alta especialidad.
          </p>
        </div>

        {/* Carrusel (Slider Horizontal de Tarjetas) */}
        <div className="w-full relative group">
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory pt-4 px-2 custom-scrollbar">
            {displayLocations.map((loc, idx) => (
              <div
                key={idx}
                onClick={() => handleLocationClick(loc)}
                role="button"
                tabIndex={0}
                className={`text-left p-5 flex flex-col min-w-[320px] md:min-w-[360px] max-w-[360px] snap-center rounded-[28px] border bg-white transition-all duration-300 flex-shrink-0 relative overflow-hidden group-hover/card hover:shadow-xl hover:-translate-y-1 ${
                  activeLocation?.name === loc.name 
                    ? "border-[#00B7B0] ring-1 ring-[#00B7B0] shadow-md bg-[#00B7B0]/[0.02]" 
                    : "border-gray-100 shadow-sm"
                }`}
              >
                {/* Imágen de Fachada */}
                <div className="relative h-48 w-full overflow-hidden rounded-[18px] mb-5 bg-slate-100">
                  <img 
                    src={loc.facadePhotoUrl} 
                    alt={loc.name} 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover/card:scale-105" 
                  />
                </div>
                
                {/* Contenido */}
                <div className="flex-1 flex flex-col">
                  <h4 className={`text-lg font-bold mb-2 leading-tight ${activeLocation?.name === loc.name ? "text-[#00B7B0]" : "text-[#1A1A1A]"}`}>
                    {loc.name}
                  </h4>
                  <p className="text-sm text-gray-500 font-medium mb-6 line-clamp-2 leading-relaxed flex-1">
                    {loc.address}
                  </p>
                  
                  {/* Botonera de Tarjeta */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100/60 w-full">
                    <div className="flex items-center text-[13px] font-semibold text-gray-400">
                      <Clock className="w-4 h-4 mr-1.5" /> 24 hrs
                    </div>
                    <a 
                      href={getGoogleMapsUrl(loc.coordinates.lat, loc.coordinates.lng)} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      onClick={(e) => e.stopPropagation()} 
                      className="inline-flex items-center text-sm font-bold text-white px-4 py-2 bg-[#00B7B0] hover:bg-[#009B95] rounded-xl transition-colors shadow-sm"
                    >
                      <Navigation className="w-4 h-4 mr-1.5" /> Ruta
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mapa Interactivo (Solo visible si hay MAPBOX_TOKEN) */}
        {MAPBOX_TOKEN && (
          <div className="w-full h-[450px] lg:h-[550px] rounded-[32px] overflow-hidden shadow-inner border border-gray-200 relative bg-white mt-2">
            <Map
              {...viewState}
              onMove={(evt: any) => setViewState(evt.viewState)}
              mapStyle="mapbox://styles/mapbox/light-v11"
              mapboxAccessToken={MAPBOX_TOKEN}
              scrollZoom={false}
            >
              <NavigationControl position="bottom-right" />
              
              {displayLocations.map((loc, idx) => (
                <Marker
                  key={`marker-${idx}`}
                  longitude={loc.coordinates.lng}
                  latitude={loc.coordinates.lat}
                  anchor="bottom"
                  onClick={(e: any) => {
                    e.originalEvent.stopPropagation();
                    handleLocationClick(loc);
                  }}
                >
                  <div className="relative group cursor-pointer hover:scale-110 transition-transform">
                    {/* Efecto de anillo de pulso solo en la activa */}
                    {activeLocation?.name === loc.name && (
                      <span className="absolute -inset-1 animate-ping rounded-full bg-[#00B7B0] opacity-40"></span>
                    )}
                    <MapPin className={`w-12 h-12 drop-shadow-md relative ${activeLocation?.name === loc.name ? "text-[#00B7B0]" : "text-gray-400"}`} fill="white" strokeWidth={1.5} />
                  </div>
                </Marker>
              ))}

              {/* Popup solo muestra texto esencial ya que la tarjeta tiene la imagen completa */}
              {activeLocation && (
                <Popup
                  longitude={activeLocation.coordinates.lng}
                  latitude={activeLocation.coordinates.lat}
                  anchor="top"
                  onClose={() => setActiveLocation(null)}
                  closeOnClick={false}
                  className="rounded-2xl overflow-hidden z-20 shadow-lg"
                  maxWidth="260px"
                >
                  <div className="flex flex-col p-1">
                    <h4 className="font-bold text-[#1A1A1A] text-[15px] leading-tight mb-2 text-center">{activeLocation.name}</h4>
                    <p className="text-[12px] text-gray-500 font-medium text-center">{activeLocation.address}</p>
                  </div>
                </Popup>
              )}
            </Map>
          </div>
        )}
      </div>
    </section>
  );
}
