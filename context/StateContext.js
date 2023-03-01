import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  //Add our data for the state
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [qty, setQty] = useState(1);
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  //Increase Product Quantitiy
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  //Decrease Product Quantitiy
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1; //stop on 1 If it trys to go lessthan 1
      return prevQty - 1; //minus 1 whatever the number is
    });
  };

  //Add Product To Cart
  const cartAdd = (product, quantitiy) => {
    //Check if the product is in cart
    const exist = cartItems.find((item) => item.slug === product.slug);

    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantitiy: exist.quantitiy + quantitiy }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantitiy: quantitiy }]);
    }

    //Total Price
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantitiy
    );

    //Increase total quantity
    setTotalQty((prevTotalQty) => prevTotalQty + quantitiy); //Display on the cart icon
  };

  return (
    <ShopContext.Provider
      value={{
        qty,
        incQty,
        decQty,
        cartItems,
        showCart,
        setShowCart,
        cartAdd,
        totalQty,
        totalPrice,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
