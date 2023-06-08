/// <reference types='cypress' />

describe('Login', ()=> {
    beforeEach(() => {
        cy.visit('login');
    })

    it('LoginPositive', ()=>{
        commonElements.emailInputField.type('dorab1989+@gmail.com');
        commonElements.passInputField.type('12345678');
        commonElements.submitBtnLogin.click();
    })

    it('LoginWrongEmail', ()=>{
        commonElements.emailInputField.type('dorab1@gmail.com');
        commonElements.passInputField.type('12345678');
        commonElements.submitBtnLogin.click();
    })

    it('LoginWrongPass', ()=>{
        commonElements.emailInputField.type('dorab1989+@gmail.com');
        commonElements.passInputField.type('12345');
        commonElements.submitBtnLogin.click();
    })

    it('LoginEmailWithout@', ()=>{
        commonElements.emailInputField.type('dorab1gmail.com');
        commonElements.passInputField.type('12345678');
        commonElements.submitBtnLogin.click();
    })
})