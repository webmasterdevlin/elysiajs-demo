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

### Update to latest npm

```bash
npm i -g npm@latest
```

### How to install bun globally

```bash
npm i -g bun@latest
```

### How to install pnpm globally

```bash
npm i -g @pnpm/exe@latest
```

### latest yarn inside a project

```bash
yarn set version stable
yarn i
```

### package manager benchmarking

```bash
hyperfine --prepare 'rm -rf node_modules' --warmup 1 --runs 10 'npm install' 'bun install' 'pnpm install' 'yarn install'
```
