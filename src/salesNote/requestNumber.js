async function requestNumber(page, request) {
  // await page.waitForSelector('.react-draggable-dragged') // It should be this one, for some reason it goes undetected.

  await page.waitForTimeout(1000) // This is not a good choice to wait
  
  await page.type('[type="text"]', request)

  await page.keyboard.press('Enter')
  
  return
}

module.exports = requestNumber