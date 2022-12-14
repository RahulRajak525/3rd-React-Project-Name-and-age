import React, { useState, Fragment } from 'react';

import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';
function App() {
  const [userList, setUserList]= useState([]);
  const addUserHandler = (uName, uAge,uCollege)=>{
     setUserList((prevUserList)=>{
      return [...prevUserList, {name: uName, age:uAge, college: uCollege ,id: Math.random().toString()}];
     })
  }
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </Fragment>
  );
}

export default App;
