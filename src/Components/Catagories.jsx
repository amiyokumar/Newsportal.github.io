import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const Catagories = ({cat}) => {
  const [Data,setData]=useState([])
  useEffect(()=>{
    axios.get("https://newsapi.org/v2/top-headlines?country=in&category="+cat+"&apiKey=5eecd1feae2c4104a59359eeb7e5f191")
    .then((res)=>{
      setData(res.data.articles);
    })
  },[])
  
return (
  <>
  
    <div className='container my-5'>
      <div className='row text-center'>
        {
          Data.map((val)=>{
            return(
              <div className='col my-1 p-3'>
              <div className="card" style={{width : "18rem"}}>
                <img src={val.urlToImage} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">{val.title}</h5>
                  <p className="card-text">{val.description}</p>
                  <p className="card-text">Published By: {val.author}</p>
                  <p className="card-text">Time: {val.publishedAt}</p>
      </div>
    </div>
              </div>
              
            )
          })
        }
      </div>
    </div>
  </>
)
}

export default Catagories