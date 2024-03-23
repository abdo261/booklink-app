import { MdCategory } from "react-icons/md";
import BtnCmp from "../../components/share/BtnCmp";
import "./category.css";
import { ButtonGroup, useDisclosure } from "@nextui-org/react";
import { CreateCategory, DeleteCategory, EditeCategory, ListCategory } from ".";
import { useState } from "react";
import { GiCardPick } from "react-icons/gi";
import { FaListUl } from "react-icons/fa6";

const Categorys = () => {
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
    <div className="category-page">
      <div className="flex justify-between items-baseline">
        <h1 className="text-3xl flex items-baseline  gap-2 font-bold">
          <MdCategory />
          Category
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

      <ListCategory
        showTable={showTable}
        onOpenEdite={handelOpenEdite}
        onOpenCreate={onOpenCreate}
        onOpenDelete={handelOpenDelete}
      />
      <CreateCategory isOpen={isOpenCreate} onOpenChange={onOpenCreateChange} />
      <EditeCategory
        onCloseChange={handelCloseEdite}
        item={selectedItem}
        isOpen={isOpenEdite}
        onOpenChange={onOpenEditeChange}
      />
      <DeleteCategory
        onCloseChange={handelCloseDelete}
        item={selectedItem}
        isOpen={isOpenDelete}
        onOpenChange={onOpenDeleteChange}
      />
    </div>
  );
};

export default Categorys;
