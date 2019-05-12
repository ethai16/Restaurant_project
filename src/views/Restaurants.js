
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
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
            view: 'restaurants',
            currentPage: 1,
            active: 1
        }
        
    }

    componentDidMount = () =>{
            const config = { headers: {'user-key': 'd31eef6b1b9da6a1f098bba682d68f76'} }; 
            fetch(`https://developers.zomato.com/api/v2.1/search?start=${0}&count=20&sort=real_distance&order=desc&lat=${this.props.location.lat}&lon=${this.props.location.lng}`, config)
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
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.match.params.pageNumber !== prevProps.match.params.pageNumber) {
    //         const config = { headers: {'user-key': 'd31eef6b1b9da6a1f098bba682d68f76'} }; 
    //         fetch(`https://developers.zomato.com/api/v2.1/search?start=${(parseInt(window.location.pathname.slice(18,19))-1)*20}&count=20&sort=real_distance&order=desc&lat=${this.props.location.lat}&lon=${this.props.location.lng}`, config)
    //         .then(res => res.json())
    //         .then(
    //             (result)=>{
    //                 this.setState({
    //                     isLoaded: true,
    //                     restaurants: result.restaurants,
    //                     resultsFound: result.results_found
    //                 })
    //             },
    //             (error) =>{
    //                 this.setState({
    //                     isLoaded:true,
    //                     error
    //                 })
    //             }
    //         )
    //         window.scrollTo(0, 0)
    //     }
    //   }
    
    getData = (pageNumber) => {
            console.log(pageNumber)
            const config = { headers: {'user-key': 'd31eef6b1b9da6a1f098bba682d68f76'} }; 
            fetch(`https://developers.zomato.com/api/v2.1/search?start=${(pageNumber-1)*20}&count=20&sort=real_distance&order=desc&lat=${this.props.location.lat}&lon=${this.props.location.lng}`, config)
            .then(res => res.json())
            .then(
                (result)=>{
                    this.setState({
                        isLoaded: true,
                        restaurants: result.restaurants,
                        resultsFound: result.results_found,
                        active: pageNumber
                    })
                    console.log(this.state.active)
                },
                (error) =>{
                    this.setState({
                        isLoaded:true,
                        error
                    })
                }
            )
            window.scrollTo(0, 0)
    }


    render() {
        var restaurant = this.state.restaurants.map((entry,index) =>{
            return <Restaurant key ={index} data={entry.restaurant}/>
        })

        return (
            <div>
                {restaurant}
                <PaginationComp active = {this.state.active} getData = {this.getData} view = {this.state.view} resultsFound = {this.state.resultsFound} />
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


var connectedComponent = connect(mapStateToProps,null)(Restaurants)

export default connectedComponent