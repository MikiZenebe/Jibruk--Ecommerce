/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" p-14 justify-center items-center w-full bg-[#ededed]">
      <div className="flex gap-4 flex-col items-center justify-between">
        <div>
          <h1>
            <span className="font-semibold text-gray-500"> Developed by:</span>{" "}
            <span className="font-medium text-gray-700">Micky</span>
          </h1>
        </div>

        <div className="flex gap-4 text-gray-600">
          <Link href={"https://github.com/MikiZenebe"}>
            <p>
              <FaGithub className="card cursor-pointer" />
            </p>
          </Link>

          <Link href={"https://t.me/Miki_Zenebe"}>
            <p>
              {" "}
              <FaTelegram className="card cursor-pointer" />
            </p>
          </Link>

          <Link href={"https://www.instagram.com/micky_zenebe/"}>
            <p>
              <FaInstagram className="card cursor-pointer" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
