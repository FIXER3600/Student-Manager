# Student Manager

**Projeto FullStack React e CodeIgniter de  gerenciamento de alunos para um processo seletivo de Desenvolvedor Full Stack na Delta Global.**

## Backend (CodeIgniter 4)

- CRUD de aluno:
  - Permite criar, ler, atualizar e deletar informações dos alunos no sistema.
- Login e Cadastro de Usuário:
  - Funcionalidades para autenticação de usuários do site, permitindo o acesso ao sistema.

## Frontend (React com TypeScript)

- Tela de Cadastro de Usuário:
  - Campos: Nome, Email, Senha.
  ![Captura de tela 2024-04-26 155144](https://github.com/FIXER3600/Student-Manager/assets/47544503/74f4da9b-b800-4580-a3e5-6491aa533479)

- Tela de Login:
  - Campos: Email, Senha; Botão "Entrar".
    ![Captura de tela 2024-04-26 155134](https://github.com/FIXER3600/Student-Manager/assets/47544503/5d107914-a2ac-4683-bff0-5d469da064fb)

- Tela Home:
  - Listagem de Cards representando os alunos cadastrados no sistema.
  - Header com funcionalidade de filtrar alunos pelo nome.
  - Botão para sair do sistema.
  - Botão "Novo Aluno" para adicionar um novo aluno.
  - Funcionalidades dos Cards:
    - Botão para editar o aluno.
    - Botão para deletar o aluno.
  - Funcionalidade de adicionar aluno:
    - Formulário com campos: Nome, Email, Telefone, Endereço, Foto do aluno.
  - Funcionalidade de editar aluno:
    - Tela de edição com os mesmos campos do formulário de adicionar, preenchidos com os dados do aluno.
    - Botão de voltar para a Home.
    - Botão para confirmar a edição, que edita os dados e volta para a Home.

https://github.com/FIXER3600/Student-Manager/assets/47544503/ff2c30ca-d0c3-4491-b986-72f9d2719fbb
  
  - Modal de confirmação ao deletar aluno:
      - Botões "Sim" e "Não".
    
https://github.com/FIXER3600/Student-Manager/assets/47544503/02bc8046-b40e-4825-9cca-2a7e858ed246

### 🎥 Video Demonstrativo



https://github.com/FIXER3600/Student-Manager/assets/47544503/525a8d06-8d4a-49c0-8397-ed7ff32be8d5


https://github.com/FIXER3600/Student-Manager/assets/47544503/ff2c30ca-d0c3-4491-b986-72f9d2719fbb
https://github.com/FIXER3600/Student-Manager/assets/47544503/02bc8046-b40e-4825-9cca-2a7e858ed246




## Instruções de Instalação

### Backend (CodeIgniter 4)

1. Clone o repositório do backend.
2. Instale as dependências usando Composer:
```bash
composer install
```

3. Configure o banco de dados no arquivo `.env`.
4. Execute as migrações para criar as tabelas necessárias no banco de dados:

```bash
php spark migrate
```

5. Inicie o servidor:
```bash
php spark serve
```

### Frontend (React com TypeScript)

1. Clone o repositório do frontend.
2. Instale as dependências usando npm ou yarn:
```bash
npm install
```
ou
```bash
yarn install
```
3. Configure as variáveis de ambiente, como a URL do backend, se necessário.
4. Inicie o servidor de desenvolvimento:
```bash
npm start
```

ou

```bash
yarn start
```
5. O frontend estará disponível em `http://localhost:5173` ou em `http://localhost:3000`.

### 🤓📚 Desenvolvido por: 


<table>
  <tr>
    <td align="center"><a href="https://github.com/FIXER3600">
      <img src="https://avatars.githubusercontent.com/u/47544503?v=4" style="border-radius: 50%" width="100px" alt="Imagem do perfil do Guilherme"/>
      <br />
      <sub><b>Guilherme de Oliveira Barros</b></sub>
      <br />
    </td>
</table>
