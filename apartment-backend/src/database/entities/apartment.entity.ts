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
  title: string;

  @Column({ allowNull: false })
  location: string;

  @Column({ allowNull: false })
  compound: string;

  @Column({ allowNull: false })
  type: string;

  @Column({ allowNull: false, type: DataType.INTEGER })
  bedrooms: number;

  @Column({ allowNull: false, type: DataType.INTEGER })
  bathrooms: number;

  @Column({ allowNull: false, type: DataType.FLOAT })
  area: number;

  @Column({ allowNull: false, type: DataType.FLOAT })
  price: number;

  @Column({ type: DataType.TEXT })
  description?: string;

  @Column({ allowNull: true })
  image: string;

  @Column({ type: DataType.JSONB, defaultValue: [] })
  amenities: string[];
}
