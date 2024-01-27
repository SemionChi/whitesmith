import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { RegisterButton } from "@/components/auth/register-button";
export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen ">
      <div className="w-full max-w-md px-4 py-8 bg-gray-800 rounded-lg shadow-md border-purple-500 border-2 border-opacity-50 shadow-2xl">
        <h2 className="text-3xl font-bold text-center">
          Welcome to Blacksmith
        </h2>
        <p className="text-gray-400 mt-2 text-center">
          Please login to continue
        </p>
        <form className="mt-6">
          <div className="flex flex-col mb-2">
            <Label className="mb-1" htmlFor="email">
              Email
            </Label>
            <Input
              className="px-3 py-2 bg-gray-700 rounded-md"
              id="email"
              placeholder="m@example.com"
              required
              type="email"
            />
          </div>
          <div className="flex flex-col mb-6">
            <Label className="mb-1" htmlFor="password">
              Password
            </Label>
            <Input
              className="px-3 py-2 bg-gray-700 rounded-md"
              id="password"
              required
              type="password"
            />
          </div>
          <Button className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 rounded-md text-white text-sm">
            Login
          </Button>
        </form>
        <div className="text-center mt-6">
          <Button className="w-full py-2 bg-red-500 hover:bg-red-600 rounded-md text-white text-sm">
            <span className="flex items-center justify-center">
              <img
                alt="Google logo"
                className="w-5 h-5 mr-2"
                src="/images/google.png"
              />
              Login with Google
            </span>
          </Button>
          <Button
            variant="git"
            className="w-full py-2 bg-black hover:bg-grey-600 rounded-md text-white text-sm mt-2"
          >
            <span className="flex items-center justify-center">
              <img
                alt="Google logo"
                className="w-5 h-5 mr-2"
                src="/images/github-mark-white.png"
              />
              Login with GitHub
            </span>
          </Button>
        </div>
        <div className="text-center mt-4">
          <Link className="text-gray-400 hover:text-gray-300 text-sm" href="#">
            Forgot Password?
          </Link>
        </div>
        <div className="text-center mt-4">
          <span className="text-gray-400 text-sm">Don't have an account?</span>
          <RegisterButton>
            <Link
              className="text-indigo-500 hover:text-indigo-600 text-sm ml-1"
              href="#"
            >
              Sign up
            </Link>
          </RegisterButton>
        </div>
      </div>
    </main>
  );
}
