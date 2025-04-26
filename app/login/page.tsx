"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-900"> {/* Added padding-top */}
      <Navbar />
      
      {/* Main Content Container */}
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4">
        <form 
          onSubmit={handleSubmit} 
          className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-6 text-primary-400 text-center">
            Welcome Back
          </h2>
          
          <div className="mb-4">
            <label className="block mb-2 text-gray-300">Email</label>
            <input
              type="email"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100
                       focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          
          <div className="mb-6">
            <label className="block mb-2 text-gray-300">Password</label>
            <input
              type="password"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100
                       focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium
                      hover:bg-primary-700 transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}