import { elements } from "./elements";

class Catalog {
  visitPage() {
    cy.visit("/produtos");
    cy.url().should("eq", "http://lojaebac.ebaconline.art.br/produtos/");
  }

  addProduct() {
    cy.get(elements.product).click();
    cy.get(elements.sizeProduct).click();
    cy.get(elements.colorProduct).click();
    cy.get(elements.addCartButton).click();

    cy.get(elements.textAddProduct).should(
      "contain.text",
      "foi adicionado no seu carrinho"
    );
    cy.get(elements.toGoCart).click();
    cy.screenshot("Adicionando item ao carrinho");
  }
}

export default new Catalog();
