import { useEffect, useState } from 'react'
import './bondhu.css'
import Friend from './Friend'
export default function Friends(){


    const [friends, setfriends]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=>setfriends(data))
    }, [])

    return(
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(p => <Friend allFriend={p}></Friend>)
            }
        </div>
    )
}

/**
 * 1. state to hold data
 * 2. useEffect with dependency array
 * 3. load data from api
 * 4.set loaded data to the state
 * 5.display data on the component
 */