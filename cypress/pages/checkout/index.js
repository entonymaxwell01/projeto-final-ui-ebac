import { elements } from "./elements";

class Checkout {
  confirmPage() {
    cy.get(elements.title).should("contain.text", "Checkout");
    cy.url().should("eq", "http://lojaebac.ebaconline.art.br/checkout/");
    cy.screenshot("Confirmando checkout");
  }
  confirmOrder() {
    cy.get(elements.paymentMethod).click();
    cy.get(elements.terms).click();
    cy.get(elements.placeOrderButton).click();
    cy.get(elements.orderReceived).should("contain.text", "Pedido recebido");
    cy.get(elements.orderMensagem).should(
      "contain.text",
      "Obrigado. Seu pedido foi recebido."
    );
    cy.screenshot("Pedido realizado com sucesso");
  }
}

export default new Checkout();
