#!/bin/bash

set -e

case "$1" in
  dev|development)
    echo "Starting in development mode..."
    docker compose --env-file .env.development up --build app
    ;;
  test)
    echo "Running tests in test mode..."
    docker compose --env-file .env.test --profile test up --build --abort-on-container-exit test
    ;;
  prod|production)
    echo "Starting in production mode..."
    docker compose --env-file .env.production --profile production up --build production
    ;;
  *)
    echo "Usage: $0 {dev|test|prod}"
    exit 1
    ;;
esac
