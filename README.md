# Projeto Ping com Node.js

Este projeto implementa um servidor básico em Node.js que responde a requisições de "ping". Ele pode ser utilizado para verificar a disponibilidade de um servidor ou monitorar a latência de respostas HTTP.

## Funcionalidades

- Servidor HTTP simples.
- Responde a requisições com um "pong".
- Fácil de personalizar e expandir.

## Requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior).

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seuusuario/projeto-ping.git
   cd projeto-ping
   ```

2. Instale as dependências (se necessário):

   ```bash
   npm install
   ```

> Nota: Este projeto não possui dependências externas por padrão.

## Uso

1. Inicie o servidor:

   ```bash
   node server.js
   ```

2. Acesse o servidor no navegador ou usando ferramentas como `curl`:

   ```bash
   curl http://localhost:3000/ping
   ```

   Resposta esperada:
   ```
   pong
   ```

## Estrutura do Projeto

```
projeto-ping/
├── server.js   # Ficheiro principal do servidor
├── index.js    # Ficheiro principal para requisitar a API e colocar no front-end
├── README.md   # Documentação do projeto

## Personalização

- **Porta do Servidor:** Altere a variável `PORT` no arquivo `server.js`.
- **Rotas Adicionais:** Adicione novas condições no manipulador de requisições para suportar mais funcionalidades.

---

Feito com ❤️ e Node.js.
