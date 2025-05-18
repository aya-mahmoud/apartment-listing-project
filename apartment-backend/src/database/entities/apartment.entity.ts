import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { ApartmentCreationAttributes } from '../../apartment/interface/apartment.interface';

@Table({ tableName: 'apartments', timestamps: true, underscored: true })
export class Apartment extends Model<ApartmentCreationAttributes> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({ allowNull: false })
  declare title: string;

  @Column({ allowNull: false })
  declare location: string;

  @Column({ allowNull: false })
  declare compound: string;

  @Column({ allowNull: false })
  declare type: string;

  @Column({ allowNull: false, type: DataType.INTEGER })
  declare bedrooms: number;

  @Column({ allowNull: false, type: DataType.INTEGER })
  declare bathrooms: number;

  @Column({ allowNull: false, type: DataType.FLOAT })
  declare area: number;

  @Column({ allowNull: false, type: DataType.FLOAT })
  declare price: number;

  @Column({ type: DataType.TEXT })
  declare description?: string;

  @Column({ allowNull: true })
  declare image: string;

  @Column({ type: DataType.JSONB, defaultValue: [] })
  declare amenities: string[];
}
