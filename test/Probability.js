//@ts-check
/// <reference path="../examples/lib/SenkoWSH.d.ts" />
/// <reference path="../build/konpeito-ES3.d.ts" />
System.executeOnCScript();
System.initializeCurrentDirectory();

var test_count = 0;

/**
 * @param {number} x1
 * @param {number} x2
 * @param {number} [tolerance]
 * @returns {boolean}
 */
var equals = function(x1, x2, tolerance) {
	var out;
	var tolerance_ = tolerance ? tolerance : 0.001;
	if(!isFinite(x1) || !isFinite(x2)) {
		if(isNaN(x1) && isNaN(x2)) {
			return true;
		}
		else {
			out = x1 === x2;
		}
	}
	else {
		out = Math.abs(x1 - x2) <= tolerance_;
	}
	return out;
};

/**
 * @param {*} operator 
 * @param {*} x1 
 * @param {*} y 
 * @param {*} [tolerance]
 */
var testOperator1  = function(operator, x1, y, tolerance) {
	test_count++;
	// @ts-ignore
	var cy = Probability[operator](x1);
	var testname = operator + " " + test_count + " " + operator + "(" + x1 + ") = " + y + " === " + cy;
	var out = equals(y, cy, tolerance);
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
	// @ts-ignore
	var cy = Probability[operator](x1, x2);
	var testname = operator + " " + test_count + " " + operator + "(" + x1 + "," + x2 + ") = " + y + " === " + cy;
	var out = equals(y, cy, tolerance);
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
	// @ts-ignore
	var cy = Probability[operator](x1, x2, x3);
	var testname = operator + " " + test_count + " " + operator + "(" + x1 + "," + x2 + "," + x3 + ") = " + y + " === " + cy;
	var out = equals(y, cy, tolerance);
	console.log(testname + " : " + out);
};

{
	test_count = 0;
	testOperator1("gammaln", 0, Infinity);
	testOperator1("gammaln", 0.1, 2.2527);
	testOperator1("gammaln", 0.5, 0.57236);
	testOperator1("gammaln", 0.9, 0.066376);
	testOperator1("gammaln", 1, 0);
}

{
	test_count = 0;
	testOperator1("gamma", 0, Infinity);
	testOperator1("gamma", 0.1, 9.5135);
	testOperator1("gamma", 0.5, 1.7725);
	testOperator1("gamma", 0.9, 1.0686);
	testOperator1("gamma", 1, 1);
}

{
	test_count = 0;
	testOperator2("gammainc", 1, 1, 0.63212);
	testOperator2("gammainc", 1, 2, 0.26424);
	testOperator2("gammainc", 0.5, 1, 0.39347);
	testOperator2("gammainc", 0.5, 2, 0.090204);
}

{
	test_count = 0;
	testOperator3("gampdf", 1, 2, 3, 0.079615);
	testOperator3("gampdf", 2, 3, 4, 0.018954);
}

{
	test_count = 0;
	testOperator3("gamcdf", 1, 2, 3, 0.044625);
	testOperator3("gamcdf", 2, 3, 4, 0.014388);
}

{
	test_count = 0;
	testOperator3("gaminv", 0, 1, 2, 0);
	testOperator3("gaminv", 0.5, 2, 3, 5.0350);
	testOperator3("gaminv", 0.9, 3, 4, 21.289);
	testOperator3("gaminv", 1, 4, 5, Infinity);
}

{
	test_count = 0;
	testOperator2("beta", 0, 1, Infinity);
	testOperator2("beta", 1, 2, 0.50000);
	testOperator2("beta", 3, 4, 0.016667);
}

{
	test_count = 0;
	testOperator3("betainc", 0, 1, 1, 0);
	testOperator3("betainc", 0.1, 2, 3, 0.052300);
	testOperator3("betainc", 0.2, 3, 4, 0.098880);
	testOperator3("betainc", 1, 5, 5, 1);
}

{
	test_count = 0;
	testOperator3("betapdf", 0, 1, 1, 1);
	testOperator3("betapdf", 0.1, 2, 3, 0.97200);
	testOperator3("betapdf", 0.2, 3, 4, 1.2288);
	testOperator3("betapdf", 1, 5, 5, 0);
}

{
	test_count = 0;
	testOperator3("betacdf", 0, 1, 1, 0);
	testOperator3("betacdf", 0.1, 2, 3, 0.052300);
	testOperator3("betacdf", 0.2, 3, 4, 0.098880);
	testOperator3("betacdf", 1, 5, 5, 1);
}

{
	test_count = 0;
	testOperator3("betainv", 0, 1, 1, 0);
	testOperator3("betainv", 0.1, 2, 3, 0.14256);
	testOperator3("betainv", 0.2, 3, 4, 0.26865);
	testOperator3("betainv", 1, 5, 5, 1);
}

{
	test_count = 0;
	testOperator1("factorial", 0, 1);
	testOperator1("factorial", 1, 1);
	testOperator1("factorial", 2, 2);
	testOperator1("factorial", 3, 6);
}

{
	test_count = 0;
	testOperator2("nchoosek", 3, 2, 3);
	testOperator2("nchoosek", 10, 4, 210);
	testOperator2("nchoosek", 200, 3, 1313400);
}

{
	test_count = 0;
	testOperator1("erf",-Infinity, -1.0);
	testOperator1("erf", 0.0, 0);
	testOperator1("erf", 0.5, 0.52050);
	testOperator1("erf", 1.0, 0.84270);
	testOperator1("erf", Infinity, 1.0);
}

{
	test_count = 0;
	testOperator1("erfc",-Infinity, 2.0);
	testOperator1("erfc", 0.0, 1);
	testOperator1("erfc", 0.5, 0.47950);
	testOperator1("erfc", 1.0, 0.15730);
	testOperator1("erfc", Infinity, 0.0);
}

{
	test_count = 0;
	testOperator1("erfinv", 0.0, 0);
	testOperator1("erfinv", 0.5, 0.47694);
	testOperator1("erfinv",-0.9, -1.1631);
	testOperator1("erfinv", 0.95, 1.3859);
	testOperator1("erfinv", 0.99, 1.8214);
}

{
	test_count = 0;
	testOperator1("erfcinv", 0.2, 0.90619);
	testOperator1("erfcinv", 0.5, 0.47694);
	testOperator1("erfcinv", 0.8, 0.17914);
}

{
	test_count = 0;
	testOperator3("normpdf", 1.0, 0.0, 1.0, 0.24197);
	testOperator3("normpdf", 1.5, 0.5, 1.5, 0.21297);
	testOperator3("normpdf", 0.5, 1.0, 2.0, 0.19333);
}

{
	test_count = 0;
	testOperator3("normcdf", 0.0,-1.0, 1.0, 0.84134);
	testOperator3("normcdf", 0.5, 1.0, 2.0, 0.40129);
	testOperator3("normcdf", 0.8,-0.5, 1.5, 0.80694);
}

{
	test_count = 0;
	testOperator3("norminv", 0.0,-1.0, 1.0, Number.NEGATIVE_INFINITY);
	testOperator3("norminv", 0.3, 0.2, 0.8, -0.21952);
	testOperator3("norminv", 0.8,-0.5, 1.5, 0.76243);
	testOperator3("norminv", 1.0, 0.0, 1.0, Number.POSITIVE_INFINITY);
}

{
	test_count = 0;
	testOperator3("binopdf",   3,   4, 0.6, 0.345600000000000);
	testOperator3("binopdf",  30,  40, 0.6, 0.0196498565908407);
	testOperator3("binopdf",  30,  40, 0.8, 0.107453737710899);
	testOperator3("binopdf",  30,  40, 1.0, 0.0);
}

{
	test_count = 0;
	testOperator3("binocdf",   3,   4, 0.6, 0.870400000000000);
	testOperator3("binocdf",  30,  40, 0.6, 0.984427376476672);
	testOperator3("binocdf",  30,  40, 0.8, 0.268222885708516);
}

{
	test_count = 0;
	testOperator3("binoinv", 0.87,   4, 0.60,  3);
	testOperator3("binoinv", 0.30,  40, 0.20,  7);
	testOperator3("binoinv", 0.90, 100, 0.80, 85);
}

{
	test_count = 0;
	testOperator2("poisspdf",   2,  10, 0.00226999648812424);
	testOperator2("poisspdf",   5,  10, 0.0378332748020708);
	testOperator2("poisspdf",  15,  10, 0.0347180696306842);
	testOperator2("poisspdf", 299, 300, 0.0230265461491858);
}

{
	test_count = 0;
	testOperator2("poisscdf",   2,  10, 0.00276939571551160);
	testOperator2("poisscdf",   5,  10, 0.0670859628790318);
	testOperator2("poisscdf",  15,  10, 0.951259596696021);
	testOperator2("poisscdf", 299, 300, 0.492322211113656);
}

{
	test_count = 0;
	testOperator2("poissinv", 0.01,    30,    18);
	testOperator2("poissinv", 0.43,   300,   297);
	testOperator2("poissinv", 0.98, 12345, 12574);
}

{
	test_count = 0;
	testOperator2("tpdf", 0.0, 2, 0.35355);
	testOperator2("tpdf", 0.2, 4, 0.36579);
	testOperator2("tpdf", 0.8, 10, 0.27663);
	testOperator2("tpdf", 1.0, 20, 0.23605);
}

{
	test_count = 0;
	testOperator2("tcdf", 0.0, 2, 0.50000);
	testOperator2("tcdf", 0.2, 4, 0.57438);
	testOperator2("tcdf", 0.8, 10, 0.77885);
	testOperator2("tcdf", 1.0, 20, 0.83537);
}

{
	test_count = 0;
	testOperator2("tinv", 0.0, 2, Number.NEGATIVE_INFINITY);
	testOperator2("tinv", 0.2, 4, -0.94096);
	testOperator2("tinv", 0.8, 10, 0.87906);
	testOperator2("tinv", 1.0, 20, Number.POSITIVE_INFINITY);
}

{
	test_count = 0;
	testOperator3("tdist", 0.0, 2, 1, 0.500000000);
	testOperator3("tdist", 0.1, 2, 1, 0.464732719);
	testOperator3("tdist", 0.5, 4, 1, 0.321664982);
	testOperator3("tdist",-0.5, 4, 1, 0.321664982);
	testOperator3("tdist", 0.8, 20, 1, 0.216555439);
	testOperator3("tdist", 1.0, 40, 1, 0.161660906);
	testOperator3("tdist", 0.0, 2, 2, 1.000000000);
	testOperator3("tdist", 0.1, 2, 2, 0.929465438);
	testOperator3("tdist", 0.5, 4, 2, 0.643329963);
	testOperator3("tdist", 0.8, 20, 2, 0.433110878);
	testOperator3("tdist", 1.0, 40, 2, 0.323321812);
}

{
	test_count = 0;
	testOperator2("tinv2", 0.0, 2, Number.POSITIVE_INFINITY);
	testOperator2("tinv2", 0.1, 2,  2.91998558);
	testOperator2("tinv2", 0.5, 4,  0.740697084);
	testOperator2("tinv2", 0.8, 20, 0.256742754);
	testOperator2("tinv2", 1.0, 40, 0);
}

{
	test_count = 0;
	testOperator2("chi2pdf", 0.0, 2, 0.50000);
	testOperator2("chi2pdf", 0.1, 2,  0.47561);
	testOperator2("chi2pdf", 0.5, 4,  0.097350);
	testOperator2("chi2pdf", 0.8, 20, 2.4212e-010);
	testOperator2("chi2pdf", 40, 40, 0.044418);
}

{
	test_count = 0;
	testOperator2("chi2cdf", 0.0, 2, 0.00000);
	testOperator2("chi2cdf", 0.1, 2, 0.048771);
	testOperator2("chi2cdf", 0.5, 4, 0.026499);
	testOperator2("chi2cdf", 0.8, 3, 0.15053);
	testOperator2("chi2cdf", 1.2, 3, 0.24700);
}

{
	test_count = 0;
	testOperator2("chi2inv", 0.0, 2, 0.00000);
	testOperator2("chi2inv", 0.1, 2, 0.21072);
	testOperator2("chi2inv", 0.5, 4, 3.3567);
	testOperator2("chi2inv", 0.8, 3, 4.6416);
	testOperator2("chi2inv", 1.0, 3, Number.POSITIVE_INFINITY);
}

{
	test_count = 0;
	testOperator3("fpdf", 0.0, 2, 3, 0.0);
	testOperator3("fpdf", 0.1, 9, 20, 0.025138);
	testOperator3("fpdf", 0.5, 7, 14, 0.71071);
	testOperator3("fpdf", 0.8, 5, 17, 0.63885);
	testOperator3("fpdf", 1.0, 2, 3, 0.27885);
}

{
	test_count = 0;
	testOperator3("fcdf", 0.0, 2, 3, 0.0);
	testOperator3("fcdf", 0.1, 1, 10, 0.24167);
	testOperator3("fcdf", 0.5, 2, 12, 0.38138);
	testOperator3("fcdf", 0.8, 5, 17, 0.43517);
	testOperator3("fcdf", 1.0, 2, 3, 0.53524);
}

{
	test_count = 0;
	testOperator3("finv", 0.0, 2, 3, 0.0);
	testOperator3("finv", 0.1, 1, 10, 0.016613);
	testOperator3("finv", 0.5, 2, 12, 0.73477);
	testOperator3("finv", 0.8, 5, 17, 1.6524);
	testOperator3("finv", 1.0, 2, 3, Number.POSITIVE_INFINITY);
}

System.stop();
