INSERT INTO Projetos (id_projeto, titulo, descricao, data_criacao, data_alteracao)
VALUES
(1, 'Projeto Alpha', 'Descrição do Projeto Alpha', NOW(), NOW()),
(2, 'Projeto Beta', 'Descrição do Projeto Beta', NOW(), NOW()),
(3, 'Projeto Gamma', 'Descrição do Projeto Gamma', NOW(), NOW());


INSERT INTO Usuarios (id, nome, data_alteracao, data_criacao, senha, email_institucional, tipo_usuario, status_usuario)
VALUES
(1, 'John Doe', NOW(), NOW(), 'hashed_password_example', 'john.doe@instituicao.com', 'Admin', 'Ativo'),
(2, 'Jane Smith', NOW(), NOW(), 'another_hashed_password', 'jane.smith@instituicao.com', 'Atendente', 'Ativo'),
(3, 'Alice Brown', NOW(), NOW(), 'third_hashed_password', 'alice.brown@instituicao.com', 'Atendente', 'Pendente');

INSERT INTO Alunos (id_aluno, foto_url, data_criacao, data_alteracao, data_ingresso, curso_semestre, id_usuario)
VALUES
(1, 'https://example.com/photos/john_doe.jpg', NOW(), NOW(), '2025-01-15', 'DSM1', 1),
(2, 'https://example.com/photos/jane_smith.jpg', NOW(), NOW(), '2025-02-20', 'DSM2', 2),
(3, 'https://example.com/photos/alice_brown.jpg', NOW(), NOW(), '2025-03-10', 'DSM3', 3);

INSERT INTO Eventos (id_evento, nome_evento, tipo_evento, descricao_evento, status_evento, curso_semestre, data_alteracao, data_criacao, data_inicio, data_fim)
VALUES
(1, 'Evento A', 'Interno', 'Descrição do Evento A', 'Ativo', 'DSM1', NOW(), NOW(), '2025-05-01', '2025-05-02'),
(2, 'Evento B', 'Externo', 'Descrição do Evento B', 'Em_Preparo', 'DSM2', NOW(), NOW(), '2025-06-01', '2025-06-02'),
(3, 'Evento C', 'Interno', 'Descrição do Evento C', 'Ativo', 'DSM3', NOW(), NOW(), '2025-07-01', '2025-07-02');

INSERT INTO Visitantes (id_visitante, nome_social, data_nascimento, celular, chave_acesso)
VALUES
(1, 'João Silva', '1985-07-15', '11987654321', '1234'),
(2, 'Maria Oliveira', '1990-03-25', '21987654321', '5678'),
(3, 'Carlos Souza', '2000-11-10', '31987654321', '4321');

INSERT INTO Participantes (id_participante, avaliador, id_evento, id_aluno)
VALUES
(1, true, 1, 1),
(2, false, 2, 2),
(3, true, 3, 3);

INSERT INTO Participantes (id_participante, avaliador, id_evento, id_visitante)
VALUES
(4, true, 1, 1),
(5, false, 2, 2),
(6, true, 3, 3);

INSERT INTO Candidato (id, data_alteracao, data_criacao, situacao_candidato, qrcode, id_evento, id_aluno, id_projeto)
VALUES
(1, NOW(), NOW(), 'Ativo', 'qrcode-1', 1, 1, NULL),
(2, NOW(), NOW(), 'Pendente', 'qrcode-2', 2, 2, NULL),
(3, NOW(), NOW(), 'Ativo', 'qrcode-3', 3, 3, NULL);

INSERT INTO Candidato (id, data_alteracao, data_criacao, situacao_candidato, qrcode, id_evento, id_aluno, id_projeto)
VALUES
(4, NOW(), NOW(), 'Ativo', 'qrcode-4', 1, NULL, 1), 
(5, NOW(), NOW(), 'Pendente', 'qrcode-5', 2, NULL, 2), 
(6, NOW(), NOW(), 'Ativo', 'qrcode-6', 3, NULL, 3); 



INSERT INTO Votos (id_evento, id_participante, id_candidato)
VALUES
(1, 1, 1),
(1, 2, 2),
(1, 3, 3),
(2, 1, 2),
(2, 2, 3),
(2, 3, 1),
(3, 1, 3),
(3, 2, 1),
(3, 3, 2),
(1, 1, 2);
