import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import styled from "styled-components";

function User() {
  const route = useRouter();

  return (
    <div
      className="flex flex-col justify-center items-center absolute top-8 right-32 sm:top-8 sm:right-40"
      onClick={() => route.push("/api/auth/login")}
    >
      <FaUserCircle className="hover:text-gray-600 card cursor-pointer" />
      <h3>Profile</h3>
    </div>
  );
}

export default User;
