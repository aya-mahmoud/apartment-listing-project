import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApartmentResponseDto } from './dto/response-apartment.dto';
import { toResponseDto } from './mapper/apartment.mapper';

@ApiTags('Apartments')
@Controller('apartment')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new apartment listing' })
  @ApiResponse({
    status: 201,
    description: 'Apartment created',
    type: ApartmentResponseDto,
  })
  async create(@Body() dto: CreateApartmentDto): Promise<ApartmentResponseDto> {
    try {
      const apartment = await this.apartmentService.createApartment(dto);
      return toResponseDto(apartment);
    } catch (error) {
      throw new BadRequestException(
        'Failed to create apartment',
        error instanceof Error ? error : new Error('Unknown error'),
      );
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all apartments' })
  @ApiResponse({
    status: 200,
    description: 'List of apartments',
    type: [ApartmentResponseDto],
  })
  async findAll(): Promise<ApartmentResponseDto[]> {
    const apartments = await this.apartmentService.findAll();
    return apartments.map(toResponseDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one apartment by id' })
  @ApiResponse({
    status: 200,
    description: 'The apartment',
    type: ApartmentResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Apartment not found' })
  async findOne(@Param('id') id: string): Promise<ApartmentResponseDto> {
    const apartment = await this.apartmentService.findOne(id);
    if (!apartment) {
      throw new NotFoundException(`Apartment with id ${id} not found`);
    }
    return toResponseDto(apartment);
  }
}
