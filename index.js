const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const { dirname } = require('path')
const router = require('koa-router')
const app = new Koa()
const port = 3000


let rotApp = router()
rotApp.get('/', index)
rotApp.get('/about', about)
rotApp.get('/contact', contact)

async function index(ctx, next) {
    await next()
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream(path.join(__dirname,"/pages/index.html"))
}


async function about(ctx, next) {
    await next()
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream(path.join(__dirname,"/pages/about.html"))
}

async function contact(ctx, next) {
    await next()
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream(path.join(__dirname,"/pages/contact.html"))
}




app.use(rotApp.routes())

app.listen(port,() => {
    console.log(`Koa Server Online http://127.0.0.1:${port}`)
})