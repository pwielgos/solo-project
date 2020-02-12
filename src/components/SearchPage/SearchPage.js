import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResults from '../SearchResults/SearchResults.js';

class SearchPage extends Component {
    state = {
        search: '',
    }

    handleInputChange = (event) => {
        console.log('event.target.value', event.target.value);
        this.setState({
            search: event.target.value
        })
    }

    artworkSearch = () => {
       this.props.dispatch({
           type: 'GET_ARTWORK',
           payload: this.state.search
       }) 
       console.log('this.state.search');
    }
  
    render() {
        return (
            <div>
                <h1>Search</h1>
                <input type="text" onChange={this.handleInputChange}></input> 
                <button onClick={this.artworkSearch}>Search</button>
                {/* {this.props.reduxState.searchReducer.map((searchItem)=>{
                    return(
                        <>
                        <SearchResults artwork={searchItem}/>
                        </>
                    )
                    })} */}
            </div>
        )
    }
};

const mapStateToProps = reduxState => {
    return {
        reduxState: reduxState
    }
}

export default connect(mapStateToProps)(SearchPage);