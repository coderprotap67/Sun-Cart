"use client";
import { authClient } from "@/lib/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  // ১. গুগল লগইন ফাংশন
  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  // ২. ইমেইল লগইন ফাংশন (যা আপনি ফর্মে ব্যবহার করেছেন)
  const handleEmailLogin = (e) => {
    e.preventDefault();
    // আপাতত হোম পেজে পাঠিয়ে দেওয়া হচ্ছে
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#F3F3F3] flex flex-col items-center py-10 font-poppins">
      {/* Navbar Style Links */}

      {/* Main Login Card */}
      <div className="bg-white w-full max-w-[750px] p-16 rounded-md shadow-sm border border-gray-50">
        <h2 className="text-4xl font-bold text-center text-[#403F3F] mb-12">
          Login your account
        </h2>
        
        <hr className="mb-12 border-gray-200" />

        {/* --- ফর্ম সেকশন শুরু --- */}
        <form onSubmit={handleEmailLogin} className="max-w-[550px] mx-auto space-y-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold text-[#403F3F]">Email address</span>
            </label>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="input bg-[#F3F3F3] border-none rounded-md h-14 w-full focus:outline-none" 
              required 
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold text-[#403F3F]">Password</span>
            </label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              className="input bg-[#F3F3F3] border-none rounded-md h-14 w-full focus:outline-none" 
              required 
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-[#706F6F]">Forgot password?</a>
            </label>
          </div>

          <div className="pt-4">
            <button type="submit" className="btn w-full h-14 text-white text-lg bg-[#403F3F] border-none rounded-md hover:bg-black">
              Login
            </button>
          </div>
        </form>
        {/* --- ফর্ম সেকশন শেষ --- */}

        <div className="mt-8 text-center space-y-6">
          <p className="text-[#706F6F] font-semibold">
            Don’t Have An Account ?{" "}
            <Link href="/register" className="text-[#F75B5F] hover:underline">
              Register
            </Link>
          </p>

          <div className="divider text-gray-400">OR</div>

          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full max-w-[550px] mx-auto h-14 flex items-center justify-center gap-3 border-gray-300 hover:bg-gray-50 text-[#403F3F]"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="google"
              className="w-6"
            />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}