/* eslint-disable @next/next/no-img-element */
import { FaUser, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Link from "next/link";

function Navbar() {
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
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
