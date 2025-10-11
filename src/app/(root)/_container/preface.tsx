"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks";

gsap.registerPlugin(ScrollTrigger);

const Preface = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useScrollAnimation({
    headerRef,
    titleRef,
    textRef,
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="section flex items-center justify-center">
      <div className="w-full bg-[url('/assets/images/bg-section.png')] bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden p-4">
        <div ref={headerRef} className="space-y-1 mb-4">
          <div className="required w-[80px] h-auto mx-auto">
            <Image
              src="/assets/images/leaf.png"
              alt="leaf"
              width={100}
              height={100}
              className="size-full object-contain"
            />
          </div>
          <h2
            ref={titleRef}
            className="text-4xl text-center text-brown-light font-bold"
          >
            Lời Ngỏ
          </h2>
          <div className="required w-[150px] h-auto mx-auto">
            <Image
              src="/assets/images/line-4.png"
              alt="line"
              width={150}
              height={30}
              className="size-full object-contain"
            />
          </div>
        </div>

        <div
          ref={textRef}
          className="py-4 space-y-4 leading-relaxed text-center"
        >
          <p>Cảm ơn bạn đã dành tình cảm cho vợ chồng mình. ❤️</p>
          <p>
            Chúng mình biết các bạn đều đang rất bận, bận với công việc, với
            cuộc sống và với cả gia đình bạn.
          </p>
          <p>
            Nhưng thực sự rất tuyệt vời nếu như ngày Hạnh Phúc của chúng mình có
            thêm sự góp mặt của bạn và người thương. Vợ chồng mình rất hi vọng
            sẽ có mặt bạn trong ngày quan trọng này để chúng kiến chứng chặng
            đường hạnh phúc này cùng chúng mình. 🙏
          </p>
          <p>Một lần nữa, chân thành cảm ơn tất cả các bạn ❤️</p>
        </div>

        <div ref={imageRef}>
          <div className="relative overflow-hidden">
            <Image
              src="/assets/images/wedding-11.jpg"
              alt="Wedding Photo"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preface;
