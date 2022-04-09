import React, {useState} from 'react';
import Form from "../../SignUp/Form/Form";
import TextInput from "../../SignUp/Form/TextInput/TextInput";
import Button from "../../Button/Button";
import {Link, useNavigate} from "react-router-dom";
import '../LogIn.css'
import {useAuth} from "../../../Context/AuthContext";

const LoginForm = () => {


    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const [error,setError]=useState('')
    const [loading,setLoading]=useState('')
    const {login, GoogleSignin}=useAuth();
    let navigate = useNavigate();

    const handleSubmit=async (e) => {
        e.preventDefault();

        if(!error){try {
            setError('')
            setLoading(true)
            await login(email, password)
            navigate("/");

        } catch (err) {
            console.log(err)
            setLoading(false)
            setError("Error")
        }
    }}
    const GSignIN=async () => {
        await GoogleSignin()
        navigate("/");
    }



    return (
        <Form className={"signup"} onSubmit={handleSubmit} >

            <TextInput required type="text" placeholder="Enter your Email" icon='alternate_email'
                       value={email} onChange={(e)=>{
                setEmail(e.target.value)}}></TextInput>
            <TextInput  required type="password" placeholder="Enter your Password" icon='lock'
                       value={password} onChange={(e)=>{
                setPassword(e.target.value)}}

            ></TextInput>
           <div className={"flex"}>
               <Button disabled={loading}  className={"button"} type={"submit"}>Submit Now</Button>
               <input  className={"button"} onClick={GSignIN} value={"Google Sign in"}/>
           </div>
            <div className="info">
                {error && <p className="error">{error}</p>}
                Don't have an account? <Link to='/Signup'>create account</Link> instead.
            </div>
        </Form>
    );
};

export default LoginForm;