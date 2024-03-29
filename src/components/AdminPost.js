
export default function AdminPost({username,date,time,ideaDetails,actions}) {


    return (
        <>
        <section className="section colored">
        <section className="profile-feed">

<div className="col-lg-6 offset-lg-3">

<div className="cardbox shadow-lg bg-white">

<div className="cardbox-heading">
    <div className="dropdown float-right">
        <button className="btn btn-flat btn-flat-icon" type="button" data-toggle="dropdown" aria-expanded="false">
            <em className="fa fa-ellipsis-h"></em>
        </button>
        <div className="dropdown-menu dropdown-scale dropdown-menu-right" role="menu" style={{position: "absolute", transform: "translate3d(-136px, 28px, 0px)", top: "0px", left:"0px", willChange: "transform"}}>
            <a className="dropdown-item" href="#">Hide post</a>
            <a className="dropdown-item" href="#">Stop following</a>
            <a className="dropdown-item" href="#">Report</a>
        </div>
    </div>
    <div className="media m-0">
        <div className="d-flex mr-3">
        </div>
        <div className="media-body">
            <p className="m-0">{username}</p>
            <small><span><i className="icon ion-md-pin"></i>{time}</span></small>
            <small><span><i className="icon ion-md-time"></i>{date}</span></small>
        </div>
    </div>
</div>
<div className="cardbox-item">
  {ideaDetails}
</div>

{actions}
</div>
</div>
</section>
    </section>     
        </>
    )
}
