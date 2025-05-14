// Example migration in src/database/migrations/create-apartment.ts
import { QueryInterface, DataTypes } from 'sequelize';

export = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('apartments', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: { type: DataTypes.STRING, allowNull: false },
      location: { type: DataTypes.STRING, allowNull: false },
      compound: { type: DataTypes.STRING, allowNull: false },
      type: { type: DataTypes.STRING, allowNull: false },
      bedrooms: { type: DataTypes.INTEGER, allowNull: false },
      bathrooms: { type: DataTypes.INTEGER, allowNull: false },
      area: { type: DataTypes.FLOAT, allowNull: false },
      price: { type: DataTypes.FLOAT, allowNull: false },
      description: { type: DataTypes.TEXT },
      image: { type: DataTypes.STRING, allowNull: true },
      amenities: { type: DataTypes.JSONB, defaultValue: [] },
      created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('apartments');
  },
};
