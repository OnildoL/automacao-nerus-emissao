async function pointOfSales(page) {
  await page.waitForSelector('.MuiTypography-root')

  await page.keyboard.press('v')

  return
}

module.exports = pointOfSales