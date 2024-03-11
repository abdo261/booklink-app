import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import {
  Avatar,
  Badge,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { books } from "./data";
import SwipperCardBooks from "./SwipperCardBooks";

export default function SwipperHome() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [AuthorClick, setAuthorClick] = useState(null);
  const handleOpen = (author) => {
    setAuthorClick(author);
    onOpen();
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const SlidesPerView = (w) => {
    if (1122 > w && w > 960) return 2;
    if (w > 950) return 4;
    if (w > 500) return 4;
    if (w > 400) return 3;
    if (w <= 500) return 2;
  };
  return (
    <>
      <Swiper
        slidesPerView={SlidesPerView(windowWidth)}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        className="swiper-home w-full"
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
      >
        {books.map((b) => (
          <SwiperSlide>
            <img src={b.img} className="book" key={b.id} alt={b.title} />
            <div
              className="avatar-container cursor-pointer"
              onClick={() => handleOpen(b.author)}
            >
              <Tooltip
                showArrow={true}
                delay={1}
                closeDelay={0}
                content={
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">{b.author}</div>
                    <div className="text-small">{b.title} </div>
                  </div>
                }
              >
                <img
                  src="https://cdn1.booknode.com/author_picture/56/ahmed-sefrioui-55994-330-540.jpg"
                  alt={b.title}
                />
              </Tooltip>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ModalAuthor
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        AuthorClick={AuthorClick}
        books={books}
      />
    </>
  );
}

const ModalAuthor = ({ isOpen, onOpenChange, AuthorClick, books }) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      backdrop="blur"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <Badge content={books.length} color="primary">
                  <Avatar src="https://cdn1.booknode.com/author_picture/56/ahmed-sefrioui-55994-330-540.jpg" />
                </Badge>
                {AuthorClick}
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="modal-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>

                <SwipperCardBooks books={books} />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="ghost" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
