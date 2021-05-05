﻿/**
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
	Matrix : typeMatrix

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
