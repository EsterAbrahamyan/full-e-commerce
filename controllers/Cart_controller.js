const { Cart} = require('../models')


// function get_Cart(req, res) {
//    Cart.findAll({})
//         .then((cart) => {
//             res.json(cart)
//         }).catch((err) => {
//             res.status(500).json({ error: err.message })
//         })

// }
// function get_Cart_id(req, res) {
//     const { id } = req.params
//     Cart.findOne({
//         where:{id}
//     })
//         .then((cart) => {
//             res.json(cart)
//         }).catch((err) => {
//             res.status(500).json({ eror: err.message })
//         })

// }

function get_Cart_update(req, res) {
    const { id } = req.params
    const { User_id } = req.body
    Cart.update(
        {  User_id },
        {
            where: { id }
        })
        .then((cart) => {
            res.json({ status: 'updated' })
        }).catch((err) => {
            res.status(500).json({ error: err.message })
        })

}

// function get_Cart_post(req, res) {
//     // const { id } = req.params;
//     const { User_id } = req.body;
//    Cart.create(
//         { User_id },
//         )
//         .then((cart) => {
//             res.json(cart)
//         }).catch((err) => {
//             res.status(500).json({ error: err.message })
//         })

// }

function get_Cart_delete(req, res) {
    const { id } = req.params;
    Cart.destroy(
        { where: { id } })
        .then((cart) => {
            res.json({ status: 'deleted' })
        }).catch((err) => {
            res.status(500).json({ error: err.message })
        })

}

module.exports = {
    get_Cart_update,
    get_Cart_delete
};
