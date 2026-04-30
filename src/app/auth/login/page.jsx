"use client";
import { authClient } from "@/lib/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/", // লগইন সফল হলে হোম পেজে যাবে
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-sm w-full max-w-xl">
                <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">Login your account</h2>
                <div className="divider mb-10"></div>
                
                <form className="space-y-6">
                    <div className="form-control">
                        <label className="label font-bold text-gray-700">Email address</label>
                        <input type="email" placeholder="Enter your email address" className="input input-bordered bg-gray-50 h-14" />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold text-gray-700">Password</label>
                        <input type="password" placeholder="Enter your password" className="input input-bordered bg-gray-50 h-14" />
                    </div>
                    <button type="submit" className="btn btn-neutral w-full text-white text-lg h-14">Login</button>
                </form>
                
                <div className="mt-8 text-center">
                    {/* সোশ্যাল লগইন বাটন */}
                    <button onClick={handleGoogleLogin} className="btn btn-outline w-full mb-4">
                        Login with Google
                    </button>
                    <p className="text-gray-600">
                        Don't Have An Account? <Link href="/register" className="text-red-500 font-semibold">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}