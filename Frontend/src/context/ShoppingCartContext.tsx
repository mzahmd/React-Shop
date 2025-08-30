import { createContext, useState } from "react";

import { type IShopcart } from "@/interface/IShopCart";

interface ShoppingCartContextType {
  cartItems: Record<number, IShopcart>;
  addToCart: (cartItem: IShopcart) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null);

interface ShoppingCartProps {
  children: React.ReactNode;
}

function ShoppingCartContextProvider({ children }: ShoppingCartProps) {
  const [cartItems, setCartItems] = useState<Record<number, IShopcart>>({});

  const addToCart = (cartItem: IShopcart) => {
    setCartItems((prev) => ({
      ...prev,
      [cartItem.product.id]: { ...cartItem, quantity: (prev[cartItem.product.id]?.quantity || 0) + cartItem.quantity }
    }));
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => {
      const newCartItems = { ...prev };
      delete newCartItems[productId];
      return newCartItems;
    });
  };

  const clearCart = () => {
    setCartItems({});
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