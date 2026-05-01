import Link from "next/link";

export default function Navbar() {
  const user = null;

  return (
    <div className="navbar bg-[#F3F3F3] px-10 py-4">
      <div className="navbar-start">
        <Link href="/" className="text-3xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Summer Essentials Store
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 text-gray-600 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/my-profile">My Profile</Link></li>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center overflow-hidden bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>

          {!user && (
            <Link 
              href="/auth/register" // এখানে প্রথমে রেজিস্ট্রেশন পেজে পাঠানো হচ্ছে
              className="btn btn-neutral rounded-none px-8 bg-[#403F3F] text-white hover:bg-black border-none"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}