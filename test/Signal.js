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
	var cy = Signal[operator](x1);
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
	var cy = Signal[operator](x1, x2);
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
	var cy = Signal[operator](x1, x2, x3);
	var cy_str = cy instanceof Matrix ? cy.toOneLineString() : cy.toString();
	var testname = operator + " " + test_count + " " + operator + "(" + x1 + "," + x2 + "," + x3 + ") = " + cy_str;
	var out = $(y).equals(cy, tolerance_);
	console.log(testname + " : " + out);
};


{
	test_count = 0;
	testOperator1("fft", "[1]", "[1]");
	testOperator1("fft", "[1 2]", "[3 -1]");
	testOperator1("fft", "[1 2 3]", "[6 -1.5 + 0.8660i -1.5 - 0.8660i]");
	testOperator1("fft", "[4 3 2 1]", "[10 +  0i    2 -  2i    2 +  0i    2 +  2i]");
}

{
	test_count = 0;
	testOperator1("fft", "[2 + j]", "[2 + j]");
	testOperator1("fft", "[1 + j 4 - 2j]", "[5 - j -3 + 3j]");
	testOperator1("fft", "[1 + j 4 - 2j 2 + 3j]", "[7.0000 + 2.0000i  -6.3301 - 1.2321i   2.3301 + 2.2321i]");
	testOperator1("fft", "[1 + j 4 - 2j 2 + 3j 2j]", "[7 + 4i  -5 - 6i  -1 + 4i   3 + 2i]");
}

{
	test_count = 0;
	/**
	 * @param {*} x 
	 * @param {*} [tolerance]
	 */
	var testIFFT = function(x, tolerance) {
		var tolerance_ = tolerance ? tolerance : 0.1;
		var X = $(x);
		var Y = X.fft().ifft();
		var Y_str = Y.toOneLineString();
		var name = "ifft " + test_count++ + " " + x + ".fft().iff()=" + Y_str;
		console.log(name + " : " + X.equals(Y, tolerance_));
	};
	testIFFT("[1]");
	testIFFT("[1 2]");
	testIFFT("[1 2 3]");
	testIFFT("[4 3 2 1]");
	testIFFT("[2 + j]");
	testIFFT("[1 + j 4 - 2j]");
	testIFFT("[1 + j 4 - 2j 2 + 3j]");
	testIFFT("[1 + j 4 - 2j 2 + 3j 2j]");
}

{
	test_count = 0;
	testOperator1("powerfft", "[1 + j 4 - 2j 2 + 3j]", "[53.000 41.588 10.412]");
}

{
	test_count = 0;
	testOperator1("dct", "[1]", "[1]");
	testOperator1("dct", "[1 2]", "[2.12132  -0.70711]");
	testOperator1("dct", "[1 2 3]", "[3.46410  -1.41421   0.00000]");
	testOperator1("dct", "[4 3 2 1]", "[5.00000   2.23044   0.00000   0.15851]");
}

{
	test_count = 0;
	/**
	 * @param {*} x 
	 * @param {*} [tolerance]
	 */
	var testIDCT = function(x, tolerance) {
		var tolerance_ = tolerance ? tolerance : 0.1;
		var X = $(x);
		var Y = X.dct().idct();
		var Y_str = Y.toOneLineString();
		var name = "idct " + test_count++ + " " + x + ".dct().idct()=" + Y_str;
		console.log(name + " : " + X.equals(Y, tolerance_));
	};
	testIDCT("[1]");
	testIDCT("[1 2]");
	testIDCT("[1 2 3]");
	testIDCT("[4 3 2 1]");
}

{
	test_count = 0;
	testOperator2("conv", "[1 2 3 4]", "[1 2 3 4]", "[1 4 10 20 25 24 16]");
	testOperator2("conv", "[1 2 3 4]", "[1 2 3 5]", "[1 4 10 21 27 27 20]");
	testOperator2("conv", "[1 2 3 4]", "[5 4 3 2 1]", "[5 14 26 40 30 20 11 4]");
	testOperator2("conv", "[1 2 3+3j 4 5]", "[1 2 3+3j 4 5]", "[1, 4, 10 + 6i, 20 + 12i, 26 + 18i, 44 + 24i, 46 + 30i, 40, 25]");
	testOperator2("conv", "[1 2 3+3j 4 5]", "[5 6 7+3j 8 9]", "[5, 16, 34 + 18i, 60 + 24i, 86 + 30i, 100 + 36i, 94 + 42i, 76, 45]");
}

{
	test_count = 0;
	testOperator2("xcorr", "[1 2 3 4]", "[1 2 3 4]", "[4 11 20 30 20 11 4]");
	testOperator2("xcorr", "[1 2 3 4]", "[1 2 3 5]", "[5 13 23 34 20 11 4]");
	testOperator2("xcorr", "[1 2 3 4]", "[5 4 3 2 1]", "[1 4 10 20 30 34 31 20 0]");
	testOperator2("xcorr", "[1 2]", "[5 4 3 2 1]", "[1 4 7 10 13 10 0 0 0]");
	testOperator2("xcorr", "[5 4 3 2]", "[6 7]", "[0 0 35 58 45 32 12]");
	testOperator2("xcorr", "[1 2 3+3j 4 5]", "[1 2 3+3j 4 5]", "[5, 14, 26 + 12i, 40 + 6i, 64, 40 - 6i, 26 - 12i, 14, 5]");
	testOperator2("xcorr", "[1 2 3+3j 4 5]", "[5 6 7+3j 8 9]", "[9, 26, 50 + 24i, 80 + 18i, 124 + 12i, 96 + 6i, 74, 50, 25]");
}

{
	test_count = 0;
	testOperator3("window", "hann", "4", "symmetric", "[0; 0.75; 0.75; 0]");
	testOperator3("window", "hann", "4", "periodic", "[0; 0.5; 1.0; 0.5]");
	testOperator3("window", "hann", "5", "symmetric", "[0; 0.5; 1.0; 0.5; 0.0]");
	testOperator3("window", "hann", "5", "periodic", "[0; 0.3455; 0.9045; 0.9045; 0.3455]");
	testOperator2("window", "rectangle", "5", "[1; 1; 1; 1; 1]");
	testOperator2("window", "hann", "5", "[0; 0.5; 1.0; 0.5; 0.0]");
	testOperator2("window", "hamming", "5", "[0.08; 0.54; 1.00; 0.54; 0.08]");
	testOperator2("window", "blackman", "5", "[0; 0.34; 1.00; 0.34; 0]");
	testOperator2("window", "blackmanharris", "5", "[0; 0.21747; 1.00; 0.21747; 0]");
	testOperator2("window", "blackmannuttall", "5", "[0.00036; 0.22698; 1.00; 0.22698; 0.00036]");
	testOperator2("window", "flattop", "5", "[0.004; -0.258; 4.64; -0.258; 0.004]");
	testOperator2("window", "sin", "10", "[ 0; 0.34202; 0.642788; 0.866025; 0.984808; 0.984808; 0.866025; 0.642788; 0.34202; 0 ]");
	testOperator2("window", "vorbis", "10", "[ 0; 0.182716; 0.604402; 0.92388; 0.998878; 0.998878; 0.92388; 0.604402; 0.182716; 0 ]");
}

{
	test_count = 0;
	testOperator1("hann", "5", "[0; 0.5; 1.0; 0.5; 0.0]");
}

{
	test_count = 0;
	testOperator1("hamming", "5", "[0.08; 0.54; 1.00; 0.54; 0.08]");
}

{
	test_count = 0;
	testOperator1("fftshift", "[1 2 3 4 5 6]", "[4 5 6 1 2 3]");
	testOperator1("fftshift", "[1 2 3 4 5 6 7]", "[5 6 7 1 2 3 4]");
}

System.stop();

