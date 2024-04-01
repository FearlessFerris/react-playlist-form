// Implementation of Song Component 

// Import Dependencies 
import React from 'react';

function Song({ name, album, artist, year }) {

    return(
        <div className = 'song'> 
            <h3> { name } </h3>
            <ul> 
                <li> { album } </li>
                <li> { artist } </li>
                <li> { year } </li>
            </ul>
        </div>
    )
}

export default Song;
