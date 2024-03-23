import {
  Button,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  User,
} from "@nextui-org/react";
import React from "react";
import { IoHeart } from "react-icons/io5";

const LikesModale = ({
  onOpenChange,
  isOpen,
  scrollBehavior = "inside",
  likes = Array(20).fill(null),
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      scrollBehavior={scrollBehavior}
      backdrop="blur"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex justify-between items-center w-full ">
              <span className="text-2xl">Likes</span>

              <Chip
                startContent={<IoHeart color="red" size={27} />}
                variant="faded"
                color="danger"
                className=" mr-4"
              >
                100
              </Chip>
            </ModalHeader>
            <ModalBody>
              <div className="modal-body flex flex-col items-start gap-1 pr-1">
                {likes.map((l) => (
                  <div className="flex items-center justify-between w-full px-3 py-2 border rounded-md border-gray-200">
                    {" "}
                    <User
                      name="Jane Doe"
                      description="CLient"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                        color: "danger",
                      }}
                    />
                    <span className="text-gray-300 text-sm font-bold">
                      2 min ago
                    </span>
                  </div>
                ))}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default LikesModale;
