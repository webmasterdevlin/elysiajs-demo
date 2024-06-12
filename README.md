# Elysia with Bun runtime

## Getting Started
To get started with this template, simply paste this command into your terminal:
```bash
bun create elysia ./elysia-example
```

## Development
To start the development server run:
```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.


### package manager benchmarking
```bash
hyperfine --prepare 'rm -rf node_modules' --warmup 1 --runs 3 'yarn install' 'bun install' 'pnpm install' 'npm install'
```