## The ab (Apache Bench) command is a tool for benchmarking your HTTP server.

To do this, you need to have nodejs, deno, and bun installed on your machine.

Nodejs installation
- https://nodejs.org

Deno installation
- https://docs.deno.com/runtime/manual/getting_started/installation

Bun installation
- https://bun.sh/docs/installation

#### To run
```zsh
hyperfine --runs 1 'zsh ./node_server.sh' 'zsh ./deno_server.sh' 'zsh ./bun_server.sh'
```