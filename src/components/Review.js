//reviews (stars?)
//will need to be saved and added to review list
import React, { Component} from "react";


export default class Review extends Component {
    render() {
        return(
            <div className="card text-bg-dark">
                <div className="card-body">
                    <h5>{/* rating */}</h5> 
                    <p>{/* review text from input */}</p>
                </div>
            </div>
        );
    }
}