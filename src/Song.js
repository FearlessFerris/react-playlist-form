// Implementation of Song Component 

// Import Dependencies 
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Song({ name, album, artist, year, id }) {

    const songId = id || uuidv4();

    return(
        <div className = 'song'> 
            <h3> { name } </h3>
            <ul> 
                <li> { album } </li>
                <li> { artist } </li>
                <li> { year } </li>
                <li> { songId } </li>
            </ul>
        </div>
    )
}

export default Song;
