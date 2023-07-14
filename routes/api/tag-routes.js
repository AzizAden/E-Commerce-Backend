const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock'],
        as: 'products',
      },
    ],
  })
    .then(dbTags => res.json(dbTags))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'category_id', 'product_name', 'stock', 'price'],
        as: 'products',
      },
    ],
  })
    .then(dbTag => {
      if (!dbTag) {
        res.status(404).json({ message: "Can't find this tag" });
        return;
      }
      res.json(dbTag);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then(dbTags => res.json(dbTags))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(dbTags => {
      if (!dbTags) {
        res.status(404).json({ message: 'No tags with this id!' });
        return;
      }
      res.json(dbTags);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(dbTags => {
      if (!dbTags) {
        res.status(404).json({ message: 'No tags found' });
        return;
      }
      res.json(dbTags);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
