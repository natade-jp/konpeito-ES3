/**
 * konpeitoWSH
 */
declare const konpeitoWSH: any;

/**
 * Complex type argument.
 * - Complex
 * - number
 * - boolean
 * - string
 * - Array<number>
 * - {_re:number,_im:number}
 * - {doubleValue:number}
 * - {toString:function}
 *
 * Initialization can be performed as follows.
 * - 1200, "1200", "12e2", "1.2e3"
 * - "3 + 4i", "4j + 3", [3, 4].
 * @typedef {Complex|number|boolean|string|Array<number>|{_re:number,_im:number}|{doubleValue:number}|{toString:function}} KComplexInputData
 */
declare type KComplexInputData = Complex | number | boolean | string | number[] | any | any | any;

/**
 * Create a complex number.
 *
 * Initialization can be performed as follows.
 * - 1200, "1200", "12e2", "1.2e3"
 * - "3 + 4i", "4j + 3", [3, 4].
 * @param {KComplexInputData} number - Complex number. See how to use the function.
 */
declare class Complex {
    constructor(number: KComplexInputData);
    /**
     * Create an entity object of this class.
     * @param {KComplexInputData} number
     * @returns {Complex}
     */
    static create(number: KComplexInputData): Complex;
    /**
     * Convert number to Complex type.
     * @param {KComplexInputData} number
     * @returns {Complex}
     */
    static valueOf(number: KComplexInputData): Complex;
    /**
     * Deep copy.
     * @returns {Complex}
     */
    clone(): Complex;
    /**
     * Convert to string.
     * @returns {string}
     */
    toString(): string;
    /**
     * Convert to JSON.
     * @returns {string}
     */
    toJSON(): string;
    /**
     * The real part of this Comlex.
     * @returns {number} real(A)
     */
    real(): number;
    /**
     * The imaginary part of this Comlex.
     * @returns {number} imag(A)
     */
    imag(): number;
    /**
     * norm.
     * @returns {number} |A|
     */
    norm(): number;
    /**
     * The argument of this complex number.
     * @returns {number} arg(A)
     */
    arg(): number;
    /**
     * Return number of decimal places for real and imaginary parts.
     * - Used to make a string.
     * @returns {number} Number of decimal places.
     */
    getDecimalPosition(): number;
    /**
     * The positive or negative sign of this number.
     * - +1 if positive, -1 if negative, 0 if 0.
     * @returns {Complex}
     */
    sign(): Complex;
    /**
     * Add.
     * @param {KComplexInputData} number
     * @returns {Complex} A + B
     */
    add(number: KComplexInputData): Complex;
    /**
     * Subtract.
     * @param {KComplexInputData} number
     * @returns {Complex} A - B
     */
    sub(number: KComplexInputData): Complex;
    /**
     * Multiply.
     * @param {KComplexInputData} number
     * @returns {Complex} A * B
     */
    mul(number: KComplexInputData): Complex;
    /**
     * Inner product/Dot product.
     * @param {KComplexInputData} number
     * @returns {Complex} A * conj(B)
     */
    dot(number: KComplexInputData): Complex;
    /**
     * Divide.
     * @param {KComplexInputData} number
     * @returns {Complex} A / B
     */
    div(number: KComplexInputData): Complex;
    /**
     * Modulo, positive remainder of division.
     * - Result has same sign as the Dividend.
     * @param {KComplexInputData} number - Divided value (real number only).
     * @returns {Complex} A rem B
     */
    rem(number: KComplexInputData): Complex;
    /**
     * Modulo, positive remainder of division.
     * - Result has same sign as the Divisor.
     * @param {KComplexInputData} number - Divided value (real number only).
     * @returns {Complex} A mod B
     */
    mod(number: KComplexInputData): Complex;
    /**
     * Inverse number of this value.
     * @returns {Complex} 1 / A
     */
    inv(): Complex;
    /**
     * boolean value.
     * @returns {boolean}
     */
    booleanValue(): boolean;
    /**
     * integer value.
     * @returns {number}
     */
    intValue(): number;
    /**
     * floating point.
     * @returns {number}
     */
    doubleValue(): number;
    /**
     * return Complex.
     * @returns {Complex}
     */
    toComplex(): Complex;
    /**
     * Equals.
     * @param {KComplexInputData} number
     * @param {KComplexInputData} [tolerance=Number.EPSILON] - Calculation tolerance of calculation.
     * @returns {boolean} A === B
     */
    equals(number: KComplexInputData, tolerance?: KComplexInputData): boolean;
    /**
     * Numeric type match.
     * @param {KComplexInputData} number
     * @returns {boolean}
     */
    equalsState(number: KComplexInputData): boolean;
    /**
     * Compare values.
     * @param {KComplexInputData} number
     * @param {KComplexInputData} [tolerance=Number.EPSILON] - Calculation tolerance of calculation.
     * @returns {number} A > B ? 1 : (A === B ? 0 : -1)
     */
    compareTo(number: KComplexInputData, tolerance?: KComplexInputData): number;
    /**
     * Maximum number.
     * @param {KComplexInputData} number
     * @returns {Complex} max([A, B])
     */
    max(number: KComplexInputData): Complex;
    /**
     * Minimum number.
     * @param {KComplexInputData} number
     * @returns {Complex} min([A, B])
     */
    min(number: KComplexInputData): Complex;
    /**
     * Clip number within range.
     * @param {KComplexInputData} min
     * @param {KComplexInputData} max
     * @returns {Complex} min(max(x, min), max)
     */
    clip(min: KComplexInputData, max: KComplexInputData): Complex;
    /**
     * Floor.
     * @returns {Complex} floor(A)
     */
    floor(): Complex;
    /**
     * Ceil.
     * @returns {Complex} ceil(A)
     */
    ceil(): Complex;
    /**
     * Rounding to the nearest integer.
     * @returns {Complex} round(A)
     */
    round(): Complex;
    /**
     * To integer rounded down to the nearest.
     * @returns {Complex} fix(A), trunc(A)
     */
    fix(): Complex;
    /**
     * Fraction.
     * @returns {Complex} fract(A)
     */
    fract(): Complex;
    /**
     * Absolute value.
     * @returns {Complex} abs(A)
     */
    abs(): Complex;
    /**
     * Complex conjugate.
     * @returns {Complex} real(A) - imag(A)j
     */
    conj(): Complex;
    /**
     * this * -1
     * @returns {Complex} -A
     */
    negate(): Complex;
    /**
     * Power function.
     * @param {KComplexInputData} number
     * @returns {Complex} pow(A, B)
     */
    pow(number: KComplexInputData): Complex;
    /**
     * Square.
     * @returns {Complex} pow(A, 2)
     */
    square(): Complex;
    /**
     * Square root.
     * @returns {Complex} sqrt(A)
     */
    sqrt(): Complex;
    /**
     * Cube root.
     * @param {KComplexInputData} [n=0] - Value type(0,1,2)
     * @returns {Complex} cbrt(A)
     */
    cbrt(n?: KComplexInputData): Complex;
    /**
     * Reciprocal square root.
     * @returns {Complex} rsqrt(A)
     */
    rsqrt(): Complex;
    /**
     * Logarithmic function.
     * @returns {Complex} log(A)
     */
    log(): Complex;
    /**
     * Exponential function.
     * @returns {Complex} exp(A)
     */
    exp(): Complex;
    /**
     * e^x - 1
     * @returns {Complex} expm1(A)
     */
    expm1(): Complex;
    /**
     * ln(1 + x)
     * @returns {Complex} log1p(A)
     */
    log1p(): Complex;
    /**
     * log_2(x)
     * @returns {Complex} log2(A)
     */
    log2(): Complex;
    /**
     * log_10(x)
     * @returns {Complex} log10(A)
     */
    log10(): Complex;
    /**
     * Sine function.
     * @returns {Complex} sin(A)
     */
    sin(): Complex;
    /**
     * Cosine function.
     * @returns {Complex} cos(A)
     */
    cos(): Complex;
    /**
     * Tangent function.
     * @returns {Complex} tan(A)
     */
    tan(): Complex;
    /**
     * Atan (arc tangent) function.
     * - Return the values of [-PI/2, PI/2].
     * @returns {Complex} atan(A)
     */
    atan(): Complex;
    /**
     * Atan (arc tangent) function.
     * Return the values of [-PI, PI] .
     * Supports only real numbers.
     * @param {KComplexInputData} [number] - X
     * @returns {Complex} atan2(Y, X)
     */
    atan2(number?: KComplexInputData): Complex;
    /**
     * Arc sine function.
     * @returns {Complex} asin(A)
     */
    asin(): Complex;
    /**
     * Arc cosine function.
     * @returns {Complex} acos(A)
     */
    acos(): Complex;
    /**
     * Hyperbolic sine function.
     * @returns {Complex} sinh(A)
     */
    sinh(): Complex;
    /**
     * Inverse hyperbolic sine function.
     * @returns {Complex} asinh(A)
     */
    asinh(): Complex;
    /**
     * Hyperbolic cosine function.
     * @returns {Complex} cosh(A)
     */
    cosh(): Complex;
    /**
     * Inverse hyperbolic cosine function.
     * @returns {Complex} acosh(A)
     */
    acosh(): Complex;
    /**
     * Hyperbolic tangent function.
     * @returns {Complex} tanh(A)
     */
    tanh(): Complex;
    /**
     * Inverse hyperbolic tangent function.
     * @returns {Complex} atanh(A)
     */
    atanh(): Complex;
    /**
     * Secant function.
     * @returns {Complex} sec(A)
     */
    sec(): Complex;
    /**
     * Reverse secant function.
     * @returns {Complex} asec(A)
     */
    asec(): Complex;
    /**
     * Hyperbolic secant function.
     * @returns {Complex} sech(A)
     */
    sech(): Complex;
    /**
     * Inverse hyperbolic secant function.
     * @returns {Complex} asech(A)
     */
    asech(): Complex;
    /**
     * Cotangent function.
     * @returns {Complex} cot(A)
     */
    cot(): Complex;
    /**
     * Inverse cotangent function.
     * @returns {Complex} acot(A)
     */
    acot(): Complex;
    /**
     * Hyperbolic cotangent function.
     * @returns {Complex} coth(A)
     */
    coth(): Complex;
    /**
     * Inverse hyperbolic cotangent function.
     * @returns {Complex} acoth(A)
     */
    acoth(): Complex;
    /**
     * Cosecant function.
     * @returns {Complex} csc(A)
     */
    csc(): Complex;
    /**
     * Inverse cosecant function.
     * @returns {Complex} acsc(A)
     */
    acsc(): Complex;
    /**
     * Hyperbolic cosecant function.
     * @returns {Complex} csch(A)
     */
    csch(): Complex;
    /**
     * Inverse hyperbolic cosecant function.
     * @returns {Complex} acsch(A)
     */
    acsch(): Complex;
    /**
     * Logit function.
     * @returns {Complex} logit(A)
     */
    logit(): Complex;
    /**
     * Normalized sinc function.
     * @returns {Complex} sinc(A)
     */
    sinc(): Complex;
    /**
     * Create random values [0, 1) with uniform random numbers.
     * @param {Random} [random] - Class for creating random numbers.
     * @returns {Complex}
     */
    static rand(random?: Random): Complex;
    /**
     * Create random values with normal distribution.
     * @param {Random} [random] - Class for creating random numbers.
     * @returns {Complex}
     */
    static randn(random?: Random): Complex;
    /**
     * Return true if the value is integer.
     * @param {KComplexInputData} [tolerance=Number.EPSILON] - Calculation tolerance of calculation.
     * @returns {boolean}
     */
    isInteger(tolerance?: KComplexInputData): boolean;
    /**
     * Returns true if the vallue is complex integer (including normal integer).
     * @param {KComplexInputData} [tolerance=Number.EPSILON] - Calculation tolerance of calculation.
     * @returns {boolean} real(A) === integer && imag(A) === integer
     */
    isComplexInteger(tolerance?: KComplexInputData): boolean;
    /**
     * this === 0
     * @param {KComplexInputData} [tolerance=Number.EPSILON] - Calculation tolerance of calculation.
     * @returns {boolean} A === 0
     */
    isZero(tolerance?: KComplexInputData): boolean;
    /**
     * this === 1
     * @param {KComplexInputData} [tolerance=Number.EPSILON] - Calculation tolerance of calculation.
     * @returns {boolean} A === 1
     */
    isOne(tolerance?: KComplexInputData): boolean;
    /**
     * Returns true if the vallue is complex number (imaginary part is not 0).
     * @param {KComplexInputData} [tolerance=Number.EPSILON] - Calculation tolerance of calculation.
     * @returns {boolean} imag(A) !== 0
     */
    isComplex(tolerance?: KComplexInputData): boolean;
    /**
     * Return true if the value is real number.
     * @param {KComplexInputData} [tolerance=Number.EPSILON] - Calculation tolerance of calculation.
     * @returns {boolean} imag(A) === 0
     */
    isReal(tolerance?: KComplexInputData): boolean;
    /**
     * this === NaN
     * @returns {boolean} isNaN(A)
     */
    isNaN(): boolean;
    /**
     * Return true if this real part of the complex positive.
     * @returns {boolean} real(x) > 0
     */
    isPositive(): boolean;
    /**
     * real(this) < 0
     * @returns {boolean} real(x) < 0
     */
    isNegative(): boolean;
    /**
     * real(this) >= 0
     * @returns {boolean} real(x) >= 0
     */
    isNotNegative(): boolean;
    /**
     * this === Infinity
     * @returns {boolean} isPositiveInfinity(A)
     */
    isPositiveInfinity(): boolean;
    /**
     * this === -Infinity
     * @returns {boolean} isNegativeInfinity(A)
     */
    isNegativeInfinity(): boolean;
    /**
     * this === Infinity or -Infinity
     * @returns {boolean} isPositiveInfinity(A) || isNegativeInfinity(A)
     */
    isInfinite(): boolean;
    /**
     * Return true if the value is finite number.
     * @returns {boolean} !isNaN(A) && !isInfinite(A)
     */
    isFinite(): boolean;
    /**
     * Log-gamma function.
     * - Calculate from real values.
     * @returns {Complex}
     */
    gammaln(): Complex;
    /**
     * Gamma function.
     * - Calculate from real values.
     * @returns {Complex}
     */
    gamma(): Complex;
    /**
     * Incomplete gamma function.
     * - Calculate from real values.
     * @param {KComplexInputData} a
     * @param {string} [tail="lower"] - lower (default) , "upper"
     * @returns {Complex}
     */
    gammainc(a: KComplexInputData, tail?: string): Complex;
    /**
     * Probability density function (PDF) of the gamma distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} k - Shape parameter.
     * @param {KComplexInputData} s - Scale parameter.
     * @returns {Complex}
     */
    gampdf(k: KComplexInputData, s: KComplexInputData): Complex;
    /**
     * Cumulative distribution function (CDF) of gamma distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} k - Shape parameter.
     * @param {KComplexInputData} s - Scale parameter.
     * @returns {Complex}
     */
    gamcdf(k: KComplexInputData, s: KComplexInputData): Complex;
    /**
     * Inverse function of cumulative distribution function (CDF) of gamma distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} k - Shape parameter.
     * @param {KComplexInputData} s - Scale parameter.
     * @returns {Complex}
     */
    gaminv(k: KComplexInputData, s: KComplexInputData): Complex;
    /**
     * Beta function.
     * - Calculate from real values.
     * @param {KComplexInputData} y
     * @returns {Complex}
     */
    beta(y: KComplexInputData): Complex;
    /**
     * Incomplete beta function.
     * - Calculate from real values.
     * @param {KComplexInputData} a
     * @param {KComplexInputData} b
     * @param {string} [tail="lower"] - lower (default) , "upper"
     * @returns {Complex}
     */
    betainc(a: KComplexInputData, b: KComplexInputData, tail?: string): Complex;
    /**
     * Probability density function (PDF) of beta distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} a
     * @param {KComplexInputData} b
     * @returns {Complex}
     */
    betapdf(a: KComplexInputData, b: KComplexInputData): Complex;
    /**
     * Cumulative distribution function (CDF) of beta distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} a
     * @param {KComplexInputData} b
     * @returns {Complex}
     */
    betacdf(a: KComplexInputData, b: KComplexInputData): Complex;
    /**
     * Inverse function of cumulative distribution function (CDF) of beta distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} a
     * @param {KComplexInputData} b
     * @returns {Complex}
     */
    betainv(a: KComplexInputData, b: KComplexInputData): Complex;
    /**
     * Factorial function, x!.
     * - Calculate from real values.
     * @returns {Complex}
     */
    factorial(): Complex;
    /**
     * Binomial coefficient, number of all combinations, nCk.
     * - Calculate from real values.
     * @param {KComplexInputData} k
     * @returns {Complex}
     */
    nchoosek(k: KComplexInputData): Complex;
    /**
     * Error function.
     * - Calculate from real values.
     * @returns {Complex}
     */
    erf(): Complex;
    /**
     * Complementary error function.
     * - Calculate from real values.
     * @returns {Complex}
     */
    erfc(): Complex;
    /**
     * Inverse function of Error function.
     * - Calculate from real values.
     * @returns {Complex}
     */
    erfinv(): Complex;
    /**
     * Inverse function of Complementary error function.
     * - Calculate from real values.
     * @returns {Complex}
     */
    erfcinv(): Complex;
    /**
     * Probability density function (PDF) of normal distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} [u=0.0] - Average value.
     * @param {KComplexInputData} [s=1.0] - Variance value.
     * @returns {Complex}
     */
    normpdf(u?: KComplexInputData, s?: KComplexInputData): Complex;
    /**
     * Cumulative distribution function (CDF) of normal distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} [u=0.0] - Average value.
     * @param {KComplexInputData} [s=1.0] - Variance value.
     * @returns {Complex}
     */
    normcdf(u?: KComplexInputData, s?: KComplexInputData): Complex;
    /**
     * Inverse function of cumulative distribution function (CDF) of normal distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} [u=0.0] - Average value.
     * @param {KComplexInputData} [s=1.0] - Variance value.
     * @returns {Complex}
     */
    norminv(u?: KComplexInputData, s?: KComplexInputData): Complex;
    /**
     * Probability density function (PDF) of binomial distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} n
     * @param {KComplexInputData} p
     * @returns {Complex}
     */
    binopdf(n: KComplexInputData, p: KComplexInputData): Complex;
    /**
     * Cumulative distribution function (CDF) of binomial distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} n
     * @param {KComplexInputData} p
     * @param {string} [tail="lower"] - lower (default) , "upper"
     * @returns {Complex}
     */
    binocdf(n: KComplexInputData, p: KComplexInputData, tail?: string): Complex;
    /**
     * Inverse function of cumulative distribution function (CDF) of binomial distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} n
     * @param {KComplexInputData} p
     * @returns {Complex}
     */
    binoinv(n: KComplexInputData, p: KComplexInputData): Complex;
    /**
     * Probability density function (PDF) of Poisson distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} lambda
     * @returns {Complex}
     */
    poisspdf(lambda: KComplexInputData): Complex;
    /**
     * Cumulative distribution function (CDF) of Poisson distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} lambda
     * @returns {Complex}
     */
    poisscdf(lambda: KComplexInputData): Complex;
    /**
     * Inverse function of cumulative distribution function (CDF) of Poisson distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} lambda
     * @returns {Complex}
     */
    poissinv(lambda: KComplexInputData): Complex;
    /**
     * Probability density function (PDF) of Student's t-distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} v - The degrees of freedom. (DF)
     * @returns {Complex}
     */
    tpdf(v: KComplexInputData): Complex;
    /**
     * Cumulative distribution function (CDF) of Student's t-distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} v - The degrees of freedom. (DF)
     * @returns {Complex}
     */
    tcdf(v: KComplexInputData): Complex;
    /**
     * Inverse of cumulative distribution function (CDF) of Student's t-distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} v - The degrees of freedom. (DF)
     * @returns {Complex}
     */
    tinv(v: KComplexInputData): Complex;
    /**
     * Cumulative distribution function (CDF) of Student's t-distribution that can specify tail.
     * - Calculate from real values.
     * @param {KComplexInputData} v - The degrees of freedom. (DF)
     * @param {KComplexInputData} tails - Tail. (1 = the one-tailed distribution, 2 =  the two-tailed distribution.)
     * @returns {Complex}
     */
    tdist(v: KComplexInputData, tails: KComplexInputData): Complex;
    /**
     * Inverse of cumulative distribution function (CDF) of Student's t-distribution in two-sided test.
     * - Calculate from real values.
     * @param {KComplexInputData} v - The degrees of freedom. (DF)
     * @returns {Complex}
     */
    tinv2(v: KComplexInputData): Complex;
    /**
     * Probability density function (PDF) of chi-square distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} k - The degrees of freedom. (DF)
     * @returns {Complex}
     */
    chi2pdf(k: KComplexInputData): Complex;
    /**
     * Cumulative distribution function (CDF) of chi-square distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} k - The degrees of freedom. (DF)
     * @returns {Complex}
     */
    chi2cdf(k: KComplexInputData): Complex;
    /**
     * Inverse function of cumulative distribution function (CDF) of chi-square distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} k - The degrees of freedom. (DF)
     * @returns {Complex}
     */
    chi2inv(k: KComplexInputData): Complex;
    /**
     * Probability density function (PDF) of F-distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} d1 - The degree of freedom of the molecules.
     * @param {KComplexInputData} d2 - The degree of freedom of the denominator
     * @returns {Complex}
     */
    fpdf(d1: KComplexInputData, d2: KComplexInputData): Complex;
    /**
     * Cumulative distribution function (CDF) of F-distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} d1 - The degree of freedom of the molecules.
     * @param {KComplexInputData} d2 - The degree of freedom of the denominator
     * @returns {Complex}
     */
    fcdf(d1: KComplexInputData, d2: KComplexInputData): Complex;
    /**
     * Inverse function of cumulative distribution function (CDF) of F-distribution.
     * - Calculate from real values.
     * @param {KComplexInputData} d1 - The degree of freedom of the molecules.
     * @param {KComplexInputData} d2 - The degree of freedom of the denominator
     * @returns {Complex}
     */
    finv(d1: KComplexInputData, d2: KComplexInputData): Complex;
    /**
     * Logical AND.
     * - Calculated as an integer.
     * @param {KComplexInputData} number
     * @returns {Complex} A & B
     */
    and(number: KComplexInputData): Complex;
    /**
     * Logical OR.
     * - Calculated as an integer.
     * @param {KComplexInputData} number
     * @returns {Complex} A | B
     */
    or(number: KComplexInputData): Complex;
    /**
     * Logical Exclusive-OR.
     * - Calculated as an integer.
     * @param {KComplexInputData} number
     * @returns {Complex} A ^ B
     */
    xor(number: KComplexInputData): Complex;
    /**
     * Logical Not. (mutable)
     * - Calculated as an integer.
     * @returns {Complex} !A
     */
    not(): Complex;
    /**
     * this << n
     * - Calculated as an integer.
     * @param {KComplexInputData} n
     * @returns {Complex} A << n
     */
    shift(n: KComplexInputData): Complex;
    /**
     * Multiply a multiple of ten.
     * @param {KComplexInputData} n
     * @returns {Complex} x * 10^n
     */
    scaleByPowerOfTen(n: KComplexInputData): Complex;
    /**
     * The positive or negative sign of this number.
     * - +1 if positive, -1 if negative, 0 if 0.
     * @returns {Complex}
     */
    signum(): Complex;
    /**
     * Subtract.
     * @param {KComplexInputData} number
     * @returns {Complex} A - B
     */
    subtract(number: KComplexInputData): Complex;
    /**
     * Multiply.
     * @param {KComplexInputData} number
     * @returns {Complex} A * B
     */
    multiply(number: KComplexInputData): Complex;
    /**
     * Divide.
     * @param {KComplexInputData} number
     * @returns {Complex} fix(A / B)
     */
    divide(number: KComplexInputData): Complex;
    /**
     * Remainder of division.
     * - Result has same sign as the Dividend.
     * @param {KComplexInputData} number
     * @returns {Complex} A % B
     */
    remainder(number: KComplexInputData): Complex;
    /**
     * To integer rounded down to the nearest.
     * @returns {Complex} fix(A), trunc(A)
     */
    trunc(): Complex;
    /**
     * 1
     * @type {Complex}
     */
    static ONE: Complex;
    /**
     * 2
     * @type {Complex}
     */
    static TWO: Complex;
    /**
     * 10
     * @type {Complex}
     */
    static TEN: Complex;
    /**
     * 0
     * @type {Complex}
     */
    static ZERO: Complex;
    /**
     * -1
     * @type {Complex}
     */
    static MINUS_ONE: Complex;
    /**
     * i, j
     * @type {Complex}
     */
    static I: Complex;
    /**
     * - i, - j
     * @type {Complex}
     */
    static MINUS_I: Complex;
    /**
     * PI.
     * @type {Complex}
     */
    static PI: Complex;
    /**
     * 0.25 * PI.
     * @type {Complex}
     */
    static QUARTER_PI: Complex;
    /**
     * 0.5 * PI.
     * @type {Complex}
     */
    static HALF_PI: Complex;
    /**
     * 2 * PI.
     * @type {Complex}
     */
    static TWO_PI: Complex;
    /**
     * E, Napier's constant.
     * @type {Complex}
     */
    static E: Complex;
    /**
     * log_e(2)
     * @type {Complex}
     */
    static LN2: Complex;
    /**
     * log_e(10)
     * @type {Complex}
     */
    static LN10: Complex;
    /**
     * log_2(e)
     * @type {Complex}
     */
    static LOG2E: Complex;
    /**
     * log_10(e)
     * @type {Complex}
     */
    static LOG10E: Complex;
    /**
     * sqrt(2)
     * @type {Complex}
     */
    static SQRT2: Complex;
    /**
     * sqrt(0.5)
     * @type {Complex}
     */
    static SQRT1_2: Complex;
    /**
     * 0.5
     * @type {Complex}
     */
    static HALF: Complex;
    /**
     * Positive infinity.
     * @type {Complex}
     */
    static POSITIVE_INFINITY: Complex;
    /**
     * Negative Infinity.
     * @type {Complex}
     */
    static NEGATIVE_INFINITY: Complex;
    /**
     * Not a Number.
     * @type {Complex}
     */
    static NaN: Complex;
}

/**
 * Matrix type argument.
 * - Matrix
 * - Complex
 * - number
 * - string
 * - Array<string|number|Complex|Matrix>
 * - Array<Array<string|number|Complex|Matrix>>
 * - {doubleValue:number}
 * - {toString:function}
 *
 * Initialization can be performed as follows.
 * - 10, "10", "3 + 4j", "[ 1 ]", "[1, 2, 3]", "[1 2 3]", [1, 2, 3],
 * - [[1, 2], [3, 4]], "[1 2; 3 4]", "[1+2i 3+4i]",
 * - "[1:10]", "[1:2:3]" (MATLAB / Octave / Scilab compatible).
 * @typedef {Matrix|Complex|number|string|Array<string|number|Complex|Matrix>|Array<Array<string|number|Complex|Matrix>>|{doubleValue:number}|{toString:function}} KMatrixInputData
 */
declare type KMatrixInputData = Matrix | Complex | number | string | (string | number | Complex | Matrix)[] | (string | number | Complex | Matrix)[][] | any | any;

/**
 * Collection of calculation settings for matrix.
 * - Available options vary depending on the method.
 * @typedef {Object} KMatrixSettings
 * @property {?string|?number} [dimension="auto"] Calculation direction. 0/"auto", 1/"row", 2/"column", 3/"both".
 * @property {Object} [correction] Correction value. For statistics. 0(unbiased), 1(sample).
 */
declare type KMatrixSettings = {
    dimension?: string | number;
    correction?: any;
};

/**
 * Create a complex matrix.
 * Initialization can be performed as follows.
 * - 10, "10", "3 + 4j", "[ 1 ]", "[1, 2, 3]", "[1 2 3]", [1, 2, 3],
 * - [[1, 2], [3, 4]], "[1 2; 3 4]", "[1+2i 3+4i]",
 * - "[1:10]", "[1:2:3]" (MATLAB / Octave / Scilab compatible).
 * @param {KMatrixInputData} number - Complex matrix. See how to use the function.
 */
declare class Matrix {
    constructor(number: KMatrixInputData);
    /**
     * Create an entity object of this class.
     * @param {KMatrixInputData} number
     * @returns {Matrix}
     */
    static create(number: KMatrixInputData): Matrix;
    /**
     * Convert number to Matrix type.
     * @param {KMatrixInputData} number
     * @returns {Matrix}
     */
    static valueOf(number: KMatrixInputData): Matrix;
    /**
     * Delete cache.
     */
    _clearCash(): void;
    /**
     * Deep copy.
     * @returns {Matrix}
     */
    clone(): Matrix;
    /**
     * Convert to string.
     * @returns {string}
     */
    toString(): string;
    /**
     * Convert to string in one line.
     * @returns {string}
     */
    toOneLineString(): string;
    /**
     * Convert to JSON.
     * @returns {string}
     */
    toJSON(): string;
    /**
     * Equals.
     * @param {KMatrixInputData} number
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {boolean} A === B
     */
    equals(number: KMatrixInputData, tolerance?: KMatrixInputData): boolean;
    /**
     * Array of real parts of elements in matrix.
     * @returns {Array<Array<number>>}
     */
    getNumberMatrixArray(): number[][];
    /**
     * Complex array of complex numbers of each element of the matrix.
     * @returns {Array<Array<Complex>>}
     */
    getComplexMatrixArray(): Complex[][];
    /**
     * Perform the same process on all elements in the matrix.
     * @param {function(Complex, number, number): ?Object } eachfunc - Function(num, row, col)
     * @returns {Matrix} Matrix after function processing.
     */
    cloneMatrixDoEachCalculation(eachfunc: (...params: any[]) => any): Matrix;
    /**
     * Create Matrix with specified initialization for each element in matrix.
     * @param {function(number, number): ?Object } eachfunc - Function(row, col)
     * @param {KMatrixInputData} dimension - Number of dimensions or rows.
     * @param {KMatrixInputData} [column_length=dimension] - Number of columns.
     * @returns {Matrix} Matrix after function processing.
     */
    static createMatrixDoEachCalculation(eachfunc: (...params: any[]) => any, dimension: KMatrixInputData, column_length?: KMatrixInputData): Matrix;
    /**
     * Treat the columns of the matrix as vectors and execute the same process.
     * - If the matrix is a row vector, it performs the same processing for the row vector.
     * @param {function(Array<Complex>): Array<Complex>} array_function - Function(array)
     * @returns {Matrix} Matrix after function processing.
     */
    eachVectorAuto(array_function: (...params: any[]) => any): Matrix;
    /**
     * Treat the rows and columns of the matrix as vectors and perform the same processing.
     * 1. First run the same process for the row.
     * 2. Finally perform the same processing for the column.
     * @param {function(Array<Complex>): Array<Complex>} array_function - Function(array)
     * @returns {Matrix} Matrix after function processing.
     */
    eachVectorBoth(array_function: (...params: any[]) => any): Matrix;
    /**
     * Treat the rows of the matrix as vectors and execute the same process.
     * @param {function(Array<Complex>): Array<Complex>} array_function - Function(array)
     * @returns {Matrix} Matrix after function processing.
     */
    eachVectorRow(array_function: (...params: any[]) => any): Matrix;
    /**
     * Treat the columns of the matrix as vectors and execute the same process.
     * @param {function(Array<Complex>): Array<Complex>} array_function - Function(array)
     * @returns {Matrix} Matrix after function processing.
     */
    eachVectorColumn(array_function: (...params: any[]) => any): Matrix;
    /**
     * Treat the rows and columns of the matrix as vectors and perform the same processing.
     * The arguments of the method can switch the direction of the matrix to be executed.
     * @param {function(Array<Complex>): Array<Complex>} array_function - Function(array)
     * @param {string|number} [dimension="auto"] - 0/"auto", 1/"row", 2/"column", 3/"both"
     * @returns {Matrix} Matrix after function processing.
     */
    eachVector(array_function: (...params: any[]) => any, dimension?: string | number): Matrix;
    /**
     * Extract the specified part of the matrix.
     * @param {KMatrixInputData} row - A vector containing the row numbers to extract from this matrix. If you specify ":" select all rows.
     * @param {KMatrixInputData} col - A vector containing the column numbers to extract from this matrix. If you specify ":" select all columns.
     * @param {boolean} [isUpOffset=false] - Set offset of matrix position to 1 with true.
     * @returns {Matrix}
     */
    getMatrix(row: KMatrixInputData, col: KMatrixInputData, isUpOffset?: boolean): Matrix;
    /**
     * Change specified element in matrix.
     * @param {KMatrixInputData} row - A vector containing the row numbers to replace in this matrix. If you specify ":" select all rows.
     * @param {KMatrixInputData} col - A vector containing the column numbers to replace in this matrix. If you specify ":" select all columns.
     * @param {KMatrixInputData} replace - Matrix to be replaced.
     * @param {boolean} [isUpOffset=false] - Set offset of matrix position to 1 with true.
     * @returns {Matrix}
     */
    setMatrix(row: KMatrixInputData, col: KMatrixInputData, replace: KMatrixInputData, isUpOffset?: boolean): Matrix;
    /**
     * Returns the specified element in the matrix.
     * Each element of the matrix is composed of complex numbers.
     * @param {KMatrixInputData} row_or_pos - If this is a matrix, the row number. If this is a vector, the address.
     * @param {KMatrixInputData} [col] - If this is a matrix, the column number.
     * @returns {Complex}
     */
    getComplex(row_or_pos: KMatrixInputData, col?: KMatrixInputData): Complex;
    /**
     * Boolean value of the first element of the matrix.
     * @returns {boolean}
     */
    booleanValue(): boolean;
    /**
     * Integer value of the first element of the matrix.
     * @returns {number}
     */
    intValue(): number;
    /**
     * Real value of first element of the matrix.
     * @returns {number}
     */
    doubleValue(): number;
    /**
     * return Complex.
     * @returns {Complex}
     */
    toComplex(): Complex;
    /**
     * return Matrix.
     * @returns {Matrix}
     */
    toMatrix(): Matrix;
    /**
     * First element of this matrix.
     * @returns {Complex}
     */
    scalar(): Complex;
    /**
     * Maximum size of rows or columns in the matrix.
     * @returns {number}
     */
    length(): number;
    /**
     * Number of columns in the matrix.
     * @returns {number}
     */
    width(): number;
    /**
     * Number of rows in matrix.
     * @returns {number}
     */
    height(): number;
    /**
     * 1-norm.
     * @returns {number}
     */
    norm1(): number;
    /**
     * 2-norm.
     * @returns {number}
     */
    norm2(): number;
    /**
     * p-norm.
     * @param {KMatrixInputData} [p=2]
     * @returns {number}
     */
    norm(p?: KMatrixInputData): number;
    /**
     * Condition number of the matrix
     * @param {KMatrixInputData} [p=2]
     * @returns {number}
     */
    cond(p?: KMatrixInputData): number;
    /**
     * Inverse condition number.
     * @returns {number}
     */
    rcond(): number;
    /**
     * Rank.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {number} rank(A)
     */
    rank(tolerance?: KMatrixInputData): number;
    /**
     * Trace of a matrix.
     * Sum of diagonal elements.
     * @returns {Complex} trace(A)
     */
    trace(): Complex;
    /**
     * Determinant.
     * @returns {Matrix} |A|
     */
    det(): Matrix;
    /**
     * Creates a matrix composed of the specified number.
     * @param {KMatrixInputData} number - Value after initialization.
     * @param {KMatrixInputData} dimension - Number of dimensions or rows.
     * @param {KMatrixInputData} [column_length] - Number of columns.
     * @returns {Matrix}
     */
    static memset(number: KMatrixInputData, dimension: KMatrixInputData, column_length?: KMatrixInputData): Matrix;
    /**
     * Return identity matrix.
     * @param {KMatrixInputData} dimension - Number of dimensions or rows.
     * @param {KMatrixInputData} [column_length] - Number of columns.
     * @returns {Matrix}
     */
    static eye(dimension: KMatrixInputData, column_length?: KMatrixInputData): Matrix;
    /**
     * Create zero matrix.
     * @param {KMatrixInputData} dimension - Number of dimensions or rows.
     * @param {KMatrixInputData} [column_length] - Number of columns.
     * @returns {Matrix}
     */
    static zeros(dimension: KMatrixInputData, column_length?: KMatrixInputData): Matrix;
    /**
     * Create a matrix of all ones.
     * @param {KMatrixInputData} dimension - Number of dimensions or rows.
     * @param {KMatrixInputData} [column_length] - Number of columns.
     * @returns {Matrix}
     */
    static ones(dimension: KMatrixInputData, column_length?: KMatrixInputData): Matrix;
    /**
     * If matrix, generate diagonal column vector.
     * If vector, generate a matrix with diagonal elements.
     * @returns {Matrix} Matrix or vector created. See how to use the function.
     */
    diag(): Matrix;
    /**
     * Return true if the matrix is scalar.
     * @returns {boolean}
     */
    isScalar(): boolean;
    /**
     * Return true if the matrix is row vector.
     * @returns {boolean}
     */
    isRow(): boolean;
    /**
     * Return true if the matrix is column vector.
     * @returns {boolean}
     */
    isColumn(): boolean;
    /**
     * Return true if the matrix is vector.
     * @returns {boolean}
     */
    isVector(): boolean;
    /**
     * Return true if the value is not scalar.
     * @returns {boolean}
     */
    isMatrix(): boolean;
    /**
     * Return true if the matrix is square matrix.
     * @returns {boolean}
     */
    isSquare(): boolean;
    /**
     * Return true if the matrix is real matrix.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {boolean}
     */
    isReal(tolerance?: KMatrixInputData): boolean;
    /**
     * Return true if the matrix is complex matrix.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {boolean}
     */
    isComplex(tolerance?: KMatrixInputData): boolean;
    /**
     * Return true if the matrix is zero matrix.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {boolean}
     */
    isZeros(tolerance?: KMatrixInputData): boolean;
    /**
     * Return true if the matrix is identity matrix.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {boolean}
     */
    isIdentity(tolerance?: KMatrixInputData): boolean;
    /**
     * Return true if the matrix is diagonal matrix.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {boolean}
     */
    isDiagonal(tolerance?: KMatrixInputData): boolean;
    /**
     * Return true if the matrix is tridiagonal matrix.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {boolean}
     */
    isTridiagonal(tolerance?: KMatrixInputData): boolean;
    /**
     * Return true if the matrix is regular matrix.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {boolean}
     */
    isRegular(tolerance?: KMatrixInputData): boolean;
    /**
     * Return true if the matrix is orthogonal matrix.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {boolean}
     */
    isOrthogonal(tolerance?: KMatrixInputData): boolean;
    /**
     * Return true if the matrix is unitary matrix.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {boolean}
     */
    isUnitary(tolerance?: KMatrixInputData): boolean;
    /**
     * Return true if the matrix is symmetric matrix.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {boolean}
     */
    isSymmetric(tolerance?: KMatrixInputData): boolean;
    /**
     * Return true if the matrix is hermitian matrix.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {boolean}
     */
    isHermitian(tolerance?: KMatrixInputData): boolean;
    /**
     * Return true if the matrix is upper triangular matrix.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {boolean}
     */
    isTriangleUpper(tolerance?: KMatrixInputData): boolean;
    /**
     * Return true if the matrix is  lower triangular matrix.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {boolean}
     */
    isTriangleLower(tolerance?: KMatrixInputData): boolean;
    /**
     * Return true if the matrix is permutation matrix.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {boolean}
     */
    isPermutation(tolerance?: KMatrixInputData): boolean;
    /**
     * Number of rows and columns of matrix.
     * @param {?string|?number} [dimension] direction. 1/"row", 2/"column"
     * @returns {Matrix} [row_length, column_length]
     */
    size(dimension?: string | number): Matrix;
    /**
     * Compare values.
     * - Use `compareToMatrix` if you want to compare matrices.
     * @param {KMatrixInputData} number
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {number} A > B ? 1 : (A === B ? 0 : -1)
     */
    compareTo(number: KMatrixInputData, tolerance?: KMatrixInputData): number;
    /**
     * Compare values.
     * - Use `compareTo` if you want to compare scalar values.
     * @param {KMatrixInputData} number
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {Matrix} A > B ? 1 : (A === B ? 0 : -1)
     */
    compareToMatrix(number: KMatrixInputData, tolerance?: KMatrixInputData): Matrix;
    /**
     * Add.
     * @param {KMatrixInputData} number
     * @returns {Matrix} A + B
     */
    add(number: KMatrixInputData): Matrix;
    /**
     * Subtract.
     * @param {KMatrixInputData} number
     * @returns {Matrix} A - B
     */
    sub(number: KMatrixInputData): Matrix;
    /**
     * Multiply.
     * - Use `dotmul` if you want to use `mul` for each element.
     * @param {KMatrixInputData} number
     * @returns {Matrix} A * B
     */
    mul(number: KMatrixInputData): Matrix;
    /**
     * Divide.
     * - Use `dotdiv` if you want to use `div` for each element.
     * @param {KMatrixInputData} number
     * @returns {Matrix} A / B
     */
    div(number: KMatrixInputData): Matrix;
    /**
     * Inverse matrix of this matrix.
     * - Use `dotinv` if you want to use `inv` for each element.
     * @returns {Matrix} A^-1
     */
    inv(): Matrix;
    /**
     * Multiplication for each element of matrix.
     * @param {KMatrixInputData} number
     * @returns {Matrix} A .* B
     */
    dotmul(number: KMatrixInputData): Matrix;
    /**
     * Division for each element of matrix.
     * @param {KMatrixInputData} number
     * @returns {Matrix} A ./ B
     */
    dotdiv(number: KMatrixInputData): Matrix;
    /**
     * Inverse of each element of matrix.
     * @returns {Matrix} 1 ./ A
     */
    dotinv(): Matrix;
    /**
     * Multiplication for each element of matrix.
     * @param {KMatrixInputData} number
     * @returns {Matrix} A .* B
     * @deprecated use the dotmul.
     */
    nmul(number: KMatrixInputData): Matrix;
    /**
     * Division for each element of matrix.
     * @param {KMatrixInputData} number
     * @returns {Matrix} A ./ B
     * @deprecated use the dotdiv.
     */
    ndiv(number: KMatrixInputData): Matrix;
    /**
     * Inverse of each element of matrix.
     * @returns {Matrix} 1 ./ A
     * @deprecated use the dotinv.
     */
    ninv(): Matrix;
    /**
     * Power function for each element of the matrix.
     * @param {KMatrixInputData} number
     * @returns {Matrix} A .^ B
     * @deprecated use the dotpow.
     */
    npow(number: KMatrixInputData): Matrix;
    /**
     * Modulo, positive remainder of division for each element of matrix.
     * - Result has same sign as the Dividend.
     * @param {KMatrixInputData} number
     * @returns {Matrix} A .rem B
     */
    rem(number: KMatrixInputData): Matrix;
    /**
     * Modulo, positive remainder of division for each element of matrix.
     * - Result has same sign as the Divisor.
     * @param {KMatrixInputData} number
     * @returns {Matrix} A .mod B
     */
    mod(number: KMatrixInputData): Matrix;
    /**
     * Real part of each element.
     * @returns {Matrix} real(A)
     */
    real(): Matrix;
    /**
     * Imaginary part of each element of the matrix.
     * @returns {Matrix} imag(A)
     */
    imag(): Matrix;
    /**
     * The argument of each element of matrix.
     * @returns {Matrix} arg(A)
     */
    arg(): Matrix;
    /**
     * The positive or negative signs of each element of the matrix.
     * - +1 if positive, -1 if negative, 0 if 0, norm if complex number.
     * @returns {Matrix}
     */
    sign(): Matrix;
    /**
     * Floor.
     * @returns {Matrix} floor(A)
     */
    floor(): Matrix;
    /**
     * Ceil.
     * @returns {Matrix} ceil(A)
     */
    ceil(): Matrix;
    /**
     * Rounding to the nearest integer.
     * @returns {Matrix} round(A)
     */
    round(): Matrix;
    /**
     * To integer rounded down to the nearest.
     * @returns {Matrix} fix(A), trunc(A)
     */
    fix(): Matrix;
    /**
     * Fraction.
     * @returns {Matrix} fract(A)
     */
    fract(): Matrix;
    /**
     * Absolute value.
     * @returns {Matrix} abs(A)
     */
    abs(): Matrix;
    /**
     * Complex conjugate matrix.
     * @returns {Matrix} real(A) - imag(A)j
     */
    conj(): Matrix;
    /**
     * this * -1
     * @returns {Matrix} -A
     */
    negate(): Matrix;
    /**
     * Power function.
     * - Unless the matrix is a scalar value, only integers are supported.
     * - Use `dotpow` if you want to use `pow` for each element. A real number can be specified.
     * @param {KMatrixInputData} number
     * @returns {Matrix} pow(A, B)
     */
    pow(number: KMatrixInputData): Matrix;
    /**
     * Power function for each element of the matrix.
     * @param {KMatrixInputData} number
     * @returns {Matrix} A .^ B
     */
    dotpow(number: KMatrixInputData): Matrix;
    /**
     * Square.
     * - Unless the matrix is a scalar value, only integers are supported.
     * @returns {Matrix} pow(A, 2)
     */
    square(): Matrix;
    /**
     * Square root.
     * @returns {Matrix} sqrt(A)
     */
    sqrt(): Matrix;
    /**
     * Cube root.
     * @returns {Matrix} sqrt(A)
     */
    cbrt(): Matrix;
    /**
     * Reciprocal square root.
     * @returns {Matrix} rsqrt(A)
     */
    rsqrt(): Matrix;
    /**
     * Logarithmic function.
     * @returns {Matrix} log(A)
     */
    log(): Matrix;
    /**
     * Exponential function.
     * @returns {Matrix} exp(A)
     */
    exp(): Matrix;
    /**
     * e^x - 1
     * @returns {Matrix} expm1(A)
     */
    expm1(): Matrix;
    /**
     * ln(1 + x)
     * @returns {Matrix} log1p(A)
     */
    log1p(): Matrix;
    /**
     * log_2(x)
     * @returns {Matrix} log2(A)
     */
    log2(): Matrix;
    /**
     * log_10(x)
     * @returns {Matrix} log10(A)
     */
    log10(): Matrix;
    /**
     * Sine function.
     * @returns {Matrix} sin(A)
     */
    sin(): Matrix;
    /**
     * Cosine function.
     * @returns {Matrix} cos(A)
     */
    cos(): Matrix;
    /**
     * Tangent function.
     * @returns {Matrix} tan(A)
     */
    tan(): Matrix;
    /**
     * Atan (arc tangent) function.
     * - Return the values of [-PI/2, PI/2].
     * @returns {Matrix} atan(A)
     */
    atan(): Matrix;
    /**
     * Atan (arc tangent) function.
     * - Return the values of [-PI, PI].
     * - Supports only real numbers.
     * @param {KMatrixInputData} number - X
     * @returns {Matrix} atan2(Y, X)
     */
    atan2(number: KMatrixInputData): Matrix;
    /**
     * Arc sine function.
     * @returns {Matrix} asin(A)
     */
    asin(): Matrix;
    /**
     * Arc cosine function.
     * @returns {Matrix} acos(A)
     */
    acos(): Matrix;
    /**
     * Hyperbolic sine function.
     * @returns {Matrix} sinh(A)
     */
    sinh(): Matrix;
    /**
     * Inverse hyperbolic sine function.
     * @returns {Matrix} asinh(A)
     */
    asinh(): Matrix;
    /**
     * Hyperbolic cosine function.
     * @returns {Matrix} cosh(A)
     */
    cosh(): Matrix;
    /**
     * Inverse hyperbolic cosine function.
     * @returns {Matrix} acosh(A)
     */
    acosh(): Matrix;
    /**
     * Hyperbolic tangent function.
     * @returns {Matrix} tanh(A)
     */
    tanh(): Matrix;
    /**
     * Inverse hyperbolic tangent function.
     * @returns {Matrix} atanh(A)
     */
    atanh(): Matrix;
    /**
     * Secant function.
     * @returns {Matrix} sec(A)
     */
    sec(): Matrix;
    /**
     * Reverse secant function.
     * @returns {Matrix} asec(A)
     */
    asec(): Matrix;
    /**
     * Hyperbolic secant function.
     * @returns {Matrix} sech(A)
     */
    sech(): Matrix;
    /**
     * Inverse hyperbolic secant function.
     * @returns {Matrix} asech(A)
     */
    asech(): Matrix;
    /**
     * Cotangent function.
     * @returns {Matrix} cot(A)
     */
    cot(): Matrix;
    /**
     * Inverse cotangent function.
     * @returns {Matrix} acot(A)
     */
    acot(): Matrix;
    /**
     * Hyperbolic cotangent function.
     * @returns {Matrix} coth(A)
     */
    coth(): Matrix;
    /**
     * Inverse hyperbolic cotangent function.
     * @returns {Matrix} acoth(A)
     */
    acoth(): Matrix;
    /**
     * Cosecant function.
     * @returns {Matrix} csc(A)
     */
    csc(): Matrix;
    /**
     * Inverse cosecant function.
     * @returns {Matrix} acsc(A)
     */
    acsc(): Matrix;
    /**
     * Hyperbolic cosecant function.
     * @returns {Matrix} csch(A)
     */
    csch(): Matrix;
    /**
     * Inverse hyperbolic cosecant function.
     * @returns {Matrix} acsch(A)
     */
    acsch(): Matrix;
    /**
     * Logit function.
     * @returns {Matrix} logit(A)
     */
    logit(): Matrix;
    /**
     * Normalized sinc function.
     * @returns {Matrix} sinc(A)
     */
    sinc(): Matrix;
    /**
     * Generate a matrix composed of random values [0, 1) with uniform random numbers.
     * @param {KMatrixInputData} dimension - Number of dimensions or rows.
     * @param {KMatrixInputData} [column_length] - Number of columns.
     * @param {Random} [random] - Class for creating random numbers.
     * @returns {Matrix}
     */
    static rand(dimension: KMatrixInputData, column_length?: KMatrixInputData, random?: Random): Matrix;
    /**
     * Generate a matrix composed of random values with normal distribution.
     * @param {KMatrixInputData} dimension - Number of dimensions or rows.
     * @param {KMatrixInputData} [column_length] - Number of columns.
     * @param {Random} [random] - Class for creating random numbers.
     * @returns {Matrix}
     */
    static randn(dimension: KMatrixInputData, column_length?: KMatrixInputData, random?: Random): Matrix;
    /**
     * Test if each element of the matrix is integer.
     * - 1 if true, 0 if false.
     * - Use `isInteger` if you want to test first element.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {Matrix} Matrix with elements of the numerical value of 1 or 0.
     */
    testInteger(tolerance?: KMatrixInputData): Matrix;
    /**
     * Test if each element of the matrix is complex integer.
     * - 1 if true, 0 if false.
     * - Use `isComplexInteger` if you want to test first element.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {Matrix} Matrix with elements of the numerical value of 1 or 0.
     */
    testComplexInteger(tolerance?: KMatrixInputData): Matrix;
    /**
     * real(this) === 0
     * - 1 if true, 0 if false.
     * - Use `isZero` if you want to test first element.
     * - Use `isZeros` to check for a zero matrix.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {Matrix} Matrix with elements of the numerical value of 1 or 0.
     */
    testZero(tolerance?: KMatrixInputData): Matrix;
    /**
     * real(this) === 1
     * - 1 if true, 0 if false.
     * - Use `isOne` if you want to test first element.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {Matrix} Matrix with elements of the numerical value of 1 or 0.
     */
    testOne(tolerance?: KMatrixInputData): Matrix;
    /**
     * Test if each element of the matrix is complex.
     * - 1 if true, 0 if false.
     * - Use `isComplex` to test whether a matrix contains complex numbers.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {Matrix} Matrix with elements of the numerical value of 1 or 0.
     */
    testComplex(tolerance?: KMatrixInputData): Matrix;
    /**
     * Test if each element of the matrix is real.
     * - 1 if true, 0 if false.
     * - Use `isReal` to test for complex numbers in matrices.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {Matrix} Matrix with elements of the numerical value of 1 or 0.
     */
    testReal(tolerance?: KMatrixInputData): Matrix;
    /**
     * Test if each element of the matrix is NaN.
     * - 1 if true, 0 if false.
     * - Use `isNaN` if you want to test first element.
     * @returns {Matrix} Matrix with elements of the numerical value of 1 or 0.
     */
    testNaN(): Matrix;
    /**
     * real(this) > 0
     * - 1 if true, 0 if false.
     * - Use `isPositive` if you want to test first element.
     * @returns {Matrix} Matrix with elements of the numerical value of 1 or 0.
     */
    testPositive(): Matrix;
    /**
     * real(this) < 0
     * - 1 if true, 0 if false.
     * - Use `isNegative` if you want to test first element.
     * @returns {Matrix} Matrix with elements of the numerical value of 1 or 0.
     */
    testNegative(): Matrix;
    /**
     * real(this) >= 0
     * - 1 if true, 0 if false.
     * - Use `isNotNegative` if you want to test first element.
     * @returns {Matrix} Matrix with elements of the numerical value of 1 or 0.
     */
    testNotNegative(): Matrix;
    /**
     * Test if each element of the matrix is positive infinite.
     * - 1 if true, 0 if false.
     * - Use `isPositiveInfinity` if you want to test first element.
     * @returns {Matrix} Matrix with elements of the numerical value of 1 or 0.
     */
    testPositiveInfinity(): Matrix;
    /**
     * Test if each element of the matrix is negative infinite.
     * - 1 if true, 0 if false.
     * - Use `isNegativeInfinity` if you want to test first element.
     * @returns {Matrix} Matrix with elements of the numerical value of 1 or 0.
     */
    testNegativeInfinity(): Matrix;
    /**
     * Test if each element of the matrix is infinite.
     * - 1 if true, 0 if false.
     * - Use `isInfinite` if you want to test first element.
     * @returns {Matrix} Matrix with elements of the numerical value of 1 or 0.
     */
    testInfinite(): Matrix;
    /**
     * Test if each element of the matrix is finite.
     * - 1 if true, 0 if false.
     * - Use `isFinite` if you want to test first element.
     * @returns {Matrix} Matrix with elements of the numerical value of 1 or 0.
     */
    testFinite(): Matrix;
    /**
     * this === 0
     * - Use only the first element.
     * - Use `testZero` if you want to test the elements of a matrix.
     * - Use `isZeros` to check for a zero matrix.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {boolean}
     */
    isZero(tolerance?: KMatrixInputData): boolean;
    /**
     * this === 1
     * - Use only the first element.
     * - Use `testOne` if you want to test the elements of a matrix.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {boolean}
     */
    isOne(tolerance?: KMatrixInputData): boolean;
    /**
     * this > 0
     * - Use only the first element.
     * - Use `testPositive` if you want to test the elements of a matrix.
     * @returns {boolean}
     */
    isPositive(): boolean;
    /**
     * this < 0
     * - Use only the first element.
     * - Use `testNegative` if you want to test the elements of a matrix.
     * @returns {boolean}
     */
    isNegative(): boolean;
    /**
     * this >= 0
     * - Use only the first element.
     * - Use `testNotNegative` if you want to test the elements of a matrix.
     * @returns {boolean}
     */
    isNotNegative(): boolean;
    /**
     * this === NaN
     * - Use only the first element.
     * - Use `testNaN` if you want to test the elements of a matrix.
     * @returns {boolean} isNaN(A)
     */
    isNaN(): boolean;
    /**
     * this === Infinity
     * - Use only the first element.
     * - Use `testPositiveInfinity` if you want to test the elements of a matrix.
     * @returns {boolean} isPositiveInfinity(A)
     */
    isPositiveInfinity(): boolean;
    /**
     * this === -Infinity
     * - Use only the first element.
     * - Use `testNegativeInfinity` if you want to test the elements of a matrix.
     * @returns {boolean} isNegativeInfinity(A)
     */
    isNegativeInfinity(): boolean;
    /**
     * this === Infinity or -Infinity
     * - Use only the first element.
     * - Use `testInfinite` if you want to test the elements of a matrix.
     * @returns {boolean} isPositiveInfinity(A) || isNegativeInfinity(A)
     */
    isInfinite(): boolean;
    /**
     * Return true if the value is finite number.
     * - Use only the first element.
     * - Use `testFinite` if you want to test the elements of a matrix.
     * @returns {boolean} !isNaN(A) && !isInfinite(A)
     */
    isFinite(): boolean;
    /**
     * Return true if the value is integer.
     * - Use only the first element.
     * - Use `testFinite` if you want to test the elements of a matrix.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {boolean}
     */
    isInteger(tolerance?: KMatrixInputData): boolean;
    /**
     * Returns true if the vallue is complex integer (including normal integer).
     * - Use only the first element.
     * - Use `testFinite` if you want to test the elements of a matrix.
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {boolean} real(A) === integer && imag(A) === integer
     */
    isComplexInteger(tolerance?: KMatrixInputData): boolean;
    /**
     * Rotate matrix 90 degrees clockwise.
     * @param {KMatrixInputData} rot_90_count - Number of times rotated by 90 degrees.
     * @returns {Matrix} Matrix after function processing.
     */
    rot90(rot_90_count: KMatrixInputData): Matrix;
    /**
     * Change the size of the matrix.
     * Initialized with 0 when expanding.
     * @param {KMatrixInputData} row_length - Number of rows of matrix to resize.
     * @param {KMatrixInputData} column_length - Number of columns of matrix to resize.
     * @returns {Matrix} Matrix after function processing.
     */
    resize(row_length: KMatrixInputData, column_length: KMatrixInputData): Matrix;
    /**
     * Remove the row in this matrix.
     * @param {KMatrixInputData} delete_row_index - Number of row of matrix to delete.
     * @returns {Matrix} Matrix after function processing.
     */
    deleteRow(delete_row_index: KMatrixInputData): Matrix;
    /**
     * Remove the column in this matrix.
     * @param {KMatrixInputData} delete_column_index - Number of column of matrix to delete.
     * @returns {Matrix} Matrix after function processing.
     */
    deleteColumn(delete_column_index: KMatrixInputData): Matrix;
    /**
     * Swap rows in the matrix.
     * @param {KMatrixInputData} exchange_row_index1 - Number 1 of row of matrix to exchange.
     * @param {KMatrixInputData} exchange_row_index2 - Number 2 of row of matrix to exchange.
     * @returns {Matrix} Matrix after function processing.
     */
    exchangeRow(exchange_row_index1: KMatrixInputData, exchange_row_index2: KMatrixInputData): Matrix;
    /**
     * Swap columns in the matrix.
     * @param {KMatrixInputData} exchange_column_index1 - Number 1 of column of matrix to exchange.
     * @param {KMatrixInputData} exchange_column_index2 - Number 2 of column of matrix to exchange.
     * @returns {Matrix} Matrix after function processing.
     */
    exchangeColumn(exchange_column_index1: KMatrixInputData, exchange_column_index2: KMatrixInputData): Matrix;
    /**
     * Combine matrix to the right of this matrix.
     * @param {KMatrixInputData} left_matrix - Matrix to combine.
     * @returns {Matrix} Matrix after function processing.
     */
    concatRight(left_matrix: KMatrixInputData): Matrix;
    /**
     * Combine matrix to the bottom of this matrix.
     * @param {KMatrixInputData} bottom_matrix - Matrix to combine.
     * @returns {Matrix} Matrix after function processing.
     */
    concatBottom(bottom_matrix: KMatrixInputData): Matrix;
    /**
     * Clip each element of matrix to specified range.
     * @param {KMatrixInputData} min
     * @param {KMatrixInputData} max
     * @returns {Matrix} min(max(x, min), max)
     */
    clip(min: KMatrixInputData, max: KMatrixInputData): Matrix;
    /**
     * Create row vector with specified initial value, step value, end condition.
     * @param {KMatrixInputData} start_or_stop
     * @param {KMatrixInputData} [stop]
     * @param {KMatrixInputData} [step=1]
     * @returns {Matrix}
     */
    static arange(start_or_stop: KMatrixInputData, stop?: KMatrixInputData, step?: KMatrixInputData): Matrix;
    /**
     * Circular shift.
     * @param {KMatrixInputData} shift_size
     * @param {KMatrixSettings} [type]
     * @returns {Matrix} Matrix after function processing.
     */
    circshift(shift_size: KMatrixInputData, type?: KMatrixSettings): Matrix;
    /**
     * Circular shift.
     * @param {KMatrixInputData} shift_size
     * @param {KMatrixSettings} [type]
     * @returns {Matrix} Matrix after function processing.
     */
    roll(shift_size: KMatrixInputData, type?: KMatrixSettings): Matrix;
    /**
     * Change the shape of the matrix.
     * The number of elements in the matrix doesn't increase or decrease.
     * @param {KMatrixInputData} row_length - Number of rows of matrix to reshape.
     * @param {KMatrixInputData} column_length - Number of columns of matrix to reshape.
     * @returns {Matrix} Matrix after function processing.
     */
    reshape(row_length: KMatrixInputData, column_length: KMatrixInputData): Matrix;
    /**
     * Flip this matrix left and right.
     * @returns {Matrix} Matrix after function processing.
     */
    fliplr(): Matrix;
    /**
     * Flip this matrix up and down.
     * @returns {Matrix} Matrix after function processing.
     */
    flipud(): Matrix;
    /**
     * Flip this matrix.
     * @param {KMatrixSettings} [type]
     * @returns {Matrix} Matrix after function processing.
     */
    flip(type?: KMatrixSettings): Matrix;
    /**
     * Index sort.
     * - Sorts by row when setting index by row vector to the argument.
     * - Sorts by column when setting index by column vector to the argument.
     * @param {KMatrixInputData} v - Vector with index. (See the description of this function)
     * @returns {Matrix} Matrix after function processing.
     */
    indexsort(v: KMatrixInputData): Matrix;
    /**
     * Transpose a matrix.
     * @returns {Matrix} A^T
     */
    transpose(): Matrix;
    /**
     * Hermitian transpose.
     * @returns {Matrix} A^T
     */
    ctranspose(): Matrix;
    /**
     * Hermitian transpose.
     * @returns {Matrix} A^T
     */
    T(): Matrix;
    /**
     * Inner product/Dot product.
     * @param {KMatrixInputData} number
     * @param {KMatrixInputData} [dimension=1] - Dimension of matrix used for calculation. (1 or 2)
     * @returns {Matrix} A・B
     */
    inner(number: KMatrixInputData, dimension?: KMatrixInputData): Matrix;
    /**
     * LUP decomposition.
     * - P'*L*U=A
     * - P is permutation matrix.
     * - L is lower triangular matrix.
     * - U is upper triangular matrix.
     * @returns {{P: Matrix, L: Matrix, U: Matrix}} {L, U, P}
     */
    lup(): {P: Matrix, L: Matrix, U: Matrix};
    /**
     * LU decomposition.
     * - L*U=A
     * - L is lower triangular matrix.
     * - U is upper triangular matrix.
     * @returns {{L: Matrix, U: Matrix}} {L, U}
     */
    lu(): {L: Matrix, U: Matrix};
    /**
     * Solving a system of linear equations to be Ax = B
     * @param {KMatrixInputData} number - B
     * @returns {Matrix} x
     */
    linsolve(number: KMatrixInputData): Matrix;
    /**
     * QR decomposition.
     * - Q*R=A
     * - Q is orthonormal matrix.
     * - R is upper triangular matrix.
     * @returns {{Q: Matrix, R: Matrix}} {Q, R}
     */
    qr(): {Q: Matrix, R: Matrix};
    /**
     * Tridiagonalization of symmetric matrix.
     * - Don't support complex numbers.
     * - P*H*P'=A
     * - P is orthonormal matrix.
     * - H is tridiagonal matrix.
     * - The eigenvalues of H match the eigenvalues of A.
     * @returns {{P: Matrix, H: Matrix}} {P, H}
     */
    tridiagonalize(): {P: Matrix, H: Matrix};
    /**
     * Eigendecomposition of symmetric matrix.
     * - Don't support complex numbers.
     * - V*D*V'=A.
     * - V is orthonormal matrix. and columns of V are the right eigenvectors.
     * - D is a matrix containing the eigenvalues on the diagonal component.
     * @returns {{V: Matrix, D: Matrix}} {D, V}
     */
    eig(): {V: Matrix, D: Matrix};
    /**
     * Singular Value Decomposition (SVD).
     * - U*S*V'=A
     * - U and V are orthonormal matrices.
     * - S is a matrix with singular values in the diagonal.
     * @returns {{U: Matrix, S: Matrix, V: Matrix}} U*S*V'=A
     */
    svd(): {U: Matrix, S: Matrix, V: Matrix};
    /**
     * Pseudo-inverse matrix.
     * @returns {Matrix} A^+
     */
    pinv(): Matrix;
    /**
     * Log-gamma function.
     * - Calculate from real values.
     * @returns {Matrix}
     */
    gammaln(): Matrix;
    /**
     * Gamma function.
     * - Calculate from real values.
     * @returns {Matrix}
     */
    gamma(): Matrix;
    /**
     * Incomplete gamma function.
     * - Calculate from real values.
     * @param {KMatrixInputData} a
     * @param {string} [tail="lower"] - lower (default) , "upper"
     * @returns {Matrix}
     */
    gammainc(a: KMatrixInputData, tail?: string): Matrix;
    /**
     * Probability density function (PDF) of the gamma distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} k - Shape parameter.
     * @param {KMatrixInputData} s - Scale parameter.
     * @returns {Matrix}
     */
    gampdf(k: KMatrixInputData, s: KMatrixInputData): Matrix;
    /**
     * Cumulative distribution function (CDF) of gamma distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} k - Shape parameter.
     * @param {KMatrixInputData} s - Scale parameter.
     * @returns {Matrix}
     */
    gamcdf(k: KMatrixInputData, s: KMatrixInputData): Matrix;
    /**
     * Inverse function of cumulative distribution function (CDF) of gamma distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} k - Shape parameter.
     * @param {KMatrixInputData} s - Scale parameter.
     * @returns {Matrix}
     */
    gaminv(k: KMatrixInputData, s: KMatrixInputData): Matrix;
    /**
     * Beta function.
     * - Calculate from real values.
     * @param {KMatrixInputData} y
     * @returns {Matrix}
     */
    beta(y: KMatrixInputData): Matrix;
    /**
     * Incomplete beta function.
     * - Calculate from real values.
     * @param {KMatrixInputData} a
     * @param {KMatrixInputData} b
     * @param {string} [tail="lower"] - lower (default) , "upper"
     * @returns {Matrix}
     */
    betainc(a: KMatrixInputData, b: KMatrixInputData, tail?: string): Matrix;
    /**
     * Cumulative distribution function (CDF) of beta distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} a
     * @param {KMatrixInputData} b
     * @returns {Matrix}
     */
    betacdf(a: KMatrixInputData, b: KMatrixInputData): Matrix;
    /**
     * Probability density function (PDF) of beta distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} a
     * @param {KMatrixInputData} b
     * @returns {Matrix}
     */
    betapdf(a: KMatrixInputData, b: KMatrixInputData): Matrix;
    /**
     * Inverse function of cumulative distribution function (CDF) of beta distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} a
     * @param {KMatrixInputData} b
     * @returns {Matrix}
     */
    betainv(a: KMatrixInputData, b: KMatrixInputData): Matrix;
    /**
     * Factorial function, x!.
     * - Calculate from real values.
     * @returns {Matrix}
     */
    factorial(): Matrix;
    /**
     * Binomial coefficient, number of all combinations, nCk.
     * - Calculate from real values.
     * @param {KMatrixInputData} k
     * @returns {Matrix}
     */
    nchoosek(k: KMatrixInputData): Matrix;
    /**
     * Error function.
     * - Calculate from real values.
     * @returns {Matrix}
     */
    erf(): Matrix;
    /**
     * Complementary error function.
     * - Calculate from real values.
     * @returns {Matrix}
     */
    erfc(): Matrix;
    /**
     * Inverse function of Error function.
     * - Calculate from real values.
     * @returns {Matrix}
     */
    erfinv(): Matrix;
    /**
     * Inverse function of Complementary error function.
     * - Calculate from real values.
     * @returns {Matrix}
     */
    erfcinv(): Matrix;
    /**
     * Probability density function (PDF) of normal distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} [u=0.0] - Average value.
     * @param {KMatrixInputData} [s=1.0] - Variance value.
     * @returns {Matrix}
     */
    normpdf(u?: KMatrixInputData, s?: KMatrixInputData): Matrix;
    /**
     * Cumulative distribution function (CDF) of normal distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} [u=0.0] - Average value.
     * @param {KMatrixInputData} [s=1.0] - Variance value.
     * @returns {Matrix}
     */
    normcdf(u?: KMatrixInputData, s?: KMatrixInputData): Matrix;
    /**
     * Inverse function of cumulative distribution function (CDF) of normal distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} [u=0.0] - Average value.
     * @param {KMatrixInputData} [s=1.0] - Variance value.
     * @returns {Matrix}
     */
    norminv(u?: KMatrixInputData, s?: KMatrixInputData): Matrix;
    /**
     * Probability density function (PDF) of binomial distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} n
     * @param {KMatrixInputData} p
     * @returns {Matrix}
     */
    binopdf(n: KMatrixInputData, p: KMatrixInputData): Matrix;
    /**
     * Cumulative distribution function (CDF) of binomial distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} n
     * @param {KMatrixInputData} p
     * @param {string} [tail="lower"] - lower (default) , "upper"
     * @returns {Matrix}
     */
    binocdf(n: KMatrixInputData, p: KMatrixInputData, tail?: string): Matrix;
    /**
     * Inverse function of cumulative distribution function (CDF) of binomial distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} n
     * @param {KMatrixInputData} p
     * @returns {Matrix}
     */
    binoinv(n: KMatrixInputData, p: KMatrixInputData): Matrix;
    /**
     * Probability density function (PDF) of Poisson distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} lambda
     * @returns {Matrix}
     */
    poisspdf(lambda: KMatrixInputData): Matrix;
    /**
     * Cumulative distribution function (CDF) of Poisson distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} lambda
     * @returns {Matrix}
     */
    poisscdf(lambda: KMatrixInputData): Matrix;
    /**
     * Inverse function of cumulative distribution function (CDF) of Poisson distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} lambda
     * @returns {Matrix}
     */
    poissinv(lambda: KMatrixInputData): Matrix;
    /**
     * Probability density function (PDF) of Student's t-distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} v - The degrees of freedom. (DF)
     * @returns {Matrix}
     */
    tpdf(v: KMatrixInputData): Matrix;
    /**
     * Cumulative distribution function (CDF) of Student's t-distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} v - The degrees of freedom. (DF)
     * @returns {Matrix}
     */
    tcdf(v: KMatrixInputData): Matrix;
    /**
     * Inverse of cumulative distribution function (CDF) of Student's t-distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} v - The degrees of freedom. (DF)
     * @returns {Matrix}
     */
    tinv(v: KMatrixInputData): Matrix;
    /**
     * Cumulative distribution function (CDF) of Student's t-distribution that can specify tail.
     * - Calculate from real values.
     * @param {KMatrixInputData} v - The degrees of freedom. (DF)
     * @param {KMatrixInputData} tails - Tail. (1 = the one-tailed distribution, 2 =  the two-tailed distribution.)
     * @returns {Matrix}
     */
    tdist(v: KMatrixInputData, tails: KMatrixInputData): Matrix;
    /**
     * Inverse of cumulative distribution function (CDF) of Student's t-distribution in two-sided test.
     * - Calculate from real values.
     * @param {KMatrixInputData} v - The degrees of freedom. (DF)
     * @returns {Matrix}
     */
    tinv2(v: KMatrixInputData): Matrix;
    /**
     * Probability density function (PDF) of chi-square distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} k - The degrees of freedom. (DF)
     * @returns {Matrix}
     */
    chi2pdf(k: KMatrixInputData): Matrix;
    /**
     * Cumulative distribution function (CDF) of chi-square distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} k - The degrees of freedom. (DF)
     * @returns {Matrix}
     */
    chi2cdf(k: KMatrixInputData): Matrix;
    /**
     * Inverse function of cumulative distribution function (CDF) of chi-square distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} k - The degrees of freedom. (DF)
     * @returns {Matrix}
     */
    chi2inv(k: KMatrixInputData): Matrix;
    /**
     * Probability density function (PDF) of F-distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} d1 - The degree of freedom of the molecules.
     * @param {KMatrixInputData} d2 - The degree of freedom of the denominator
     * @returns {Matrix}
     */
    fpdf(d1: KMatrixInputData, d2: KMatrixInputData): Matrix;
    /**
     * Cumulative distribution function (CDF) of F-distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} d1 - The degree of freedom of the molecules.
     * @param {KMatrixInputData} d2 - The degree of freedom of the denominator
     * @returns {Matrix}
     */
    fcdf(d1: KMatrixInputData, d2: KMatrixInputData): Matrix;
    /**
     * Inverse function of cumulative distribution function (CDF) of F-distribution.
     * - Calculate from real values.
     * @param {KMatrixInputData} d1 - The degree of freedom of the molecules.
     * @param {KMatrixInputData} d2 - The degree of freedom of the denominator
     * @returns {Matrix}
     */
    finv(d1: KMatrixInputData, d2: KMatrixInputData): Matrix;
    /**
     * Logical AND.
     * - Calculated as an integer.
     * @param {KMatrixInputData} number
     * @returns {Matrix} A & B
     */
    and(number: KMatrixInputData): Matrix;
    /**
     * Logical OR.
     * - Calculated as an integer.
     * @param {KMatrixInputData} number
     * @returns {Matrix} A | B
     */
    or(number: KMatrixInputData): Matrix;
    /**
     * Logical Exclusive-OR.
     * - Calculated as an integer.
     * @param {KMatrixInputData} number
     * @returns {Matrix} A ^ B
     */
    xor(number: KMatrixInputData): Matrix;
    /**
     * Logical Not. (mutable)
     * - Calculated as an integer.
     * @returns {Matrix} !A
     */
    not(): Matrix;
    /**
     * this << n
     * - Calculated as an integer.
     * @param {KMatrixInputData} n
     * @returns {Matrix} A << n
     */
    shift(n: KMatrixInputData): Matrix;
    /**
     * Multiply a multiple of ten.
     * @param {KMatrixInputData} n
     * @returns {Matrix} x * 10^n
     */
    scaleByPowerOfTen(n: KMatrixInputData): Matrix;
    /**
     * Maximum number.
     * @param {KMatrixSettings} [type]
     * @returns {Matrix} max([A, B])
     */
    max(type?: KMatrixSettings): Matrix;
    /**
     * Minimum number.
     * @param {KMatrixSettings} [type]
     * @returns {Matrix} min([A, B])
     */
    min(type?: KMatrixSettings): Matrix;
    /**
     * Sum.
     * @param {KMatrixSettings} [type]
     * @returns {Matrix}
     */
    sum(type?: KMatrixSettings): Matrix;
    /**
     * Arithmetic average.
     * @param {KMatrixSettings} [type]
     * @returns {Matrix}
     */
    mean(type?: KMatrixSettings): Matrix;
    /**
     * Product of array elements.
     * @param {KMatrixSettings} [type]
     * @returns {Matrix}
     */
    prod(type?: KMatrixSettings): Matrix;
    /**
     * Geometric mean.
     * @param {KMatrixSettings} [type]
     * @returns {Matrix}
     */
    geomean(type?: KMatrixSettings): Matrix;
    /**
     * Median.
     * @param {KMatrixSettings} [type]
     * @returns {Matrix}
     */
    median(type?: KMatrixSettings): Matrix;
    /**
     * Mode.
     * @param {KMatrixSettings} [type]
     * @returns {Matrix}
     */
    mode(type?: KMatrixSettings): Matrix;
    /**
     * Moment.
     * - Moment of order n. Equivalent to the definition of variance at 2.
     * @param {number} nth_order
     * @param {KMatrixSettings} [type]
     * @returns {Matrix}
     */
    moment(nth_order: number, type?: KMatrixSettings): Matrix;
    /**
     * Variance.
     * @param {KMatrixSettings} [type]
     * @returns {Matrix}
     */
    variance(type?: KMatrixSettings): Matrix;
    /**
     * Standard deviation.
     * @param {KMatrixSettings} [type]
     * @returns {Matrix}
     */
    std(type?: KMatrixSettings): Matrix;
    /**
     * Mean absolute deviation.
     * - The "algorithm" can choose "0/mean"(default) and "1/median".
     * @param {?string|?number} [algorithm]
     * @param {KMatrixSettings} [type]
     * @returns {Matrix}
     */
    mad(algorithm?: string | number, type?: KMatrixSettings): Matrix;
    /**
     * Skewness.
     * @param {KMatrixSettings} [type]
     * @returns {Matrix}
     */
    skewness(type?: KMatrixSettings): Matrix;
    /**
     * Covariance matrix or Covariance value.
     * - Get a variance-covariance matrix from 1 matrix.
     * - Get a covariance from 2 vectors.
     * @param {KMatrixSettings|KMatrixInputData} [y_or_type]
     * @param {KMatrixSettings} [type]
     * @returns {Matrix}
     */
    cov(y_or_type?: KMatrixSettings | KMatrixInputData, type?: KMatrixSettings): Matrix;
    /**
     * The samples are standardize to a mean value of 0, standard deviation of 1.
     * @param {KMatrixSettings} [type]
     * @returns {Matrix}
     */
    standardization(type?: KMatrixSettings): Matrix;
    /**
     * Correlation matrix or Correlation coefficient.
     * - Get a correlation matrix from 1 matrix.
     * - Get a correlation coefficient from 2 vectors.
     * @param {KMatrixSettings|KMatrixInputData} [y_or_type]
     * @param {KMatrixSettings} [type]
     * @returns {Matrix}
     */
    corrcoef(y_or_type?: KMatrixSettings | KMatrixInputData, type?: KMatrixSettings): Matrix;
    /**
     * Sort.
     * - The "order" can choose "ascend"(default) and "descend".
     * @param {string} [order]
     * @param {KMatrixSettings} [type]
     * @returns {Matrix}
     */
    sort(order?: string, type?: KMatrixSettings): Matrix;
    /**
     * The positive or negative sign of this number.
     * - +1 if positive, -1 if negative, 0 if 0.
     * @returns {Matrix}
     */
    signum(): Matrix;
    /**
     * Subtract.
     * @param {KMatrixInputData} number
     * @returns {Matrix} A - B
     */
    subtract(number: KMatrixInputData): Matrix;
    /**
     * Multiply.
     * @param {KMatrixInputData} number
     * @returns {Matrix} A * B
     */
    multiply(number: KMatrixInputData): Matrix;
    /**
     * Divide.
     * @param {KMatrixInputData} number
     * @returns {Matrix} fix(A / B)
     */
    divide(number: KMatrixInputData): Matrix;
    /**
     * Remainder of division.
     * - Result has same sign as the Dividend.
     * @param {KMatrixInputData} number
     * @returns {Matrix} A % B
     */
    remainder(number: KMatrixInputData): Matrix;
    /**
     * To integer rounded down to the nearest.
     * @returns {Matrix} fix(A), trunc(A)
     */
    trunc(): Matrix;
    /**
     * 1
     * @type {Matrix}
     */
    static ONE: Matrix;
    /**
     * 2
     * @type {Matrix}
     */
    static TWO: Matrix;
    /**
     * 10
     * @type {Matrix}
     */
    static TEN: Matrix;
    /**
     * 0
     * @type {Matrix}
     */
    static ZERO: Matrix;
    /**
     * -1
     * @type {Matrix}
     */
    static MINUS_ONE: Matrix;
    /**
     * i, j
     * @type {Matrix}
     */
    static I: Matrix;
    /**
     * PI.
     * @type {Matrix}
     */
    static PI: Matrix;
    /**
     * 0.25 * PI.
     * @type {Matrix}
     */
    static QUARTER_PI: Matrix;
    /**
     * 0.5 * PI.
     * @type {Matrix}
     */
    static HALF_PI: Matrix;
    /**
     * 2 * PI.
     * @type {Matrix}
     */
    static TWO_PI: Matrix;
    /**
     * E, Napier's constant.
     * @type {Matrix}
     */
    static E: Matrix;
    /**
     * log_e(2)
     * @type {Matrix}
     */
    static LN2: Matrix;
    /**
     * log_e(10)
     * @type {Matrix}
     */
    static LN10: Matrix;
    /**
     * log_2(e)
     * @type {Matrix}
     */
    static LOG2E: Matrix;
    /**
     * log_10(e)
     * @type {Matrix}
     */
    static LOG10E: Matrix;
    /**
     * sqrt(2)
     * @type {Matrix}
     */
    static SQRT2: Matrix;
    /**
     * sqrt(0.5)
     * @type {Matrix}
     */
    static SQRT1_2: Matrix;
    /**
     * 0.5
     * @type {Matrix}
     */
    static HALF: Matrix;
    /**
     * Positive infinity.
     * @type {Matrix}
     */
    static POSITIVE_INFINITY: Matrix;
    /**
     * Negative Infinity.
     * @type {Matrix}
     */
    static NEGATIVE_INFINITY: Matrix;
    /**
     * Not a Number.
     * @type {Matrix}
     */
    static NaN: Matrix;
}

/**
 * Class for linear algebra for `Matrix` class.
 * - These methods can be used in the `Matrix` method chain.
 * - This class cannot be called directly.
 */
declare class LinearAlgebra {
    /**
     * Inner product/Dot product.
     * @param {KMatrixInputData} A
     * @param {KMatrixInputData} B
     * @param {KMatrixInputData} [dimension=1] - Dimension of matrix used for calculation. (1 or 2)
     * @returns {Matrix} A・B
     */
    static inner(A: any, B: any, dimension: any): Matrix;
    /**
     * p-norm.
     * @param {KMatrixInputData} mat
     * @param {KMatrixInputData} [p=2]
     * @returns {number}
     */
    static norm(mat: any, p: any): number;
    /**
     * Condition number of the matrix
     * @param {KMatrixInputData} mat
     * @param {KMatrixInputData} [p=2]
     * @returns {number}
     */
    static cond(mat: any, p: any): number;
    /**
     * Inverse condition number.
     * @param {KMatrixInputData} mat
     * @returns {number}
     */
    static rcond(mat: any): number;
    /**
     * Rank.
     * @param {KMatrixInputData} mat
     * @param {KMatrixInputData} [tolerance] - Calculation tolerance of calculation.
     * @returns {number} rank(A)
     */
    static rank(mat: any, tolerance: any): number;
    /**
     * Trace of a matrix.
     * Sum of diagonal elements.
     * @param {KMatrixInputData} mat
     * @returns {Complex}
     */
    static trace(mat: any): Complex;
    /**
     * Determinant.
     * @param {KMatrixInputData} mat
     * @returns {Matrix} |A|
     */
    static det(mat: any): Matrix;
    /**
     * LUP decomposition.
     * - P'*L*U=A
     * - P is permutation matrix.
     * - L is lower triangular matrix.
     * - U is upper triangular matrix.
     * @param {KMatrixInputData} mat - A
     * @returns {{P: Matrix, L: Matrix, U: Matrix}} {L, U, P}
     */
    static lup(mat: any): {P: Matrix, L: Matrix, U: Matrix};
    /**
     * LU decomposition.
     * - L*U=A
     * - L is lower triangular matrix.
     * - U is upper triangular matrix.
     * @param {KMatrixInputData} mat - A
     * @returns {{L: Matrix, U: Matrix}} {L, U}
     */
    static lu(mat: any): {L: Matrix, U: Matrix};
    /**
     * Solving a system of linear equations to be Ax = B
     * @param {KMatrixInputData} mat - A
     * @param {KMatrixInputData} number - B
     * @returns {Matrix} x
     * @todo 安定化のためQR分解を用いた手法に切り替える。あるいはlup分解を使用した関数に作り替える。
     */
    static linsolve(mat: any, number: any): Matrix;
    /**
     * QR decomposition.
     * - Q*R=A
     * - Q is orthonormal matrix.
     * - R is upper triangular matrix.
     * @param {KMatrixInputData} mat - A
     * @returns {{Q: Matrix, R: Matrix}} {Q, R}
     */
    static qr(mat: any): {Q: Matrix, R: Matrix};
    /**
     * Tridiagonalization of symmetric matrix.
     * - Don't support complex numbers.
     * - P*H*P'=A
     * - P is orthonormal matrix.
     * - H is tridiagonal matrix.
     * - The eigenvalues of H match the eigenvalues of A.
     * @param {KMatrixInputData} mat - A
     * @returns {{P: Matrix, H: Matrix}} {P, H}
     */
    static tridiagonalize(mat: any): {P: Matrix, H: Matrix};
    /**
     * Eigendecomposition of symmetric matrix.
     * - Don't support complex numbers.
     * - V*D*V'=A.
     * - V is orthonormal matrix. and columns of V are the right eigenvectors.
     * - D is a matrix containing the eigenvalues on the diagonal component.
     * @param {KMatrixInputData} mat - A
     * @returns {{V: Matrix, D: Matrix}} {D, V}
     * @todo 対称行列しか対応できていないので、対称行列ではないものはQR分解を用いた手法に切り替える予定。
     */
    static eig(mat: any): {V: Matrix, D: Matrix};
    /**
     * Singular Value Decomposition (SVD).
     * - U*S*V'=A
     * - U and V are orthonormal matrices.
     * - S is a matrix with singular values in the diagonal.
     * @param {KMatrixInputData} mat - A
     * @returns {{U: Matrix, S: Matrix, V: Matrix}} U*S*V'=A
     */
    static svd(mat: any): {U: Matrix, S: Matrix, V: Matrix};
    /**
     * Inverse matrix of this matrix.
     * @param {KMatrixInputData} mat - A
     * @returns {Matrix} A^-1
     */
    static inv(mat: any): Matrix;
    /**
     * Pseudo-inverse matrix.
     * @param {KMatrixInputData} mat - A
     * @returns {Matrix} A^+
     */
    static pinv(mat: any): Matrix;
}

/**
 * Collection for calculating probability using real numbers.
 * - These methods can be used in the `Matrix`, `Complex` method chain.
 * - This class cannot be called directly.
 */
declare class Probability {
    /**
     * Log-gamma function.
     * @param {number} x
     * @returns {number}
     */
    static gammaln(x: number): number;
    /**
     * Incomplete gamma function upper side.
     * @param {number} x
     * @param {number} a
     * @param {number} gammaln_a
     * @returns {number}
     */
    static q_gamma(x: number, a: number, gammaln_a: number): number;
    /**
     * Incomplete gamma function lower side.
     * @param {number} x
     * @param {number} a
     * @param {number} gammaln_a
     * @returns {number}
     */
    static p_gamma(x: number, a: number, gammaln_a: number): number;
    /**
     * Gamma function.
     * @param {number} z
     * @returns {number}
     */
    static gamma(z: number): number;
    /**
     * Incomplete gamma function.
     * @param {number} x
     * @param {number} a
     * @param {string} [tail="lower"] - lower (default) , "upper"
     * @returns {number}
     */
    static gammainc(x: number, a: number, tail?: string): number;
    /**
     * Probability density function (PDF) of the gamma distribution.
     * @param {number} x
     * @param {number} k - Shape parameter.
     * @param {number} s - Scale parameter.
     * @returns {number}
     */
    static gampdf(x: number, k: number, s: number): number;
    /**
     * Cumulative distribution function (CDF) of gamma distribution.
     * @param {number} x
     * @param {number} k - Shape parameter.
     * @param {number} s - Scale parameter.
     * @returns {number}
     */
    static gamcdf(x: number, k: number, s: number): number;
    /**
     * Inverse function of cumulative distribution function (CDF) of gamma distribution.
     * @param {number} p
     * @param {number} k - Shape parameter.
     * @param {number} s - Scale parameter.
     * @returns {number}
     */
    static gaminv(p: number, k: number, s: number): number;
    /**
     * Beta function.
     * @param {number} x
     * @param {number} y
     * @returns {number}
     */
    static beta(x: number, y: number): number;
    /**
     * Incomplete beta function lower side.
     * @param {number} x
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    static p_beta(x: number, a: number, b: number): number;
    /**
     * Incomplete beta function upper side.
     * @param {number} x
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    static q_beta(x: number, a: number, b: number): number;
    /**
     * Incomplete beta function.
     * @param {number} x
     * @param {number} a
     * @param {number} b
     * @param {string} [tail="lower"] - lower (default) , "upper"
     * @returns {number}
     */
    static betainc(x: number, a: number, b: number, tail?: string): number;
    /**
     * Probability density function (PDF) of beta distribution.
     * @param {number} x
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    static betapdf(x: number, a: number, b: number): number;
    /**
     * Cumulative distribution function (CDF) of beta distribution.
     * @param {number} x
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    static betacdf(x: number, a: number, b: number): number;
    /**
     * Inverse function of cumulative distribution function (CDF) of beta distribution.
     * @param {number} p
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    static betainv(p: number, a: number, b: number): number;
    /**
     * Factorial function, x!.
     * @param {number} n
     * @returns {number}
     */
    static factorial(n: number): number;
    /**
     * Binomial coefficient, number of all combinations, nCk.
     * @param {number} n
     * @param {number} k
     * @returns {number} nCk
     */
    static nchoosek(n: number, k: number): number;
    /**
     * Error function.
     * @param {number} x
     * @returns {number}
     */
    static erf(x: number): number;
    /**
     * Complementary error function.
     * @param {number} x
     * @returns {number}
     */
    static erfc(x: number): number;
    /**
     * Inverse function of error function.
     * @param {number} p
     * @returns {number}
     */
    static erfinv(p: number): number;
    /**
     * Inverse function of complementary error function.
     * @param {number} p
     * @returns {number}
     */
    static erfcinv(p: number): number;
    /**
     * Probability density function (PDF) of normal distribution.
     * @param {number} x
     * @param {number} [u=0.0] - Average value.
     * @param {number} [s=1.0] - Variance value.
     * @returns {number}
     */
    static normpdf(x: number, u?: number, s?: number): number;
    /**
     * Cumulative distribution function (CDF) of normal distribution.
     * @param {number} x
     * @param {number} [u=0.0] - Average value.
     * @param {number} [s=1.0] - Variance value.
     * @returns {number}
     */
    static normcdf(x: number, u?: number, s?: number): number;
    /**
     * Inverse function of cumulative distribution function (CDF) of normal distribution.
     * @param {number} p - Probability.
     * @param {number} [u=0.0] - Average value.
     * @param {number} [s=1.0] - Variance value.
     * @returns {number}
     */
    static norminv(p: number, u?: number, s?: number): number;
    /**
     * Probability density function (PDF) of binomial distribution.
     * @param {number} x
     * @param {number} n
     * @param {number} p
     * @returns {number}
     */
    static binopdf(x: number, n: number, p: number): number;
    /**
     * Cumulative distribution function (CDF) of binomial distribution.
     * @param {number} x
     * @param {number} n
     * @param {number} p
     * @param {string} [tail="lower"] - lower (default) , "upper"
     * @returns {number}
     */
    static binocdf(x: number, n: number, p: number, tail?: string): number;
    /**
     * Inverse function of cumulative distribution function (CDF) of binomial distribution.
     * @param {number} y
     * @param {number} n
     * @param {number} p
     * @returns {number}
     */
    static binoinv(y: number, n: number, p: number): number;
    /**
     * Probability density function (PDF) of Poisson distribution.
     * @param {number} k
     * @param {number} lambda
     * @returns {number}
     */
    static poisspdf(k: number, lambda: number): number;
    /**
     * Cumulative distribution function (CDF) of Poisson distribution.
     * @param {number} k
     * @param {number} lambda
     * @returns {number}
     */
    static poisscdf(k: number, lambda: number): number;
    /**
     * Inverse function of cumulative distribution function (CDF) of Poisson distribution.
     * @param {number} p
     * @param {number} lambda
     * @returns {number}
     */
    static poissinv(p: number, lambda: number): number;
    /**
     * Probability density function (PDF) of Student's t-distribution.
     * @param {number} t - T-value.
     * @param {number} v - The degrees of freedom. (DF)
     * @returns {number}
     */
    static tpdf(t: number, v: number): number;
    /**
     * Cumulative distribution function (CDF) of Student's t-distribution.
     * @param {number} t - T-value.
     * @param {number} v - The degrees of freedom. (DF)
     * @returns {number}
     */
    static tcdf(t: number, v: number): number;
    /**
     * Inverse of cumulative distribution function (CDF) of Student's t-distribution.
     * @param {number} p - Probability.
     * @param {number} v - The degrees of freedom. (DF)
     * @returns {number}
     */
    static tinv(p: number, v: number): number;
    /**
     * Cumulative distribution function (CDF) of Student's t-distribution that can specify tail.
     * @param {number} t - T-value.
     * @param {number} v - The degrees of freedom. (DF)
     * @param {number} tails - Tail. (1 = the one-tailed distribution, 2 =  the two-tailed distribution.)
     * @returns {number}
     */
    static tdist(t: number, v: number, tails: number): number;
    /**
     * Inverse of cumulative distribution function (CDF) of Student's t-distribution in two-sided test.
     * @param {number} p - Probability.
     * @param {number} v - The degrees of freedom. (DF)
     * @returns {number}
     */
    static tinv2(p: number, v: number): number;
    /**
     * Probability density function (PDF) of chi-square distribution.
     * @param {number} x
     * @param {number} k - The degrees of freedom. (DF)
     * @returns {number}
     */
    static chi2pdf(x: number, k: number): number;
    /**
     * Cumulative distribution function (CDF) of chi-square distribution.
     * @param {number} x
     * @param {number} k - The degrees of freedom. (DF)
     * @returns {number}
     */
    static chi2cdf(x: number, k: number): number;
    /**
     * Inverse function of cumulative distribution function (CDF) of chi-square distribution.
     * @param {number} p - Probability.
     * @param {number} k - The degrees of freedom. (DF)
     * @returns {number}
     */
    static chi2inv(p: number, k: number): number;
    /**
     * Probability density function (PDF) of F-distribution.
     * @param {number} x
     * @param {number} d1 - The degree of freedom of the molecules.
     * @param {number} d2 - The degree of freedom of the denominator
     * @returns {number}
     */
    static fpdf(x: number, d1: number, d2: number): number;
    /**
     * Cumulative distribution function (CDF) of F-distribution.
     * @param {number} x
     * @param {number} d1 - The degree of freedom of the molecules.
     * @param {number} d2 - The degree of freedom of the denominator
     * @returns {number}
     */
    static fcdf(x: number, d1: number, d2: number): number;
    /**
     * Inverse function of cumulative distribution function (CDF) of F-distribution.
     * @param {number} p - Probability.
     * @param {number} d1 - The degree of freedom of the molecules.
     * @param {number} d2 - The degree of freedom of the denominator
     * @returns {number}
     */
    static finv(p: number, d1: number, d2: number): number;
}

/**
 * 初期化
 * @param {number} [seed] - Seed number for random number generation. If not specified, create from time.
 */
declare class Random {
    constructor(seed?: number);
    /**
     * シード値の初期化
     * @param {number} seed
     */
    setSeed(seed: number): void;
    /**
     * 指定したビット長以下で表せられる乱数生成
     * @param {number} bits - Required number of bits (up to 64 possible).
     * @returns {number}
     */
    next(bits: number): number;
    /**
     * 8ビット長整数の乱数の配列
     * @param {number} size - 必要な長さ
     * @returns {Array<number>}
     */
    nextBytes(size: number): number[];
    /**
     * 16ビット長整数の乱数
     * @returns {number}
     */
    nextShort(): number;
    /**
     * 32ビット長整数の乱数
     * @param {number} [x] - 指定した値未満の数値を作る
     * @returns {number}
     */
    nextInt(x?: number): number;
    /**
     * 64ビット長整数の乱数
     * @returns {number}
     */
    nextLong(): number;
    /**
     * bool値の乱数
     * @returns {boolean}
     */
    nextBoolean(): boolean;
    /**
     * float精度の実数
     * @returns {number}
     */
    nextFloat(): number;
    /**
     * double精度の実数
     * @returns {number}
     */
    nextDouble(): number;
    /**
     * ガウシアン分布に従う乱数
     * @returns {number}
     */
    nextGaussian(): number;
}

/**
 * Collection of calculation settings for matrix.
 * - Available options vary depending on the method.
 * @typedef {Object} KStatisticsSettings
 * @property {?string|?number} [dimension="auto"] Calculation direction. 0/"auto", 1/"row", 2/"column", 3/"both".
 * @property {Object} [correction] Correction value. For statistics. 0(unbiased), 1(sample).
 */
declare type KStatisticsSettings = {
    dimension?: string | number;
    correction?: any;
};

/**
 * Class for statistical processing for `Matrix` class.
 * - These methods can be used in the `Matrix` method chain.
 * - This class cannot be called directly.
 */
declare class Statistics {
    /**
     * Maximum number.
     * @param {KMatrixInputData} x
     * @param {KStatisticsSettings} [type]
     * @returns {Matrix} max([A, B])
     */
    static max(x: any, type?: KStatisticsSettings): Matrix;
    /**
     * Minimum number.
     * @param {KMatrixInputData} x
     * @param {KStatisticsSettings} [type]
     * @returns {Matrix} min([A, B])
     */
    static min(x: any, type?: KStatisticsSettings): Matrix;
    /**
     * Sum.
     * @param {KMatrixInputData} x
     * @param {KStatisticsSettings} [type]
     * @returns {Matrix}
     */
    static sum(x: any, type?: KStatisticsSettings): Matrix;
    /**
     * Arithmetic average.
     * @param {KMatrixInputData} x
     * @param {KStatisticsSettings} [type]
     * @returns {Matrix}
     */
    static mean(x: any, type?: KStatisticsSettings): Matrix;
    /**
     * Product of array elements.
     * @param {KMatrixInputData} x
     * @param {KStatisticsSettings} [type]
     * @returns {Matrix}
     */
    static prod(x: any, type?: KStatisticsSettings): Matrix;
    /**
     * Geometric mean.
     * @param {KMatrixInputData} x
     * @param {KStatisticsSettings} [type]
     * @returns {Matrix}
     */
    static geomean(x: any, type?: KStatisticsSettings): Matrix;
    /**
     * Median.
     * @param {KMatrixInputData} x
     * @param {KStatisticsSettings} [type]
     * @returns {Matrix}
     */
    static median(x: any, type?: KStatisticsSettings): Matrix;
    /**
     * Mode.
     * @param {KMatrixInputData} x
     * @param {KStatisticsSettings} [type]
     * @returns {Matrix}
     */
    static mode(x: any, type?: KStatisticsSettings): Matrix;
    /**
     * Moment.
     * - Moment of order n. Equivalent to the definition of variance at 2.
     * @param {KMatrixInputData} x
     * @param {number} nth_order
     * @param {KStatisticsSettings} [type]
     * @returns {Matrix}
     */
    static moment(x: any, nth_order: number, type?: KStatisticsSettings): Matrix;
    /**
     * Variance.
     * @param {KMatrixInputData} x
     * @param {KStatisticsSettings} [type]
     * @returns {Matrix}
     */
    static variance(x: any, type?: KStatisticsSettings): Matrix;
    /**
     * Standard deviation.
     * @param {KMatrixInputData} x
     * @param {KStatisticsSettings} [type]
     * @returns {Matrix}
     */
    static std(x: any, type?: KStatisticsSettings): Matrix;
    /**
     * Mean absolute deviation.
     * - The "algorithm" can choose "0/mean"(default) and "1/median".
     * @param {KMatrixInputData} x
     * @param {?string|?number} [algorithm]
     * @param {KStatisticsSettings} [type]
     * @returns {Matrix}
     */
    static mad(x: any, algorithm?: string | number, type?: KStatisticsSettings): Matrix;
    /**
     * Skewness.
     * @param {KMatrixInputData} x
     * @param {KStatisticsSettings} [type]
     * @returns {Matrix}
     */
    static skewness(x: any, type?: KStatisticsSettings): Matrix;
    /**
     * Covariance matrix or Covariance value.
     * - Get a variance-covariance matrix from 1 matrix.
     * - Get a covariance from 2 vectors.
     * @param {KMatrixInputData} x
     * @param {KStatisticsSettings|KMatrixInputData} [y_or_type]
     * @param {KStatisticsSettings} [type]
     * @returns {Matrix}
     */
    static cov(x: any, y_or_type: any, type?: KStatisticsSettings): Matrix;
    /**
     * The samples are standardize to a mean value of 0, standard deviation of 1.
     * @param {KMatrixInputData} x
     * @param {KStatisticsSettings} [type]
     * @returns {Matrix}
     */
    static standardization(x: any, type?: KStatisticsSettings): Matrix;
    /**
     * Correlation matrix or Correlation coefficient.
     * - Get a correlation matrix from 1 matrix.
     * - Get a correlation coefficient from 2 vectors.
     * @param {KMatrixInputData} x
     * @param {KStatisticsSettings|KMatrixInputData} [y_or_type]
     * @param {KStatisticsSettings} [type]
     * @returns {Matrix}
     */
    static corrcoef(x: any, y_or_type: any, type?: KStatisticsSettings): Matrix;
    /**
     * Sort.
     * - The "order" can choose "ascend"(default) and "descend".
     * @param {KMatrixInputData} x
     * @param {string} [order]
     * @param {KStatisticsSettings} [type]
     * @returns {Matrix}
     */
    static sort(x: any, order?: string, type?: KStatisticsSettings): Matrix;
}

