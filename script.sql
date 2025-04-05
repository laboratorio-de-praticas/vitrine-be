INSERT INTO Eventos (id_evento, nome_evento, tipo_evento, descricao_evento, status_evento, curso_semestre, data_alteracao, data_criacao, data_inicio, data_fim)
VALUES
(1, 'Evento DSM1', 'Interno', 'Evento para alunos DSM1', 'Ativo', 'DSM1', NOW(), NOW(), '2025-05-01', '2025-05-02'),
(2, 'Evento DSM2', 'Interno', 'Evento para alunos DSM2', 'Ativo', 'DSM2', NOW(), NOW(), '2025-06-01', '2025-06-02'),
(3, 'Evento DSM3', 'Interno', 'Evento para alunos DSM3', 'Ativo', 'DSM3', NOW(), NOW(), '2025-07-01', '2025-07-02'),
(4, 'Evento GE1', 'Interno', 'Evento para alunos GE1', 'Ativo', 'GE1', NOW(), NOW(), '2025-08-01', '2025-08-02'),
(5, 'Evento ADS1', 'Interno', 'Evento para alunos ADS1', 'Ativo', 'ADS1', NOW(), NOW(), '2025-09-01', '2025-09-02');

INSERT INTO Usuarios (id, nome, data_alteracao, data_criacao, senha, email_institucional, tipo_usuario, status_usuario)
VALUES
(1, 'Aluno 1 DSM1', NOW(), NOW(), 'senha1', 'a1@fatec.sp.gov.br', 'Interno', 'Ativo'),
(2, 'Aluno 2 DSM1', NOW(), NOW(), 'senha2', 'a2@fatec.sp.gov.br', 'Interno', 'Ativo'),
(3, 'Aluno 3 DSM1', NOW(), NOW(), 'senha3', 'a3@fatec.sp.gov.br', 'Interno', 'Ativo'),
(4, 'Aluno 4 DSM1', NOW(), NOW(), 'senha4', 'a4@fatec.sp.gov.br', 'Interno', 'Ativo'),
(5, 'Aluno 5 DSM2', NOW(), NOW(), 'senha5', 'a5@fatec.sp.gov.br', 'Interno', 'Ativo'),
(6, 'Aluno 6 DSM2', NOW(), NOW(), 'senha6', 'a6@fatec.sp.gov.br', 'Interno', 'Ativo'),
(7, 'Aluno 7 DSM2', NOW(), NOW(), 'senha7', 'a7@fatec.sp.gov.br', 'Interno', 'Ativo'),
(8, 'Aluno 8 DSM3', NOW(), NOW(), 'senha8', 'a8@fatec.sp.gov.br', 'Interno', 'Ativo'),
(9, 'Aluno 9 DSM3', NOW(), NOW(), 'senha9', 'a9@fatec.sp.gov.br', 'Interno', 'Ativo'),
(10, 'Aluno 10 GE1', NOW(), NOW(), 'senha10', 'a10@fatec.sp.gov.br', 'Interno', 'Ativo');

INSERT INTO Alunos (id_aluno, foto_url, data_criacao, data_alteracao, data_ingresso, curso_semestre, id_usuario)
VALUES
(1, '/candi4.jpg', NOW(), NOW(), '2025-01-15', 'DSM1', 1),
(2, '/candi2.jpg', NOW(), NOW(), '2025-01-15', 'DSM1', 2),
(3, '/candi1.jpg', NOW(), NOW(), '2025-01-15', 'DSM1', 3),
(4, '/candi3.jpg', NOW(), NOW(), '2025-01-15', 'DSM1', 4),
(5, '/candi3.jpg', NOW(), NOW(), '2025-01-15', 'DSM2', 5),
(6, '/candi2.jpg', NOW(), NOW(), '2025-01-15', 'DSM2', 6),
(7, '/candi1.jpg', NOW(), NOW(), '2025-01-15', 'DSM2', 7),
(8, '/candi1.jpg', NOW(), NOW(), '2025-01-15', 'DSM3', 8),
(9, '/candi4.jpg', NOW(), NOW(), '2025-01-15', 'DSM3', 9),
(10, '/candi3.jpg', NOW(), NOW(), '2025-01-15', 'GE1', 10);

INSERT INTO Candidato (id, data_alteracao, data_criacao, situacao_candidato, qrcode, id_evento, id_aluno, id_projeto)
VALUES
(1, NOW(), NOW(), 'Ativo', 'http://localhost:3000/votacao/interna', 1, 1, NULL),
(2, NOW(), NOW(), 'Ativo', 'http://localhost:3000/votacao/interna', 1, 2, NULL),
(3, NOW(), NOW(), 'Ativo', 'http://localhost:3000/votacao/interna', 1, 3, NULL),
(4, NOW(), NOW(), 'Ativo', 'http://localhost:3000/votacao/interna', 1, 4, NULL),
(5, NOW(), NOW(), 'Ativo', 'http://localhost:3000/votacao/interna', 2, 5, NULL),
(6, NOW(), NOW(), 'Ativo', 'http://localhost:3000/votacao/interna', 2, 6, NULL),
(7, NOW(), NOW(), 'Ativo', 'http://localhost:3000/votacao/interna', 2, 7, NULL),
(8, NOW(), NOW(), 'Ativo', 'http://localhost:3000/votacao/interna', 3, 8, NULL),
(9, NOW(), NOW(), 'Ativo', 'http://localhost:3000/votacao/interna', 3, 9, NULL),
(10, NOW(), NOW(), 'Ativo', 'http://localhost:3000/votacao/interna', 4, 10, NULL);