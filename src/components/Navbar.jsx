import Link from "next/link";

export default function Navbar() {
  // Use your BetterAuth session hook here
  const user = null; // Replace with session data

  return (
    <div className="navbar bg-base-100 px-6 border-b">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl lowercase">logo text</Link>
      </div>
      <div className="flex-none gap-4">
        <div className="flex gap-2">
          <Link href="/" className="btn btn-sm bg-gray-300 hover:bg-gray-400 border-none">Home</Link>
          <Link href="/android" className="btn btn-sm btn-ghost">Android</Link>
          <Link href="/my-profile" className="btn btn-sm btn-ghost">My Pro</Link>
        </div>
        
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.image} alt="profile" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Logout</a></li>
            </ul>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content rounded-full w-8">
                <span className="text-xs">U</span>
              </div>
            </div>
            <Link href="/login" className="btn btn-neutral btn-sm px-6">Log in</Link>
          </div>
        )}
      </div>
    </div>
  );
}