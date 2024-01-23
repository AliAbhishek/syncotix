import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { userList } from "../../../utills/api/User";
import { customerList } from "../../../utills/api/Customer";
import { useMutation, useQuery } from "react-query";
import {
  createUserCustomer,
  customerUserUpdate,
} from "../../../utills/api/CustomerUser";
import { toast } from "react-toastify";
import { Modal } from "@mantine/core";
import { customerSiteList } from "../../../utills/api/CustomerSite";

function AddCustomerUser({
  modalName,
  userId,
  ids,
  customerId,
  isActive,
  customerFetch,
  customerSiteId,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const { mutateAsync: customerUserDetails } = useMutation(
    "createUserCustomer",
    createUserCustomer
  );
  const { mutateAsync: updateDetails } = useMutation(
    "customerUserUpdate",
    customerUserUpdate
  );

  const [userDetails, setUserDetails] = useState({
    userId: userId ? userId : "",
    customerId: customerId ? customerId : "",
    customerSiteId: customerSiteId ? customerSiteId : "",
    isActive: isActive ? isActive : true,
  });

  const [userErr, setUserErr] = useState({
    userIdErr: "",
    customerIdErr: "",
    customerSiteIdErr : ""
  });

  const resetState = () => {
    setUserDetails({
      userId: userId ? userId : "",
      customerId: customerId ? customerId : "",
      customerSiteId : customerSiteId ? customerSiteId : "",
      isActive: isActive ? isActive : true,
    });

    setUserErr({
      userIdErr: "",
      customerIdErr: "",
      customerSiteIdErr : ""
    });
  };

  const [userDrop, setUserDrop] = useState([]);
  const [customerDrop, setCustomerDrop] = useState([]);
  const [customerSiteDrop, setCustomerSiteDrop] = useState([]);
  const [userFilter, setUserFilter] = useState({
    sortOrder: "",
    sortDirection: "",
    filterby: "",
    pageNo: 1,
    pageSize: 1000,
  });

  const [customerFilter, setCustomerFilter] = useState({
    sortOrder: "",
    sortDirection: "",
    filterby: "",
    pageNo: 1,
    pageSize: 1000,
  });
  const [customerSiteFilter, setCustomerSiteFilter] = useState({
    sortOrder: "",
    sortDirection: "",
    filterby: "",
    pageNo: 1,
    pageSize: 1000,
  });





  const {} = useQuery("userList", userList.bind(this, userFilter), {
    onSuccess: (x) => setUserDrop(x?.items),
  });
  const {} = useQuery("customerList", customerList.bind(this, customerFilter), {
    onSuccess: (x) => setCustomerDrop(x?.items),
  });
  const {} = useQuery("customerSiteList", customerSiteList.bind(this, customerSiteFilter), {
    onSuccess: (x) => setCustomerSiteDrop(x?.items),
  });


  const handleChange = (e) => {
    setUserDetails((old) => ({ ...old, [e.target.name]: e.target.value }));
    setUserErr((old) => ({ ...old, [`${e.target.name}Err`]: "" }));
  };

  const activeHandler = (e) => {
    setUserDetails((old) => ({ ...old, [e.target.name]: e.target.checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { customerId, userId, customerSiteId } = userDetails;
    const updatedDetails = { ...userDetails, id: ids };
    let isValid = true;
    const newErr = {
      userIdErr: "",
      customerIdErr: "",
      customerSiteIdErr : ""
    };

    if (!userId) {
      (newErr.userIdErr = "Please select valid user"), (isValid = false);
    }
    if (!customerId) {
      (newErr.customerIdErr = "Please select valid customer"),
        (isValid = false);
    }
    if(!customerSiteId){
      newErr.customerSiteIdErr = "Please Select valid customer Site",
      isValid= false
    }
    if (!isValid) {
      setUserErr(newErr);
      return;
    }



    modalName === "add"
      ? await customerUserDetails(userDetails)
          .then((res) => {
            setIsOpen(false);
            customerFetch();
            toast.success("added successfully");
            resetState();
          })
          .catch((err) => {
            console.log(err);
      toast.error(err?.response?.data)

          })
      : await updateDetails(updatedDetails)
          .then((res) => {
            setIsOpen(false);
            customerFetch();
            toast.success("updated successfully");
          })
          .catch((err) => {
            console.log(err);
      toast.error(err?.response?.data)

          });
  };

  return (
    <div>
      {modalName === "add" ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50"
        >
          <span> Add New </span>
        </button>
      ) : (
        <AiFillEdit
          onClick={() => setIsOpen(true)}
          className="cursor-pointer "
        />
      )}

      <Modal
        centered
        opened={isOpen}
        onClose={() => {
          setIsOpen(false);
          resetState();
        }}
        title="Customer User Details"
        size="lg"
        closeOnClickOutside={false}
        transitionProps={{
          transition: "fade",
          duration: 600,
          timingFunction: "linear",
        }}
      >
        <form onSubmit={handleSubmit} className="relative w-full   px-4 py-6  ">
          <div className="lg:grid lg:grid-cols-2 lg:gap-4">
            {/* <div className=" flex flex-col gap-2 "> */}

            <div className=" w-full">
                <label className="block mb-2 text-sm text-black dark:text-white">
                  User Name{" "}
                </label>
                <select
                  onChange={handleChange}
                  name="userId"
                  defaultValue={userDetails.userId}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  <option disabled selected value="">
                    Select
                  </option>
                  {userDrop?.map((x) => (
                    <option value={x.id}>{x.fullName}</option>
                  ))}
                </select>
              <p className="font-mono text-red-700 ">{userErr.userIdErr}</p>
            </div>

            <div className=" w-full">
                <label className="block mb-2 text-sm text-black dark:text-white">
                  Customer Name{" "}
                </label>
                <select
                  onChange={handleChange}
                  name="customerId"
                  defaultValue={userDetails.customerId}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  <option disabled selected value="">
                    Select
                  </option>
                  {customerDrop?.map((x) => (
                    <option value={x.id}>{x.name}</option>
                  ))}
                </select>
                <p className="font-mono text-red-700">{userErr.customerIdErr}</p>
              </div>



              <div className="">
              <label className="block mb-2 text-sm text-black dark:text-white">
                Customer Site
              </label>

              <select
                onChange={handleChange}
                name="customerSiteId"
                defaultValue={userDetails.customerSiteId}
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option disabled selected value="">
                  Select
                </option>
                {customerSiteDrop?.map((x) => (
                  <option value={x.id}>{x.name}</option>
                ))}
              </select>

              <p className="font-mono text-red-700">{userErr.customerSiteIdErr}</p>
            </div>


          <div className="flex items-center pt-4">
            <input
              onChange={activeHandler}
              id="disabled-checked-checkbox"
              type="checkbox"
              checked={userDetails.isActive}
              name="isActive"
              className="w-4 h-4 "
            />
            <label className="ml-2 text-md font-medium text-black dark:text-white  ">
              Is Active
            </label>
            {/* </div> */}
          </div>

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
}

export default AddCustomerUser;
