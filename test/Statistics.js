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
	var tolerance_ = tolerance ? tolerance : 0.001;
	// @ts-ignore
	var cy = Statistics[operator](x1);
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
	var tolerance_ = tolerance ? tolerance : 0.001;
	var x2_str = (typeof x2 === "object") ? JSON.stringify(x2) : x2.toString();
	// @ts-ignore
	var cy = Statistics[operator](x1, x2);
	var cy_str = cy instanceof Matrix ? cy.toOneLineString() : cy.toString();
	var testname = operator + " " + test_count + " " + operator + "(" + x1 + "," + x2_str + ") = " + cy_str;
	var out = $(y).equals(cy, tolerance_);
	console.log(testname + " : " + out);
};

/**
 * @param {*} operator 
 * @param {*} x1 
 * @param {*} x2 
 * @param {*} x3 
 * @param {*} y 
 * @param {*} [tolerance]
 */
var testOperator3  = function(operator, x1, x2, x3, y, tolerance) {
	test_count++;
	var tolerance_ = tolerance ? tolerance : 0.001;
	// @ts-ignore
	var cy = Statistics[operator](x1, x2, x3);
	var cy_str = cy instanceof Matrix ? cy.toOneLineString() : cy.toString();
	var testname = operator + " " + test_count + " " + operator + "(" + x1 + "," + x2 + "," + x3 + ") = " + cy_str;
	var out = $(y).equals(cy, tolerance_);
	console.log(testname + " : " + out);
};

{
	test_count = 0;
	testOperator1("max", 4, 4);
	testOperator1("max", "[1 2 3]", 3);
}

{
	test_count = 0;
	testOperator1("min", 4, 4);
	testOperator1("min", "[1 2 3]", 1);
}

{
	test_count = 0;
	testOperator1("sum", 4, 4);
	testOperator1("sum", "[1 2 3]", 6);
}

{
	test_count = 0;
	testOperator1("mean", 4, 4);
	testOperator1("mean", "[1 2 6]", 3);
}

{
	test_count = 0;
	testOperator1("prod", 4, 4);
	testOperator1("prod", "[1 2 6]", 12);
}

{
	test_count = 0;
	testOperator1("geomean", 4, 4);
	testOperator1("geomean", "[1 2 6]", 2.2894);
}

{
	test_count = 0;
	testOperator1("median", 4, 4);
	testOperator1("median", "[1 2 6]", 2);
	testOperator1("median", "[1 2 6 6]", 4);
	testOperator1("median", "[6 6 1 2]", 4);
}

{
	test_count = 0;
	testOperator1("mode", 4, 4);
	testOperator1("mode", "[1 1 2 6]", 1);
	testOperator1("mode", "[6 2 2 1]", 2);
	testOperator1("mode", "[2 1 6 6]", 6);
}

{
	test_count = 0;
	testOperator2("moment", "[3 29 12 32]", 1, 0);
	testOperator2("moment", "[3 29 12 32]", 2, 143.50);
	testOperator2("moment", "[3 29 12 32]", 3, -310.50);
}

{
	test_count = 0;
	testOperator2("variance", "[3]", {correction : 0}, 0);
	testOperator2("variance", "[3]", {correction : 1}, 0);
	testOperator1("variance", "[3 29 12 32]", 191.3333, 0.1);
	testOperator2("variance", "[3 29 12 32]", {correction : 0}, 191.3333, 0.1);
	testOperator2("variance", "[3 29 12 32]", {correction : 1}, 143.50, 0.1);
}

{
	test_count = 0;
	testOperator2("std", "[3]", {correction : 0}, 0);
	testOperator2("std", "[3]", {correction : 1}, 0);
	testOperator1("std", "[3 29 12 32]", 13.832, 0.1);
	testOperator2("std", "[3 29 12 32]", {correction : 0}, 13.832, 0.1);
	testOperator2("std", "[3 29 12 32]", {correction : 1}, 11.979, 0.1);
}

{
	test_count = 0;
	testOperator1("mad", "[3]", 0);
	testOperator1("mad", "[3 29 12 32]", 11.500, 0.1);
	testOperator2("mad", "[3]", "median", 0);
	testOperator2("mad", "[3 29 12 32]", "median", 10.000, 0.1);
}

{
	test_count = 0;
	testOperator2("skewness", "[3 29 12 32]", {correction : 0}, -0.31286);
	testOperator2("skewness", "[3 29 12 32]", {correction : 1}, -0.18063);
}

{
	test_count = 0;
	testOperator1("cov", "[2 1 -1 2;0 4 -2 0;1 1 2 1]", "[1 -1.5 0.5 1;-1.50 3 -2.5 -1.5;0.50 -2.5 4.33 0.5;1 -1.5 0.5 1]", 0.1);
	testOperator2("cov", "[2 1 -1 2;0 4 -2 0;1 1 2 1]", {correction : 0}, "[1 -1.5 0.5 1;-1.50 3 -2.5 -1.5;0.50 -2.5 4.33 0.5;1 -1.5 0.5 1]", 0.1);
	testOperator2("cov", "[2 1 -1 2;0 4 -2 0;1 1 2 1]", {correction : 1}, "[0.66 -1 0.33 0.66;-1 2 -1.66 -1;0.33 -1.66 2.88 0.33;0.66 -1 0.33 0.66]", 0.1);
	testOperator2("cov", "[1 2 -3 4]", "[2 3 1 -2]", -2.3333, 0.1);
	testOperator3("cov", "[1 2 -3 4]", "[2 3 1 -2]", {correction : 0}, -2.3333, 0.1);
	testOperator3("cov", "[1 2 -3 4]", "[2 3 1 -2]", {correction : 1}, -1.7500, 0.1);
}

{
	test_count = 0;
	/**
	 * @param {*} x 
	 * @param {*} type 
	 * @param {*} [tolerance]
	 */
	var testNormalize = function(x, type, tolerance) {
		test_count++;
		var tolerance_ = tolerance ? tolerance : 0.1;
		var X = $(x);
		var Y = X.standardization(type).std(type);
		var Y_str = Y.toOneLineString();
		var name = "standardization " + test_count + " ";
		console.log(name + "std(standardization(" + x + "," + JSON.stringify(type) + ")) = " + Y_str + " : " + Y.equals(1.0, tolerance_));
	};
	testNormalize("[1.0, 1.2, 1.3]", {correction : 0});
	testNormalize("[1.0, 1.2, 1.3]", {correction : 1});
}

{
	test_count = 0;
	testOperator1("corrcoef", "[1 2;2 2;0 3;4 2]", "[1  -0.68313;-0.68313 1]");
	testOperator1("corrcoef", "[1 2 4;1 2 2;0 3 2]", "[1 -1 0.5;-1 1 -0.5;0.5 -0.5 1]");
	testOperator2("corrcoef", "[1 2 2]", "[3 2 1]", -0.86603);
	testOperator2("corrcoef", "[3 -1 0]", "[2 -2 -5]", 0.77513);
}

{
	test_count = 0;
	testOperator2("sort", "[4 5 2 3]", "ascend", "[2 3 4 5]");
	testOperator2("sort", "[4 5 2 3]", "descend", "[5 4 3 2]");
}

System.stop();
