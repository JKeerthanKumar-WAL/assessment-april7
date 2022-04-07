const express = require("express");
const router = express.Router();
const Category = require("../models").Category;

router.get("/", (req, res) => {
  Category.findAll().then(
    (categories) => {
      res.json(categories);
    },
    (error) => {
      res.json(error);
    }
  );
});
router.post("/", (req, res) => {
  Category.create({ name: req.body.name }).then(
    (category) => {
      res.json({ status: 1, data: "Added category details" });
    },
    (err) => {
      res.json(err);
    }
  );
});
router.delete("/:id", (req, res) => {
  Category.destroy({ where: { id: req.params.id } }).then(
    (category) => {
      res.json({ status: 1, data: "Deleted category details" });
    },
    (err) => {
      res.json(err);
    }
  );
});
router.put("/:id", (req, res) => {
  Category.update(
    {
      name: req.body.name,
    },
    { where: { id: req.params.id } }
  ).then(
    (category) => {
      res.json({ status: 1, data: "Updated category details" });
    },
    (err) => {
      res.json(err);
    }
  );
});
module.exports = router;
