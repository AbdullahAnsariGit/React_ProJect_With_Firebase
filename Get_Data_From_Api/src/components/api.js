import React, { useState , useEffect} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

export default function Apii() {
    const [users,setUsers] = useState([]);
    const [singleUser,setSingleUser] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
          setUsers(res.data)
        })
        .then((error)=>{
          console.log(error)
        })
        
    },[]);
    const getId = (e)=>{
      // alert(e.target.value)
      axios.get('https://jsonplaceholder.typicode.com/users/' + e.target.value)
        .then((res)=>{
          setSingleUser(res.data)
        })
        .then((error)=>{
          console.log(error)
        })
    }
  return (
    <div>
     {/* DropDown */}
    <select className='form-control col-md-3' onChange={getId}>
      <option value="0">--Select Name--</option>
    {users.map(user =>
      
      <option key={user.id} value={user.id} > {user.name}
      </option >
    )}
    </select>

    {/* line Break */}
    <br/><br/>

    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{singleUser.id}</td>
          <td>{singleUser.name}</td>
          <td>{singleUser.username}</td>
          <td>{singleUser.email}</td>
        </tr>
      </tbody>
    </Table>

    </div>
  );
}
