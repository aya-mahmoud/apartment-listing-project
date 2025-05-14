// import { apartments } from "@/data/mockApartments";
import { Apartment } from "@/app/types/apartment.type";
import Image from "next/image";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ApartmentDetails({ params }: PageProps) {
  const { id } = await params; // Destructure the id from params

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/apartment/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch apartment");
  }
  const apartment: Apartment = await res.json();

  return (
    <div className="min-h-screen bg-[#222831]/90 flex items-center justify-center p-6">
      <div className="bg-[#1e252b] border border-white rounded-xl p-6 max-w-6xl w-full min-h-[70vh] text-white shadow-lg">
        <Image
          src={apartment.image ?? "../images/nawy-logo.svg"}
          alt={apartment.title}
          className="rounded-xl w-full h-100 object-contain"
          width={800}
          height={400}
        />
        <h1 className="text-2xl text-[#bf9745] font-bold mt-20">
          {apartment.title}
        </h1>
        <p className="text-gray-400">
          {apartment.compound} • {apartment.type} • {apartment.area} m²
        </p>
        <p className="text-xl text-gray-200 mt-2">{apartment.price}</p>
        <h3 className="text-xl font-bold mt-5 text-white">Description</h3>
        <p className="text-gray-300">
          {apartment.title} in {apartment.compound}
          {/* by {apartment.developer} */}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {apartment.amenities.map((a: string) => (
            <li
              key={a}
              className="bg-[#bf9745] px-3 py-1 rounded text-sm text-white"
            >
              {a}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
