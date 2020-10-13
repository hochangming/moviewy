import React, {Component} from 'react'
import { Link} from 'react-router-dom';

class NewupdatedScreen extends Component{

    render(){
        return <div>
        <div className="updateReview">
        <h2 class="flash">Review Updated </h2> 
        </div> 
        <Link to="/review" onClick={()=>this.props.history.goBack()}className="go-back" ><h4>Go back</h4></Link>
        </div>
    }
}

export default NewupdatedScreen;