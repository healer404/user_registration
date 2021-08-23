import React from "react";
import {UserInfoForm} from "./userInfoForm";

export const RegisterUser = () => {

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    };

    return (
        <div className="container">
            <div className="mt-3">
                <div className="card">
                    <div className="card-header">
                        <h3>Register User</h3>
                    </div>
                    <div className="card-body p-3">
                        <p>
                            Please provide the following information. <br/>
                            <em>Required field(s)<span className="required">* </span></em>
                        </p>
                        <UserInfoForm onSubmit={onSubmit}></UserInfoForm>
                    </div>
                </div>
            </div>
        </div>
    );
}