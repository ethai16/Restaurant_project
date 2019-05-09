import React from 'react';
import { Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class PaginationComp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: parseInt(window.location.pathname.slice(18,19))
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
        if(this.state.active <= Math.ceil(this.props.resultsFound/20)){
            this.setState({
                active: (this.state.active + 1)
            })
        }
    }

    goBack = () => {
        if (this.state.active > 1){
            this.setState({
                active:(this.state.active - 1)
            })
        }
    }

    makeActive(number){
        this.setState({
            active: number
        })
        console.log(this.state.active)
    }

    render() {
        let active = this.state.active;
        let items = [];
        let checkLast = false;
        let linkToFirst = `/${this.props.view}/page=1`
        let linkToBack = `/${this.props.view}/page=${this.state.active}`
        let linkToNext = `/${this.props.view}/page=${this.state.active}`
        // let linkToLast = `/${this.props.view}/page=${Math.ceil(this.props.resultsFound/20)}`
        let linkToLast = `/${this.props.view}/page=4}`



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

        for (let number = 1; number <= 4; number++) {
            let correctPageLoop = `/${this.props.view}/page=${number}`
            items.push(
                <Pagination.Item href = {correctPageLoop} key={number} active={number === active} onClick = {this.makeActive.bind(this,number)}>
                    {number}
                </Pagination.Item>
            );
        }

        if(this.state.active === Math.ceil(this.props.resultsFound/20)){
            checkLast = true
        }


        

        return (

            <div>
                <Link to = '/home'>home</Link>
                <Pagination>
                    <Pagination.First href = {linkToFirst} onClick={this.goToFirst} />
                    <Pagination.Prev href = {linkToBack} onClick={this.goBack} />
                    {items}
                    <Pagination.Next href = {linkToNext} disabled={checkLast} onClick={this.goToNext} />
                    <Pagination.Last href = {linkToLast} onClick={this.goToLast} />
                </Pagination>
                <br />
            </div>
        );
    }
}


PaginationComp.propTypes = {

};

export default PaginationComp
