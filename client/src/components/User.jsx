import React, { useEffect, useState } from "react";

const User = ({ item, editHandler, deleteUser, val,dataList }) => {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    for (let i = 0; i < dataList.length; i++) {
      const cardtitlevalue = item.name;
      if (cardtitlevalue) {
        if (val === null) {
          setDisplay("");
        } else {
          if (cardtitlevalue?.toUpperCase().indexOf(val?.toUpperCase()) > -1)
            setDisplay("");
          else setDisplay("hidden");
        }
      }
    }
  }, [val]);

  return (
    <div className={`${display}`}>
      <div className="block p-6 bg-gray-800 rounded-lg ">
        <h5 className="text-lg font-semibold tracking-tight text-white">
          {item.name}
        </h5>
        <h5 className="text-xs font-normal tracking-tight text-white">
          {item.email}
        </h5>
        <h5 className="mb-2 text-xs font-normal tracking-tight text-white">
          {item.phone}
        </h5>
        <div className="flex gap-x-4">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => editHandler(item._id)}
          >
            Edit
          </button>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => deleteUser(item._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
