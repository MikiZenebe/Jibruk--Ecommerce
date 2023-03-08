/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MdFactCheck } from "react-icons/md";
import { useRouter } from "next/router";

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
  console.log(order);
  return (
    <div className="h-[100vh] p-6">
      <div className="px-14 pb-12 bg-transparent flex justify-center items-center h-[100vh]">
        <div className=" h-[500px] w-[500px] bg-white rounded-2xl">
          <div className="flex flex-col justify-center items-center p-6">
            <MdFactCheck size={70} className="text-green-400" />
            <h1 className="text-[30px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-300">
              Payment Successful!
            </h1>
          </div>

          <div className="justify-center items-center flex flex-col ">
            <div className="flex gap-1">
              <p className="font-medium text-gray-700">Customer Email</p> :{" "}
              <span className="font-normal">
                {order.customer_details.email}
              </span>
            </div>
          </div>

          <div className="flex justify-center items-center py-4 font-medium text-gray-400">
            ---------------------------------------------------------
          </div>
        </div>
      </div>
    </div>
  );
}

export default success;
