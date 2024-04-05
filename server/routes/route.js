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
      // const product = await knex("products")
      // .where({ id: req.params.productid})

      const video = await knex("videos")
      .where({ product_id: req.params.productid})

      const article = await knex("articles")
      .where({ product_id: req.params.productid})
      const all = [video,article]

      res
        .status(200)
        .json(all);
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Unable to get product information' });
    }
  });
  
  router.get('/:productid/reviews/:reviewid', async (req, res) => {
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
  
  router.get('/:productid/videos/:videoid', async (req, res) => {
    try {
        const videos = await knex("videos")
          .where({id: req.params.videoid });
        console.log(videos)

        res.json(videos);
      } catch (error) {
        res.status(500).json({
          message: `Unable to retrieve review for product with ID ${req.params.id}: ${error}`,
        });
      }
    
  });
  router.get('/:productid/articles/:articleid', async (req, res) => {
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