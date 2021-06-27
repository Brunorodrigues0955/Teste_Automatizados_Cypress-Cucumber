/// <reference types="Cypress" />

import KnowledgeElements from "../element/KnowledgeElements";

const knowledgeElements = new KnowledgeElements
const url = "http://localhost/tcc/layout/static-pages/login.php"
const url2 = "http://localhost/tcc/layout/aluno/exercicios.php"
const email = "bruninho0955@gmail.com"
const senha = "Eter0955."

class codigoExercicios{

    acessarSite(){
        cy.visit(url)
    }

    preencherDadosExistente(){
        cy.get(knowledgeElements.inputEmail()).type(email)
        cy.get(knowledgeElements.inputSenha()).type(senha)
    }

    tentativaLogin(){
        cy.get(knowledgeElements.inputSubmit()).click()
    }

    verificacaoLogin(){
        cy.url().should("be.equal", "http://localhost/tcc/layout/aluno/conteudos.php")
    }

    verosexercicios(){
        cy.get(knowledgeElements.Exercicios()).click()
    }

    verificarexercicios(){
        cy.visit(url2)
        cy.url().should("be.equal", "http://localhost/tcc/layout/aluno/exercicios.php")
    }

}

export default codigoExercicios