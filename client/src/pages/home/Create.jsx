import React, { useState } from "react";
import TextAreaCmp from "../../components/share/TextAreaCmp";
import { Avatar, Button } from "@nextui-org/react";
import { FaImages } from "react-icons/fa";
import InputFileCmp from "../../components/share/InputFileCmp";
import useUpload from "../../hooks/upload/useUpload";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Create = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    description: "",
    image: null,
  });
  const [image, setImage] = useState({
    name: "",
    data: null,
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const { create: postImage } = useUpload("images/posts");
  const handelClearImage = () => {
    setSelectedImage(null);
    setImage({ name: "", data: null });
  };
  const handelImageChange = (field, image) => {
    setImage((prev) => ({ ...prev, [field]: image }));
    image && setImage((prev) => ({ ...prev, name: image.name }));
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setSelectedImage(null);
    }
  };
  const handelChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    postImage(image);
    // console.log(formData);
    // console.log(image);
  };
  return (
    <form
      className="w-full flex flex-col gap-3 bg-white p-3 my-3 rounded-lg"
      onSubmit={handelSubmit}
    >
      <div className="flex items-start gap-2">
        <Avatar
          isBordered
          color="primary"
          radius="md"
          className="transition-transform"
          src="https://pbs.twimg.com/profile_images/1744393322418802688/-ZF7VwbA_400x400.jpg"
        />
        <TextAreaCmp
          className="flex-grow"
          placeholder="write something ..."
          defaultValue={formData.description}
          field="description"
          onchange={handelChange}
        />
      </div>

      {selectedImage && (
        <div className="create-post-image flex justify-center w-full p-2 ">
          <div className="creat-image-container relative ">
            <img src={selectedImage} alt="Selected" className="rounded-md" />
            <IoIosCloseCircleOutline
              onClick={handelClearImage}
              className="absolute top-0 right-0 cursor-pointer text-red-300 mt-2 mr-2 "
              size={25}
            />
          </div>
        </div>
      )}

      <div className="ligne bg-gray-100 w-full"></div>
      <div className="flex items-center justify-between">
        <div className="buttons">
          <label htmlFor="data" className="cursor-pointer">
            <FaImages style={{ color: "#70e000" }} size={18} />
          </label>
          <InputFileCmp
            field="data"
            style={{ display: "none" }}
            onchange={handelImageChange}
          />
        </div>
        <Button
          type="submit"
          color="primary"
          className="font-bold"
          variant="ghost"
        >
          Create
        </Button>
      </div>
    </form>
  );
};

export default Create;
