INSERT INTO "Eventos" (id_evento, nome_evento, tipo_evento, descricao_evento, status_evento, curso_semestre, data_alteracao, data_criacao, data_inicio, data_fim)
VALUES
(1, 'Representante de Classe', 'Interno', 'Evento para alunos DSM5', 'Ativo', 'DSM5', NOW(), NOW(), '2025-01-01', '2025-05-20'),
(2, 'Representante de Classe', 'Interno', 'Evento para alunos GE1', 'Ativo', 'GE1', NOW(), NOW(), '2025-01-01', '2025-05-20'),
(3, 'Fatec Hub', 'Externo', 'Evento Fatec Hub', 'Ativo', null , NOW(), NOW(), '2025-01-01', '2025-05-20'),
(4, 'Fatexpo', 'Externo', 'Evento Fatexpo', 'Em_Preparo', null , NOW(), NOW(), '2025-01-01', '2025-05-20'),
(5, 'Representante de Classe', 'Interno', 'Evento para alunos ADS', 'Ativo', 'ADS1', NOW(), NOW(), '2025-01-01', '2025-05-20');

SELECT * FROM "Eventos";

INSERT INTO "Usuarios" (id, nome, data_alteracao, data_criacao, senha, email_institucional, tipo_usuario, status_usuario)
VALUES
(1, 'Renato Hioji', NOW(), NOW(), '$2b$10$KRPrIGoPkM5RbtRrWdx.Au4frTROUrj9rdp6p8VPgLY2DG1mE72E.', 'renato_odake@fatec.sp.gov.br', 'Interno', 'Ativo'),
(2, 'Saulo de Freitas', NOW(), NOW(), '$2b$10$KRPrIGoPkM5RbtRrWdx.Au4frTROUrj9rdp6p8VPgLY2DG1mE72E.', 'saulo@fatec.sp.gov.br', 'Interno', 'Ativo'),
(3, 'Letícia Imasato', NOW(), NOW(), '$2b$10$KRPrIGoPkM5RbtRrWdx.Au4frTROUrj9rdp6p8VPgLY2DG1mE72E.', 'let_imasato@fatec.sp.gov.br', 'Interno', 'Ativo'),
(4, 'Gabriel Rodriguez', NOW(), NOW(), '$2b$10$KRPrIGoPkM5RbtRrWdx.Au4frTROUrj9rdp6p8VPgLY2DG1mE72E.', 'gabriel_rod@fatec.sp.gov.br', 'Interno', 'Ativo'),
(5, 'Administrador', NOW(), NOW(), '$2b$10$KRPrIGoPkM5RbtRrWdx.Au4frTROUrj9rdp6p8VPgLY2DG1mE72E.', 'admin@fatec.sp.gov.br', 'Admin', 'Ativo'),
(6, 'Júlia Vilar', NOW(), NOW(), '$2b$10$KRPrIGoPkM5RbtRrWdx.Au4frTROUrj9rdp6p8VPgLY2DG1mE72E.', 'julia_vilar@fatec.sp.gov.br', 'Interno', 'Ativo'),
(7, 'Otávio Luz', NOW(), NOW(), '$2b$10$KRPrIGoPkM5RbtRrWdx.Au4frTROUrj9rdp6p8VPgLY2DG1mE72E.', 'otavio_luz@fatec.sp.gov.br', 'Interno', 'Ativo'),
(8, 'Helena Costa', NOW(), NOW(), '$2b$10$KRPrIGoPkM5RbtRrWdx.Au4frTROUrj9rdp6p8VPgLY2DG1mE72E.', 'helena_costa@fatec.sp.gov.br', 'Interno', 'Ativo'),
(9, 'Heitor Amaral', NOW(), NOW(), '$2b$10$KRPrIGoPkM5RbtRrWdx.Au4frTROUrj9rdp6p8VPgLY2DG1mE72E.', 'heitor_amaral@fatec.sp.gov.br', 'Interno', 'Ativo'),
(10, 'Thales Ribeiro', NOW(), NOW(), '$2b$10$KRPrIGoPkM5RbtRrWdx.Au4frTROUrj9rdp6p8VPgLY2DG1mE72E.', 'thales_ribeiro@fatec.sp.gov.br', 'Interno', 'Ativo'),
(11, 'Vicente', NOW(), NOW(), '$2b$10$KRPrIGoPkM5RbtRrWdx.Au4frTROUrj9rdp6p8VPgLY2DG1mE72E.', 'vicente@fatec.sp.gov.br', 'Interno', 'Ativo'),
(12, 'Lara', NOW(), NOW(), '$2b$10$KRPrIGoPkM5RbtRrWdx.Au4frTROUrj9rdp6p8VPgLY2DG1mE72E.', 'lara@fatec.sp.gov.br', 'Interno', 'Ativo'),
(13, 'Arthur', NOW(), NOW(), '$2b$10$KRPrIGoPkM5RbtRrWdx.Au4frTROUrj9rdp6p8VPgLY2DG1mE72E.', 'arthur@fatec.sp.gov.br', 'Interno', 'Ativo');

INSERT INTO "Alunos" (id_aluno, foto_url, data_criacao, data_alteracao, data_matricula, curso_semestre, fk_id_usuario)
VALUES
(1, '/candi4.jpg', NOW(), NOW(), '2025-01-15', 'DSM5', 1),
(2, '/candi2.jpg', NOW(), NOW(), '2025-01-15', 'DSM5', 2),
(3, '/candi1.jpg', NOW(), NOW(), '2025-01-15', 'DSM5', 3),
(4, '/candi3.jpg', NOW(), NOW(), '2025-01-15', 'DSM5', 4),
(5, '/candi5.jpg', NOW(), NOW(), '2025-01-15', 'GE1', 6),
(6, '/candi6.jpg', NOW(), NOW(), '2025-01-15', 'GE1', 7),
(7, '/candi7.jpg', NOW(), NOW(), '2025-01-15', 'GE1', 8),
(8, '/candi8.jpg', NOW(), NOW(), '2025-01-15', 'ADS1', 9),
(9, '/candi9.jpg', NOW(), NOW(), '2025-01-15', 'ADS1', 10),
(10, '/candi10.jpg', NOW(), NOW(), '2025-01-15', 'ADS1', 11),
(11, '/candi11.jpg', NOW(), NOW(), '2025-01-15', 'ADS1', 12),
(12, '/candi12.jpg', NOW(), NOW(), '2025-01-15', 'GE1', 13);
INSERT INTO "Representantes" (id_representante, data_alteracao, data_criacao, representantesituacao, qrcode, fk_id_evento, fk_id_aluno)
VALUES
(1, NOW(), NOW(), 'Ativo', 'http://10.67.56.95:3000/votacao/interna/confirmacao/1/1', 1, 1),
(2, NOW(), NOW(), 'Ativo', 'http://10.67.56.95:3000/votacao/interna/confirmacao/2/1', 1, 2),
(3, NOW(), NOW(), 'Ativo', 'http://10.67.56.95:3000/votacao/interna/confirmacao/3/1', 1, 3),
(4, NOW(), NOW(), 'Ativo', 'http://10.67.56.95:3000/votacao/interna/confirmacao/4/1', 1, 4),
(5, NOW(), NOW(), 'Ativo', 'http://10.67.56.95:3000/votacao/interna/confirmacao/5/2', 2, 5),
(6, NOW(), NOW(), 'Ativo', 'http://10.67.56.95:3000/votacao/interna/confirmacao/6/2', 2, 6),
(7, NOW(), NOW(), 'Ativo', 'http://10.67.56.95:3000/votacao/interna/confirmacao/7/2', 2, 7),
(12, NOW(), NOW(), 'Ativo', 'http://10.67.56.95:3000/votacao/interna/confirmacao/12/2', 2, 12),
(8, NOW(), NOW(), 'Ativo', 'http://10.67.56.95:3000/votacao/interna/confirmacao/8/5', 5, 8),
(9, NOW(), NOW(), 'Ativo', 'http://10.67.56.95:3000/votacao/interna/confirmacao/9/5', 5, 9),
(10, NOW(), NOW(), 'Ativo', 'http://10.67.56.95:3000/votacao/interna/confirmacao/10/5', 5, 10),
(11, NOW(), NOW(), 'Ativo', 'http://10.67.56.95:3000/votacao/interna/confirmacao/11/5', 5, 11);



INSERT INTO "Categorias" (descricao) VALUES
('Comunicação'),
('Cultura'),
('Direitos humanos e justiça'),
('Educação'),
('Meio ambiente'),
('Saúde'),
('Tecnologia e Produção');

-- Inserir Linhas de Extensão
INSERT INTO "LinhaExtensao" (descricao) VALUES
('Alfabetização, leitura e escrita'),
('Artes cênicas'),
('Artes integradas'),
('Artes plásticas'),
('Artes visuais'),
('Comunicação estratégica'),
('Desenvolvimento de produtos'),
('Desenvolvimento regional'),
('Desenvolvimento rural e questão agrária'),
('Desenvolvimento tecnológico'),
('Desenvolvimento urbano'),
('Direitos individuais e coletivos'),
('Educação profissional'),
('Empreendedorismo'),
('Emprego e renda'),
('Endemias e epidemias'),
('Divulgação científica e tecnológica'),
('Esporte e lazer'),
('Estilismo'),
('Fármacos e medicamentos'),
('Formação de professores'),
('Gestão do trabalho'),
('Gestão informacional'),
('Gestão institucional'),
('Gestão pública'),
('Grupos sociais vulneráveis'),
('Infância e adolescência'),
('Inovação tecnológica'),
('Jornalismo'),
('Jovens e adultos'),
('Línguas Estrangeiras'),
('Metodologias e estratégias de ensino/aprendizagem'),
('Mídia-artes'),
('Mídias'),
('Música'),
('Organizações da sociedade civil e movimentos sociais e populares'),
('Patrimônio cultural, histórico e natural'),
('Pessoas com deficiências, incapacidades e necessidades especiais'),
('Propriedade intelectual e patente'),
('Questões ambientais'),
('Recursos hídricos'),
('Resíduos sólidos'),
('Saúde animal'),
('Saúde da família'),
('Saúde e proteção no trabalho'),
('Saúde humana'),
('Segurança alimentar e nutricional'),
('Segurança pública e defesa social'),
('Tecnologia da informação'),
('Terceira Idade'),
('Turismo'),
('Uso de drogas e dependência química'),
('Desenvolvimento humano');

-- Inserir ODS da Agenda 2030 da ONU
INSERT INTO "ODS" (descricao) VALUES
('ODS 1 - Erradicação da pobreza'),
('ODS 2 - Fome zero e agricultura sustentável'),
('ODS 3 - Saúde e bem-estar'),
('ODS 4 - Educação de qualidade'),
('ODS 5 - Igualdade de gênero'),
('ODS 6 - Água potável e saneamento'),
('ODS 7 - Energia limpa e acessível'),
('ODS 8 - Trabalho decente e crescimento econômico'),
('ODS 9 - Indústria, inovação e infraestrutura'),
('ODS 10 - Redução das desigualdades'),
('ODS 11 - Cidades e comunidades sustentáveis'),
('ODS 12 - Consumo e produção responsáveis'),
('ODS 13 - Ação contra a mudança global do clima'),
('ODS 14 - Vida na água'),
('ODS 15 - Vida terrestre'),
('ODS 16 - Paz, justiça e instituições eficazes'),
('ODS 17 - Parcerias e meios de implementação');

INSERT INTO "Projetos" (id_projeto, titulo, nome_equipe, descricao, foto_url, tlr, cea, turma, ativo)
VALUES
(1, 'Projeto Sustentabilidade', 'Equipe Verde', 'Projeto voltado para práticas sustentáveis.', '/projeto1.jpg', 10, 20, 'DSM5', true),
(2, 'Projeto Tecnologia', 'Equipe Tech', 'Projeto para desenvolvimento de soluções tecnológicas.', '/projeto2.jpg', 15, 25, 'DSM5', true);

INSERT INTO "ProjetosEventos" (qrcode, fk_id_evento, fk_id_projeto)
VALUES
('http://10.67.56.95:3000/votacao/externa/confirmacao/1/3', 3, 1),
('http://10.67.56.95:3000/votacao/externa/confirmacao/2/3', 3, 2),
('http://10.67.56.95:3000/votacao/externa/confirmacao/1/4', 4, 1);