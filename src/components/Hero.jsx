"use client";
import { DotLottieReact } from '@lottiefiles/dotlottie-react'; 

const Hero = () => {
  return (
    <div className="bg-white border rounded-lg p-10 my-6 text-center">
      {/* lottie animation*/}
      <DotLottieReact 
        src="https://path-to-your-lottie.lottie" 
        loop 
        autoplay 
        className="h-40 mx-auto" 
      />
      
      <h1 className="text-5xl font-bold uppercase mt-4">Hero Section</h1>
      <p className="py-4 text-gray-600">
        Welcome to our platform. Explore our top products and exclusive deals.
      </p>
    </div>
  );
};

export default Hero;