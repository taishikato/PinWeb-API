const functions = require('firebase-functions')
const koaFirebase = require('koa-firebase-functions')
const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const admin = require('firebase-admin')

app.use(router.routes())
app.use(router.allowedMethods())

admin.initializeApp(functions.config().firebase)

router.get('/s/:id', async (ctx) => {
  ctx.response.status = 200
  ctx.body = {
    message: ctx.params.id
  }
})

exports.func = functions.https.onRequest(koaFirebase(app))
