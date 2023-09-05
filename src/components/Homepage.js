import React from 'react'
import { Routes, Route, useNavigate, Router } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react"
import img1 from './IMAGES/logo.png'
import img2 from './IMAGES/meetingg.png'
import img3 from './IMAGES/posts.svg'
import { Like } from './Like'
import { Reply } from './Reply'
import { FlagPost } from './FlagPost'

export default function Homepage() {
    const navigate = useNavigate()


    useEffect(() => {
        const username = localStorage.username
        const token = localStorage.token
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
            }
            else {
                console.log("it isnt")
                navigate('/userlogin')
            }
        }).catch((err) => {
            console.log(err)
        })
    })
    const token = localStorage.token;

 const [Inputa, setInputa] = useState('')
  const [SelectedFile, setSelectedFile] = useState(undefined)
  const [Inputb, setInputb] = useState('')
  const uploadFile = (e) => {
    const file = e.target.files[0]

        console.log(file);
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
            console.log(reader.result)
            setSelectedFile(reader.result)
        }

    }
    const addpost = () => {
        console.log(SelectedFile)
        var postpicture = SelectedFile
        var posttopic = Inputa
        var postdetails = Inputb
        let username = localStorage.getItem('username')
        let date = new Date().toLocaleDateString()
        let time = new Date().toLocaleTimeString()
        let alldetails = { posttopic, postpicture, postdetails, date , username, time }
        // console.log(alldetails)
        // let alldetails = { posttopic, postdetails }
        console.log(alldetails)
        axios.post('https://fuoye-api.onrender.com/adminapproval', (alldetails))
        alert("Your post should be approved soon")
        setInputa('')
        setInputb('')

    }

    const [approvedPosts, setApprovedPosts] = useState([]);

  useEffect(() => {
    const fetchApprovedPosts = async () => {
      try {
        const response = await axios.get('https://fuoye-api.onrender.com/userscheck');
        setApprovedPosts(response.data);
      } catch (error) {
        console.error("Error fetching approved posts:", error);
      }
    };
    fetchApprovedPosts();
}, []);

const handleLogout = () => {
    // localStorage.removeItem('token');
    // localStorage.removeItem('username');
    navigate('/userlogin');
}
const [password, setPassword] = useState('');
const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

const goToAdmin = () => {
    const password = window.prompt("Enter Password");
    if (password === "2078") {
        setIsPasswordCorrect(true);
        navigate('/admin');
    } else {
        alert("Incorrect password. Please try again.");
    }
};


    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <header className="py-2 bg-success border-1 text-uppercase text-bg-light text-center mb-3 w-100 position-fixed">
                    <nav className="d-flex justify-content-between ps-4">
                        <div className="w-25">
                            <div className="">
                                <a to='/admin' onClick={goToAdmin}>
                                    <img src={img1} height="80rem" width="80rem" alt="fuoye logo" className="my-1 text-uppercase" />
                                </a>
                                </div>
                        </div>
                        <div className="flex justify-content-center my-auto me-4">
                            <span className='text-color-light text-uppercase'>
                                fuoye
                            </span>
                            <span className="text-uppercase border border-1 border-light border-top-0 border-start-0 border-end-0 text-light">
                                news
                            </span>
                        </div>
                    </nav>
                </header>
                <div className='mt-5 mb-5'></div>
                <div className="d-flex flex-column mx-4 mt-5">
                    <input type="text" className="form-control my-2 text-center" placeholder="Post topic..." name="posttopic" onChange={e => setInputa(e.target.value)} value={Inputa} />
                    <textarea id="" className="mb-2 border border-2" placeholder="What news do you have for us right now...?" name="postdetails" onChange={e => setInputb(e.target.value)} value={Inputb}></textarea>
                    <input type="file" className="form-control my-2 text-center" placeholder="Image" name="img" onChange={uploadFile} />

                    <button className="btn btn-success p-2" onClick={addpost}>POST</button>
                </div>
                <div className='d-flex justify-content-around align-items-center mt-5'>
                <div className="text-uppercase">
                    <span className="border border-1 border-dark border-top-0 border-start-0 border-end-0">
                        latest
                    </span>
                    <span className="">
                        news
                    </span>
                </div>
                <div className=''>
                <button className='btn bg-warning' onClick={handleLogout}>Log out</button>
                </div>
                </div>
                
                <div className='my-4'>
                    <div className="mx-4 border border-1 p-2 rounded rounded-4 mt-3 bg-light px-4">
                        <div>
                            <div className="mx-auto border-1 border"><img src={img2} style={{ width: 200 }} /></div>
                            <h2><center>THE BOARD MEETING OVER CAMPAIGNS</center></h2>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur totam voluptatum expedita aspernatur molestias, sint ex voluptatibus neque animi non earum impedit voluptates doloremque dignissimos labore nostrum, blanditiis similique libero.
                            <div className="opacity-50 d-flex justify-content-end" >
                                <h6>22/05/23||Diidee</h6>
                            </div>
                            <div className="d-flex justify-content-between p-2">
                            <Like />
                            <Reply />
                            <FlagPost />    
                            </div>
                        </div>
                    </div>
                    <div className='mx-4 border border-1 p-2 rounded rounded-4 mt-3 bg-light px-4'>
                {approvedPosts.map(post => (
                    <div key={post._id}>
                        <center>
                        <h2 className='fw-bold'>{post.title}</h2>
                        <p>{post.postContent}</p>
                        <div className="opacity-50 d-flex justify-content-end" >
                            <h6>{post.date} || {post.username} || {post.time}</h6>
                        </div>
                        <div className="d-flex justify-content-between p-2">
                            <Like />
                            <Reply />
                            <FlagPost />
                        </div>
                        </center>
                    </div>
                ))}
            </div>
                    <div className="mx-4 border border-1 p-2 rounded rounded-4 mt-3 bg-light px-4">
                        <div>
                            <div className="mx-auto border-1 border w-100 h-20"><img src={img3} style={{ width: 200 }} /></div>
                            <h2><center>SIGN UP TO FUOYE NEWS TO STAY INFORMED</center></h2>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur totam voluptatum expedita aspernatur molestias, sint ex voluptatibus neque animi non earum impedit voluptates doloremque dignissimos labore nostrum, blanditiis similique libero.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eligendi exercitationem aliquam! Incidunt eveniet expedita architecto molestias dolorum numquam laudantium fugit, nulla voluptatibus consequatur porro asperiores animi voluptatem laborum non. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur praesentium et voluptas nesciunt totam voluptatibus, corrupti aut atque, quis cum in. Possimus culpa voluptatibus aliquid saepe aut, hic vero corrupti.
                        </div>
                        <div className="opacity-50 d-flex justify-content-end" >
                            <h6>28/05/23||Astro</h6>
                        </div>
                        <div className="d-flex justify-content-between p-2">
                        <Like />
                            <Reply />
                            <FlagPost />    
                        </div>
                    </div>
                </div>
                <footer className="py-2 bg-success border-1 text-uppercase text-bg-light text-center mt-auto pt-0">
                    <div className="w-100 p-3">
                        <div className="flex justify-content-center my-auto">
                            <span className='text-color-light text-uppercase'>
                                @
                                fuoye
                            </span>
                            <span className="text-uppercase border border-1 border-light border-top-0 border-start-0 border-end-0 text-light">
                                news
                            </span>
                            <span className='text-color-light'>
                                ||2023
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
