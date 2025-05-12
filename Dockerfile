# Escolhe a imagem base do Ubuntu
FROM ubuntu:latest

# Evita prompts interativos
ENV DEBIAN_FRONTEND=noninteractive

# Atualiza e instala o Node.js + npm + outras dependências
RUN apt-get update && \
    apt-get install -y curl gnupg && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean

# Cria diretório da aplicação
WORKDIR /app

# Copia os arquivos do projeto
COPY . .

# Instala as dependências do projeto
RUN npm install

# Compila o projeto (opcional, dependendo se for para produção ou dev)
# RUN npm run build

# Expõe a porta desejada (5176 no seu caso)
EXPOSE 5173

# Comando para rodar o servidor Vite
CMD ["npm", "run", "dev", "--", "--port", "5176", "--host"]
