async function printOptions(page) {
  await page.waitForSelector('.MuiTypography-h2')

  await page.evaluate(() => {
    document.querySelectorAll('.MuiIconButton-label')[11].click()
  })

  return
}

module.exports = printOptions