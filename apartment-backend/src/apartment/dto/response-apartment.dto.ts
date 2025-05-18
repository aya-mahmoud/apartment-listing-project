import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsArray } from 'class-validator';

export class ApartmentResponseDto {
  @ApiProperty({ example: '30e4029f-836d-43ab-b2af-f1519ea6496d' })
  @IsString()
  id: string;

  @ApiProperty({ example: 'Cozy 2BR in New Cairo' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'New Cairo, Cairo, Egypt' })
  @IsString()
  location: string;

  @ApiProperty({ example: 'Palm Hills' })
  @IsString()
  compound: string;

  @ApiProperty({ example: 'Apartment' })
  @IsString()
  type: string;

  @ApiProperty({ example: 3 })
  @IsNumber()
  bedrooms: number;

  @ApiProperty({ example: 2 })
  @IsNumber()
  bathrooms: number;

  @ApiProperty({ example: 145.5 })
  @IsNumber()
  area: number;

  @ApiProperty({ example: 2500000 })
  @IsNumber()
  price: number;

  @ApiPropertyOptional({ example: 'A lovely place close to amenities' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ example: '/images/apt1.jpg' })
  @IsString()
  @IsOptional()
  image?: string;

  @ApiPropertyOptional({
    example: ['Pool', 'Gym', 'Security'],
    type: [String],
  })
  @IsArray()
  @IsOptional()
  amenities: string[] = [];
}
