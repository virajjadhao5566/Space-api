import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [newsList,setNewsList] = useState([])
  useEffect(()=>{
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
    .then((response)=>response.json()).then((data)=>{
      setNewsList(data)
    })
  }, [])
  return(
    <div className="App">
      <div className="title">
        <h1>Space News</h1>
      </div>
      <div className="newsContainer">
        {
          newsList.map((val,key)=>{
            return(
              <div className='article' key={key} onClick={()=>{window.location.href = val.url}}>
                <h2>{val.title}</h2>
                <img src={val.imageUrl}/>
                <h4>{val.summary}</h4>
                <h2>{val.publishedAt}</h2>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App;
