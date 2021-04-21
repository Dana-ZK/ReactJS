import React, {useState} from 'react';
import './App.css';
import { userData } from './Users/userData';


const Header = ({
    handelSearchByName,
    handelSorting,
  }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        onChange={ handelSearchByName} />
      <form action="">
        <select
        name="Age"
        onChange={ handelSorting}
        >
          <option disabled>Select age</option>
          <option value="From low to high">From low to high</option>
          <option value="From high to low">From high to low</option>
          <option  value="Random">Random</option>
          </select>
      </form>
      <hr/>
    </div>
  )
  }

const Card = (props) => {
  return (
          <div className="userInfo"> 
              <h3 > Name: {props.user.name}</h3>
              <p> Age user: {props.user.age}</p>
              <p>Gender: {props.user.gender}</p>
              <strong> Balance: {props.user.balance}</strong>
              <br/>
              <img src={props.user.picture} alt=""/> Photo
        </div>
)}

const App = () => {
  const [users, setUsers] = useState(userData);
  const [sort, setSort] = useState('Random');

  const handelSearchByName = e => {
    let searchByName = userData.filter(user => user.name.toLocaleLowerCase().includes(e.target.value))
      setUsers(searchByName)
      console.log(users)
}     

  const handelSorting = (value = sort, arr = users) => {
    setSort(value);
    setUsers(
      arr.sort((a, b) => {
        if (value === "From low to high") {
          return a.age - b.age
        }
        else if (value === "From high to low") {
          return b.age - a.age
        } else {
          return [...userData]
        }
      })
    );
  };
  
  return(
    <div className="App">
      <Header handelSorting = {handelSorting} handelSearchByName={handelSearchByName} />
      <main>
        <ul >{
          users.map(user => <Card key={'userCard' + user._id} user={user} />)
        }
        </ul>
      </main>
    </div>
  );
}

export default App;
