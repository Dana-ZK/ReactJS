import React, {useState} from 'react';
import './App.css';
import { userData } from './Users/userData';


const Card = () => {
  const userInfo = userData
  return (
          <div > 
           {userInfo.map(user => {
            return (
              <h3 > Name: {user.name}</h3>,
              <p> Age user: {user.age}</p>,
              <p>Gender is {user.gender}</p>,
              <strong> Balance: {user.balance}</strong>
              );
            }
            )}
            <img src="" alt=""/>
        </div>
)}

const Header = () => {
  return (
    <div>
      <input type="text" placeholder="Enter name" />
      <hr/>
    </div>
  )
}

const App = () => {
  
  return (
    <div className="App">
      <Header />
      <Card
        
      />
    </div>
  );
}

export default App;
