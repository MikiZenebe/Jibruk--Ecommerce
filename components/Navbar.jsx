/* eslint-disable @next/next/no-img-element */
import { FaUser, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Link from "next/link";
import { useStateContext } from "../context/StateContext";

function Navbar() {
  const { showCart, setShowCart, totalQty } = useStateContext();
  return (
    <div className=" w-full sm:px-20 py-6 px-10 backdrop-blur-lg bg-white/30">
      <div className=" flex justify-between w-full">
        <Link href={"/"}>
          <div className="flex justify-center items-center gap-2">
            <Image src={Logo} alt="Logo" width={30} height={30} />
            <h1 className="mt-1 font-semibold">JIBRUK</h1>
          </div>
        </Link>

        <div className="flex items-center justify-center gap-8 ">
          <FaUser />
          {/* margin-left: 3rem; position: relative; display: flex; flex-direction:
          column; align-items: center; */}
          <div className="relative flex flex-col items-center">
            {totalQty > 0 && (
              <span className="bg-[#d35050] w-4 h-4 flex justify-center items-center rounded-[50%] text-white text-[0.80rem] absolute right-[-60%] top-[-58%] pointer-events-none">
                {totalQty}
              </span>
            )}
            <FaShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
