import classNames from "classnames";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export interface CarouselImage {
  label: string;
  src: string;
}

interface CarouselProps {
  images: CarouselImage[];
}

export const Carousel = ({ images }: CarouselProps) => {
  const [currentImages, setCurrentImages] = useState<CarouselImage[]>([
    ...images,
  ]);

  const [animateLeft, setAnimateLeft] = useState<boolean>(false);
  const [animateRight, setAnimateRight] = useState<boolean>(false);

  const slideLeft = () => {
    if (currentImages.length > 1) {
      const img = currentImages.shift();

      if (img) {
        setAnimateRight(false);
        setAnimateLeft(true);
        setCurrentImages([...currentImages, img]);
      }
    }
  };

  const slideRight = () => {
    if (currentImages.length > 1) {
      const img = currentImages.pop();

      if (img) {
        setAnimateLeft(false);
        setAnimateRight(true);

        setCurrentImages([img, ...currentImages]);
      }
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: Should only run when current images is updated.
  useEffect(() => {
    setAnimateRight(false);

    const timeoutId1 = setTimeout(() => {
      setAnimateLeft(false);
    }, 1500);

    const timeoutId2 = setTimeout(() => {
      slideLeft();
    }, 3000);

    return () => {
      if (timeoutId1) {
        clearTimeout(timeoutId1);
      }

      if (timeoutId2) {
        clearTimeout(timeoutId2);
      }
    };
  }, [currentImages]);

  return (
    <div className="relative h-full w-full">
      <button
        className="absolute left-5 top-30 z-10 text-dark-300 hover:cursor-pointer hover:text-slate-200"
        onClick={slideRight}
        type="button"
      >
        <ChevronLeft size={50} />
      </button>
      <div
        className={classNames(
          "absolute top-0 -left-20 z-1 w-2/5 scale-80 rounded overflow-hidden",
          { "animate-move-in-left": animateLeft },
          { "animate-move-in-right": animateRight },
        )}
      >
        <img src={currentImages[0].src} alt={currentImages[0].label} />
      </div>
      <div
        className={classNames(
          "absolute top-0 left-15 z-2 w-2/5 scale-90 rounded overflow-hidden",
          { "animate-move-in-left": animateLeft },
          { "animate-move-in-right": animateRight },
        )}
      >
        <img src={currentImages[1].src} alt={currentImages[1].label} />
      </div>
      <div
        className={classNames(
          "absolute top-0 left-0 right-0 mx-auto z-3 w-2/5 rounded overflow-hidden",
          { "animate-move-in-left": animateLeft },
          { "animate-move-in-right": animateRight },
        )}
      >
        <img src={currentImages[2].src} alt={currentImages[2].label} />
      </div>
      <div
        className={classNames(
          "absolute top-0 right-15 z-2 w-2/5 scale-90 rounded overflow-hidden",
          { "animate-move-in-left": animateLeft },
          { "animate-move-in-right": animateRight },
        )}
      >
        <img src={currentImages[3].src} alt={currentImages[3].label} />
      </div>
      <div
        className={classNames(
          "absolute top-0 -right-20 z-1 w-2/5 scale-80 rounded overflow-hidden",
          { "animate-move-in-left": animateLeft },
          { "animate-move-in-right": animateRight },
        )}
      >
        <img src={currentImages[4].src} alt={currentImages[4].label} />
      </div>
      <button
        className="absolute right-5 top-30 z-10 text-dark-300 hover:cursor-pointer hover:text-slate-200"
        onClick={slideLeft}
        type="button"
      >
        <ChevronRight size={50} />
      </button>
    </div>
  );
};
