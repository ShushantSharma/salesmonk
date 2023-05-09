export function yopmailVerifyEmail(){
    cy.visit('https://yopmail.com/');
    //cy.get('#login').type(Cypress.env('email')+'{enter}')
    cy.get('input[placeholder="Enter your inbox here"]').clear().type(Cypress.env('email')+'{enter}')
    cy.get('iframe[id="ifmail"]').its('0.contentDocument.body').then(cy.wrap).find('td[align="center"]').last().click()

}
//button[aria-label="Edit"]