import './App.css';
import React, { Component } from "react";
import MovieList from './components/MovieList';
import Nav from './components/Nav'



/*create app to review movies

components to make: 

MovieList- container for movies and data
Movie- thing to hold movie related data(reviews, synopsis, etc.)
Stars/rating- 1 to 5
ReviewList- *contianer inside movie* holds reviews
Review- text thingy
ReviewForm- form to type reivew, needs to be added to movie
*/



export default class App extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        reviews: []
      };
      
      //why is it either not defined or defined but not used??????????????????????
      
      //defined but not used?
      // function newReview() {
      //   const review= {
      //     id: this.state.reviews[this.state.reviews.length - 1].id + 1,
      //     rating: "",
      //     comment: "",
      //   }    
      //   this.setState({reviews: this.state.reviews.concat(review)})
      // };
      
      //not defined?
      // newReview =()=>{
      //   const review= {
      //     id: this.state.reviews[this.state.reviews.length - 1].id + 1,
      //     rating: "",
      //     comment: "",
      //   }    
      //   this.setState({reviews: this.state.reviews.concat(review)})
      // };
    };
  
  
  
  render() {
    return(
      <div className='contianer-fluid bg-secondary text-white'>
        <div>
          {this.state.reviews}
          {this.state.newReview}
          <Nav/> 
          <MovieList newReview = {this.newReview}/>
        </div>
      </div>
    )
  }
};


