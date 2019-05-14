import React from 'react';
import {Card} from 'react-bootstrap'
import PropTypes from 'prop-types';


class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let img = 'https://b.zmtcdn.com/images/placeholder_200.png?output-format=webp';
        if (this.props.data.featured_image !== ''){
            img = this.props.data.featured_image
        }

        return (
            <Card>
                    <div>{this.props.data.name}:{this.props.data.cuisines}</div>
                    <img src={img} alt="no_photo"></img>
            </Card>
        );
    }
}


Restaurant.propTypes = {
    
};

export default Restaurant
