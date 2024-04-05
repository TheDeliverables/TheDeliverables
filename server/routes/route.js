const express = require('express');
const knex = require('knex')(require('../knexfile'));
const router = express.Router();


// router 
//   .route("/products")
//   .get(controller.getProducts)

// router 
//   .route("/products/:id")
//   .get(controller.getProduct)

router.get('/:productid/', async (req, res) => {
    try {
      const products = await knex("/:productid")
      .where({ id: req.params.productid})
      .join("videos", "videos.productid", "products.productid")
      .join("articles", "articles.productid", "products.productid")
      .join("reviews", "reviews.productid", "products.productid");
  
      res
        .status(200)
        .json(inventories);
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  router.get('/:productid/:reviewid', async (req, res) => {
    try {
        const review = await knex("reviews")
          .where({ id: req.params.reviewid });
        console.log(review)

        res.json(review);
      } catch (error) {
        res.status(500).json({
          message: `Unable to retrieve review for product with ID ${req.params.id}: ${error}`,
        });
      }
    
  });
  
  router.get('/:productid/:videoid', async (req, res) => {
    try {
        const videos = await knex("vidoes")
          .where({ id: req.params.videoid });
        console.log(review)

        res.json(videos);
      } catch (error) {
        res.status(500).json({
          message: `Unable to retrieve review for product with ID ${req.params.id}: ${error}`,
        });
      }
    
  });
  router.get('/:productid/:articleid', async (req, res) => {
    try {
        const article = await knex("articles")
          .where({ id: req.params.articleid });
        console.log(review)

        res.json(article);
      } catch (error) {
        res.status(500).json({
          message: `Unable to retrieve review for product with ID ${req.params.id}: ${error}`,
        });
      }
    
  });


module.exports = router;