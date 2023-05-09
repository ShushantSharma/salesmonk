//This Function is used to enter the email
function enterEmail(email){
    return cy.get('#identifier-field').type(email);
}

//This Function is Clicking on the continue button
function clickContinue(){
    return cy.contains('Continue').click();
}

// This Function doing the login or sending the login link
export function login(){
    cy.visit('/')
    enterEmail('qa.door@yopmail.com');
    clickContinue();
}
