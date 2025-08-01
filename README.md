# Learn Docker with Bun

This project demonstrates a modern development workflow using [Bun](https://bun.sh/) as the runtime, with Docker multi-stage builds and Docker Compose for environment management. It supports development, testing, and production environments with isolated configuration and repeatable builds.

## Features

- **Bun** as the JavaScript runtime and package manager
- **Multi-stage Dockerfile** for efficient builds and environment separation
- **Docker Compose** for orchestrating dev, test, and production environments
- **Environment variable management** via `.env` files
- **Automated testing** inside containers
- **Hot-reloading** in development with volume mounts

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Bun](https://bun.sh/) (for local non-container usage)

### Local Development

To install dependencies:

```sh
bun install
```

To run locally:

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
/src         # Application source code
/test        # Test files
Dockerfile   # Multi-stage build file
compose.yml  # Docker Compose configuration
docker-env.sh# Environment switcher script
.env.*       # Environment variable files
```

### Explanation

This setup ensures:

- Consistent environments across development, testing, and production
- Fast local iteration with Bun and Docker volumes
- Secure production images (test code not included)
- Easy switching between environments with a single script

## License

MIT

## Author

Khoirul
