import React from 'react';
import {Card} from 'react-bootstrap'


const Restaurant = (props) => {
    let img = 'https://b.zmtcdn.com/images/placeholder_200.png?output-format=webp';

    if (props.data.featured_image !== '') {
        img = props.data.featured_image
    }
    return (
        <Card style={{ margin: '5vw' }}>
            <Card.Body>
                <div style={{ fontWeight: 'bold', color: 'red', fontSize: '2em' }}>{props.data.name}:</div>
                <div>{props.data.cuisines}</div>
            </Card.Body>
            <Card.Body>
                <div style={{ width: '30vw', height: '20vw', display: 'inline-block', backgroundImage: `url(${img})`, backgroundSize: 'cover' }}></div>
            </Card.Body>
        </Card>
    )
}



export default Restaurant
