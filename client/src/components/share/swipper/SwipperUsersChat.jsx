import { Swiper, SwiperSlide } from "swiper/react";
import { FaCheck } from "react-icons/fa6";

import "swiper/css";

import "./style.css";
import { Avatar, Badge, Tooltip } from "@nextui-org/react";
import { books } from "./data";
import { Autoplay } from "swiper/modules";

export default function SwipperUsersChat({ selectItem }) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={2}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        className="swiper-users-chat w-full"
        navigation={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          pauseOnMouseEnter:true
        }}
      >
        {books.map((b) => (
          <SwiperSlide>
            <Tooltip
              showArrow={true}
              delay={1}
              closeDelay={0}
              content={
                <div className="px-1 py-2">
                  <div className="text-small font-bold">said ol9ayed</div>
                  <div className="text-small">admin </div>
                </div>
              }
            >
              <span className="cursor-pointer" onClick={() => selectItem(b)}>
                <Badge
                  color="primary"
                  isOneChar
                  content={<FaCheck size={10} />}
                  placement="bottom-right"
                >
                  <Avatar isBordered={true} size="md" />
                </Badge>
              </span>
            </Tooltip>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
