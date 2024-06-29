## Benchmark for jest, vitest, and bun test runners
- global vitest, jest, and bun are needed to be installed

vitest
```zsh
npm install -g vitest
```

jest
```zsh
npm install -g jest
```

bun
```zsh
npm install -g bun
```

#### To run the benchmark

```zsh
hyperfine --warmup 1 --runs 10 'vitest run apple' 'bun test banana' 'jest orange'
```
