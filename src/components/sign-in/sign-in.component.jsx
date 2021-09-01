import React, { useState } from 'react';
import "./sign-in.styles.scss"

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
    const [formFields, setFormFields] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        let obj = { ...formFields }
        obj[e.target.name] = e.target.value;
        setFormFields({ ...obj })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormFields({
            email: "",
            password: ""
        })
    }

    return (
        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span >Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="email" type="email" value={formFields.email} id="email" handleChange={handleChange} label="Email" />
                <FormInput name="password" type="password" value={formFields.password} id="password" handleChange={handleChange} label="Password" />
                <div className="buttons">
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn
