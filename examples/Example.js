//@ts-check
/// <reference path="./lib/SenkoWSH.d.ts" />
/// <reference path="../build/konpeito-ES3.d.ts" />
System.executeOnCScript();
System.initializeCurrentDirectory();

// 練習用のスクリプトです。
// コメントアウトを外したりして、色々試してみてください。

var $ = Matrix.create;

console.log($("[1 2;3 4;5 6]"));

var USV = $("[1 2;3 4;5 6]").svd();

console.log(USV.U);
console.log(USV.S);
console.log(USV.V);
console.log(USV.U.mul(USV.S).mul(USV.V.T()));

console.log("自動的に終了します。");
System.sleep(60.0);
