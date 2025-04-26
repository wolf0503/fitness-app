"use client";

import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function DashboardPage() {
  const { user } = useAuth();
  const [selectedType, setSelectedType] = useState<"training" | "meal" | null>(null);

  if (!user) redirect("/login");

  return (
    <div className="min-h-screen bg-gray-900 "> {/* Added padding-top */}
      <Navbar />
      
      {/* Main Content Container */}
      <div className="container mx-auto py-8 px-4 pt-20">
        <h1 className="text-3xl font-bold mb-8 text-primary-300">Welcome, {user.email}</h1>
        
        {/* Selection buttons */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <button 
            className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
            onClick={() => setSelectedType("training")}
          >
            <h2 className="text-xl font-bold text-primary-400">Training Plans</h2>
          </button>
          <button 
            className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
            onClick={() => setSelectedType("meal")}
          >
            <h2 className="text-xl font-bold text-primary-400">Meal Plans</h2>
          </button>
        </div>

        {/* Training Categories */}
        {selectedType === "training" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Chest", "Legs", "Arms", "Back"].map((category) => (
              <div
                key={category}
                className="p-4 bg-gray-800 rounded-lg text-center hover:bg-gray-700 transition-colors"
              >
                <span className="text-primary-300 font-medium">{category}</span>
              </div>
            ))}
          </div>
        )}

        {/* Meal Plan */}
        {selectedType === "meal" && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-primary-300">Weekly Meal Plan</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-4">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="p-4 bg-gray-700 rounded hover:bg-gray-600 transition-colors">
                  <h4 className="font-semibold mb-2 text-primary-200">Day {i + 1}</h4>
                  <p className="text-sm text-gray-300">Breakfast: Oatmeal</p>
                  <p className="text-sm text-gray-300">Lunch: Grilled Chicken</p>
                  <p className="text-sm text-gray-300">Dinner: Salmon</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}