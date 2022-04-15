// input: integer base, integer exponent
// output: integer the value of B base multiplied by itself P power times

// my attempt (no tail recursion)
const power = (base, exp) => exp === 0 ? 1 : base * power(base, --exp)

console.log(power(2,0)); // 1
console.log(power(2,2)); // 4
console.log(power(2,4)); // 24
console.log(power(3, 2)); // 9
console.log(power(5, 5)); // 3125

// tail reusrive attempt
const tailPower = (base, exp, product = 1) => exp == 0 ? product : tailPower(base, --exp, base * product);

console.log(power(2,0)); // 1
console.log(tailPower(2,2)); // 4
console.log(tailPower(2,4)); // 24
console.log(tailPower(3, 2)); // 9
console.log(tailPower(5, 5)); // 3125

