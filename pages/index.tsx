import AnimateElement from "../components/animate_element";

export default function Home() {
  return (
    <div className="w-full relative h-screen flex flex-column justify-center items-center">
      <div className="text-center">
        <span className="text-3xl">Frame Motion SVG Animation 🚀</span>
        <div className="mt-2">
          <AnimateElement />
        </div>
      </div>
    </div>
  );
}
