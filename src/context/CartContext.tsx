import { ReactNode, createContext, useContext, useState } from "react";

type CartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  qty: number;
};


export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  return (
    <CartContext.Provider value={CartContext}>{children}</CartContext.Provider>
  );
}
