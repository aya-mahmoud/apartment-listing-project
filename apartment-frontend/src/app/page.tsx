// app/page.tsx (or pages/index.tsx if you're not using App Router)
import ApartmentCard from "@/components/ApartmentCard";
import DeveloperCard from "@/components/DeveloperCard";
// import { apartments } from "@/data/mockApartments";
import { developers } from "../data/mockDevelopers";
import Image from "next/image";
import { Apartment } from "./types/apartment.type";

export default async function Home() {
  const apartmentsRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/apartment`,
    {
      cache: "no-store",
    }
  );
  // const developersRes = await fetch(`${process.env.API_URL}/developers`, { cache: 'no-store' });

  if (!apartmentsRes.ok) {
    const text = await apartmentsRes.text(); // Get raw response (probably HTML error page)
    console.error("Failed to fetch apartments:", apartmentsRes.status, text);
    throw new Error("Failed to fetch apartments");
  }

  const apartments = await apartmentsRes.json();
  // const developers = await developersRes.json();

  return (
    <>
      <section className="relative h-[75vh] w-full overflow-hidden">
        <Image
          src="/images/main-photo.jpg"
          alt="Main Background"
          fill
          priority
          className="object-cover z-0"
        />
        {/* // g-black bg-opacity-40  */}
        <div className="absolute inset-0 bg-black/40 z-10 flex py-30 ">
          <h1 className="text-white text-4xl font-bold text-center px-4">
            Your Home In A Compound
            <br />
            <span className="text-lg font-medium">
              Search and compare among 15,000+ properties and 800+ prime
              compounds
            </span>
          </h1>
        </div>
      </section>

      {/* Developers Section */}
      <section className="py-8 px-4">
        <h2 className="text-[#222831] text-2xl font-semibold mb-6 text-center">
          Developers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {developers.map((dev) => (
            <DeveloperCard key={dev.id} developer={dev} />
          ))}
        </div>
      </section>

      {/* Apartments Section */}
      <section className="bg-[#222831] py-8 px-4">
        <h2 className="text-[#bf9745] text-2xl font-semibold mb-6 text-center">
          Featured Apartments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {apartments.map((apt: Apartment) => (
            <ApartmentCard key={apt.id} apartment={apt} />
          ))}
        </div>
      </section>
    </>
  );
}
