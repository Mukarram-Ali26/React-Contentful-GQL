import React from 'react'
// import marked from "marked";
const Post = ({person}) => {
    console.log(person)
    const {name, age, featuredImage, descrption} = person.fields;
    // const postDesc = marked(description)
        return (
       
        <div>
           <h1>{name}</h1>
           <h3>{age}</h3>
           {featuredImage && <img src={featuredImage.fields.file.url} alt={name} title={name}/>}
           {/* <section dangerouslySetInnerHTML={{__html: postDesc}}/> it is for markdown */}
           <section>{descrption}</section>
        </div>
    )
}

export default Post
