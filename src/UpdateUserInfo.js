import React, {useState, useEffect} from "react";
import {UserInfoForm} from "./userInfoForm";
import {useRouteMatch, useHistory} from 'react-router-dom';
import {getData, updateUserData} from "./api";

export const UpdateUserInfo = () => {
    const match = useRouteMatch();
    const [input, setInputs] = useState();
    const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData(match.params.id);
            setInputs(data)
        }
        fetchData()
    }, []);

    const onSubmit = async (data) => {
        await updateUserData(data, match.params.id);
        history.push("/");
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
                        <UserInfoForm input={input} onSubmit={onSubmit}/>
                    </div>
                </div>
            </div>
        </div>
    ) : (<div>loading...</div>) ;
}