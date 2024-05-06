// Como cliente da EBAC-SHOP
// Quero fazer o login (autenticação) na plataforma
// Para visualizar meus pedidos
// Regras de negócio:
// • Somente usuários ativos podem fazer login;
// • Deve exibir uma mensagem de erro caso o usuário erre o login e senha;
// • Se o usuário errar por 3 vezes a senha, deve travar por 15 minutos o login

import Login from "../pages/login";
import MyAccount from "../pages/myAccount";

describe("Login na plataforma", () => {
  beforeEach(() => {
    Login.visitPage();
  });

  it("Deve fazer login na plataforma", () => {
    Login.fillForm();
    MyAccount.validateAccess();
  });

  it("Deve exibir mensagem de erro ao errar login ou senha", () => {
    Login.fillFormError();
  });

  it("Deve apresentar mensagem de erro ao deixar um campo em branco", () => {
    Login.formInputEmpty();
  });

  it("Deve apresentar mensagem de erro ao tentar fazer login com usuário não cadastrado", () => {
    Login.userNotRegister();
  });

  it("Deve travar o login por 15 minutos após 3 tentativas de login com senha incorreta", () => {
    Login.loginBlocked();
  });
});
