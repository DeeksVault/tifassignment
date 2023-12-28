const {Role} = require('../models/roleModel');

async function createRole(req, res){
    const { name } = req.body;

  if(name.length<2 || name==null){
      return res.status(400).json({error:"validation error"})
  }

  const role = new Role({
    name
  });
  await role.save();

  res.json({ name: role.name });
}



async function getAllRole(req, res){
    const { page = 1, limit = 10 } = req.query;

  const total = await Role.countDocuments();

  const pages = Math.ceil(total / limit);
  const currentPage = parseInt(page);

  const roles = await Role.find()
    .skip((currentPage - 1) * limit)
    .limit(parseInt(limit));

  res.json({
    data: roles,
    meta: {
      total,
      pages,
      page: currentPage,
    },
  });
}

module.exports = {createRole, getAllRole};