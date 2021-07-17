const assert = require('assert');
const { expect } = require('chai');


const rundomNumber = () => Math.floor(Math.random() * 10000).toString();

describe('Registration:', function() {

  xit('should be able to register', async function() {
    await browser.setWindowSize(1440, 960);
  
    await browser.url('/sign-up');
   
    const usernameField = await $('input[name="name"]');
    const surnameField = await $('input[name="surname"]');
    const birthDateField = await $('input[name="birthdate"]');
    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const retryPasswordField = await $('input[name="retypePassword"]');
    const phoneField = await $('input[name="phone"]');

    const ddls = await $$('div.selectStyles__control');

    const genderDdl = ddls[0];
    const statusDdl = ddls[1];

    const femaleOption = await $('div.selectStyles__option=female');
    const doctorOption = await $('div.selectStyles__option=doctor');

    const signUpButton = await $('button');

    await usernameField.waitForDisplayed({ timeout: 5000 });
    await usernameField.setValue('Marcus');

    await surnameField.waitForDisplayed({ timeout: 5000 });
    await surnameField.setValue('Aurelius');

    await birthDateField.waitForDisplayed({ timeout: 5000 });
    await birthDateField.setValue('11/11/1999');

    await emailField.waitForDisplayed({ timeout: 10000 });
    await emailField.setValue(`marcus${rundomNumber()}@gmail.com`);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    await retryPasswordField.waitForDisplayed({ timeout: 5000 });
    await retryPasswordField.setValue('Pa55word');

    await phoneField.waitForDisplayed({ timeout: 5000 });
    await phoneField.setValue('380000000000');

    await genderDdl.waitForDisplayed({ timeout: 5000 });
    await genderDdl.click();

    await femaleOption.waitForDisplayed({ timeout: 5000 });
    await femaleOption.click();

    await statusDdl.waitForDisplayed({ timeout: 5000 });
    await statusDdl.click();

    await doctorOption.waitForDisplayed({ timeout: 5000 });
    await doctorOption.click();
    
    await signUpButton.waitForDisplayed({ timeout: 5000 });
    await signUpButton.click();

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');
    
    await browser.reloadSession();
    

  });


});



describe('Log in:', function () {

  xit('should be able to log in', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    
    const signInButton = await $('button');
    
    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue('john_admin1@admin.com');

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    
    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');
    
    await browser.reloadSession();
  });

  xit('should not be able to log in', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    
    const signInButton = await $('button');
    
    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue('john_admin1@admin.com');

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('MyPa55word');

    
    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

 
  const url = await browser.getUrl();
  expect(url).to.be.eql('http://46.101.234.121/sign-in');


   await browser.reloadSession();
  });

});



describe('Profile data change:', function () {

  xit('should be able to change profile data', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
     
    const signInButton = await $('button');
    
    const myProfileField = await $('a.link_link__3zEN3=My Profile');

    const changeMyProfile = await $('span.styles_buttonIcon__2xI4i.styles_edit__ftuHl');

    const changeNameField = await $('input.styles_textInput__3q_vf.styles_gray-light__2tMYt');
    
    const editButton = await $('button.styles_btn___s1BB.styles_without-border__3Vbp3.styles_primary-dark__1WnyR=Edit');
  

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue('john_admin1@admin.com');

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    
    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();


    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    await myProfileField.waitForDisplayed({ timeout: 5000 });
    await myProfileField.click();


    await changeMyProfile.waitForDisplayed({ timeout: 5000 });
    await changeMyProfile.click();

    await changeNameField.waitForDisplayed({ timeout: 5000 });
    await changeNameField.setValue('Poll');

    await editButton.waitForDisplayed({ timeout: 5000 });
    await editButton.click();
   
    await browser.waitUntil(
    async function () {
    const url = await browser.getUrl();
    return url === 'http://46.101.234.121/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265';
   },
   { timeout: 5000 },
   );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265');
    
    await browser.reloadSession();
  });
});


describe('speciality and clinic for the doctor change:', function () {

  xit('should be able to change speciality and clinic for the doctor', async function () {
 
     await browser.setWindowSize(1440, 960);
     await browser.url('/sign-in');
 
     const emailField = await $('input[name="email"]');
     const passwordField = await $('input[name="password"]');
     
     const signInButton = await $('button');
     
     const myProfileField = await $('a.link_link__3zEN3=My Profile');
     const specialityField = await $('div.selectStyles__input');
     const changeSpecialityButton = await $('button.styles_btn___s1BB.styles_without-border__3Vbp3.styles_primary-dark__1WnyR');
     const clinicField = await $('div.selectStyles__single-value.css-1uccc91-singleValue');
     const changeClinicButton = await $('button.styles_btn___s1BB.styles_without-border__3Vbp3.styles_primary-dark__1WnyR');

     await emailField.waitForDisplayed({ timeout: 5000 });
     await emailField.setValue('john_admin1@admin.com');
 
     await passwordField.waitForDisplayed({ timeout: 5000 });
     await passwordField.setValue('Pa55word');
 
     
     await signInButton.waitForDisplayed({ timeout: 5000 });
     await signInButton.click();
 

      await browser.waitUntil(
            async function () {
              const url = await browser.getUrl();
              return url === 'http://46.101.234.121/doctors';
            },
            { timeout: 5000 },
          );

          await myProfileField.waitForDisplayed({ timeout: 5000 });
         await myProfileField.click();
         
      await specialityField.waitForDisplayed({ timeout: 5000 });
      await specialityField.setValue('endocrinologist');

      await changeSpecialityButton.waitForDisplayed({ timeout: 5000 });
      await changeSpecialityButton.click();

     
      await clinicField.waitForDisplayed({ timeout: 5000 });
      await clinicField.setValue('Cleveland Clinic Fairview Hospital');

      await changeClinicButton.waitForDisplayed({ timeout: 5000 });
      await changeClinicButton.click();

 
     await browser.reloadSession();
   });
 });

