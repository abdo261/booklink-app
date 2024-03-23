import { FaPlus } from "react-icons/fa";
import BtnCmp from "../BtnCmp";
import InputCmp from "../InputCmp";
import { Card, CardBody, CardFooter, Image, Tooltip } from "@nextui-org/react";

import ActionBookDropDown from "../dropdowns/ActionBookDropDown";

const BookCards = ({ onOpenCreate, books,onOpenEdite , onOpenDelete }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md ">
      <div className="flex justify-between gap-4 items-end">
        <InputCmp
          radius="md"
          variant="bordered"
          className="text-xl font-bold"
          placeholder="Search By Name"
        />

        <BtnCmp
          text="Add New"
          color="primary"
          oncklick={onOpenCreate}
          endContent={<FaPlus size={28} />}
        />
      </div>

      <div className="cards gap-2 grid grid-cols-2 sm:grid-cols-4 mt-4 p-3">
        {books.map((item, index) => (
          <Card shadow="md" key={index} isPressable>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.name}
                className="w-full object-cover h-[140px]"
                src={"/images/category-default.avif"}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b className="whitespace-no-wrap overflow-hidden truncate">
                <Tooltip color="foreground" placement="left" showArrow={true} content={item.name} className="shadow-lg">
                 <span>{item.title}</span>
                </Tooltip>
              </b>
             <ActionBookDropDown onOpenEdite={onOpenEdite} onOpenDelete={onOpenDelete}/>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default BookCards;
