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