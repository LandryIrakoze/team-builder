import React from 'react';
import { useState } from 'react';
import { Data } from '../Data/Data'

const Form = () => {

    const [userInfo, setUserInfo] = useState({name: "", email: "", role: ""});
    const [userList, setUserList] = useState([]);

    const handleChange = event => {
        setUserInfo({...userInfo, [event.target.name]: [event.target.value]})
    }

    const handleSubmit = event => {
        event.preventDefault();
        setUserList([...userList, userInfo]);

        console.log('userInfo', userInfo);
        console.log('userList', userList);
    }

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
                        onchange={event => handleChange(event)}
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
        </>
    )
}

export default Form;