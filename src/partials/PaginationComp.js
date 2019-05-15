import React from 'react';
import { Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PaginationComp = (props) => {
    
        let active = props.active;
        let items = [];

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
                <Pagination.Item key={number} active={number === active} onClick = {()=>{props.getData(number)}}>
                    {number}
                </Pagination.Item>
            );
        }
        return (
            <div>
                <Link to = '/home'>home</Link>
                <Pagination>
                    <Pagination.First onClick={()=>{props.getData(1)}}/>
                    <Pagination.Prev onClick={()=>{
                        if(active > 1){
                            props.getData(active-1)
                            }
                        }
                    }/>
                    {items}
                    <Pagination.Next onClick={
                        ()=>{
                            if(active < 5){
                                props.getData(active+1)
                                }
                            }
                        }
                    />
                    <Pagination.Last onClick={()=>{props.getData(5)}}/> 
                </Pagination>
                <br />
            </div>
        );
}

const styles = {

}

PaginationComp.propTypes = {

};

export default PaginationComp
