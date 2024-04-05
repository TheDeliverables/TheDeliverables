const knex = require('knex')(require('../knexfile'));

const getProduct = async (req, res) => {
    const products = await knex("products")
        .where({id: req.params.id});

    if (products.length === 0) {
        return res.status(404).json({
            message: `Products with ID ${req.params.id} not found`
        })
    }
}

module.exports = {
    getProduct
}