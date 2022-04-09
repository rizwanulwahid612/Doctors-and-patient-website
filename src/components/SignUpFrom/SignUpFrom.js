import React, {useState} from 'react';
import Form from "../SignUp/Form/Form";
import TextInput from "../SignUp/Form/TextInput/TextInput";
import CheckBox from "../CheckBox/CheckBox";
import Button from "../Button/Button";
import {Link, useNavigate} from "react-router-dom";
import './SignupForm.css';
import {useAuth} from '../../Context/AuthContext'
const SignUpFrom= () => {

    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[confirmPassword,setConfirmPassword]=useState('')
    const[agree,setAgree]=useState(false)
    const [error,setError]=useState('')
    const [loading,setLoading]=useState('')
    const {SignUp}=useAuth();
    let navigate = useNavigate();
    const handleSubmit=async (e) => {
        e.preventDefault();

        if (password!== confirmPassword) {
            setError("PassWord Does Not Match");


        }
       if(!error){ try {
            setError('')
            setLoading(true)
            await SignUp(email,password,username)
            navigate("/");

        } catch (err) {
            console.log(err)
            setLoading(false)
            setError("Error")
        }}

    }
    return (
        <Form className={"signup"} onSubmit={handleSubmit}>
            <TextInput type="text" placeholder="Type your Name" icon='person'value={username} onChange={(e)=>{
                setUsername(e.target.value)
            }}/>


            <TextInput type="text" placeholder="Enter your Email" icon='alternate_email'
                       value={email} onChange={(e)=>{
                setEmail(e.target.value)}}/>

            <TextInput type="password" placeholder="Enter your Password" icon='lock'
                       value={password} onChange={(e)=>{
                setPassword(e.target.value)}}/>

            <TextInput type="password" placeholder="confirm Password" icon='lock_clock'
                       value={confirmPassword} onChange={(e)=>{
                setConfirmPassword(e.target.value)}}/>


            <CheckBox text="I agree to the Terms & Conditions"
                      value={agree} onChange={(e)=>{
                setAgree(true)}}/>


            {error && <p className="error">{error}</p>}
            <Button disabled={loading} className={"button"} type={"submit"}>Submit Now</Button>
            <div className="info">
                Already have an account? <Link to='/Login'>Login</Link> instead.
            </div>

        </Form>
    );
};

export default SignUpFrom;