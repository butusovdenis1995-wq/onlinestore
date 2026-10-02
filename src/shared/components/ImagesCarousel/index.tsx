import { cn } from "@/shared/lib/cn";
import { Button } from "@/shared/ui/button";
import { useState } from "react";
import { IImagesCarouselProps } from "./interface";

export function ImagesCarousel(props: IImagesCarouselProps) {
  const { images, className } = props;
  const [currentImage, setCurrentImage] = useState(0);

  function changeImages(index: number) {
    if (currentImage === index) return;
    setCurrentImage(index);
  }

  return (
    <section className={cn("flex flex-col mb-14", className)}>
      <img
        className="mb-4 rounded-2xl"
        src={images.at(currentImage)}
        alt="Product"
      />

      <div className="flex flex-row gap-4">
        {images.map((image, index) => (
          <Button
            key={image}
            className={cn("size-32 bg-cover bg-center rounded-sm")}
            onClick={() => changeImages(index)}
            variant={"default"}
            style={{ backgroundImage: `url(${image})` }}
          ></Button>
        ))}
      </div>
    </section>
  );
}
