import React from 'react';
import { useState } from 'react';
import { Data } from '../Data/Data';

const UserList = (props) => {

    const myList = props.list;
    // console.log('userlistprops', props.list);
    // console.log('mylist', myList);

    return (
        <div>
            {
                myList.map(item => {
                    return (
                        <div key={item.name}>
                            <p>Name: {item.name} Email: {item.email} Role: {item.role}</p><button>Edit</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserList;