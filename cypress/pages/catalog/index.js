import { elements } from "./elements";

class Catalog {
  visitPage() {
    cy.visit("/produtos");
    cy.url().should("eq", "http://lojaebac.ebaconline.art.br/produtos/");
  }

  addProduct(quantity) {
    cy.get(elements.product).click();
    cy.get(elements.sizeProduct).click();
    cy.get(elements.colorProduct).click();
    cy.get(elements.quantityProduct).click().clear().type(quantity);
    cy.get(elements.addCartButton).click();

    cy.get(elements.textAddProduct).should("contain.text", "no seu carrinho");
    cy.get(elements.toGoCart).click();
    cy.screenshot("Adicionando item ao carrinho");
  }

  errorProductQuantity() {
    this.addProduct(11);
  }
}

export default new Catalog();
