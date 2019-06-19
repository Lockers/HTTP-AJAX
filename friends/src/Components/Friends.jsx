import React from 'react'
import Styled from 'styled-components'

const Div = Styled.div`
    display: flex;
    background: lightgrey;
    height: 50px;
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
            <P>Name:  { props.friend.name } </P>
            <P>Age:   {props.friend.age} </P>
            <P>Email: {props.friend.email} </P>
            <button onClick={props.delete}>X</button>
        </Div>
    )
}

export default Friends