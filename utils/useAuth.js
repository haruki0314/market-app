import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import jwt from "jsonwebtoken";
const secret_key = "nextmarket";

const useAuth = () => {
  const [loginUser, setLoginUser] = useState("");
  const router = useRouter;
  const token = localStorage.getItem("token");
  if (!token) router.push("/user/login");
  try {
    const decoded = jwt.verify(token, secret_key);
  } catch (error) {
    router.push("/user/login");
  }
  return <div>useAuth</div>;
};

export default useAuth;
