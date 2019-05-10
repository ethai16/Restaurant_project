export const changeLocation = (loc) => {
    return {
        type: 'changeLocation',
        location: {
            lat: loc.lat,
            lng: loc.lng 
        }
    }
}