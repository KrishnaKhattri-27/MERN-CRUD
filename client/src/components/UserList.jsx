import React, { useEffect, useState } from 'react'
import User from './User'

const UserList = ({dataList,editHandler,deleteUser,val}) => {

  return (
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
          val={val}
          dataList={dataList}
        />
      ))
    )}
  </div>
  )
}

export default UserList
