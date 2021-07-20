const { expect } = require('chai');

const { App } = require('../src/pages');

const app = new App();

const EMAIL = 'john_admin1@admin.com';
const PASSWORD = 'Pa55word';
const NAME = 'Almed';
const ADDRESS = 'Avenu 5th, 2';
const STATUS = 'doctor';
const CITY = 'Boston';
const STATE = 'state';
const CITY_OPTION = 'Boston, MA';
const CHECK_CLINIC = 'span.styles_title__3xRcc=Delta';
const LINK = '/clinics';

describe('New Clinic Adding:', function () {

  //Preconditions:
  //user is registered as a doctor
  
  before(async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
  });

  after(async function () {
    await browser.reloadSession();
  });

  xit('should be able to add new clinic', async function () {

    await app.authPage.autorization({
      email: EMAIL,
      password: PASSWORD,
    });
    
    await app.authPage.addNewClinic({ 
      clinics: LINK,
      name: NAME,
      address: ADDRESS,
      status: STATUS,
      city: CITY,
      state: STATE,
      cityOption: CITY_OPTION,
    });
  
    const newClinic = $(CHECK_CLINIC);
    expect(newClinic).toExist();
  });
});
