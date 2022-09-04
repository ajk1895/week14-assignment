//rating system, 1 to 5 "stars"
import React, { Component} from "react";

export default class Stars extends Component {
    render() {
        
        //need the info from here to update the review component created on button click in ReviewForm
        
        return(
            <div className="text-center">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                    <label className="form-check-label" htmlFor="inlineRadio3">3</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"/>
                    <label className="form-check-label" htmlFor="inlineRadio3">4</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5"/>
                    <label className="form-check-label" htmlFor="inlineRadio3">5</label>
                </div>
            </div>
        );
    }
}