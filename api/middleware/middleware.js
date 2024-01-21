function logger(req, res, next) {
  // DO YOUR MAGIC

  console.log(`request method: ${req.method},
  request URL: ${req.url},
  time: ${new Date().toLocaleString()}`)
  next()
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  console.log(' validateUserId middleware')
  next()
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  console.log(' validateUser middleware')
  next()
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
