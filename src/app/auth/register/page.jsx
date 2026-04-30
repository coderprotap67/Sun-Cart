import Link from "next/link";

export default function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-blue-400 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">Register your account</h2>
        <div className="divider mb-8"></div>
        
        <form className="space-y-5">
          <div className="form-control">
            <label className="label font-bold text-gray-700">Your Name</label>
            <input type="text" placeholder="Enter your name" className="input input-bordered bg-gray-50 h-14" />
          </div>
          <div className="form-control">
            <label className="label font-bold text-gray-700">Photo URL</label>
            <input type="text" placeholder="Enter photo url" className="input input-bordered bg-gray-50 h-14" />
          </div>
          <div className="form-control">
            <label className="label font-bold text-gray-700">Email</label>
            <input type="email" placeholder="Enter your email address" className="input input-bordered bg-gray-50 h-14" />
          </div>
          <div className="form-control">
            <label className="label font-bold text-gray-700">Password</label>
            <input type="password" placeholder="Enter your password" className="input input-bordered bg-gray-50 h-14" />
          </div>
          
          <div className="flex items-center gap-2 py-2">
            <input type="checkbox" className="checkbox checkbox-sm rounded-none" />
            <span className="text-sm text-gray-500">Accept <span className="font-bold text-gray-700">Term & Conditions</span></span>
          </div>

          <button className="btn btn-neutral w-full text-white text-lg h-14">Register</button>
        </form>
        
        <p className="text-center mt-6 text-gray-600">
          Already have an account? <Link href="/login" className="text-red-500 font-semibold">Login</Link>
        </p>
      </div>
    </div>
  );
}