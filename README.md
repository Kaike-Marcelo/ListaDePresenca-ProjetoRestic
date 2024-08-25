# ListaDePresenca-ProjetoRestic

## Descrição do Projeto

Este projeto é uma aplicação web de cadastro de lista de presença desenvolvida com TypeScript. O objetivo é permitir o cadastro de informações básicas de pessoas, como nome, idade e CPF. Os dados são armazenados localmente no navegador usando o Local Storage, e a lista de pessoas cadastradas é exibida dinamicamente na página. A aplicação é responsiva e foi projetada para funcionar bem em diferentes tamanhos de tela.

### Funcionalidades

- **Cadastro de Pessoas**: Permite adicionar uma nova pessoa com informações de nome, idade e CPF.
- **Listagem de Pessoas**: Exibe a lista de pessoas cadastradas.
- **Limpeza da Lista**: Permite remover todos os registros da lista e limpar o Local Storage.
- **Validação de Dados**: Inclui validações para garantir que os dados inseridos estão no formato correto:
  - **Nome**: máximo de 70 caracteres.
  - **Idade**: Até 3 dígitos.
  - **CPF**: Até 12 dígitos.

## Instruções de Como Executar a Aplicação

   [Abra no StackBlitz](https://stackblitz.com/~/github.com/Kaike-Marcelo/ListaDePresenca-ProjetoRestic)
   Faça um Fork para seu Github e crie um repositório. O projeto já estará rodando na aplicação.

## Tecnologias Utilizadas

- **TypeScript**: Linguagem principal utilizada para desenvolvimento.
- **Vite**: Ferramenta de construção e desenvolvimento.
- **HTML**: Estrutura da página.
- **CSS**: Estilização e layout.
- **Local Storage**: Armazenamento de dados no navegador.

## Possíveis Melhorias Futuras

1. Implementar um sistema de login e autenticação para gerenciar múltiplos usuários. Isso permitirá que cada usuário acesse e modifique apenas seus próprios dados, melhorando a segurança e personalização da aplicação.

2. Adicionar suporte a um backend para armazenamento persistente de dados em um banco de dados. Isso substituiria o uso exclusivo do Local Storage, permitindo a recuperação e manipulação de dados em diferentes dispositivos e sessões.

3. Implementar funcionalidades de pesquisa e filtragem para a lista de pessoas cadastradas. Isso permitirá aos usuários localizar rapidamente registros específicos com base em critérios como nome, idade ou CPF.

4. Melhorar o design responsivo para garantir que a aplicação se adapte de forma mais eficiente a uma variedade de tamanhos de tela e dispositivos. Isso pode incluir ajustes para diferentes resoluções e orientação de dispositivos.

5. Refinar a forma como os dados são apresentados visualmente na interface. Melhorar a formatação e a exibição dos dados de entrada e saída para proporcionar uma experiência mais clara e agradável ao usuário.

6. Adicionar campos para registrar e exibir a data e hora de cada cadastro feito. Isso permitirá aos usuários visualizar quando as informações foram adicionadas e acompanhar a cronologia dos registros.

