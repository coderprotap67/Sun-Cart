"use client";
import { updateUser } from "@/lib/auth";
import { useState } from "react";

export default function UpdateProfile() {
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const name = e.target.name.value;
    const image = e.target.image.value;

    await updateUser({ name, image });
    setLoading(false);
    alert("Information Updated Successfully!");
  };

  return (
    <div className="flex justify-center p-10">
      <div className="card w-full max-w-md bg-white border shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Update Information</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div className="form-control">
            <label className="label">Name</label>
            <input name="name" type="text" className="input input-bordered" placeholder="Enter new name" />
          </div>
          <div className="form-control">
            <label className="label">Photo URL</label>
            <input name="image" type="text" className="input input-bordered" placeholder="Enter new photo url" />
          </div>
          <button disabled={loading} className="btn btn-neutral w-full mt-6">
            {loading ? "Updating..." : "Update Information"}
          </button>
        </form>
      </div>
    </div>
  );
}