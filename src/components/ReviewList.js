//holds reviews
//needs to be added to movies
import React, { Component} from "react";
import Review from "./Review";

export default class ReviewList extends Component {
    render() {
        // need way to add reviews
        
        return(
            <div >
                <h4>Reviews:</h4>
                <ul id="review-list">
                   <Review/>
                </ul>
            </div>
        );
    }
}