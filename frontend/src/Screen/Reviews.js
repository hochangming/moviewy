import React, { Component, Wrapper, useEffect} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import StarRating from '../components/StarRating';
import config from '../config'
/**Make sure you aren’t calling the function when you pass it to the component:
 *   // Wrong: handleClick is called instead of passed as a reference!
 *   return <button onClick={this.handleClick()}>Click Me</button>
 * Instead, pass the function itself (without parens):

render() {
  // Correct: handleClick is passed as a reference!
  return <button onClick={this.handleClick}>Click Me</button>
}

Search Passing Functions to Components
 */
class Review extends Component{
    constructor(){
        super();
        this.state = {
            movieReviewList: [],
            updateReview: '' 
        }
        /*bind a function to a component instance; There are several ways to make sure functions have access to component attributes like this.props and this.state */
        this.deleteReview= this.deleteReview.bind(this);
        this.onUpdateChange= this.onUpdateChange.bind(this);

    }
     componentDidMount(){
                
         Axios.get(`${config.SERVER_URI}/api/get`).then((response)=>{
            console.log(response.data);
            this.setState({
                movieReviewList: response.data
            })
        })
    }
    /*So you have two ways.

    Optimistic update, fire delete api to server + setState to delete data in your state. 
    And after you receive response from delete api, act accordingly.

    After fire delete api, re-fetch the whole data from server again and update state.

    I would suggest option 1 because it feels quicker for user.
    
    Again, the optimistic update pattern. Fire API + setState immediately... revert back if things go wrong.*/ 

    deleteReview =  (Name) =>{
        const currentmovieReviewList= this.state.movieReviewList;
        const newMovieLists = currentmovieReviewList.filter(movie => movie.Name !== Name);
        this.setState({ movieReviewList: newMovieLists});
         Axios.delete(`${config.SERVER_URI}/api/delete/${Name}`).then(response=>{
            console.log(response.status); 
            if(response.status === 'error'){
                this.setState({movieReviewList: currentmovieReviewList});
            } 
        })
        this.props.history.push('/updated');
        
    }

    updateReview =(Name) =>{
        const movieReview = this.state.updateReview;
        Axios.put(`${config.SERVER_URI}/api/update`,{
            movieName: Name,
            movieReview: movieReview
        })
        this.setState({
            updateReview:''
        })
        this.props.history.push('/updated');
    }

    onUpdateChange =(e) =>{
        this.setState({
            updateReview: e.target.value
        })
    }
    /**We need to assign a function to onClick event, we don't need to call it, but here you are calling that method, use this: 
     * onclick={() => this.tabChanged(idx, headline)}
    */
     render(){ 
        return ( <div> <Link className="back-to-result" to ="/">Back to results</Link> 
        {this.state.movieReviewList.map((val)=>{
            return <div className="card">
                <div className="review-list">
                    <h2> <p className="movieReview">{val.movie_name}</p> </h2>
                    <StarRating
                        value={val.movie_rating} 
                   /> 
                    <div class="verticalLine">
                        <h2> <p className="movieReview">{val.movie_review}</p></h2>
                    </div>
                   
                    <button key={val.movie_name} onClick={()=>this.deleteReview(val.movie_name)}> Delete</button>
                    <textarea cols="10" rows="1" className="review" onChange={this.onUpdateChange}>
                    </textarea>
                    <button key={val.movie_name} onClick={()=>this.updateReview(val.movie_name)}> Update</button>
                    
                </div>
            </div> 
            })} 
        </div>
            // <div> <Link to ="/">Back to results</Link> 
            // </div>,
            // this.state.movieReviewList.map((val)=>{
            // return <div >
            //     <div className="review-list">
            //         <h1>Movie Name: <p>{val.movie_name}</p> </h1>
            //         <div class="verticalLine">
            //             <h1>Movie Review: <p className="movieReview">{val.movie_review}</p></h1>
            //         </div>
            //     </div>
            // </div> 
            // })
        );
    }
    
}

export default Review;
