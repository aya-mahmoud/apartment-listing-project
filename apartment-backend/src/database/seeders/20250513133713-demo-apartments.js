'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('apartments', [
      {
        id: uuidv4(),
        title: 'Modern Apartment in Cairo',
        location: 'New Cairo',
        compound: 'Palm Hills',
        type: 'Apartment',
        bedrooms: 3,
        bathrooms: 2,
        area: 145.5,
        price: 2500000,
        description: 'Spacious apartment with modern finishes.',
        image: '/images/apartment1.jpg',
        amenities: JSON.stringify(['Pool', 'Gym', 'Security']),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        title: 'Luxury Penthouse in Sheikh Zayed',
        location: 'Sheikh Zayed',
        compound: 'Beverly Hills',
        type: 'Penthouse',
        bedrooms: 4,
        bathrooms: 3,
        area: 200.0,
        price: 4500000,
        description: 'Top-floor apartment with rooftop access.',
        image: '/images/apartment2.jpg',
        amenities: JSON.stringify(['Parking', 'Elevator', 'Garden']),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('apartments', null, {});
  },
};
