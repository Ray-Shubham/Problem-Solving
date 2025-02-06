// 5. sniCreate a function that takes voltage and current and returns the
// calculated power

function calculatePower(voltage, current) {
    return voltage * current;
}

let voltage = 12;
let current = 5;
let power = calculatePower(voltage, current);
console.log(`The power is ${power}`);
