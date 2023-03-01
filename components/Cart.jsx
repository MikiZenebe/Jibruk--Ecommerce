import React, { useRef } from "react";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineDelete,
} from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

function Cart() {
  const cartRef = useRef();
  const { totalPrice, totalQty, cartItems, setShowCart } = useStateContext();

  return <div></div>;
}
