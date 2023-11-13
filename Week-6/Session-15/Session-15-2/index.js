// Initialize WeakMap to track product views and WeakSet for cart items
let productViews = new WeakMap();
let cartItems = new WeakSet();

// Function to increment product views
const incrementProductViews = (productId) => {
    // debugger;
    let keyObj = {"id" : productId};
  if (productViews.has(keyObj)) {
    productViews.set(keyObj, productViews.get(keyObj) + 1);
  } else {
    productViews.set(keyObj, 1);
  }
 
  return `Product ID ${productId} is viewed for the ${productViews.get(
    keyObj
  )} time`;
}

const addToCart = (productId) => {
 //   debugger;
  if (cartItems.has({ "id" : productId})) {
    return "Product already in cart";
  } else {
    cartItems.add({ "id" : productId});
    return "Product added to cart";
  }
}

// Example usage:
console.log(incrementProductViews(100)); // Product ID 100 is viewed for the first time
console.log(incrementProductViews(101)); // Product ID 101 is viewed for the first time
console.log(incrementProductViews(100)); // Product ID 100 is viewed for the second time

console.log(addToCart(123)); // "Product added to cart"
console.log(addToCart(123)); // "Product already in cart"

