// Implementation of Song Component 

// Import Dependencies 
import React from 'react';
import { v4 as uuid } from 'uuid';

function Song({ name, album, artist, year, id }) {

    return(
        <div className = 'song'> 
            <h3> { name } </h3>
            <ul> 
                <li> { album } </li>
                <li> { artist } </li>
                <li> { year } </li>
                <li> { id } </li>
            </ul>
        </div>
    )
}

export default Song;
