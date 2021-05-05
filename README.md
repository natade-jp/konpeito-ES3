# konpeito-ES3

[![ESDoc coverage badge](https://natade-jp.github.io/konpeito-ES3/badge.svg)](https://natade-jp.github.io/konpeito-ES3/)
![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)

## 概要

高機能数値計算ライブラリ [konpeito](https://github.com/natade-jp/konpeito) をベースに `WSH JScript` でも動作するように機能を絞って `ES3` で動作するようにしたライブラリです。

- Windows 上で動作する WSH JScript 用汎用ライブラリ
- Visual Studio Code で JScript での開発を目的とする
- 統計計算部分（`Complex`, `Matrix` 含む）が行える

`examples`の`Example.wsf`を実行してみれば、雰囲気はつかめるかと思います。
詳しい関数の説明は、[ヘルプファイル](https://natade-jp.github.io/SenkoWSH/)を参照。

## 注意

- 本ライブラリは、`Polyfill`系のコードを含んでいますが、全機能は含んでおりませんので注意してください。
各変数やメソッドは未定義の場合に設定されるようになっているため、自分のコードを使用したい場合は本ライブラリより先に`include`して下さい。
詳細は、`/src/polyfill` 配下のファイルを確認してください。

## フォルダ構成

- `build` - `JScirpt` で動作するライブラリ及び、Visual Studio Code 用の型定義ファイル
- `src` - コンパイル前のソースコードフォルダ
- `docs` - 自動生成したヘルプファイル
- `scripts` - `Node.js` で実行するスクリプトファイル（`package.json`の`scripts`を参照）

## 開発環境構築

1. プロジェクトフォルダ全体をダウンロードして、`package.json`があるディレクトリをカレントディレクトリとする
2. [Node.js / npm](https://nodejs.org/ja/) をインストールして`npm install`を実行する。
3. [Visual Studio Code](https://code.visualstudio.com/) をインストール
4. VSCode上で、拡張機能の [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) をインストール
5. `examples`の中身をいじって作りたいマクロを作る。

次のような操作が行えます。

- ビルドは、`npm run build`
- 型定義ファイル(`d.ts`)の作成は、`npm run dts`
- ヘルプファイルの作成は、`npm run doc`
- サンプルファイルの実行は、`npm run start` (`JScript`でサンプルファイルが実行される)

## konpeito について

[npm](https://www.npmjs.com/package/konpeito) で公開している高機能数値計算ライブラリ [konpeito](https://github.com/natade-jp/konpeito) です。本ライブラリ `konpeito-ES3` はここから `WSH JScript` 用に機能を絞ったものとなります。主に以下の点を変更しています。

- ES3で未対応の `get`, `set` を使用しない
- 予約語を用いたメソッド名をつけない（分散を表す `var` など）
- 作成したクラスを用いた `instanceof` を使用しない

## Author

- [natade-jp](https://github.com/natade-jp/)
