const functions = require('firebase-functions')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

app.use(cors())
app.use(bodyParser())

app.post('/getImageUrl', (req, res) => {
  console.log('request body')
  console.log(req.body)
  // TODO: Upload a image to firebase storage
  // TODO: Get a download URL of the image
  // TODO: return it
  return res.json({ message: 'takato sensei' })
})

// exports.apifunc = functions.https.onRequest(koaFirebase(app))
exports.apifunc = functions.https.onRequest(app)
