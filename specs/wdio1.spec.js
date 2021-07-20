const { expect } = require('chai');

const { App } = require('../src/pages');

const app = new App();

const EMAIL = 'john_admin1@admin.com';
const PASSWORD = 'Pa55word';
const URL = 'http://46.101.234.121/doctors';

describe('Autorization:', function () {
  //Preconditions:
  //user is registered  

  before(async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
  });

  after(async function () {
    await browser.reloadSession();
  });
  
  it('should be able to log in', async function () {
    
    await app.authPage.autorization({
      email: EMAIL,
      password: PASSWORD,
    });
     
    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === URL;
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql(URL);
     
  });

});
