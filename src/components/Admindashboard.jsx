import React, { useEffect } from 'react'
import img1 from './IMAGES/logo.png'
import { useState } from 'react';
import Post from './Post';
import Postpending from './Postpending';
import axios from 'axios';

export default function AdminDashboard({ value }) {
    const [activeButton, setActiveButton] = useState('approved');
    const [posts, setPosts] = useState([]);
    const [approvedCount, setApprovedCount] = useState(0);
    const [pendingCount, setPendingCount] = useState(0);
    const [rejectedCount, setRejectedCount] = useState(0);

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

    useEffect(() => {
        // Fetch data from the API endpoint based on the active button
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://fuoye-api.onrender.com/admincheck?status=${activeButton}`);
                setPosts(response.data);
                const approvedPosts = response.data.filter(post => post.status === 'approved');
                const pendingPosts = response.data.filter(post => post.status === 'pending');
                const rejectedPosts = response.data.filter(post => post.status === 'rejected');

                setApprovedCount(approvedPosts.length);
                setPendingCount(pendingPosts.length);
                setRejectedCount(rejectedPosts.length);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [activeButton]);

    const approvedPost = (post) => {
        console.log(post._id);
        const id = post.id;
        const postconfirm = window.confirm("This post will be approved for the public to view. Okay?")
        if (postconfirm) {
          axios.post('https://fuoye-api.onrender.com/approvepost', {id:id})
        } else {
          alert("Oh.. Oh!")
        }
    }

    const changeContent = () => {
        if (activeButton === 'approved' || activeButton === 'rejected') {
            return <Post />;
            } else if (activeButton === 'pending') {
            return posts.map(post => (
                <Postpending
                    key={post._id}
                    username={post.username}
                    date={post.date}
                    time={post.time}
                    details={post.postContent}
                    title={post.title}
                    coverImage={post.newsimg}
                    onClickApprove={() => approvedPost(post)}
                />
            ));
        }
    };

    return (
        <>
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
                    <div className="d-md-flex justify-content-around align-items-center">
                        <p className='container fw-bold fs-4'>ADMIN DASHBOARD</p>
                        <div className='d-flex container'>
                            <button
                                className={`btn btn-success ${activeButton === 'approved' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('approved')}
                            >
                                Approved {<small>{approvedCount}</small>} 
                            </button>
                            <button
                                className={`btn btn-warning ${activeButton === 'pending' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('pending')}
                            >
                                Pending {<small>{pendingCount}</small>}
                            </button>
                            <button
                                className={`btn btn-danger ${activeButton === 'rejected' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('rejected')}
                            >
                                Rejected {<small>{rejectedCount}</small>}
                            </button>
                        </div>
                    </div>
                    <div className='bg-light px-md-5 mx-auto my-4 p-4'>
                        <div className='fw-bold fs-5 mb-3'>POSTS</div>
                        <div>
                            {changeContent()}
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
        </>
    )
}
