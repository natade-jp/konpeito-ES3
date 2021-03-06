//@ts-check
/// <reference path="../examples/lib/SenkoWSH.d.ts" />
/// <reference path="../build/konpeito-ES3.d.ts" />
System.executeOnCScript();
System.initializeCurrentDirectory();

var $ = Matrix.create;

var test_count = 0;

/**
 * @param {*} operator 
 * @param {*} x1 
 * @param {*} y 
 * @param {*} [tolerance]
 */
var testOperator1  = function(operator, x1, y, tolerance) {
	test_count++;
	var tolerance_ = tolerance ? tolerance : 0.1;
	// @ts-ignore
	var cy = LinearAlgebra[operator](x1);
	var cy_str = cy instanceof Matrix ? cy.toOneLineString() : cy.toString();
	var testname = operator + " " + test_count + " " + operator + "(" + x1 + ") = " + cy_str;
	var out = $(y).equals(cy, tolerance_);
	console.log(testname + " : " + out);
};

/**
 * @param {*} operator 
 * @param {*} x1 
 * @param {*} x2 
 * @param {*} y 
 * @param {*} [tolerance]
 */
var testOperator2  = function(operator, x1, x2, y, tolerance) {
	test_count++;
	var tolerance_ = tolerance ? tolerance : 0.1;
	// @ts-ignore
	var cy = LinearAlgebra[operator](x1, x2);
	var cy_str = cy instanceof Matrix ? cy.toOneLineString() : cy.toString();
	var testname = operator + " " + test_count + " " + operator + "(" + x1 + "," + x2 + ") = " + cy_str;
	var out = $(y).equals(cy, tolerance_);
	console.log(testname + " : " + out);
};

{
	test_count = 0;
	testOperator2("inner", "3 + j", "2 + j", "7 + j");
	testOperator2("inner", "[1 2 3]", "[4 5 6]", "32");
}

{
	test_count = 0;
	testOperator1("rank", "3", "1");
	testOperator1("rank", "[1 1; 1 0]", "2");
	testOperator1("rank", "[1 1; 2 2]", "1");
	testOperator1("rank", "[1 2; 2 4]", "1");
	testOperator1("rank", "[1 2 3; 4 -2 3; 2 4 5]", "3");
	testOperator1("rank", "[1 2 3; 0 0 0; 2 4 5]", "2");
	testOperator1("rank", "[0 2 3; 0 -2 3; 0 4 5]", "2");
	testOperator1("rank", "[0 2 3; 0 -2 3]", "2");
	testOperator1("rank", "[4; 2; 1]", "1");
	testOperator1("rank", "[4 4; 2 2; 1 1]", "1");
	testOperator1("rank", "[0 0; 2 -2; 3 3]", "2");
}

{
	test_count = 0;
	testOperator1("trace", "3", "3");
	testOperator1("trace", "[1 1; 1 5]", "6");
	testOperator1("trace", "[3 2 3; 1 -2 3]", "1");
	testOperator1("trace", "[4; 2; 1]", "4");
	testOperator1("trace", "[4 4; 2 2; 1 1]", "6");
}
{
	test_count = 0;
	/**
	 * @param {*} x 
	 * @param {*} [tolerance]
	 */
	var testLUP = function(x, tolerance) {
		test_count++;
		var tolerance_ = tolerance ? tolerance : 0.1;
		var X = $(x);
		var LUP = X.lup();
		var Y = LUP.P.T().mul(LUP.L).mul(LUP.U);
		var L_str = LUP.L.toOneLineString();
		var U_str = LUP.U.toOneLineString();
		var P_str = LUP.P.toOneLineString();
		var Y_str = Y.toOneLineString();
		var name = "lup " + test_count + " lup(" + x + ")->";
		console.log(name + "L=" + L_str + " : " + LUP.L.isTriangleLower(tolerance));
		console.log(name + "U=" + U_str + " : " + LUP.U.isTriangleUpper(tolerance));
		console.log(name + "P=" + P_str + " : " + LUP.P.isPermutation(tolerance));
		console.log(name + "P^T*L*U=" + Y_str + " : " + X.equals(Y, tolerance_));
	};
	testLUP("[1 2 3 3;4 5 6 6;7 8 9 2]");
	testLUP("[1 4 2;3 5 1;2 4 2;1 0 9]");
	testLUP("[1 4 2;3 5 1;0 0 0;1 0 9]");
	testLUP("[1 2 3;4 5 6;7 8 9]");
	testLUP("[1 2;3 4;5 6]");
	testLUP("[1 1;1 1;1 1]");
	testLUP("[0 0 0;0 0 0]");
}

{
	test_count = 0;
	testOperator2("linsolve", "[2 1 3 4;3 2 5 2; 3 4 1 -1; -1 -3 1 3]", "[2; 12; 4; -1]", "[1; -1; 3; -2]");
}

{
	test_count = 0;
	/**
	 * @param {*} x 
	 * @param {*} [tolerance]
	 */
	var testQR = function(x, tolerance) {
		test_count++;
		var tolerance_ = tolerance ? tolerance : 0.1;
		var X = $(x);
		var QR = X.qr();
		var Y = QR.Q.mul(QR.R);
		var Q_str = QR.Q.toOneLineString();
		var R_str = QR.R.toOneLineString();
		var Y_str = Y.toOneLineString();
		var name = "qr " + test_count + " qr(" + x + ")->";
		console.log(name + "Q=" + Q_str + " : " + QR.Q.isUnitary(tolerance));
		console.log(name + "R=" + R_str + " : " + QR.R.isTriangleUpper(tolerance));
		console.log(name + "Q*R=" + Y_str + " : " + X.equals(Y, tolerance_));
	};
	testQR("[1 2 3;4 5 6;7 8 9]");
	testQR("[0 0 0;1 2 3;4 5 6]");
	testQR("[1 2 3;4 5 6;0 0 0]");
	testQR("[1 2; 3 4; 5 6]");
	testQR("[1 2 3;4 5 6]");
	testQR("[1 1;1 1;1 1]");
	testQR("[0 0 0;0 0 0]");
}

{
	test_count = 0;
	/**
	 * @param {*} x 
	 * @param {*} [tolerance]
	 */
	var testTRI = function(x, tolerance) {
		test_count++;
		var tolerance_ = tolerance ? tolerance : 0.1;
		var X = $(x);
		var PH = X.tridiagonalize();
		var Y = PH.P.mul(PH.H).mul(PH.P.T());
		var P_str = PH.P.toOneLineString();
		var H_str = PH.H.toOneLineString();
		var Y_str = Y.toOneLineString();
		var name = "tridiagonalize " + test_count + " tridiagonalize(" + x + ")->";
		console.log(name + "P=" + P_str + " : " + PH.P.isUnitary(tolerance));
		console.log(name + "H=" + H_str + " : " + PH.H.isTridiagonal(tolerance));
		console.log(name + "P*H*P'=" + Y_str + " : " + X.equals(Y, tolerance_));
	};
	testTRI("[1 2;2 1]");
	testTRI("[1.0 0.5 0.3;0.5 1.0 0.6;0.3 0.6 1.0]");
	testTRI("[1 1 1 1;1 2 2 2;1 2 3 3;1 2 3 4]");
	testTRI("[0 0 0;0 0 0;0 0 0]");
}

{
	test_count = 0;
	/**
	 * @param {*} x 
	 * @param {*} [tolerance]
	 */
	var testEIG = function(x, tolerance) {
		test_count++;
		var tolerance_ = tolerance ? tolerance : 0.1;
		var X = $(x);
		var VD = X.eig();
		var Y = VD.V.mul(VD.D).mul(VD.V.T());
		var V_str = VD.V.toOneLineString();
		var D_str = VD.D.toOneLineString();
		var Y_str = Y.toOneLineString();
		var name = "eig " + test_count + " eig(" + x + ")->";
		console.log(name + "V=" + V_str + " : " + VD.V.isUnitary(tolerance));
		console.log(name + "D=" + D_str + " : " + VD.D.isDiagonal(tolerance));
		console.log(name + "V*D*V'=" + Y_str + " : " + X.equals(Y, tolerance_));
	};
	testEIG("[1 2;2 1]");
	testEIG("[1.0 0.5 0.3;0.5 1.0 0.6;0.3 0.6 1.0]");
	testEIG("[1 1 1 1;1 2 2 2;1 2 3 3;1 2 3 4]");
	testEIG("[0 0 0;0 0 0;0 0 0]");
}

{
	test_count = 0;
	/**
	 * @param {*} x 
	 * @param {*} [tolerance]
	 */
	var testSVD = function(x, tolerance) {
		test_count++;
		var tolerance_ = tolerance ? tolerance : 0.1;
		var X = $(x);
		var USV = X.svd();
		var Y = USV.U.mul(USV.S).mul(USV.V.T());
		var U_str = USV.U.toOneLineString();
		var S_str = USV.S.toOneLineString();
		var V_str = USV.V.toOneLineString();
		var Y_str = Y.toOneLineString();
		var name = "svd " + test_count + " svd(" + x + ")->";
		console.log(name + "U=" + U_str + " : " + USV.U.isUnitary(tolerance));
		console.log(name + "S=" + S_str + " : " + USV.S.isDiagonal(tolerance));
		console.log(name + "V=" + V_str + " : " + USV.V.isUnitary(tolerance));
		console.log(name + "U*S*V'=" + Y_str + " : " + X.equals(Y, tolerance_));
	};
	testSVD("[2 1 3 4;3 2 5 2; 3 4 1 -1; -1 -3 1 3]");
	testSVD("[1 2 3;4 5 6;7 8 9]");
	testSVD("[1 2 3;4 5 6]");
	testSVD("[1 2;3 4;5 6]");
	testSVD("[0 0 0;0 0 0]");
	testSVD("[0 0;0 0;0 0]");
}

{
	test_count = 0;
	/**
	 * @param {*} x 
	 * @param {*} [tolerance]
	 */
	var testINV = function(x, tolerance) {
		test_count++;
		var tolerance_ = tolerance ? tolerance : 0.1;
		var X = $(x);
		var invX = X.inv();
		var Y = invX.mul(X);
		var Y_str = Y.toOneLineString();
		var name = "inv " + test_count + " inv(" + x + ")->";
		console.log(name + "X*(X^-1)=" + Y_str + " : " + Y.isIdentity(tolerance_));
	};
	testINV("[1 1 -1; -2 0 1; 0 2 1]");
}

{
	test_count = 0;
	/**
	 * @param {*} x 
	 * @param {*} [tolerance]
	 */
	var testPINV = function(x, tolerance) {
		test_count++;
		var tolerance_ = tolerance ? tolerance : 0.1;
		var X = $(x);
		var Y = X.pinv().pinv();
		var Y_str = Y.toOneLineString();
		var name = "pinv " + test_count + " pinv(" + x + ")->";
		console.log(name + "pinv(pinv(X)) = " + Y_str + " : " + X.equals(Y, tolerance_));
	};
	testPINV("[1 2;3 4;5 6]");
	testPINV("[1 2 3;4 5 6;7 8 9]");
	testPINV("[1 2 3 4;5 6 7 8]");
}

{
	test_count = 0;
	testOperator1("det", "[6 2;1 4]", "22");
	testOperator1("det", "[1 2 3;0 -1 5;-2 3 4]", "-45");
	testOperator1("det", "[3 2 1 0;1 2 3 4;2 1 0 1;2 0 2 1]", "-32");
	testOperator1("det", "[2 3 1 4 5;2 3 0 3 4;1 4 0 8 3;1 1 4 5 0;1 5 3 4 5]", "-284");
}

{
	test_count = 0;
	testOperator2("norm", "3 + j", "1", "3.1623");
	testOperator2("norm", "[1 -2 7 3]", "1", "13");
	testOperator2("norm", "[1; -2; 7; 3]", "1", "13");
	testOperator2("norm", "[-1 -2 1; 3 1.5 2; -3 4 0.5]", "1", "7.5");
}

{
	testOperator2("norm", "3", "2", "3");
	testOperator2("norm", "[1 -2 7 3]", "2", "7.9373");
	testOperator2("norm", "[1; -2; 7; 3]", "2", "7.9373");
	testOperator2("norm", "[-1 -2 1; 3 1.5 2; -3 4 0.5]", "2", "5.1347");
}

{
	testOperator2("norm", "3", Number.POSITIVE_INFINITY, "3");
	testOperator2("norm", "[1 -2 7 3]", Number.POSITIVE_INFINITY, "7");
	testOperator2("norm", "[1; -2; 7; 3]", Number.POSITIVE_INFINITY, "7");
	testOperator2("norm", "[-1 -2 1; 3 1.5 2; -3 4 0.5]", Number.POSITIVE_INFINITY, "7.5000");
}

{
	testOperator2("norm", "3", Number.NEGATIVE_INFINITY, "3");
	testOperator2("norm", "[1 -2 7 3]", Number.NEGATIVE_INFINITY, "1");
	testOperator2("norm", "[1; -2; 7; 3]", Number.NEGATIVE_INFINITY, "1");
	testOperator2("norm", "[-1 -2 1; 3 1.5 2; -3 4 0.5]", Number.NEGATIVE_INFINITY, "7.5000");
}

{
	testOperator2("norm", "3", "2.5", "3");
	testOperator2("norm", "[1 -2 7 3]", "2.5", "7.4578");
	testOperator2("norm", "[1; -2; 7; 3]", "2.5", "7.4578");
}

{
	test_count = 0;
	testOperator2("cond", "3", 2, "1");
	testOperator2("cond", "[1 -2 7 3]", 2, "1");
	testOperator2("cond", "[1; -2; 7; 3]", 2, "1");
	testOperator2("cond", "[-1 -2 1; 3 1.5 2; -3 4 0.5]", 2, "2.7830");
}

{
	test_count = 0;
	testOperator1("rcond", "[-1 -2 1; 3 1.5 2; -3 4 0.5]", "0.16533");
}

System.stop();
