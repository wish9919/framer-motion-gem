import AnimateElement from "../components/animate_element";

export default function Home() {
  return (
    <div
      style={{ backgroundColor: "#0b2719" }}
      className="relative flex items-center justify-center w-full h-screen flex-column"
    >
      <div className="text-center">
        <span className="text-4xl font-medium" style={{ color: "#cdb480" }}>
          Framer Motion SVG Animation 💎
        </span>
        <div className="">
          <AnimateElement />
        </div>
      </div>
    </div>
  );
}
