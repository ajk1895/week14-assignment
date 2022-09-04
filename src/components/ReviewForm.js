//this is where users write reviews
// this form is used to create the review components
//users select star rating, and use textbox to write additional info
import React, { Component} from "react";
import Stars from "./Stars";

export default class ReviewForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commentValue: ""
        }
    }
    handleTypeChange = (event) => {
        this.setState({ commentValue: event.target.value })
    }
    //what am I doing wrong here??? not defined for some reason? 
    // onSubmit=(event) => {
    //     event.preventDefault()
    //     this.props.newReview(this.state.commentValue);
    // }
    
    
    render() {
        
        return(
            <div>
                <h6>Review Movie:</h6>
                <Stars/>
                <div className="mb-3 ">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Comments:</label>
                    <textarea className="form-control"value={this.state.commentValue} rows="3" onChange={this.handleTypeChange}></textarea>
                    <button className="btn btn-success" onClick={''} >Review</button>
                    {/* need button onclick to create new review component */}
                </div>

            </div>
        );
    }
}