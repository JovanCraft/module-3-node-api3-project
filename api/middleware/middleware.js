const User = require('../users/users-model')

function logger(req, res, next) {
  // DO YOUR MAGIC

  console.log(`request method: ${req.method},
  request URL: ${req.url},
  time: ${new Date().toLocaleString()}`)
  next()
}

async function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  try{
    const user = await User.getById(req.params.id)
    if(!user){
      res.status(404).json({message: 'user not found'})
    } else {
      req.user = user;
      next();
    }
  } catch(err) {
    res.status(500).json({message: 'something went wrong'})
  }

}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  const { name } = req.body
  if(!name || !name.trim()){
    res.status(400).json({ message: 'missing required name field'})
  } else {
    req.name = name.trim()
    next()
  }

}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  console.log(' validatePost middleware')
  next()
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}
