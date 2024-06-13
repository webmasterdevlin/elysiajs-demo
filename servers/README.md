## The ab (Apache Bench) command is a tool for benchmarking your HTTP server.

#### To run
```zsh
hyperfine --runs 1 'zsh ./node_server.sh' 'zsh deno_server.sh' 'zsh ./bun_server.sh'
```