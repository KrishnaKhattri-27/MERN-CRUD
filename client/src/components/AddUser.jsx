import React, { useState } from "react";

const AddUser = ({ addUserHandler,title }) => {
  // const [user, setUuser] = useState();
  // if(edituser.name!=="")
  // setUuser(edituser)
  // console.log(edituser);
  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold text-black">{title} a user</h2>
      <form className="max-w-sm mx-auto"  onSubmit={addUserHandler}>
        <div className="mb-5">
          <label
            for="name"
            className="block mb-2 text-md font-medium text-black"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className=" border border-gray-300 text-gray-900 text-sm rounded-lg bg-gray-800 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Jhon hue"
            // value={edituser.name}
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="email"
            className="block mb-2 text-md font-medium text-black"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-800 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@flowbite.com"
            // value={edituser.email}
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="phone"
            className="block mb-2 text-md font-medium text-black"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="bg-gray-800 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Phone number (123-456-7890)"
            // value={edituser.phone}
            required
          />
        </div>
        <button
          type="submit"
          id="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
         
        >
          {title}
        </button>
      </form>
    </div>
  );
};

export default AddUser;
