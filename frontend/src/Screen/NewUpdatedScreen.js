import React, {Component} from 'react'
import { Link} from 'react-router-dom';

class NewupdatedScreen extends Component{

    render(){
        return <div>Updated
        <Link to="/review" onClick={()=>this.props.history.goBack()}className="go-to-review" ><h4>Go back</h4></Link>
        </div>
    }
}

export default NewupdatedScreen;