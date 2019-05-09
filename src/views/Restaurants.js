import React from 'react';
import PropTypes from 'prop-types';
import Restaurant from '../partials/Restaurant'
import PaginationComp from '../partials/PaginationComp'

class Restaurants extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            currentLocation: '',
            restaurants:[],
            resultsFound: 0,
            view: 'restaurants'
        }
        
    }

    componentDidMount = () =>{
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
          }
          else {
            console.log('Geolocation is not supported for this Browser/OS.');
        }

        setTimeout(()=>{
            const config = { headers: {'user-key': 'd31eef6b1b9da6a1f098bba682d68f76'} }; 
            fetch(`https://developers.zomato.com/api/v2.1/search?start=${parseInt(window.location.pathname.slice(21,22))*20}&count=20&sort=real_distance&order=desc&lat=${this.state.currentLocation.lat}&lon=${this.state.currentLocation.lng}`, config)
            .then(res => res.json())
            .then(
                (result)=>{
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        restaurants: result.restaurants,
                        resultsFound: result.results_found
                    })
                },
                (error) =>{
                    this.setState({
                        isLoaded:true,
                        error
                    })
                }
            )
        },500)
          
    }


    render() {
        var restaurant = this.state.restaurants.map((entry,index) =>{
            return <Restaurant key ={index} data={entry.restaurant}/>
        })
        return (
            <div>
                {restaurant}
                <PaginationComp view = {this.state.view} resultsFound = {this.state.resultsFound} />
            </div>
        );
    }
}


Restaurants.propTypes = {
    
};

export default Restaurants
