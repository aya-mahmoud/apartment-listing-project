export interface ApartmentCreationAttributes {
  id: string;
  title: string;
  location: string;
  compound: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  price: number;
  description?: string;
  image: string;
  amenities: string[];
}
