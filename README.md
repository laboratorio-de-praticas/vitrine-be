# Laboratório de Práticas: _Vitrine - Backend_

## Descrição
API desenvolvida com o framework Nest.js que visa gerenciar requisições HTTP com o objetivo de APRESENTAR estudantes que estão concorrendo à presidência de suas respectivas classes. Através de QR codes únicos cada eleitor é encaminhado para a página de votação correspondente ao candidato escolhido, garantindo transparência e acessibilidade durante o processo eleitoral da Fatec. Integra o _Sistema de Votação para a Faculdade_.

## Requisitos do Sistema
- Node.js: v22.x (recomendado com base nas dependências)
- npm: v10.x (recomendado)
- NestJS: v11.0.0 (@nestjs/cli v11.0.0)
- reflect-metadata (v0.2.2): Biblioteca para suporte a metadados e decoradores
- rxjs (v7.8.1): Biblioteca para programação reativa

## Bibliotecas Utilizadas
- **@nestjs/common (v11.0.1)**: Framework principal do NestJS que fornece decoradores, filtros, pipes e outras funcionalidades essenciais
- **@nestjs/config (v4.0.1)**: Módulo de configuração para gerenciamento de variáveis de ambiente
- **@nestjs/core (v11.0.1)**: Núcleo do framework NestJS
- **@nestjs/platform-express (v11.0.1)**: Adaptador para o framework Express
- **reflect-metadata (v0.2.2)**: Biblioteca para suporte a metadados e decoradores
- **rxjs (v7.8.1)**: Biblioteca para programação reativa

## Ferramentas de Desenvolvimento

- **TypeScript (v5.7.3)**: Linguagem que adiciona tipagem estática ao JavaScript, melhorando a segurança e a manutenção do código
- **Jest (v29.7.0)**: Framework de testes JavaScript com foco em simplicidade e suporte para testes - unitários e de integração
- **Prettier (v3.4.2)**: Formatador de código opinativo que garante consistência no estilo de código em todo o projeto
- **ESLint (v9.18.0)**: Ferramenta de análise estática para identificar padrões problemáticos no código TypeScript

## Configuração do Ambiente

### Instalação
1. Clone o repositório:
```bash
git clone https://github.com/laboratorio-de-praticas/vitrine-be.git
cd vitrine-be
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações locais
```

### Execução
Para iniciar o servidor em modo de desenvolvimento:
```bash
npm run start:dev
# ou
yarn start:dev
```

O servidor estará rodando em `http://localhost:3000`

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

## Estrutura do Projeto (placeholder)
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

## API Endpoints
[EM DESENVOLVIMENTO]

## Licença
MIT License

Copyright (c) 2025 Projeto Vitrine

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
