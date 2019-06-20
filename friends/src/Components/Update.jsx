import React from 'react'

const Update = (props) => {
    return (
           <div>
        <div>Updating like a boss!</div>
            <form onSubmit={props.updateData}>
            <input
                type="text"
                name='name'
                placeholder='name'
                value={props.friendUpdate.name}
                onChange={props.updateFields}
                />
            <input
                type="number"
                name="age"
                placeholder="name"
                value={props.friendUpdate.age}
                onChange={props.updateFields}
                />
            <input
                type="text"
                name='email'
                placeholder="name"
                value={props.friendUpdate.email}
                onChange={props.updateFields}
                />
                <button>Update</button>
            </form>
        </div>
    )
}

export default Update