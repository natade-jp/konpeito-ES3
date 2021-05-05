const File = require("./File.js");

// npx jsdoc -c "./scripts/.dts.json" -r "./src/"
try {
	File.exec("npx jsdoc -c \"./scripts/.dts.json\" -r \"./src/\" -d \"./tmp/\"");
}
catch (error) {
	// {typeof XXX} という型で不正エラーが発生するが、
	// d.ts作成が目的のため影響がないと思われる。
}

// 自動生成したdtsファイルを解析
let dts_text = File.loadTextFile("./tmp/types.d.ts");

// 戻り値の補正
// 戻り値が any で終わっているものは解析エラーの可能性があるため、returns の情報を使用する
{
	const dts_text_line = dts_text.split("\n");
	for(let i = 0; i < dts_text_line.length; i++) {
		const line = dts_text_line[i];
		if(!line.endsWith(": any;")) {
			continue;
		}
		// 戻り値がanyで終わっているものは解析エラーの可能性がある。
		let returns = null;
		for(let j = i - 3; j < i; j++) {
			// {} の入れ子について
			// 1重 (\{[^{]*\})
			// 2重 (\{[^{]*((\{[^{]*\})*[^{]*)\})
			// 3重 (\{[^{]*((\{[^{]*((\{[^{]*\})*[^{]*)\})*[^{]*)\})
			// 3重まで対応
			if(/(\s*\*\s*@returns?\s*)(\{[^{]*((\{[^{]*((\{[^{]*\})*[^{]*)\})*[^{]*)\})/.test(dts_text_line[j])) {
				const match = dts_text_line[j].match(/(\s*\*\s*@returns?\s*)(\{[^{]*((\{[^{]*((\{[^{]*\})*[^{]*)\})*[^{]*)\})/)[0];
				const with_block = match.replace(/(\s*\*\s*@returns?\s*)/, "");
				returns = with_block.replace(/(^{)|(}$)/g, "");
				break;
			}
		}
		if(returns === null) {
			continue;
		}
		// 2行前がreturnコメントなら、returnコメントを採用
		dts_text_line[i] = line.replace(/: any;$/, ": " + returns + ";");
	}
	dts_text = dts_text_line.join("\n");
}

{
	// "import("./*/*.js")." などのimport文の除去
	dts_text = dts_text.replace(/import\([^)]*\)\./g, "");
}

{
	// 型定義ファイルで無名関数を戻り値として返す場合の記述方法が不明なので、 any にしておく。
	// static COMPARE_DEFAULT: function(string, string): number;
	dts_text = dts_text.replace(/: function\([^;]+;/g, ": any;");
}

// 不要なデータを削除
{
	// 以下のようなコードが原因不明で入り込む場合があるので削除する
	// declare var default: any;
	dts_text = dts_text.replace(/\ndeclare var default: any;\n/g, "\n");
}

// 保存
File.saveTextFileWithBOM("./build/konpeito-ES3.d.ts", dts_text);

// 作成用ディレクトリを削除
File.deleteDirectory("./tmp");
