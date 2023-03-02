import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  //Add our data for the state
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [qty, setQty] = useState(1);
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  //Increase Quantity
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  //Decrease Quantity
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1; //stop on 1 If it trys to go lessthan 1
      return prevQty - 1; //minus 1 whatever the number is
    });
  };

  //Add product to cart
  const cartAdd = (product, quantity) => {
    //Check if the product is in cart
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }

    //Total Price
    setTotalPrice((prevTotal) => prevTotal + product.price * quantity);

    //Increase total quantity
    setTotalQty((prevTotal) => prevTotal + quantity); //Display on the cart icon
  };

  //Remove Product
  const onRemove = (product) => {
    //Check if the product is already in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);

    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }

    //Total Price
    setTotalPrice((prevTotal) => prevTotal - product.price);

    //Decrease total quantitiy
    setTotalQty((prevTotal) => prevTotal - 1); //Display on the cart icon
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
        onRemove,
        totalQty,
        totalPrice,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
