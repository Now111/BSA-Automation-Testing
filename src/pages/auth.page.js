const { Button, Input } = require('../elements');

class AuthPage {

 
  constructor() {
    this.usernameField = new Input('input[name="name"]');
    this.surnameField = new Input('input[name="surname"]');
    this.birthDateField = new Input('input[name="birthdate"]');
    this.emailField = new Input('input[name="email"]');
    this.passwordField = new Input('input[name="password"]');
    this.retryPasswordField = new Input('input[name="retypePassword"]');
    this.phoneField = new Input('input[name="phone"]');

    this.clinicnameField = new Input('input[name="name"]');
    this.addressField = new Input('input[name="address"]');

    this.surnameField = new Input('input[name="surname"]');

    this.genderDdl = new Button('div.selectStyles__control', 0);
    this.statusDdl = new Button('div.selectStyles__control', 1);
    this.cityDdl = new Button('div.selectStyles__control', 2);

    this.ddlOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');
    this.submitButton = new Button('button');

    this.link = new Button('a[href=TEXT_TO_REPLACE]');
    this.addButton = new Button('button.styles_btn___s1BB.styles_without-border__3Vbp3.styles_primary-dark__1WnyR');
  
    this.stateOption = new Button('div.selectStyles__option=state');
    this.bostonOption = new Button('div.selectStyles__option=Boston, MA');

    this.profileLink = new Button('a[href=TEXT_TO_REPLACE]');
    this.editProfileButton = new Button('button[class="styles_btn___s1BB styles_medium-round__3KyFO styles_gray-light__3fTxu styles_edit__ftuHl"]');
    this.editButton = new Button('div.styles_editContainer__3utW5');
  
    this.specialityDdl = new Button('div.selectStyles', 0);
    this.clinicDdl = new Button('div.selectStyles', 1);
    
    this.ddlsOption = new Button('div.selectStyles=TEXT_TO_REPLACE');
   
    this.dentistValue = new Button('div[id="react-select-8-option-2"]');
    this.UCSFMedicalCenterValue = new Button('div[id="react-select-9-option-4"]');
  
    this.specialitySaveButton = new Button('button[type="submit"]', 0);
    this.clinicSaveButton = new Button('button[type="submit"]', 1);
    
  }

  async register({ name, surname, birthDate, email, password, phone, status, gender }) {
    await this.usernameField.setValue(name);
    await this.surnameField.setValue(surname);
    await this.birthDateField.setValue(birthDate);
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);
    await this.retryPasswordField.setValue(password);
    await this.phoneField.setValue(phone);

    await this.genderDdl.click();
    await this.ddlOption.clickByText(gender);

    await this.statusDdl.click();
    await this.ddlOption.clickByText(status);

    await this.submitButton.click();
  }

  async autorization({email, password}) {
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);
    await this.submitButton.click();
  }

  async changeProfileData({ profileLink, surname}) {
    await this.profileLink.clickByText(profileLink);
    await this.editProfileButton.click();
    await this.surnameField.setValue(surname);
    await this.editButton.click();
  }
    
  async selectSpecialityAndClinic({ profileLink, speciality, clinic }) {
    await this.profileLink.clickByText(profileLink);
    
    await this.specialityDdl.click();
    await this.ddlsOption.clickByText(speciality);

    await this.clinicDdl.click();
    await this.ddlsOption.clickByText(clinic);

    await this.dentistValue.click();
    await this.UCSFMedicalCenterValue.click();

    await this.specialitySaveButton.click();
    await this.clinicSaveButton.click();
  }
 
  async addNewClinic({ name, address, clinics, status, city, state, cityOption }) {
    await this.clinicnameField.setValue(name);
    await this.addressField.setValue(address);

    await this.link.clickByText(clinics);

    await this.statusDdl.click();
    await this.ddlOption.clickByText(status);

    await this.cityDdl.click();
    await this.ddlOption.clickByText(city);

    await this.addButton.click();
  
    await this.stateOption.clickByText(state);
    await this.bostonOption.clickByText(cityOption);
  }
  
}

module.exports = { AuthPage };
