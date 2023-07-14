const { Product } = require('../models');

const productData = [
  {
    product_name: 'Smartphone',
    price: 499.99,
    stock: 10,
    category_id: 1,
  },
  {
    product_name: 'Jeans',
    price: 899.99,
    stock: 5,
    category_id: 1,
  },
  {
    product_name: 'Lord of the Rings',
    price: 99.99,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: 'Plant',
    price: 19.99,
    stock: 30,
    category_id: 2,
  },
  {
    product_name: 'Fire Truck',
    price: 49.99,
    stock: 15,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
