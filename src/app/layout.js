import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Summer Sale | Home",
  description: "Best summer products for you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {/* নেভিগেশন বার সব পেজেই থাকবে */}
        <Navbar />

        {/* মেইন কন্টেন্ট এখানে রেন্ডার হবে */}
        <main className="min-h-[calc(100vh-200px)]">
          {children}
        </main>

        {/* ফুটার সেকশন */}
        <footer className="footer p-10 bg-neutral text-neutral-content mt-20">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="footer-title text-white opacity-100">Services</span> 
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
            </div> 
            <div>
              <span className="footer-title text-white opacity-100">Company</span> 
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
            </div> 
            <div>
              <span className="footer-title text-white opacity-100">Legal</span> 
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}