const express = require("express");
const router = express.Router();
const Product = require("../models").Asproduct;
const Category = require("../models").Category;

router.get("/", (req, res) => {
  Product.findAll({ include: Category }).then(
    (products) => {
      res.json(products);
    },
    (error) => {
      res.json(error);
    }
  );
});
router.post("/", (req, res) => {
  const { name, price, inStore, categoryId } = req.body;
  Product.create({ name, price, inStore, categoryId }).then(
    (product) => {
      res.json({ status: 1, data: "Added product details" });
    },
    (error) => {
      res.json(error);
    }
  );
});

router.delete("/:id", (req, res) => {
  Product.destroy({ where: { id: req.params.id } }).then(
    (product) => {
      res.json({ status: 1, data: "Deleted product details" });
    },
    (err) => {
      res.json(err);
    }
  );
});

router.put("/:id", (req, res) => {
  const { name, price, inStore, categoryId } = req.body;
  Product.update(
    { name, price, inStore, categoryId },
    { where: { id: req.params.id } }
  ).then(
    (product) => {
      res.json({ status: 1, data: "Updated product details" });
    },
    (err) => {
      res.json(err);
    }
  );
});

module.exports = router;
