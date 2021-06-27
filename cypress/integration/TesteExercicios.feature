Feature: Login no site e ver os exercícios

    @Positive
    Scenario: Login realizado com sucesso e ir para a página de exercícios
        Given Acessar a página de login
        When Preencher campos de e-mail e senha com dados existentes
        And Clicar no botão ENTRAR deverá ser efetuado o login
        And Ser redirecionado para a página inicial
        And Clicar na aba exercícios
        Then Deverá ser redirecionado para a página de exercícios