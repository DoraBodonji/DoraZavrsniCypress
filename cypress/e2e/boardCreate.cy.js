/// <reference types='cypress' />

import { commonElements  } from '../page_object/common_elements'
describe('Login', ()=> {
    beforeEach(() => {
        cy.visit('login');
        // commonElements.emailInputField.type('dorab1989+@gmail.com');
        // commonElements.passInputField.type('12345678');
        commonElements.loginUser(Cypress.env('existingUserEmail'), Cypress.env('validPassword'));
        // commonElements.submitBtnLogin.click()
    })

    it('Create Board', () => {
        commonElements.newBoardBtn.click();
        commonElements.boardTitle.type('Dora');
        commonElements.boardTitleBtn.click();
        commonElements.radioBtnScrum.click();
        commonElements.importBtnNext.click();
        commonElements.boardLogoBtnNext.click();
        commonElements.finishBtnNext.click();
        commonElements.finishBtnNext.click();
    })

    it('Delete Board',() => {
        cy.get('a').contains('Dora').first().click();
        cy.get('[data-cy="board-configuration"] > span > div > .vs-c-site-logo').click();
        cy.get(':nth-child(8) > .vs-c-settings-section > .vs-c-settings-section-form > .vs-c-btn > :nth-child(2)').click();
        cy.get('.vs-u-text--right > .el-button--success').click();
        cy.url().should('include','boards')
       

    })
   
})