import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AddUser from "../components/AddUser";
import User from "../components/User";
import NavbarFilter from "../components/NavbarFilter";
import UserList from "../components/UserList";

const Dashboard = ({logedin,logoutHandler}) => {
  const [token,setToken]=useState("")
  const [dataList, setDataList] = useState();
  const [status, setStatus] = useState(false);
  const [op, setOp] = useState(false);
  const [ID, setID] = useState("");
  const [newuser, setNewuser] = useState({ name: "", email: "", phone: "" });
  const [addUpdate, setAddUpdate] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
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
    const response = await fetch("https://mern-crud-server1.onrender.com/user/addUser", {
      method: "POST",
      body: JSON.stringify(newuser),
      headers: {
        "Content-Type": "application/json",
          "Authorization":"Bearer "+token
      },
    });
    const json = await response.json();
    if (response.ok) {
      setNewuser({ name: "", email: "", phone: "" });
      fetchData();
    } else {
      // console.log(json);
      return
    }
  };

  const updateData = async () => {
    const response = await fetch("https://mern-crud-server1.onrender.com/user/update/" + ID, {
      method: "POST",
      body: JSON.stringify(newuser),
      headers: {
        "Content-Type": "application/json",
          "Authorization":`Bearer ${token}`
      },
    });
    const json = await response.json();
    if (response) {
      fetchData();
    } else {
      return;
    }
  };

  const fetchData = async () => {
    const response = await fetch("https://mern-crud-server1.onrender.com/user/getUser",{
      headers:{
        "Authorization":"Bearer "+token
      }
    });
    const json = await response.json();
    if (response) {    
      setDataList(json.data);
    } else {
      console.log("error in fetching");
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
    const response = await fetch("https://mern-crud-server1.onrender.com/user/delete/" + id, {
      method: "DELETE",
      //   body: JSON.stringify(newuser),
      headers: {
        "Content-Type": "application/json",
          'Authorization':`Bearer ${token}`
      },
    });
    const json = await response.json();
    if (response) {
      fetchData();
    } else {
      return;
    }
  };
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"))
    if(user){
      setToken(user.token)
  }
  },[])
  useEffect(()=>{
    fetchData();
  },[token])


  useEffect(() => {
    if (addUpdate === "Update") updateData();
    else if (addUpdate === "Add") passData();
  }, [newuser]);


    const [val, setVal] = useState("");
    const searchhandler = (event) => {
        if (event.target === null) {
          setVal("")
        } else {
         setVal(event.target.value)
        }
      };

      const [change,setChange]=useState(false)
      const sortFilter=(e)=>{
        dataList.sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
        
          if (e==="acc"?nameA > nameB:nameA<nameB) {
            return -1; 
          } else if (e==="acc"?nameA < nameB:nameA>nameB) {
            return 1;
          } else {
            return 0; 
          }
          
        });
        setChange(!change)
      }

  return (
    <div className="">
      <Navbar logoutHandler={logoutHandler}/>
      <div className="flex md:flex-row gap-y-16 flex-col justify-between px-[15%] mt-10 gap-x-10 pb-10">
        <div className="md:w-[75%] md:order-1 order-2">
          <NavbarFilter sortFilter={sortFilter} searchhandler={searchhandler}/>
          <UserList
            dataList={dataList}
            editHandler={editHandler}
            deleteUser={deleteUser}
            val={val}
            change={change}
          />
        </div>
        <div className="md:w-[25%] md:order-2">
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
