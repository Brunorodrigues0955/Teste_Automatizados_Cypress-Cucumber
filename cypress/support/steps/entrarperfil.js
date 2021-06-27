/* global Given, Then, When, And */
import codigoEntrarNoPerfil from "../pageobjects/codigoEntrarNoPerfil";
const entranoperfilCodigo = new codigoEntrarNoPerfil

Given("Acessar a página de login", () => {
    entranoperfilCodigo.acessarSite();
})

When("Preencher campos de e-mail e senha com dados existentes", () => {
    entranoperfilCodigo.preencherDadosExistente();
})

And("Clicar no botão ENTRAR deverá ser efetuado o login", () => {
    entranoperfilCodigo.tentativaLogin();
})


And("Ser redirecionado para a página inicial", () => {
    entranoperfilCodigo.verificacaoLogin();
})

And("Clicar no botão open menu", () => {
    entranoperfilCodigo.entranomenu();
})

And("Clicar no botão perfil", () => {
    entranoperfilCodigo.entranoperfil();
})

Then("Deverá ser redirecionado para a página de perfil", () => {
    entranoperfilCodigo.verificarPerfil();
})
