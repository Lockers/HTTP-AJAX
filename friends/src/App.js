import React from 'react';
import './App.css';
import axios from 'axios'
import Friends from './Components/Friends'
import { Route, NavLink} from 'react-router-dom'
import Update from './Components/Update'
import AddFriend from './Components/AddFriend'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      friend: {
        name: '',
        age: 0,
        email: ''
      },
      friendToUpdate: {
        id: null,
        name: '',
        age: null,
        email: 'lol',
    }
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

  changeHandler = (event) => {
    event.persist()
    this.setState(prevState => ({
        friend: {
        ...prevState.friend,
      [event.target.name]: event.target.value
      }
    }))
  }
  updateFields = (event) => {
    event.persist()
    this.setState(prevState => ({
      friendToUpdate: {
        ...prevState.friendToUpdate,
        [event.target.name]: event.target.value,
      }
      
    }))
    console.log(this.state.friendToUpdate)
  }
 
addFriend = () => {
    axios.post('http://localhost:5000/friends', this.state.friend )
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(error => {
        console.error(error)
      })
  }
  onSubmit = (event) => {
    event.preventDefault()
    this.addFriend()
  }

  deleteData = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(error => {
        console.error(error)
      })
  }
  setFriendToUpdate = (event, object) => {
    this.setState(prevState => ({
      friendToUpdate: {
        ...prevState.friendToUpdate,
        id: object.id,
        name: object.name,
        age: object.age,
        email: object.email
        }
    }))
    console.log(this.state.friendToUpdate)
  }
  


  updateData = (id) => {
    const friendy = this.state.friendToUpdate
    console.log(friendy)
    axios.put(`http://localhost:5000/friends/${friendy.id}`, friendy)
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
        this.state.friends.map((friend, index) => {
          return (
            <Route path='/' render={props => <Friends  {...props} key={index} friend={friend} delete={this.deleteData} setFriendToUpdate={this.setFriendToUpdate} />} />
          )
        })
      }
     
      <NavLink exact to='/add-friend'>Add Friend</NavLink>
      <Route exact path='/update-friend' render={(props) => <Update {...props} updateData={this.updateData} updateFields={this.updateFields} friendUpdate={this.state.friendToUpdate} />} />
      <Route exact path='/add-friend' render={(props) => <AddFriend {...props} addfriend={this.addFriend} changeHandler={this.changeHandler} submit={this.onSubmit} />} />
     
      </div>
    );
  }
}

export default App;
