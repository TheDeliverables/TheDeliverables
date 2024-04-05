const router = require("express").Router();
const controller = require("../controllers/controller")

  
  router.get('/reviews', async (req, res) => {
    try {
        const review = await knex("product")
          .join("review", "post.id", "product.id")
          .where({ id: req.params.id });
    
        res.json(review);
      } catch (error) {
        res.status(500).json({
          message: `Unable to retrieve review for product with ID ${req.params.id}: ${error}`,
        });
      }
    
  });
  
  router.get('/videos', async (req, res) => {
    try {
        const video = await knex("product")
          .join("video", "video.id", "product.id")
          .where({ id: req.params.id });
    
        res.json(video);
      } catch (error) {
        res.status(500).json({
          message: `Unable to retrieve videos for product with ID ${req.params.id}: ${error}`,
        });
      }
    
  });

  router.get('/articles', async (req, res) => {
    try {
        const article = await knex("article")
          .join("article", "article.id", "product.id")
          .where({ id: req.params.id });
    
        res.json(article);
      } catch (error) {
        res.status(500).json({
          message: `Unable to retrieve articles for products with ID ${req.params.id}: ${error}`,
        });
      }
    
  });


module.exports = router;