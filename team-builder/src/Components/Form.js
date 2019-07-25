import React from 'react';
import { useState } from 'react';
import { Data } from '../Data/Data'
import UserList from './UserList';

const Form = (props) => {

    const [userInfo, setUserInfo] = useState({name: "", email: "", role: ""});
    const [userList, setUserList] = useState([]);
    // const [memberToEdit, setMemberToEdit] = useState({});
    const [index, setIndex] = useState(0);
    const [flag, setFlag] = useState(false);

    const handleChange = event => {
        setUserInfo({...userInfo, [event.target.name]: [event.target.value]})
    }

    const handleSubmit = event => {

        if(flag) {
            event.preventDefault();
            let newList = userList;
            newList[index] = userInfo;
            // console.log('member', memberToEdit);
            setUserList(newList);
            console.log('newlist', newList);
            // setUserList({...userList, [memberToEdit]: [userInfo]})
            console.log(userList);
            setFlag(!flag);
        } else {
            event.preventDefault();
            setUserList([...userList, userInfo]);
            // setMyUserList([...userList, userInfo]);
            console.log('userInfo', userInfo);
            console.log('userList', userList);
        }
    }


    const edit = (item) => {
        setFlag(!flag);
        console.log('item', item);
        console.log('userList', userList);
        const userIndex = userList.findIndex(user => {
            return user.name === item.name;
        })
        console.log('userIndex', userIndex);
        setIndex(userIndex);
        // setMemberToEdit(userList[userIndex]);
    }
    // console.log('memberToEdit', memberToEdit);

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
                        <option value="" disabled selected>select your role</option>
                        <option value="Team Lead">Team Lead</option>
                        <option value="Backend Engineer">Backend Engineer</option>
                        <option value="Frontend Engineer">Frontend Engineer</option>
                        <option value="Designer">Designer</option>
                        <option value="Marketer">Marketer</option>
                        <option value="CEO">CEO</option>
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
                                <p>Name: {item.name}</p>
                                <p>Email: {item.email}</p>
                                <p>Role: {item.role}</p>
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