import React from 'react';
import { Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class PaginationComp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: 1,
            checkLast: false
        }
    }

    goToFirst = () => {
        this.setState({
            active: 1
        })
    }

    goToLast = () => {
        this.setState({
            active: (Math.ceil(this.props.resultsFound/20))
        })
    }

    goToNext = () => {
        // if(this.state.active <= Math.ceil(this.props.resultsFound/20)){
        //     this.setState({
        //         active: (this.state.active + 1)
        //     })
        // }
        if(this.state.active < 5){
            this.setState({
                active: (this.state.active + 1)
            })
        }else{
            this.setState({
                checkLast: true
            })
        }
    }

    goBack = () => {
        if (this.state.active > 5){
            this.setState({
                active:(this.state.active - 1)
            })
        }
        
    }


    render() {
        let active = this.props.active;
        let items = [];
        let linkToFirst = `/${this.props.view}/page=1`
        let linkToBack = `/${this.props.view}/page=${this.state.active-1}`
        let linkToNext = `/${this.props.view}/page=${this.state.active+1}`
        // let linkToLast = `/${this.props.view}/page=${Math.ceil(this.props.resultsFound/20)}`
        let linkToLast = `/${this.props.view}/page=5}`



        // if(this.state.active <= Math.ceil(this.props.resultsFound/20)-4){
        //     for (let number = this.state.active; number <= (this.state.active+4); number++) {
        //         let correctPageLoop = `/${this.props.view}/page=${number}`
        //         items.push(
        //             <Pagination.Item href = {correctPageLoop}key={number} active={number === active} onClick = {this.makeActive.bind(this,number)}>
        //                 {number}
        //             </Pagination.Item>
        //         );
        //     }
        // }else{
        //     for (let number = this.state.active; number <= Math.ceil(this.props.resultsFound/20); number++) {
        //         let correctPageLoop = `/${this.props.view}/page=${number}`
        //         items.push(
        //             <Pagination.Item href = {correctPageLoop} key={number} active={number === active} onClick = {this.makeActive.bind(this,number)}>
        //                 {number}
        //             </Pagination.Item>
        //         );
        //     }
        // }

        for (let number = 1; number <= 5; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active} onClick = {()=>{this.props.getData(number)}}>
                    {number}
                </Pagination.Item>
            );
        }

        return (

            <div>
                <Link to = '/home'>home</Link>
                <Pagination>
                    <Link style = {styles.button} to = {linkToFirst} onClick={this.goToFirst}>{'<<'}</Link> 
                    <Link style = {styles.button} to = {linkToBack} onClick={this.goBack}>{'<'}</Link> 
                    {items}
                    <Link style = {styles.button} to = {linkToNext} onClick={this.goToNext}>{'>'}</Link> 
                    <Link style = {styles.button} to = {linkToLast} onClick={this.goToLast} >{'>>'}</Link> 
                </Pagination>
                <br />
            </div>
        );
    }
}

const styles = {
    button: {
        position: "relative",
        display: "block",
        padding: ".5rem .75rem",
        marginLeft: "-1px",
        lineHeight: "1.25",
        color: "#007bff",
        backgroundColor: "#fff",
        border: "1px solid #dee2e6",
        // pointerEvents: "none"
    }
}

PaginationComp.propTypes = {

};

export default PaginationComp
