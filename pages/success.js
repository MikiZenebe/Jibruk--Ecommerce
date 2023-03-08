/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MdFactCheck } from "react-icons/md";
import { useRouter } from "next/router";
import formatMoney from "../lib/formatMoney";
import { card } from "../animation/CartAnimation";
import { motion } from "framer-motion";

//Display the success checkout
const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  );
  return { props: { order } };
}

function success({ order }) {
  const route = useRouter();
  return (
    <div className="h-[100vh] p-6">
      <div className="px-14 pb-12 bg-transparent flex justify-center items-center h-[100vh]">
        <motion.div
          variants={card}
          animate="show"
          initial="hidden"
          className=" h-[500px] w-[500px] bg-white rounded-2xl"
        >
          <div className="flex flex-col justify-center items-center p-6">
            <MdFactCheck size={70} className="text-green-400" />
            <h1 className="text-[30px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-300">
              Payment Successful!
            </h1>
          </div>

          <div className="justify-center items-center flex flex-col ">
            <div className="flex gap-1">
              <p className="font-medium text-gray-400">Customer Email:</p>{" "}
              <span className="font-normal text-gray-400">
                {order.customer_details.email}
              </span>
            </div>

            <div className="flex justify-center items-center py-4 font-medium text-gray-400">
              ---------------------------------------------------------
            </div>

            <div className="text-gray-400">
              {order.line_items.data.map((item) => (
                <div key={item.id}>
                  <div className="flex justify-between gap-32 pb-6">
                    <p className="font-semibold">Product:</p>{" "}
                    <p>{item.description}</p>
                  </div>

                  <div className="flex justify-between gap-32 pb-6">
                    <p className="font-semibold">Price:</p>{" "}
                    <p>{formatMoney(item.price.unit_amount)}</p>
                  </div>

                  <div className="flex justify-between gap-32 pb-6">
                    <p className="font-semibold">Quantity:</p>{" "}
                    <p>{item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="bg-black w-[150px] text-[15px] mt-4 py-2  text-white font-semibold rounded-md focus:bg-gray-700 card"
              onClick={() => route.push("/")}
            >
              Continue Shopping
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default success;
