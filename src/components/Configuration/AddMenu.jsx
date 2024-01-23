import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { createMenu, menuList, updateMenu } from "../../utills/api/Menu";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { Modal } from "@mantine/core";

const AddMenu = ({
  modalName,
  ids,
  Name,
  menuOrderIndex,
  parentId,
  parentOrderId,
  icon,
  moduleId,
  isActive,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { mutateAsync: menuData } = useMutation("createMenu", createMenu);
  const { mutateAsync: updatedMenu } = useMutation("updateMenu", updateMenu);

  const [menuDetails, setMenuDetails] = useState({
    Name: "",
    menuOrderIndex: null,
    parentId: 0,
    parentOrderId: 18,
    icon: "",
    moduleId: 0,
    isActive: true,
  });

  const [menuDetailsErr, setMenuDetailsErr] = useState({
    NameErr: "",
    menuOrderIndexErr: "",
    parentIdErr: "",
    parentOrderIdErr: "",
    iconErr: "",
    moduleIdErr: "",
  });


  const [nameDrop, setNameDrop] = useState([])

  const [menuFilter, setMenuFilter] = useState({
    sortOrder: "",
    sortDirection: "",
    filterby: "",
    pageNo: 1,
    pageSize: 10
  })

  const { refetch: menuFetch } = useQuery(['menuList', menuFilter], menuList.bind(this, menuFilter), {
    onSuccess: (x) => {
      setNameDrop(x?.items);

    }
  })






  const resetState = () => {
    setMenuDetails({
      Name: "",
      menuOrderIndex: null,
      parentId: 18,
      parentOrderId: null,
      icon: "",
      moduleId: 0,
      isActive: true,
    });
    setMenuDetailsErr({
      NameErr: "",
      menuOrderIndexErr: "",
      parentIdErr: "",
      parentOrderIdErr: "",
      iconErr: "",
      moduleIdErr: "",
    });
  };

  const changeHandler = (e) => {
    setMenuDetails((old) => ({ ...old, [e.target.name]: e.target.value }));
    setMenuDetailsErr((old) => ({ ...old, [`${e.target.name}Err`]: "" }));
  };

  const activeHandler = (e) => {
    setMenuDetails((old) => ({ ...old, [e.target.name]: e.target.checked }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { icon, Name, menuOrderIndex, moduleId, parentId, parentOrderId } =
      menuDetails;
    const updatedData = { ...menuDetails, id: ids };
    let isValid = true;
    const newErr = {
      NameErr: "",
      menuOrderIndexErr: "",
      parentIdErr: "",
      parentOrderIdErr: "",
      iconErr: "",
      moduleIdErr: "",
    };
    if (!Name) {
      (newErr.NameErr = "please enter valid name"), (isValid = false);
    }
    if (nameDrop.some((x)=> x.name.toLowerCase() === Name.toLowerCase())) {
      (newErr.NameErr = `${Name} is already exist`), (isValid = false);
    }
    if (!menuOrderIndex || menuOrderIndex < 0) {
      (newErr.menuOrderIndexErr = "please enter valid order index"),
        (isValid = false);
    }
    // if(!moduleId || moduleId < 0 ){
    //     newErr.moduleIdErr = 'please enter valid moduleId',
    //     isValid = false
    // }
    if (!parentOrderId || parentOrderId < 0) {
      (newErr.parentOrderIdErr = "please enter valid orderId"),
        (isValid = false);
    }
    if (!icon) {
      (newErr.iconErr = "please enter valid icon"), (isValid = false);
    }
    if (!isValid) {
      setMenuDetailsErr(newErr);
      return;
    }
   
    modalName === "add"
      ? await menuData(menuDetails)
          .then((res) => {
            setIsOpen(false);
            menuFetch();
            toast.success("added successfully");
            resetState()
          })
          .catch((err) => {
            console.log(err);
          })
      : await updatedMenu(updatedData)
          .then((res) => {
            setIsOpen(false);
            menuFetch();
            toast.success("updated successfully");
            resetState()
          })
          .catch((err) => {
            console.log(err);
          });
  };

  return (
    <div>
      {modalName === "add" ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50"
        >
          <span> Add Menu </span>
        </button>
      ) : (
        <AiFillEdit
          onClick={() => setIsOpen(true)}
          className="cursor-pointer"
        />
      )}

      <Modal
        centered
        opened={isOpen}
        onClose={() => {
          setIsOpen(false);
          resetState();
        }}
        title="Menu Details"
        size="lg"
        closeOnClickOutside={false}
        transitionProps={{
          transition: "fade",
          duration: 600,
          timingFunction: "linear",
        }}
      >
        <form onSubmit={submitHandler} className="w-full  px-8 pb-3 pt-6 ">
          <div className="relative flex flex-col md:grid md:grid-cols-2 gap-2">
            <div>
              <label className="block mb-2 text-sm text-black dark:text-white">
                {" "}
                Name
              </label>
              <input
                type="text"
                name="Name"
                value={menuDetails.Name}
                onChange={changeHandler}
                placeholder="Name"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <p className="font-mono text-red-700">{menuDetailsErr.NameErr}</p>
            </div>
            <div>
              <label className="block mb-2 text-sm text-black dark:text-white">
                {" "}
                Order Index
              </label>
              <input
                type="number"
                name="menuOrderIndex"
                value={menuDetails.menuOrderIndex}
                onChange={changeHandler}
                placeholder="0"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <p className="font-mono text-red-700">
                {menuDetailsErr.menuOrderIndexErr}
              </p>
            </div>

            <div className="">
              <label className="block mb-2 text-sm text-black dark:text-white">
                Parent
              </label>
              <select
                name="parentId"
                onChange={changeHandler}
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option disabled selected value="">
                  Select
                </option>
                {
                  nameDrop?.map((x, ind) => (
                    <option value={x.id} >{x.name}</option>
                  ))
                }
              </select>
              <p className="font-mono text-red-700">
                {menuDetailsErr.parentIdErr}
              </p>
            </div>

            <div>
              <label className="block mb-2 text-sm text-black dark:text-white">
                {" "}
                parentOrderId
              </label>
              <input
                type="number"
                name="parentOrderId"
                value={menuDetails.parentOrderId}
                onChange={changeHandler}
                placeholder="0"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <p className="font-mono text-red-700">
                {menuDetailsErr.parentOrderIdErr}
              </p>
            </div>
            <div>
              <label className="block mb-2 text-sm text-black dark:text-white">
                {" "}
                Module Id
              </label>
              <input
                type="number"
                name="moduleId"
                placeholder="0"
                value={menuDetails.moduleId}
                onChange={changeHandler}
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <p className="font-mono text-red-700">
                {menuDetailsErr.moduleIdErr}
              </p>
            </div>
            <div>
              <label className="block mb-2 text-sm text-black dark:text-white">
                {" "}
                icon
              </label>
              <input
                type="text"
                name="icon"
                value={menuDetails.icon}
                onChange={changeHandler}
                placeholder="Icon"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <p className="font-mono text-red-700">{menuDetailsErr.iconErr}</p>
            </div>
            <div className="flex items-center pt-4">
              <input
                id="disabled-checked-checkbox"
                type="checkbox"
                onChange={activeHandler}
                checked={menuDetails.isActive}
                name="isActive"
                className="w-4 h-4 "
              />
              <label className="ml-2 text-md font-medium text-black dark:text-white ">
                Is Active
              </label>
            </div>
            <div></div>
          </div>
          <div className="w-full flex justify-end items-end gap-2">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                resetState();
              }}
              className="flex w-24 bg-red-500 items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-red-400  "
            >
              <span> Cancel </span>
            </button>
            <button
              type="submit"
              className="flex w-24 bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50"
            >
              <span> Submit </span>
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddMenu;
