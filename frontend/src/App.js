import React, { useState,useEffect, Component } from 'react'; 
import './App.css';
import Axios from 'axios';
import { Link, BrowserRouter, Route,Switch} from 'react-router-dom';
import Review from './Screen/Reviews'; 
import Homescreen from './Screen/Homescreen';
import NewUpdatedScreen from './Screen/NewUpdatedScreen';
class App extends Component{

  // constructor() {
  //   super();

  //   this.state = {
  //     movieName: '',
  //     setReview: ''
  //   };

  //   this.onMovieChange = this.onMovieChange.bind(this);
  //   this.onReviewChange = this.onReviewChange.bind(this);
  //   this.submitReview = this.submitReview.bind(this);

  // }
  // onMovieChange(e) {
  //   this.setState({
  //     movieName: e.target.value
  //   });
  // }
  // onReviewChange(e) {
  //   this.setState({
  //     setReview: e.target.value
  //   });
  // }
  // submitReview(e) {
  //   e.preventDefault();
  //   const movieName = this.state.movieName;
  //   const movieReview = this.state.setReview;
  //   Axios.post('http://localhost:3001/api/insert',
  //   {movieName: movieName, movieReview: movieReview}).then(()=>
  //   {
  //     alert('Insert successfully');  
  //   }
  //   ) 
  //   this.setState({
  //     movieName: '',
  //     setReview: ''
  //   })
  // } 
  render() {
    return (
      <BrowserRouter> 
      <Switch> 
        <Route exact path="/"  
        component={Homescreen} />

        <Route path="/review"  
        component={Review}/> 

        <Route path="/updated" 
        component={NewUpdatedScreen}/>
      </Switch>
    </BrowserRouter>
    );
  }

}
// constructor(){
//   super();
//   this.state = {
//     movieName: '',
//     setReview: ''
//   }
// }
// /*componentWillMount is done before the INITIAL render of a component, 
// and is used to assess props and do any extra logic based upon them 
// (usually to also update state), and as such can be performed on the server
//  in order to get the first server side rendered markup. 

//  componentDidMount is performed AFTER the initial render when the DOM has been
//   updated (but crucially BEFORE this DOM update is painted to the browser,
//      allowing you to do all kinds of advanced interactions with the DOM itself). */
// componentWillMount() {
//   // fetch('/persons')
//   //   .then(res => res.json())
//   //   .then(participants => this.setState({participants}));
//   // Axios.post('http://localhost:3001/api/insert',{movieName: movieName, movieReview: review}).then(()=>
//   //   {
//   //     console.log('successful insert');  
//   //   }
//   // )

// }
// render() {
//   return (
//     <div className="addMovieReview">
//     <addMovieReviews
//       addParticipant={this.handleAddParticipants.bind(this)}
//     />
//   </div>
//   );
// }
// }
// function App() {
//   const [movieName, setMovieName] = useState('');
//   const [review, setReview] = useState(''); 
//   const submitReview = (e) => {
//     e.preventDefault(); 

//     Axios.post('http://localhost:3001/api/insert',{movieName: movieName, movieReview: review}).then(()=>
//       {
//         console.log('successful insert');  
//       }
//     )

//     setMovieName('');
//     setReview('');
//     console.log(movieName);
//   }
//   const emptyInput = () => {
//     alert('Emptying input');

//   }

//   return (
//     <BrowserRouter>
//       <div className="form">
//       <form onSubmit={submitReview} >
//         <ul className="form-container">
//           <li>
//             <h2>Movie Review</h2>
//           </li> 
//           <li>
//             <label htmlFor="movieName">
//              Movie Name {" "}
//             </label>
//             <input className="movieName" type="movieName" name="movieName" id="movieName" value = {movieName}onChange={(e) => setMovieName(e.target.value)}>
//             </input>
//           </li>
//           <li>
//             <label htmlFor="review">Review{" "}</label>
//             <input className="review" type="review" id="review" name="review" value = {review} onChange={(e) => setReview(e.target.value)}>
//             </input>
//           </li>
//           <li> 
//           <button type="submit" className="button-register-registration ">Submit</button>
//           </li>

//           <li>
//             <Link to="/review" className="button-register-for-sign-in" ><h4>Go to reviews</h4></Link>
//           </li>
//         </ul>
//       </form>
//       <main>
//         <div className="content">
//         <Route path={"/review"} component={reviews}></Route> 
//         </div>
//       </main>
//       </div>
//     </BrowserRouter>
//   );
// }

export default App;
