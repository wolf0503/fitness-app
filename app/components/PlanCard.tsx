"use client";

import { motion } from "framer-motion";

type Plan = {
  id: number;
  name: string;
  price: number;
  includes: string[];
};

export default function PlanCard({ plan, onClick }: { plan: Plan; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-lg p-6 cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-2xl font-bold mb-4 text-gray-800">{plan.name}</h3>
      <div className="text-3xl font-bold text-primary mb-6">
        ${plan.price}
        <span className="text-lg text-gray-500">/month</span>
      </div>
      <ul className="space-y-3">
        {plan.includes.map((item, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}