import { useState } from "react";
import "./book.css";
import { ButtonGroup, useDisclosure } from "@nextui-org/react";
import BtnCmp from "../../components/share/BtnCmp";
import { CreateBook, DeleteBook, EditeBook, ListBook } from ".";
import { GiCardPick } from "react-icons/gi";
import { FaListUl } from "react-icons/fa";
import { PiBookOpenFill } from "react-icons/pi";

const Books = () => {
  const [showTable, setShowTable] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const {
    isOpen: isOpenCreate,
    onOpen: onOpenCreate,
    onOpenChange: onOpenCreateChange,
  } = useDisclosure();
  const {
    isOpen: isOpenEdite,
    onOpen: onOpenEdite,
    onOpenChange: onOpenEditeChange,
  } = useDisclosure();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onOpenChange: onOpenDeleteChange,
  } = useDisclosure();
  const handelOpenEdite = (id = null) => {
    setSelectedItem((prev) => id);
    onOpenEdite();
  };
  const handelCloseEdite = (cb) => {
    setSelectedItem((prev) => null);
    cb && cb();
  };
  const handelOpenDelete = (id = null) => {
    setSelectedItem((prev) => id);
    onOpenDelete();
  };
  const handelCloseDelete = (cb) => {
    setSelectedItem((prev) => null);
    cb && cb();
  };
  return (
    <div className="book-page">
      <div className="flex justify-between items-baseline">
        <h1 className="text-3xl flex items-baseline  gap-2 font-bold">
          <PiBookOpenFill />
          Books
        </h1>
        <ButtonGroup>
          <BtnCmp
            color="default"
            variant={showTable ? "solid" : "bordered"}
            oncklick={() => setShowTable(true)}
            icon={<FaListUl size={21} />}
          />
          <BtnCmp
            color="default"
            variant={!showTable ? "solid" : "bordered"}
            oncklick={() => setShowTable(false)}
            icon={<GiCardPick size={30} />}
          />
        </ButtonGroup>
      </div>

      <ListBook
        showTable={showTable}
        onOpenEdite={handelOpenEdite}
        onOpenCreate={onOpenCreate}
        onOpenDelete={handelOpenDelete}
      />
      <CreateBook isOpen={isOpenCreate} onOpenChange={onOpenCreateChange} />
      <EditeBook
        onCloseChange={handelCloseEdite}
        item={selectedItem}
        isOpen={isOpenEdite}
        onOpenChange={onOpenEditeChange}
      />
      <DeleteBook
        onCloseChange={handelCloseDelete}
        item={selectedItem}
        isOpen={isOpenDelete}
        onOpenChange={onOpenDeleteChange}
      />
    </div>
  );
};

export default Books;
