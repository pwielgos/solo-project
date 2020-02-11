import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchPage extends Component {
    state = {
        search: ''
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    handleClick = ()=>{
       this.props.dispatch({
           type: ''
       }) 
    }
  

    render() {
        return (
            <div>
                <header>
                <input></input>
                <button>Search</button>
                </header>
                {/* {this.props.reduxState.searchReducer.map((artwork) => {
                    return (
                        <div>
                            <img src={`${artwork.thumbnail.url}/full/150,/0/default.jpg`} alt="" />
                            <h1>{artwork.title}</h1>
                            <h1>{artwork.artist_title}</h1>
                        </div>
                    )
                }
                )} */}
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