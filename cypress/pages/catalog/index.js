import { elements } from "./elements";

class Catalog {
  visitPage() {
    cy.get(elements.logo).click();
  }

  addProduct() {}
}

export default new Catalog();
