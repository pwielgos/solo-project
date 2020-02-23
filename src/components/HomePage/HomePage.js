import React, { Component } from 'react';
import { connect } from 'react-redux';

import './HomePage.css';

class HomePage extends Component {
    // componentDidMount() {
    //     this.props.dispatch({ type: 'GET_RANDOM_IMAGES' })
    //   }
    componentDidMount(){
            this.props.dispatch({
                type: 'GET_ESSENTIALS',
            })
    }

    render() {
        return (
            <div className="body">
            {this.props.reduxState.search.map((searchItem) => {
                return (
                    <div className="flex-container"> 
                        <img className="item" src={`${searchItem.thumbnail.url}/full/,150/0/default.jpg`}/>
                    </div>
                )
            })}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        reduxState: reduxState
    }
}

export default connect(mapStateToProps)(HomePage);

// render() {
//     return (
//         <ul>
//             {this.props.reduxState.random.map((artwork) => {
//                 return (
//                     <div>
//                         <img src={`${artwork.thumbnail.url}/full/150,/0/default.jpg`} alt="" />
//                     </div>
//                 )
//             }
//             )}
//         </ul>
//     )
// }