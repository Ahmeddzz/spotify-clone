{/* Client ID: a4232efdd3f34d01b690e30c0d1279c6 */}


  // https://developer.spotify.com/
  // documentation/web-playback-sdk/quick-start/#


  export const authEndpoint = "https://accounts.spotify.com/authorize";

  const redirectUri = "http://localhost:3001/";
  const clientId = "5b5cae108648448b9bb90baf8b5520d6";

  const scopes = [
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-state",
      "user-top-read",
      "user-modify-playback-state",
  ];


  export const getTokenFromUrl = () => {
      return window.location.hash
      .substring(1)
      .split('&')
      .reduce((initial, item) => {
          let parts = item.split('=');
          initial[parts[0]]=decodeURIComponent(parts[1]);
          return initial;

      }, {});
  };

  

  

  export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;