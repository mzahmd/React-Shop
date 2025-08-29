import { createContext, useState } from "react";

import { type IShopcart } from "@/interface/IShopCart";

interface ShoppingCartContextType {
  cartItems: IShopcart[];
  addToCart: (cartItem: IShopcart) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null);

interface ShoppingCartProps {
  children: React.ReactNode;
}

function ShoppingCartContextProvider({ children }: ShoppingCartProps) {
  const [cartItems, setCartItems] = useState<IShopcart[]>([]);

  const addToCart = (cartItem: IShopcart) => {
    setCartItems((prev) => [...prev, cartItem]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((cartItem) => cartItem.product.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <ShoppingCartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartContext, ShoppingCartContextProvider };