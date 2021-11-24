async function login(page, user, password) {
  await page.type('[type="text"]', user)
  
  await page.type('[type="password"]', password)

  await page.click('.MuiButton-containedPrimary')

  return
}

module.exports = login
