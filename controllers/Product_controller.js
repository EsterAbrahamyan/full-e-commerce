const { Product, underCategory } = require('../models')
const upload = require ('../jwt/uploads')


function get_Product(req, res) {
   Product.findAll({include:underCategory})
        .then((prod) => {
            res.json(prod)
        }).catch((err) => {
            res.status(500).json({ error: err.message })
        })

}
function get_Product_id(req, res) {
    const { id } = req.params
    let product = Product.findOne({
        where: { id },
        include: underCategory
    })
        .then((prod) => {
            res.json(prod)
        }).catch((err) => {
            res.status(500).json({ eror: err.message })
        })

}

function get_Product_update(req, res) {
    const { id } = req.params
    const { name, description, price,image, underCategory_id } = req.body
    let product = Product.update(
        { name, description, price,image, underCategory_id },
        {
            where: { id },
            include: underCategory
        })
        .then((prod) => {
            res.json({ status: 'updated' })
        }).catch((err) => {
            res.status(500).json({ error: err.message })
        })

}

function get_Product_post(req, res) {
    upload.single('image')(req, res, function (err) {
        if (err) {
          // Handle any multer upload errors
          res.status(500).json({ error: err.message });
          return;
        }
    
        // Access the uploaded file using req.file
        const { name, description, price, underCategory_id } = req.body;
        const image = req.file;
   Product.create(
        { name, description, price,image:image.filename, underCategory_id },
        {
            // where: { id },
            include: underCategory
        })
        .then((prod) => {
            res.json(prod)
        }).catch((err) => {
            res.status(500).json({ error: err.message })
        })
    })

}

function get_Product_delete(req, res) {
    const { id } = req.params;
    Product.destroy(
        { where: { id } })
        .then((prod) => {
            res.json({ status: 'deleted' })
        }).catch((err) => {
            res.status(500).json({ error: err.message })
        })

}

module.exports = {
    get_Product,
    get_Product_id,
    get_Product_update,
    get_Product_post,
    get_Product_delete
};