var assert = require('assert')

describe('First Test Group', () => {
  it('gets the title of MDN toppage', () => {
    browser.url('/')
    browser.pause(6000)
    const title = browser.getTitle()
    console.log(title)
    assert.equal(title, 'Google', 'Title did not match');
  })
})