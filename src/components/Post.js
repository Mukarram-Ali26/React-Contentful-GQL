import React from 'react'
// import marked from "marked";
const Post = ({person}) => {
    console.log(person)
    const {name, age, featuredImage, descrption} = person.fields;
    // const postDesc = marked(description)
        return (
       
        <div>
           <h2><b>Name: </b>{name}</h2>
           <h3><b>Age:</b> {age}</h3>
           {featuredImage && <img src={featuredImage.fields.file.url} alt={name} title={name}/>}
           {/* <section dangerouslySetInnerHTML={{__html: postDesc}}/> it is for markdown */}
           <section><h3>Description:</h3> {descrption}</section>
        </div>
    )
}

export default Post
