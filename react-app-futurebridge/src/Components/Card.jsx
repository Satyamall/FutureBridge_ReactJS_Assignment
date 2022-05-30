
export default function Card({id,name,rating, date}){
    return <div className="card">
           <h3>{id}. Movie Name: {name}</h3>
           <p>Movie Rating: {rating}</p>
           <p>Release Date: {date}</p>
    </div>
}