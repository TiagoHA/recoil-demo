import React from 'react';
import ShopDiscount from './components/shop-discount';
import ShopProducts from './components/shop-products';
import Cart from './components/cart';
import CartDetails from './components/cart-details';


export default function App() {
  return (
    <div>
      <ShopDiscount />
      <React.Suspense fallback={<div>Loading products...</div>}>
        <ShopProducts />
      </React.Suspense>
      <Cart />
      <CartDetails />
    </div>
  );
}
