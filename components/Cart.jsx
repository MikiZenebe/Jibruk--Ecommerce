/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineDelete,
  AiOutlineLeft,
} from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import Link from "next/link";
import { motion } from "framer-motion";
import { wrapper, empty, cards, card } from "../animation/CartAnimation";

function Cart() {
  const {
    totalPrice,
    totalQty,
    cartItems,
    setShowCart,
    cartAdd,
    onRemove,
    onRemoveCard,
    qty,
  } = useStateContext();

  return (
    <motion.div
      variants={wrapper}
      animate="show"
      initial="hidden"
      exit={{ type: "tween" }}
      className="bg-[#00000066] w-full h-[100vh] fixed right-0 top-0 z-[100] flex justify-end "
    >
      <motion.div
        initial={{ x: "50%" }}
        animate={{ x: "0%" }}
        transition={{ type: "tween" }}
        exit={{ x: "50%" }}
        className="bg-[#F1F2F6] w-[350px] overflow-y-scroll relative"
      >
        <div className="pt-5 pl-4 flex items-center gap-2">
          <AiOutlineLeft cursor="pointer" onClick={() => setShowCart(false)} />
          <span className="font-semibold">Your Cart</span>
          <span>({totalQty} items)</span>
        </div>

        {cartItems.length < 1 && (
          <motion.div
            variants={empty}
            animate="show"
            initial="hidden"
            className="flex flex-col justify-center items-center h-[70vh]"
          >
            <h1 className="text-2xl font-bold">Nothing in your cart 😔</h1>
            <Link href={`/`}>
              <button
                className="card bg-black text-white justify-center items-center text-center px-8 w-[200px] p-2 rounded-md mt-12"
                onClick={() => setShowCart(false)}
              >
                Go to Shopping
              </button>
            </Link>
          </motion.div>
        )}

        <motion.div layout variants={card} animate="show" initial="hidden">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div layout key={item._id}>
                <div
                  style={{
                    boxShadow: " 0px 70px 73px -33px rgba(0, 0, 0, 0.062)",
                  }}
                  className="flex justify-center items-center mt-10 ml-6 h-[130px]  gap-9 bg-white w-[300px]  rounded-lg relative"
                >
                  <div className="absolute right-2 top-2 hover:text-red-500 cursor-pointer card">
                    <AiOutlineDelete onClick={() => onRemoveCard(item)} />
                  </div>
                  <img
                    className="card w-[60px] relative"
                    src={urlFor(item.image[0])}
                    alt=""
                  />

                  <div className="flex flex-col text-gray-700 w-[180px]  mt-1">
                    <h5 className="font-bold text-[14px]">{item.name}</h5>
                    <h5 className="font-semibold">${item.price}</h5>

                    <div className="mt-4 flex items-center gap-3 text-black text-[14px]">
                      <p className="font-semibold ">Quantity</p>

                      <span className="cursor-pointer">
                        <AiOutlineMinusCircle onClick={() => onRemove(item)} />
                      </span>

                      <span>{item.quantity}</span>

                      <span className="cursor-pointer">
                        <AiOutlinePlusCircle onClick={() => cartAdd(item, 1)} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </motion.div>
        {cartItems.length >= 1 && (
          <div className="bg-[#F1F2F6] flex flex-col sticky bottom-0 pb-5 gap-4">
            <div className="flex justify-between mt-4 px-4 font-semibold">
              <span>Subtotal:</span>
              <span className="justify-end">${totalPrice}</span>
            </div>
            <button className="bg-black w-[150px] ml-24 py-1  text-white font-bold rounded-md card">
              Purchase
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Cart;
