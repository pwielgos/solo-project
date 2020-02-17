import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResults from '../SearchResults/SearchResults.js';

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
            <div>
                <h1>Search</h1>
                <header>
                <input type="text" onChange={this.handleInputChange}></input>
                <button onClick={this.artworkSearch}>Search</button>
                </header>
                {this.props.reduxState.search.map((searchItem) => {
                    console.log('map', searchItem.id);
                    
                    return (
                        <div className="flex-container">
                            {/* <SearchResults artwork={searchItem} /> */}
                            <img src={`${searchItem.thumbnail.url}/full/150,/0/default.jpg`}
                            onClick={() => this.handleImageClick(searchItem)}
                            />
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