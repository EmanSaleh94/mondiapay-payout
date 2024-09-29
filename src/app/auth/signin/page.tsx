"use client";
import React from "react";
import Image from "next/image";
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
      <div className="mt-20 flex justify-center bg-white align-middle">
        <Image
          width={90}
          height={32}
          src={"/images/logo/logo-icon.svg"}
          alt="Logo"
          color="transparent"
          priority
        />
      </div>
      <div className="bg-white">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 ">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <div className="mb-5">
                <input
                  type="button"
                  value="SignIn using fusionAuth"
                  onClick={() => handleSignIn()}
                  className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
