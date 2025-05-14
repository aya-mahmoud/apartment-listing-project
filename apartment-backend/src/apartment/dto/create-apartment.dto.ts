import { IsString, IsNumber, IsOptional, IsArray } from 'class-validator';

export class CreateApartmentDto {
  @IsString()
  title: string;

  @IsString()
  location: string;

  @IsString()
  compound: string;

  @IsString()
  type: string;

  @IsNumber()
  bedrooms: number;

  @IsNumber()
  bathrooms: number;

  @IsNumber()
  area: number;

  @IsNumber()
  price: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  image?: string;

  @IsArray()
  @IsOptional()
  amenities: string[] = [];
}
