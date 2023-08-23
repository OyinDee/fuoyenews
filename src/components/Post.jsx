import React from 'react'

export default function Post({ username, date, time, ideaDetails, title }) {
  return (
    <>
      <div className="cardbox shadow-lg bg-white p-3">
        <div className="">
          <div className="d-flex">
            <p className="fw-bold">{username = "Oyin"}</p>
            <small className='mx-2'>
              <span><i className="icon ion-md-pin"></i>{time = "12:00pm"}</span>
            </small>
            <small>
              <span><i className="icon ion-md-time"></i>{date = "August 23, 2023"}</span>
            </small>
          </div>
        </div>
        <div className="cardbox-item">
          <div className='fs-5'>{title = "Lorem"}</div>
          <div className='my-3'>{ideaDetails = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil velit consectetur, adipisci explicabo odit accusamus quibusdam libero. Magnam ad quod reiciendis libero eaque beatae assumenda nisi recusandae. Qui, quidem magni."}</div>
          <div className=''>
            <button className='btn bg-success'>Approve</button>
            <button className='btn bg-danger mx-2'>Decline</button>
            <button className='btn bg-secondary mt-2 mt-md-0'>Send Feedback</button>
          </div>
        </div>
      </div>
    </>
  )
}
