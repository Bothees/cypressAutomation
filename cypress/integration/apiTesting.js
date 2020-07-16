const { expect } = require("chai");

describe('Todo API GET Request Header and content-type check', () => {
    it('GET request to get data', () => {

     cy.request('/todos/1')
     .its('headers')
     .its('content-type')
     .should('include', 'application/json');
     })
})


describe('Todo API GET Request Response validation', () => {
    it('GET request to get data', () => {
     cy.request('/todos/1')
       .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('title')
        expect(response.body).property('userId').to.be.a('number')
        expect(response.body).property('id').to.be.a('number')
        expect(response).property('body').to.contain({
            id: 1,
            title: 'delectus aut autem',
            userId:1
          })
        })
   })
})

describe('POST Request',() => {
    it('POST data to TODO API',()=> {
        cy.request('POST','/comments',{
            postId: 100000,
            id: 299555,
            name: "bothees",
            email: "bothees@gmail.com",
            body: "This is for Cypress testing"
        })
        .then((response) => {
            expect(response.status).to.eq(201)  
            expect(response).property('status').to.equal(201)
          })
    })
})

describe('Delete Request',() => {
    it('Delete a Comment',()=> {
        cy.request('DELETE','/posts/1')
        .should((response) => {
            expect(response.status).to.eq(200)
         })
        .its('headers')
        .its('content-type')
        .should('include', 'application/json');        
    })
})

describe('Stub a request',() => {
    it.skip('Stubbing Network request',() => {

        cy.visit('https://app.unidoshdev.com/')

        cy.server().should((server) => {
            expect(server.delay).to.eq(0)
            expect(server.method).to.eq('GET')
            expect(server.status).to.eq(200)
        })
        cy.route('GET','https://app.unidoshdev.com/messages/getmessagegroups').as('order')

        cy.get('#dvNotifications').click({force:true})

        cy.wait('@order').its('status').should('eq',200)
                    
    })
})