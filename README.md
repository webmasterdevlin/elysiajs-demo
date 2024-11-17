# Elysia with Bun runtime

## Getting Started


Install hyperfine for different OS
- https://github.com/sharkdp/hyperfine

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
- see https://yarnpkg.com/migration/guide
- Yarn v4 is a bit complicated to set up because you need to enable corepack which removes pnpm from the global installed dependencies.
- You can install include yarn in the benchmarking test but it will the classic yarn and not the latest yarn v4.
- to learn more about corepack, go to this link. https://nodejs.org/api/corepack.html
- You cana use latest pnpm and yarn without installing them using corepack.

```bash
corepack enable
```

```bash
yarn config set initScope myScope
yarn install
```

### package manager benchmarking

```bash
hyperfine --prepare 'rm -rf node_modules' --warmup 1 --runs 1 'npm install' 'bun install' 'pnpm install' 'yarn install'
```
