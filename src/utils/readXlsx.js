const xlsx = require('xlsx')

async function getRequests() {
  const workbook = xlsx.readFile('./pedidos.xlsx')
  const worksheet = workbook.Sheets[workbook.SheetNames[0]]

  let totalRequests = []

  for (const i in worksheet) {
    totalRequests.push(worksheet[i])

    break
  }

  const cont = Number(totalRequests[0].match(/:\D(\d+)/)[1])

  let requests = []
  
  for (let i = 0; i <= cont; i++) {
    if (worksheet[`A${i}`]) {
      const request = worksheet[`A${i}`].w

      requests.push(request)
    }
  }

  return requests
}

module.exports = getRequests
