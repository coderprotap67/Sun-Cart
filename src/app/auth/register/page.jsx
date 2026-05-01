"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    // রেজিস্ট্রেশন লজিক এখানে হবে
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[#F3F3F3] flex flex-col items-center py-10 font-poppins">
      {/* Main Register Card */}
      <div className="bg-white w-full max-w-[750px] p-16 rounded-md shadow-sm border border-gray-50">
        <h2 className="text-4xl font-bold text-center text-[#403F3F] mb-12">
          Register your account
        </h2>
        
        <hr className="mb-12 border-gray-200" />

        <form onSubmit={handleRegister} className="max-w-[550px] mx-auto space-y-6">
          
          {/* Name Field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold text-[#403F3F]">Your Name</span>
            </label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="input bg-[#F3F3F3] border-none rounded-md h-14 w-full focus:outline-none" 
              required 
            />
          </div>

          {/* Email Field */}
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

          {/* Photo URL Field (নতুন যোগ করা হয়েছে) */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold text-[#403F3F]">Photo URL</span>
            </label>
            <input 
              type="text" 
              placeholder="Enter your photo URL" 
              className="input bg-[#F3F3F3] border-none rounded-md h-14 w-full focus:outline-none" 
              required 
            />
          </div>

          {/* Password Field */}
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
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center gap-3 py-2">
            <input type="checkbox" required className="checkbox checkbox-sm rounded-none border-[#403F3F]" />
            <span className="text-base text-[#706F6F] font-medium">
              Accept <span className="font-bold text-[#403F3F]">Term & Conditions</span>
            </span>
          </div>

          {/* Register Button */}
          <div className="pt-4">
            <button type="submit" className="btn w-full h-14 text-white text-lg bg-[#403F3F] border-none rounded-md hover:bg-black transition-all">
              Register
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-[#706F6F] font-semibold text-lg">
            Already Have An Account ?{" "}
            <Link href="/login" className="text-[#F75B5F] hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}