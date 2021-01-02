import * as contentful from "contentful"; 

export const Client = contentful.createClient({
    space: 'ye76zj2fp2vd',
    accessToken: 'va3MXkrKZCE0taQeatUS_mL5aBdUIRYlA_MB9kzN26s'
}) 



// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// // import "./styles.css";

// const accessToken =
//   "e448ca0c6ff57f7f20b50928909200db225d6ef7645acb99f41a315d0b20beb1";
// const spaceId = "j44xk2xv8em8";
// const query = `
// {
//   albumCollection {
//     items {
//       title
//       releaseYear
//       cover {
//         url
//         description
//       }
//       artist {
//         name
//       }
//     }
//   }
// }
// `;

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       albums: [],
//       loading: true,
//       error: null
//     };
//   }

//   componentDidMount() {
//     fetch(
//       `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`,
//       {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//           authorization: `Bearer ${accessToken}`
//         },
//         body: JSON.stringify({
//           query
//         })
//       }
//     )
//       .then(res => res.json())
//       .then(response => {
//         console.log(response);

//         const { data } = response;
//         this.setState({
//           loading: false,
//           albums: data ? data.albumCollection.items : []
//         });
//       })
//       .catch(error => {
//         this.setState({
//           loading: false,
//           error: error.message
//         });
//       });
//   }

//   render() {
//     if (this.state.loading) {
//       return "loading";
//     }

//     if (this.state.error) {
//       return this.state.error;
//     }

//     if (!this.state.albums.length) {
//       return "no albums defined";
//     }

//     const { albums } = this.state;

//     return (
//       <div className="App">
//         {albums.map(album => {
//           return (
//             <div className="album" key={album.title}>
//               <span className="album__releaseYear">{album.releaseYear}</span>
//               {album.cover && (
//                 <img
//                   className="album__cover"
//                   src={album.cover.url}
//                   alt={album.cover.description}
//                 />
//               )}
//               <div className="album__container">
//                 <h2 className="album__title">{album.title}</h2>
//                 {album.artist && (
//                   <div>
//                     <span>by</span>
//                     <h3 className="album__artist">{album.artist.name}</h3>
//                   </div>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }
// export default App
