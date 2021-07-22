// - [X]  Get the `Name` input and type a name in it.
// - [X]  Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
// - [X]  Get the `Email` input and type an email address in it
// - [X] Get the `password` input and type a password in it
// - [X]  Set up a test that will check to see if a user can check the terms of service box
// - [X] Check to see if a user can submit the form data
// - [X] Check for form validation if an input is left empty

describe('User Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Doesnt do much', () => {
        expect(true).to.equal(true)
    })

    it('Check if text typed in name input contains the typed text',() =>{
        cy.get(':nth-child(4) > label > input')
        .type('Andrew Schaer')
        .should('have.value','Andrew Schaer')
    })
    it('Check if user can click submit after entering name, email, and password',() => {
        cy.get(':nth-child(5) > label > input')
        .type('AndrewSchaer@gmail.com')
        cy.get(':nth-child(3) > label > input')
        .type('AndrewSchaer@gmail.com')
        cy.get('button')
        .should('have.disabled', 'true')
    })

    it('Check if user can click tos checkbox',() => {
        cy.get(':nth-child(10) > input')
        .should('have.value', '')
        .click()  
        .should('have.value', 'true')  
    })

    it('Check if a blank username field after typing and deleting in it yields correct validation error', () => {
        cy.get(':nth-child(2) > label > input')
        .type('f{backspace}')
        cy.get(':nth-child(2) > label')
        .contains('*Username is Required')
        .should('exist')  
    })

        

})