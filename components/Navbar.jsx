/* eslint-disable @next/next/no-img-element */
import { FaUser, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Link from "next/link";
import { useStateContext } from "../context/StateContext";
import { Cart } from "./index";
import User from "./User";
const { AnimatePresence, motion } = require("framer-motion");
import { useUser } from "@auth0/nextjs-auth0/client";

function Navbar() {
  const { showCart, setShowCart, totalQty } = useStateContext();
  // const { user } = useUser();

  // console.log(user);
  return (
    <div className=" w-full sm:px-20 py-6 px-10 backdrop-blur-lg bg-white/30">
      <div className=" flex justify-between w-full">
        <h1 className="mt-1 font-semibold">
          <div className="flex justify-center items-center gap-2">
            <Image src={Logo} alt="Logo" width={30} height={30} />
            <Link href={`/`}>JIBRUK</Link>
          </div>
        </h1>
        <div className="flex items-center justify-center gap-8 ">
          <User />

          <div
            className="flex flex-col justify-center items-center absolute sm:top-8 sm:right-20 top-8 right-14"
            onClick={() => setShowCart(true)}
          >
            {totalQty > 0 && (
              <motion.span
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                className="bg-[#d35050] w-4 h-4 flex justify-center items-center rounded-[50%] text-white text-[0.80rem] absolute right-[-60%] top-[-58%] pointer-events-none"
              >
                {totalQty}
              </motion.span>
            )}
            <FaShoppingCart className="hover:text-gray-600 card cursor-pointer" />
            <h3>Cart</h3>
          </div>

          <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
