import AnimateElement from "../components/animate_element";

export default function Home() {
  return (
    <div
      style={{ backgroundColor: "#0b2719" }}
      className="relative flex items-center justify-center w-full h-screen flex-column"
    >
      <div className="text-center">
        <div className="">
          <AnimateElement />
        </div>
      </div>
    </div>
  );
}
