import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

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

    render() {
        return (
            <div>
                {/* <Link to = "/restaurants/page=1">Find Restaurant's Around Me</Link> */}
            </div>
        );
    }
}


Home.propTypes = {
    
};

export default Home
