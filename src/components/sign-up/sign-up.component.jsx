import React, { useState, useEffect } from 'react';
import "./sign-up.styles.scss"

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component"

import { auth } from "../../firebase/firebase.utils"

const SignUp = () => {
    const [formFields, setFormFields] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e) => {
        let obj = { ...formFields }
        obj[e.target.name] = e.target.value;
        setFormFields({ ...obj })
    }


    const handleSubmit = async(e) => {
        e.preventDefault();

        const {user} = await auth.createUserWithEmailAndPassword()
    }

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="displayName" type="text" value={formFields.displayName} id="displayName" handleChange={handleChange} label="Your Name" />
                <FormInput name="email" type="email" value={formFields.email} id="email" handleChange={handleChange} label="Email" />
                <FormInput name="password" type="password" value={formFields.password} id="password" handleChange={handleChange} label="Password" />
                <FormInput name="confirmPassword" type="password" value={formFields.confirmPassword} id="confirmPassword" handleChange={handleChange} label="Confirm Password" />

                <CustomButton type="submit" >Sign Up</CustomButton>
            </form>
        </div>
    )
}

export default SignUp
