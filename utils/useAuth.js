import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import jwt, { decode } from "jsonwebtoken";
const secret_key = "nextmarket";

const useAuth = () => {
  const [loginUser, setLoginUser] = useState("");
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/user/login");
    try {
      const decoded = jwt.verify(token, secret_key);
      setLoginUser(decoded.email);
    } catch (error) {
      router.push("/user/login");
    }
  }, [router]);

  return loginUser;
};

export default useAuth;
