import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import workSpace1 from "../../../assets/images/work-space-1.webp?w=640&h=360&fit=cover&format=webp&as=img";
import workSpace2 from "../../../assets/images/work-space-2.webp?w=640&h=360&fit=cover&format=webp&as=img";
import workSpace3 from "../../../assets/images/work-space-3.webp?w=640&h=360&fit=cover&format=webp&as=img";
import workSpace4 from "../../../assets/images/work-space-4.webp?w=640&h=360&fit=cover&format=webp&as=img";
import workSpace5 from "../../../assets/images/work-space-5.webp?w=640&h=360&fit=cover&format=webp&as=img";

const workSpaceImages = [
  workSpace1,
  workSpace2,
  workSpace3,
  workSpace4,
  workSpace5,
];

export function WorkspaceSection() {
  const carouselTrackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!carouselTrackRef.current) return;

    const track = carouselTrackRef.current;
    const firstSlide = track.children[0] as HTMLElement | undefined;
    if (!firstSlide) return;

    const stepPx = firstSlide.offsetWidth;
    const loopBoundaryPx = stepPx * workSpaceImages.length;
    let isCancelled = false;

    const animateStep = () => {
      if (isCancelled) return;

      gsap.to(track, {
        x: `-=${stepPx}`,
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => {
          if (isCancelled) return;

          const currentX = Number(gsap.getProperty(track, "x"));
          if (Math.abs(currentX) >= loopBoundaryPx) {
            gsap.set(track, { x: currentX + loopBoundaryPx });
          }
          gsap.delayedCall(3.0, animateStep);
        },
      });
    };

    gsap.set(track, { x: 0 });
    animateStep();

    return () => {
      isCancelled = true;
      gsap.killTweensOf(track);
      gsap.killTweensOf(animateStep);
    };
  }, []);

  return (
    <>
      <section className="pb-16 bg-white">
        <div className="relative overflow-hidden">
          <div className="overflow-hidden w-[125vw] ml-[-12.5vw]">
            <div className="flex" ref={carouselTrackRef}>
              {[...workSpaceImages, ...workSpaceImages].map((image, index) => (
                <div
                  key={index}
                  className="min-w-0 shrink-0 grow-0 basis-1/4 px-2"
                >
                  <img
                    src={image.src}
                    width={image.w}
                    height={image.h}
                    alt={`施設内の様子 ${(index % workSpaceImages.length) + 1}`}
                    className="h-44 w-full object-cover rounded-md shadow-lg shadow-pink-300/20"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
