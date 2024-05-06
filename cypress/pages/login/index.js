import { elements } from "./elements";

class Login {
  visitPage() {
    cy.visit("/");
    cy.get(".icon-user-unfollow").click();
  }

  fillForm() {
    cy.get(elements.username).clear().type("aluno_ebac@teste.com");
    cy.get(elements.password).clear().type("teste@teste.com");
    cy.get(elements.remenberMe).check();
    cy.get(elements.loginButton).click();
  }

  fillFormError() {
    cy.get(elements.username).clear().type("aluno_ebac@teste.com");
    cy.get(elements.password).clear().type("testeerro123");
    cy.get(elements.remenberMe).check();
    cy.get(elements.loginButton).click();

    cy.get(elements.textError).should("contain.text", "Erro: ");
    cy.get(elements.loginIcon).should("contain.text", "Login");
    cy.url().should("eq", "http://lojaebac.ebaconline.art.br/minha-conta/");
    cy.screenshot("Error login");
  }
  formInputEmpty() {
    cy.get(elements.username).clear();
    cy.get(elements.password).clear();
    cy.get(elements.loginButton).click();

    cy.get(elements.textError).should("contain.text", "Erro: ");
    cy.get(elements.loginIcon).should("contain.text", "Login");
    cy.url().should("eq", "http://lojaebac.ebaconline.art.br/minha-conta/");
    cy.screenshot("Empty login");
  }

  userNotRegister() {
    cy.get(elements.username).clear().type("João Pereira");
    cy.get(elements.password).clear().type("teste123");
    cy.get(elements.loginButton).click();

    cy.get(elements.textError).should("contain.text", "Erro:");
    cy.url(elements.url).should(
      "eq",
      "http://lojaebac.ebaconline.art.br/minha-conta/"
    );
    cy.screenshot("User not registered");
  }

  loginBlocked() {
    for (let i = 0; i < 4; i++) {
      cy.get(elements.username).clear().type("aluno_ebac@teste.com");
      cy.get(elements.password).clear().type("testeerro123");
      cy.get(elements.remenberMe).check();
      cy.get(elements.loginButton).click();
    }

    cy.get(elements.textError).should("contain.text", "Acesso bloqueado ");
    cy.get(elements.loginIcon).should("contain.text", "Login");
    cy.url().should("eq", "http://lojaebac.ebaconline.art.br/minha-conta/");
    cy.screenshot("Blocked login");
  }
}

export default new Login();
