const locationReducer = (state, action) => {
    if (state === undefined) {
        return {
            location: {
                lat: 0,
                lng: 0
            }
        }
    }

    switch(action.type){
        case "changeLocation":
            return {
                ...state,
                location: {
                    lat: action.location.lat,
                    lng: action.location.lng
                }
            }
        default:
            return state
    }
}

export default locationReducer