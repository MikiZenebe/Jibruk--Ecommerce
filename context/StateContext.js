import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  //Add our data for the state
  const [showCart, setShowCart] = useState(false);

  return (
    <ShopContext.Provider
      value={{
        showCart,
        setShowCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
