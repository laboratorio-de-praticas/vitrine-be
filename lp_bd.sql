CREATE TYPE "UsuarioTipos" AS ENUM ('Admin', 'Atendente', 'Interno');
CREATE TYPE "UsuarioStatus" AS ENUM ('Pendente', 'Ativo', 'Desligado');
CREATE TYPE "RepresentanteSituacao" AS ENUM ('Pendente', 'Ativo', 'Desligado');
CREATE TYPE "EventoStatus" AS ENUM ('Ativo', 'Em_Preparo', 'Em_Contagem', 'Finalizado');
CREATE TYPE "EventoTipos" AS ENUM ('Externo', 'Interno');

CREATE TABLE "Usuario" (
  id SERIAL PRIMARY KEY,
  nome TEXT,
  senha TEXT,
  email_institucional TEXT UNIQUE,
  tipo_usuario "UsuarioTipos" NOT NULL,
  status_usuario "UsuarioStatus" NOT NULL,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);

CREATE TABLE "Aluno" (
  id_aluno SERIAL PRIMARY KEY,
  fk_id_usuario INT UNIQUE NOT NULL REFERENCES "Usuario"(id),
  foto_url TEXT,
  data_matricula TIMESTAMP,
  curso_semestre TEXT,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);

CREATE TABLE "Visitante" (
  id_visitante SERIAL PRIMARY KEY,
  nome TEXT,
  telefone TEXT,
  chave_acesso CHAR(4),
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);

CREATE TABLE "Avaliador" (
  id_avaliador SERIAL PRIMARY KEY,
  fk_id_usuario INT UNIQUE NOT NULL REFERENCES "Usuario"(id),
  nome TEXT,
  telefone TEXT,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);

CREATE TABLE "Projeto" (
  id_projeto SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  descricao TEXT NOT NULL,
  qrcode TEXT,
  foto_url TEXT,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now(),
  fk_id_aluno INT NOT NULL REFERENCES "Aluno"(id_aluno)
);

CREATE TABLE "Categoria" (
  id_categoria SERIAL PRIMARY KEY,
  nome TEXT,
  descricao TEXT,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);

CREATE TABLE "CategoriasProjetos" (
  id SERIAL PRIMARY KEY,
  fk_id_projeto INT NOT NULL REFERENCES "Projeto"(id_projeto),
  fk_id_categoria INT NOT NULL REFERENCES "Categoria"(id_categoria),
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now(),
  UNIQUE(fk_id_projeto, fk_id_categoria)
);

CREATE TABLE "Evento" (
  id_evento SERIAL PRIMARY KEY,
  tipo_evento "EventoTipos" NOT NULL,
  nome_evento TEXT,
  descricao_evento TEXT,
  status_evento "EventoStatus" NOT NULL,
  curso_semestre TEXT,
  data_inicio TIMESTAMP,
  data_fim TIMESTAMP,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);

CREATE TABLE "Representante" (
  id_representante SERIAL PRIMARY KEY,
  fk_id_aluno INT UNIQUE NOT NULL REFERENCES "Aluno"(id_aluno),
  fk_id_evento INT NOT NULL REFERENCES "Evento"(id_evento),
  qrcode TEXT,
  RepresentanteSituacao "RepresentanteSituacao" NOT NULL,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);

CREATE TABLE "VotosInterno" (
  id_voto SERIAL PRIMARY KEY,
  fk_id_evento INT NOT NULL REFERENCES "Evento"(id_evento),
  fk_id_aluno INT NOT NULL REFERENCES "Aluno"(id_aluno), 
  fk_id_representante INT NOT NULL REFERENCES "Representante"(id_representante),
  data_criacao TIMESTAMP DEFAULT now(),
  UNIQUE(fk_id_evento, fk_id_aluno)
);

CREATE TABLE "VotosExterno" (
  id_voto SERIAL PRIMARY KEY,
  fk_id_evento INT NOT NULL REFERENCES "Evento"(id_evento),
  fk_id_projeto INT NOT NULL REFERENCES "Projeto"(id_projeto),
  fk_id_visitante INT REFERENCES "Visitante"(id_visitante),
  fk_id_avaliador INT REFERENCES "Avaliador"(id_avaliador),
  data_criacao TIMESTAMP DEFAULT now(),
  CONSTRAINT chk_autor_unico CHECK (
    (fk_id_visitante IS NOT NULL AND fk_id_avaliador IS NULL) OR
    (fk_id_visitante IS NULL AND fk_id_avaliador IS NOT NULL)
  ),
  UNIQUE(fk_id_evento, fk_id_visitante, fk_id_projeto),
  UNIQUE(fk_id_evento, fk_id_avaliador, fk_id_projeto)
);

CREATE TABLE "Avaliacao" (
  id_avaliacao SERIAL PRIMARY KEY,
  fk_id_avaliador INT NOT NULL REFERENCES "Avaliador"(id_avaliador),
  fk_id_projeto INT NOT NULL REFERENCES "Projeto"(id_projeto),
  estrelas_inovador INT NOT NULL,
  estrelas_acolhedor INT NOT NULL,
  comentario TEXT,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);


INSERT INTO "Evento" (id_evento, nome_evento, tipo_evento, descricao_evento, status_evento, curso_semestre, data_alteracao, data_criacao, data_inicio, data_fim)
VALUES
(1, 'Representante de Classe', 'Interno', 'Evento para alunos DSM5', 'Ativo', 'DSM5', NOW(), NOW(), '2025-11-04', '2025-12-04'),
(2, 'Representante de Classe', 'Interno', 'Evento para alunos GE1', 'Ativo', 'GE1', NOW(), NOW(), '2025-11-04', '2025-12-04'),
(3, 'FATEC HUB', 'Externo', 'Evento da Fatec Hub', 'Ativo', null, NOW(), NOW(), '2025-11-04', '2025-12-04');

INSERT INTO "Usuario" (id, nome, data_alteracao, data_criacao, senha, email_institucional, tipo_usuario, status_usuario)
VALUES
(1, 'Renato Hioji', NOW(), NOW(), '$2b$10$KRPrIGoPkM5RbtRrWdx.Au4frTROUrj9rdp6p8VPgLY2DG1mE72E.', 'renato_odake@fatec.sp.gov.br', 'Interno', 'Ativo'),
(2, 'Saulo de Freitas', NOW(), NOW(), '$2b$10$KRPrIGoPkM5RbtRrWdx.Au4frTROUrj9rdp6p8VPgLY2DG1mE72E.', 'saulo@fatec.sp.gov.br', 'Interno', 'Ativo'),
(3, 'Letícia Imasato', NOW(), NOW(), '$2b$10$KRPrIGoPkM5RbtRrWdx.Au4frTROUrj9rdp6p8VPgLY2DG1mE72E.', 'let_imasato@fatec.sp.gov.br', 'Interno', 'Ativo'),
(4, 'Gabriel Rodriguez', NOW(), NOW(), '$2b$10$KRPrIGoPkM5RbtRrWdx.Au4frTROUrj9rdp6p8VPgLY2DG1mE72E.', 'gabriel_rod@fatec.sp.gov.br', 'Interno', 'Ativo'),
(5, 'Administrador', NOW(), NOW(), '$2b$10$KRPrIGoPkM5RbtRrWdx.Au4frTROUrj9rdp6p8VPgLY2DG1mE72E.', 'admin@fatec.sp.gov.br', 'Admin', 'Ativo');;

INSERT INTO "Aluno" (id_aluno, foto_url, data_criacao, data_alteracao, data_matricula, curso_semestre, fk_id_usuario)
VALUES
(1, '/candi4.jpg', NOW(), NOW(), '2025-01-15', 'DSM5', 1),
(2, '/candi2.jpg', NOW(), NOW(), '2025-01-15', 'DSM5', 2),
(3, '/candi1.jpg', NOW(), NOW(), '2025-01-15', 'DSM5', 3),
(4, '/candi3.jpg', NOW(), NOW(), '2025-01-15', 'DSM5', 4);

INSERT INTO "Representante" (id_representante, data_alteracao, data_criacao, representantesituacao, qrcode, fk_id_evento, fk_id_aluno)
VALUES
(1, NOW(), NOW(), 'Ativo', 'http://3.82.243.65:3000/votacao/interna/confirmacao/1/1', 1, 1),
(2, NOW(), NOW(), 'Ativo', 'http://3.82.243.65:3000/votacao/interna/confirmacao/2/1', 1, 2),
(3, NOW(), NOW(), 'Ativo', 'http://3.82.243.65:3000/votacao/interna/confirmacao/3/1', 1, 3),
(4, NOW(), NOW(), 'Ativo', 'http://3.82.243.65:3000/votacao/interna/confirmacao/4/1', 1, 4);

INSERT INTO "Projeto" (id_projeto, fk_id_aluno, titulo, descricao, qrcode, foto_url) VALUES 
(1, 2, 'Tagarela', 'Projeto para auxílio de crianças com espectro autista.', 'http://3.82.243.65:3000/votacao/publica/confirmacao/avaliador/classificacao/id_projeto/id_evento/1/1', './sunside.png'),
(2, 1,'EcoVision', 'Projeto para auxílio nos cuidados de plantas ornamentais.', 'http://3.82.243.65:3000/votacao/publica/confirmacao/convidado/id_projeto/id_evento/2/1', './ecovision.png');

INSERT INTO "Visitante" VALUES (1, 'Renato Odake', '13123451234', '1234', NOW(), NOW());

INSERT INTO "Avaliador" VALUES(1, 5, 'Hioji Okamoto', '13123451234', NOW(), NOW());