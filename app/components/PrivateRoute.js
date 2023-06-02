"use client";
// components/PrivateRoute.js
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../authContext";

const PrivateRoute = (WrappedComponent) => {
  return (props) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
      console.log(isAuthenticated());

      if (!isAuthenticated()) {
        console.log(isAuthenticated());
        router.push("/login");
      }
    }, [isAuthenticated, router]);

    return isAuthenticated() ? <WrappedComponent {...props} /> : null;
  };
};

export default PrivateRoute;
