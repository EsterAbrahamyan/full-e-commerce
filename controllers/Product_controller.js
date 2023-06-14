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
// function get_Product(req,res){
//     const {limit, offset} = req.query
//     Product.count().then((count)=>{
//         Product.findAll({limit, offset},{include: underCategory})
//         .then((product)=>{
//             console.log(count)
//         res.json({product, count})
//     }).catch((err)=>{
//             res.status(500).json({error:err.message})
//         })
// })
//     }
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

// function get_Product_update(req, res) {
//     const { id } = req.params
//     const { name, description, price,underCategory_id } = req.body
//     let product = Product.update(
//         { name, description, price, underCategory_id },
//         {
//             where: { id },
//             include: underCategory
//         })
//         const imgUrl = `${req.protocol}://${req.hostname}:6005/${image}`;
//         data.image = imgUrl;
//         .then((prod) => {
//             res.json({ status: 'updated' })
//         }).catch((err) => {
//             res.status(500).json({ error: err.message })
//         })

// }

// async function get_Product_update(req, res){
//     const { id } = req.params
//     const{name, price,description,underCategory_id} =req.body
//     const image = `uploads/${req.file.filename}`;
//     const data = await Product.update({name, price,description,underCategory_id},
//         {
//                         where: { id },
//                         include: underCategory
                    
//         })
    
//     const imgUrl = `${req.protocol}://${req.hostname}:6005/${image}`;
//     console.log(imgUrl)
//         data.image = imgUrl;
//         return res.status(201).json({ message: 'Product updated'});
// }
async function get_Product_update(req, res) {
    try {
        const { id } = req.params;
        const { name, description, price, underCategory_id } = req.body;

        let image = '';
        if (req.file) {
            image = `uploads/${req.file.filename}`;
        }

        // Update the product
        await Product.update(
            { name, description, price, underCategory_id, image },
            { where: { id } }
        );

        // Find the updated product
        let product = await Product.findByPk(id, { include: 'underCategory' });
        if (!product) {
            throw new Error('Product not found');
        }

        // Update the image URL
        const imgUrl = `${req.protocol}://${req.hostname}:6005/${image}`;
        product.image = imgUrl;
        await product.save();

        return res.json({ status: 'updated'});
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}



async function get_Product_post(req, res) {
    try {
        const { name, price, description, underCategory_id } = req.body;

        let image = '';
        if (req.file) {
            image = `uploads/${req.file.filename}`;
        }

        const data = await Product.create({ name, price, description, underCategory_id, image });

        const imgUrl = `${req.protocol}://${req.hostname}:6005/${image}`;
        data.image = imgUrl;
        await data.save();

        return res.status(201).json({ message: 'Product created', data });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
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