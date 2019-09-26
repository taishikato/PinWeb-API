const validate = ((req, res, next) => {
  if (req.body.image === undefined || req.body.image === '') {
    res.status = 400
    return res.json({
      status: 'error',
      message: 'The image parameter is missing'
    })
  }
  return next()
})

module.exports = validate
