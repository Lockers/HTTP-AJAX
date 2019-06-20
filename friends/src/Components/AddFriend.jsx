import React from 'react'

const AddFriend = (props) => {
    return (
        <form onSubmit={props.submit}>
            <input
                type="text"
                name="name"
                placeholder="name"
                onChange={props.changeHandler}
            />
            <input
                type="number"
                name="age"
                placeholder="name"
                onChange={props.changeHandler}
            />
            <input
                type="text"
                name="email"
                placeholder="name"
                onChange={props.changeHandler}
            />
            <button>Add Friend</button>
        </form>
    )
}

export default AddFriend