INSERT INTO "Eventos" (id_evento, nome_evento, tipo_evento, descricao_evento, status_evento, curso_semestre, data_alteracao, data_criacao, data_inicio, data_fim)
VALUES
(1, 'Representante de Classe', 'Interno', 'Evento para alunos DSM5', 'Ativo', 'DSM5', NOW(), NOW(), '2025-05-01', '2025-05-02'),
(2, 'Representante de Classe', 'Interno', 'Evento para alunos GE1', 'Ativo', 'GE1', NOW(), NOW(), '2025-08-01', '2025-08-02'),
(3, 'FATEC HUB', 'Externo', 'Evento da Fatec Hub', 'Ativo', null, NOW(), NOW(), '2025-08-01', '2025-08-02');

INSERT INTO "Usuarios" (id, nome, data_alteracao, data_criacao, senha, email_institucional, tipo_usuario, status_usuario)
VALUES
(1, 'Renato Hioji', NOW(), NOW(), '$2b$10$KRPrIGoPkM5RbtRrWdx.Au4frTROUrj9rdp6p8VPgLY2DG1mE72E.', 'renato_odake@fatec.sp.gov.br', 'Interno', 'Ativo'),
(2, 'Saulo de Freitas', NOW(), NOW(), '$2b$10$KRPrIGoPkM5RbtRrWdx.Au4frTROUrj9rdp6p8VPgLY2DG1mE72E.', 'saulo@fatec.sp.gov.br', 'Interno', 'Ativo'),
(3, 'Letícia Imasato', NOW(), NOW(), '$2b$10$KRPrIGoPkM5RbtRrWdx.Au4frTROUrj9rdp6p8VPgLY2DG1mE72E.', 'let_imasato@fatec.sp.gov.br', 'Interno', 'Ativo'),
(4, 'Gabriel Rodriguez', NOW(), NOW(), '$2b$10$KRPrIGoPkM5RbtRrWdx.Au4frTROUrj9rdp6p8VPgLY2DG1mE72E.', 'gabriel_rod@fatec.sp.gov.br', 'Interno', 'Ativo'),
(5, 'Administrador', NOW(), NOW(), '$2b$10$KRPrIGoPkM5RbtRrWdx.Au4frTROUrj9rdp6p8VPgLY2DG1mE72E.', 'admin@fatec.sp.gov.br', 'Admin', 'Ativo');;

INSERT INTO "Alunos" (id_aluno, foto_url, data_criacao, data_alteracao, data_matricula, curso_semestre, fk_id_usuario)
VALUES
(1, '/candi4.jpg', NOW(), NOW(), '2025-01-15', 'DSM5', 1),
(2, '/candi2.jpg', NOW(), NOW(), '2025-01-15', 'DSM5', 2),
(3, '/candi1.jpg', NOW(), NOW(), '2025-01-15', 'DSM5', 3),
(4, '/candi3.jpg', NOW(), NOW(), '2025-01-15', 'DSM5', 4);

INSERT INTO "Representantes" (id_representante, data_alteracao, data_criacao, representantesituacao, qrcode, fk_id_evento, fk_id_aluno)
VALUES
(1, NOW(), NOW(), 'Ativo', 'http://10.67.56.95:3000/votacao/interna/confirmacao/1/1', 1, 1),
(2, NOW(), NOW(), 'Ativo', 'http://10.67.56.95:3000/votacao/interna/confirmacao/2/1', 1, 2),
(3, NOW(), NOW(), 'Ativo', 'http://10.67.56.95:3000/votacao/interna/confirmacao/3/1', 1, 3),
(4, NOW(), NOW(), 'Ativo', 'http://10.67.56.95:3000/votacao/interna/confirmacao/4/1', 1, 4);

INSERT INTO "Projetos" (id_projeto, fk_id_aluno, titulo, descricao, qrcode, foto_url) VALUES 
(1, 2, 'Tagarela', 'Projeto para auxílio de crianças com espectro autista.', 'http://10.67.56.95:3000/votacao/publica/confirmacao/avaliador/classificacao/id_projeto/id_evento/1/1', './sunside.png'),
(2, 1,'EcoVision', 'Projeto para auxílio nos cuidados de plantas ornamentais.', 'http://10.67.56.95:3000/votacao/publica/confirmacao/convidado/id_projeto/id_evento/2/1', './ecovision.png');

INSERT INTO "Visitantes" VALUES (1, 'Renato Odake', '13123451234', '1234', NOW(), NOW());

INSERT INTO "Avaliadores" VALUES(1, 5, 'Hioji Okamoto', '13123451234', NOW(), NOW());
