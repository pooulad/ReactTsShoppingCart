import { ReactNode, createContext, useContext } from "react";

type CartProviderProps = {
  children: ReactNode;
};

const CartContext = createContext({});

