import express from 'express';
import { sequelize } from '../models/index.js';
import { Product } from '../models/Product.js';
import { DeliveryOption } from '../models/DeliveryOption.js';
import { CartItem } from '../models/CartItem.js';
import { Order } from '../models/Order.js';
import {WishlistItem} from '../models/WishlistItem.js';

import { defaultProducts } from '../defaultData/defaultProducts.js';
import { defaultDeliveryOptions } from '../defaultData/defaultDeliveryOptions.js';
import { defaultCart } from '../defaultData/defaultCart.js';
import { defaultOrders } from '../defaultData/defaultOrders.js';
import {defaultWishList} from '../defaultData/defaultWishList.js';
 
const router = express.Router();

router.post('/', async (req, res) => {
  await sequelize.sync({ force: true });

  const timestamp = Date.now();

  const productsWithTimestamps = defaultProducts.map((product, index) => ({
    ...product,
    createdAt: new Date(timestamp + index),
    updatedAt: new Date(timestamp + index)
  }));

  const deliveryOptionsWithTimestamps = defaultDeliveryOptions.map((option, index) => ({
    ...option,
    createdAt: new Date(timestamp + index),
    updatedAt: new Date(timestamp + index)
  }));

  const cartItemsWithTimestamps = defaultCart.map((item, index) => ({
    ...item,
    createdAt: new Date(timestamp + index),
    updatedAt: new Date(timestamp + index)
  }));

  const ordersWithTimestamps = defaultOrders.map((order, index) => ({
    ...order,
    createdAt: new Date(timestamp + index),
    updatedAt: new Date(timestamp + index)
  }));

  // Idagdag ito pagkatapos ng cartItemsWithTimestamps o bago ang bulkCreate
  const wishlistWithTimestamps = defaultWishList.map((item, index) => ({
    ...item,
    createdAt: new Date(timestamp + index),
    updatedAt: new Date(timestamp + index),
  }));

  await Product.bulkCreate(productsWithTimestamps);
  await DeliveryOption.bulkCreate(deliveryOptionsWithTimestamps);
  await CartItem.bulkCreate(cartItemsWithTimestamps);
  await Order.bulkCreate(ordersWithTimestamps);
  await WishlistItem.bulkCreate(wishlistWithTimestamps);
  

  res.status(204).send();
});

export default router;
