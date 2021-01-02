import React, { useState } from 'react'
import { Client } from "./client";
import Posts from './components/Posts';
import './App.css'

export const App = () => {

  const [data, setData] = useState([])

      Client.getEntries()
  .then(
    (response) => setData(response.items)
  )
  .catch(console.error)

  
  return (
    <div className='App'>
     <h1>This is our Blog site using Contentful</h1> 
      <Posts data={data} />
    </div>
  )
}

export default App;
// yarn add contentful marked


// import useContentful from './Contentful'

// const query = `
//   query {
//     person(id: "7fSSHPxbZbV6vx62dgHU9Q") {
//       name
//       }
//     }`
//     ;



  // useEffect(() => {
  //         window.fetch(`https://graphql.contentful.com/content/v1/spaces/ye76zj2fp2vd?access_token=va3MXkrKZCE0taQeatUS_mL5aBdUIRYlA_MB9kzN26s`, {
  //           method: "POST",
  //           header: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({ query }),
  //         }).then((response) => response.json())
  //         .then((json) => {console.log(json.data)});
  //       }, []).
 
  // window.fetch(`https://graphql.contentful.com/content/v1/spaces/ye76zj2fp2vd?access_token=va3MXkrKZCE0taQeatUS_mL5aBdUIRYlA_MB9kzN26s`, {
  //   method: "POST",
  //   header: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({ query }),
  
  // }).then((response) => response.json())
  // .then((json) =>{
  //    console.log(json.data)
  // }).catch((err)=>{
  //   console.log(err);
  // });



  // import React,{useState, useEffect} from 'react'

//  function useContentful  (query)  {

//     const [data, setData] = useState(null);

//     useEffect(() => {
//       window.fetch(`https://https://graphql.contentful.com/content/v1/spaces/ye76zj2fp2vd?access_token=va3MXkrKZCE0taQeatUS_mL5aBdUIRYlA_MB9kzN26s`, {
//         method: "POST",
//         header: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ query }),
//       }).then((response) => response.json())
//         .then((json) => setData(json.data));
//     }, [query])
  
//     if (!data) return <h2>Loading......</h2>
//     return {data}
// }
// export default useContentful;
// {/* {data} */}

//const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;
// let {data} = useContentful(query);


 // Client.getEntries()
  // .then(
  //   (response) => console.log(response)
  // )
  // .catch(console.error)