import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export const RegisteredUsersList = () => {
    const [inputs, setInputs] = useState([]);

    useEffect(() =>{
        setInputs([
            {
                id: 1,
                fname: "Roniel",
                lname: "Duka",
                mname: "Lucena",
                age: 22,
                sex: "male",
                email: "dukaroniel0701@gmail.com",
            },

            {
                id: 2,
                fname: "Rae Julien",
                lname: "Duka",
                mname: "Lucena",
                age: 15,
                sex: "male",
                email: "pukkaraj@gmail.com",
            }
        ])
    }, []);

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
                                <th>#</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                inputs.map(data => (
                                    <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.lname}, {data.fname} {data.mname}</td>
                                        <td>
                                            <Link to={`/edit/${data.id}`}> Edit</Link>
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