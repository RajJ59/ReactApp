import { useState } from 'react';
import './App.css';
import NavBar from './NavBar';

function App() {
  const [user, setUser] = useState([]);

  const userClick = async () =>{
   const api = await fetch("https://reqres.in/api/users?page=1");
   const JsonData = await api.json();
   setUser(JsonData.data);
  };

  return (
    <div className="App">
      <NavBar userClick = {userClick} />
      <div id = "main">
      <ul>
        {
          user.map(({id, email, first_name, last_name, avatar}) =>(
            <li><img id = "avatar" key = {avatar} src = {avatar} /> <br/> ID: {id} <br/> Name :{first_name} {last_name}  <br /> Email : {email} <br /></li>
          ))
        }
      </ul>
      </div>
     
      
    </div>
  );
}

export default App;
