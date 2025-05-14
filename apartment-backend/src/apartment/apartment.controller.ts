import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { Apartment } from '../database/entities/apartment.entity';

@Controller('apartment')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  @Post()
  async create(@Body() dto: CreateApartmentDto): Promise<Apartment> {
    try {
      console.log("here")
      return await this.apartmentService.createApartment(dto);
    } catch (error) {
      throw new BadRequestException(
        'Failed to create apartment',
        error instanceof Error ? error : new Error('Unknown error'),
      );
    }
  }

  @Get()
  findAll() {
    return this.apartmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.apartmentService.findOne(id);
  }
}
