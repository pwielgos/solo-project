import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResults from '../SearchResults/SearchResults.js';
import './SearchPage.css';

class SearchPage extends Component {
    state = {
        searchQuery: '',
    }

    handleInputChange = (event) => {
        this.setState({
            searchQuery: event.target.value
        })
    }

    artworkSearch = () => {
        this.props.dispatch({
            type: 'GET_ARTWORK',
            payload: this.state.searchQuery
        })
    }

    handleImageClick = (selectedArtwork) => {
        this.props.dispatch({ type: 'GET_DETAILS', payload: selectedArtwork })
        this.props.history.push('/details')
    }

    render() {
        return (
            <div className="body">
                <h1>Search</h1>
                <header>
                <input type="text" placeholder="Search by keyword or artist" 
                    onChange={this.handleInputChange}></input>
                <button onClick={this.artworkSearch}>Search</button>
                </header>
                {this.props.reduxState.search.map((searchItem) => {
                    return (
                        <div className="flex-container">
                            {/* <SearchResults artwork={searchItem} /> */}
                            
                            <img className="item" src={`${searchItem.thumbnail.url}/full/,150/0/default.jpg`}
                            onClick={() => this.handleImageClick(searchItem)}/>
                            {/* <p>{searchItem.title}</p> */}
                            
                        </div>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        reduxState: reduxState
    }
}

export default connect(mapStateToProps)(SearchPage); 