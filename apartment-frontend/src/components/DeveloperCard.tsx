// components/DeveloperCard.tsx
import Image from "next/image";

type Developer = {
  id: number;
  name: string;
  image: string;
  compounds: number;
  properties: number;
};

export default function DeveloperCard({ developer }: { developer: Developer }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
      <div className="w-24 h-24 mb-4">
        <Image
          src={developer.image}
          alt={developer.name}
          width={96}
          height={96}
          className="rounded-full object-cover"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-800">{developer.name}</h3>
      <p className="text-gray-600 text-sm">{developer.compounds} Compounds</p>
      <p className="text-gray-600 text-sm">{developer.properties} Properties Available</p>
    </div>
  );
}
