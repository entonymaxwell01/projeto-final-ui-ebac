// Como cliente da EBAC-SHOP
// Quero adicionar produtos no carrinho
// Para realizar a compra dos itens
// Regras de negócio:
// • Não é permitido inserir mais de 10 itens de um mesmo produto ao carrinho;
// • Os valores não podem ultrapassar a R$ 990,00;
// • Valores entre R$ 200 e R$ 600 , ganham cupom de 10%
// • Valores acima de R$ 600 ganham cupom de 15%

import Login from "../pages/login";
import Catalog from "../pages/catalog";

describe("Adicionando itens ao carrinho", () => {
  beforeEach(() => {
    Login.visitPage();
    Login.fillForm();
    Catalog.visitPage();
  });

  it.only("Deve adicionar um item ao carrinho", () => {});
});
