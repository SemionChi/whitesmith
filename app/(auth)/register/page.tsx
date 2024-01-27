import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { LoginButton } from "@/components/auth/login-button";

function Register() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen ">
      <div className="w-full max-w-md px-4 py-8 bg-gray-800 rounded-lg shadow-md border-purple-500 border-2 border-opacity-50 shadow-2xl">
        <h2 className="text-3xl font-bold text-center">Join Whitesmith</h2>
        <p className="text-gray-400 mt-2 text-center">
          Please register to continue you degenerate
        </p>
        <div className="mt-6">
          <Label className="text-gray-400" htmlFor="name">
            Full Name
          </Label>
          <Input
            className="px-3 py-2 bg-gray-700 rounded-md"
            id="name"
            type="text"
          />
          <Label className="mt-4 text-gray-400" htmlFor="email">
            Email
          </Label>
          <Input
            className="px-3 py-2 bg-gray-700 rounded-md"
            id="email"
            placeholder="m@example.com"
            required
            type="email"
          />
          <Label className="mt-4 text-gray-400" htmlFor="password">
            Password
          </Label>
          <Input
            className="px-3 py-2 bg-gray-700 rounded-md"
            id="password"
            type="password"
          />
          <Label className="mt-4 text-gray-400" htmlFor="confirm-password">
            Confirm Password
          </Label>
          <Input
            className="px-3 py-2 bg-gray-700 rounded-md"
            id="confirm-password"
            type="password"
          />
        </div>
        <div className="text-center mt-6">
          <Button className="w-full py-2 bg-red-500 hover:bg-red-600 rounded-md text-white text-sm">
            Register
          </Button>
        </div>
        <div className="text-center mt-4">
          <span className="text-gray-400 text-sm">
            Already have an account?
          </span>
          <LoginButton>
            <Link
              className="text-indigo-500 hover:text-indigo-600 text-sm ml-1"
              href="#"
            >
              Login
            </Link>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}

export default Register;
