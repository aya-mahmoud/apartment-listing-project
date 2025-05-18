import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { ApartmentModule } from './apartment/apartment.module';
import { Apartment } from './database/entities/apartment.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [Apartment],
      autoLoadModels: true,
      synchronize: false,
      define: {
        underscored: true,
      },
    }),
    ApartmentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
