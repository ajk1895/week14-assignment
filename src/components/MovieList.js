//container for movies
import React, { Component} from "react";
import Movie from "./Movie";
const synopP= "Will Turner teams up with Pirate Jack Sparrow to save Elizabeth Swan from cursed pirates."

export default class MovieList extends Component { 
    
    render() {        
        return(
            <div className="ms-3 me-3 col-sm-4">
                <Movie title="Pirates of the Caribbean: The Curse of the Black Pearl" synop={synopP}/>
            </div>
        );
    };
};
