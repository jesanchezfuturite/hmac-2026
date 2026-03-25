import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {/* Wrapper dinámico para empujar el Footer al fondo si hay poco contenido */}
      <main className="flex-grow w-full flex flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}
