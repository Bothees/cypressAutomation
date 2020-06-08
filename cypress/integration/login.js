/// <reference types="cypress" />

describe('First Test',function() {
    it('Successful Login', () => {
    cy.visit('https://www.moneysupermarket.com/my-account/sign-in/')
    cy.get('#email').type("bothees@gmail.com")
    cy.get('#password').type("Autotest2018")
    cy.get('#submit').click()
    cy.get('.sign-out__user-name').should('contain.text', 'Hi Boothiraj')
    cy.get('.sign-out__button').click()
})
})

const list = ['Home','History','Profile','Settings']

describe('Check Quote History',function() {
    before( () => {
        cy.visit('https://www.moneysupermarket.com/my-account/sign-in/')
        cy.get('#email').type("bothees@gmail.com")
        cy.get('#password').type("Autotest2018")
        cy.get('#submit').click()
    })
    it('verify All the options available',() => {
        cy.get('.navigation-bar__item-link').each(($menu,index,$list) => {
           const t = $list.get(index).innerText
           expect(t).to.equal(list[index])
        }) 

        cy.get('.sign-out__button').click()
    })
})   

describe('Profile information',function() {
    before( () => {
        cy.visit('https://www.moneysupermarket.com/my-account/sign-in/')
        cy.get('#email').type("bothees@gmail.com")
        cy.get('#password').type("Autotest2018")
        cy.get('#submit').click()
    })

    it('verify Profile information',() => {
        cy.get('.navigation-bar__item-link').each(($menu,index,$list) => {
            if($list.get(index).innerText === list[2]) {
                 $list.get(index).click()       
            }
        })
        
        cy.get('.person-details__name').then(($input) => {
            expect($input[0].innerText).to.eq('Boothiraj Palanisamy')
        })

        cy.get('.sign-out__button').click()

    })
}) 

const topNavigationList = ['Insurance','Money','Energy','Broadband','Mobile Phones','Travel','Crdeit Monitor']

describe('Top Navigation',function() {
    before( () => {
        cy.visit('https://www.moneysupermarket.com/my-account/sign-in/')
        cy.get('#email').type("bothees@gmail.com")
        cy.get('#password').type("Autotest2018")
        cy.get('#submit').click()
        cy.get('.sign-out__user-name').should('contain.text', 'Hi Boothiraj')
    })

    it('Hover Top Navigation and click on option',() => {
        cy.get('.top-navigation-container li').each(($menu,index,$list) => {
            if($menu.text().includes(topNavigationList[0])){
                cy.wrap($menu).click()
            }
        })
        cy.get('.sign-out__button').click()
    })
})    