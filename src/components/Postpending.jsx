import React from 'react';

export default function Postpending({ username, date, time, details, title, coverImage, onClickApprove, onClickDecline, onClickFeedback }) {
  return (
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
        <div className='fs-5'>{title}</div>
        <div className='text-center'>
          <img src={coverImage} alt="Cover" className="img-fluid w-75 rounded" /> {/* New image element */}
        </div>
        <div className='my-3'>{details}</div>
        <div className=''>
          <button className='btn bg-success text-light' onClick={onClickApprove}>Approve</button>
          <button className='btn bg-danger mx-2 text-light' onClick={onClickDecline}>Decline</button>
          <button className='btn bg-secondary mt-2 mt-md-0 text-light' onClick={onClickFeedback}>Send Feedback</button>
        </div>
      </div>
    </div>
  );
}
