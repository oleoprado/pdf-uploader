<!-- # :construction: README em construção ! :construction: -->
<div align="center" display="flex" style="padding: 20px 0;">
<img src="frontend/public/desktop.png" />

</div>
<div align="center">
<h1 style="padding-bottom: 20px;">PDF Uploader</h1>


<!-- BADGES W/ LINK (see https://shields.io/)-->
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) &nbsp; ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) &nbsp; ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) &nbsp; ![Ant-Design](https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white) &nbsp; ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) &nbsp; ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) &nbsp; ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi) &nbsp; ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
</div>

<hr>
<!-- DESCRIPTION -->

<p style="padding: 10px 0;">
Este é um projeto que permite o upload de arquivos PDF e o armazenamento dos dados da tabela contida no PDF em um banco de dados. Além disso, o sistema possui uma interface web que permite fazer filtros e busca nos textos da tabela.
</p>

<hr>

## 📋 Funcionalidades

* Upload de arquivos PDF para o sistema
* Extração dos dados da tabela contida no PDF
* Armazenamento dos dados em um banco de dados
* Interface web para visualização dos dados
* Busca e filtros nos textos da tabela

<hr>

<!-- INSTALLATION AND USAGE -->

## ⚙️ Instalação e Uso

* Você precisa ter o [node](https://nodejs.org/en/download/) instalado em seu computador para executar este projeto. Este projeto foi criado usando a versão `v16.15.1.`

* Você precisa ter o [docker](https://www.docker.com/products/docker-desktop/) e o [docker compose cli](https://www.docker.com/products/docker-desktop/) instalados em seu computador para executar este projeto. Este projeto foi criado usando as versões `v20.10` e `v1.29` respectivas.

* Você precisa ter o [python](https://www.python.org/downloads/) instalado em seu computador para executar este projeto. Este projeto foi criado usando a versão `v3.11.3`

* Você precisa ter o [Java runtime](https://www.python.org/downloads/) para rodar o pacote `tabula-py`. Este projeto foi criado usando a versão `v1.8.0_371`

<hr>
Para executar esta aplicação, você precisa fazer o clone para seu computador:

```bash
git clone git@github.com:oleoprado/trybe-futebol-clube-backend.git
```

Entre no diretório:

```bash
cd trybe-futebol-clube-backend
```

Instalar as depedências:

```bash
npm install
```

Rodar o script para subir o container:

```bash
npm run compose:up
```

Rodar o script para descer o container:

```bash
npm run compose:down
```

A aplicação estará acessível:

```bash
Front-end: https://localhost:3000
Back-end: https://localhost:3001
```

Para rodar os testes de integração das camadas:

```bash
npm run test
```


<!-- CONTACT -->

## ✉️ Contato

[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/oleoprado/) ![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)


<!-- LICENSE -->

## 📝 Licença

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
