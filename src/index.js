const login = require('./utils/login')
const pointOfSales = require('./salesNote/pointOfSales')
const profile = require('./salesNote/profile')
const printOptions = require('./salesNote/printOptions')
const numberRequest = require('./salesNote/requestNumber')
const detectsUserInformation = require('./salesNote/detectsUserInformation')
const pressF9Note = require('./salesNote/pressF9Note')
const getRequests = require('./utils/readXlsx')
const fs = require('fs')
const puppeteer = require('puppeteer')

async function log(request, note) {
  let text = `#############################################
Pedido: ${request}
Nota fiscal: ${note}
#############################################\r\n
`

  let logger = fs.createWriteStream('./requests.txt', {
    flags: 'a'
  })

  logger.write(text)
  logger.end()
}

async function main(request) {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  await page.goto('http://leitura.nerus.com.br/', {
    waitUntil: 'networkidle2'
  })
  
  await login(page, '3110', '25961')
  await pointOfSales(page)
  await profile(page)
  await printOptions(page) // Temporarily while there are digital certificate warnings
  await numberRequest(page, request)
  await detectsUserInformation(page)
  let note = await pressF9Note(page)

  if (!note) {
    note = `Error interno: ${note}`
  }

  await log(request, note)
}

;(async () => {
  const requests = await getRequests()

  for await (const request of requests) {
    await main(request)
  }
})()
