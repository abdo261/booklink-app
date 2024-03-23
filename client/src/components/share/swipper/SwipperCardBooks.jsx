import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import "./style.css";

import { EffectCards } from "swiper/modules";
import { Spinner, Tooltip } from "@nextui-org/react";
import { useState } from "react";

export default function SwipperCardBooks({ books }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="swiper-card my-4"
      >
        {books.map((b) => (
          <SwiperSlide >
            <Tooltip
              showArrow={true}
              delay={1}
              closeDelay={0}
              content={b.title}
              classNames={{
                base: ["before:bg-neutral-400 dark:before:bg-white"],
                content: [
                  "py-2 px-4 shadow-xl font-bold",
                  "text-black bg-gradient-to-br from-white to-neutral-400",
                ],
              }}
            >
              <div>
                {loading && <Spinner />}
                <img
                  src={`http://localhost:8000/api/images/book_covers/${b.image}`}
                  alt={"b.title"}
                  style={{ display: loading ? "none" : "block" }}
                  onLoad={() => setLoading(false)}
                />
              </div>
            </Tooltip>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
