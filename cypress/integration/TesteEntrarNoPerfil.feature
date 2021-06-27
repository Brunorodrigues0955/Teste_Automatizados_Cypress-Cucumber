Feature: Login no site e ver o perfil

    @Positive
    Scenario: Login realizado com sucesso e conseguir ir para o perfil
        Given Acessar a página de login
        When Preencher campos de e-mail e senha com dados existentes
        And Clicar no botão ENTRAR deverá ser efetuado o login
        Then Ser redirecionado para a página inicial
        And Clicar no botão open menu
        And Clicar no botão perfil
        Then Deverá ser redirecionado para a página de perfil