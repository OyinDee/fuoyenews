import React from 'react'
import img1 from './IMAGES/logo.png'
import img2 from './IMAGES/signup.svg'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState, useEffect } from 'react'
export default function Usersignup() {
    const token = localStorage.token
    const [email, setEmail] = useState('')
    const [ff, setFf] = useState(0)
    const [message, setMessage] = useState('Hiii')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const navigate = useNavigate()
    const tryToSignup = () => {

        if (phone === "" || email === "" || username === "" || password === "") {
            setMessage('Something is wrong, a field is empty!')
        }
        else {
            let userDetails = {
                phone, email, username, password, ff
            }
            console.log(userDetails);
            axios.post('https://fuoye-api.onrender.com/signup', userDetails).then((response) => {
                console.log(response);
                if (response.data.text === "no") {
                    setMessage(response.data.message)
                    if (response.data.message === "Username already exists.") {
                        setUsername('')
                    }
                    else if (response.data.message === "Email already exists.") {
                        setEmail('')
                    }
                }
                else if (response.data.text === "yes") {
                    navigate('/userlogin')
                }
            }).catch((error) => {
                if (error.message === 'timeout exceeded') {
                    setMessage("Check your internet connection and try again.")
                } else {
                    setMessage(error.message)
                }
            });
        }
    }
    useEffect(() => {
        const username = localStorage.username
        axios.get('https://fuoye-api.onrender.com/dashcheck', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        ).then((response) => {
            if (localStorage.token && response.data.message === 'verification successful') {
                console.log(response)
                localStorage.username = response.data.username
                navigate('/')
            }
            else {

            }
        }).catch((err) => {
            console.log(err)
        })
    })
    const goToLogin = () => {
        navigate('/userlogin')
    }
    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <header className="py-2 bg-success border-1 text-uppercase text-bg-light text-center mb-5 w-100">
                    <nav className="d-flex justify-content-between ps-4">
                        <div className="w-25">
                            <div className="">
                                <img src={img1} height="80rem" width="80rem" alt="fuoye logo" className="my-1 text-uppercase" />
                            </div>
                        </div>
                        <div className="flex justify-content-center my-auto me-4">
                            <span className="text-uppercase">
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
                                <form>


                                    <div className="form-outline mb-4 mt-3">
                                        <input type="email" id="form3Example3" className="form-control form-control-lg"
                                            placeholder="Enter a valid email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="email" id="form3Example3" className="form-control form-control-lg"
                                            placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="email" id="form3Example3" className="form-control form-control-lg"
                                            placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    </div>

                                    <div className="form-outline mb-3">
                                        <input type="password" id="form3Example4" className="form-control form-control-lg"
                                            placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center">

                                        <div className="form-check mb-0">
                                            <input className="form-check-input me-2" type="checkbox" id="form2Example3" onChange={() => {
                                                if (ff == 0) {
                                                    setFf(1)
                                                    console.log(ff)
                                                }
                                                else {
                                                    console.log(ff)
                                                    setFf(0)
                                                }
                                            }} />
                                            <label className="form-check-label" htmlFor="form2Example3">
                                                FUOYE student
                                            </label>
                                        </div>
                                        <a href="/idform.html" className="text-body">Add student ID</a>
                                    </div>
                                    <div className="text-center text-lg-start mt-4 pt-2">
                                        <button type="button" className="btn btn-success btn-lg" onClick={tryToSignup}>SIGNUP</button>
                                        <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a href="#!"
                                            className="link-danger" onClick={goToLogin}>Login</a></p>
                                    </div>
                                </form>
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
        </>
    )
}
