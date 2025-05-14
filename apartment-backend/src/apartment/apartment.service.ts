import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Apartment } from '../database/entities/apartment.entity';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { ApartmentCreationAttributes } from './interface/apartment.interface';

@Injectable()
export class ApartmentService {
  constructor(
    @InjectModel(Apartment)
    private readonly apartmentModel: typeof Apartment,
  ) {}

  async createApartment(dto: CreateApartmentDto): Promise<Apartment> {
    try {
      const apartment = await this.apartmentModel.create(
        dto as ApartmentCreationAttributes,
      );
      return apartment;
    } catch (error) {
      throw new BadRequestException('Failed to create apartment', {
        cause: error,
      });
    }
  }
  async findAll(): Promise<Apartment[]> {
    const apartment = await this.apartmentModel.findAll();
    return apartment;
  }

  async findOne(id: string): Promise<Apartment | null> {
    const apartment = await this.apartmentModel.findByPk(id);
    return apartment;
  }
}
