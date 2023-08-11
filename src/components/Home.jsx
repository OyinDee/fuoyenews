import {useState,useEffect} from 'react'
import axios from 'axios'
import AdminPost from './AdminPost'
import {useNavigate} from "react-router-dom"

export default function ToBeApproved() {
    const [ideas, setIdeas]= useState([])
    const navigate=useNavigate()
    const username=localStorage.username    
    const token=localStorage.token
        useEffect(() => {
            axios.get('https://newsapp-dpv1.onrender.com/dashcheck', {
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
                axios.post('https://newsapp-dpv1.onrender.com/getUserType', {username:response.data.username}).then((response)=>{
                    console.log(response.data)
                    if(response.data===1){
                        navigate('/developers/home') 
                    }
                    else if(response.data===0){
                        navigate('/thinkers/home') 
                    }    
                    else if(response.data===11){
                        navigate('/onlyadmin')                 
                    }
                })
            }
            else{
            console.log("it isnt")
                navigate('/')
            }
        }).catch((err)=>{
            console.log(err)
        }).then(()=>{
            axios.get('https://newsapp-dpv1.onrender.com/admincheck').then((response)=>{
                setIdeas(response.data)
            })
        })
    }, [])

    const approve=(val)=>{
        console.log(val._id)
        const id=val._id
        const postconfirm=window.confirm("This idea will be approved for the public to view. Okay?")
        if (postconfirm) {
            axios.post('https://newsapp-dpv1.onrender.com/approvepost', {id:id})
        } else {
            alert("Oh.. Oh!")
        }
    }
    
    const remove=(val)=>{
        console.log(val._id) 
        const id=val._id
        const delconfirm=window.confirm("This post will be deleted permanently and the owner concerned will be alerted!")
        if (delconfirm) {
            axios.post('https://newsapp-dpv1.onrender.com/deletepost', {id:id})
        } else {
            alert("Okay! Thanks for giving our users another chance.")
        }
    }
    const feedback=(val)=>{
        console.log(val._id)
    }
    return (
        <>
        <br/>
        <div className="AdminPagePosts"/>
        {ideas.map((val, i) => (
            <div key={i}>
              <AdminPost date={val.date} time={val.time} username={val.username} ideaDetails={val.postContent} actions={<div className="cardbox-approval">
              <button className="btn btn-outline-success" onClick={()=>approve(val)}>Approve</button>
              <button className="btn btn-outline-warning" onClick={()=>feedback(val)}>Send Feedback</button>        
              <button className="btn btn-outline-danger" onClick={()=>remove(val)}>Decline</button>
              </div>}/>
            </div>
          ))}
        </>
    )
}
