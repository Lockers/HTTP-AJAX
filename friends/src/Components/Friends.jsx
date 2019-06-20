import React from 'react'
import Styled from 'styled-components'
import {NavLink } from 'react-router-dom'


const Div = Styled.div`
    display: flex;
    background: lightgrey;
    height: auto;
    text-align: center;
    margin: 0 auto;
    width: 600px;
    border-bottom: 1px solid black;
`   
const P = Styled.p`
    margin: 10px;
    text-align: center;
    padding: 10px;
`

const Friends = (props) => {
    
    return (
        <Div>
            <P>Name:  {props.friend.name } </P>
            <P>Age:   {props.friend.age} </P>
            <P>Email: {props.friend.email} </P>
            <button onClick={(event) => { props.delete(props.friend.id) }}>X</button>
            <NavLink exact to='/update-friend'><button onClick={(event) =>  props.setFriendToUpdate(event, props.friend)}>Update</button></NavLink>
        </Div>
       
    )
}

export default Friends