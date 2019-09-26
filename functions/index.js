const functions = require('firebase-functions')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const uuid = require('uuid/v4')
const app = express()
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

app.use(cors())
app.use(bodyParser())

app.post('/getImageUrl', (req, res) => {
  console.log('request body')
  console.log(req.body)
  // TODO: Upload a image to firebase storage
  const bucket = admin.storage().bucket()
  // Cut the first 23 strings(data:image/jpeg;base64,)
  const base64Data = req.body.image.slice(22)
  const imageBuffer = Buffer.from(base64Data, 'base64')
  const imageByteArray = new Uint8Array(imageBuffer);
  const fileName = uuid()
    .split('-')
    .join('')
  const file = bucket.file(`images/${fileName}.jpeg`);
  // TODO: Get a download URL of the image
  (async () => {
    try {
      await file.save(imageByteArray, { metadata: { contentType: 'image/jpeg', } })
      const urls = await file.getSignedUrl({
        action: 'read',
        expires: '03-09-2500'
      })
      const url = urls[0]
      console.log(`Image url = ${url}`)
      // TODO: return it
      return res.json({
        image: url
      })
    } catch (err) {
      console.log(`Error occured: ${err}`)
    }
  })();
})

exports.apifunc = functions.https.onRequest(app)
