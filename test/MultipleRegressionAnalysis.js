//@ts-check
/// <reference path="../examples/lib/SenkoWSH.d.ts" />
/// <reference path="../build/konpeito-ES3.d.ts" />
System.executeOnCScript();
System.initializeCurrentDirectory();

var $ = Matrix.create;

/**
 * @type {number}
 */
var test_count = 0;

/**
 * check x === y
 * @param {string} name
 * @param {any} x 
 * @param {any} y 
 */
var equalResultsValue = function(name, x, y) {
	
	/**
	 * @type {boolean}
	 */
	var result = false;
	/**
	 * @type {string}
	 */
	var text_x = "";
	/**
	 * @type {string}
	 */
	var text_y = "";

	var target_x = (x !== undefined) ? $(x) : $(0);
	var target_y = (y !== undefined) ? $(y) : $(0);
	result = false;
	if((x !== undefined) && (y !== undefined)) {
		text_x = target_x.toOneLineString();
		text_y = target_y.toOneLineString();
		result = target_x.equals(target_y, 0.001);
	}
	else if(x !== undefined) {
		text_x = target_x.toOneLineString();
		text_y = "undefined";
		result = false;
	}
	else if(y !== undefined) {
		text_x = "undefined";
		text_y = target_y.toOneLineString();
		result = false;
	}
	else {
		text_x = "undefined";
		text_y = "undefined";
		result = false;
	}
	
	test_count++;
	console.log(test_count + " " + name + " " + " = " + text_x + " === " + text_y + " : " + result);
};

/**
 * check x[key] === y[key]
 * @param {string} name
 * @param {string} key
 * @param {any} x 
 * @param {any} y 
 */
var equalResultsKeyValue = function(name, key, x, y) {
	equalResultsValue(name + " " + key, x[key], y[key]);
};

/**
 * check x === y
 * @param {string} name
 * @param {any} x 
 * @param {any} y 
 */
var equalResultsArray = function(name, x, y) {
	for(var key in x) {
		if(key in y) {
			equalResultsKeyValue(name, key, x, y);
		}
		else {
			var text_x = $(x[key]).toOneLineString();
			var text_y = "undefined";
			var result = false;
			test_count++;
			console.log(test_count + " " + name + " " + key + " = " + text_x + " === " + text_y + " : " + result);
		}
	}
};

{
	var x = "[5 5 7 5 8 12]'";
	var y = "[8 9 13 11 14 17]'";
	var result = DataAnalysis.runMultipleRegressionAnalysis({ samples : x, target : y });
	var ans = {
		"q": 1,
		"n": 6,
		"predicted_values": [
			[
				9.736842105263158
			],
			[
				9.736842105263158
			],
			[
				12
			],
			[
				9.736842105263158
			],
			[
				13.131578947368421
			],
			[
				17.657894736842106
			]
		],
		"sY": 8.10964912280702,
		"sy": 9.333333333333334,
		"multiple_R": 0.9321432172384291,
		"R_square": 0.8688909774436093,
		"adjusted_R_square": 0.8361137218045113,
		"ANOVA": {
			"regression": {
				"df": 1,
				"SS": 48.657894736842124,
				"MS": 48.657894736842124
			},
			"residual": {
				"df": 4,
				"SS": 7.342105263157894,
				"MS": 1.8355263157894735
			},
			"total": {
				"df": 5,
				"SS": 56,
				"MS": 11.2
			},
			"F": 26.508960573476717,
			"significance_F": 0.006750589714221045
		},
		"Ve": 1.8355263157894735,
		"standard_error": 1.3548159711892511,
		"AIC": 24.23845931565762,
		"regression_table": {
			"intercept": {
				"coefficient": 4.078947368421051,
				"standard_error": 1.63486511171962,
				"t_stat": 2.4949748692909854,
				"p_value": 0.06712619520541963,
				"lower_95": -0.4601658686715391,
				"upper_95": 8.61806060551364
			},
			"parameters": [
				{
					"coefficient": 1.1315789473684212,
					"standard_error": 0.21978017221697452,
					"t_stat": 5.148685324767548,
					"p_value": 0.006750589714221045,
					"lower_95": 0.5213713639970732,
					"upper_95": 1.7417865307397693
				}
			]
		}
	};

	equalResultsKeyValue("MultipleRegressionAnalysis", "q", result, ans);
	equalResultsKeyValue("MultipleRegressionAnalysis", "n", result, ans);
	equalResultsKeyValue("MultipleRegressionAnalysis", "multiple_R", result, ans);
	equalResultsKeyValue("MultipleRegressionAnalysis", "R_square", result, ans);
	equalResultsKeyValue("MultipleRegressionAnalysis", "adjusted_R_square", result, ans);
	equalResultsKeyValue("MultipleRegressionAnalysis", "standard_error", result, ans);

	equalResultsArray("MultipleRegressionAnalysis ANOVA.regression", result.ANOVA.regression, ans.ANOVA.regression);
	equalResultsArray("MultipleRegressionAnalysis ANOVA.residual", result.ANOVA.residual, ans.ANOVA.residual);
	
	equalResultsArray("MultipleRegressionAnalysis regression_table.intercept", result.regression_table.intercept, ans.regression_table.intercept);
	equalResultsArray("MultipleRegressionAnalysis regression_table.parameters[0]", result.regression_table.parameters[0], ans.regression_table.parameters[0]);

}


System.stop();
