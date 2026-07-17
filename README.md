# <p align="center"> <img src="./src/assets/img/logo.png" alt="RangoBox Logo" width="55" align="center" /> FitFood - Plataforma de Saúde & Nutrição Inteligente </p>

# <p align="center"><img src="https://i.pinimg.com/originals/2d/cc/8e/2dcc8eac3ca270e1cd0419457bead6fc.gif" alt="gif animado" align="center" /></p> 



---

## 🚀 Sobre o Projeto

O **FitFood** é um ecossistema completo focado em bem-estar e nutrição. O grande diferencial do sistema é unir a segurança de um back-end robusto com a inteligência de APIs externas para entregar dados nutricionais reais aos usuários. 

Com base nas informações físicas inseridas no cadastro, a plataforma calcula instantaneamente as necessidades calóricas diárias do usuário através de fórmulas validadas e oferece ferramentas dinâmicas de busca e tradução automática para catalogar o que é consumido.
> Uma aplicação full-stack moderna projetada para simplificar a jornada de alimentação saudável, oferecendo cálculo personalizado de calorias diárias, controle de IMC, busca de alimentos via API internacional e sugestão de receitas.

---

## 🌟 Funcionalidades Principais

*   **🔐 Autenticação de Usuários:** Cadastro estruturado e Login seguro integrados com Spring Security.
*   **📊 Perfil Nutricional Inteligente:** Cálculo da Taxa Metabólica Basal (TMB), cálculo de calorias necessárias ajustadas para o objetivo do usuário (emagrecimento, manutenção ou hipertrofia) e cálculo de IMC.
*   **🔍 Integração com API Edamam:** Busca detalhada e em tempo real por tabelas nutricionais e alimentos específicos.
*   **🌐 Integração com Google Translate API:** Tradução simultânea e automática para viabilizar as buscas nutricionais de forma transparente no idioma local.
*   **🍲 Carrossel de Receitas Saudáveis:** Um carrossel interativo na Home apresentando receitas nutritivas e práticas para inspirar o cotidiano.
*   **📱 Interface Responsiva & Moderna:** Design impecável, limpo e adaptável a qualquer tamanho de tela (desktop ou mobile).

---

## 🛠️ Stack Tecnológica

### Back-end
*   **Java 21** com **Spring Boot 3** (Java Web, JPA, Validation)
*   **Spring Security & JWT** (Controle de acessos e criptografia)
*   **MySQL** (Banco de dados relacional oficial)
*   **Swagger/OpenAPI** (Documentação interativa dos endpoints da API)
*   **Insomnia** (Utilizado no design e testes de rotas)

### Front-end
*   **React** com **TypeScript** (Garantia de segurança de tipos, componentes limpos e reutilizáveis)
*   **Tailwind CSS** (Estilização ágil baseada em classes utilitárias e responsividade)
*   **Axios** (Integração assíncrona com os endpoints)

---

## 📁 Arquitetura do Sistema

Para manter o projeto limpo, escalável e de fácil manutenção, a aplicação foi dividida seguindo as melhores práticas do mercado:

```text
fitfood-app/
├── src/
│   ├── assets/          # Recursos visuais (imagens, ícones e logotipo)
│   ├── components/      # Componentes reutilizáveis globais (Navbar, Footer, Carrossel)
│   ├── models/          # Interfaces TypeScript que modelam os dados (ex: Usuario)
│   ├── pages/           # Telas principais da aplicação (Home, Login, Cadastro, Perfil)
│   ├── services/        # Configuração do Axios e requisições para a API (Service.ts)
│   └── App.tsx          # Configurações de rotas e fluxo geral do sistema
```
---

## 🔌 Documentação & Deploy

### Back-end
A API do FitFood está documentada e hospedada de forma online:
*   **Link do Deploy da API:** `https://sistema-fit.onrender.com/`
*   **Link do Swagger:** `https://sistema-fit.onrender.com/swagger-ui/swagger-ui/index.html` **

### Front-end
O cliente pode interagir com o FitFood diretamente por aqui:
*   **Link do Deploy Web:** `fitfood-pnei.vercel.app`

---

## ⚙️ Como Rodar o Projeto Localmente

### Pré-requisitos
Antes de começar, certifique-se de possuir instalado em sua máquina:
*   **Node.js** (v18 ou superior)
*   **JDK 17** e **Maven**
*   **MySQL Server** operando localmente

### 1. Clonando o Repositório
```bash
git clone [https://github.com/seu-usuario/fitfood.git](https://github.com/seu-usuario/fitfood.git)
cd fitfood
```

### 2. Configurando o Back-end
Acesse o arquivo src/main/resources/application.properties do projeto Spring Boot.

Altere as credenciais de banco para corresponderem ao seu ambiente MySQL local:
```bash
spring.datasource.url=jdbc:mysql://localhost:3306/nome_do_seu_banco
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
```

### 3. Inicialize a aplicação executando o método principal no seu IDE ou via terminal:
```bash
mvn spring-boot:run
```
---
### Configurando o Front-end

### 1. Navegue até a pasta do cliente Web:
```bash
cd front-end-pasta-nome
```

### 2. Instale as dependências necessárias:
```bash
npm install
```

### 3. Execute o servidor de desenvolvimento local:
```bash
npm run dev
```

### 4. A aplicação estará ativa em http://localhost:5173.

---

## 👥 Integrantes do Grupo

*   [Dayane Santana](https://github.com/dayanesantana) - Desenvolvedora Full-Stack
*   [Giovanna Mendes](https://github.com/GimendescCodes) - Desenvolvedora Full-Stack
*   [Jhonatan Oliveira](https://github.com/jhonatanoliveira18) - Desenvolvedor Full-Stack
*   [Isabella Rodrigues](https://github.com/isa01rodrigues) - Desenvolvedora Full-Stack
*   [Jackeline Gomes](https://github.com/jackeline5458) - Desenvolvedora Full-Stack
*   [Rafael Scherer](https://github.com/rafaelscherer3) - Desenvolvedor Full-Stack
*   [Bianca Casagrande](https://github.com/bccasagrande) - Desenvolvedora Full-Stack

---
<p align="center">Desenvolvido com ❤️ pelo Grupo 06 no Projeto Integrador.</p>
