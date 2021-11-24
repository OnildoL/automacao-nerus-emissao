async function detectsUserInformation(page) {
  await page.waitForSelector('.MuiInputBase-adornedEnd')

  await page.evaluate(() => {
    document.querySelectorAll('.MuiIconButton-label')[12].click()
  })
  
  return
}

module.exports = detectsUserInformation