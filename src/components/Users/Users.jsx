import { useLoaderData } from "react-router-dom";

const Users = () => {
    // load data 
    const loadedUsers = useLoaderData();
    return (
        <div>
           <h1>Total Users: {loadedUsers.length}</h1> 
           <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Account Created At</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    // loop through by mapping 
                    loadedUsers.map(user => <tr key={user._id}>
                        <th>1</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.createdTime}</td>
                    </tr>)
                }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Users;