
import express from 'express';
import { Product } from '../models/Product.js';
import { WishlistItem } from '../models/WishlistItem.js';

const router = express.Router();


// Sa loob ng routes/wishlistItems.js (GET route)
router.get('/', async (req, res) => {
  const expand = req.query.expand;
  let items = await WishlistItem.findAll();

  if (expand === 'product') {
    items = await Promise.all(items.map(async (item) => {
      const product = await Product.findByPk(item.productId);
      return {
        ...item.toJSON(),
        product
      };
    }));
  }
  
  res.json(items);
});

// POST: Mag-add sa wishlist
router.post('/', async (req, res) => {
  const { productId } = req.body;
  const item = await WishlistItem.create({ productId });
  res.status(201).json(item);
});

// DELETE: Magtanggal sa wishlist
router.delete('/:productId', async (req, res) => {
  const item = await WishlistItem.findOne({ where: { productId: req.params.productId } });
  if (!item) return res.status(404).json({ error: 'Item not found' });
  await item.destroy();
  res.status(204).send();
});

export default router;