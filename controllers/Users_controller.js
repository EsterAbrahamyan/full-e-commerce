const {Users} = require ('../models')
const { generateAccessToken } = require('../jwt/jwt_generate');
const bcrypt = require("bcrypt");

function get_Users (req,res){
    Users.findAll()
    .then((users) => {
        res.json(users)
    }).catch((err) => {
        res.status(500).json({ error: err.message })
    })
}

function get_Users_id(req, res) {
    const { id } = req.params
    Users.findOne({
        where: { id }
    })
    .then((users) => {
            res.json(users)
        }).catch((err) => {
            res.status(500).json({ error: err.message })
        })

}
function get_Users_update(req, res) {
    const { id } = req.params
    const { firstname, lastname, password,email,role} = req.body
   Users.update(
        { firstname, lastname, password,email,role },
        {
            where: { id },
           
        })
        .then((user) => {
            res.json({ status: 'updated' })
        }).catch((err) => {
            res.status(500).json({ error: err.message })
        })

}
function get_Users_delete(req, res) {
    const { id } = req.params;
    Users.destroy(
        { where: { id } })
        .then((user) => {
            res.json({ status: 'deleted' })
        }).catch((err) => {
            res.status(500).json({ error: err.message })
        })

}



async function Users_register(req, res) {
    const { firstname, lastname, email, password } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }
    
    try {
      const user = await Users.findOne({ where: { email: email } });
      if (user) {
        return res.status(400).json({ error: "Email already exists" });
      }
    
      if (!firstname || !lastname || !email || !password) {
        return res.status(400).json({ error: "Please provide all required fields." });
      }
    
      const salt = await bcrypt.genSalt(10);
      const hashed_password = await bcrypt.hash(password, salt);
    
      if (firstname !== "" && lastname !== "" && email !== "" && password !== "") {
        const data = await Users.create({ firstname, lastname, email, password: hashed_password,role: "user" });
        return res.status(201).json(data);
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

async function Users_login(req, res) {
    const {email, password} = req.body;
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      return res.status(400).send("Email is not correct");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      const token = generateAccessToken(email, user.id,user.role);
      res.send(JSON.stringify({ status: "Logged in", jwt: token}));
    } else {
      return res.status(400).send("Invalid password");
    }
  }
   




module.exports = {
    get_Users,
    get_Users_id,
    get_Users_update,
    get_Users_delete,
    Users_register,Users_login
};
