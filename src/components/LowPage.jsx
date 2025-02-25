import Contact from "./Contact";
import CounterContainer from "./CounterContainer";

export default function LowPage() {
  return (
    <div className="flex justify-between gap-8 sm:gap-0 sm:flex-row flex-col items-end p-4">
      <Contact />
      <CounterContainer />
    </div>
  );
}
