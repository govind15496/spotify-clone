export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // REMOVE after finished developing....
    // token: 'BQDV50P71JWFi4F43LvqEqkA5XiIkaqpMjiJA04N3B0Qhv-NZ1…f4_ofRgErVmBwR00TzrBv7ssBIxfuyXMZsiMLJUvp56gN0-x0',
};


const reducer = (state, action) => {
   
    

    // Action -> type, [payload]


    switch (action.type) {
        case 'SET_USER': 
        return {
            ...state,
            user: action.user
        };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
            
        default:
            return state;
    }
};


export default reducer;