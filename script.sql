
INSERT INTO Usuarios (nome, data_alteracao, data_criacao, senha, email_institucional, tipo_usuario, status_usuario)
VALUES
('John Doe', NOW(), NOW(), 'hashed_password_example', 'john.doe@instituicao.com', 1, 1),
('Jane Smith', NOW(), NOW(), 'another_hashed_password', 'jane.smith@instituicao.com', 2, 2),
('Alice Brown', NOW(), NOW(), 'third_hashed_password', 'alice.brown@instituicao.com', 3, 1);

INSERT INTO alunos (foto_url, data_criacao, data_alteracao, data_ingresso, curso_semestre, id_usuario)
VALUES
('https://example.com/photos/john_doe.jpg', NOW(), NOW(), '2025-01-15', 'DSM1', 1),
('https://example.com/photos/jane_smith.jpg', NOW(), NOW(), '2025-02-20', 'DSM2', 2),
('https://example.com/photos/alice_brown.jpg', NOW(), NOW(), '2025-03-10', 'DSM3', 3);


INSERT INTO Eventos (nome, tipo_evento, descricao, status_evento, curso_semestre, data_alteracao, data_criacao, data_inicio, data_fim)
VALUES
('Evento A', 'Interno', 'Descrição do Evento A', 'Ativo', 'DSM1', NOW(), NOW(), '2025-05-01', '2025-05-02'),
('Evento B', 'Externo', 'Descrição do Evento B', 'Inativo', 'DSM2', NOW(), NOW(), '2025-06-01', '2025-06-02'),
('Evento C', 'Interno', 'Descrição do Evento C', 'Ativo', 'DSM3', NOW(), NOW(), '2025-07-01', '2025-07-02');

INSERT INTO Visitantes (nome_social, data_nascimento, celular, chave_acesso)
VALUES
('João Silva', '1985-07-15', '11987654321', '1234'),
('Maria Oliveira', '1990-03-25', '21987654321', '5678'),
('Carlos Souza', '2000-11-10', '31987654321', '4321');

INSERT INTO Participantes (nome_social, data_alteracao, data_criacao, situacao_votante, avaliador, id_evento, id_aluno)
VALUES
('Carlos Silva', NOW(), NOW(), 'Votante', true, 1, 1),
('Ana Pereira', NOW(), NOW(), 'Não Votante', false, 2, 2),
('Lucas Oliveira', NOW(), NOW(), 'Votante', true, 3, 3);

INSERT INTO Participantes (nome_social, data_alteracao, data_criacao, situacao_votante, avaliador, id_evento, id_visitante)
VALUES
('João Silva', NOW(), NOW(), 'Votante', true, 1, 1),
('Maria Santos', NOW(), NOW(), 'Não Votante', false, 2, 2),
('Pedro Costa', NOW(), NOW(), 'Votante', true, 3, 3);


INSERT INTO Candidato (nome, data_alteracao, data_criacao, situacao_candidato, qrcode, id_evento, id_aluno, id_projeto)
VALUES
('Carlos Silva', NOW(), NOW(), 'Candidato Ativo', 'qrcode-1', 1, 1, NULL),
('Ana Pereira', NOW(), NOW(), 'Candidato Inativo', 'qrcode-2', 2, 2, NULL),
('Lucas Oliveira', NOW(), NOW(), 'Candidato Ativo', 'qrcode-3', 3, 3, NULL);

INSERT INTO Candidato (nome, data_alteracao, data_criacao, situacao_candidato, qrCode, id_evento, id_aluno, id_projeto)
VALUES
('João Silva', NOW(), NOW(), 'Candidato Ativo', 'qrcode-4', 1, NULL, 1), 
('Maria Santos', NOW(), NOW(), 'Candidato Inativo', 'qrcode-5', 2, NULL, 2), 
('Pedro Costa', NOW(), NOW(), 'Candidato Ativo', 'qrcode-6', 3, NULL, 3); 

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

