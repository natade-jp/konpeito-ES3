# History

## v1.2.0

### 変更点
- デバッグ用のコードが入っていたのを削除
- `konpeito` から信号処理を移植

## v1.1.0

### 変更点
- ES3 向けへの修正漏れにより一部の計算が正しくできない問題を修正
- 試験用プログラムを追加
- `konpeito` から重回帰分析と主成分分析を移植

## v1.0.0

### 新規作成
- [konpeito](https://github.com/natade-jp/konpeito) ver6.0.1 をベースに `WSH JScript` でも動作するように `ES3` 向けに抽出
- 抽出対象は、統計計算部分（`Complex`, `Matrix` 含む）のみ
