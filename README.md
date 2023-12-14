# yaranai_frontend

ここでの開発に使うコマンドをまとめておきます

- `npm run fmt`
  - formatを効かせるためのコマンド
  - これを効かせると他の人もコードが読みやすくなるね、やったね
- `npm run dev`
  - 手元環境で実行するためのコード
  - これを実行したあと、ブラウザで`localhost::5173`にアクセスするとその状態でのページが見られる
- `npm run build`
  - ビルドエラーが出ないかを手元で確認するためのコード
  - 変数の定義・参照などのミスを発見するのに使える
- `npm run api`
  - `openapi.yaml`に更新がかかった際に、それをフロントエンドに反映するためのコード
  - めったに使わない**はず**なので、そんなに使用頻度は高くない
- `npm list`
  - 導入しているライブラリ一覧が見られる

ここまで書いたけど、実はこのコマンドは全部`package.json`の上の方に書いてます
他のコマンドも確認したかったら見てみてね

---

ここから下は、テンプレのもの

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
