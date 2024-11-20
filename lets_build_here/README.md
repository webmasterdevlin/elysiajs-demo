### Benchmaring the bundlers

To do this, you have to install each bundler globally.

parcel

```zsh
npm i -g parcel@latest
```

rollup

```zsh
npm i -g rollup@latest
```

esbuild

```zsh
npm i -g esbuild@latest
```

Bun

```zsh
npm i -g bun@latest
```

rsbuild

```zsh
npm i -g @rsbuild/core@latest
```

webpack

```zsh
npm i -g webpack-cli@latest
```

NOTE: use node v23.0.0

```zsh
nvm use 23.0.0
```

```zsh
hyperfine --warmup 1 --runs 10 'parcel build main.js --dist-dir out' 'rollup main.js --file=out/main.js --plugins=terser --sourcemap --minifyInternalExports' 'esbuild main.js --bundle --outfile=out/main.js --sourcemap --minify' 'bun build main.js --outdir ./out --minify --sourcemap=external' 'rsbuild build --config=rsbuild.config.ts' 'webpack-cli build --config=webpack.config.js'
```
