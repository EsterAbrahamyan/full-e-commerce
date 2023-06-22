const { CartItems, Cart, Product } = require('../models')


 async function get_CartItems(req, res) {
    try{
        const cartItems = await  CartItems.findAll({include:[
            {model: Cart},
            {model: Product}
        ]})
        res.json(cartItems)
    } catch(error){
        res.status(500).json({error:error.message})
    }
}

 async function get_CartItems_id(req, res) {
    const { id } = req.params
    try{
        const cart = await Cart.findOne({where:{user_id:id}})
        if(cart){
            const cartItems = await CartItems.findAll({where:{cart_id: cart.id}, include: Product})
        res.json(cartItems )
        }else{
            res.status(404).json({error: 'Cart not found'})
        }
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

async function get_CartItems_update(req, res) {
    const { id } = req.params
    const { product_id,cart_id, quantity} = req.body
     try {
        const cartItem = await CartItems.findByPk(id)
        if(cartItem){
            cartItem.cart_id = cart_id
            cartItem.product_id = product_id
            cartItem.quantity = quantity
            await cartItem.save()
                res.json(cartItem)
         } else{
            res.status(404).json({error:'CartItem not found'})
         }
    }catch(error){
        req.status(500).json({error:error.message})
    }
}

async function get_CartItems_post(req, res) {
    // const { id } = req.params;
    const { product_id, user_id, quantity } = req.body;
    try {
      let cart = await Cart.findOne({ where: { user_id } });
      if (!cart) {
        cart = await Cart.create({ user_id });
      }
      let cartItem = await CartItems.findOne({
        where: { cart_id: cart.id, product_id },
      });
      if (!cartItem) {
        cartItem = await CartItems.create(
          { product_id, cart_id: cart.id, quantity }
        );
      } else {
        cartItem.quantity += quantity;
        await cartItem.save();
      }
      res.status(200).json({ message: 'Cart created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating cart' });
    }
  }

  async function incrementCartItem(req, res){
    const {id} = req.params
    const {quantity} = req.body
    try{
        const cartItem = await CartItems.findOne({where:{product_id:id}})
        if(!cartItem){
            return res.status(400).json({error:'CartItem not found'})
        } 
        if(cartItem.quantity > 0){
            await CartItems.update({quantity:cartItem.quantity + quantity}, {where:{product_id:id}})
            const updatedCartitems = await CartItems.findOne({where:{product_id:id}})
            res.json({cartItem: updatedCartitems})
        }else{
            res.json({cartItem})
        }
    } catch(error){
        res.status(500).json({error:error.message})
    }
}

async function decrementCartItem(req, res) {
    const { id } = req.params;
    const { quantity } = req.body;
  
    try {
      const cartItem = await CartItems.findOne({ where: { product_id: id } });
  
      if (!cartItem) {
        return res.status(400).json({ error: "CartItem not found" });
      }
  
      let updatedCartItem;
  
      if (cartItem.quantity > 1) {
        const newQuantity = cartItem.quantity - quantity;
        if (newQuantity < 0) {
          return res.status(400).json({ error: "Invalid quantity" });
        }
  
        updatedCartItem = await CartItems.update(
          { quantity: newQuantity },
          { where: { product_id: id } }
        );
  
        // Check if the update was successful
        if (updatedCartItem[0] === 0) {
          return res.status(500).json({ error: "Failed to update cart item" });
        }
  
        updatedCartItem = await CartItems.findOne({ where: { product_id: id } });
      } else {
        updatedCartItem = cartItem;
      }
  
      res.json({ cartItem: updatedCartItem });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  

// function get_CartItems_delete(req, res) {
//     const { id } = req.params;
//     CartItems.destroy(
//         { where: { id } })
//         .then((cartitems) => {
//             res.json({ status: 'deleted' })
//         }).catch((err) => {
//             res.status(500).json({ error: err.message })
//         })

// }
async function get_CartItems_delete(req, res){
  const {id}=req.params
  try{
      const cartItem = await CartItems.findOne({where:{product_id:id}})
      if(cartItem ){
          await CartItems.destroy({where:{product_id:id}})
          res.json({message: "Cart item deleted successfully"})
      } else{
          res.status(404).json({error:"Cart item not found"})
      }
  } catch(error){
      res.status(500).json({error:error.message})
  }
}

module.exports = {
    get_CartItems,
    get_CartItems_id,
    get_CartItems_update,
    get_CartItems_post,
    get_CartItems_delete,
    incrementCartItem,
    decrementCartItem
};
