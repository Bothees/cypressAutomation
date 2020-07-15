describe('Create new account on selfridges',() => {

    let newuser = null

    before(function () {
        cy.fixture('userRegistration.json').then(function(data) {
            newuser = data
          })
      })  

    it('New Account registration',() => {

        cy.visit('https://www.selfridges.com/GB/en/webapp/wcs/stores/servlet/UserRegistrationForm?currPage=__currPage__&storeId=10052&&editRegistration=Y&bct=&langId=-1&catalogId=16151')
        
        cy.get('#Register').click()

        cy.get('#dk_container_personTitle').click()

        cy.get('.dk_options li a').contains('Mr').click()
        
       cy.get('#firstName').type(newuser.firstName).should('have.value',newuser.firstName)

       cy.get('#lastName').type(newuser.lastName).should('have.value',newuser.lastName)

       cy.get('#registerLogonId').type(newuser.email).should('have.value',newuser.email)
   
       cy.get('.radioContainer [type="radio"][value="N"]').check({force:true}).should('be.checked')
          
       cy.get('#registerLogonPassword').focus().type(newuser.password)

       cy.get('#logonPasswordVerify').click().type(newuser.confirmPassword)

       cy.get('form[name="Register"] button[type="submit"]').click()

       cy.get('.personsName').contains(newuser.firstName,{ matchCase: false })
    })
})