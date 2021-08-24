import React from "react";
import {UserInfoForm} from "./userInfoForm";
import {newUserRegister} from './api';
import {useHistory} from "react-router-dom";

export const RegisterUser = () => {
    const history = useHistory();

    const onSubmit = async (data) => {
        await newUserRegister(data);

        history.push("/");
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
                        <UserInfoForm onSubmit={onSubmit}/>
                    </div>
                </div>
            </div>
        </div>
    );
}