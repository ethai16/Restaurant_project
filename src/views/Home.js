import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentLocation: ''
        }        
    }

    componentDidMount = () => {
        if (navigator.geolocation) {
            console.log('Geolocation is supported!');
            navigator.geolocation.getCurrentPosition(position=>{
                this.setState({
                    currentLocation: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                      }
                })
                console.log(this.state.currentLocation)
            })
          }else {
            console.log('Geolocation is not supported for this Browser/OS.');
        }
        
    }

    handleCurrentLocation = () => {

    }

    render() {
        console.log(this.props.location)
        return (
            <div>
                <Link to = "/restaurants/page=1" onClick = {()=>{this.props.onChangeLocation(this.state.currentLocation)}}>Find Restaurant's Around Me</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        location: {
            lat: state.location.lat,
            lng: state.location.lng
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeLocation: (location) => dispatch({
            type: 'changeLocation',
            location: {
                lat: location.lat,
                lng: location.lng
            }
        })
    }
}


var connectedComponent = connect(mapStateToProps,mapDispatchToProps)(Home)

export default connectedComponent
