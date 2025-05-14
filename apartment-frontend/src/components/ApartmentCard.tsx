import { Apartment } from "@/app/types/apartment.type";
import Image from "next/image";
import Link from "next/link";

export default function ApartmentCard({ apartment }: { apartment: Apartment }) {
  return (
    <Link href={`/apartments/${apartment.id}`}>
      <div className="border rounded-xl shadow hover:shadow-lg transition p-4">
        <Image
          src={apartment.image ?? "images/nawy-logo.svg"}
          alt={apartment.title}
          className={`rounded w-full h-50 ${
            apartment.image ? "object-cover" : "object-contain"
          }`}
          width={100}
          height={100}
        />
        <h3 className="font-semibold text-lg mt-2">{apartment.title}</h3>
        <p>{apartment.compound}</p>
        <p className="text-sm text-gray-600">{apartment.price}</p>
        <p className="text-sm text-gray-500">
          {apartment.type} • {apartment.area} m² • Floor {apartment.floor}
        </p>
      </div>
    </Link>
  );
}
