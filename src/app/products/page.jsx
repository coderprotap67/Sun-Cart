"use client";
import { useEffect, use } from "react"; // hooks import
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth";
import products from "@/data/products.json";

export default function ProductDetails({ params }) {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const resolvedParams = use(params);
  const productId = parseInt(resolvedParams.id);
  const product = products.find((p) => p.id === productId);

  // Auth Protection Logic
  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  //loading state showing
  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!session) return null;


  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <div className="text-2xl font-bold text-red-500">Product Not Found!</div>
        <button onClick={() => router.push("/products")} className="btn btn-outline">
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 md:p-12 lg:py-20">
      <div className="card lg:card-side bg-white shadow-2xl border border-gray-100 overflow-hidden rounded-3xl">
        <figure className="lg:w-1/2 bg-gray-50 p-10 flex justify-center items-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="rounded-2xl shadow-lg max-h-[400px] object-contain hover:scale-105 transition-transform duration-500" 
          />
        </figure>

        <div className="card-body lg:w-1/2 p-8 md:p-12">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="card-title text-4xl font-extrabold text-gray-800 mb-2 leading-tight">
                {product.name}
              </h2>
              <div className="badge badge-neutral p-3 uppercase tracking-widest text-xs font-bold">
                {product.brand || "Brand New"}
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-black text-blue-600">${product.price}</div>
              <div className="text-sm text-gray-400 font-medium">In Stock: {product.stock || 0} units</div>
            </div>
          </div>

          <div className="divider my-6"></div>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="font-bold text-gray-700">Category:</span>
              <span className="badge badge-outline badge-lg">{product.category}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold text-gray-700">Rating:</span>
              <div className="rating rating-sm flex items-center gap-1">
                <span className="text-orange-400 font-bold text-xl">★</span>
                <span className="text-lg font-bold">{product.rating || "N/A"} / 5.0</span>
              </div>
            </div>
          </div>

          <div className="card-actions justify-end mt-10 gap-4">
             <button className="btn btn-outline btn-lg flex-1 md:flex-none">Add to Wishlist</button>
             <button className="btn btn-neutral btn-lg px-12 flex-1 md:flex-none text-white">
                Buy Now
             </button>
          </div>
        </div>
      </div>
      
      {/* Back Button */}
      <div className="mt-8">
        <button onClick={() => router.back()} className="btn btn-ghost gap-2">
          ← Go Back
        </button>
      </div>
    </div>
  );
}