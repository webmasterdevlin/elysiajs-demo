### Benchmaring the bundlers

To do this, you have to install each bundler globally.

parcel
```zsh
npm install -g parcel
```
rollup
```zsh
npm install -g rollup
```
esbuild
```zsh
npm install -g esbuild
```
Bun
```zsh
npm install -g bun
```
rsbuild
```zsh
npm i -g @rsbuild/core
```
webpack
```zsh
npm install -g webpack-cli
```


```zsh
hyperfine --warmup 1 --runs 10 'parcel build main.js --dist-dir out' 'rollup main.js --file=out/main.js --plugins=terser --sourcemap --minifyInternalExports' 'esbuild main.js --bundle --outfile=out/main.js --sourcemap --minify' 'bun build main.js --outdir ./out --minify --sourcemap=external' 'rsbuild build --config=rsbuild.config.ts' 'webpack-cli build --config=webpack.config.js'
```