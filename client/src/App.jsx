import { useState ,useEffect} from 'react'

import './App.css'

function App() {
  const [message, setMessage] = useState("");

  useEffect(()=>{
    //.then is used to conver the data form string to json
    fetch("http://localhost:4000/api/message")
    .then((res)=>res.json())
    .then((data)=>setMessage(data.message))
    .catch((err)=>console.log(err))  
  },[])
  return (
    <>
     <h1>Lets get started vansh</h1>
      <h3>
        DATA {message}
      </h3>
    </>
  )
}

export default App
