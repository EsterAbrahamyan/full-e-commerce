const {underCategory, Category} = require ('../models')


function get_Category (req, res) {
    Category.findAll({include:underCategory}) 
    .then((category)=>{
     res.json(category)}).catch((err)=>{
         res.status(500).json({error:err.message})
     })
     
 }
 function get_Category_post(req,res){
    // const { id } = req.params;
    const { name} = req.body;
    Category.create(
        { name }
        // {where:{id}}
    ) 
    .then((category)=>{
     res.json(category)}).catch((err)=>{
         res.status(500).json({error:err.message})
     })
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


function get_Category_update(req, res) {
  const name = req.body.name
  const {id} = req.params

    Category.update(
        { name },
        {
            where: { id }
      })
        .then((category) => {
            res.json({ status: 'updated' })
        }).catch((err) => {
            res.status(500).json({ error: err.message })
        })

}
async function get_Category_delete(req,res){
    const { id } = req.params;
    
    try {
        const category = await Category.findOne({
            where: { id },
            include: underCategory
        });
        
        if (category.undercategory.length > 0) {
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
   