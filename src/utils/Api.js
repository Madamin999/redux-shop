// import React from 'react';
// import axios from 'axios';
//
// export default class Api extends React.Component {
//     state = {
//         persons: []
//     }
//
//     componentDidMount() {
//         axios.get(`https://fakestoreapi.com/products`)
//             .then(res => {
//                 const persons = res.data;
//                 this.setState({ persons });
//             })
//     }
//
//     render() {
//         return (
//             <ul>
//                 {
//                     this.state.persons
//                         .map(person =>
//                             <li key={person.id}>{person.name}</li>
//                         )
//                 }
//             </ul>
//         )
//     }
// }