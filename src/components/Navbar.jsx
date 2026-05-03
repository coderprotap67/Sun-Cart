"use client";
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/auth/login");
        },
      },
    });
  };

  return (
    <div className="navbar bg-white sticky top-0 z-50 px-10 py-4 shadow-md">
      <div className="navbar-start">
        <Link href="/" className="text-3xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-600">
            Summer Essentials Store
          </span>
        </Link>
      </div>

      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 gap-6 text-slate-700 font-semibold">
          <li><Link href="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
          <li><Link href="/products" className="hover:text-blue-500 transition-colors">Products</Link></li>
          <li><Link href="/my-profile" className="hover:text-blue-500 transition-colors">My Profile</Link></li>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        <div className="flex items-center gap-3">
          {isPending ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : session ? (
            <div className="dropdown dropdown-end flex items-center gap-3">
              <span className="hidden md:block font-bold text-slate-700">{session.user.name}</span>
              <div tabIndex={0} role="button" className="w-10 h-10 rounded-full border-2 border-blue-400 flex items-center justify-center overflow-hidden bg-white shadow-sm cursor-pointer">
                <img 
                  src={session.user.image || "https://i.ibb.co/vB05Y7D/avatar-placeholder.png"} 
                  alt="User" 
                />
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-44 z-[1] p-2 shadow bg-white rounded-box w-52 border border-gray-100">
                <li><Link href="/my-profile">My Profile</Link></li>
                <li><button onClick={handleLogout} className="text-red-500 font-bold">Logout</button></li>
              </ul>
            </div>
          ) : (
            <>
              <div className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center overflow-hidden bg-white shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <Link 
                href="/auth/login" 
                className="btn btn-neutral rounded-lg px-8 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 border-none text-white font-bold transition-all"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}