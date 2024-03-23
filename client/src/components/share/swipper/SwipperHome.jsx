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
  Spinner,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { books } from "./data";
import SwipperCardBooks from "./SwipperCardBooks";

export default function SwipperHome({ authors }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [authorSelected, setAuthorSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleOpen = (author) => {
    setAuthorSelected(author);
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
        {authors.map((author) => (
          <SwiperSlide>
            {loading && <Spinner />}
            <img
              src={`http://localhost:8000/api/images/book_covers/${author.books[0].image}`}
              className="book"
              alt={author.title}
              style={{ display: loading ? "none" : "block" }}
              onLoad={() => setLoading(false)}
            />
            <div
              className="avatar-container cursor-pointer"
              onClick={() => handleOpen(author)}
            >
              <Tooltip
                showArrow={true}
                delay={1}
                closeDelay={0}
                content={
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">{author.name}</div>
                    <div className="text-small">
                      {author.books.length} Books
                    </div>
                  </div>
                }
              >
                <img
                  src={`http://localhost:8000/api/images/authors/${author.image}`}
                  alt={author.name}
                  style={{ display: loading ? "none" : "block" }}
                  onLoad={() => setLoading(false)}
                />
              </Tooltip>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ModalAuthor
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        authorSelected={authorSelected}
        books={books}
      />
    </>
  );
}

const ModalAuthor = ({ isOpen, onOpenChange, authorSelected, books }) => {
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
                <Badge content={authorSelected.books.length} color="primary">
                  <Avatar
                    src={`http://localhost:8000/api/images/authors/${authorSelected.image}`}
                  />
                </Badge>
                {authorSelected.name}
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="modal-body">
                <p className="font-bold">
                  author birth :{" "}
                  <span className="text-gray-400">
                    {authorSelected.date_of_birth}
                  </span>
                </p>
                <SwipperCardBooks books={authorSelected.books} />
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
