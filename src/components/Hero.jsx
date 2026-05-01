"use client";
import { DotLottieReact } from '@lottiefiles/dotlottie-react'; 
import Image from 'next/image'; 
import summerImg from '@/assets/summer.png'; 

const Hero = () => {
  return (
    // 'mt-0' এবং 'pt-0' ব্যবহার করা হয়েছে যাতে উপরে কোনো গ্যাপ না থাকে
    <div className="bg-white rounded-lg px-10 pb-10 pt-0 mt-0 mb-6 text-center shadow-none"> 
      
      {/* Lottie Animation - এটার উচ্চতা বা মার্জিন আরও কমানো হয়েছে */}
      <div className="mt-0">
        <DotLottieReact 
          src="https://path-to-your-lottie.lottie" 
          loop 
          autoplay 
          className="h-28 mx-auto" 
        />
      </div>

      {/* Summer Image Section */}
      <div className="flex justify-center my-2">
        <Image 
          src={summerImg} 
          alt="Summer Sale Banner" 
          width={1000} 
          height={800} 
          className="w-full max-h-[400px] object-cover rounded-xl"
          priority 
        />
      </div>

    </div>
  );
};

export default Hero;