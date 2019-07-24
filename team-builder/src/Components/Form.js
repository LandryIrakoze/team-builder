import React from 'react';
import { useState } from 'react';
import { Data } from '../Data/Data'
import UserList from './UserList';

const Form = (props) => {

    const [userInfo, setUserInfo] = useState({name: "", email: "", role: ""});
    const [userList, setUserList] = useState([]);
    const [memberToEdit, setMemberToEdit] = useState({});

    const handleChange = event => {
        setUserInfo({...userInfo, [event.target.name]: [event.target.value]})
    }

    const handleSubmit = event => {
        event.preventDefault();
        setUserList([...userList, userInfo]);
        // setMyUserList([...userList, userInfo]);
        console.log('userInfo', userInfo);
        console.log('userList', userList);
    }

    // console.log(props.list); 
    const edit = (item) => {
        console.log('item', item);
        console.log('userList', userList);
        const userIndex = userList.findIndex(user => {
            return user.name === item.name;
        })
        console.log('userIndex', userIndex);
        setMemberToEdit(userList[userIndex]);
    }
    console.log('memberToEdit', memberToEdit);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input 
                        type="text" 
                        onChange={event => handleChange(event)} 
                        placeholder="name"
                        name="name"
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="email" 
                        onChange={event => handleChange(event)} 
                        placeholder="email"
                        name="email"
                    />
                </label>
                <label>
                    Role:
                    <select 
                        name="role"
                        onChange={event => handleChange(event)}
                    >
                        <option value="CEO">CEO</option>
                        <option value="team lead">Team Lead</option>
                        <option value="backend engineer">Backend Engineer</option>
                        <option value="frontend engineer">Frontend Engineer</option>
                        <option value="designer">Designer</option>
                        <option value="marketer">Marketer</option>
                    </select>
                </label>
                <button>Submit</button>
            </form>
            {/* <UserList list={userList} /> */}
            
            <div>
                {
                    userList.map(item => {
                        return (
                            <div key={item.name}>
                                <p>Name: {item.name} Email: {item.email} Role: {item.role}</p>
                                <button onClick={() => edit(item)}>Edit</button>
                            </div>
                        )
                    })
                }    
            </div>
        </>
    )
}

export default Form;