/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineDelete,
  AiOutlineLeft,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import CartAnim from "../assets/sale.gif";
import Link from "next/link";

function Cart() {
  const cartRef = useRef();
  const { totalPrice, totalQty, cartItems, setShowCart } = useStateContext();

  return (
    <div
      ref={cartRef}
      className="bg-[#00000066] w-full h-[100vh] fixed right-0 top-0 z-[100] flex justify-end"
    >
      <div className="bg-white w-[350px] overflow-y-scroll relative">
        <div className="pt-5 pl-4 flex items-center gap-2">
          <AiOutlineLeft cursor="pointer" onClick={() => setShowCart(false)} />
          <span className="font-semibold">Your Cart</span>
          <span>(items)</span>
        </div>

        {cartItems.length < 1 && (
          <div className="flex flex-col justify-center items-center h-[70vh]">
            <h1 className="text-2xl font-bold">Nothing in your cart 😔</h1>
            <Link href={`/`}>
              <button
                className="card bg-black text-white justify-center items-center text-center px-8 w-[200px] p-2 rounded-md mt-12"
                onClick={() => setShowCart(false)}
              >
                Go to Shopping
              </button>
            </Link>
          </div>
        )}

        <div>
          {cartItems.length >= 1 &&
            cartItems.map((item) => {
              <div>
                <img src={urlFor(item.image[0])} alt="" />

                <div>
                  <div>
                    <h5>{item.name}</h5>
                    <h4>{item.price}</h4>
                  </div>
                </div>
              </div>;
            })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
