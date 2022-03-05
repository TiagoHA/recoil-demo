import { useRecoilState } from 'recoil';
import { removeProductCartSelector } from '../../store/cart/cartStore';

export default function Cart() {
  const [products, onRemoveFromCart] = useRecoilState(removeProductCartSelector);

  const hasProducts = !products.length;

  if (hasProducts) {
    return <span>CART: Empty</span>;
  }

  return (
    <>
      CART:
      <div>
        {products.map((product) => (
          <p key={product.name}>
            {product.name} (${product.price})
            <button onClick={() => onRemoveFromCart(product)}>Remove</button>
          </p>
        ))}
      </div>
    </>
  );
}
