import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'GET_RANDOM_IMAGES' })
      }

    render() {
        return (
            <ul>
                {this.props.reduxState.random.map((artwork) => {
                    return (
                        <div>
                            <img src={`${artwork.thumbnail.url}/full/150,/0/default.jpg`} alt="" />
                            {/* <h3>{artwork.title}</h3>
                            <h3>{artwork.artist_title}</h3> */}
                        </div>
                    )
                }
                )}
            </ul>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        reduxState: reduxState
    }
}

export default connect(mapStateToProps)(HomePage);