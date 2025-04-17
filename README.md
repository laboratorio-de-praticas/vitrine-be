Para o funcionamento com o POSTGRES SQL se fazem necessários estes comandos, eu não sei onde e de que maneira posso inseri-los, mas por desencargo de consciência documentei os básicos para fazer o docker compose rodar com o env no postgres.


# Construa a imagem e suba o container (em background)
docker-compose up -d --build

# Verifique se o container está rodando
docker-compose ps

# Acesse o banco no client do postgresql
docker-compose exec db psql -U ${db_user} -d ${db_name}

# Parar e manter os dados
docker-compose down