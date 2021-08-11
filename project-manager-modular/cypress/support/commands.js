"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="cypress" />
Cypress.Commands.add('fillForm', function (inputs) {
    inputs.forEach(function (inputValue) {
        if (inputValue.selectValue) {
            cy.get("[name=\"" + inputValue.key + "\"]").select(inputValue.selectValue);
        }
        else {
            cy.get("[name=\"" + inputValue.key + "\"]").type(inputValue.text);
        }
    });
});
