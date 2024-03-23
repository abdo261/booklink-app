import {
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

const Edite = ({ isOpen, onOpenChange,item,onCloseChange }) => {

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Edite {item}
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
                    label="Name"
                    labelPlacement="inside"
                    className={"font-bold"}
                  />
                  <img
                    src="/images/category-default.avif"
                    className="category-img rounded-lg"
                    alt="default"
                  />
                  <BtnCmp
                    isIconOnly={true}
                    icon={<FaImages style={{ color: "#70e000" }} size={18} />}
                    variant="light"
                  />
                 
                </form>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button  color="danger" variant="light" onPress={()=>onCloseChange(()=>onClose())}>
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

export default Edite;
