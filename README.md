# Laboratório de Práticas: _Vitrine - Backend_

## Descrição
API desenvolvida com Nest.js que gerencia a apresentação de candidatos para representante e de Projetos da Fatec Registro. Através de QR codes únicos cada voto é encaminhado para a página correspondente ao candidato escolhido, garantindo transparência e acessibilidade durante o processo eleitoral da Faculdade.

### O sistema oferece:

- Apresentação de candidatos e projetos através de vitrine digital

- Geração de QR codes únicos para cada representate

- Integração segura com o sistema de votação

- Busca de eventos externos

- Consumo de informações providos pelo CMS através do Banco de Dados

## Requisitos Técnicos

### Ambiente de Desenvolvimento
- Node.js: v22.x (LTS recomendado)

- npm: v10.x ou Yarn

- PostgreSQL: v16+ (banco de dados principal)

- NestJS CLI: v11.0.0

- TypeScript: v5.7.3

## Dependências Principais

### Backend:

- @nestjs/common: v11.0.1

- @nestjs/jwt: v11.0.0 (autenticação)

- @nestjs/typeorm: v11.0.0 (ORM)

- typeorm: v0.3.21

- pg: v8.14.1 (driver PostgreSQL)

- @nestjs/swagger: v11.1.0 (documentação API)

## Segurança
- Autenticação JWT (JSON Web Tokens)

## Configuração do Ambiente
Instalação
```bash
git clone https://github.com/laboratorio-de-praticas/vitrine-be.git

cd vitrine-be

npm install

cp .env.example .env
```

## Variáveis de Ambiente (.env)

### Configurações do servidor
```bash
PORT=5001
NODE_ENV=development

### Banco de dados
DB_HOST=nome_do_host
DB_PORT=porta
DB_USERNAME=nome_do-usuario
DB_PASSWORD=senha
DB_DATABASE=nome_do_banco

### Frontend 
FRONT_END_HOST=http://localhost:3001
```


## Scripts Disponíveis
- `npm run build`: Compila o projeto usando o Nest
- `npm run format`: Formata o código usando Prettier
- `npm run start`: Inicia o servidor em modo normal
- `npm run start:dev`: Inicia o servidor em modo de desenvolvimento com hot-reload
- `npm run start:debug`: Inicia o servidor em modo de depuração
- `npm run start:prod`: Inicia o servidor em modo de produção
- `npm run lint`: Executa o ESLint para correção de código
- `npm run test`: Executa os testes unitários
- `npm run test:watch`: Executa os testes em modo observador
- `npm run test:cov`: Executa os testes com cobertura
- `npm run test:debug`: Executa os testes em modo de depuração
- `npm run test:e2e`: Executa os testes end-to-end

## Estrutura do Projeto 
```
src/
├── controllers/     # Controladores da aplicação
├── dto/             # Objetos de transferência de dados
├── entities/        # Entidades do banco de dados
├── modules/         # Módulos NestJS
├── providers/       # Provedores de serviços
├── middlewares/     # Middlewares personalizados
├── repositories/    # Repositórios para acesso a dados
├── services/        # Serviços de negócios
├── utils/           # Funções utilitárias
└── main.ts          # Ponto de entrada da aplicação
```

## Endpoints Principais

### Representantes
Método GET
→ Endpoint: /v1/vitrine/tv
→ Descrição: Lista todos os eventos internos ativos no momento, com o número de representantes >=2
→ Autenticação: Nível Administrativo

## Segurança
### Camadas de Proteção

- CORS: Restrito ao domínio do frontend

## Testes
- Cobertura garantida por:

- Testes unitários (Jest)

```bash
npm run test:cov  # Gera relatório de cobertura
```
# Laboratório de Práticas: _Vitrine - Backend_

## Descrição
API desenvolvida com Nest.js que gerencia a apresentação de candidatos para representante e de Projetos da Fatec Registro. Através de QR codes únicos cada voto é encaminhado para a página correspondente ao candidato escolhido, garantindo transparência e acessibilidade durante o processo eleitoral da Faculdade.

### O sistema oferece:

- Apresentação de candidatos e projetos através de vitrine digital

- Geração de QR codes únicos para cada representate

- Integração segura com o sistema de votação

- Busca de eventos externos

- Consumo de informações providos pelo CMS através do Banco de Dados

## Requisitos Técnicos

### Ambiente de Desenvolvimento
- Node.js: v22.x (LTS recomendado)

- npm: v10.x ou Yarn

- PostgreSQL: v16+ (banco de dados principal)

- NestJS CLI: v11.0.0

- TypeScript: v5.7.3

## Dependências Principais

### Backend:

- @nestjs/common: v11.0.1

- @nestjs/jwt: v11.0.0 (autenticação)

- @nestjs/typeorm: v11.0.0 (ORM)

- typeorm: v0.3.21

- pg: v8.14.1 (driver PostgreSQL)

- @nestjs/swagger: v11.1.0 (documentação API)

## Segurança
- Autenticação JWT (JSON Web Tokens)

## Configuração do Ambiente
Instalação
```bash
git clone https://github.com/laboratorio-de-praticas/vitrine-be.git

cd vitrine-be

npm install

cp .env.example .env
```

## Variáveis de Ambiente (.env)

### Configurações do servidor
```bash
PORT=5001
NODE_ENV=development

### Banco de dados
DB_HOST=nome_do_host
DB_PORT=porta
DB_USERNAME=nome_do-usuario
DB_PASSWORD=senha
DB_DATABASE=nome_do_banco

### Frontend 
FRONT_END_HOST=http://localhost:3001
```


## Scripts Disponíveis
- `npm run build`: Compila o projeto usando o Nest
- `npm run format`: Formata o código usando Prettier
- `npm run start`: Inicia o servidor em modo normal
- `npm run start:dev`: Inicia o servidor em modo de desenvolvimento com hot-reload
- `npm run start:debug`: Inicia o servidor em modo de depuração
- `npm run start:prod`: Inicia o servidor em modo de produção
- `npm run lint`: Executa o ESLint para correção de código
- `npm run test`: Executa os testes unitários
- `npm run test:watch`: Executa os testes em modo observador
- `npm run test:cov`: Executa os testes com cobertura
- `npm run test:debug`: Executa os testes em modo de depuração
- `npm run test:e2e`: Executa os testes end-to-end

## Estrutura do Projeto 
```
src/
├── controllers/     # Controladores da aplicação
├── dto/             # Objetos de transferência de dados
├── entities/        # Entidades do banco de dados
├── modules/         # Módulos NestJS
├── providers/       # Provedores de serviços
├── middlewares/     # Middlewares personalizados
├── repositories/    # Repositórios para acesso a dados
├── services/        # Serviços de negócios
├── utils/           # Funções utilitárias
└── main.ts          # Ponto de entrada da aplicação
```

## Endpoints Principais

### Representantes
Método GET
→ Endpoint: /v1/vitrine/tv
→ Descrição: Lista todos os eventos internos ativos no momento, com o número de representantes >=2
→ Autenticação: Nível Administrativo

## Segurança
### Camadas de Proteção

- CORS: Restrito ao domínio do frontend

## Testes
- Cobertura garantida por:

- Testes unitários (Jest)

```bash
npm run test:cov  # Gera relatório de cobertura
```


## Diagramação - Vitrine

```mermaid
flowchart TD
    %% Defining some styles for nodes
    classDef frontend fill:#f9f,stroke:#333,stroke-width:2px;
    classDef backend fill:#cff,stroke:#333,stroke-width:2px;
    classDef cms fill:#cff,stroke:#333,stroke-width:2px;
    classDef db fill:#e2f5e2,stroke:#333,stroke-width:2px;
    classDef admin fill:#ffeb3b,stroke:#333,stroke-width:2px;
    classDef user fill:#ffcccc,stroke:#333,stroke-width:2px;

    %% Nodes with new styles
    A(["Vitrine Front-end"]):::frontend --> B{{Acessar eventos internos ou externos}}:::frontend
    B --> C["/vitrine/tv"]:::frontend
    B --> D["/vitrine/externo"]:::frontend
    C --> N1{{Possui token de segurança?}}:::frontend
    D --> N1
    N1 --> N2["Não"]:::user
    N1 --> N3["Sim"]:::user
    N2 --> N4["Redireciona para o /login"]:::frontend
    N3 --> N5["Realiza a chamada para o backend"]:::backend
    N6(["Requisição Back-end"]) --> N9["JWT"]:::backend
    N9 --> N10["API DE SEGURANÇA E AUTENTIFICAÇÃO"]:::backend
    N10 --> N11["Administrador"]:::admin
    N10 --> N12["Usuário não identificado ou não é Administrador"]:::user
    N11 --> N7(["v1/vitrine/tv"]):::backend
    N11 --> N8(["v1/vitrine/eventos-externos"]):::backend
    N8 --> N13[/"Banco de Dados"/]:::db
    N7 --> N13
    N15["CMS"]:::cms --> N14[/"Banco de dados"/]:::db
    N14 --> N16["Dados de Eventos Internos"]:::db
    N14 --> N18["Dados de Eventos Externos"]:::db
    N16 --> N17(["v1/vitrine/tv"]):::backend
    N18 --> N19(["v1/vitrine/eventos-externos"]):::backend
    N17 --> N20["Filtra eventos com 2 ou mais participantes"]:::backend
    N19 --> N21["Filtra ativos primeiro, depois os demais"]:::backend
    N20 --> N22["Devolve a resposta ao front-end"]:::frontend
    N21 --> N22

    %% Optional Subgraph for CMS and Backend to group them
    subgraph CMS & Backend
        direction LR
        N15 --> N14
        N9 --> N10
        N10 --> N11
        N10 --> N12
    end
```
