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