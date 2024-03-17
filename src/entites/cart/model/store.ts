import { create } from "zustand";

interface ProductRating {
  rate: number;
  count: number;
}
export interface ProductState {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
  count: number;
}

interface Cart {
  products: ProductState[];
  deleteProduct: (product: ProductState) => void;
  addProduct: (product: ProductState) => void;
  subtractProduct: (id: ProductState) => void;
}


function addProduct(state: Cart, product: ProductState) {
  const index = state.products.findIndex(pr => pr.id === product.id)
  if (index !== -1) {
    state.products[index] = { ...state.products[index], count: Math.min(state.products[index].count + 1, 10) }
    return state.products;
  } 
  
  return [...state.products, product];
}

function subtractProduct(state: Cart, product: ProductState) {
  const index = state.products.findIndex(pr => pr.id === product.id)
  if (index !== -1) {
    if (state.products[index].count === 1) {
      return state.products.filter(pr => pr.id !== product.id);
    }

    state.products[index] = { ...state.products[index], count: state.products[index].count - 1 }
    return state.products;
  } 
  return state.products;
}

function deleteProduct(state: Cart, product: ProductState) {
  return state.products.filter(pr=> pr.id !== product.id);
}


export const useCartStore = create<Cart>(set => ({
  products: [],
  deleteProduct: (product: ProductState) => set(state => ({ 
    products: deleteProduct(state, product)
  })),
  addProduct: (product: ProductState) => set(state => (
    {
      products: [...addProduct(state, product)]
    }
  )),
  subtractProduct: (product: ProductState) => set(state => ({
    products: [...subtractProduct(state, product)],
  })),
}));