import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {getUsersData} from "./api";

export const RegisteredUsersList = () => {
    const [inputs, setInputs] = useState([]);

    useEffect(() =>{
        const fetchUsersData = async () => {
            const usersData = await getUsersData();
            setInputs(usersData)
        }
        fetchUsersData()
    }, [])

    return (
        <div className="container">
            <div className="mt-3">
                <div className="card">
                    <div className="card-header">
                        <h3>Registered Users List</h3>
                    </div>
                    <div className="card-body">
                        <table className="table table-responsive table-hover">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                inputs.map(data => (
                                    <tr key={data._id}>
                                        <td>{data.lname}, {data.fname} {data.mname}</td>
                                        <td>
                                            <Link to={`/update/${data._id}`}><i className="fas fa-edit"></i></Link>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}