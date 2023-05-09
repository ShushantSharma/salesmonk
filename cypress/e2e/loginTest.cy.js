import {login} from "../objects/LoginObj";
import {yopmailVerifyEmail} from "../objects/YopmailUtil"

describe('Login Test Suite', () => {
  beforeEach(()=>{
    cy.clearAllCookies()

  })

  it('Verify that user Should be able to login Successfully', () => {
      login();
      yopmailVerifyEmail();
      cy.visit('');
      cy.contains('Simple Stories').should('be.visible')


  })
})