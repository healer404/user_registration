import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from 'react-router-dom';

export const RegisterUser = () => {
    const {register, handleSubmit} = useForm();
    const history = useHistory();

    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data));
        history.push('/');
    });

    return (
        <div className="container">
            <div className="mt-3">
                <div className="card">
                    <div className="card-header">
                        <h3>Register User</h3>
                    </div>
                    <div className="card-body p-3">
                        <form onSubmit={onSubmit}>
                            <p>
                                Please provide the following information. <br/>
                                <em>Required field(s)<span className="required">* </span></em>
                            </p>
                            <div className="form-group my-2">
                                <label htmlFor="text">First Name <span className="required">* </span> </label>
                                <input {...register("fname")} type="text" name="fname" id="fname" className="form-control" required/>
                            </div>

                            <div className="form-group my-2">
                                <label htmlFor="text">Last Name <span className="required">* </span> </label>
                                <input {...register("lname")} type="text" name="lname" id="lname" className="form-control" required/>
                            </div>

                            <div className="form-group my-2">
                                <label htmlFor="text">Middle Name </label>
                                <input {...register("mname")} type="text" name="mname" id="mname" className="form-control" required/>
                            </div>

                            <div className="form-group my-2">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="number">Age <span className="required">* </span> </label>
                                        <input {...register("age")} type="number" name="age" id="age" className="form-control" required/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="text">Sex <span className="required">* </span> </label>
                                        <select {...register("sex")} name="sex" id="sex" className="form-control" required>
                                            <option value="" selected disabled>Please choose</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group my-2">
                                <label htmlFor="email">Email<span className="required">* </span> </label>
                                <input {...register("email")} type="email" name="email" id="email" className="form-control" required/>
                            </div>

                            <div className="form-group my-2">
                                <button type="submit" className="btn btn-primary">SAVE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}