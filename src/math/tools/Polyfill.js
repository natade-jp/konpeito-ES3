/**
 * The script is part of konpeito-ES3.
 * 
 * AUTHOR:
 *  natade (http://twitter.com/natadea)
 * 
 * LICENSE:
 *  The MIT license https://opensource.org/licenses/MIT
 */

/**
 * Class for improving compatibility.
 * @ignore
 */
export default class Polyfill {

	/**
	 * Improved compatibility
	 * @private
	 * @ignore
	 */
	static run() {
		if(!Math.imul) {
			Math.imul = function(x1, x2) {
				let y = ((x1 & 0xFFFF) * (x2 & 0xFFFF)) >>> 0;
				let b = (x1 & 0xFFFF) * (x2 >>> 16);
				y = (y + ((b & 0xFFFF) << 16)) >>> 0;
				b = (x1 >>> 16) * (x2 & 0xFFFF);
				y = (y + ((b & 0xFFFF) << 16));
				return (y & 0xFFFFFFFF);
			};
		}
		if(!Math.trunc) {
			Math.trunc = function(x) {
				return x > 0 ? Math.floor(x) : Math.ceil(x);
			};
		}
		if(!Math.cbrt) {
			Math.cbrt = function(x) {
				return Math.exp(Math.log(x) / 3.0);
			};
		}
		if(!Math.expm1) {
			Math.expm1 = function(x) {
				return Math.exp(x) - 1.0;
			};
		}
		if(!Math.log1p) {
			Math.log1p = function(x) {
				return Math.log(x + 1.0);
			};
		}
		if(!Math.log2) {
			Math.log2 = function(x) {
				return Math.log(x) / Math.log(2);
			};
		}
		if(!Math.log10) {
			Math.log10 = function(x) {
				return Math.log(x) / Math.log(10);
			};
		}
		if(Math.E === undefined) {
			// @ts-ignore
			// eslint-disable-next-line no-global-assign
			Math.E = 2.718281828459045;
		}
		if(Math.LN10 === undefined) {
			// @ts-ignore
			// eslint-disable-next-line no-global-assign
			Math.LN10 = Math.log(10);
		}
		if(Math.LN2 === undefined) {
			// @ts-ignore
			// eslint-disable-next-line no-global-assign
			Math.LN2 = Math.log(2);
		}
		if(Math.LOG2E === undefined) {
			// @ts-ignore
			// eslint-disable-next-line no-global-assign
			Math.LOG2E = Math.log2(Math.E);
		}
		if(Math.LOG10E === undefined) {
			// @ts-ignore
			// eslint-disable-next-line no-global-assign
			Math.LOG10E = Math.log10(Math.E);
		}
		if(Math.PI === undefined) {
			// @ts-ignore
			// eslint-disable-next-line no-global-assign
			Math.PI = 3.141592653589793;
		}
		if(Math.SQRT1_2 === undefined) {
			// @ts-ignore
			// eslint-disable-next-line no-global-assign
			Math.SQRT1_2 = Math.pow(0.5, 0.5);
		}
		if(Math.SQRT2 === undefined) {
			// @ts-ignore
			// eslint-disable-next-line no-global-assign
			Math.SQRT2 = Math.pow(2, 0.5);
		}
		if(!Number.isFinite) {
			Number.isFinite = isFinite;
		}
		if(!Number.isInteger) {
			Number.isInteger = function(x) {
				// @ts-ignore
				return isFinite(x) && Math.trunc(x) === x;
			};
		}
		if(!Number.isNaN) {
			Number.isNaN = isNaN;
		}
		if(Number.NaN === undefined) {
			// @ts-ignore
			// eslint-disable-next-line no-global-assign
			Number.NaN = NaN;
		}
		if(Number.EPSILON === undefined) {
			// @ts-ignore
			// eslint-disable-next-line no-global-assign
			Number.EPSILON = 2.220446049250313e-16;
		}
		if(Number.MIN_SAFE_INTEGER === undefined) {
			// @ts-ignore
			// eslint-disable-next-line no-global-assign
			Number.MIN_SAFE_INTEGER = -9007199254740991;
		}
		if(Number.MAX_SAFE_INTEGER === undefined) {
			// @ts-ignore
			// eslint-disable-next-line no-global-assign
			Number.MAX_SAFE_INTEGER = 9007199254740991;
		}
		if(!Number.parseFloat) {
			Number.parseFloat = parseFloat;
		}
		if(!Number.parseInt) {
			Number.parseInt = parseInt;
		}
		if(!Number.isSafeInteger) {
			// @ts-ignore
			Number.isSafeInteger = function(x) {
				// @ts-ignore
				return Number.isInteger(x) && Math.abs(x) <= Number.MAX_SAFE_INTEGER;
			};
		}

		// WSH 用
		// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
		// 2番目の引数が省略された場合の動作の仕様を合わせる
		const splice_buffer = Array.prototype.splice;
		Array.prototype.splice = function() {
			const x = [];
			for(var i = 0 ; i < arguments.length ; i++) {
				x.push(arguments[i]);
			}
			if(arguments.length === 1) {
				x.push(this.length - arguments[0]);
			}
			return splice_buffer.apply(this, x);
		};

	}
}

// @ts-ignore
Polyfill.run();

