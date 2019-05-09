import React from 'react';
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
            <div>
                    <div>{this.props.data.name}</div>
                    <img src={img} alt="no_photo"></img>
            </div>
        );
    }
}


Restaurant.propTypes = {
    
};

export default Restaurant
