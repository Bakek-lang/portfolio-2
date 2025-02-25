import { useEffect, useState } from "react";

export default function FlipCounter({ count }) {
  const [digits, setDigits] = useState([]);

  useEffect(() => {
    setDigits(String(count).split(""));
  }, [count]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-white text-3xl">Visitor Count</h1>
      <div className="flex items-end space-x-2">
        {digits.map((digit, index) => (
          <div
            key={index}
            className="w-16 h-24 bg-gray-800 text-white font-mono text-4xl font-bold flex items-center justify-center rounded-lg  border"
          >
            {digit}
          </div>
        ))}
      </div>
    </div>
  );
}
