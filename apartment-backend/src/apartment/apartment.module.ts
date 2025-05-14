import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { ApartmentController } from './apartment.controller';
import { Apartment } from '../database/entities/apartment.entity';

@Module({
  imports: [SequelizeModule.forFeature([Apartment])],
  providers: [ApartmentService],
  controllers: [ApartmentController],
})
export class ApartmentModule {}
