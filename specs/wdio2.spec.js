const { App } = require('../src/pages');

const app = new App();

const EMAIL = '1@admin.com';
const PASSWORD = 'Pa55word';
const ERROR_MESSAGE = 'div.rrt-text=Email is incorrect';
const TIME = 5000;

describe('Autorization with entering invalid data:', function () {

  //Preconditions:
  //user is registered

  before(async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
  });

  after(async function () {
    await browser.reloadSession();
  });

  it('should not be able to log in', async function () {

    await app.authPage.autorization({
      email: EMAIL,
      password: PASSWORD,
    });
    
    await browser.pause(TIME);

    const errorMessage = $(ERROR_MESSAGE);
    expect(errorMessage).toBeDisplayed();
       
  });
});
