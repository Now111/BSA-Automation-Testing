const { expect } = require('chai');

const { App } = require('../src/pages');

const app = new App();

const EMAIL = 'john_admin1@admin.com';
const PASSWORD = 'Pa55word';
const TIME = 5000;
const PROFILE_LINK = '/user-profile/10b17307-24a9-4893-a841-4f3b5a0899e2';
const SPECIALITY = 'dentist';
const CLINIC = 'UCSF Medical Center';
const MY_SPECIALITY_XPATH = 'div[id="react-select-8-option-2"]';
const MY_CLINIC_XPATH = 'div[id="react-select-9-option-4"]';

describe('Specialty and Clinic Selection:', function () {

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

  xit('should be able to select specialty and clinic', async function () {

    await app.authPage.selectSpecialityAndClinic({ 
      profileLink: PROFILE_LINK,
      speciality: SPECIALITY,
      clinic: CLINIC,
    });
    
    await browser.waitUntil(
      async function () {
        const mySpecialty = $(MY_SPECIALITY_XPATH);
        return mySpecialty === SPECIALITY;
      },
      { timeout: TIME },
    );

    await browser.waitUntil(
      async function () {
        const myClinic = await browser.$(MY_CLINIC_XPATH);
        return myClinic === CLINIC;
      },
      { timeout: TIME },
    );

    const mySpecialty = $(MY_SPECIALITY_XPATH);
    expect(mySpecialty).to.be.eql(SPECIALITY);

    const myClinic = $(MY_CLINIC_XPATH);
    expect(myClinic).to.be.eql(CLINIC);
       
  }); 
});
