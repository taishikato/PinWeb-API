const validate = ((req, res) => {
  if (req.body.image === undefined || req.body.image === '') {
    res.status = 400
    return res.json({
      status: 'error',
      message: 'The image parameter is missing'
    })
  }
})

module.exports = validate
