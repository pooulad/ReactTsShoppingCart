import { ReactNode, createContext, useContext, useState } from "react";

type CartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  qty: number;
};

type CartContext = {
  getItemQty: (id: number) => number;
  addItem: (id: number) => void;
  decreaseItem: (id: number) => void;
  removeItem: (id: number) => void;
};

const CartContext = createContext({} as CartContext);

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  return (
    <CartContext.Provider value={CartContext}>{children}</CartContext.Provider>
  );
}
