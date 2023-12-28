import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AddUser from "../components/AddUser";
import User from "../components/User";
import NavbarFilter from "../components/NavbarFilter";
import UserList from "../components/UserList";

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

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (addUpdate === "Update") updateData();
    else if (addUpdate === "Add") passData();
  }, [newuser]);

  return (
    <div className="">
      <Navbar />
      <div className="flex justify-between px-[15%] mt-10 gap-x-10">
        <div className="w-[75%]">
          <NavbarFilter />
          <UserList
            dataList={dataList}
            editHandler={editHandler}
            deleteUser={deleteUser}
          />
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
