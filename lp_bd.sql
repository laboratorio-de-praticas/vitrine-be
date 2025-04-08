CREATE TYPE "UsuarioTipos" AS ENUM ('Admin', 'Atendente', 'Interno');
CREATE TYPE "UsuarioStatus" AS ENUM ('Pendente', 'Ativo', 'Desligado');
CREATE TYPE "RepresentanteSituacao" AS ENUM ('Pendente', 'Ativo', 'Desligado');
CREATE TYPE "EventoStatus" AS ENUM ('Ativo', 'Em_Preparo', 'Em_Contagem', 'Finalizado');
CREATE TYPE "EventoTipos" AS ENUM ('Externo', 'Interno');

CREATE TABLE "Usuarios" (
  id SERIAL PRIMARY KEY,
  nome TEXT,
  senha TEXT,
  email_institucional TEXT UNIQUE,
  tipo_usuario "UsuarioTipos" NOT NULL,
  status_usuario "UsuarioStatus" NOT NULL,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);

CREATE TABLE "Alunos" (
  id_aluno SERIAL PRIMARY KEY,
  fk_id_usuario INT UNIQUE NOT NULL REFERENCES "Usuarios"(id),
  foto_url TEXT,
  data_matricula TIMESTAMP,
  curso_semestre TEXT,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);

CREATE TABLE "Visitantes" (
  id_visitante SERIAL PRIMARY KEY,
  nome TEXT,
  telefone TEXT,
  chave_acesso CHAR(4),
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);

CREATE TABLE "Avaliadores" (
  id_avaliador SERIAL PRIMARY KEY,
  fk_id_usuario INT UNIQUE NOT NULL REFERENCES "Usuarios"(id),
  nome TEXT,
  telefone TEXT,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);

CREATE TABLE "Projetos" (
  id_projeto SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  descricao TEXT NOT NULL,
  qrcode TEXT,
  foto_url TEXT,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now(),
  fk_id_aluno INT NOT NULL REFERENCES "Alunos"(id_aluno)
);

CREATE TABLE "Categorias" (
  id_categoria SERIAL PRIMARY KEY,
  nome TEXT,
  descricao TEXT,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);

CREATE TABLE "CategoriasProjetos" (
  id SERIAL PRIMARY KEY,
  fk_id_projeto INT NOT NULL REFERENCES "Projetos"(id_projeto),
  fk_id_categoria INT NOT NULL REFERENCES "Categorias"(id_categoria),
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now(),
  UNIQUE(fk_id_projeto, fk_id_categoria)
);

CREATE TABLE "Eventos" (
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

CREATE TABLE "Representantes" (
  id_representante SERIAL PRIMARY KEY,
  fk_id_aluno INT UNIQUE NOT NULL REFERENCES "Alunos"(id_aluno),
  fk_id_evento INT NOT NULL REFERENCES "Eventos"(id_evento),
  qrcode TEXT,
  RepresentanteSituacao "RepresentanteSituacao" NOT NULL,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);

CREATE TABLE "VotosInternos" (
  id_voto SERIAL PRIMARY KEY,
  fk_id_evento INT NOT NULL REFERENCES "Eventos"(id_evento),
  fk_id_aluno INT NOT NULL REFERENCES "Alunos"(id_aluno), 
  fk_id_representante INT NOT NULL REFERENCES "Representantes"(id_representante),
  data_criacao TIMESTAMP DEFAULT now(),
  UNIQUE(fk_id_evento, fk_id_aluno)
);

CREATE TABLE "VotosExternos" (
  id_voto SERIAL PRIMARY KEY,
  fk_id_evento INT NOT NULL REFERENCES "Eventos"(id_evento),
  fk_id_projeto INT NOT NULL REFERENCES "Projetos"(id_projeto),
  fk_id_visitante INT REFERENCES "Visitantes"(id_visitante),
  fk_id_avaliador INT REFERENCES "Avaliadores"(id_avaliador),
  data_criacao TIMESTAMP DEFAULT now(),
  CONSTRAINT chk_autor_unico CHECK (
    (fk_id_visitante IS NOT NULL AND fk_id_avaliador IS NULL) OR
    (fk_id_visitante IS NULL AND fk_id_avaliador IS NOT NULL)
  ),
  UNIQUE(fk_id_evento, fk_id_visitante, fk_id_projeto),
  UNIQUE(fk_id_evento, fk_id_avaliador, fk_id_projeto)
);

CREATE TABLE "Avaliacoes" (
  id_avaliacao SERIAL PRIMARY KEY,
  fk_id_avaliador INT NOT NULL REFERENCES "Avaliadores"(id_avaliador),
  fk_id_projeto INT NOT NULL REFERENCES "Projetos"(id_projeto),
  estrelas_inovador INT NOT NULL,
  estrelas_acolhedor INT NOT NULL,
  comentario TEXT,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);