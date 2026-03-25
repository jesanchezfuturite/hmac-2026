import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Hero } from "@/components/home/Hero";
import { BentoServices, type BentoService } from "@/components/home/BentoServices";
import { TrustSignals, type TrustSignalItem } from "@/components/home/TrustSignals";
import { LocationsMap, type HospitalLocation } from "@/components/home/LocationsMap";

const heroQuery = groq`*[_type == "hero"][0] {
  title,
  subtitle,
  backgroundUrl
}`;

const bentoQuery = groq`*[_type == "bentoService"] | order(_createdAt asc) {
  title,
  description,
  imageUrl,
  gridSize,
  destinationLink
}`;

const trustSignalQuery = groq`*[_type == "trustSignal"] | order(_createdAt asc) {
  title,
  iconName
}`;

const locationsQuery = groq`*[_type == "hospitalLocation"] | order(_createdAt asc) {
  name,
  address,
  coordinates {
    lat,
    lng
  },
  facadePhotoUrl
}`;

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const [heroData, bentoServicesData, trustSignalsData, locationsData] = await Promise.all([
    client.fetch(heroQuery),
    client.fetch<BentoService[]>(bentoQuery),
    client.fetch<TrustSignalItem[]>(trustSignalQuery),
    client.fetch<HospitalLocation[]>(locationsQuery)
  ]);

  return (
    <main className="flex flex-col flex-1 w-full relative">
      <Hero 
        title={heroData?.title || "Centro de Alta Especialidad Médica, Imagenología y Laboratorio"}
        subtitle={heroData?.subtitle || "Brindamos atención médica de primer nivel con un enfoque humano y la tecnología más avanzada."}
        backgroundUrl={heroData?.backgroundUrl || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop"}
      />
      <BentoServices services={bentoServicesData || []} />
      <TrustSignals signals={trustSignalsData || []} />
      <LocationsMap locations={locationsData || []} />
    </main>
  );
}
