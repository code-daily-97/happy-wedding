"use client";

import { useRef } from "react";
import Image from "next/image";
import HeartList from "../_components/heart-list";
import { useScrollAnimation } from "../../../hooks";

const Story = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useScrollAnimation({
    headerRef,
    titleRef,
    textRef,
  });

  return (
    <div className="section bg-[url('/assets/images/bg-section.png')] bg-cover bg-center bg-no-repeat !pt-0 flex items-center justify-center">
      <div className="w-full overflow-hidden py-2 px-4">
        <div ref={headerRef} className="flex justify-center">
          <div className="space-y-1 mb-4">
            <div className="required w-[80px] h-auto mx-auto">
              <Image
                src="/assets/images/tay.png"
                alt="wedding"
                width={100}
                height={100}
                className="size-full object-contain"
              />
            </div>
            <h2
              ref={titleRef}
              className="text-4xl text-center text-brown-light font-bold"
            >
              Câu Chuyện Tình Yêu
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
        </div>

        <div ref={textRef} className="py-4 space-y-4 leading-relaxed">
          <p className="text-line text-center">
            Chúng mình quen nhau khi cùng làm việc ở công ty. Thường xuyên phải
            tương tác với nhau, nên cứ thế phát sinh tình cảm khi nào chả hay.
            Các cụ hay bảo nên tránh các trường hợp con thầy, vợ bạn, gái cơ
            quan để yêu đương. Ấy thế mà chả hiểu sao, dây tơ hồng siết chặt quá
            nên là 2 đứa cứ thế va vào nhau. Yêu nhau nhùng nhằng thế mà giờ
            cũng hơn 3 năm, trải qua nhiều cảm xúc cùng nhau, vui có buồn có,
            nhưng tốt cái là chưa có chưa tay 😂. Mỗi đứa giờ 1 công việc, 1
            định hướng khác nhau, nhưng có cái yêu nhau thì vẫn còn cùng nhau
            🤣😍. Thế là 1 ngày đẹp trời, anh mua cái nhẫn, dẫn em đến quán bò
            bít tết, rồi á là quỳ xuống hỏi mình cưới nhau nha, em lia lịa gật
            đầu. Thế là giờ chúng mình có đám cưới, thế là chúng mình về chung 1
            nhà đó mí bạn :)) Chuyện tình yêu chúng mình đơn giản thế thôi đó.
            Cảm ơn bạn đã đọc đến tận đây nhé !! Cảm ơn bạn vì đã dành tình cảm
            cho Vợ Chồng mình !!! Yêu bạn 😜❤️
          </p>
        </div>

        <HeartList />
      </div>
    </div>
  );
};

export default Story;
