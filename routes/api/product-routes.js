const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models')

router.get('/', (req, res) => {
  Product.findAll({
    include: [
      {
        model: Category,
        attributes: ['id', 'category_name'],
      },
      {
        model: Tag,
        as: 'tags',
      },
    ],
  })
    .then(dbProducts => res.json(dbProducts))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'product_name', 'price', 'stock'],
    include: [
      {
        model: Category,
      },
      {
        model: Tag,
        as: 'tags',
      },
    ],
  })
    .then(dbProduct => res.json(dbProduct))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Product.create(req.body)
    .then(product => {
      if (req.body.tagIds && req.body.tagIds.length) {
        const productTagArr = req.body.tagIds.map(tagId => {
          return {
            product_id: product.id,
            tag_id: tagId,
          };
        });
        return ProductTag.bulkCreate(productTagArr);
      }
      res.status(200).json(product);
    })
    .then(productTags => res.status(200).json(productTags))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(product => {
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then(productTags => {
      const currentTagIds = productTags.map(({ tag_id }) => tag_id);
      const newTagIds = req.body.tagIds
        .filter(tagId => !currentTagIds.includes(tagId))
        .map(tagId => {
          return {
            product_id: req.params.id,
            tag_id: tagId,
          };
        });
      const tagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);
      return Promise.all([
        ProductTag.destroy({ where: { id: tagsToRemove } }),
        ProductTag.bulkCreate(newTagIds),
      ]);
    })
    .then(updatedTags => res.json(updatedTags))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(dbProduct => {
      if (!dbProduct) {
        res.status(404).json({ message: 'There is no product with this id!' });
        return;
      }
      res.json(dbProduct);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
