import { Apartment } from '@/database/entities/apartment.entity';
import { ApartmentResponseDto } from '../dto/response-apartment.dto';

export function toResponseDto(apartment: Apartment): ApartmentResponseDto {
  return {
    id: apartment.id,
    title: apartment.title,
    location: apartment.location,
    compound: apartment.compound,
    type: apartment.type,
    bedrooms: apartment.bedrooms,
    bathrooms: apartment.bathrooms,
    area: apartment.area,
    price: apartment.price,
    description: apartment.description,
    image: apartment.image,
    amenities: apartment.amenities || [],
  };
}
