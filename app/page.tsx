import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";
import { RegisterButton } from "@/components/auth/register-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shdow-md",
            font.className
          )}
        >
          Whitesmith
        </h1>
        <p className="text-white text-lg">
          Welcome to the whitest blacksmith`s opium den, Please sign-in
        </p>
      </div>
      <LoginButton>
        <Button variant="secondary" size="lg">
          Sign-In
        </Button>
      </LoginButton>
      <RegisterButton>
        <Button variant="secondary" size="lg">
          Sign-Up
        </Button>
      </RegisterButton>
    </main>
  );
}
