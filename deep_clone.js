// Make a deep clone function in JavaScript that makes an array or a nested object without any original reference


function deepClone(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj; // Handle primitive values and null
    }
    const clone = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}
// Example usage:
const originalObject = { // Fixed variable name by removing space
    name: "Alice", // Added missing comma here
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown"
    },
    numbers: [1, 2, 3]
};
const clonedObject = deepClone(originalObject);
// Modify the cloned object
clonedObject.age = 31;
clonedObject.address.city = "Newtown";
clonedObject.numbers.push(4);
console.log("Original object:", originalObject);
console.log("Cloned object:", clonedObject);
