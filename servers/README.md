## The ab (Apache Bench) command is a tool for benchmarking your HTTP server.

#### To run
```zsh
hyperfine --warmup 1 --runs 1 'zsh ./node_benchmark.sh' 'zsh deno_benchmark.sh' 'zsh ./bun_benchmark.sh'
```