const {underCategory, Product,Category} = require ('../models')

function get_underCategory (req, res) {
    underCategory.findAll({
        // where:{id},
        include:Product
        
    })
    
    .then((undercategory)=>{
     res.json(undercategory)}).catch((err)=>{
         res.status(500).json({error:err.message})
     })
     
 }
 function get_underCategory_id(req,res){
    const {id} = req.params
    underCategory.findOne({
        where:{id},
        include:Product
        
    })
    .then((undercategory)=>{
        res.json(undercategory)}).catch((err)=>{
            res.status(500).json({error:err.message})
        })
}

function get_underCategory_post(req,res){
    // const { id } = req.params;
    const { name,category_id} = req.body;
    underCategory.create(
        { name,category_id }
        // {where:{id}}
    ) 
    .then((undercategory)=>{
     res.json(undercategory)}).catch((err)=>{
         res.status(500).json({error:err.message})
     })
  }
  function get_underCategory_update(req, res) {
    const {name,category_id} = req.body
    const {id} = req.params
  
      underCategory.update(
          { name,category_id},
          {
              where: { id }
        })
          .then((undercategory) => {
              res.json({ status: 'updated' })
          }).catch((err) => {
              res.status(500).json({ error: err.message })
          })
  
  }
  async function get_underCategory_delete(req, res) {
    const { id } = req.params;
  
    try {
      await underCategory.destroy({ where: { id } });
      res.json({ message: 'underCategory deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  
  
 module.exports={get_underCategory,
    get_underCategory_post,
    get_underCategory_id,
               get_underCategory_update,
               get_underCategory_delete
            }