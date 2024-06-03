"use client";
import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const VerficationComponent = () => {

  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: "/auth/signin" });
  };
  useEffect(() => {
    handleSignOut();
  }, []);
  return <FaSpinner size={50} className="animate-spin" color="#00BFFF" />;
};

export default VerficationComponent;
