import {
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";
import InputCmp from "../../components/share/InputCmp";
import BtnCmp from "../../components/share/BtnCmp";
import { FaImages } from "react-icons/fa";
import SelectCmp from "../../components/share/SelectCmp";
import TextAreaCmp from "../../components/share/TextAreaCmp";

const Create = ({ isOpen, onOpenChange }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Modal Title
            </ModalHeader>
            <ModalBody>
              <div
                className={`create-category modal-body bg-white rounded-lg my-3`}
              >
                <form className="p-2 flex flex-col items-center gap-3">
                  <InputCmp
                    radius="sm"
                    variant="bordered"
                    type="text"
                    label="Title"
                    labelPlacement="inside"
                    size="sm"
                    className={"font-bold"}
                  />
                  <InputCmp
                    radius="sm"
                    variant="bordered"
                    type="text"
                    label="Author"
                    labelPlacement="inside"
                    size="sm"
                    className={"font-bold"}
                  />
                  <div className="flex items-center w-full gap-2">
                    <InputCmp
                      radius="sm"
                      variant="bordered"
                      type="date"
                      label="date releas"
                      labelPlacement="inside"
                      size="sm"
                      className={"font-bold"}
                    />
                    <InputCmp
                      radius="sm"
                      variant="bordered"
                      type="number"
                      label="pages"
                      labelPlacement="inside"
                      size="sm"
                      className={"font-bold"}
                    />
                  </div>
                  <InputCmp
                    radius="sm"
                    variant="bordered"
                    type="text"
                    label="ISBN"
                    labelPlacement="inside"
                    size="sm"
                    className={"font-bold"}
                  />
                  <div className="flex items-center w-full gap-2">
                    <SelectCmp
                      label="Language"
                      radius="sm"
                      size="sm"
                      variant="bordered"
                      className={"font-bold"}
                    />
                    <SelectCmp
                      label="Category"
                      radius="sm"
                      size="sm"
                      variant="bordered"
                      className={"font-bold"}
                    />
                  </div>
                  <TextAreaCmp
                    label="summary"
                    radius="sm"
                    size="sm"
                    variant="bordered"
                    className={"font-bold"}
                  />
                  <div className="flex flex-col gap-2 items-center">
                    <span>author</span>
                    <Avatar />
                    <BtnCmp
                    isIconOnly={true}
                    icon={<FaImages  style={{ color: "#70e000" }} size={16} />}
                    variant="light"
                  />
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <span>Book Cover</span>
                    <img
                      src="/images/category-default.avif"
                      className="category-img rounded-lg"
                      alt="default"
                    />
                  </div>
                  <BtnCmp
                    isIconOnly={true}
                    icon={<FaImages style={{ color: "#70e000" }} size={18} />}
                    variant="light"
                  />
                </form>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <BtnCmp
                className="ml-auto font-bold"
                text="Create"
                color="success"
                variant="shadow"
                type="submit"
              />
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default Create;
