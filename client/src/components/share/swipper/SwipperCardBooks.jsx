import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import "./style.css";

import { EffectCards } from "swiper/modules";
import { Tooltip } from "@nextui-org/react";

export default function SwipperCardBooks({ books }) {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="swiper-card my-4"
      >
        {books.map((b) => (
          <SwiperSlide>
            <Tooltip
              showArrow={true}
              delay={1}
              closeDelay={0}
              content={b.title}
              
              classNames={{
                base: [
                 
                  "before:bg-neutral-400 dark:before:bg-white",
                ],
                content: [
                  "py-2 px-4 shadow-xl font-bold",
                  "text-black bg-gradient-to-br from-white to-neutral-400",
                ],
              }}
            >
              <div>
                <img src={b.img} alt={b.title}  />
              </div>

            </Tooltip>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
