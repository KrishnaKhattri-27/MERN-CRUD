import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AddUser from "../components/AddUser";
import User from "../components/User";

const Dashboard = () => {
  const [dataList, setDataList] = useState();
  const [status, setStatus] = useState(false);
  const [op, setOp] = useState(false);
  const [ID, setID] = useState("");
  const [newuser, setNewuser] = useState({ name: "", email: "", phone: "" });
  const [addUpdate, setAddUpdate] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    // setparameters(event);
    setNewuser({
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    });
    setAddUpdate(event.target.button.innerHTML);
    event.target.name.value = "";
    event.target.email.value = "";
    event.target.phone.value = "";
  };

  useEffect(() => {
    if (addUpdate === "Update") updateData();
    else if (addUpdate === "Add") passData();
  }, [newuser]);

  const passData = async () => {
    console.log("enetred", newuser);
    const response = await fetch("/user/addUser", {
      method: "POST",
      body: JSON.stringify(newuser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response.ok) {
      setNewuser({ name: "", email: "", phone: "" });
      fetchData();
    } else {
      console.log(json.error);
    }
  };

  const updateData = async () => {
    const response = await fetch("/user/update/" + ID, {
      method: "POST",
      body: JSON.stringify(newuser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response) {
      fetchData();
      console.log(json.data);
    } else {
      return;
    }
  };

  const fetchData = async () => {
    const response = await fetch("/user/getUser");
    const json = await response.json();
    if (response) {
      setDataList(json.data);
    } else {
      return;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const operationHandler = () => {
    setOp(true);
    setStatus(true);
  };

  const editHandler = async (id) => {
    setStatus(true);
    setOp(false);
    setID(id);
  };

  const deleteUser = async (id) => {
    console.log(id);
    const response = await fetch("/user/delete/" + id, {
      method: "DELETE",
      //   body: JSON.stringify(newuser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response) {
      fetchData();
      console.log(json.data);
    } else {
      return;
    }
  };

  return (
    <div className="">
      <Navbar />
      <div className="flex justify-between px-[15%] mt-10 gap-x-10">
        <div className="w-[75%]">
          <nav className="bg-white rounded-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <div className="flex md:order-2">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input
                    type="text"
                    id="search-navbar"
                    className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>
          </nav>

          <div className="mt-5 flex-col flex gap-y-4">
            {dataList?.length === 0 ? (
              <div className="text-center">
                <h1 className="text-white font-bold text-xl">
                  No Data Found
                </h1>
              </div>
            ) : (
              dataList?.map((e) => (
                <User
                  key={e._id}
                  item={e}
                  editHandler={editHandler}
                  deleteUser={deleteUser}
                />
              ))
            )}
          </div>
        </div>
        <div className="w-[25%]">
          <button
            type="submit"
            className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 
            `}
            onClick={operationHandler}
          >
            ADD USER
          </button>
          {status ? (
            op ? (
              <AddUser title="Add" addUserHandler={addUserHandler} />
            ) : (
              <AddUser title="Update" addUserHandler={addUserHandler} />
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
