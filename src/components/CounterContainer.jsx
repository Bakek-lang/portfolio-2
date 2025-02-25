import { useEffect, useState } from "react";
import { visitorCounter } from "../js/appwriteCounter";
import FlipCounter from "./FlipCounter";

export default function CounterContainer() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    async function updateCount() {
      const updatedCount = await visitorCounter();
      if (updatedCount !== undefined) {
        setCount(updatedCount);
      }
    }
    updateCount();
  }, []);

  if (count === null) return <div className="text-white">Loading...</div>;

  return <FlipCounter count={count} />;
}
