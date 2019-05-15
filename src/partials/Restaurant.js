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
            <Card style = {{margin:'5vw'}}>  
                    <Card.Body>
                        <div style = {{fontWeight:'bold', color: 'red', fontSize:'2em'}}>{this.props.data.name}:</div>
                        <div>{this.props.data.cuisines}</div>
                    </Card.Body>
                    <Card.Body>
                        <div style = {{width:'30vw', height:'20vw', display: 'inline-block', backgroundImage: `url(${img})`, backgroundSize:'cover'}}></div>
                    </Card.Body>
            </Card>
        );
    }
}


Restaurant.propTypes = {
    
};

export default Restaurant
