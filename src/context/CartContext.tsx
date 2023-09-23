import { ReactNode, createContext, useContext } from "react";

type CartProviderProps = {
  children: ReactNode;
};

const CartContext = createContext({});

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  return (
    <CartContext.Provider value={CartContext}>{children}</CartContext.Provider>
  );
}
