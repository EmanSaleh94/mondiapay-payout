"use client";
import React from "react";
import Image from "next/image";
import monidapaylogo from "../../logodark.png";
import { Metadata } from "next";
// import { signIn, signOut, useSession } from "next-auth/react";

// export const metadata: Metadata = {
//   title: "Login to Mondiapay Payout Dashboard",
//   description: "Mondiapay Payout Dashboard",
// };

const SignIn: React.FC = (event) => {
  async function handleSignIn() {
    // await signIn("fusionauth");
  }

  return (
    <>
      <div className=" flex h-lvh ">
        <div className="border-1 m-auto  flex w-3/6 flex-col rounded-lg   bg-white ">
          <div className="m-auto mb-5 mt-10 ">
            <Image
              width={200}
              src={monidapaylogo}
              alt="Logo"
              color="transparent"
              priority
            />
          </div>
          <div className="border-1 m-auto mb-10 flex  flex-col rounded-lg   ">
            <p className="mb-5 flex justify-center ">
              Welcome To Mondiapay, Payout Dashboard
            </p>
            <button className="btn bg-blue-950 text-white hover:text-blue-950">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
