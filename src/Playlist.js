// Implementation of Playlist Component 

// Import Dependencies 
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
            year: songData.year,
            id: songData.id || uuidv4()
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
                { /* Map over the songs array and display a song component for each song created */ }
                { songs.map(( song, index ) => ( 
                    <Song key = { song.id } name = { song.name } album = { song.album } artist = { song.artist } year = { song.year } /> 
                ))}
            </div>
        </div>
    )
}

export default Playlist;
