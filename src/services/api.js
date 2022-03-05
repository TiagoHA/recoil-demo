const products = [
  { name: 'Toothbrush', price: 10 },
  { name: 'Smart TV', price: 800 },
  { name: 'Laptop', price: 600 },
  { name: 'Chocolate', price: 12 },
  { name: 'Apple juice', price: 5 },
];

export async function getProductsFromDB() {
  console.log('dbg ~ getProductsFromDB ~ getProductsFromDB');

  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 2500);
  });
}
