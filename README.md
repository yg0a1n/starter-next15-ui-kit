# Next.js 15 Starter UI kit

## 🚀 What's Included

- **Next.js 15**
- **React 19**
- **TypeScript 5**
- **ESLint 9**
- **Prettier 3**
- **Tailwind CSS 4**
- **Shadcn UI**
- **App Directory**
- **System, Light & Dark Mode**
- **Next.js Bundle Analyzer**
- **Dockerfile** with Node.js 22.16.0 (Alpine)
- **Dockerfile.bun** with Bun 1.2.15 (Alpine)

### 🛠️ ESLint Plugins

- [**@eslint/js**](https://www.npmjs.com/package/@eslint/js)
- [**typescript-eslint**](https://github.com/typescript-eslint/typescript-eslint)
- [**eslint-plugin-react**](https://github.com/jsx-eslint/eslint-plugin-react)
- [**@next/eslint-plugin-next**](https://github.com/vercel/next.js)
- [**eslint-config-prettier**](eslint-config-prettier)
- [**eslint-plugin-tailwindcss**](https://github.com/francoismassart/eslint-plugin-tailwindcss)
- [**eslint-plugin-import**](https://github.com/import-js/eslint-plugin-import)
- [**eslint-plugin-promise**](https://github.com/eslint-community/eslint-plugin-promise)

### ✨ Prettier Plugins

- [**@trivago/prettier-plugin-sort-imports**](https://github.com/trivago/prettier-plugin-sort-imports)
- [**prettier-plugin-tailwindcss**](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

## 🏁 Getting Started

### Prerequisites

- **pnpm**: This project uses pnpm as the package manager. You can find installation instructions [here](https://pnpm.io/installation).
- **Node.js**: Version 20.18.0 or higher
- **Docker**: For containerized deployment (optional but recommended)

> **Note**
> This project uses `pnpm` for package management. The `pnpm-lock.yaml` file requires you to use `pnpm` to install dependencies and run scripts to ensure consistency.

### Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yg0a1n/starter-next15-ui-kit.git
    cd starter-next15-ui-kit
    ```
    To get the code without example change branch to without-example
    ```bash
    git checkout without-example
    ```

2. **Install Dependencies**:
    ```bash
    pnpm install
    ```

3. **Run Development Server**:
    ```bash
    pnpm dev
    ```

4. **Build for Production**:
    ```bash
    pnpm build
    ```

### 📦 Development Container

This project includes a development container configuration that allows you to develop in a consistent, isolated environment.

1.  **Prerequisites**:
    *   [Visual Studio Code](https://code.visualstudio.com/)
    *   [Docker Desktop](https://www.docker.com/products/docker-desktop/)
    *   [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) VS Code extension.

2.  **Getting Started**:
    *   Clone this repository to your local machine.
    *   Open the repository in Visual Studio Code.
    *   If you are not prompted, click on the color button in the bottom left corner of the VS Code window and select "Reopen in Container". This will build the container image and start the development container.
    *   Once the container is running, VS Code will prompt you to open the application in a web browser.

> **Note**
> The development container is configured to use a pre-built image from Microsoft, which is the recommended approach for development. Both the `Dockerfile` and `Dockerfile.bun` are optimized for production builds and are not suitable for development.
>
> ⚠️ This project was developed and tested primarily on macOS (Mac Pro). Some commands or configurations may require adjustments on other systems (Linux, Windows).

###  Docker Setup

To use Docker, make sure Docker is installed on your machine. Then, build and run the Docker container:

> **Note**
> If you modify your .env file, you must re-run the above export command in your terminal to update the environment variables for your current session.

```bash
export $(grep -v '^#' .env | xargs)

docker build --progress=plain $(grep -v '^#' .env | xargs -I{} echo --build-arg {}) -t starter-nextjs15-ui-kit -f Dockerfile .

# or if using Bun

docker build $(grep -v '^#' .env | xargs -I{} echo --build-arg {}) -t starter-nextjs15-ui-kit -f Dockerfile.bun .

docker run -p 3000:3000 starter-nextjs15-ui-kit
```

###  Docker Cleanup

If you need to remove the Docker container and image, you can use the following commands.

First, find the container ID:

```bash
docker ps -a --filter "ancestor=starter-nextjs15-ui-kit"
```

Then, stop and remove the container using its ID:

```bash
docker rm <container_id>
```

Finally, remove the Docker image:

```bash
docker rmi starter-nextjs15-ui-kit
```

### 🚀 CI/CD

This project includes a GitHub Actions workflow to automatically build and push a Docker image to Docker Hub.

**Workflow:** `.github/docker-publish.yml`

This workflow is triggered on every push to the `main` branch. It builds the Docker image using `Dockerfile.bun` and pushes it to Docker Hub with two tags: `latest` and the Git commit SHA.

**GitHub Actions: Secrets & Variables Setup**

To enable CI/CD, configure the following in your GitHub repository:

**Settings > Secrets and variables > Actions > Secrets > Repository secrets**
- `DOCKERHUB_USERNAME`: Your Docker Hub username
- `DOCKERHUB_PASSWORD`: Your Docker Hub password or access token
- `FLY_API_TOKEN`: Your Fly.io API token

**Settings > Secrets and variables > Actions > Variables > Repository variables**
- `DOCKERHUB_REPO`: Your Docker Hub repository (e.g., `your-username`)
- `DOCKERHUB_IMG`: The image name (e.g., `nextjs-starter`)
- `NEXT_PUBLIC_APP_URL`: The public URL of your app (e.g., `https://your-app.fly.dev`)
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`: Your Google Analytics ID (e.g., `G-XXXXXXX`)

Once everything is set, choose your cloud host. For Fly.io, follow the steps below:

### Fly.io App Setup & Check

1. Log in to Fly.io using the Fly CLI:
   ```bash
   fly auth login
   ```
2. **Create the app** (if it already exists, Fly.io will show a non-blocking error):
   ```bash
   fly apps create starter-next15-ui-kit
   ```
3. **List all apps to verify presence:**
   ```bash
   fly apps list
   ```

Once your app is ready, commit and push your repository to trigger the CI/CD pipeline.

- After deployment, visit your app via the Fly.io dashboard or directly at your assigned Fly.io URL.

### 🚀 Deploying on Vercel

Deploying this project on [Vercel](https://vercel.com/) is super easy and free for most use cases:

1. Create an account on [vercel.com](https://vercel.com/).
2. Click "New Project" and connect your GitHub repo.
3. Keep the default settings (Next.js is auto-detected).
4. Click "Deploy". That's it!

#### ⚡️ Vercel vs Paid VM

- **Free visual hosting**:
  For personal projects, portfolios, MVPs, side-projects, for testing, showcasing, iterating.
  You get a public domain, preview URLs, SSL, analytics, etc. for free. You only pay if you exceed the generous free limits, and everything is managed (build, CDN, SSL, preview, rollback, logs...)
- **Paid VM**: 
  You have to manage everything (domain, SSL, monitoring, backups, security, scaling, etc.) and pay every month, even if your project gets no traffic. Only useful if you have specific needs (custom infra, heavy backend, root access, etc.)

> **In short:**
> For 99% of projects, start on Vercel. Switch to a paid VM only if you need something Vercel can't do or if you want full control over the infrastructure.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

> **Note: Who is this Docker architecture (Next.js + Hono in one image) for?**
>
> **🧑‍💻 Fullstack Indie/Freelance Dev**
> One image to build, deploy, monitor → simplicity and speed
>
> **🏢 Small product team / startup**
> Less infra, unified deployment, cost-efficient
>
> **🧪 Beta project / proof of concept**
> Fast deployment, no multi-service complexity
>
> **🛠️ Minimalist DevOps**
> One image = one service → less orchestration
>
> **🌐 Multi-tenant apps or PWA without heavy backend**
> Hono handles lightweight API + Next handles frontend = fast, smooth combo
>
> **🚀 Edge-ready projects but not 100% CDN-compatible**
> Need cookies/session or server-side auth
>
> **📦 In summary:**
> This architecture is for those who want a smart monolith:
> - Develop fast
> - Deploy simply
> - Control the whole cycle (from routing to headers)

Once your Docker image is built, you can deploy it to any cloud provider (VPS, VM, or container service) of your choice for easy and portable production hosting.
