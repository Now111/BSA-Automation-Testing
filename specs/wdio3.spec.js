const { expect } = require('chai');

const { App } = require('../src/pages');

const app = new App();

const EMAIL = 'john_admin1@admin.com';
const PASSWORD = 'Pa55word';
const TIME = 5000;
const PROFILE_LINK = '/user-profile/10b17307-24a9-4893-a841-4f3b5a0899e2';
const SURNAME = 'Watson';
const MY_SURNAME_XPATH = 'input[name="surname"]';

describe('Profile Editing:', function () {

  //Preconditions:
  //user is registered
  //user is logged in
  
  before(async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    await app.authPage.autorization({
      email: EMAIL,
      password: PASSWORD,
    });
  });

  after(async function () {
    await browser.reloadSession();
  });
  
  xit('should be able to change profile data', async function () {

    await app.authPage.changeProfileData({ 
      profileLink: PROFILE_LINK,
      surname: SURNAME,
    });
    
    await browser.pause(TIME);

    const mySurname = $(MY_SURNAME_XPATH);
    expect(mySurname).toHaveValueContaining(SURNAME);
       
  }); 
});
