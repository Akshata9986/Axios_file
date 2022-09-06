//https methods
//1.get() is used to get the data from the backend(reading data from back end)
//2.post() is used to send the data from the frontend(to create a data)
//3.put() is used to update the existing data(update)
//4.patch() will update only the changed value(update)
//5.delete() is used to delete an item(delete)


import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Addproducts() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res);
    setUser(res.data);
  };

  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>websites</th>
        </tr>
        {user.map((val) => {
          return (
            <tr>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.username}</td>
              <td>{val.email}</td>
              <td>{val.website}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Addproducts