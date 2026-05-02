import Link from "next/link";

export default function Navbar() {
  // যেহেতু আপনি BetterAuth ব্যবহার করছেন, পরে এখানে ইউজার ডাটা ফেচ করবেন
  const user = null; 

  return (
    /* bg-white এবং shadow-md যোগ করা হয়েছে যাতে কালো ব্যাকগ্রাউন্ডেও নেভবারটি স্পষ্ট থাকে */
    <div className="navbar bg-white sticky top-0 z-50 px-10 py-4 shadow-md">
      <div className="navbar-start">
        <Link href="/" className="text-3xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-600">
            Summer Essentials Store
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        {/* 'to-blue-400-600' ভুল ক্লাসটি সরিয়ে 'text-slate-700' দেওয়া হয়েছে */}
        <ul className="menu menu-horizontal px-1 gap-6 text-slate-700 font-semibold">
          <li><Link href="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
          <li><Link href="/products" className="hover:text-blue-500 transition-colors">Products</Link></li>
          <li><Link href="/my-profile" className="hover:text-blue-500 transition-colors">My Profile</Link></li>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        <div className="flex items-center gap-3">
          {/* প্রোফাইল আইকন কন্টেইনার */}
          <div className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center overflow-hidden bg-white shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>

          {!user && (
            <Link 
              href="/auth/register" 
              className="btn btn-neutral rounded-lg px-8 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 border-none text-white font-bold transition-all"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}