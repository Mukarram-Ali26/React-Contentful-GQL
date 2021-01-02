import React from 'react'
import Post from "./Post";
const Posts = ({data}) => {
    return (
        <div>
            {data.map((person, index) => <Post person={person} key={index}/>)}
        </div>
    )
}



export default Posts
