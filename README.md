# Learn Docker with Bun

A starter template for developing, testing, and deploying Bun-based Node.js applications using Docker multi-stage builds and Docker Compose, with support for environment-specific configuration, automated containerized testing, and CI/CD integration.

## Features

- **Bun** as the JavaScript runtime and package manager
- **Multi-stage Dockerfile** for efficient builds and environment separation
- **Docker Compose** for orchestrating dev, test, and production environments
- **Environment variable management** via `.env` files
- **Automated testing** inside containers
- **Hot-reloading** in development with volume mounts
- **CI/CD with GitHub Actions**: build, test, and push versioned images to Docker Hub
- **Conventional commits, linting, and release automation** with Husky, Commitlint, Biome, and commit-and-tag-version

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Bun](https://bun.sh/) (for local non-container usage)
- [Node.js](https://nodejs.org/) (for tooling like Husky, Commitlint, Biome)

### Local Development

Install dependencies:

```sh
bun install
```

Run locally:

```sh
bun run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Using Docker Compose

#### Development

```sh
./docker-env.sh dev
```

- Uses `.env.development`
- Hot-reloads with volume mounts

#### Testing

```sh
./docker-env.sh test
```

- Uses `.env.test`
- Runs tests inside a container and exits

#### Production

```sh
./docker-env.sh prod
```

- Uses `.env.production`
- Runs the production build

### Environment Variables

- Place environment-specific variables in `.env.development`, `.env.test`, and `.env.production`
- Example:
  ```
  NODE_ENV=development
  ```

### Project Structure

```
/src             # Application source code
/test            # Test files
Dockerfile       # Multi-stage build file
compose.yml      # Docker Compose configuration
docker-env.sh    # Environment switcher script
.env.*           # Environment variable files
.github/         # GitHub Actions workflows
biome.json       # Biome linter config
commitlint.config.js # Commitlint config
```

### CI/CD

- **GitHub Actions** workflow in `.github/workflows/docker-bun-ci.yml`:
  - Runs tests on every push/PR to `dev` and `main`
  - On push to `main`, builds and tags Docker image with both `latest` and the version from `package.json`, then pushes to Docker Hub

### Linting, Commit, and Release

- **Biome**: Lint and format code (`npm run lint`, `npm run format`)
- **Husky**: Git hooks for linting and commit message checks
- **Commitlint**: Enforces conventional commit messages
- **commit-and-tag-version**: Automated version bumping and tagging

### How to Release

1. Commit your changes using conventional commits.
2. Run:
   ```sh
   npm run release
   ```
   This will bump the version, tag, and prepare for Docker image tagging in CI.

## License

MIT

## Author

Khoirul
