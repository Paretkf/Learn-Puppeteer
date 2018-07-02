const puppeteer = require('puppeteer');
const bodyParser = require('body-parser')
const express = require('express')
// const CORS = require('cors')({origin: true})
const CORS = require('cors')
let app = express()
app.use(CORS())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/', (req, res) => {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:8081/');
    let str = {
      a: "hello yoyoyo puppeteer",
      b: {
        c: "xxxx"
      }
    }
    await page.type('#input', JSON.stringify(str));
    await page.click('#button')
  })();
  console.log(req.body.receiptData)
  res.send(req.body.receiptData)
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})