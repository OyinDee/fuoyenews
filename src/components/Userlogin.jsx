import React from 'react'
import img1 from './IMAGES/logo.png'
import img2 from './IMAGES/steps.svg'
import { useState,useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
export default function Userlogin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate=useNavigate()

    useEffect(() => {
        const username=localStorage.username    
        const token=localStorage.token
        axios.get('https://fuoye-api.onrender.com/dashcheck', {
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        }
    ).then((response)=>{
        if(localStorage.token&&response.data.message==='verification successful'){
            console.log(response)
            localStorage.username=response.data.username                         
            navigate('/')
        }
        else{
            console.log("no")
        }
    }).catch((err)=>{
        console.log(err)
    })
    })
    const tryToLogin=()=>{
        if(username===''||password===''){
            setMessage("Do make sure you fill neccessary fields and try again")
        }
        else{
            const  userDetails={
                username, password
            }
            console.log(userDetails)
            axios.post('https://fuoye-api.onrender.com/login', userDetails).then((response,err) => {              
                console.log(response);
                setMessage(response.data.message)
                if(response.data.message=="Your login is successful!"){
                    localStorage.token=response.data.token
                    navigate('/')                       
                }
                else{
                    setMessage(response.data.message)            
                    setUsername('')
                    setPassword('')
                }
            }).catch((err)=>{
                if (err.message==='timeout exceeded') {
                        setMessage("Check your internet connection and try again.")
                } else {
                    setMessage(err.message)       
                }                                    
            })
        }}
    return (
            <div className="d-flex flex-column min-vh-100">
                <header className="py-2 bg-success border-1 text-uppercase text-bg-light text-center mb-5 w-100">
                    <nav className="d-flex justify-content-between ps-4">
                        <div className="w-25">
                            <div className="">
                                <img src={img1} height="80rem" width="80rem" alt="fuoye logo" className="my-1 text-uppercase" />
                            </div>
                        </div>
                        <div className="flex justify-content-center my-auto me-4">
                            <span className="text-uppercase text-light">
                                fuoye
                            </span>
                            <span className="text-uppercase border border-1 border-light border-top-0 border-start-0 border-end-0 text-light">
                                news
                            </span>
                        </div>
                    </nav>
                </header>
                <section className="vh-75 pb-5">
                    <div className="container-fluid h-custom">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-9 col-lg-6 col-xl-5">
                                <img src={img2}
                                    className="img-fluid" alt="Sample image" />
                            </div>
                            {message}
                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <div>

                                    <div className="form-outline mb-4">
                                        <input type="username" id="username" name="username" className="form-control form-control-lg"
                                            placeholder="Enter your username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                                        <label className="form-label" htmlFor="form3Example3">Username</label>
                                    </div>

                                    <div className="form-outline mb-3">
                                        <input type="password" id="password" name="password" className="form-control form-control-lg"
                                            placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                        <label className="form-label" htmlFor="password">Password</label>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center">

                                        <div className="form-check mb-0">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                            <label className="form-check-label" htmlFor="form2Example3">
                                                Remember me
                                            </label>
                                        </div>
                                        <a href="#!" className="text-body">Forgot password?</a>
                                    </div>
                                    <div className="text-center text-lg-start mt-4 pt-2">
                                        <button className="btn btn-success btn-lg"
                                            style={{paddingLeft: 25,paddingRight: 25}} onClick={tryToLogin}>LOGIN</button>

                                        <p className="fw-bold mt-2 pt-1 mb-0">Don't have an account? <a onClick={()=>{
                                            navigate('/signup')
                                        }}
                                            className="link-danger">Register</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="py-2 bg-success border-1 text-uppercase text-bg-light text-center mt-auto pt-0">
                    <div className="w-100 p-3">
                        <div className="flex justify-content-center my-auto">
                            <span className="text-uppercase text-light">
                                @
                                fuoye
                            </span>
                            <span className="text-uppercase border border-1 border-light border-top-0 border-start-0 border-end-0 text-light">
                                news
                            </span>
                            <span className='text-light'>
                                ||2023
                            </span>
                        </div>
                    </div>
                </footer>
        </div>
    )
}
