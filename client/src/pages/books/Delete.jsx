import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
  } from "@nextui-org/react";

  import BtnCmp from "../../components/share/BtnCmp";
  
  
  const Delete = ({ isOpen, onOpenChange,item }) => {
    return (
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title {item}
              </ModalHeader>
              <ModalBody>
               <div>
                are you shur
               </div>
              </ModalBody>
              <ModalFooter>
                <Button  color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <BtnCmp
                      className="ml-auto font-bold"
                      text="Yes"
                      color="success"
                      variant="shadow"
                    />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    );
  };
  
  export default Delete;
  