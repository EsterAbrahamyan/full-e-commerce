const { CartItems } = require('../models')


function get_CartItems(req, res) {
    CartItems.findAll()
        .then((cartitems) => {
            res.json(cartitems)
        }).catch((err) => {
            res.status(500).json({ error: err.message })
        })

}
function get_CartItems_id(req, res) {
    const { id } = req.params
    CartItems.findOne({
        where:{id}
    })
        .then((cartitems) => {
            res.json(cartitems)
        }).catch((err) => {
            res.status(500).json({ eror: err.message })
        })

}

function get_CartItems_update(req, res) {
    const { id } = req.params
    const { product_id,cart_id} = req.body
    CartItems.update(
        {  product_id,cart_id },
        {
            where: { id }
        })
        .then((cartitems) => {
            res.json({ status: 'updated' })
        }).catch((err) => {
            res.status(500).json({ error: err.message })
        })

}

function get_CartItems_post(req, res) {
    // const { id } = req.params;
    const { product_id,cart_id } = req.body;
   CartItems.create(
        { product_id,cart_id },
        )
        .then((cartitems) => {
            res.json(cartitems)
        }).catch((err) => {
            res.status(500).json({ error: err.message })
        })

}

function get_CartItems_delete(req, res) {
    const { id } = req.params;
    CartItems.destroy(
        { where: { id } })
        .then((cartitems) => {
            res.json({ status: 'deleted' })
        }).catch((err) => {
            res.status(500).json({ error: err.message })
        })

}

module.exports = {
    get_CartItems,
    get_CartItems_id,
    get_CartItems_update,
    get_CartItems_post,
    get_CartItems_delete
};
