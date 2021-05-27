import AnimateElement from "../components/animate_element";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center w-full h-screen flex-column">
      <div className="text-center">
        <span className="text-3xl">Framer Motion SVG Animation 💎 ⚛️</span>
        <div className="">
          <AnimateElement />
        </div>
      </div>
    </div>
  );
}
