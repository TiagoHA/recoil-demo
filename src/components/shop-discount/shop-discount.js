import { useRecoilState } from 'recoil';
import { discountProductSelector } from '../../store/cart/cartStore';

export default function ShopDiscount() {
  const [{ discount }, setShopState] = useRecoilState(discountProductSelector);

  function handleUpdateDiscount({ target: { value } }) {
    setShopState(value);
  }

  return (
    <div>
      Discount: 
      <select value={discount} onChange={handleUpdateDiscount}>
        <option value={0}>None</option>
        <option value={0.05}>5%</option>
        <option value={0.1}>10%</option>
        <option value={0.15}>15%</option>
      </select>
    </div>
  );
}
