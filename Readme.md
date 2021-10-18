# DicioBot, o seu robô dicionário

### Contatos e redes sociais:
<div style="display: inline_block">
  <a href="mailto:wesleyara.contato@gmail.com"><img alt="Wesley-GMAIL" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
  <a href="https://www.linkedin.com/in/wesley-gomes-de-araújo-534a66221/"><img alt="Wesley-LINKE" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
  <a href="https://www.instagram.com/wesleyaraujo_w/"><img alt="Wesley-INSTA" src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a> 
</div>

### Linguagens:
<div style="display: inline_block;">
  <img align="center" alt="Wesley-JS" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
  <img align="center" alt="Wesley-PUPPE" src="https://img.shields.io/badge/Puppeteer-40B5A4?style=for-the-badge&logo=Puppeteer&logoColor=white">
  <img align="center" alt="Wesley-NODE" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
</div>

## Motivação
Com desejo de praticar a utilização da automação de tarefas e scraping veio a criação do DicioBot, uma ferramenta Back end que possibilita a verificação de forma rápida dos significados das palavras.

## O que ele faz?
Esse bot utiliza da biblioteca Puppeteer (Veja: https://github.com/puppeteer/puppeteer) para acessar um site a partir de um navegador, fazendo uso também do Node.js para utilização do JavaScript fora do navegador. Com base nisso eu o utilizei em cima da mesma ideia de outro repositório, só que agora para a busca de palavras no dicionário.
<div style="display: inline_block"><br>
<img width="40" heigth="30" alt="Wesley_JS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /> 

<img width="40" heigth="30" alt="Wesley_NODE" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
<div>

## Instalação:
Ao copiar o repositório, tem que ir no terminal do VS Code com a pasta aberta e digitar os seguintes comandos para realizar a instalação:

`npm install puppeteer`

`npm install readline-sync`

## Como usar?
No terminal digite (node index.js), ele vai executar o primeiro console.log e depois vai lhe perguntar que palavra deseja pesquisar, basta digitar e ele fará todo o resto.

## Limitações e possiveis upgrades:
Atualmente estou tendo problemas com a pesquisa que contém acentuação, pois URL de sites não identificam ou fazem diferença no uso de acentuação, como na palavra matemática. E também tem casos onde existem palavras em que a única diferença é uma acentuação, como "influencia" e "influência" onde a limitação ocorre pois a URL se altera. Tudo isso pode ser resolvido, porém no presente momento não sei ao certo como fazer.
