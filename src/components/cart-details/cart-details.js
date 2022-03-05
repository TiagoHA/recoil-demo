import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { cartDetailsSelector, shopDiscountState } from '../../store/cart/cartStore';

export default function CartDetails() {
  const { discount } = useRecoilValue(shopDiscountState);
  const [{ total, discountAmount }] = useRecoilState(cartDetailsSelector);
  const resetCart = useResetRecoilState(cartDetailsSelector);

  return (
    <div>
      <p>
        DISCOUNT: {discount * 100}% (${discountAmount})
      </p>
      <p>TOTAL: {total}</p>
      <p>TOTAL AFTER DISCOUNT: {total - discountAmount}</p>
      <button onClick={resetCart}>Clear cart</button>
    </div>
  );
}
