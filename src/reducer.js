export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after finished developing...
    token: 'BQDG2Z8EXDYB6xmFn3OKfPgEjxZ_FPLp2HMk2zuhs4BaNbKiXjJpitj8uQjxOACX92HY7CwCFBAuPvKTwRaMq1ak_fadRducArNl5csIaEIqTGvm--QZUzScYeTMFQ6EfaNEIKh9oEl0PEPJa3SjlSU0uz_c',
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'SET_USER': 
        return {
            ...state,
            user: action.user,
        };
        case 'SET_TOKEN':
        return{
            ...state,
            token: action.token
        };

        case 'SET_PLAYLISTS': 
        return{
            ...state,
            playlists: action.playlists,
        };

        default:
            return state;
    }
};

export default reducer;

