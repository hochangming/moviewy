import React, {Component} from 'react';
import Axios from 'axios';
import { Link, BrowserRouter, Route} from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import config from '../config';
class Homescreen extends Component{
    constructor() {
        super();

        this.state = {
          movieName: '',
          setReview: '',
          setRating: '',
          errors: { movieName: '', setReview: '', setRating: ''}

        };

        this.onMovieChange = this.onMovieChange.bind(this);
        this.onReviewChange = this.onReviewChange.bind(this);
        this.ratingChanged = this.ratingChanged.bind(this); 
        this.submitReview = this.submitReview.bind(this);

      }
      onMovieChange(e) {
        this.setState({
          movieName: e.target.value
        });
      }
      onReviewChange(e) {
        this.setState({
          setReview: e.target.value
        });
      }
      ratingChanged = (newRating) => {
        this.setState({
          setRating: newRating
        });
      };
      /**How do I pass an event handler (like onClick) to a component? <button onClick={this.handleClick}> */
      submitReview(e) {
        e.preventDefault();
        if(this.handleValidation()){
          const movieName = this.state.movieName;
          const movieReview = this.state.setReview;
          const movieRating = this.state.setRating;
          const {data} =  Axios.post(`${config.SERVER_URI}/api/insert`,
          {movieName: movieName, movieReview: movieReview, movieRating: movieRating})  
          this.setState({
            movieName: '',
            setReview: '',
            setRating: '',
          })
          alert("Form submitted");
        }else{
          alert("Form has errors.");
          
        }

      } 
      
  handleValidation = () => {
    const { movieName, setReview, setRating} = this.state;
    let errors = { movieName: '', setReview: '', setRating: ''};
    let formIsValid = true;
    if (!movieName) {
     errors.movieName = 'Movie Name is required';
     formIsValid = false;
    }  

    if (!setReview) {
      errors.setReview = 'Movie Review is required';
      formIsValid=false;
    } 
    if (!setRating) {
      errors.setRating = 'Movie Rating is required';
      formIsValid=false;
    } 
    this.setState({ errors });

    return formIsValid;
  }

    render(){
      const { errors } = this.state;
        return(
            <div className="form">
            <form>
            <ul className="form-container">
              <li>
                <h2>Movie Review</h2>
              </li>  
              <li>
                <label htmlFor="movieName">
                Movie Name (200 chars limit) {" "}
                </label>
                <input className="movieName"  onChange={this.onMovieChange} value={this.state.movieName}>
                </input>
                {errors.movieName != '' && <span style={{color: "red"}}>{this.state.errors.movieName}</span>}
              </li>
              <li>
                Rating
              <ReactStars
                count={5}
                initialRating={this.state.setRating}
                onChange={this.ratingChanged}
                size={30}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                color= "blue"
                activeColor= "#ffbb00"
                // activeColor="#ffd700"
              />
              {errors.setRating != '' && <span style={{color: "red"}}>{this.state.errors.setRating}</span>}

              </li>
              <li>
                <label htmlFor="Review">Review (200 chars limit){" "}</label>
                <textarea cols="80" rows="10" className="review" onChange={this.onReviewChange} value={this.state.setReview}>
                </textarea>
                {errors.setReview != '' && <span style={{color: "red"}}>{this.state.errors.setReview}</span>}

              </li>
              <li> 
              <button onClick={this.submitReview}  type="submit" >Submit</button>

              </li>
    
              <li>
                <Link to="/review" onClick={()=>this.props.history.push('/review')}className="go-to-review" ><h4>Go to reviews</h4></Link>
              </li>
            </ul>
          </form></div>
        )
    }
}

export default Homescreen;