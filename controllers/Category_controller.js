const {underCategory, Category} = require ('../models')
const upload = require ('../jwt/uploads')

function get_Category (req, res) {
    Category.findAll({include:underCategory}) 
    .then((category)=>{
     res.json(category)}).catch((err)=>{
         res.status(500).json({error:err.message})
     })
     
 }
 async function get_Category_post(req,res){
    // const { id } = req.params;
    const name = req.body.name
    const image = `uploads/${req.file.filename}`;
    const data = await Category.create(
        {name }
        // {where:{id}}
    ) 
    const imgUrl = `${req.protocol}://${req.hostname}:6005/${image}`;
    console.log(imgUrl)
        data.image = imgUrl;
        return res.status(201).json({ message: 'Category created'});
}



  function get_Category_id(req,res){
    const {id} = req.params
    console.log(id)
    Category.findOne({include:underCategory,where:{id}})
        
        
        .then((category)=>{
        res.json(category)}).catch((err)=>{
            res.status(500).json({error:err.message})
        })
}


async function get_Category_update(req, res) {
  try {
    const name = req.body.name
    const {id} = req.params

  let image = '';
        if (req.file) {
            image = `uploads/${req.file.filename}`;
        }


    await Category.update(
        { name, image },
        {
            where: { id }
      })

      let category = await Category.findByPk(id)
      if(!category){
        throw new Error('Category not found');
      }

      const imgUrl = `${req.protocol}://${req.hostname}:6005/${image}`;
        category.image = imgUrl;
        await category.save();

        return res.json({ status: 'updated'});
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }

        // .then((category) => {
        //     res.json({ status: 'updated' })
        // }).catch((err) => {
        //     res.status(500).json({ error: err.message })
        // })

}
async function get_Category_delete(req,res){
    const { id } = req.params;
    
    try {
        const category = await Category.findOne({
            where: { id },
            include: underCategory
        });
        
        if (category.underCategories.length > 0) {
            res.status(400).json({ status: 'Cannot delete category that has undercategory' });
        } else {
            await Category.destroy({ where: { id } });
            res.json({ message: 'Category deleted' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    }


module.exports={get_Category,
    get_Category_post,
    get_Category_id,
               get_Category_update,
               get_Category_delete
            }
   