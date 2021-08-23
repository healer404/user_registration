import React, {useState, useEffect} from "react";

import {UserInfoForm} from "./userInfoForm";

export const UpdateUserInfo = () => {
    const [input, setInputs] = useState();

    useEffect(() => {
        setInputs({
            fname: "test",
            lname: "test",
            mname: "test",
            age: "12",
            sex: "male",
            email: "test@test.test",
        })
    }, []);

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }

    return input ? (
        <div className="container">
            <div className="mt-3">
                <div className="card">
                    <div className="card-header">
                        <h3>Update Registered User Information</h3>
                    </div>
                    <div className="card-body p-3">
                        <p>
                            The following are the information provided by the user. <br/>
                            <em>Required field(s)<span className="required">* </span></em>
                        </p>
                        <UserInfoForm input={input} onSubmit={onSubmit()}/>
                    </div>
                </div>
            </div>
        </div>
    ) : (<div>loading...</div>) ;
}