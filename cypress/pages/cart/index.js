import { elements } from "./elements";

class Cart {
  confirmPage() {
    cy.get(elements.title).should("contain.text", "Carrinho");
    cy.url().should("eq", "http://lojaebac.ebaconline.art.br/carrinho/");
    cy.screenshot("Confirmando carrinho");
    cy.get(elements.checkoutButton).click();
  }
}

export default new Cart();
