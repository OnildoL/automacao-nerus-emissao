async function pressEnter(page) {
  await page.waitForTimeout(1000) // This is not a good choice to wait
  await page.keyboard.press('Enter')
}

async function pressF9Note(page) {
  await page.waitForTimeout(1000) // This is not a good choice to wait

  await page.keyboard.press('F9')
  
  await page.waitForSelector('.highlight')

  await page.keyboard.press('1')
  
  await page.waitForSelector('form')
  
  await page.keyboard.press('1')
  
  await page.waitForSelector('.MuiFormLabel-filled')
  
  await page.keyboard.press('Enter')
  
  await pressEnter(page)
  
  await pressEnter(page)
  
  await pressEnter(page)
  
  await page.waitForSelector('.MuiListItem-gutters')

  await page.keyboard.press('Enter')

  await pressEnter(page)

  await pressEnter(page)

  await pressEnter(page)

  await pressEnter(page)

  await pressEnter(page)

  await page.waitForTimeout(5000) // This is not a good choice to wait

  const note = await page.evaluate(() => {
    const nf = document.querySelectorAll('input')[41].value
    return nf
  })
  
  await page.waitForTimeout(1000) // This is not a good choice to wait

  console.log(note)

  return note
}

module.exports = pressF9Note