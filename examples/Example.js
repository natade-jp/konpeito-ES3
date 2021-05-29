//@ts-check
/// <reference path="./lib/SenkoWSH.d.ts" />
/// <reference path="../build/konpeito-ES3.d.ts" />
System.executeOnCScript();
System.initializeCurrentDirectory();

// 練習用のスクリプトです。
// コメントアウトを外したりして、色々試してみてください。

var splice_buffer = Array.prototype.splice;
Array.prototype.splice = function() {
	var x = [];
	for(var i = 0 ; i < arguments.length ; i++) {
		x.push(arguments[i]);
	}
	// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
	// 2番目の引数が省略された場合の動作
	if(arguments.length === 1) {
		x.push(this.length - arguments[0]);
	}
	return splice_buffer.apply(this, x);
};

var a = [1, 2, 3];

a.splice(2);

for(var i in a) {
    console.log(i);
}



/*
var $ = Matrix.create;

console.log($("[1 2;3 4;5 6]"));

var USV = $("[1 2;3 4;5 6]").svd();

console.log(USV.U);
console.log(USV.S);
console.log(USV.V);
console.log(USV.U.mul(USV.S).mul(USV.V.T()));
*/

console.log("自動的に終了します。");
System.sleep(60.0);
