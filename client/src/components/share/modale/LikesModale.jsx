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
import { timeAgo } from "../../../utils/functions";

const LikesModale = ({
  onOpenChange,
  isOpen,
  scrollBehavior = "inside",
  likes
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
               {likes.length}
              </Chip>
            </ModalHeader>
            <ModalBody>
              <div className="modal-body flex flex-col items-start gap-1 pr-1">
                {likes.map((l) => (
                  <div className="flex items-center justify-between w-full px-3 py-2 border rounded-md border-gray-200">
                    {" "}
                    <User
                      name={l.user.profile.user_name}
                      description="CLient"
                      avatarProps={{
                        src: `${process.env.REACT_APP_API_BASE_URL}/images/profiles/${l.user.profile.image}`,
                        color: "danger",
                      }}
                    />
                    <span className="text-gray-300 text-sm font-bold">
                   {timeAgo(l.created_at)} 
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
