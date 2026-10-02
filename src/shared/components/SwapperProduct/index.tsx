import { useState } from "react";
import { ISwapperProductProps } from "./interface";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/shared/lib/cn";

export function SwapperProduct(props: ISwapperProductProps) {
  const { images, handleClick } = props;
  const [currentIndex, setCurrentImage] = useState(0);

  function ForwardHandle() {
    setCurrentImage((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1,
    );
  }

  function BackHandle() {
    setCurrentImage((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1,
    );
  }

  return (
    <div className="relative overflow-hidden h-[50%]">
      <button
        className="group z-30 flexCenter absolute left-2 top-25 size-8 rounded-full bg-white/35 text-3xl text-black/90 hover:scale-110 transform duration-300"
        onClick={BackHandle}
      >
        <ChevronLeft />
      </button>
      <img
        onClick={handleClick}
        className="size-full object-cover hover:scale-105 transition duration-300"
        src={images[currentIndex]}
        alt="Logo"
      />
      <button
        className="group z-30 flexCenter absolute right-2 top-25 size-8 rounded-full bg-white/35 text-3xl text-black/90 hover:scale-110 transform duration-300"
        onClick={ForwardHandle}
      >
        <ChevronRight />
      </button>
      <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1.5">
        {images.map((image, index) => (
          <div
            key={image}
            className={cn(
              "size-2 bg-gray-500 border border-white/70 rounded-full",
              currentIndex === index ? "scale-135" : "",
            )}
            onClick={() => {
              setCurrentImage(index);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
