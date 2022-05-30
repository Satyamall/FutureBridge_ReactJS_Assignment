
import './App.css';
import {useState, useEffect} from "react";
import Card from './Components/Card';
import axios from 'axios';

function App() {

  const [data,setData] = useState([]);

  const getMovies = ()=>{
     return axios.get("http://localhost:5000/movie");
  }

  useEffect(()=>{
    getMovies()
    .then((res)=>{
      setData(res.data.payload)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  console.log(data);
  return (
    <>
    <h1 className='htag'>React app Which Show the movie card</h1>
    <div className="App">
       {data?.map((movie)=>{
         return <Card key={movie.id} 
                  id={movie.id}
                  name={movie.name}
                  rating={movie.rating}
                  date={movie.rating}
                />
       })}
    </div>
    </>
  );
}

export default App;
