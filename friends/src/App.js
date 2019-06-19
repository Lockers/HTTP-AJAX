import React from 'react';
import './App.css';
import axios from 'axios'
import Friends from './Components/Friends'
import { Route } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: []
    
    }
  }

  fetchData = () => {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({friends: response.data})
      })
      .catch(error => {
      console.error(error)
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  postData = () => {
    const fried = { name: 'Matt', age: 12, email: 'fdfsf'}
    axios.post('http://localhost:5000/friends', fried )
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(error => {
        console.error(error)
      })
  }

  deleteData = (id) => {
    console.log('Delete firing')
    axios.delete(`http://localhost:5000/friends/`)
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(error => {
        console.error(error)
      })
  }
  
  
  render() {
  return (
    <div className="App">
      <h1>Friends List</h1>
      {
        this.state.friends.map(friend => {
          return (
            <Route path='/' render={props => <Friends  {...props} key={friend.id} friend={friend} delete={this.deleteData} />} />
          )
        })
      }
      <h3>Add Friends</h3>
      <form onSubmit={this.addFriend}>
        <label>name</label>
        <input
          type='text'
          onChange={this.changeHandler}
        />
        <label>Age</label>
        <input />
        <label>Email</label>
        <input />
        <button onClick={this.postData}>Add</button>
      </form>
      </div>
    );
  }
}

export default App;
