import { useRecoilValue, useSetRecoilState } from "recoil";
import { addProductCartSelector, productsQuery } from "../../store/cart/cartStore";

export default function ShopProducts() {
    const shopProducts = useRecoilValue(productsQuery);
    const addProductCart = useSetRecoilState(addProductCartSelector)
  
    return (
      <>
        PRODUCTS:
        <div>
          {shopProducts.map((product) => (
            <p key={product.name}>
              {product.name} (${product.price})
              <button onClick={() => addProductCart(product)}>Add</button>
            </p>
          ))}
        </div>
      </>
    );
  }