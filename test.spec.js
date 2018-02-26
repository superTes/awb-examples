const { expect } = require('chai')

const { client, element } = require('wd-interface')

describe('Google base example', () => {
  let browser = null
  const baseURL = 'https://www.google.com.ua/'

  //selectors
  const submitsearch = '[name="btnK"]'
  const inputsearch = '#lst-ib'
  const resultsearch = '#ires .g'
  //elements
  const submitSearch = element(submitsearch)
  const inputSearch = element(inputsearch)
  const resultSearch = element(resultsearch)

  before(async () => {
    browser = client().chrome() // for dirrect connection to chromedriver client().chrome(true)
    await browser.goTo(baseURL)
  })

  after(async () => {
    await browser.closeBrowser()
  })

  it('search git hub potapovDim', async () => {
    await inputSearch.sendKeys('git hub potapovDim')
    await submitSearch.click()
    await browser.sleep(1000)
    await resultSearch.waitForElement(1000)
    const allTextInSelector = await resultSearch.getText()
    expect(allTextInSelector).to.includes('potapovDim')
  })
})