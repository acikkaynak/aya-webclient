# AYA - Open Source Network Web
[![Discord](https://img.shields.io/discord/1072074800622739476?color=7289da&logo=discord&logoColor=white)](https://discord.gg/itdepremyardim)
![GitHub issues](https://img.shields.io/github/issues/acikkaynak/aya-website)

# 💻 Deploy locally
## 📦 Requirements
1. Make sure you have [Node.js](https://nodejs.org/en/) installed.
2. Make sure you have [Git](https://git-scm.com/) installed.
3. We use PNPM as package manager. Make sure you have [PNPM](https://pnpm.js.org/) installed.

## 🚀 Installation
1. Clone the repository with `git clone`.
2. Install the dependencies with `pnpm install`.
3. Run the project with `pnpm dev`.

You can now open your browser and go to http://localhost:3000 to connect to the application.

> **Note:** If you used AWS ECR in docker please login to your account with `aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/` command.

# 📝 License
This project is licensed. Please see [LICENSE](/LICENSE) file in our monorepo root.
