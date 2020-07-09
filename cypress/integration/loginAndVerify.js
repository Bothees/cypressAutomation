/// <reference types="cypress" />

const { expect } = require("chai")

context('before',() => {
    beforeEach('run before',() => {
        cy.visit('https://www.moneysupermarket.com/my-account/sign-in/')
        cy.get('#email').type("bothees@gmail.com")
        cy.get('#password').type("Autotest2018")
        cy.get('#submit').click()
        cy.wait(100)
        cy.get('.sign-out__user-name').should('contain.text', 'Hi Boothiraj')
    })


describe('Login',function() {
    it('Successful Login', () => {
    cy.get('.sign-out__button').click()
})
})

const list = ['Home','History','Profile','Settings']

describe('Check Quote History',function() {

    it('verify All the options available',() => {
        cy.get('.navigation-bar__item-link').each(($menu,index,$list) => {
           const t = $list.get(index).innerText
           expect(t).to.equal(list[index])
        }) 

        cy.get('.sign-out__button').click()
    })
})   

describe('Profile information',function() {
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
    it('Hover Top Navigation and click on option',() => {

        cy.get('.top-navigation-container li').each(($menu,index,$list) => {
        }).then(($list) => {
            expect($list).to.have.length(7)
        })

        cy.get('.top-navigation-container li a[href="https://www.moneysupermarket.com/insurance/"].header-links-section-component__title').as('insurance')

        cy.get('@insurance').click()

        cy.url().should('equal','https://www.moneysupermarket.com/insurance/')
        
        cy.contains('(Log out)').click()
    })
})    
})