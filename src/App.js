import React, {useEffect, useState} from "react";
import './App.css';
import {getTokenFromUrl} from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import {useDataLayerValue} from "./DataLayer";


import Login from "./Login";
import Player from "./Player";


const spotify = new SpotifyWebApi();


function App() {
  // useState() a short-term memory store, if refresh you use the stored value 
  
  const [{user, token}, dispatch] = useDataLayerValue(); 


// Run code based on a given condition
// []  run once,
// name, age, etc. runs everything one of these changes
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token){
      dispatch ({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token); 
      spotify.getMe().then(user =>{
        

        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });
    }

  }, []);



  return ( 
    <div className="app">
      {
        token?(
        <Player spotify ={spotify}/> 
        ) : (
          <Login />
        )

      }
    
    </div>
  );
}

export default App;
