import { elements } from "./elements";

class myAccount {
  validateAccess() {
    cy.url().should("eq", elements.url);
    cy.get(elements.content).should("contain.text", "aluno_ebac");
    cy.get(elements.title).should("contain.text", "Minha conta");
    cy.screenshot("Validation login page");
  }
}

export default new myAccount();
