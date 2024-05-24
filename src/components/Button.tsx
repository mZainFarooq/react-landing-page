import { ArrowRight } from "lucide-react";
import React from "react";

const Button = () => {
  return (
    <div>
      <button
        type="button"
        className="inline-flex items-center hover:text-white hover:bg-green-900 rounded-full  px-6 p-2 mt-8 text-lg font-semibold text-green-700 border-green-800 border-2"
      >
        Shop Now
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  );
};

export default Button;
