import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    // load data 
    const loadedUsers = useLoaderData();
    // declare a state 
    const [users, setUsers] = useState(loadedUsers);
    // declare a state to hold the count of users 
    const [totalUsers, setTotalUsers] = useState(loadedUsers.length);
    // handle delete 
    const handleDelete = (id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            // user is confirmed to delete 
            if (result.isConfirmed) {
                // send id to server and server will send response and delete from browser 
                fetch(`https://coffee-store-server-side-4e2s3g6ma-anupama-halders-projects.vercel.app/user/${id}`,{
                    method: 'DELETE'
                })
                .then(res=> res.json())
                .then(data =>{
                    // means successful deletion 
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        // remove deleted user from UI 
                        const remainingUsers = users.filter(user=> user._id != id);
                        setUsers(remainingUsers);
                        // after delete set the total users 
                        setTotalUsers(remainingUsers.length);
                    }
                })
                console.log(id);
            }
          })
    }
    return (
        <div>
           <h1>Total Users: {totalUsers}</h1> 
           <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Account Created At</th>
                    <th>Last Logged At</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    // loop through by mapping 
                    users.map(user => <tr key={user._id}>
                        <th>1</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.createdTime}</td>
                        <td>{users.lastLoggedAt}</td>
                        <td>
                            {/* perform delete operation  */}
                            {/* steps: 1. make an delete api on server side  */}
                            {/* 2. send id as parameter to handleDelete  */}
                            <button onClick={()=>handleDelete(user._id)} className="btn">X</button>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Users;