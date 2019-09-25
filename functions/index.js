const functions = require('firebase-functions')
const koaFirebase = require('koa-firebase-functions')
const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const admin = require('firebase-admin')
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');

app.use(cors({
  origin: '*',
  allowMethods: ['POST'],
  allowHeaders: '*',
  exposeHeaders: '*'
}))
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

admin.initializeApp(functions.config().firebase)

router.post('/getImageUrl', async (ctx) => {
  console.log('request body')
  console.log(ctx.request.body)
  // TODO: Upload a image to firebase storage
  // TODO: Get a download URL of the image
  // TODO: return it
  ctx.response.status = 200
  ctx.body = {
    message: 'takato sensei'
  }
  return
})

exports.apifunc = functions.https.onRequest(koaFirebase(app))
