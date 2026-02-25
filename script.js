// 1. SET DISCOUNT (Currying)
// Just minus the discount from the price
const giveDiscount = (amount) => (price) => price - amount;

// 2. PROCESS (Callback)
const calculate = (price, discountFn, callback) => {
    const finalPrice = discountFn(price);
    callback(finalPrice);
};

// --- REAL EXAMPLES ---

// Create a "$10 OFF" rule
const minusTen = giveDiscount(10);

// Use it on $100
calculate(100, minusTen, (result) => {
    console.log("Result 1: " + result); // Output: 90
});

// Use it on $50
calculate(50, minusTen, (result) => {
    console.log("Result 2: " + result); // Output: 40
});