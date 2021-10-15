import  {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [line , setLine] = useState("Post")
  
   useEffect(()=> {
      fetch(`https://jsonplaceholder.typicode.com/${setLine} `)
        .then((response) => response.json())
        .then((json) => console.log(json));
    },[line]);

  return (
    <>
    <div className="App">
      <button onClick={() => setLine("Post")}>Post</button>
      <button onClick={() => setLine("Users")}>Users</button>
      <button onClick={() => setLine("Comment")}>comments</button>
    </div>
    <h1>{line}</h1>
    </>
    
  );
}

export default App;
