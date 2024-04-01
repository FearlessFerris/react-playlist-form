// Implementation of Playlist Component 

// Import Dependencies 
import React, { useState } from 'react';
import uuid from 'uuid/v4';

// Import Components 
import Song from './Song';


function Playlist() {
    // Initial State Variable 
    const INITIAL_STATE = {
        name: '',
        album: '',
        artist: '',
        year: ''
    };
    
    // Initialize Song State 
    const [ songData, setSongData ] = useState( INITIAL_STATE );
    const [ songs, setSongs ] = useState([]);

    // Handle Song Data 
    const handleSongData = ( e ) => {
        const { name, value } = e.target;
        console.log( name, value );
        setSongData( data => ({
            ...data,
            [ name ]: value
        }));
    } 

    // Handle Form Submit 
    const handleFormSubmit = ( e ) => {
        e.preventDefault(); // Don't forget to prevent the default form submit behavior 
        const newSong = { 
            name: songData.name,
            album: songData.album,
            artist: songData.artist,
            year: songData.year
        }
        setSongs( prevSongs => [ ...prevSongs, newSong ]); // Adds new song to array 
        setSongData( INITIAL_STATE ); // After form has been submited this will reset the form to initial state values of '' 
    }

    return(
        <div> 
            <form className = 'song-form' onSubmit = { handleFormSubmit }> 
                <div className = 'label-input-group'>
                <label> Song Name </label>
                <input 
                    name = 'name'
                    id = 'id'
                    placeholder = 'Song Name'
                    value = { songData.name }
                    onChange = { handleSongData }
                    />
                </div>
                <div className = 'label-input-group'>

                <label> Album </label>
                <input 
                    name = 'album'
                    id = 'album'
                    placeholder = 'Album'
                    value = { songData.album }
                    onChange = { handleSongData }
                    />
                </div>
                <div className = 'label-input-group'>

                <label> Artist </label>
                <input 
                    name = 'artist'
                    id = 'artist'
                    placeholder = 'Artist'
                    value = { songData.artist }
                    onChange = { handleSongData }
                    /> 
                </div>
                <div className = 'label-input-group'>
                    <label> Year </label>
                    <input
                        name = 'year'
                        id = 'year'
                        placeholder = 'Year'
                        value = { songData.year }
                        onChange = { handleSongData }
                    /> 
                </div>
                <div> 
                    <button> Create </button>
                </div>
            </form>

            <div> 
                { songs.map(( song, index ) => ( 
                    <div key = { index }>
                        <h3> { song.name } </h3>
                        <p> Album: { song.album } </p>
                        <p> Artist: { song.artist } </p>
                        <p> Year: { song.year } </p>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Playlist;
