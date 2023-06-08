class CommonElements {

    get emailInputField() {
        return cy.get('[type="email"]');
    }

    get passInputField() {
        return cy.get ('[type="password"]');
    }

    get submitBtnLogin() {
        return cy.get('[type="submit"]').click();
    }

    get newBoardBtn() {
        return cy.get('.vs-c-my-organization__board-new');
    }

    get boardTitle() {
        return cy.get('.vs-input-border > input');
    }

    get boardTitleBtn() {
        return cy.get('[name="next_btn"]');
    }

    get radioBtnScrum() {
        return cy.get(':nth-child(1) > .vs-c-radio > .vs-c-radio-check');
    }

    get importBtnNext(){
        return cy.get('[name="next_btn"]')
    }

    get boardLogoBtnNext(){
        return cy.get('[name="next_btn"]')
    }

    get finishBtnNext(){
        return cy.get('[name="next_btn"]')
    }

    loginUser(email, password) {
        cy.visit('login');
        this.emailInputField.type(email);
        this.passInputField.type(password);
        this.submitBtnLogin.click()
    }

    
    
}  
export const commonElements = new CommonElements()