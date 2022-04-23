import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    axios
    .get(https://jsonplaceholder.typicode.com/users);
    .then(response => {response.json()
  .then(json => console.log(json))
    }),
    

  return(

   <div>
  <ul>
      {
user.map(user => <li key = {user.id}>{user.title}</li>,
user.map(user => <li key = {user.name}>{user.title}</li>,
user.map(user => <li key = {user.email}>{user.title}</li>,
user.map(user => <li key = {user.street}>{user.title}</li>,
user.map(user => <li key = {user.address}>{user.title}</li>,
user.map(user => <li key = {user.phone}>{user.title}</li>)
</ul>
  
  </div>;
})

export default UserList;
