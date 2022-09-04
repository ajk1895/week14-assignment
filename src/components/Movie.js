//container for movie data: synopsis, rating, reviews, etc.
/********************************** don't need to add new movies, just new reviews *******************************/
import React, { Component} from "react";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";



export default class Movie extends Component {


    render() {
      
        return(
            <div>
                <h3> {this.props.title} </h3>
                <p> {this.props.synop} </p>
                <ReviewForm/>                
                <ReviewList/>
            </div>
        );
    }
}