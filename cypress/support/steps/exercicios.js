/* global Given, Then, When, And */
import codigoExercicios from "../pageobjects/codigoExercicios";
const exerciciosCodigo = new codigoExercicios

Given("Acessar a página de login", () => {
    exerciciosCodigo.acessarSite();
})

When("Preencher campos de e-mail e senha com dados existentes", () => {
    exerciciosCodigo.preencherDadosExistente();
})

And("Clicar no botão ENTRAR deverá ser efetuado o login", () => {
    exerciciosCodigo.tentativaLogin();
})


And("Ser redirecionado para a página inicial", () => {
    exerciciosCodigo.verificacaoLogin();
})

And("Clicar na aba exercícios", () => {
    exerciciosCodigo.verosexercicios();
})


Then("Deverá ser redirecionado para a página de exercícios", () => {
    exerciciosCodigo.verificarexercicios();
})
