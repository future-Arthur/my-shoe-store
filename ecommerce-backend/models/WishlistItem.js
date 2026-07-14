
import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

export const WishlistItem = sequelize.define('WishlistItem', {
  productId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: { model: 'Products', key: 'id' }
  }
});