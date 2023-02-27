/* eslint-disable @next/next/no-img-element */
import { FaUser, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";

function Navbar() {
  const { showCart, setShowCart } = useStateContext();
  return (
    <div className=" w-full sm:px-20 py-6 px-10 backdrop-blur-lg bg-white/30">
      <div className=" flex justify-between w-full">
        <div className="flex justify-center items-center gap-2">
          <Image src={Logo} alt="Logo" width={30} height={30} />
          <h1 className="mt-1 font-semibold">JIBRUK</h1>
        </div>

        <div className="flex items-center justify-center gap-8 ">
          <FaUser />
          <div onClick={() => setShowCart(true)}>
            <FaShoppingCart cursor="pointer" />
          </div>
        </div>

        {showCart && <Cart />}
      </div>
    </div>
  );
}

export default Navbar;
