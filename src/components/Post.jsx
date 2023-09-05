import React from 'react'

export default function Post({ username, date, time, details, title }) {
  return (
    <>
      <div className="card shadow-lg bg-white p-3 my-5">
        <div className="">
          <div className="d-flex">
            <p className="fw-bold">{username}</p>
            <small className='mx-2'>
              <span><i className="icon ion-md-pin"></i>{time}</span>
            </small>
            <small>
              <span><i className="icon ion-md-time"></i>{date}</span>
            </small>
          </div>
        </div>
        <div className="card-item">
          <div className='fs-5'>{title = "Lorem"}</div>
          <div className='my-3'>{details}</div>
        </div>
      </div>
    </>
  )
}
