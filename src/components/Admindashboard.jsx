import React from 'react'
import img1 from './IMAGES/logo.png'
import { useState } from 'react';
import Post from './Post';
import Postpending from './Postpending';

export default function AdminDashboard({ value	}) {
    const [activeButton, setActiveButton] = useState('approved');

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

    const changeContent = () => {
        if (activeButton === 'approved') {
            return <Post />;
        } else if (activeButton === 'pending') {
            return <Postpending />;
        } else if (activeButton === 'rejected') {
            return <Post />;
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
                                Approved {value = <small>0</small>}
                            </button>
                            <button
                                className={`btn btn-warning ${activeButton === 'pending' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('pending')}
                            >
                                Pending {value = <small>20</small>}
                            </button>
                            <button
                                className={`btn btn-danger ${activeButton === 'rejected' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('rejected')}
                            >
                                Rejected {value = <small>0</small>}
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
