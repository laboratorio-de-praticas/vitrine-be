CREATE TYPE "UsuarioTipos" AS ENUM ('Admin', 'Atendente', 'Professor', 'Interno');
CREATE TYPE "UsuarioStatus" AS ENUM ('Pendente', 'Ativo', 'Desligado');
CREATE TYPE "RepresentanteSituacao" AS ENUM ('Pendente', 'Ativo', 'Desligado');
CREATE TYPE "EventoStatus" AS ENUM ('Ativo', 'Em_Preparo', 'Em_Contagem', 'Finalizado');
CREATE TYPE "EventoTipos" AS ENUM ('Externo', 'Interno');

--- Retirada do Not Null no telefone, "ativo" mudou para "status_usuario"
CREATE TABLE "Usuarios" (
  id SERIAL PRIMARY KEY,
  nome TEXT,
  senha TEXT,
  telefone TEXT,
  email_institucional TEXT UNIQUE,
  tipo_usuario "UsuarioTipos" NOT NULL,
  status_usuario "UsuarioStatus" NOT NULL,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);



--- nome_projeto foi mudado para titulo
--- TLR, CEA, Turma foram adicionados.
--- Imagem capa foi renomeada para foto_url
CREATE TABLE "Projetos" (
  id_projeto SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  nome_equipe TEXT NOT NULL,
  descricao TEXT NOT NULL,
  foto_url TEXT,
  tlr INTEGER NOT NULL, 
  cea INTEGER NOT NULL,
  turma TEXT NOT NULL,
  ativo BOOLEAN DEFAULT TRUE,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);

--- Tabela de Alunos
--- Peço a revisão na necessidade do campo "Deseja ser candidato" com a inserção de eventos e o campo "RA", visto que não teremos controle algum sobre esse campo.
CREATE TABLE "Alunos" (
  id_aluno SERIAL PRIMARY KEY,
  fk_id_usuario INT UNIQUE NOT NULL REFERENCES "Usuarios"(id),
  foto_url TEXT,
  deseja_ser_candidato BOOLEAN,
  curso_semestre TEXT,
  ra INTEGER UNIQUE,
  data_matricula TIMESTAMP,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);


CREATE TABLE "ImagensProjeto" (
    id_imagem SERIAL PRIMARY KEY,
    projeto_id INTEGER NOT NULL,
    imagem_url TEXT NOT NULL,
    FOREIGN KEY (projeto_id) REFERENCES "Projetos"(id_projeto)
);

-- Tabela IntegrantesEquipe
CREATE TABLE IntegrantesEquipe (
    id_integrante SERIAL PRIMARY KEY,
    projeto_id INTEGER NOT NULL,
    aluno_id INTEGER NOT NULL,
    FOREIGN KEY (projeto_id) REFERENCES "Projetos"(id_projeto),
    FOREIGN KEY (aluno_id) REFERENCES "Alunos"(id_aluno)
);


CREATE TABLE "ODS" (
    id_ods SERIAL PRIMARY KEY,
    descricao TEXT NOT NULL
);

CREATE TABLE "ProjetoODS" (
    projeto_id INTEGER NOT NULL,
    ods_id INTEGER NOT NULL,
    PRIMARY KEY (projeto_id, ods_id),
    FOREIGN KEY (projeto_id) REFERENCES "Projetos"(id_projeto),
    FOREIGN KEY (ods_id) REFERENCES "ODS"(id_ods)
);

CREATE TABLE "LinhaExtensao" (
    id_linha SERIAL PRIMARY KEY,
    descricao TEXT NOT NULL
);

CREATE TABLE "ProjetoLinhaExtensao" (
    projeto_id INTEGER NOT NULL,
    linha_extensao_id INTEGER NOT NULL,
    PRIMARY KEY (projeto_id, linha_extensao_id),
    FOREIGN KEY (projeto_id) REFERENCES "Projetos"(id_projeto),
    FOREIGN KEY (linha_extensao_id) REFERENCES "LinhaExtensao"(id_linha)
);

--- Antiga tabela de Area Temática
CREATE TABLE "Categorias" (
  id_categoria SERIAL PRIMARY KEY,
  nome TEXT,
  descricao TEXT,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);

--- Antiga tablea de ProjetoAreaTematica
CREATE TABLE "CategoriasProjetos" (
  id SERIAL PRIMARY KEY,
  fk_id_projeto INT NOT NULL REFERENCES "Projetos"(id_projeto),
  fk_id_categoria INT NOT NULL REFERENCES "Categorias"(id_categoria),
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now(),
  UNIQUE(fk_id_projeto, fk_id_categoria)
);

--- Removida senha,cidade e ativo
CREATE TABLE "Visitantes" (
  id_visitante SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  telefone TEXT NOT NULL,
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

CREATE TABLE "Eventos" (
  id_evento SERIAL PRIMARY KEY,
  tipo_evento "EventoTipos" NOT NULL,
  nome_evento TEXT,
  descricao_evento TEXT,
  status_evento "EventoStatus" NOT NULL,
  curso_semestre TEXT,
  ano_semestre TEXT,
  data_inicio TIMESTAMP,
  data_fim TIMESTAMP,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);

CREATE TABLE "ProjetosEventos" (
  id_projetos_eventos SERIAL PRIMARY KEY,
  fk_id_projeto INT NOT NULL REFERENCES "Projetos"(id_projeto),
  fk_id_evento INT NOT NULL REFERENCES "Eventos"(id_evento),
  qrcode TEXT
);

CREATE TABLE "Representantes" (
  id_representante SERIAL PRIMARY KEY,
  descricao_campanha TEXT,
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

CREATE TABLE "APIs"(
  id_api SERIAL PRIMARY KEY,
  nome_api TEXT,
  data_criacao TIMESTAMP DEFAULT NOW(),
  data_alteracao TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "Endpoints"(
  id_endpoint SERIAL PRIMARY KEY,
  fk_id_api INT NOT NULL,
  url_endpoint TEXT NOT NULL,
  data_criacao TIMESTAMP DEFAULT NOW(),
  data_alteracao TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (id_endpoint) REFERENCES "APIs"(id_api)
  );

CREATE INDEX IF NOT EXISTS idx_usuario_email ON "Usuarios"(email_institucional);
CREATE INDEX IF NOT EXISTS idx_representante_usuario ON "Representantes"(fk_id_aluno);
CREATE INDEX IF NOT EXISTS idx_projeto_turma ON "Projetos"(turma);
CREATE INDEX IF NOT EXISTS idx_imagens_projeto ON "ImagensProjeto"(projeto_id);