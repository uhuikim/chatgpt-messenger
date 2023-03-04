"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

import React from "react";

const Login = () => {
    return (
        <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
            <Image
                src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmrlS8%2Fbtr1USUgUps%2F0QYhjmLMvLdyClV4ZrqDcK%2Fimg.png"
                width={300}
                height={300}
                alt="logo"
            />
            <button onClick={() => signIn("google")} className="text-white font-bold text-3xl animate-pulse">
                Sign In to use ChatGPT
            </button>
        </div>
    );
};

export default Login;
