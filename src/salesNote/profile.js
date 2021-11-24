async function profile(page) {
  await page.waitForSelector('.MuiFormControl-root')
  
  await page.type('[type="text"]', 'nf3101')

  await page.keyboard.press('Enter')

  return
}

module.exports = profile