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
npm install -g npm@latest
```

### How to install bun globally
```bash
npm install -g @bun/cli
```

### How to install pnpm globally
```bash
npm install -g @pnpm/exe
```

### How to install yarn globally
```bash
npm install -g yarn
```

#### latest yarn inside a project
```bash
yarn set version stable
yarn install
```

### package manager benchmarking
```bash
hyperfine --prepare 'rm -rf node_modules' --warmup 1 --runs 10 'yarn install' 'bun install' 'pnpm install' 'npm install'
```