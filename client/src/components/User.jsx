import React from "react";

const User = ({item,editHandler,deleteUser}) => {
  return (
    <div  className="">
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
         {item.name}
        </h5>
       <div className="flex gap-x-4">
       <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>editHandler(item._id)}>Edit</button>
       <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>deleteUser(item._id)}>Delete</button>
       </div>
      </div>
    </div>
  );
};

export default User;
