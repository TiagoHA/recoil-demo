import { atom, selector } from 'recoil';
import { getProductsFromDB } from '../../services/api';

export const cartState = atom({
  key: 'cartState',
  default: [],
});

export const shopDiscountState = atom({
  key: 'shopDiscountState',
  default: {
    discount: 0,
  },
});

export const cartDetailsSelector = selector({
  key: 'cartDetailsSelector',
  get: ({ get }) => {
    const { discount } = get(shopDiscountState);
    const cart = get(cartState);

    const total = cart.reduce((prev, cur) => prev + cur.price, 0);
    const discountAmount = (total * discount).toFixed(2);

    return {
      total,
      discountAmount,
    };
  },
  set: ({ set }, newValue) => {
    set(cartState, newValue);
  },
  reset: ({ reset }) => {
    reset(cartState);
  },
});

export const discountProductSelector = selector({
  key: 'discountProductSelector',
  get: ({ get }) => get(shopDiscountState),
  set: ({ set, get }, discount) => {
    const shopDiscount = get(shopDiscountState);

    const _discount = { ...shopDiscount, discount };

    set(shopDiscountState, _discount);
  },
});

export const removeProductCartSelector = selector({
  key: 'removeProductCartSelector',
  get: ({ get }) => get(cartState),
  set: ({ set, get }, product) => {
    const cart = get(cartState);

    const removedProduct = cart.filter((item) => item.name !== product.name);

    set(cartState, removedProduct);
  },
});

export const addProductCartSelector = selector({
  key: 'addProductCartSelector',
  get: ({ get }) => get(cartState),
  set: ({ set, get }, product) => {
    const cart = get(cartState);

    const addedProduct = cart.find((item) => item.name === product.name)
      ? cart
      : [...cart, product];

    set(cartState, addedProduct);
  },
});

export const productsQuery = selector({
  key: 'products',
  get: async () => getProductsFromDB(),
});
