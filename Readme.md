
# DIA 5

Finialização do projeto, Publicação no Google Cloud: configuração de API e Integração com o Gemini

torna a pasta acessavel:
- app.use(express.static("uploads"));

Exemplo de acesso: 
- http://localhost:3000/uploads/${id}.png

Uso da api do gemini para gerar descrições para as imagens:
- instalação da dependência:
    npm i @google/generative-ai

- criação de uma pasta service com um aquivo chamado geminiService, que fico responsável em usar a api do gemini para gerar descrições
para as imagens 

ou seja agora a estrutura de pastas do projeto projeto será:

┣ 📂 node_modules: (Gerar Descrição)

📂 src 
┣ 📂 config: Configurações do projeto, como a conexão com o banco de dados. 
┣ 📂 controllers: Funções que lidam com a lógica de negócio. 
┣ 📂 models: Interação com o banco de dados. 
┣ 📂 routes: Configuração das rotas da API.
┣ 📂 service: Serviços/APIs utilizadas

📂 uploads: imagens guardadas no servidor

- .gitignore
- package-lock.json
- package.json
- server.js


Medidas de segurança como CROSS-ORIGIN RESOUCE SHARING (CORS) ou seja, medida de segurança para o compartilhamento de origem cruzada
    - Garante que apenas o meu servidor tera acesso as rotas e requisições oferecidas

baixar a biblioteca do cors
    - npm i cors


linkamos o projeto ao front-end:
    - Abrimos a pasta do projeto em uma janela separada
    - No terminal do front end fazer a instalação do projeto: npm i
    - criamos um arquivo .env que conterá a url de acesso de api feita no back-end



Preparamos ela para subi-la para a google cloud
  - baixou se a biblioteca dotenv no back-end (para garantir que a cloud acesse as variaveis de ambiente)
  - npm intall dotenv
  - importou a biblioteca no postModel: import 'dotenv/config';
  - criou-se um arquivo service.sh na raiz do projeto