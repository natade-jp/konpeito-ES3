/**
 * The script is part of konpeito-ES3.
 * 
 * AUTHOR:
 *  natade (http://twitter.com/natadea)
 * 
 * LICENSE:
 *  The MIT license https://opensource.org/licenses/MIT
 */

import Polyfill from "./math/tools/Polyfill.js";
import typeComplex from "./math/core/Complex.js";
import typeMatrix from "./math/core/Matrix.js";
import typeProbability from "./math/core/tools/Probability.js";
import typeStatistics from "./math/core/tools/Statistics.js";
import typeLinearAlgebra from "./math/core/tools/LinearAlgebra.js";
import typeSignal from "./math/core/tools/Signal.js";
import typeDataAnalysis from "./math/tools/DataAnalysis.js";

/**
 * konpeito-ES3
 */
// @ts-ignore
// eslint-disable-next-line no-undef
const konpeitoES3 = {
	
	/**
	 * Complex
 	 * @type {typeof typeComplex}
	 */
	Complex : typeComplex,
	
	/**
	 * Matrix
 	 * @type {typeof typeMatrix}
	 */
	Matrix : typeMatrix,

	/**
	 * Probability
 	 * @type {typeProbability}
	 */
	Probability : typeProbability,

	/**
	 * Statistics
 	 * @type {typeStatistics}
	 */
	Statistics : typeStatistics,

	/**
	 * LinearAlgebra
 	 * @type {typeLinearAlgebra}
	 */
	LinearAlgebra : typeLinearAlgebra,

	/**
	 * DataAnalysis
 	 * @type {typeSignal}
	 */
	Signal : typeSignal,

	/**
	 * DataAnalysis
 	 * @type {typeDataAnalysis}
	 */
	DataAnalysis : typeDataAnalysis

};

export default konpeitoES3;

/**
 * globalThis
 * @private
 */
const global_var = ( function() { return this; } ).apply( null, [] );

if(!("Complex" in global_var)) {
	// @ts-ignore
	Complex = typeComplex;
}

if(!("Matrix" in global_var)) {
	// @ts-ignore
	Matrix = typeMatrix;
}

if(!("Probability" in global_var)) {
	// @ts-ignore
	Probability = typeProbability;
}

if(!("Statistics" in global_var)) {
	// @ts-ignore
	Statistics = typeStatistics;
}

if(!("LinearAlgebra" in global_var)) {
	// @ts-ignore
	LinearAlgebra = typeLinearAlgebra;
}

if(!("Signal" in global_var)) {
	// @ts-ignore
	Signal = typeSignal;
}

if(!("DataAnalysis" in global_var)) {
	// @ts-ignore
	DataAnalysis = typeDataAnalysis;
}


