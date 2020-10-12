// import React, { useState,useEffect, Component } from 'react'; 
// import './App.css';
// import Axios from 'axios';
// import { Link, BrowserRouter, Route} from 'react-router-dom';
// import reviews from './Screen/Reviews';
// class addMovieReviews extends Component{


//     render() {

//     return (
//         <BrowserRouter>
//         <div className="form">
//         <form onSubmit={submitReview} >
//           <ul className="form-container">
//             <li>
//               <h2>Movie Review</h2>
//             </li>  
//             <li>
//               <label htmlFor="movieName">
//                Movie Name {" "}
//               </label>
//               <input className="movieName" type="movieName" name="movieName" id="movieName" onChange={(e) => setMovieName(e.target.value)}>
//               </input>
//             </li>
//             <li>
//               <label htmlFor="review">Review{" "}</label>
//               <input className="review" type="review" id="review" name="review" onChange={(e) => setReview(e.target.value)}>
//               </input>
//             </li>
//             <li>
//             <input type="submit" value="Submit" />
//             <button onClick={emptyInput}>Empty input</button>
//             </li>
   
//             <li>
//               <Link to="/review" className="button-register-for-sign-in" ><h4>Go to reviews</h4></Link>
//             </li>
//           </ul>
//         </form>
//         <main>
//           <div className="content">
//           <Route path={"/review"} component={reviews}></Route> 
//           </div>
//         </main>
//         </div>
//       </BrowserRouter>
//     )
//     }
// }

// export default addMovieReviews;
