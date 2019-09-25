const functions = require('firebase-functions')
const koaFirebase = require('koa-firebase-functions')
const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const admin = require('firebase-admin')
const cors = require('koa2-cors');

app.use(cors({
  origin: '*',
  allowMethods: ['POST']
}))
app.use(router.routes())
app.use(router.allowedMethods())

admin.initializeApp(functions.config().firebase)

router.post('/getImageUrl', async (ctx) => {
  ctx.response.status = 200
  ctx.body = {
    message: 'takato sensei'
  }
})

exports.apifunc = functions.https.onRequest(koaFirebase(app))
