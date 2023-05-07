/* Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array. */

// step 1. Defining the Tuple Type
type ProductTuple = [name: string, price: number, quantity: number];
// step 2. Defining the Array Type
type ProductArray = ProductTuple[];

// step 3. Defining the calculateTotalCost Function
function calculateTotalCost(products: ProductArray): number {
  return products.reduce((total, [name, price, quantity]) => total + price * quantity, 0);
}

const t: ProductArray = [
  ["P 1", 20, 3],
  ["P 2", 30, 3],
  ["P 3", 40, 3],
];

const totalCost: number = calculateTotalCost(t);

console.log(totalCost);
