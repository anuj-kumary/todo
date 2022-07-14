/// <reference types="cypress" />

describe("Todo Cypress Test",()=>{

    const addingTodo = (name) => {
        cy.get('.input-txt').should("be.visible").type(name)
        cy.get('.btn').should("be.visible").click()
        cy.get('.todo').should("be.visible").contains(name)
    }
    const FIRST_TODO = "react";

    beforeEach(() => {
        cy.visit("/")
    })

    it("Render Phase" , () => {
        cy.get('input').should("be.visible");
        cy.get('.input-txt').should('be.empty')
    })

    it("Addig Todo" , () => {
        addingTodo(FIRST_TODO)
    })

    it("Edit Todo" , () => {
        addingTodo(FIRST_TODO)
        const newTodo = "Learn"
        cy.get('.edit-btn').should("be.visible").click()
        cy.get('.input-txt').should("be.visible").type(newTodo)
        cy.get('.btn').should("be.visible").click()
        cy.get('.todo').should("be.visible").contains("reactLearn")
    })

    it("Delete Todo" , () => {
        addingTodo(FIRST_TODO)
        cy.get('.delete-btn').click()
        cy.get('todo').should('not.exist', FIRST_TODO)
    })

    it("Adding multiple todo" , () => {
    const todos = ["Javascript", "React", "MongoDB", "Cypress" ]
        todos.forEach(todo => {
            addingTodo(todo)
        });
    })

})