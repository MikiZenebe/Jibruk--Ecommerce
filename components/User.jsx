import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import styled from "styled-components";

function User() {
  const route = useRouter();

  return (
    <div onClick={() => route.push("/api/auth/login")}>
      <FaUserCircle className="hover:text-gray-600 card cursor-pointer" />
    </div>
  );
}

export default User;
