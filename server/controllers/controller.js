const knex = require('knex')(require('../knexfile'));

const getProduct = async (req, res) => {
    const products = await knex('products')
        .where({id: req.params.id});
        
    if (products.length === 0) {
        return res.status(404).json({
            message: `Products with ID ${req.params.id} not found`
        })
    }
    return res.status(200).json(products[0])
}

const getProducts = async (_req, res) => {
    try{
        const data = await knex('products')
        res.status(200).json(data);
    } catch (err) {
        res.status(400).send(`Error retrieving products: ${err}`)
    } 
}

module.exports = {
    getProducts,
    getProduct
}

'/api/helper/:productID/articles/:id'